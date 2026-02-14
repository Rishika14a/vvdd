let currentPage = 1;

function nextPage() {
  document.getElementById("page" + currentPage).classList.remove("active");
  if (currentPage < 5) {
    currentPage++;
    document.getElementById("page" + currentPage).classList.add("active");
  }
}

const letters = [
`--- I love you ---❤️💋
[CAUTION: chadhivi navvaku pandhi😴!!]

with the kind of love that dreams of tomorrow.
Not just of fleeting moments or passing days,
but of waking up beside you,
laughing, crying, building a life together.
I want to choose you every day,
to stay with you even when it’s hard,
to hold onto you when the world feels heavy.
You are not just my heart’s desire
you are the part of my life I never want to lose.`,

`TO MY MOST FAVOURITE MAN 🥰![OFC maa nanna tarvta😁😒] 

Loving you feels like hope
I’m terrified to lose.
Every smile from you
settles something deep inside me,
every glance, every touch, every quiet moment
reminds me how much you matter.
Even in your silences, I feel you,
and every doubt you may carry
is met with the careful way
I hold you in my heart.
You are not just someone I love
you are someone I want to carry through life,
someone I want to be steady for,
someone I cannot imagine my world without.`,

`MY CUTEST PIE :)😘

I don’t ask you to be perfect.
I ask you to be present.
To stay when things feel uncertain,
to hold on when life gets heavy,
to not disappear when emotions overwhelm us.
Because you mean more to me
than a passing feeling or a fleeting thought
you are a place my heart rests in,
a safe space I keep quietly,
even when the world doesn’t make sense.
Your presence calms me, your laughter fills me,
and even your silences feel like a language
only my heart understands.`,

` NAA BANGARAMM💕💕💕

You meant more to me
than I can ever fully explain.
Not just in moments, not just in smiles
but in the quiet places where I imagined my life,
where I imagined you staying,
where I imagined us growing together.
Even on days I was afraid to admit it,
my heart always found you.
You are not just someone I love…
you are someone I cannot imagine living without.`,

`LAST LETTER MANCHIGA CHADHUVUU HEART PETTI!🙂‍↔️😚

Even if one day I say “leave,”
please don’t take it as truth.
Sometimes fear speaks louder than love,
and I get scared of wanting you
this much.
If I pull away,
it’s not because I care less
it’s because losing you
feels too heavy to imagine.
So I pretend distance will hurt less,
even though it won’t.
Please stay,
even when I’m quiet,
even when I act strong,
even when my words don’t match
what my heart is screaming.
I don’t want to lose you
like that—
through pride,
through misunderstandings,
through moments where I didn’t know
how to ask you to stay.
So if I ever say “go,”
look at my eyes, not my lips.
They’ll always be asking you
to remain.
Because you matter to me.
More than fear.
More than ego.
More than my inability
to say it perfectly.
And if staying is a choice,
I hope you choose it
not out of obligation,
but because you know
you are deeply wanted and very very loved here.`
];

let typing;
function openLetter(i) {
  clearInterval(typing);
  const modal = document.getElementById("modal");
  const textEl = document.getElementById("letterText");
  textEl.textContent = "";
  modal.classList.add("show");

  let text = letters[i];
  let idx = 0;

  typing = setInterval(() => {
    textEl.textContent += text.charAt(idx);
    idx++;
    if (idx >= text.length) clearInterval(typing);
  }, 35);
}

function closeLetter() {
  document.getElementById("modal").classList.remove("show");
}

function yes() {
  document.getElementById("page" + currentPage).classList.remove("active");
  currentPage = 5;
  document.getElementById("page5").classList.add("active");
  launchConfetti();
}

// 🎉 Confetti effect
function launchConfetti() {
  const duration = 3000;
  const end = Date.now() + duration;

  (function frame() {
    const colors = ['#ff0a54','#ff477e','#ff7096','#ff85a1','#fbb1bd'];
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    confetti.style.left = Math.random()*100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.opacity = 0.9;
    confetti.style.borderRadius = "50%";
    confetti.style.animation = "fall 3s linear forwards";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// 🙈 NO button jumps away + 🎵 Music fade-in
window.onload = () => {
  const noBtn = document.getElementById("noBtn");
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random()*80 + "vw";
    noBtn.style.top = Math.random()*80 + "vh";
  });

  const bgMusic = document.getElementById("bgMusic");
  bgMusic.volume = 0; // start silent

  document.body.addEventListener("click", () => {
    bgMusic.play().catch(() => {});
    // fade volume up gradually
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        bgMusic.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);
  }, { once: true });
};