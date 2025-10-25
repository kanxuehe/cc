export const allData = [
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'The amount of water, $W$, in litres, remaining in a cooking pot after it\nis placed onto a hot stove is given by the function\n\n$$\nW(t) = 40(0.75)^t,\\quad t\\geq 0\n$$\n\nwhere $t$ is the time in hours after\nthe pot is placed on the stove.\n\n- Find\n  \n  - the initial amount of water in the pot.\n  - the percentage of water that leaves the pot in the form of steam\neach hour. <span class="marks">[3]</span>\n\n\n- Calculate the amount of water remaining in the pot after $5$ hours.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - At $t=0$, we get\n\n    $$\n    \\begin{aligned}\n    W(0)&=40(0.75)^0\\\\[6pt]\n    &\\hspace{0.5em}\\answer{=40 \\text{ litres}}\\end{aligned}\n    $$\n\n  - At $t=1$, we get\n\n    $$\n    \\begin{aligned}\n    W(1)&=40(0.75)^1\\\\[6pt]\n    &=30 \\text{ litres}\\end{aligned}\n    $$\n\n    We can find the percentage\ndecrease between $t=0$ and $t=1$, as follows\n\n    $$\n    \\begin{aligned}\n    \\text{Percentage decrease}&=\\dfrac{40-30}{40}\\times 100\\%\\hspace{1cm}\\\\[6pt]\n    &\\hspace{0.5em}\\answer{=25\\%}\n    \\end{aligned}\n    $$\n\n\n- At $t=5$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.5cm}W(5)&=40(0.75)^5\\\\[6pt]\n  &\\hspace{0.5em}\\answer{=9.49 \\text{ litres}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 2',
    content:
      'The Burns, Gordons and Longstaff families make meal plans for their households. The table below shows the amount of carbohydrate, fat and protein, all measured in grams, consumed by the family over a single day. The table also shows the daily calories, measured in kcal, this equates to.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/350ffb2d-5f7c-4d42-9455-67a41e1ff452/images/8ca2d5dd-4221-43ed-b694-8407a3540349/1111a.JPG)\n\n\nLet $x$, $y$ and $z$ represent the amount of calories, in kcal, for $1$ g of carbohydrate, fat and protein respectively.\n\n- Write down a system of three linear equations in terms of $x$, $y$ and $z$ that represents the information in the table above. <span class="marks">[2]</span>\n\n- Find the values $x$, $y$ and $z$. <span class="marks">[2]</span>\n\n\nThe Howe family also plans meals. The table below shows the amount of carbohydrates, fat and protein consumed by the family over a single day.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/350ffb2d-5f7c-4d42-9455-67a41e1ff452/images/a0f40aa2-3fd5-4e46-b963-a74843eb2043/1111b.JPG)\n\n\n\n- Calculate the daily calories for the Howe family. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{align*}\n  \\tcbhighmath{\\begin{array}{rcccccl}\n  859x &+& 164y &+& 296z &=& 6561 \\\\[3pt]\n  1026x &+& 231y &+& 414z &=& 8543 \\\\[3pt]\n  595x &+& 217y &+& 112z &=& 4980\n  \\end{array}} \\hspace{0.6em}\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A2}}\n  \\end{align*}\n  $$\n\n- Using a G.D.C. the calories per gram are\n\n  $$\n  \\begin{align*}\n  \\text{Carbohydrates} &:\\hspace{0.75em} \\hspace{0.525em}\\tcbhighmath{3.70 \\text{ grams per calorie}} \\\\[6pt]\n  \\text{Fat} &:\\hspace{0.75em} \\hspace{0.525em}\\tcbhighmath{9.67 \\text{ grams per calorie}} \\\\[6pt]\n  \\text{Protein} &:\\hspace{0.75em} \\hspace{0.525em}\\tcbhighmath{6.07 \\text{ grams per calorie}} \\tag*{\\textbf{A2}}\n  \\end{align*}\n  $$\n\n- The daily calories for the Howe family are\n\n  $$\n  \\begin{align*}\n  1790\\times3.70 + 206\\times9.67 + 901\\times6.07 &= 14084.09 \\approx \\hspace{0.525em}\\tcbhighmath{14100}\\hspace{0.525em} \\text{ daily calories.} \\tag*{\\textbf{M1A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 3',
    content:
      'An ice cube was dropped into a cup of warm water. The weight of the ice\ncube, $W$, in grams, reduces as the ice cube dissolves in the water. The\nweight can be modelled by the following function, $W(t)$, where $t$ is\nthe time in seconds after the dissolving starts.\n\n$$\nW(t) =28(0.98)^t,\\quad t\\geq 0\n$$\n\n\n- Find\n  \n  - the initial weight of the ice cube.\n  - the percentage of the ice cube dissolving every $5$ seconds.\n<span class="marks">[3]</span>\n\n\n- Calculate the weight of the ice cube remaining after one minute.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - At $t=0$, we get\n\n    $$\n    \\begin{aligned}\n    W(0)&=28(0.98)^0\\\\[6pt]\n    &\\hspace{0.5em}\\answer{=28 \\text{ g}}\\end{aligned}\n    $$\n\n  - At $t=5$, we get\n\n    $$\n    \\begin{aligned}\n    W(5)&=28(0.98)^5\\\\[6pt]\n    &=25.3 \\text{ g}\\end{aligned}\n    $$\n\n    We can find the percentage\ndecrease between $t=0$ and $t=5$, as follows\n\n    $$\n    \\begin{aligned}\n    \\text{Percentage decrease}&=\\dfrac{28-25.3}{28}\\times 100\\%\\hspace{1cm}\\\\[6pt]\n    &\\hspace{0.5em}\\answer{=9.64\\%}\n    \\end{aligned}\n    $$\n\n\n- One minute is $60$ seconds. At $t=60$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1cm}W(60)&=28(0.98)^{60}\\\\[6pt]\n  &\\hspace{0.5em}\\answer{=8.33 \\text{ g}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 4',
    content:
      'In an ecology experiment, a number of mosquitoes are placed in a\ncontainer with water and vegetation. The population of mosquitoes, $P$,\nincreases and can be modelled by the function\n\n$$\nP(t) = 24\\times 4^{0.385t}, \\hspace{0.5em} t \\geq 0,\n$$\n\nwhere $t$ is\nthe time, in days, since the mosquitoes were places in the\ncontainer.\n\n- Find the number of mosquitoes:\n  \n  - initially placed in the container;\n  - in the container after $5$ days. <span class="marks">[4]</span>\n\n\n\nThe maximum capacity of the container is $5000$ mosquitoes.\n\n- Find the number of days until the container reaches its\nmaximum capacity. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- \n  - Evaluating $P(t)$ for $t = 0$, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.3em} P(0) &= 24\\times 4^{0.385(0)} \\\\[6pt]\n    &\\answer{= 24}\\end{aligned}\n    $$\n\n  - Evaluating $P(t)$ for $t = 5$, we obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.3em} P(5) &= 24\\times 4^{0.385(5)} \\\\[6pt]\n    &\\answer{\\approx 346}\\end{aligned}\n    $$\n\n\n- Solving the equation $P(t) = 5000$ for $t$, find\n\n  $$\n  \\begin{aligned}\n  24\\times 4^{0.385t} &= 5000 \\hspace{1.9em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{15.3em} \\answer{t \\approx 10.0 \\text{ days}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 5',
    content:
      'After $1960$, the economy growth in Australia has grown in an\nexponential fashion. Australian GDP per capita, $G(t)$, in United States\ndollars (USD) is modelled by the function\n\n$$\nG(t) = 1806 \\times (1.037)^t, \\\\[3pt]\n$$\n\nwhere $t$ is the number of\nyears since $1960$, and $t \\geq 0$.\n\n- Write down, in USD, Australian GDP per capita in $1960$. <span class="marks">[1]</span>\n\n- Find Australian GDP per capita in $1961$. <span class="marks">[1]</span>\n\n- Find the year for which Australian GDP per capita reaches\n$100\\hspace{0.15em}000$ USD. Give your answer correct to the\nnearest year. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- $\\answer{1806 \\text{ USD}}$\n- Evaluating $G(t)$ for $t = 1$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.7em} G(1) &= 1806 \\times (1.037) \\\\[6pt]\n  &= 1872.822 \\\\[6pt]\n  &\\answer{\\approx 1870 \\text{ USD}}\\end{aligned}\n  $$\n\n- Solving the equation $G(t) = 100\\hspace{0.15em}000$ for $t$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} 1806 \\times (1.037)^t &= 100\\hspace{0.15em}000 \\\\[6pt]\n  t &\\approx 110 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence Australian GDP per capita reaches $100\\hspace{0.15em}000$ USD\nin  $\\answer{2070}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 6',
    content:
      'The sound intensity level, $D$, in decibels (dB), can be modelled by the\nfunction\n\n$$\nD(I) = 10\\log_{10}(I) + 120, \\hspace{0.5em} I \\geq 0,\n\n$$\n\nwhere\n$I$ is the sound intensity, in watts per square meter\n(W $/$m$^2$).\n\n- A vacuum cleaner has a sound intensity of $1.6\\times10^{-5}$\nW $/$m$^2$. Calculate the intensity level of\nthe vacuum cleaner. <span class="marks">[2]</span>\n\n- A fire truck siren has an intensity level of $124$ dB. Find the\nsound intensity of the siren. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Evaluating $D(I)$ for $I = 1.6\\times10^{-5}$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.2em} D\\left(1.6\\times10^{-5}\\right) &= 10\\log_{10}\\left(1.6\\times10^{-5}\\right) + 120 \\\\[8pt]\n  &\\answer{\\approx 72.0 \\text{ dB}}\\end{aligned}\n  $$\n\n- Solving the equation $D(I) = 124$ for $I$, we obtain\n\n  $$\n  \\begin{aligned}\n  10\\log_{10}(I) + 120 &= 124 \\hspace{5.8em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{15em} \\answer{I \\approx 2.51 \\text{ W\\hspace{-0.1em}$/$m$^2$}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '4',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 7',
    content:
      'Oliver throws a coin from the open window onto flat horizontal ground in\nfront of his office building.\nThe path of the coin is modelled by the quadratic curve\n$y = 8 + 3x - 0.5x^2$ , where $x$ represents the\nhorizontal distance the coin is thrown and $y$ represents the height of\nthe coin above the ground. All distances are measured in metres. The\nwall of the building lies along the $y$-axis. The coin starts its flight\nat point A, reaches its maximum height at point B, and lands on the\nground at point C, as shown on the diagram below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/551a9c07-a2a1-4842-bd91-826ca4e267b9/images/be672629-0ece-49eb-b0ba-8f5c76b93870/3194f4c38ebe70fcc80ad86fb61b4fd630cd08ef.svg)\n\n\n\n- Write down the height in metres from which the coin was thrown.\n<span class="marks">[1]</span>\n\n- Calculate the maximum height, above the ground, reached by the coin.\n<span class="marks">[3]</span>\n\n- Find the horizontal distance from the base of the wall to the point\nat which the coin hits the ground. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- $\\answer{8\\hspace{0.25em}\\text{m}}$\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.5em} [\\text{max height}] &= [\\text{$y$-coordinate of B}] \\\\[6pt]\n  &\\answer{= 12.5\\hspace{0.25em}\\text{m}} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.2em} [\\text{horz dist travelled}] &= [\\text{$x$-coordinate of C}] \\\\[6pt]\n  &\\answer{= 8\\hspace{0.25em}\\text{m}} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 8',
    content:
      'The average daily hours of sunlight, $S$, during a 12-month period in a\nparticular town is given by the function\n\n$$\nS(t)=a\\cos(bt-180)+d,\n\n$$\n\nwhere\ntime, $t$, is measured in months, $a$ and $d$ are constants, and $b$ is\nmeasured in degrees.\nThe graph of $S$ versus $t$ is shown in the diagram below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/8a6e0bdd-88f9-4d71-8c34-6feeedb1d7e0/images/4284ab68-f212-4ca3-8085-e16d1ab13767/aff649079ad71d825a6dc0770f6728fb76b7cce5.svg)\n\n\n\n- Find the value of\n  \n  - $a$;\n  - $d$. <span class="marks">[2]</span>\n\n\n- Find the value of $b$. <span class="marks">[2]</span>\n\n- Write down the values of $t$ when the average daily sunlight is $10$\nhours. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - Using the graph of $S$ versus $t$, we get\n\n    $$\n    \\begin{aligned}\n    a &=\\dfrac{1}{2}(S_\\text{max}-S_\\text{min}) \\\\[6pt]\n    &=  \\dfrac{1}{2}(16-4) \\\\[6pt]\n    % &=  \\dfrac{1}{2}(12) \\\\[6pt]\n    & \\hspace{0.525em}\\answer{=6}\n    \\end{aligned}\n    $$\n\n  - Using the graph of $S$ versus $t$, we get\n\n    $$\n    \\begin{aligned}\n    d &=\\dfrac{1}{2}(S_\\text{max}+S_\\text{min}) \\\\[6pt]\n    &=  \\dfrac{1}{2}(16+4) \\\\[6pt]\n    %   &=  \\dfrac{1}{2}(20) \\\\[6pt]\n    & \\hspace{0.525em}\\answer{=10}\n    \\end{aligned}\n    $$\n\n\n- The period of $S$ is 12 months. Hence, we obtain\n\n  $$\n  \\begin{aligned}\n  b &=\\dfrac{\\ang{360}}{\\text{period}} \\\\[6pt]\n  &=  \\dfrac{\\ang{360}}{12} \\\\[6pt]\n  % &=  \\dfrac{1}{2}(12) \\\\[6pt]\n  & \\hspace{0.525em}\\answer{=\\ang{30}}\n  \\end{aligned}\n  $$\n\n- The graph of $S$ versus $t$ shows that $S(3) =10$ and $S(9) =10$.\nHence, the average daily sunlight hours is 10 for\n$\\answer{t=3\\hspace{0.525em}\\text{and}\\hspace{0.525em} t=9.}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 9',
    content:
      'A toy rocket is fired, from a platform, vertically into the air, its height above the ground after $t$ seconds is given by $s(t) = at^2 + bt + c$, where $a,b,c \\in \\mathbb{R}$ and $s(t)$ is measured in metres.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/bb0065fc-bc20-4898-a580-9d8d84f4cc81/images/26a3d948-9010-49f6-b623-7aac14c767bf/rocket.png)\n\n\nAfter $2$ second, the rocket is $28.3$ m above the ground; after $4$ seconds, $25.6$ m; after $5$ seconds, $14.7$ m.\n\n- \n  - Write down a system of three linear equations in terms of $a$, $b$ and $c$.\n  - Hence find the values of $a$, $b$ and $c$. <span class="marks">[3]</span>\n\n\n- Find the height, above the ground, of the platform. <span class="marks">[1]</span>\n\n- Find the time it takes for the rocket to hit the ground. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - We have\n\n\n  $$\n  \\begin{align*}\n  \\tcbhighmath{\\begin{array}{rcccccl}\n  4a &+& 2b &+& c &=& 28.3 \\\\[3pt]\n  16a &+& 4b &+& c &=& 25.6 \\\\[3pt]\n  25a &+& 5b &+& c &=& 14.7\n  \\end{array}} \n  \\tag*{\\textbf{A2}}\n  \\end{align*}\n  $$\n\n  \n  - Using a G.D.C. we find $\\answer{a = -3.18, \\hspace{0.25em} b = 17.8, \\hspace{0.25em} c = 5.53}$\n\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Evaluating $s(t)$ at $t = 0$, we obtain the height of the platform\n\n\n$$\n\\begin{align*}\n\\hspace{7.2em} s(0) &= -3.18(0)^2 + 17.8(0) + 5.53 \\tag*{\\textbf{A1}}\\\\[6pt]\n&\\hspace{0.275em}\\answer{= 5.53 \\text{ m}}\n\\end{align*}\n$$\n\n\n- Solving the equation $s(t) = 0$ for $t$, we find\n\n  $$\n  \\begin{align*}\n  -3.18t^2 + 17.8t + 5.53 &= 0 \\hspace{10.8em}\\tag*{\\textbf{M1}}\\\\\n  t&=-0.295..., 5.8925...\\hspace{3em} [\\text{by using G.D.C.}]\n  \\end{align*}\n  $$\n\nThe value of $t$ must be positive\n\n  $$\n  \\begin{equation*}\n  \\answer{t =5.89 \\text{ seconds}} \\tag*{\\textbf{A1}}\n  \\end{equation*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 10',
    content:
      'A population of $50$ hamsters was introduced to a new town. One month\nlater, the number of hamsters was $62$. The number of hamsters, $P$, can\nbe modelled by the function\n\n$$\nP(t) = 50\\times b^t,\\hspace{0.5em} t\\geq0, \\\\[3pt]\n$$\n\nwhere $t$ is the\ntime, in months, since the hamsters were introduced to the town.\n\n- Find the value of $b$. <span class="marks">[2]</span>\n\n- Calculate the number of hamsters in the town after $6$ months.\n<span class="marks">[2]</span>\n\n\nA wildlife specialist estimates that the town has enough drink and food\nto support a maximum population of $2000$ hamsters.\n\n- Calculate the number of months it takes for the hamster\npopulation to reach this maximum. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Solving the equation $P(1) = 62$ for $b$, we get\n\n  $$\n  \\begin{aligned}\n  50\\times b^1 &= 62 \\hspace{2.1em} \\\\[6pt]\n  b &= \\dfrac{62}{50} \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{1.4em}\\answer{b = 1.24}\n  $$\n\n- Evaluating $P(t)$ for $t = 6$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.2em} P(6) &= 50\\times(1.24)^6 \\\\[6pt]\n  &\\answer{\\approx 182}\\end{aligned}\n  $$\n\n- Solving the equation $P(t) = 2000$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  50\\times(1.24)^t &= 2000 \\hspace{3.1em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{15.6em} \\answer{t \\approx 17.1 \\text{ months}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 11',
    content:
      'The average time, $T$, in seconds, it takes for a customer to find their\nfavourite menu item in an alphabetical menu list can be modelled by the\nfunction\n\n$$\n\\begin{aligned}\nT(n) &= \\dfrac{3}{2}\\log_2(n+1), \\hspace{0.5em} n \\geq 1,\\end{aligned}\n$$\n\nwhere $n$ is the number of different menu items in the list.\nMehmet visits Taste of Adana Restaurant for the first time to have a\nlunch.\n\n- The restaurant serves $10$ different fresh salads. Find the time it\ntakes for Mehmet to find Persian Salad in the Fresh Salads section\nof the menu list. <span class="marks">[2]</span>\n\n- It takes $7.5$ seconds for Mehmet to find Lamb Chops Kebab in the\nAdana Kebab section of the menu list. Find the number of different\nkebab dishes served by the restaurant. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Evaluating $T(n)$ for $n = 10$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} T(10) &= \\dfrac{3}{2}\\log_2(10+1) \\\\[6pt]\n  &\\answer{\\approx 5.19 \\text{ seconds}}\\end{aligned}\n  $$\n\n- Solving the equation $T(n) = 7.5$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{3}{2}\\log_2(n+1) &= 7.5 \\hspace{6.1em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{9.45em} \\answer{n = 31} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '4',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 12',
    content:
      'An eagle is sitting in her nest and scanning the area for prey.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/36821331-1fa8-495a-bc0b-36afa80ad28c/images/beb96113-bce6-4e9f-96f9-57c723565e26/eagle.png)\n\n\nThe height, $h$, of the eagle above the ground, in metres, is modelled by the following quadratic function.\n$h(t)=1.8t^2-8.7t+14$, $t \\geq 0$\nwhere $t$ is the time in seconds after the eagle begins to move.\n\n- Write down the height above the ground of the eagles nest. <span class="marks">[1]</span>\n\n- The eagle sees a dormouse and swoops down to try and catch it, however, the dormouse runs away and the eagle returns back to the nest.\n  \n  - How high above the ground was the eagle when it turned around and went back to the nest?\n  - How long does it take for the eagle to return to the nest, from the time it left the nest? <span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- The eagle is initially in her nest, that is at $t=0$. Therefore her height is\n\n  $$\n  \\begin{align*}\n      h(0)&=1.8\\times(0)^2-8.7\\times(0)+14\\\\\n      &=14\n  \\end{align*}\n  $$\n\nThe nest is $\\answer{14\\,\\text{m}}$ above the ground.\n- \n  - The eagle turns around and returns to the nest at the minimum point of $h(t)$ with the $y$-coordinate being the height above the ground at this moment.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/36821331-1fa8-495a-bc0b-36afa80ad28c/images/b14f56e1-7645-4a85-a4f1-c17abecdf0c8/para1.png)\n\n\n    The eagle was $\\answer{3.49\\,\\text{m}}$ above the ground when it turned around.\n  - The nest is $14$m above the ground. By solving $h(t)=14$ we can find the time the eagle arrives back at the nest.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/36821331-1fa8-495a-bc0b-36afa80ad28c/images/e5dafd1a-8037-4edf-9ab2-63ad77102b02/para2.png)\n\n\n    The eagle took $\\answer{4.83\\,\\text{s}}$ to return to the nest.\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 13',
    content:
      'The orbital velocity, $v$, of a spacecraft in km/s is given by\n\n$$\nv = -0.0098t + c \\ln R,\n$$\n\nwhere $t$ is the firing time in seconds, $c$\nis the exhaust velocity in km/s and $R$ is the mass ratio.\nIf $R=30$, find\n\n- The orbital velocity, $v$, after a firing time of 150 seconds and an\nexhaust velocity of 3 km/s. <span class="marks">[2]</span>\n\n- The exhaust velocity, $c$, of the spacecraft traveling at an orbital\nvelocity of $9.5 \\text{ km/s}$ after a firing time of 150 seconds.\n<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Substituting in $t=150$, $c=3$ and $R=30$, we get\n\n  $$\n  \\begin{aligned}\n  v &= -0.0098(150) + (3) \\ln (30)\\hspace{0.5cm}\\\\[6pt]\n  &\\hspace{0.35em}\\answer{ \\approx 8.73 \\text{ km/s}}\\end{aligned}\n  $$\n\n- Substituting in $v=9.5$, $t=150$ and $R=30$, we can solve for $c$\n\n  $$\n  \\begin{aligned}\n  9.5 &= -0.0098(150) + c \\ln (30)\\hspace{0.5cm}\\\\[8pt]\n  c \\ln (30) &= 9.5 + 0.0098(150)\\\\[8pt]\n  c &= \\dfrac{9.5+0.0098(150)}{\\ln (30)}\\\\[8pt]\n  &\\hspace{0.35em}\\answer{ \\approx 3.23 \\text{ km/s}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 14',
    content:
      'In the realm of Artificial Intelligence (AI), machine learning models are trained using data sets. The time taken to train a machine learning model is directly proportional to the size of the training data set. This is shown by the following:\n\n$$\n\\begin{align*}\nt &\\propto x\n\\end{align*}\n$$\n\nWhere $t$ is training time in hours, and $x$ is the size of the training data set in gigabytes.\nIt is known that a certain machine learning model takes $15$ hours to train using a data set of size $100$ gigabytes.\n\n- Find an equation for $t$ in terms of $x$. <span class="marks">[2]</span>\n\n- If a dataset of 250 gigabytes is used, determine the expected training time. <span class="marks">[2]</span>\n\n\nThe larger the data set that is used for training, the more effective the machine learning model is deemed to be.\nA new and improved training model has been developed, so that a machine learning model can be trained in the same amount of time as the previous model, using larger data sets. The equation for the new model is $t=0.1x$.\n\n- Given a training time of $20$ hours, determine the difference in the size of the data sets between the first and second machine learning models. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{align*}\n  t &= kx\n  \\end{align*}\n  $$\n\n  And if $x=100$, then $t=15$:\n\n  $$\n  \\begin{align*}\n  15 &= 100k \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Hence $k=0.15$ and we have $\\answer{t = 0.15x}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\\end{aligned}  \n  $$\n\n- Substituting $x=250$ into our equation from part (a), we have\n\n  $$\n  \\begin{align*}\n  t &= 0.15 \\times 250 \\tag*{\\textbf{(M1)}} \n  \\end{align*}\n  $$\n\n  $\\answer{\\text{The expected training time is $37.5$ hours.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\\end{aligned}  \n  $$\n\n- Using the first model, with $t=20$, we have\n\n  $$\n  \\begin{align*}\n  20 &= 0.15x \\tag*{\\textbf{(M1)}} \\\\[8pt]\n  x&\\approx 133 \\text{ gigabytes}\n  \\end{align*}\n  $$\n\n  Using the second model, with $t=20$, we have\n\n  $$\n  \\begin{align*}\n  20 &= 0.1x \\tag*{\\textbf{(M1)}} \\\\[8pt]\n  x&= 200 \\text{ gigabytes}\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{The difference in data set sizes is approximately $67$ gigabytes.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\\end{aligned}  \n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 15',
    content:
      'The water depth, $D$, in metres, in a harbour on a particular day can be\nmodelled by the equation\n\n$$\nD = 2.5\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t) + 5, \\hspace{0.5em} 0 \\leq t \\leq 24, \\\\[3pt]\n$$\n\nwhere $t$ is the elapsed time, in hours, since midnight.\n\n- Draw the graph of $D$ versus $t$ on the grid below. <span class="marks">[2]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/847eec72-676b-4606-a4fb-3dcfedc9b6da/images/4265cedf-520e-4467-bdb0-2d56bcfc7630/19fd3a817fff397619c38bc3f6d8f3794089c50d.svg)\n\n\n- Find the lowest and highest depths of water in the harbour, and the\ntimes when they occur. <span class="marks">[2]</span>\n\n- A large yacht has a draught of $3$ metres. Decide whether the yacht\nwill be able to enter the harbour at $5$ pm. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- If we draw the graph of $D$ versus $t$ on the grid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/847eec72-676b-4606-a4fb-3dcfedc9b6da/images/ba52a231-78e9-46b9-857b-1237e71c6260/99ad31616997cbd93f3b2bcca5b2e21cec1a56b5.svg)\n\n\n- From the graph of $D$ versus $t$ on the grid above, we have\n\n  $$\n  \\begin{aligned}\n  \\answer{D_{\\text{min}} = 2.5 \\text{ m}}\\hspace{0.525em} &\\text{ when }\\hspace{0.525em}\\answer{t = 6, 18} \\\\[6pt]\n  \\hspace{4.2em} \\answer{D_{\\text{max}} = 7.5 \\text{ m}}\\hspace{0.525em} &\\text{ when }\\hspace{0.525em}\\answer{t = 0, 12, 24}\\end{aligned}\n  $$\n\n- Evaluating $D$ when $t = 17$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} D &= 2.5\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times 17) + 5 \\\\[6pt]\n  &= 2.5\\cos 5\\ang{10} + 5 \\\\[6pt]\n  &\\approx 2.83\\text{ m} \\\\[6pt]\n  &< 3 \\text{ m}\\end{aligned}\n  $$\n\n  Hence the yacht\n$\\answer{\\text{will not be able}}$\nto enter the harbour at $5$ pm.\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 16',
    content:
      'The water depth, $D$, in metres, in a harbour on a particular can be\nmodelled by the equation\n\n$$\nD = 3\\sin\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t) + 5, \\hspace{0.5em} 0 \\leq t \\leq 24, \\\\[3pt]\n$$\n\nwhere $t$ is the elapsed time, in hours, since midnight.\n\n- Draw the graph of $D$ versus $t$ on the grid below. <span class="marks">[2]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9aa0d706-15a7-45ce-b7c4-c439903d95d0/images/88525833-f18f-4bc6-8659-178e0c8217ce/bc607b763c6a7abff0abf4c7db110b192240d1a3.svg)\n\n\n- Find the lowest and highest depths of water in the harbour, and the\ntimes when they occur. <span class="marks">[2]</span>\n\n- A large boat has a draught of $2.5$ metres. Decide whether the boat\nwill be able to enter the harbour at $8$ pm. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- If we draw the graph of $D$ versus $t$ on the grid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9aa0d706-15a7-45ce-b7c4-c439903d95d0/images/c2909ae5-a8e9-4c71-8012-36bfe1b65413/5c4bc36227599f18aecea5fee37d5db9b328bd33.svg)\n\n\n- From the graph of $D$ versus $t$ on the grid above, we have\n\n  $$\n  \\begin{aligned}\n  \\answer{D_{\\text{min}} = 2 \\text{ m}}\\hspace{0.525em} &\\text{ when }\\hspace{0.525em}\\answer{t = 9, 21} \\\\[6pt]\n  \\hspace{1.35em} \\answer{D_{\\text{max}} = 8 \\text{ m}}\\hspace{0.525em} &\\text{ when }\\hspace{0.525em}\\answer{t = 3, 15}\\end{aligned}\n  $$\n\n- Evaluating $D$ when $t = 20$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.5em} D &= 3\\sin\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times 20) + 5 \\\\[6pt]\n  &= 3\\sin 600\\text{\\textdegree} + 5 \\\\[6pt]\n  &\\approx 2.40\\text{ m} \\\\[6pt]\n  &< 2.5 \\text{ m}\\end{aligned}\n  $$\n\n  Hence the boat\n$\\answer{\\text{will not be able}}$\nto enter the harbour at $8$ pm.\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 17',
    content:
      'The size of the trunk diameter of a chestnut oak tree, $d$, in\ncentimetres, can be modelled by the function\n\n$$\nd(t) = 9\\ln(0.25\\hspace{0.05em}t), \\hspace{0.5em} t \\geq 5, \\\\[3pt]\n$$\n\nwhere $t$ is the age, in years, of the tree.\n\n- Find the size of the trunk diameter of a $10$-year-old chestnut oak\ntree.<span class="marks">[2]</span>\n\n- The size of the trunk diameter of a chestnut oak tree is\n$15$ cm. Find its age. <span class="marks">[2]</span>\n\n\nA chestnut oak tree can be harvested for wood when the size of its trunk\ndiameter reaches $20$ cm.\n\n- Find the age of the chestnut oak tree when it is old enough\nto be harvested for timber. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Evaluating $d(t)$ for $t = 10$, we get\n\n  $$\n  \\begin{aligned}\n  d(10) &= 9\\ln(0.25(10)) \\\\[6pt]\n  &\\answer{= 8.25 \\hspace{0.25em}\\text{ cm}}\\end{aligned}\n  $$\n\n- Solving the equation $d(t) = 15$ for $t$, we obtain\n\n  $$\n  \\begin{aligned}\n  9\\ln(0.25\\hspace{0.05em}t) &= 15 \\hspace{7em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.1em} \\answer{t = 21.2 \\text{ years}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Solving the equation $d(t) = 20$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  9\\ln(0.25\\hspace{0.05em}t) &= 20 \\hspace{7em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.1em} \\answer{t = 36.9 \\text{ years}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 18',
    content:
      'A water tank has a float valve that allows water to enter while the tank is not full.  Over time, the float valve reduces the water flow until the tank is almost at its maximum capacity.\nThe amount of water in the tank, in litres, is given by the function $W(t)=5\\,000-C\\left(1.04^{-t}\\right)$\nwhere $t$ is minutes after the tank starts to fill.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b93229be-02cb-4ca6-90cd-091a590021f8/images/206420d5-addd-4321-a0d4-63591b3fa52a/779.JPEG)\n\n\n\n- Given that the tank was initially empty, find the value of $C$.<span class="marks">[2]</span>\n\n- State what the horizontal asymptote represents in the context of the question.<span class="marks">[1]</span>\n\n- Find the total amount of water in the tank after one and half hours. Give your answer in cubic metres. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Substituting $t=0$, and letting $W(0)=0$, to solve for $C$, we get\n\n  $$\n  \\begin{align*}\n  0 &= 5\\hspace{0.15em}000 - C(1.04^{-0}) \\tag*{\\textbf{(M1)}} \\\\[5pt]\n  &= 5\\hspace{0.15em}000-C \\\\[7pt]\n  &\\hspace{-0.8em}\\tcbhighmath{C = 5\\hspace{0.15em}000} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The horizontal asymptote represents the maximum capacity of the tank, which is $5\\,000$ litres.\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{R1}}\n  \\end{align*}\n  $$\n\n- First, we must convert the given time to minutes, because minutes is the unit used in the question.\n\n  $$\n  \\begin{align*}\n      1.5\\text{ hours}&= 90\\text{ minutes}\n  \\end{align*}\n  $$\n\n  Then the amount of water, in litres, after 90 minutes is\n\n  $$\n  \\begin{align*}\n      W(90) &= 5\\,000-5\\,000\\left(1.04^{-90}\\right) \\tag*{\\textbf{(M1)}}\\\\[5pt]\n      &= 4\\hspace{0.15em}853.45... \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Now we must convert from litres to cubic metres, using the fact that $1\\,000$ litres $=1\\,\\text{m}^3$. We can divide the amount in litres by $1\\,000$.\n  Expressed in cubic metres, we obtain\n\n  $$\n  \\begin{align*}\n  4\\hspace{0.15em}853.45\\text{ litres} &= \\enskip\\, \\tcbhighmath{4.85\\hspace{0.25em}\\textrm{m}^3\\,(3\\,\\text{s.f.)}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 19',
    content:
      'An owl takes off from from a tree branch and flies higher into the sky. Its height above the ground after $t$ seconds, where $t\\geq 0$, is given by $s(t) = at^3 + bt^2 + ct+d$, where $a,b,c,d \\in \\mathbb{R}$ and $s(t)$ is measured in metres.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/f2f10540-8736-484c-b76e-293673a1a920/images/e10ba209-e2d4-4ca9-a89f-fc01ced21fb2/owl.png)\n\n\nInitially the owl is $12\\,$ metres above the ground.\n\n- Write down the value of $d$. <span class="marks">[1]</span>  \n\nAfter $1$ second, the owl is $19.8$ m above the ground; after $2$ seconds, $34.5$ m; after $4$ seconds, $22.8$ m.\n\n- \n  - Write down a system of three linear equations in terms of $a$, $b$ and $c$.\n  - Hence find the values of $a$, $b$ and $c$.  <span class="marks">[3]</span>\n\n\n\nAfter some time the owl reaches a maximum height. At this time it spots some prey at ground level and then immediately swoops down to catch it.\n\n- \n  - Find the maximum height of the owl above the ground as it spots the prey.\n  - Find the time it catches the prey. <span class="marks">[2]</span>\n\n\n',
    markScheme:
      '\n- $d=12$ m\n\n\n$$\n\\begin{align*}\n    \\tag*{\\textbf{A1}}\n\\end{align*}\n$$\n\n\n- \n  - We have\n\n\n  $$\n  \\begin{align*}\n  \\answer{\\begin{array}{rcccccccl}\n  a &+& b &+& c &+& 12&=& 19.8 \\\\[3pt]\n  8a &+& 4b &+& 2c &+& 12&=& 34.5 \\\\[3pt]\n  64a &+& 16b &+& 4c &+& 12&=& 22.8\n  \\end{array}}\n  \\tag*{\\textbf{M1A1}}\n  \\end{align*}\n  $$\n\n  \n  - Using a G.D.C. we can find the values of the parameters, $a=-2.575$, $b=11.175$ and $c=-0.8$.\\[6pt]\nThese values can be rounded to three significant figures giving\n$\\answer{a = -2.58, \\hspace{0.25em} b = 11.2, \\hspace{0.25em} c = -0.8} $\n\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- \n  - The coordinates of the local maximum of when the owl spots the prey is $(2.857..., 40.96...)$.\n    The $y-$coordinate of this local maximum gives the height of the owl as it spots the prey.\\[6pt]\nHence the owl is at a height of $\\answer{41.0\\,\\text{m}}$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - The owl catches the prey when the height of the owl is zero, i.e. $s(t)=0$ when $t>0$. This can be found with a G.D.C., $(4.501..., 0)$. With the $x-$coordinate being the time.\n    Hence the owl catches the prey at $\\answer{t=4.50\\,\\text{s}}$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 20',
    content:
      'The diagram below shows the graph of a quadratic function\n$f(x) = 2x^2 + bx + c$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/1f982a52-59ba-4f95-a36a-b780904e0f9b/images/45767584-5045-4282-ac7c-db20e0fb8792/75e0c507b59edc93cc9f79e429c580e90c045817.svg)\n\n\n\n- Write down the value of $c$. <span class="marks">[1]</span>\n\n- Find the value of $b$ and write down $f(x)$. <span class="marks">[3]</span>\n\n- Calculate the coordinates of the vertex of the graph of $f$.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- $\\answer{c = -30}$\n- The graph of $f$ passes through the point P$(3,0)$.\nHence, using the coordinates of P, we get\n\n  $$\n  \\begin{aligned}\n  f(3) &= 0 \\hspace{3em} \\\\[6pt]\n  2(3)^2 + b(3) - 30 &= 0 \\\\[6pt]\n  18 + 3b - 30 &= 0 \\\\[6pt]\n  3b - 12 &= 0 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{4em} \\answer{b = 4}\n  $$\n\n  Hence we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.4em} \\answer{f(x) = 2x^2 + 4x - 30}\\end{aligned}\n  $$\n\n- The axis of symmetry of the graph of $f$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.5em}  x &= -\\dfrac{b}{2a} \\\\[6pt]\n  x &= -\\dfrac{4}{2(2)} \\\\[8pt]\n  x &= -1\\end{aligned}\n  $$\n\n  Evaluating $f(x)$ for $x = -1$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.65em} f(-1) &= 2(-1)^2 + 4(-1) - 30 \\\\[6pt]\n  &= -32\\end{aligned}\n  $$\n\n  Hence the coordinates of the vertex are\n$\\answer{(-1,-32)}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 21',
    content:
      'The tip of a large wind turbine\'s blade rotates at a constant speed on a\nwindy day. Its height, $H$ , in metres, above\nthe ground is modelled by the function\n\n$$\nH(t) = 52\\sin\\hspace{0.15em}(\\ang{60}\\hspace{-0.15em}\\times t) + 80,\n$$\n\nwhere $t$ is the elapsed time, in seconds, since the turbine was\naccelerated to its max speed.\n\n- Write down the minimum height of the blade\'s tip above the ground.\n<span class="marks">[2]</span>\n\n- Find the height of the blade\'s tip above the ground after $8$\nseconds. <span class="marks">[2]</span>\n\n- Find the time it takes for the blade\'s tip to complete one full\nrevolution. <span class="marks">[2]</span>\n\n',
    markScheme:
      "\n- The min value of the sine function is $-1$.\nHence the min height of the blade's tip is\n\n  $$\n  \\begin{aligned}\n  H_{\\text{min}} &= 52(-1) + 80 \\hspace{1.7em} \\\\[6pt]\n  &\\answer{= 28\\text{ m}}\\end{aligned}\n  $$\n\n- Evaluating $H(t)$ for $t = 8$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.5em} H(8) &= 52\\sin\\hspace{0.15em}(\\ang{60}\\hspace{-0.15em}\\times 8) + 80 \\\\[6pt]\n  &= 52\\sin \\ang{480} + 80 \\\\[6pt]\n  &\\answer{\\approx 125\\text{ m}}\\end{aligned}\n  $$\n\n- If we draw the graph of $y = D(t)$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/345633bb-e844-436b-bd39-eff8642672ef/images/5f3d01f7-4c01-4f77-b034-46af9d83cc7a/279de316931380f9a5da6848695c261465d527a8.svg)\n\n\n  Hence it takes\n$\\answer{6 \\text{ seconds}}$\nfor the blade's tip to complete one full revolution.\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 22',
    content:
      'The magnitude of an earthquake, $M$, on the Richter scale, can be\nmodelled by the function\n\n$$\nM(E) = \\dfrac{2}{3}\\log_{10}(E) - 3.2, \\\\[3pt]\n$$\n\nwhere $E$ is the\namount of energy, in joules, released by the earthquake.\n\n- Find the magnitude of an earthquake which releases\n$6.3\\times10^{13}$ joules of $\\text{energy}$. <span class="marks">[2]</span>\n\n\nThe Great Chilean Earthquake of $1960$, the most powerful earthquake\nrecorded in the $20$th century, had a magnitude of $9.5$ on the Richter\nscale.\n\n- Find the amount of energy, in joules, released by the Great\nChilean $\\text{Earthquake}$. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Evaluating $M(E)$ for $E = 6.3\\times10^{13}$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{6em} M(E) &= \\dfrac{2}{3}\\log_{10}(6.3\\times10^{13}) - 3.2 \\\\[6pt]\n  &\\answer{\\approx 6.00}\\end{aligned}\n  $$\n\n- Solving the equation $M(E) = 9.5$ for $E$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{2}{3}\\log_{10}(E) - 3.2 &= 9.5 \\hspace{7.85em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{14.2em} \\answer{E \\approx 1.12\\times10^{19} \\text{ joules}} \\hspace{2em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '4',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 23',
    content:
      'Jack, a volleyball player, serves the ball with a trajectory modelled by the function\n\n$$\nh_1(x)=-0.12x^2+x+0.725\n$$\n\nwhere $h$ is the height of the ball above the ground, in metres, and $x$ is the horizontal distance from the serving point, in metres.\n\n- Find the height of the ball when Jack makes his serve (i.e. the height above the ground at the point where he connects with the ball).<span class="marks">[2]</span>  \n\nUnfortunately, the serve is short and misses. For his next attempt, Jack will serve the ball $c$ metres higher at the serving point, so that the ball has the same trajectory (only the vertical height changes, increasing by $c$ metres).\n\n- Write down a second function, $h_2(x)$, modelling the new path of the ball in terms of $x$ and $c$.<span class="marks">[1]</span>\n\n- \n  - Calculate  the value of $c$, if the horizontal distance is $10$ metres from the serving point to the point where the ball would hit the ground.\n  - Determine the vertical height of the ball from which Jack makes his successful serve.<span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- Letting $x=0$ and solving for $h_1(0)$, we get\n\n  $$\n  \\begin{align*}\n  h_1(x) &= -0.12x^2+x+0.725 \\\\[6pt]\n   h_1(0) &= -0.12(0)^2+(0)+0.725 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 0.725 \\\\[6pt] \n  \\end{align*}\n  $$\n\n  Therefore the ball was served at a height of $\\answer{\\text{$0.725$ metres}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- As $c$ is a vertical height, we get\n\n  $$\n  \\begin{align*}\n  &\\hspace{-0.3em}\\tcbhighmath{h_2(x)=-0.12x^2+x+0.725+c} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- \n  - Given that the distance is $10$ metres, we have $h_2(10)=0$, thus\n\n    $$\n    \\begin{align*}\n    h_2(10) &= 0 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n    -0.12(10)^2+10+0.725+c&=0 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n    &\\hspace{-0.9em} \\tcbhighmath{c = 1.275} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Height of ball at  service point = 0.725 + 1.275\n\n    $$\n    \\begin{align*}\n    &\\hspace{-0.3em}\\tcbhighmath{{\\text{height = $2$ metres}}}\\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 24',
    content:
      'A house located in a town experiencing drought issues features a square-shaped roof, with each side being $x$ meters.\nThe roof is able to catch and store rainwater.\nDuring a rainfall, it is known that the mean amount of rainwater ($W$ in litres) collected is directly proportional to the square of $x$.\nIt is known that the system can collect $19\\hspace{0.15em}845$ litres when the value of $x$ is $7$ metres.\n\n- Find an equation for $W$ in terms of $x$.<span class="marks">[2]</span>  \n\nThe formula found in part (a) can be used to determine the mean amount of rainwater ($W$ in litres) collected by other houses in the town with a square roof.\n\n- Determine the side length of a square roof that has collected $32\\hspace{0.1em}805$ litres during a rainfall. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- According to the description we have\n\n  $$\n  \\begin{align*}\n      W &= cx^2 \\\\\n      19\\hspace{0.15em}845 &= c(7)^2 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n      c &= \\dfrac{19\\hspace{0.15em}845}{49} \\\\[6pt]\n      c &= 405\\\\[-10pt]\n  \\end{align*}\n  $$\n\nTherefore, the formula is $\\answer{W(x)=405x^2}$\n\n  $$\n      \\tag*{\\textbf{A1}}\n  $$\n\n\n$\\textcolor{white}{gap}$\n\n- Substituting $W=32\\hspace{0.1em}805$ into our equation from part (a), we have\n\n  $$\n  \\begin{align*}\n      32\\hspace{0.1em}805 &= 405x^2 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n      x^2 &= \\dfrac{32\\hspace{0.1em}805}{405} \\\\[6pt]\n      &= 81 \\tag*{\\textbf{(M1)}} \\\\[6pt]\n      &\\hspace{-0.5em}\\tcbhighmath{x = 9\\hspace{0.15em}\\text{m}}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 25',
    content:
      'Atmospheric pressure, $P$, in kPa, decreases exponentially with\nincreasing height above sea level, $h$. The atmospheric pressure can be\nmodelled by the function\n\n$$\n\\begin{aligned}\nP(h) &= 101\\times\\bigg(\\dfrac{25}{22}\\bigg)^{-h},\\end{aligned}\n$$\n\nwhere\n$h$ is the height above sea level in kilometres.\n\n- Write down the exact atmospheric pressure at sea level, in kPa.\n<span class="marks">[1]</span>\n\n\nMount Kosciuszko is the highest mountain in Australia with a height of\n$2228$ $\\text{metres}$ above sea level at the top.\n\n- Calculate the atmospheric pressure at the top of the Mount\nKosciuszko. <span class="marks">[2]</span>\n\n- Calculate the height where the atmospheric pressure is\nequal to $10$ kPa. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{101 \\text{ kPa}}$\n- Evaluating $P(h)$ for $h = 2.228$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.6em} P(2.228) &= 101\\times\\bigg(\\dfrac{25}{22}\\bigg)^{-2.228} \\\\[6pt]\n  &\\answer{\\approx 76.0 \\text{ kPa}}\\end{aligned}\n  $$\n\n- Solving the equation $P(h) = 10$ for $h$, we obtain\n\n  $$\n  \\begin{aligned}\n  101\\times\\bigg(\\dfrac{25}{22}\\bigg)^{-h} &= 10 \\hspace{8.1em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11em} \\answer{h = 18.1\\hspace{0.25em}\\text{km}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 26',
    content:
      'A Ferris wheel rotates at a constant rate in a clockwise direction. The height of a passenger car above the ground, $h$ metres, at time $t$ minutes, can be modelled by\n\n$$\n\\begin{align*}\n    h(t)=a \\sin (bt) + c \\, , \\hspace{3em}\\text{where $a, b, c \\in \\mathbb{R}$.}\n\\end{align*}\n$$\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/01bb276f-eb90-4d9f-80b8-d3071fb7b4e5/images/a13e08ac-86a9-45d8-9793-3dcecb46fb25/ai1056.PNG)\n\n\nWhen $t=0$, the passenger car is $75$ metres above the ground.\n\n- State the value of $c$.<span class="marks">[1]</span>  \n\nThe passenger car first reaches its maximum height of $135$ metres when $t=6$.\n\n- Find the value of\n  \n  - $a$.\n  - $b$.<span class="marks">[3]</span>\n\n\n\nA ride on the Ferris wheel consists of two full rotations.\n\n- Calculate the how long it takes to ride on the Ferris wheel.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- We have $h(0)=75$. Substituting these values into our equation, we have\n\n  $$\n  \\begin{align*}\n  h(t)&=a \\sin (bt) + c \\\\[8pt]\n  h(0)&=a \\sin (b\\times0) + c \\\\[8pt]\n  75 &= a \\sin(0) + c \\\\[8pt]\n  &\\hspace{-0.8em}\\tcbhighmath{c = 75}\n  \\end{align*}\n  $$\n\n- \n  - We have $h(6)=135$. Substituting these values into our equation, we have\n\n    $$\n    \\begin{align*}\n    h(t)&=a \\sin (bt) + 75 \\\\[8pt]\n    h(6)&=a \\sin (6b) + 75 \\\\[8pt]\n    135&=a \\sin (6b) + 75 \\\\[8pt]\n    a \\sin (6b) &= 60\n    \\end{align*}\n    $$\n\n    Note that at its maximum, $\\sin (6b)$ must equal 1. Hence $\\tcbhighmath{a=60}$\n  - Following on from part (b) (i), the maximum value of a sine function first occurs when the argument is $90^{\\circ}$. Hence we have\n\n    $$\n    \\begin{align*}\n    6b &= 90 \\\\[8pt]\n    &\\hspace{-0.8em}\\tcbhighmath{b=15}\n    \\end{align*}\n    $$\n\n\n- The period of a sine function is given by\n\n  $$\n  \\begin{align*}\n  \\text{period}&=\\dfrac{360}{b} \\\\[8pt]\n  &= \\dfrac{360}{15} \\\\[8pt]\n  &= 24\n  \\end{align*}\n  $$\n\n  One full rotation takes 24 minutes. Given that a ride on the Ferris wheel consists of two full rotations,\n\n  $$\n  \\begin{align*}\n  \\tcbhighmath{\\text{A ride on the Ferris wheel takes $48$ minutes.}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 27',
    content:
      'The graph below shows the amount of money $M$ (in thousands of dollars), in the account of a contractor,  where $t$ is the time in months since he opened the account.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/be163de5-68b0-49ca-94db-b870708b6869/AI1015a.PNG)\n\n\n\n- Write down one characteristic of the graph which suggests that a cubic function might be an appropriate model for the amount of money in the account. <span class="marks">[1]</span>  \n\nThe equation of the model can be expressed as $M(t)=at^3+bt^2+ct+d$, where $a$, $b$, $c$ and $d \\in \\mathbb{R}$. It is given that the graph of the model passes through the following points.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/5c93f523-f86a-4794-ac51-31c1c41cc134/AI1015b.PNG)\n\n\n\n- \n  - State the value of $d$.\n  - Using the values in the table, write down three equations in $a$, $b$, and $c$.\n  - By solving the system of equations from part (ii), find the values of $a$, $b$ and $c$. <span class="marks">[4]</span>\n\n\n\nIf $M$ has a negative value, the contractor is in debt.\n\n- Use the model from part (b) to find the number of months the contractor expects to be in debt. Give your answer to the nearest month. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- The graph of $M$ has exactly one maximum point and one minimum point.\n- \n  - From the table, we have $M(0)=1$. Substituting the value $t=0$ into the model we have\n\n    $$\n    \\begin{align*}\n    M(0)&= a(0)^3+b(0)^2+c(0)+d = d\n    \\end{align*}\n    $$\n\n    We have $M(0)=1$ and $M(0)=d$ and therefore $\\answer{d=1}$\n  - Using the values given in the table, and part (i), we have\n\n    $$\n    \\begin{align*}\n    M(1)&= a(1)^3+b(1)^2+c(1)+1 = 2 \\\\[11pt]\n    M(2) &= a(2)^3+b(2)^2+c(2)+1 = -3 \\\\[11pt]\n    M(3) &= a(3)^3+b(3)^2+c(3)+1 = 4  \\\\[-11pt]\n    \\end{align*}\n    $$\n\n    Hence, the linear system for variables $a$, $b$ and $c$ is\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{\\begin{cases}\n    a+b+c = 1 \\\\[6pt]\n    8a+4b+2c = -4 \\\\[6pt]\n    27a+9b+3c = 3\n    \\end{cases}}\n    \\end{align*}\n    $$\n\n  - Using G.D.C. to solve the linear system found in part (ii), we get\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{a=3,\\, b=-12, \\text{ and } c=10}\n    \\end{align*}\n    $$\n\n\n- Using the G.D.C. to graph the polynomial $M(t)=3t^3-12t^2+10t+1$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/4b085cb1-6cef-4368-855b-cb6f761ecd30/AI1015c.PNG)\n\n\n  Hence, the time the contractor is in debt equals the time between point A and point B:\n\n  $$\n  \\begin{align*}\n  \\text{Time in debt} &= 2.738 - 1.352 \\\\[11pt]\n  &= 1.386\\\\[-10pt]\n  \\end{align*}\n  $$\n\n  To the nearest month, the contractor expects to be in debt for $\\answer{\\text{one month.}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 28',
    content:
      'The total cost of a gym membership, $C$, in Australian dollars (AUD), in\nJohn\'s Gym can be modelled by the function\n\n$$\n\\begin{aligned}\nC = 65t +30,\\end{aligned}\n$$\n\nwhere $t$ is the time in months.\n\n- Calculate the gym membership cost over a $6$ month duration.\n<span class="marks">[1]</span>\n\n- On the grid below, sketch the graph of the function $C = 65t + 30$,\nfor $t\\geq0$. <span class="marks">[2]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/242b7846-dd0a-4322-956c-9edf06d9bc3f/images/55390a78-3718-4b81-9faf-956a934b2e3f/40ef97be540273524df8765426fe4afbd3aa99f1.svg)\n\n\n- Calculate the time, $t$, in months, when the total cost reach $290$\nAUD. <span class="marks">[1]</span>\n\n\nIn the neighbouring Jetts Gym, the initial payment is $\\$75$ higher than\nin John\'s Gym, however the monthly fee is $\\$35$ lower per month.\n\n- Find the number of months it takes for the total cost to be\nless by attending Jetts Gym in comparison to John\'s Gym. <span class="marks">[2]</span>  \n',
    markScheme:
      "\n- Evaluating $C = 65t + 30$ for $t = 6$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.9em} C &= 65(6) + 30 \\\\[6pt]\n  &\\answer{= 420 \\text{ AUD}}\\end{aligned}\n  $$\n\n- If we sketch the graph of $C = 65t + 30$, for $t \\geq 0$, on the\ngrid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/242b7846-dd0a-4322-956c-9edf06d9bc3f/images/92290ff7-7fd4-46b2-b43d-07393fff434a/ffcb3caa4ff34c194a63936e0581df79e4c6a499.svg)\n\n\n- Solving the equation $C = 290$ for $t$, we obtain\n\n  $$\n  \\begin{aligned}\n  65t + 30 &= 290 \\hspace{3.9em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{12.5em} \\answer{t = 4 \\text{ months}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{John's Gym}:& \\hspace{1.0em} C = 65t + 30 \\qref{(1)} \\\\[6pt]\n  \\text{Jetts Gym}:& \\hspace{1.0em} C = 30t + 105 \\qref{(2)}\\end{aligned}\n  $$\n\n  If we sketch the graphs of $(1)$ and $(2)$, for $t \\geq 0$ [by\nusing G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/242b7846-dd0a-4322-956c-9edf06d9bc3f/images/af2dfaa5-075c-4939-b8c4-fbc3ad83643b/502b76a7a4ee55ede1c0b292e93ff534a6d4ff0f.svg)\n\n\n  Hence it takes\n$\\answer{\\text{\\(2.14\\) months}}$\nfor the total cost to be less by attending Jetts\n  Gym in comparison to John's Gym.\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 29',
    content:
      'The subscription fee for an online project management software by\nAB-Tech is $\\$ 40$ per month. If the customer buys for a whole year in\nadvance, a discount of $\\$130$ is applied.\nThis can be modelled by the following function, $P(n)$, which gives the\ntotal cost when paying annually for the subscription.\n\n$$\nP(n) = 40n - 130,\\quad n\\geq 12\n$$\n\nwhere $n$ is the number months.\n\n- Find the total cost of buying a subscription for $2$ years.\n<span class="marks">[2]</span>\n\n- Find $P^{-1}(1790)$. <span class="marks">[2]</span>\n\n\nThe subscription price for a different online project management tool by\nYZ-tech is $\\$35$ per month, however customers can only purchase\nannually in advance, and there are no discounts. The total subscription\ncost of YZ-tech\'s software is less than AB-tech\'s software when $n>k$ .\n\n- Find the minimum value of $k$. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- Substituting $n=24$ into the $P(n)$ function, we get\n\n  $$\n  \\begin{aligned}\n  P(n) &=40n-130\\\\[6pt]\n  P(24) &= 40(24)-130 \\\\[6pt]\n  &\\hspace{0.5em}\\answer{=\\$ 830}\\end{aligned}\n  $$\n\n- Let's denote $P(n)$ by $y$. To find the inverse we can interchange\nthe variables $n$ and $y$ and rearrange for $y$, as follows\n\n  $$\n  \\begin{aligned}\n  y &= 40n-130 \\\\[6pt]\n  n&=40y-130\\\\[6pt]\n  40y&=n+130\\\\[6pt]\n  y&=\\dfrac{n+130}{40}\\\\[6pt]\n  P^{-1}(n) &= \\dfrac{n+130}{40}\\end{aligned}\n  $$\n\n  We can now find\n$P^{-1}(1790)$ as follows\n\n  $$\n  \\begin{aligned}\n  P^{-1}(1790)&=\\dfrac{1790+130}{40}\\\\[6pt]\n  &\\hspace{-3.5em}\\answer{P^{-1}(1790)=48 \\text{ months}}\\end{aligned}\n  $$\n\n- For AB-tech's software we we were given the pricing function\n\n  $$\n  P(n)=40n-130\n  \n  $$\n\n  For YZ-tech, we can define the function, $S(n)$, to\nrepresent the subscription price for their software\n\n  $$\n  S(n)=35n\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/2b908e8c-786e-4fec-844c-19b9653ea308/images/7386b1f2-6825-49b7-88df-da2a1e5501e7/7402d7e1fc9d51e4e9f6b0f5ea74f75143d1438e.svg)\n\n\n  From the graph, $S(n) < P(n)$ for $n>26$.\n  The price of YZ-tech's software is less than AB-tech's when $n>26$.\n  Therefore,  $\\answer{k=26}$\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 30',
    content:
      'Jasper owns a business and has 7 employees. He can assign any number of employees to a task. The time the task takes varies inversely with the number of employees who are assigned to it. This is shown by the following:\n\n$$\n\\begin{align*}\nt &\\propto \\dfrac{1}{x}\n\\end{align*}\n$$\n\nWhere $t$ is time a task takes in hours, and $x$ is the number of employees assigned to the task.\nIf one employee is assigned to a task, it will take 8 hours to complete the task.\n\n- Find an equation for $t$ in terms of $x$. <span class="marks">[2]</span>  \n\nJasper has a task that must be completed within three hours.\n\n- \n  - Determine the minimum number of employees that should be assigned to the task to ensure it is completed within three hours.\n  - State the total amount of time the task will take. Give your answer to the nearest minute. <span class="marks">[3]</span>\n\n\n\nIf a task does not take a whole number of hours, Jasper must round up to the nearest whole hour to pay his employees.\n\n- Determine the optimal number of employees Jasper should assign to ensure the task is complete within three hours, while minimising the number of hours of work he needs to pay for. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{align*}\n  t &= \\dfrac{k}{x}\n  \\end{align*}\n  $$\n\n  And if $x=1$, then $t=8$:\n\n  $$\n  \\begin{align*}\n  8 &= \\dfrac{k}{1} \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Hence $k=8$ and we have $\\answer{t = \\dfrac{8}{x}} $\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- \n  - We must have $t \\leq 3$ and therefore, using our expression from part (a), we have\n\n    $$\n    \\begin{align*}\n    \\dfrac{8}{x} &\\leq 3 \\\\[8pt]\n    \\dfrac{8}{3} &\\leq x \\tag*{\\textbf{(M1)}}\n    \\end{align*}\n    $$\n\n    $x$ must be $\\geq \\dfrac{8}{3}$, and must be a whole number. Therefore,\n    $\\answer{\\text{A minimum of 3 employees should be assigned to the task.}}$\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n  - $\\dfrac{8}{3}\\approx2.67$. The task will take $2.67$ hours, which we convert to minutes.\n    $\\answer{\\text{The task will take 2 hours and 40 minutes.}}$\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n\n- The following table summarises:\n  \n  - The number of employees assigned to the task ($x$),\n  - The number of hours the task will take ($t$),\n  - The number of hours rounded up to the next whole number,\n  - The number of hours that Jasper will need to pay his employees for.\n\n  Note that, from part (b), the minimum is 3 employees. From the question we note that Jasper has a maximum of 7 employees to assign.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/482806a4-30df-4b2a-a29b-d7456233f260/images/fe2dcac9-63d7-4216-b7d1-8f81abdd1ab2/ai1107a.PNG)\n\n\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M2)}}\t\n  \\end{aligned}\n  $$\n\n  To ensure the task is completed within three hours, but cost is minimized,\n  $\\answer{\\text{Jasper should assign 4 employees to the task.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 31',
    content:
      'Tom has a model train set, which includes a tunnel that the model train must pass through. The entrance of the tunnel is in the shape of the parabola $h(x)=-0.6x^2+3.12x$, where $h$ is the height of the tunnel in centimetres, and $x$ is the horizontal distance from the bottom left corner of the tunnel entrance at $(0,0)$, also in centimetres.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/4b56be12-9b7e-47a6-8d33-db4ce1696bee/images/987cf5eb-a4ea-4400-b222-435b2427a3c5/AI1017a.PNG)\n\n\n\n- Find the equation of the axis of symmetry of the parabola that models the tunnel entrance. <span class="marks">[2]</span>  \n\nTom is considering purchasing a new carriage for his model train. The carriage is in the shape of a cuboid with a height of $3.5\\hspace{0.25em}\\text{cm}$ and a width of $2\\hspace{0.25em}\\text{cm}$.\n\n- Determine whether the carriage will fit through the tunnel entrance. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Using the formula for the axis of symmetry of a quadratic function, with $a=-0.6$ and $b=3.12$, we have\n\n  $$\n  \\begin{align*}\n  x &= - \\dfrac{b}{2a} \\\\[11pt]\n  &= - \\dfrac{3.12}{(2)(-0.6)} \\\\[11pt]\n  & \\hspace{-0.55em}\\tcbhighmath{x = 2.6}\n  \\end{align*}\n  $$\n\n- Since the height of the carriage is $3.5\\hspace{0.25em}\\text{cm}$ we can find the available horizontal width by finding the intersection of the parabola with the line $y=3.5$. Using G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/4b56be12-9b7e-47a6-8d33-db4ce1696bee/images/0c8e24b3-697a-4ff7-9ac8-0f36449f9dc2/AI1017b.PNG)\n\n\n  Since the length of segment AB is $3.563-1.637=1.926$, and $1.926<2$, we conclude that $\\answer{\\text{the carriage will not be able to fit through the tunnel entrance.}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 32',
    content:
      'The cross-section of a ship\'s hull below the surface of the ocean can be modelled by a parabola. The depth of the boat\'s hull, $d$ metres, is given by $d(x) = 0.5x^2-6.4x$, where $x$ is the horizontal distance from the left-hand side of the hull at the surface, also in metres, as shown in the following diagram. The $x$-axis represents the ocean surface.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/50b7a549-0fae-4e88-8198-43d4e8b67c4a/images/cb400f16-0845-431b-94dc-26dd2eb56467/AI1018a.PNG)\n\n\n\n- Find the equation of the axis of symmetry of the parabola that models the hull of the ship. <span class="marks">[2]</span>  \n\nThe ship has a horizontal storage deck at a depth of $10$ metres, with a ceiling at surface level. The storage deck is used to transport containers in the shape of cuboids.\n\n- Determine the maximum width of a container that the ship can transport on the storage deck, given that the container is $10$ metres high. Give your answer to the nearest metre. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Using the formula for the axis of symmetry of a quadratic function, with $a=0.5$ and $b=-6.4$, we have\n\n  $$\n  \\begin{align*}\n  x &= - \\dfrac{b}{2a} \\\\[11pt]\n  &= - \\dfrac{-6.4}{(2)(0.5)} \\\\[11pt]\n  & \\hspace{-0.55em}\\tcbhighmath{x = 6.4}\n  \\end{align*}\n  $$\n\n- Since the depth of the storage deck is $10\\hspace{0.25em}\\text{m}$, we can find the available horizontal width by finding the intersection of the parabola with the line $y=-10$. Using G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/50b7a549-0fae-4e88-8198-43d4e8b67c4a/images/0c8115e4-bb78-4db4-b0b4-d73febbc287e/AI1018b.PNG)\n\n\n  Since the length of segment AB is $10.98 - 1.822 = 9.158$ we conclude:\n  The maximum width of a transportable container that is $10$ metres high is $9$ metres.\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 33',
    content:
      'The total cost of a ride, $C$, in British pounds (GBP), on BlackCabs can\nbe $\\text{modelled}$ by the function\n\n$$\nC = 1.75x + 3.00, \\\\[3pt]\n$$\n\nwhere $x$ is the distance travelled in\nkilometres.\n\n- Calculate the total cost of an $8$ kilometre ride in a BlackCab.\n<span class="marks">[1]</span>\n\n- On the grid below, sketch the graph of the\nfunction $\\text{\\(C\\hspace{-0.1em}=\\hspace{-0.1em}1.75x + 3.00\\)}$, for $\\text{\\(x\\hspace{-0.1em}\\geq\\hspace{-0.1em}0\\)}$.<span class="marks">[2]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6340868f-a8d3-4dff-a066-c93ed0c4bad4/images/813cd0c4-bfc6-4212-aaf2-af18bdc2015e/c07ee70da58c7beac03974a72c1af86381c22994.svg)\n\n\n- Calculate the distance travelled, $x$, in kilometres, when the total\ncost of a ride reach $45$ GBP. <span class="marks">[1]</span>\n\n\nThe starting fare of MiniCabs is $2.00$ GBP higher than of BlackCabs,\nhowever the ride fare is lower at $1.40$ GBP per kilometre travelled.\n\n- Find the least number of whole kilometres required to\ntravel for the total cost to be less on a MiniCab ride in comparison\nto a BlackCab ride. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Evaluating $C = 1.75x + 3.00$ for $x = 8$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.6em} C &= 1.75(8) + 3.00 \\\\[6pt]\n  &\\answer{= 17 \\text{ GBP}}\\end{aligned}\n  $$\n\n- If we sketch the graph\nof $\\text{\\(C\\hspace{-0.15em}=\\hspace{-0.15em}1.75x\\hspace{-0.15em}+\\hspace{-0.15em}3.00\\)}$, for $\\text{\\(x\\hspace{-0.15em}\\geq\\hspace{-0.15em}0\\)}$, on the grid $\\text{below}$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6340868f-a8d3-4dff-a066-c93ed0c4bad4/images/b628cbad-3d33-4732-a1c3-7206661a40ba/0fbc572f5386caf92a0b3a37fe873d0c550a8cee.svg)\n\n\n- Solving the equation $C = 45$ for $x$, we obtain\n\n  $$\n  \\begin{aligned}\n  1.75x + 3.00 &= 45 \\hspace{6.95em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.2em} \\answer{x = 24 \\text{ km}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{BlackCab}:& \\hspace{1.0em} C = 1.75x + 3.00 \\qref{(1)} \\\\[6pt]\n  \\text{MiniCab}:& \\hspace{1.0em} C = 1.40x + 5.00 \\qref{(2)}\\end{aligned}\n  $$\n\n  If we sketch the graphs of $(1)$ and $(2)$, for $x \\geq 0$ [by\nusing G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6340868f-a8d3-4dff-a066-c93ed0c4bad4/images/48426bc3-2d7a-45b4-bfc3-9e0988433f8c/e7c289a4de8f1b0042a6607943738c5b0d6aeabd.svg)\n\n\n  Hence\n$\\answer{\\text{at least \\(6\\) km}}$\nis required to travel for the total cost of the ride to be\n  less on a MiniCab than on a BlackCab.\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 34',
    content:
      'The Mohs scale of mineral hardness is a qualitative, discrete scale characterizing the scratch resistance of various minerals through the ability of harder materials to scratch softer ones. It ranges from talc (1), the softest mineral, to diamond (10), the hardest.  Minerals are assigned a whole number value on the Mohs scale.\nAbsolute hardness of a mineral quantifies its resistance to scratching on a continuous scale, providing a more precise measurement than the Mohs scale.\nThe relationship between Mohs scale score, $M$, and absolute hardness, $H$, is given by\n\n$$\n\\begin{align*}\n0.319M &= \\log_{10}H-0.117\n\\end{align*}\n$$\n\n\n- Calculate the Mohs scale score for quartz, which has an absolute hardness of 100. Give your answer to the nearest whole number.\t <span class="marks">[2]</span>\n\n- Find $H$ as a function of $M$.<span class="marks">[2]</span>\n\n- Calculate the absolute hardness of fluorite, which has a Mohs scale score of 4.<span class="marks">[2]</span>\n\n- Hence determine how many times greater the absolute hardness of quartz is than the absolute hardness of fluorite.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- For quartz, we have $H=100$. If we substitute this value into the Mohs scale equation, we have\n\n  $$\n  \\begin{align*}\n  0.319M &= \\log_{10} (100) - 0.117 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  M &= \\dfrac{1.883}{0.319} \\\\[6pt]\n  &\\hspace{-1.4em}\\tcbhighmath{M = 6 \\text{ [Nearest whole number]}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We have\n\n  $$\n  \\begin{align*}\n  0.319M &= \\log_{10}H-0.117 \\\\[6pt]\n  0.319M + 0.117 &= \\log_{10}H\n  \\end{align*}\n  $$\n\n  We can now use the log equivalence statement, $a^x=b \\Leftrightarrow x = \\log_a b$, with $a=10$, $b=H$ and $x = 0.319M + 0.117$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{align*}\n  &\\tcbhighmath{H = 10^{0.319M + 0.117}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- For fluorite, we have $M=4$. If we substitute this value into the expression we formed in part (b), we have\n\n  $$\n  \\begin{align*}\n  H &= 10^{0.319\\times 4 + 0.117} \\tag*{\\textbf{(M1)}} \\\\[6pt]\n  &= 24.71...\\\\[6pt]\n  &\\hspace{-1.25em}\\tcbhighmath{H = 24.7\\,(3\\,\\mathrm{s.f.})} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We have\n\n  $$\n  \\begin{align*}\n  \\dfrac{\\text{Hardness of quartz}}{\\text{Hardness of fluorite}} &= \\dfrac{100}{24.71...} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 4.045...\\\\[6pt]\n  &= 4.05\\,(3\\,\\mathrm{s.f.})\n  \\end{align*}\n  $$\n\n  Quartz is approximately 4.05 times harder than fluorite.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 35',
    content:
      'Two identical water waves pass a sensor in an oceanography laboratory.\nAs the waves pass the sensor, the\ndepth, $D$, in metres, of water is recorded\nand modelled by the function\n\n$$\nD(t) = 3.21-0.45\\cos\\hspace{0.15em}(\\ang{24.2}\\hspace{-0.15em}\\times t)\n$$\n\nwhere $t$ is the elapsed time, in seconds, since the first wave hit the\nsensor.\n\n- Find the minimum and maximum depths of the water as the two waves\npass the sensor. <span class="marks">[3]</span>\n\n- Find the first time after $16$ seconds at which the depth of water\nreaches $\\text{\\(3.5\\)\\hspace{0.25em}m}$.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The min and max values of the cosine function are $-1$ and $+1$.\nHence the min and max depths of water are\n\n  $$\n  \\begin{aligned}\n  D_{\\text{min}} &= 3.21-0.45(+1) \\\\[6pt]\n  &\\answer{= 2.76 \\text{ m}} \\\\[15pt]\n  \\hspace{1em} D_{\\text{max}} &= 3.21-0.45(-1) \\\\[6pt]\n  &\\answer{= 3.66 \\text{ m}}\\end{aligned}\n  $$\n\n- Solving the equation $D(t) = 3.5$ for first $t > 16$, we get\n\n  $$\n  \\begin{aligned}\n  3.21-0.45\\cos\\hspace{0.15em}(\\ang{24.2}\\hspace{-0.15em}\\times t) &= 3.5 \\hspace{13em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{8.6em} \\answer{t \\approx 20.3} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 36',
    content:
      'Coral is a wildlife expert who tags  flying fish and records their movement using an electronic device.\nThe tagging device tells her the height of a fish relative to the water level, at any given time.\nShe knows that the fish swim mostly in the water, but occasionally they fly (jump!) out of the water.\nThe height is measured in metres and the time in seconds. If the height is negative the fish is under the water, if the height is positive the fish is flying.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/99db50ab-81ea-421b-8f20-21b4669fedcd/images/70f02a92-7870-456a-abea-c262c3ce2d2b/seagull.png)\n\n\nCoral notices one particular fish as it flies out of the water. The moment it re-enters the water the device begins tracking its height.\nAt $2$ seconds the fish is at a height of $-2.8\\,$m; at $5$ seconds the fish is at a height of $-2\\,$m and at $11$ seconds the fish is also at a height of $-2\\,$m.\nThe height of the fish can be expressed as $H(t)=at^3+bt^2+ct+d$, where $a$, $b$, $c$ and $d \\in \\mathbb{R}$.\n\n- \n  - Write down the value of $d$.\n  - Using the information given write down three equations involving $a$, $b$ and $c$.\n  - Solve the system of equations to find the values of $a$, $b$ and $c$. <span class="marks">[4]</span>\n\n\n\nFrom previous research, Coral knows that if a fish is flying for more than $1$ second then a seagull will attempt to catch it.\n\n- Use a justification to explain why a seagull will attempt to catch this fish. <span class="marks">[4]</span>  \n\nAt $t=9\\,$s a seagull begins swooping down to catch the fish.\nIts height is given by $b(t)=-1.5t^2+27t-118$.\n\n- \n  - Find the height at which the bird catches the fish.\n  - Interpret the answer in the context of the problem. <span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- \n  - $d=0$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Using the information given we have\n\n    $$\n    \\begin{align*}\n    \\answer{\\begin{array}{rccccccl}\n    8a &+& 4b &+& 2c &=& -2.8 \\\\[3pt]\n    125a &+& 25b &+& 5c &=& -2 \\\\[3pt]\n    1331a &+& 121b &+& 11c &=& -2\n    \\end{array}}\n    \\tag*{\\textbf{M1A1}}\n    \\end{align*}\n    $$\n\n  - Solving on a G.D.C. we have $\\hspace{0.525em}\\tcbhighmath{a=-0.0330, b=0.564 \\text{ and } c=-2.40}\\hspace{0.525em}$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- When the fish is out of the water it is said to be flying. Hence we need to identify when $H(t)>0$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  We can sketch $H(t)=-0.0330t^3+0.564t^2-2.40t$ on a G.D.C.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/99db50ab-81ea-421b-8f20-21b4669fedcd/images/954048de-59b6-4d32-b5eb-dc27f1407e86/an1.png)\n\n\n  The difference between the two roots $x_1$ and $x_2$ is the time when $H(t)>0$. This can be seen on the graph above as the length of the red line.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n  Hence, the total time out of the water is given by\n\n  $$\n  \\begin{align*}\n      &=x_2-x_1\\\\[6pt]\n      &=9.0909...-8 \\hspace{3em}\\text{[using G.D.C.]} \\\\[6pt]\n      &=1.09\\text{ seconds} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  As $\\hspace{0.525em}\\answer{1.09 > 1}\\hspace{0.525em}$ we can say that a seagull will attempt to catch the fish.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{R1}}\n  \\end{align*}\n  $$\n\n- The bird catches the fish when the $b(t)=H(t)$ and $t>9$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Using a G.D.C. we can show to motion of the bird, in blue, using the model $b(t)$\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/99db50ab-81ea-421b-8f20-21b4669fedcd/images/b3837cf2-870c-4368-bdc5-34bdc0a05ee2/an2.png)\n\n\n  The point $C$, $t>9$, is when the bird catches the fish.\n  The coordinates of point $C$ are $(10.893..., -1.8735...)$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  Hence the bird catches the fish at a height of $\\hspace{0.525em}\\tcbhighmath{-1.87\\,\\text{m}}$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The height is negative, this means the bird catches the fish\n  $\\answer{1.87\\,\\text{m below the surface of the water}}$\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{R1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 37',
    content:
      'A team of painters is hired to paint a house. The time $T$ (in hours) required to paint the house varies inversely with the number of painters, $P$. This can be expressed as\n\n$$\n\\begin{align*}\nT &= \\dfrac{k}{P}\n\\end{align*}\n$$\n\nA team of 3 painters can paint the house in 12 hours.\n\n- Write an equation relating the time $T$ to the number of painters $P$.<span class="marks">[2]</span>  \n\nThe following diagram shows the graph of $T=P$ for $0 \\leq P \\leq 12$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/9f6c0dfc-56fd-41ec-9a8d-73c9b11fe61f/images/5820e2f4-959d-4183-85b4-14415d66fc32/AI1177a.JPG)\n\n\n\n- On the axes above, sketch the graph of $T(P)$ for $3 \\leq P \\leq 12$.<span class="marks">[2]</span>\n\n- State the coordinates of the point of intersection.<span class="marks">[1]</span>\n\n- State the meaning of the coordinates of this point in the context of the question. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- We have that when $P=3$, $T=12$. Substituting in these values, we have\n\n  $$\n  \\begin{align*} \n  12 &= \\dfrac{k}{3} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  k &= 36\n  \\end{align*}\n  $$\n\n  Therefore,\n\n  $$\n  \\begin{align*}\n  &\\tcbhighmath{T = \\dfrac{36}{P}}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We can use the G.D.C. to sketch the function, then transfer this to paper.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  We just need to ensure that our sketch starts at the point $(3,12)$, ends at the point $(12,3)$ and follows a smooth curve. This is shown in the graph below, in $\\color{green}\\text{green}$:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9f6c0dfc-56fd-41ec-9a8d-73c9b11fe61f/images/b3f15b16-65ac-4bc4-b333-e7df5b3dc9ee/AI1177b.JPG)\n\n\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- $\\hspace{0.275em}\\answer{(6,6)}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- $\\hspace{0.275em}\\answer{\\text{A team of 6 painters can paint the house in 6 hours.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 38',
    content:
      'Consider the quadratic function $f(x) = ax^2+bx+c$. The graph of\n$y=f(x)$ is shown in the diagram below. The vertex of the graph has\ncoordinates $\\text{R}(m,-9)$.\nThe graph intersects the $x$-axis at two points; $\\text{P}(-4,0)$ and\n$\\text{Q}(2,0)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b09e52c7-02f5-45a2-96f9-ab7aa4138a3b/images/a78c2481-ec6d-41fe-99c5-6ab402d1c48c/b188999a18650c4961f7def85ea1bfd8a1276fc9.svg)\n\n\n\n- Find the value of $m$. <span class="marks">[1]</span>\n\n- Find the values of $a$, $b$, and $c$.<span class="marks">[5]</span>\n\n- Write down the equation of the axis of symmetry of the graph.\n<span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- The point $(m,0)$ is halfway between P and Q (symmetrical nature of\nquadratic graphs). Since the total length from P to Q is 6 units,\nthe length from P to $(m,0)$ is 3 units. Therefore,\n\n  $$\n  \\begin{aligned}\n  &\\answer{m=-1}\\end{aligned}\n  $$\n\n- Using $y=ax^2+bx+c$ and the 3 coordinates we know the graph passes\nthrough, we can set up three equations, as follows\n\n  $$\n  \\begin{aligned}\n  0 &= a(-4)^2+b(-4)+c \\qquad \\qquad \\quad \\text{Using P$(-4,0)$}\\nonumber \\\\[6pt]\n  0&=16a-4b+c \\tag*{\\textbf{(1)}}\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  0 &= a(2)^2+b(2)+c \\qquad \\qquad \\qquad \\,\\, \\,\\text{Using Q$(2,0)$}\\nonumber \\\\[6pt]\n  0&=4a+2b+c \\tag*{\\textbf{(2)}}\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  -9 &= a(-1)^2+b(-1)+c \\qquad \\qquad \\quad \\text{Using R$(-1,-9)$}\\nonumber \\\\[6pt]\n  -9&=a-b+c \\tag*{\\textbf{(3)}}\n  \\end{aligned}\n  $$\n\n  We can now use a GDC to solve equations\n$(1)$, $(2)$, and $(3)$. We get\n\n  $$\n  \\answer{a=1, \\, \\, \\, b=2,\\,\\,\\text{and}\\,\\, c=-8}\n  $$\n\n- The axis of symmetry of the graph is the line that splits the\nquadratic graph in half, passing through the turning point. Hence,\nthe equation of this line is\n\n  $$\n  \\answer{x=-1}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 39',
    content:
      'Certain content on the internet can become viral when the content\nspreads exponentially. The spread of content published by a specific\ncontent creator can be modelled by the function\n\n$$\nN(t)=145 \\times 1.25^t,\n$$\n\nwhere $N$ is the number of people reached by\nthe content, and $t$ is the number of hours since the content\'s\npublication.\n\n- Write down the number of people reached immediately after the\ncontent\'s publication.<span class="marks">[1]</span>\n\n- Calculate the number of hours it takes for the content to reach\n$100\\hspace{0.15em}000$ people.<span class="marks">[2]</span>\n\n- Calculate the number of people reached after $80$ hours.<span class="marks">[2]</span>\n\n\nApproximately $5$ billion people in the world are now connected to the\ninternet.\n\n- Explain why the model starts to become unrealistic after\nabout $3$ days.<span class="marks">[1]</span>  \n',
    markScheme:
      '\n- The immediate number of people reached can be found when $t=0$.\nHence,\n\n  $$\n  \\answer{N(0)=145}\n  $$\n\n- We solve the equation\n\n  $$\n  \\begin{aligned}\n  N(t) &= 100\\hspace{0.15em}000 \\\\[4pt]\n  145 \\times 1.25^t &= 100\\hspace{0.15em}000 \\\\[4pt]\n  t &\\answer{t\\approx29.3}\\hspace{3em} [\\text{using G.D.C.}]\\end{aligned}\n  $$\n\n- Substituting $t=80$ into the function $N(t)$, we get\n\n  $$\n  \\begin{aligned}\n  N(t) &= 145 \\times 1.25^t \\\\[4pt]\n  N(80) &= 145 \\times 1.25^{80} \\\\[4pt]\n  &= 8\\hspace{0.15em}206\\hspace{0.15em}709\\hspace{0.15em}165.19 \\\\[4pt]\n  &\\hspace{0.3em}\\answer{\\approx8\\hspace{0.15em}210\\hspace{0.15em}000\\hspace{0.15em}000}\\end{aligned}\n  $$\n\n- $\\answer{\\text{The model becomes unrealistic after about 3 days (72 hours) as the output of the model}}$\n  $\\answer{\\text{(number of people reached) starts to exceed the total number of people in the world }}$\n  $\\answer{\\text{connected to the internet.}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 40',
    content:
      'The graph below shows the profit $P$ (in thousands of dollars), that business A makes,  where $t$ is the time in months since January 1st.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/c66ce31d-cb54-4bbd-848a-ef2cd4a05037/ai1106e.PNG)\n\n\n\n- Write down one characteristic of the graph which suggests that a cubic function might be an appropriate model for the business profit. <span class="marks">[1]</span>  \n\nThe model can be expressed as $P(t)=at^3+bt^2+ct+d$, where $a$, $b$, $c$ and $d \\in \\mathbb{R}$. It is given that the graph of the model passes through the following points.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/ef93a216-cfb9-450f-a315-71dbbb9af371/ai1106b.PNG)\n\n\n\n- \n  - State the value of $d$.\n  - Using the values in the table, write down three equations in $a$, $b$, and $c$.\n  - By solving the system of equations from part (ii), find the values of $a$, $b$ and $c$. <span class="marks">[4]</span>\n\n\n\nIf $P$ has a negative value, business A is losing money. The owner has decided they will not open during the corresponding time next year.\n\n- Use the model from part (b) to find the approximate dates during which business A will not open next year. <span class="marks">[4]</span>  \n\nBusiness B has a profit function given by $P(t)=-0.1t^2+1.2t$, for $0 \\leq t \\leq 12$.\n\n- Determine the total amount of time for which business B is more profitable than business A. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- $\\answer{\\text{The graph of $P$ has exactly one maximum point and one minimum point.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- \n  - From the table, we have $P(0)=2$. Substituting the value $t=0$ into the model we have\n\n    $$\n    \\begin{align*}\n    P(0)&= a(0)^3+b(0)^2+c(0)+d = d\n    \\end{align*}\n    $$\n\n    We have $P(0)=2$ and $P(0)=d$ and therefore $\\answer{d=2}$\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n  - Using the values given in the table, and part (i), we have\n\n    $$\n    \\begin{align*}\n    P(4)&= a(4)^3+b(4)^2+c(4)+2 = 4 \\\\[11pt]\n    P(8) &= a(8)^3+b(8)^2+c(8)+2 = -6 \\tag*{\\textbf{(M1)}} \\\\[11pt]\n    P(12) &= a(12)^3+b(12)^2+c(12)+2 = 8  \\\\[-11pt]\n    \\end{align*}\n    $$\n\n    Hence, the linear system for variables $a$, $b$ and $c$ is\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{\\begin{cases}\n    64a+16b+4c = 2 \\\\[6pt]\n    512a+64b+8c = -8 \\\\[6pt]\n    1728a+144b+12c = 6\n    \\end{cases}}\n    \\end{align*}\n    $$\n\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n  - Using G.D.C. to solve the linear system found in part (ii), we get\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{a=0.09375,\\, b=-1.5, \\text{ and } c=5} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- Using the G.D.C. to graph the polynomial $P(t)=0.09375t^3-1.5t^2+5t+2$,\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  we can find the zeroes of the function.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(A1)}}\t\n  \\end{aligned}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/f941dc8d-5e1b-4150-9755-fcb2277ef68a/ai1106c.PNG)\n\n\n  Hence, the time that business A will not open is from $t=5.407$ months until $t=10.95$ months after January 1st. Note that $t=5.407$ equates to a date in June, which has 30 days, and $t=10.95$ equates to a date in November, which also has 30 days.\n\n  $$\n  \\begin{align*}\n  0.407 \\times 30 &= 12.21 \\\\[11pt]\n  0.95 \\times 30 &= 28.5 \\tag*{\\textbf{(M1)}}\\\\[-10pt]\n  \\end{align*}\n  $$\n\n  Business A will be closed from approximately $\\answer{\\text{June 13th until November 29th.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- Using the G.D.C., we can graph the polynomial for business B (shown in red), $P(t)=-0.1t^2+1.2t$, on the same axes as the polynomial for business A. We can then find the points of intersection.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/94fdb4ca-3aad-4323-a785-bc1185c059fb/ai1106d.PNG)\n\n\n  Business B is more profitable for $4.270 \\leq t \\leq 11.11$. We have\n\n  $$\n  \\begin{align*}\n  11.11 - 4.270 &= 6.84 \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Business B is more profitable for approximately 6.84 months.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 41',
    content:
      'The amount of fuel in a car\'s tank, $V$, in litres, can be modelled by a\nlinear function, $V = mx + c$, where\n$x$ is the distance driven measured in kilometres.\nAfter driving $100$ km, the amount of fuel in\nthe tank is $33$ litres.\n\n- Write down an equation that describes this information. <span class="marks">[1]</span>\n\n\nAfter driving $250$ km, the amount of fuel in\nthe tank is $22.5$ litres.\n\n- Write down an equation that describes this second piece of\ninformation. <span class="marks">[1]</span>\n\n- Calculate the amount of fuel in the tank after driving\n$50$ km. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- Substituting $x = 100$ and $V = 33$ in the equation $V = mx + c$, we\nget\n\n  $$\n  \\begin{aligned}\n  33 = m(100) + c \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{33 = 100m+c} \\hspace{0.8em}\n  $$\n\n- Substituting $x = 250$ and $V = 22.5$ in the equation $V = mx + c$,\nwe obtain\n\n  $$\n  \\begin{aligned}\n  22.5 = m(250) + c \\hspace{0.8em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{22.5 = 250m+c} \\hspace{1.6em}\n  $$\n\n- From parts (a) and (b), we have\n\n  $$\n  \\begin{aligned}\n  100m + c &= 33  \\qref{(1)} \\\\[6pt]\n  250m + c &= 22.5 \\hspace{0.75em} \\qref{(2)}\\end{aligned}\n  $$\n\n  Solving\nthe system of linear equations $(1)$-$(2)$ for $m$ and $c$, we get\n\n  $$\n  \\begin{aligned}\n  \n  \\hspace{8.5em} \\begin{array}{rcl}\n  m &=& -0.07 \\\\[6pt]\n  c &=& 40\n  \\end{array} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence, evaluating $V = -0.07x + 40$ for $x = 50$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.9em} V &= -0.07(50) + 40 \\\\[6pt]\n  &\\answer{= 36.5 \\text{ litres}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 42',
    content:
      'The water depth, $D$, in metres, in a boating marina on a particular day\ncan be modelled by the function\n\n$$\n\\begin{aligned}\nD(t) &= 4\\sin\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t) + 12.5, \\hspace{0.5em} 0 \\leq t \\leq 24,\\end{aligned}\n$$\n\nwhere $t$ is the elapsed time, in hours, since midnight.\n\n- Write down the depth of water at midnight. <span class="marks">[1]</span>\n\n- The cycle of water depths repeats every T hours. Find the value\nof T. <span class="marks">[2]</span>\n\n- \n  - Write down the minimum and maximum depths of water\nduring the day.\n  - Find the times at which the minimum and maximum depths of water\noccur during the day.<span class="marks">[4]</span>\n\n\n- Draw the graph of $D$ versus $t$ on the grid below.<span class="marks">[3]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/13a225e5-63c6-476e-81ff-2ded39715f6e/images/9f9c68ce-1d0d-4487-a7d2-c9a33bc05e53/65ae508d3aaa92f2c9dd08b381c4298f16693fe9.svg)\n\n\n- A ship with $8$ m draught is allowed to\nenter the marina if the depth of water is greater than\n$10$ m. Find the time interval before\nmidday, in hours and minutes, during which the ship is not\nallowed to enter the marina. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- $\\answer{12.5\\text{ m}}$\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{T} &= \\dfrac{360}{30} \\hspace{0.1em} \\\\[6pt]\n  &\\answer{=12}\\end{aligned}\n  $$\n\n- \n  - The min and max values of the sine function are $-1$ and $+1$.\nHence the min and max depths of water are\n\n    $$\n    \\begin{aligned}\n    D_{\\text{min}} &=  4(-1)+12.5 \\hspace{0.2em} \\\\[6pt]\n    &\\answer{= 8.5\\text{ m}} \\\\[15pt]\n    D_{\\text{max}} &=  4(+1)+12.5 \\\\[6pt]\n    &\\answer{= 16.5\\text{ m}}\\end{aligned}\n    $$\n\n  - Solving the equation $D(t) = 8.5$ for $t$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.9em} 4\\sin\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t) + 12.5 &= 8.5 \\\\[6pt]\n    t &= 9,\\hspace{0.25em} 21 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence the min depth of water occurs at\n$\\answer{9 \\text{ am}}$\nand\n$\\answer{9 \\text{ pm}}$\n    Similarly, solving the equation $D(t) = 16.5$ for $t$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.8em} 4\\sin\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t) + 12.5 &= 16.5 \\\\[6pt]\n    t &= 3,\\hspace{0.25em} 15 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence the max depth of water occurs at\n$\\answer{3 \\text{ am}}$\nand\n$\\answer{3 \\text{ pm}}$\n\n- If we draw the graph of $D$ versus $t$ on the grid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/13a225e5-63c6-476e-81ff-2ded39715f6e/images/3fbc1ff1-c2d9-4c80-a98e-ea0dfbdfbd10/51784b29690fe6ba6b16afe9863a1352814ae7c6.svg)\n\n\n- Solving the equation $D(t) = 10$ for $t < 12$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.8em} 4\\sin\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t) + 12.5 &= 10 \\\\[6pt]\n  t &\\approx 7.289,\\hspace{0.25em} 10.711 \\hspace{2.8em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  We have\n\n  $$\n  \\begin{aligned}\n  0.289(60) &= 17.34 \\hspace{1em} \\\\[6pt]\n  0.711(60) &= 42.66\\end{aligned}\n  $$\n\n  Hence the ship is not allowed to\nenter the marina\n$\\answer{\\text{between 7:17 am and 10:43 am}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 43',
    content:
      'The number of French words, $N$, that are remembered by students after\nthe completion of a French language course decreases exponentially over\ntime. This data can be modelled by the function\n\n$$\n\\begin{aligned}\nN(t) = a\\times b^{-t} + 450,\\end{aligned}\n$$\n\nwhere $a$ and $b$ are\npositive constants, and $t$ is the time in years since a student\ncompleted the French language course.\nImmediately after completion, a student remembers $4200$ French words.\n\n- Find the value of $a$. <span class="marks">[2]</span>\n\n\nAfter $4$ years a student remembers only $1600$ French words.\n\n- Find the value of $b$. <span class="marks">[3]</span>\n\n\nThe number of French words a student remembers never decreases below a\ncertain number of words, $n$.\n\n- Write down the value of $n$. <span class="marks">[1]</span>  \n',
    markScheme:
      '\n- Solving the equation $N(0) = 4200$ for $a > 0$, we get\n\n  $$\n  \\begin{aligned}\n  a\\times b^{-0} + 450 &= 4200 \\hspace{5.4em} \\\\[6pt]\n  a + 450 &= 4200 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{a = 3750}\n  $$\n\n- Solving the equation $N(4) = 1600$ for $b > 0$, we obtain\n\n  $$\n  \\begin{aligned}\n  3750\\times b^{-4} + 450 &= 1600 \\hspace{6.9em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.6em} \\answer{b \\approx 1.34} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- If we draw the graph of $y = N(t)$, for $t \\geq 0$ [by using\nG.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1aa30751-ed4b-44ac-bb07-63116dc7d37f/images/2a235dae-dec6-4e18-9719-39fb24c0f276/5f0266262d56defec1ffa52f191a9228b568fd3e.svg)\n\n\n  Hence the value of $n$ is\n$\\answer{450}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 44',
    content:
      'Mehmet organises a graduation party on a boat in the Strait of Istanbul\nfor his peers from college. The cost to rent a large boat for the\nevening is $5000$ Turkish liras (TRY) and the cost to hire a DJ is\n$1500$ TRY. The cost for food and drinks is estimated to be $125$ TRY\nper person.\n\n- Find an expression for the total cost, $y$ TRY, of the evening in\nterms of the number of peers, $x$, attending the party. <span class="marks">[2]</span>\n\n- Find the total cost of the evening if $40$ peers attend the party.\n<span class="marks">[2]</span>\n\n- Given that Mehmet decides to collect $250$ TRY from each peer\nattending the party, find the least number of peers he has to invite\nto be able to cover the total cost of the evening. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.8em} \\text{Total cost} &= \\text{Fixed costs} +  \\text{Variable costs} \\\\[6pt]\n  y &= (5000+1500) + 125x \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{y = 6500 + 125x} \\hspace{1.2em}\n  $$\n\n- Evaluating $y = 6500 + 125x$ for $x = 40$, we get\n\n  $$\n  \\begin{aligned}\n  y &= 6500 + 125(40) \\\\[6pt]\n  &\\answer{= 11\\hspace{0.15em}500 \\text{ TRY}}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{Total cost} &= 250x \\hspace{9.2em} \\\\[6pt]\n  6500 + 125x &= 250x \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{5.1em} \\answer{x = 52} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 45',
    content:
      'The water depth, $D$, in metres, at the entrance of a boating harbour\ncan be modelled by the function\n\n$$\n\\begin{aligned}\nD(t) &= 4.5\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t + \\ang{90}) + 15, \\hspace{0.5em} 0 \\leq t \\leq 24,\\end{aligned}\n$$\n\nwhere $t$ is the elapsed time, in hours, since midnight.\n\n- Write down the depth of water at midnight. <span class="marks">[1]</span>\n\n- The cycle of water depths repeats every T hours. Find the value\nof T. <span class="marks">[2]</span>\n\n- \n  - Write down the minimum and maximum depths of water\nduring the day.\n  - Find the times at which the minimum and maximum depths of water\noccur during the day.<span class="marks">[4]</span>\n\n\n- Draw the graph of $D$ versus $t$ on the grid below.<span class="marks">[3]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5eb2e8d5-7054-4bdd-9c01-bd9a1fa5f2b9/images/2593030c-67cf-409b-9794-ba745de824ef/5ebec9fd250b988a5cdb00654083b4ecdda5ad72.svg)\n\n\n- A ship with $10$ m draught is allowed to\nenter the harbour if the depth of $\\text{water}$ is greater\nthan $12$ m. Find the time interval\nafter midday, in hours and minutes, during which the ship is\nnot allowed to enter the harbour. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- $\\answer{15\\text{ m}}$\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{T} &= \\dfrac{360}{30} \\hspace{0.1em} \\\\[6pt]\n  &\\answer{=12}\\end{aligned}\n  $$\n\n- \n  - The min and max values of the cosine function are $-1$ and $+1$.\nHence the min and max depths of water are\n\n    $$\n    \\begin{aligned}\n    D_{\\text{min}} &=  4.5(-1)+15 \\hspace{0.2em} \\\\[6pt]\n    &\\answer{= 10.5\\text{ m}} \\\\[15pt]\n    D_{\\text{max}} &=  4.5(+1)+15 \\\\[6pt]\n    &\\answer{= 19.5\\text{ m}}\\end{aligned}\n    $$\n\n  - Solving the equation $D(t) = 10.5$ for $t$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.2em} 4.5\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t + \\ang{90}) + 15 &= 10.5 \\\\[6pt]\n    t &= 3,\\hspace{0.25em} 15 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence the min depth of water occurs at\n$\\answer{3 \\text{ am}}$\nand\n$\\answer{3 \\text{ pm}}$\n    Similarly, solving the equation $D(t) = 19.5$ for $t$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.1em} 4.5\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t + \\ang{90}) + 15 &= 19.5 \\\\[6pt]\n    t &= 9,\\hspace{0.25em} 21 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence the max depth of water occurs at\n$\\answer{9 \\text{ am}}$\nand\n$\\answer{9 \\text{ pm}}$\n\n- If we draw the graph of $D$ versus $t$ on the grid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5eb2e8d5-7054-4bdd-9c01-bd9a1fa5f2b9/images/26c8f477-b4fc-4200-831b-ec38467e5a08/86eb70569effce9a800c12036b0b3ecc63fb97b4.svg)\n\n\n- Solving the equation $D(t) = 12$ for $t > 12$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.1em} 4.5\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t + \\ang{90}) + 15 &= 12 \\\\[6pt]\n  t &\\approx 13.394,\\hspace{0.25em} 16.606 \\hspace{2em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  We have\n\n  $$\n  \\begin{aligned}\n  0.394(60) &= 23.64 \\hspace{1em} \\\\[6pt]\n  0.606(60) &= 36.36\\end{aligned}\n  $$\n\n  Hence the ship is not allowed to\n\n  enter the harbour\n$\\answer{\\text{b\\(/\\)n 1:24 pm and 4:36 pm}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 46',
    content:
      'Two carpet cleaning companies have different pricing structures.\nCarpetShine charges $1.80$ AUD per square metre, plus an upfront\nscheduling fee of $50$ AUD. CleanMaster has no scheduling a service fee,\nbut the rate is $2.50$ AUD per square metre. Let $C_1(x)$ and $C_2(x)$\nbe the costs, in AUD, of cleaning $x$ square metres of carpet area by\nCarpetShine and CleanMaster respectively.\n\n- Write down expressions for the costs, $C_1$ and $C_2$, of cleaning\n$x$ square metres of carpet area. <span class="marks">[2]</span>\n\n- Find the least number of whole square metres of carpet area cleaned\nby $\\text{CarpetShine}$ for its $\\text{services}$ to\nbe a cheaper option. <span class="marks">[3]</span>\n\n',
    markScheme:
      "\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{CarpetShine}:&\\hspace{0.75em}\\hspace{0.525em} \\answer{C_1(x) = 1.80x + 50} \\hspace{0.6em} \\qref{(1)}  \\\\[8pt]\n  \\text{CleanMaster}:&\\hspace{0.75em}\\hspace{0.525em} \\answer{C_2(x) = 2.50x} \\qref{(2)}\\end{aligned}\n  $$\n\n- If we sketch the graphs of $(1)$ and $(2)$, for $x \\geq 0$ [by\nusing G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5fc2ff98-42dc-416f-a3a0-c7e1d46e3145/images/51d828e3-1f65-46c3-8c32-7a9992ed51a6/222304bb048f5e481f5e9f67da7635f92b5b303e.svg)\n\n\n  Hence\n$\\answer{\\text{at least \\(72\\) whole square metres}}$\nof carpet area is required for\n  CarpetShine's cleaning services to be a cheaper option.\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 47',
    content:
      'The mass of a radioactive sample is given by\n\n$$\nM(t)=P+Q\\left(\\dfrac{1}{2}\\right)^\\frac{t}{300}, \\qquad t\\geq 0 \\text{ days.}\n$$\n\nwhere t is the number of days after the sample was collected and\nmeasured.\nThe initial weight of the sample is $20 \\text{ g}$. When each atom emits\nits $\\alpha$-particle, the mass of the atom is reduced by $3.2\\%$.\n\n- \n  - Explain why P is the final mass of the sample after every atom\nin the sample has emitted its $\\alpha$-particle.\n  - Hence, find the value of P, leaving your answer correct to two\ndecimal places. <span class="marks">[2]</span>\n\n\n- Find the value of Q. <span class="marks">[2]</span>\n\n- Estimate the mass of the sample after $2.5$ years (assume no leap\nyears). <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - We have\n\n    $$\n    M(t)=P+Q\\left(\\dfrac{1}{2}\\right)^\\frac{t}{300}\n    $$\n\n    $\\answer{{\\text{As } t\\rightarrow \\infty, \\left(\\dfrac{1}{2} \\right)^\\frac{t}{300} \\rightarrow 0. \\text{ Therefore }, M(\\infty) \\approx P.}}$\n  - Hence\n\n    $$\n    \\begin{aligned}\n    \\hspace{2cm}P &= 0.968\\times 20 \\qquad [\\text{$96.8\\%$ of $20$}]\\\\[6pt]\n    &\\hspace{0.35em}\\answer{ \\approx 19.36 \\text{ g}}\\end{aligned}\n    $$\n\n\n- We have $M(0)=20$\n\n  $$\n  \\begin{aligned}\n  M(0) &= P+Q\\left(\\dfrac{1}{2}\\right)^0\\\\[6pt]\n  20 &= 19.36+Q\\\\[6pt]\n  &\\hspace{-0.25cm}\\answer{ Q = 0.64 }\\end{aligned}\n  $$\n\n- $2.5$ years is $2.5\\times 365 = 912.5 \\text{ days}$. Hence, we get\n\n  $$\n  \\begin{aligned}\n  M(912.5) &= 19.36+0.64\\left(\\dfrac{1}{2}\\right)^{\\frac{912.5}{300}}\\\\[8pt]\n  &\\hspace{0.35em}\\answer{\\approx 19.4  \\text{ g}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 48',
    content:
      'An oil tank at a mine site was at full capacity before the tank incurred\na puncture in the base and the oil start to leak out. A site engineer\nused the following function, $L(t)$, to model the percentage of oil\nremaining in the tank\n\n$$\nL(t)=100e^{-kt},\\quad t\\geq0,\n\n$$\n\nwhere $t$ is the\nnumber of days after the puncture occurred.\nThe engineer found that after one day, $30\\%$ of the oil originally in\nthe tank had leaked out.\n\n- Find the value of $k$. <span class="marks">[2]</span>\n\n- Use this model to find the percentage of oil remaining in the tank\nafter $30$ hours. <span class="marks">[2]</span>\n\n\nBased on the model, the engineer makes the claim that the tank will\nalways have some oil in it and never completely empty.\n\n- State a mathematical reason supporting the engineers claim.\n<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- If $30\\%$ oil has leaked, there is $70\\%$ remaining in the tank. We\ncan substitute in $L=70$ and $t=1$ to find $k$, as follows\n\n  $$\n  \\begin{aligned}\n  L(t) &=100e^{-kt}\\\\[6pt]\n  70 &=100e^{-k(1)}  \\\\[8pt]\n  &\\hspace{-0.3em}\\answer{\\text{k}\\approx0.357}  \\hspace{2em} [\\text{using GDC}]\\end{aligned}\n  $$\n\n- $30$ hours is equal to $1.25$ days ($30/24=1.25$). Hence, we get\n\n  $$\n  \\begin{aligned}\n  L(1.25) &= 100e^{-0.357(1.25)} \\\\[6pt]\n  &\\hspace{0.5em}\\answer{=64 \\%}\n  \\end{aligned}\n  $$\n\n- We have $L(t)=100e^{-0.357t}$\n  As $t\\rightarrow \\infty,\\,\\, L(t)\\rightarrow 0$. Hence, there is a horizontal asymptote at $L=0$. The percentage of oil remaining gets very close to zero, but never reaches it.\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 49',
    content:
      'Two IT consulting firms have different pricing structures. TechMind\ncharges $\\$115$ per hour, plus an upfront fee of $\\$250$ for booking an\nappointment. RiddleBreak doesn\'t charge for booking an appointment, but\nthe rate is $\\$160$ per hour. Let $C_1(t)$ and $C_2(t)$ be the costs, in\ndollars, of consulting $t$ hours by TechMind and RiddleBreak\nrespectively.\n\n- Write down expressions for the costs of consulting, $C_1$ and $C_2$,\nin terms of the number of hours, $t$, charged. <span class="marks">[2]</span>\n\n- Find the least number of whole hours of consulting from TechMind for\nits $\\text{services}$ to be a cheaper option. <span class="marks">[3]</span>\n\n',
    markScheme:
      "\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{TechMind}:&\\hspace{0.75em}\\hspace{0.525em} \\answer{C_1(t) = 115t + 250} \\hspace{0.6em} \\qref{(1)}  \\\\[8pt]\n  \\text{RiddleBreak}:&\\hspace{0.75em}\\hspace{0.525em} \\answer{C_2(t) = 160t} \\qref{(2)}\\end{aligned}\n  $$\n\n- If we sketch the graphs of $(1)$ and $(2)$, for $t \\geq 0$ [by\nusing G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9ff19c56-9082-4058-a2cf-c84b25aad999/images/a990f43d-8499-4644-b38a-ba9bd26a4dc4/798f80d7abe42cc91e804962407e19461e89e38d.svg)\n\n\n  Hence\n$\\answer{\\text{at least \\(6\\) whole hours}}$\nis required for TechMind's consulting services\n  to be a cheaper option.\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 50',
    content:
      'The dietary reference intake (DRI, in grams), $y$, of protein for a\nsedentary male adult of mass $x$ kg is\ndetermined by the equation $y = mx + c$, where $m$ and $c$ are\nconstants.\nFor a male adult of mass $60$ kg the DRI of\nprotein is $69$ grams, and for a male adult of mass\n$90$ kg the DRI of protein is $91.5$ grams.\n\n- Determine the value of $m$ and the value of $c$. <span class="marks">[3]</span>\n\n- Find the DRI of protein for a male adult of mass\n$70$ kg. <span class="marks">[2]</span>\n\n- Suggest a reason why the equation may not be appropriate for\ndetermining the DRI of protein for a male child of mass\n$40$ kg. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  69 &= 60m + c \\hspace{3.5em} \\qref{(1)} \\\\[6pt]\n  91.5 &= 90m + c \\qref{(2)}\\end{aligned}\n  $$\n\n  Solving the system of\nlinear equations $(1)$-$(2)$ for $m$ and $c$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} \\answer{m = 0.75}\\hspace{0.525em}\\text{ and }\\hspace{0.525em}\\answer{c = 24} \\hspace{2.5em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- Evaluating $y = 0.75x + 24$ for $x = 70$, we obtain\n\n  $$\n  \\begin{aligned}\n  y &= 0.75(70) + 24 \\\\[6pt]\n  &\\answer{= 76.5 \\text{ grams}}\\end{aligned}\n  $$\n\n- The relationship may no longer be linear outside the range of weights of male adults.\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 51',
    content:
      'The graph of a quadratic function has a $y$-intercept at A$(0,24)$ and\none of its $x$-intercepts is B$(2,0)$.\nThe $x$-coordinate of the vertex of the graph is $4$.\nThe equation of the quadratic function is in the form $y = ax^2+bx+c$.\n\n- Write down the value of $c$. <span class="marks">[1]</span>\n\n- Find the value of $a$ and the value of $b$. <span class="marks">[4]</span>\n\n- Write down the coordinates of the second $x$-intercept of the\nfunction. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- $\\answer{c = 24}$\n- Using the axis of symmetry formula, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.4em} 4 &= -\\dfrac{b}{2a} \\hspace{3em} [\\text{since $x = 4$}] \\\\[6pt]\n  b &= -8a \\qref{(1)}\\end{aligned}\n  $$\n\n  Using the coordinates of B, we\nget\n\n  $$\n  \\begin{aligned}\n  0 &= a(2)^2 + b(2) + c \\\\[6pt]\n  [\\text{from $(1)$ \\& part (a)}] \\hspace{2em} 0 &= a(2)^2 + (-8a)(2) + 24 \\hspace{3.6em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{8.1em} \\answer{a = 2} \\\\[3pt] \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n  Hence, substituting $a = 2$ in the equation $(1)$, we obtain\n\n  $$\n  \\begin{aligned}\n  b &= -8(2) \\hspace{0.4em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{b = -16} \\hspace{1.7em}\n  $$\n\n- $\\answer{(6,0)}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 52',
    content:
      'The following table shows the total revenue, $y$, in Australian dollars\n(AUD), $\\text{obtained}$ daily during the first week of January\n$2020$, by Peppy\'s Pizza $\\text{restaurant}$ and the number of\nguests, $x$, served.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/0b8e05a7-0c33-4aef-a8f9-eaa7da8cacbd/images/5c7e3e73-93f7-4332-8ef8-a9fee762c9a8/9736e8eb9c9cfe8a065bfa8f5344721e7887b704.svg)\n\n\n\n- \n  - Calculate the Pearson\'s product-moment correlation coefficient,\n$r$, for this data.\n  - Hence comment on the result. <span class="marks">[4]</span>\n\n\n- Write down the equation of the regression line $y$ on $x$.\n<span class="marks">[2]</span>\n\n- Use the line of the regression to estimate the revenue of serving\n$70$ guests. Give your answer correct to the nearest AUD.\n<span class="marks">[3]</span>\n\n\nDaily maintenance cost for the restaurant is $240$ AUD. Additionally,\nthe cost of serving one guest is $5$ AUD.\n\n- Determine if the restaurant makes a profit when serving\n$45$ guests on a $\\text{particular}$ day. <span class="marks">[2]</span>\n\n- \n  - Write down an expression for the total revenue of serving $x$\nguests.\n  - Find an expression for the profit of the restaurant when serving\n$x$ guests on a particular day.\n  - Find the least number of guests required to be served to result\nin a profit for the day. <span class="marks">[5]</span>\n\n\n',
    markScheme:
      '\n- \n  - $\\answer{r = 0.991}$ [$\\text{by using G.D.C.}$]\n  - $\\answer{\\text{Positive, strong correlation b/n the number of guests and revenue}}$\n\n- $\\answer{y = 10.4x - 14.3}$ [$\\text{by using G.D.C.}$]\n- Evaluating $y = 10.4x - 14.3$ for $x = 70$, we get\n\n  $$\n  \\begin{aligned}\n  y &= 10.4(70) - 14.3 \\\\[6pt] \n  &= 713.7 \\\\[6pt]\n  &\\answer{\\approx 714 \\text{ AUD}}\\end{aligned}\n  $$\n\n- The profit of the restaurant when serving $45$ guests on a\nparticular day is\n\n  $$\n  \\begin{aligned}\n  \\text{Profit} &= \\text{Revenue} - \\text{Costs} \\\\[6pt]\n  &= 410 - (240 + 5(45)) \\\\[6pt]\n  &= -55 \\text{ AUD} \\\\\n  \\end{aligned}\n  $$\n\n  $\\answer{\\text{Hence the restaurant makes a loss when serving only \\(45\\) guests.}}$\n- \n  - $\\answer{\\mathrm{Revenue} = 10.4x - 14.3}$\n  - We have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.4em} \\mathrm{Profit} &= \\text{Revenue} - \\text{Costs} \\\\[6pt]\n    &= (10.4x - 14.3) - (240 + 5x) \\\\[6pt]\n    &= 10.4x - 14.3 - 240 - 5x \\\\[6pt]\n    &\\answer{= 5.4x - 254.3}\\end{aligned}\n    $$\n\n  - Solving the equation $\\text{Profit} = 0$ for $x$, we obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.1em} 5.4x - 254.3 &= 0 \\\\[6pt]\n    x &\\approx 47.1 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence\n$\\answer{\\text{at least \\(48\\) guests}}$\nare required to be served to result in a profit.\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '16',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 53',
    content:
      'The following table shows the total revenue, $y$, in US dollars (USD),\n$\\text{obtained}$ monthly during the first six months of $2020$,\nby Law Office of Fox Brothers and the number of clients, $x$, served.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/3fada96d-f0c9-41f0-9d39-499c701ec1ba/images/c0269508-9618-4eab-8784-4661a19513ee/e4734e7152b428b88af8a05241306257c07d8464.svg)\n\n\n\n- \n  - Calculate the Pearson\'s product-moment correlation coefficient,\n$r$, for this data.\n  - Hence comment on the result. <span class="marks">[4]</span>\n\n\n- Write down the equation of the regression line $y$ on $x$.\n<span class="marks">[2]</span>\n\n- Use the line of the regression to estimate the revenue of serving\n$20$ clients. Give your answer correct to the nearest USD.\n<span class="marks">[3]</span>\n\n\nMonthly operating cost for the law office is $\\$2500$. Additionally, the\ncost of serving each client is $\\$200$.\n\n- Determine if the law office makes a profit when serving $6$\nclients on a $\\text{particular}$ month. <span class="marks">[2]</span>\n\n- \n  - Write down an expression for the total revenue of serving $x$\nclients.\n  - Find an expression for the profit of the law office when serving\n$x$ clients on a particular month.\n  - Find the least number of clients required to be served to result\nin a profit for the month. <span class="marks">[5]</span>\n\n\n',
    markScheme:
      '\n- \n  - $\\answer{r = 0.995}$ [$\\text{by using G.D.C.}$]\n  - $\\answer{\\text{Positive, strong correlation b/n the number of clients and revenue}}$\n\n- $\\answer{y = 654x - 541}$ [$\\text{by using G.D.C.}$]\n- Evaluating $y = 654x - 541$ for $x = 20$, we get\n\n  $$\n  \\begin{aligned}\n  y &= 654(20) - 541 \\hspace{0.5em} \\\\[6pt]\n  &= 12\\hspace{0.15em}539 \\\\[6pt]\n  &\\answer{= 12\\hspace{0.15em}539} \\end{aligned}\n  $$\n\n- The profit of the law office when serving $6$ clients on a\nparticular month is\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.5em} \\text{Profit} &= \\text{Revenue} - \\text{Costs} \\\\[6pt]\n  &= 3000 - (2500 + 200(6)) \\\\[6pt]\n  &= -\\$700 \\\\\n  \\end{aligned}\n  $$\n\n  $\\answer{\\text{Hence the law office makes a loss when serving only \\(6\\) clients.}}$\n- \n  - $\\answer{\\mathrm{Revenue} = 654x - 541}$\n  - We have\n\n    $$\n    \\begin{aligned}\n    \\hspace{4.3em} \\mathrm{Profit} &= \\text{Revenue} - \\text{Costs} \\\\[6pt]\n    &= (654x - 541) - (2500 + 200x) \\\\[6pt]\n    &= 654x - 541 - 2500 - 200x \\\\[6pt]\n    &\\answer{= 454x - 3041}\\end{aligned}\n    $$\n\n  - Solving the equation $\\text{Profit} = 0$ for $x$, we obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.1em} 454x - 3041 &= 0 \\\\[6pt]\n    x &\\approx 6.70 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence\n$\\answer{\\text{at least \\(7\\) clients}}$\nare required to be served to result in a profit.\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '16',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 54',
    content:
      'The brightness of a star can be measured in terms of its apparent magnitude, $M$, as seen from Earth.\nThe amount of energy received on Earth by a star is called the the observed flux density, $F$.\n$M$ and $F$ are related by the following formula\n\n$$\n\\frac{M}{2.5} = \\log_{10}\\left(\\frac{1}{F}\\right)\n$$\n\n\n- If a star has a value of $F=2500$, find the value of $M$.<span class="marks">[2]</span>\n\n- Find $F$ as a function of $M$.<span class="marks">[2]</span>\n\n\nThe apparent magnitude of the sun is known to be $M_s=-26.8$ and the apparent magnitude of the full moon is known to be $M_m=-12.7$.\n\n- Find their brightness factor, $\\dfrac{F_s}{F_m}$, to three significant figures in the form $a\\times10^k$, where $1<a<10$ and $k\\in \\mathbb{Z}$.<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Using the numerical solver on the G.D.C.\n\n  $$\n  \\begin{align*}\n  \\frac{M}{2.5} &= \\log_{10}\\left(\\frac{1}{2500}\\right)\\tag*{\\textbf{M1}}\\\\\n      M&=-8.49485...\\\\[6pt]\n      &=\\hspace{0.525em}\\tcbhighmath{-8.49} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- First we raise both sides of the equation to the power of $10$.\n  The R.H.S. is such that $10^{\\log_{10}\\tfrac{1}{F}}=\\frac{1}{F}$.\n  Hence\n\n  $$\n  \\begin{align*}\n      10^{\\tfrac{M}{2.5}}&=\\frac{1}{F} \\tag*{\\textbf{A1}}\\\\[6pt]\n      F&=\\hspace{0.525em}\\answer{10^{-\\tfrac{M}{2.5}}} \\hspace{2em} \\text{or } \\hspace{2em} \\hspace{0.525em}\\tcbhighmath{\\frac{1}{10^{\\tfrac{M}{2.5}}}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We can use the formula from part (b) to find $F_s=F(-26.8)$ and  $F_m=F(-12.7)$. Hence\n\n  $$\n  \\begin{align*}\n      \\frac{F_s}{F_m}&=\\frac{F(-26.8)}{F(-12.7)} \\tag*{\\textbf{M1}}\\\\[6pt]\n      &=\\frac{10^{-\\tfrac{-26.8}{2.5}}}{10^{-\\tfrac{-12.7}{2.5}}}\n  \\end{align*}\n  $$\n\n  Notice the negative signs cancel out.\n\n  $$\n  \\begin{align*}\n      &=\\frac{5.248...\\times10^{10}}{120226.44..} \\tag*{\\textbf{A1}}\\\\\n      &=436515.8...\\\\[6pt]\n      &=\\hspace{0.525em}\\tcbhighmath{4.37 \\times 10^5} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 55',
    content:
      'The data below shows the price, $y$, in Kazakhstani tenge (KZT), that\neach bag of wheat flour can be purchased for at a wholesale market in\nAlmaty if $x$ bags are ordered.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/620f11cc-de36-420f-8fd5-6f61bec6fd2e/images/6fdb89eb-7ab4-4f60-a277-9ebc4bccb019/5a253ce60e250108cf649fd1f8dc000abcca0657.svg)\n\n\n\n- Find an expression for the price, $y$ KZT, of each bag purchased in\nterms of the number of bags, $x$, ordered. <span class="marks">[2]</span>\n\n- Hence find the exact total cost of purchasing $250$ bags of wheat\nflour. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- From the data we see that $y$ is determined by the linear equation\n$y= mx + c$.\n  Hence we have\n\n  $$\n  \\begin{aligned}\n  50m + c &= 6500  \\qref{(1)} \\\\[6pt]\n  100m + c &= 6000 \\hspace{0.75em} \\qref{(2)}\\end{aligned}\n  $$\n\n  Solving\nthe system of linear equations $(1)$-$(2)$ for $m$ and $c$, we get\n\n  $$\n  \\begin{aligned}\n  \n  \\hspace{8.9em} \\begin{array}{rcl}\n  m &=& -10 \\\\[6pt]\n  c &=& 7000\n  \\end{array} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{y = -10x + 7000}$\n- Evaluating $y = -10x + 7000$ for $x = 250$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.8em} y &= -10(250) + 7000 \\\\[6pt]\n  &= 4500 \\text{ KZT}\\end{aligned}\n  $$\n\n  Hence the total cost of\npurchasing $250$ bags of wheat flour is\n\n  $$\n  \\begin{aligned}\n  \\text{Total cost} &= 4500(250) \\\\[6pt]\n  &\\answer{= 1\\hspace{0.15em}125\\hspace{0.15em}000 \\text{ KZT}} \\hspace{1em}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 56',
    content:
      'The average gasoline price, $P$, in cents per gallon, in USA $2019$ can\nbe modelled by the function\n\n$$\n\\hspace{1em} P(t) = a\\cos\\hspace{0.15em}(\\ang{15}\\hspace{-0.15em}\\times t+\\ang{90}) + b, \\hspace{0.5em} 0 \\leq t \\leq 365,\n$$\n\nwhere $t$ is the elapsed time, in days, since New Year\'s Eve $2018$.\nPart of the graph of $y = P(t)$ is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/80d14f42-a9e9-49a9-8f34-f3ad09b8c895/images/f323592f-678a-4312-aa48-55fd411bb4ce/eba99471e7227e6ca3549b0274fdd498563d4121.svg)\n\n\n\n- Write down the value of $b$. <span class="marks">[1]</span>\n\n\nThe average price of gasoline at the end of $14$th of January, $2019$ was $328$\ncents per gallon.\n\n- Show that the value of $a$ is equal to 56. <span class="marks">[2]</span>\n\n- Hence calculate:\n  \n  - the average gasoline price on the $14$th of February, $2019$;\n  - the minimum and maximum average prices of gasoline in USA\n$2019$. <span class="marks">[3]</span>\n\n\n\nThe cycle of average gasoline prices repeats every T days.\n\n- Determine the value of T.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- $\\answer{300}$\n- Solving the equation $P(14) = 328$ for $a$, we get\n\n  $$\n  \\begin{aligned}\n  a\\cos\\hspace{0.15em}(\\ang{15}\\hspace{-0.15em}\\times 14+\\ang{90}) + 300 &= 328 \\hspace{10em} \\\\[6pt]\n  a\\cos \\ang{300} + 300 &= 328 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.2em} \\answer{a = 56} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- \n  - Evaluating $P(t)$ for $t = 31+14 = 45$, we obtain\n\n    $$\n    \\begin{aligned}\n    P(45) &= 56\\cos\\hspace{0.15em}(\\ang{15}\\hspace{-0.15em}\\times 45+\\ang{90}) + 300 \\\\[6pt]\n    &\\answer{\\approx 340 \\text{ cents per gallon}}\\end{aligned}\n    $$\n\n  - The min and max values of the cosine function are $-1$ and $+1$.\nHence the min and max average prices are\n\n    $$\n    \\begin{aligned}\n    P_{\\text{min}} &= 56(-1)+300 \\\\[6pt]\n    &\\answer{\\approx 244 \\text{ cents per gallon}} \\hspace{3em} \\\\[15pt]\n    P_{\\text{max}} &= 56(+1)+300 \\\\[6pt]\n    &\\answer{\\approx 356 \\text{ cents per gallon}}\\end{aligned}\n    $$\n\n\n- Using G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/80d14f42-a9e9-49a9-8f34-f3ad09b8c895/images/95fdb075-ae11-4e91-9c51-45fed90c3c09/0189e79cc182a1047199d3fb9dc1b367d698bb2d.svg)\n\n\n  Hence we find\n$\\answer{\\text{T} = 24}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 57',
    content:
      'Part of the graph of $y = f(x)$ is shown below. The point A$(3,4)$ lies\non the graph.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/bc997ee1-157a-4954-840a-c7cf3a649ca9/images/40752509-d462-43d8-b4eb-2c65b6d2b48f/cc26169f3e878b541f9e30065e66509e180ee603.svg)\n\n\n\n- Write down the value of $f(3)$. <span class="marks">[1]</span>\n\n\nThe tangent line $L$ to the graph of $y = f(x)$ at point A has equation\n$y = 3x - 5$.\n\n- Find the equation of the normal line $N$ to the graph of\n$y = f(x)$ at point A. Give your answer in the form\n$ax + by + d = 0$, where $a, b, d \\in \\mathbb{Z}$. <span class="marks">[3]</span>\n\n- Draw the lines $L$ and $N$ on the same grid above,\nlabelling the intercepts with the axes. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{f(3) = 4}$\n- The gradient of $N$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.7em} m_{N} &= -\\dfrac{1}{m_{L}} \\hspace{3em} [\\text{since $N \\perp L$}] \\\\[6pt]\n  &= -\\dfrac{1}{3}\\end{aligned}\n  $$\n\n  Hence, using the point-gradient\nformula with A$(3,4)$ and $m = -1/3$, we get\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\\\[5pt]\n  y - 4 &= -\\dfrac{1}{3}\\hspace{0.05em}(x - 3) \\\\[6pt]\n  \\hspace{1.0em} 3(y - 4) &= -(x - 3) \\\\[11pt]\n  3y - 12 &= -x + 3 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{x + 3y - 15 = 0} \\hspace{4.65em}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  L:&\\hspace{1em} y = 3x - 5 \\\\[10pt] \n  \\text{$x$-intercept}:& \\hspace{1em} \\mathrm{B}(5/3,0) \\\\[10pt]\n  \\text{$y$-intercept}:& \\hspace{1em} \\mathrm{C}(0,-5)\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  N:&\\hspace{1em} y = -\\dfrac{1}{3}x + 5 \\\\[6pt] \n  \\text{$x$-intercept}:& \\hspace{1em} \\mathrm{D}(15,0) \\\\[10pt]\n  \\hspace{1.1em} \\text{$y$-intercept}:& \\hspace{1em} \\mathrm{E}(0,5)\\end{aligned}\n  $$\n\n  Hence, if we draw the lines $L$ and $N$ on the same grid below,\nindicating the points B and E, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/bc997ee1-157a-4954-840a-c7cf3a649ca9/images/73281b15-cfe0-4b6f-854a-9bef91565be1/a6912eec889f05ce26fa48c17eb09f173f2604d9.svg)\n\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 58',
    content:
      'The number of users on a new social network in $2018$ was\n$320\\hspace{0.15em}000$. One year later, in $2019$, the number of users\non this network is estimated to be $350\\hspace{0.15em}000$. The number\nof the users on this network, $N$, can be modelled by the function\n\n$$\n\\begin{aligned}\nN(t) = 320\\hspace{0.15em}000\\times b^t, \\hspace{0.5em} t\\geq0, \\end{aligned}\n$$\n\nwhere $t$ is the number of years since $2018$ and $b$ is a constant.\n\n- Find the value of $b$. <span class="marks">[2]</span>\n\n- Estimate the number of the users on this network there will be in\n$2023$.<span class="marks">[2]</span>\n\n- Forecast the year for which the number of the social network users\nreaches one million. Give your answer correct to the nearest\nyear. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c0462e85-e9f3-4564-b103-1800a0e6c31a/images/6fd93ccd-3403-459a-b1d0-cc108da6027c/033cf3beecde613f81a96d293306464dcb68241a.svg)\n\n\n  Hence, solving the equation $N(1) = 350\\hspace{0.15em}000$ for $b$,\nwe get\n\n  $$\n  \\begin{aligned}\n  320\\hspace{0.15em}000\\times b &= 350\\hspace{0.15em}000 \\hspace{4.4em} \\\\[9pt]\n  b &= \\dfrac{350\\hspace{0.15em}000}{320\\hspace{0.15em}000} \\\\[6pt]\n  b &= \\dfrac{35}{32} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{b \\approx 1.09} \\hspace{1.4em}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c0462e85-e9f3-4564-b103-1800a0e6c31a/images/84b094eb-d9dd-4085-b69d-76fef087f129/74c77aa092bfa1ac875f40785f7097708883e3e2.svg)\n\n\n  Hence, evaluating $N(t)$ for $t = 5$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.6em} N(5) &= 320\\hspace{0.15em}000\\times \\left(\\dfrac{35}{32}\\right)^5 \\\\[4pt]\n  &\\approx 500\\hspace{0.15em}888 \\\\[10pt]\n  &\\answer{\\approx 501\\hspace{0.15em}000 \\text{ users}}\\end{aligned}\n  $$\n\n  Note: Using a rounded answer from part (a) will produce a different answer. It is very important to use unrounded answers in subsequent parts unless otherwise stated!\n- Solving the equation $N(t) = 1\\hspace{0.15em}000\\hspace{0.15em}000$\nfor $t$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.75em} 320\\hspace{0.15em}000\\times \\left(\\dfrac{35}{32}\\right)^t &= 1\\hspace{0.15em}000\\hspace{0.15em}000 \\\\[6pt]\n  t &\\approx 12.7 \\text{ years} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  If we determine the years corresponding to $t = 12$ and $t=13$, we\nhave\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c0462e85-e9f3-4564-b103-1800a0e6c31a/images/1245122b-6dac-4c68-8899-ca6456b3869e/a616f6ab254b62e363c8d49827ba23ea9d06f1c6.svg)\n\n\n  Hence the number of network users reaches one million\n$\\answer{\\text{during } 2030}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 59',
    content:
      'A cannon-ball is fired from the top of a tower. The height, $h$, in\nmetres, of the cannon-ball above the ground is modelled by the function\n\n$$\n\\begin{aligned}\nh(t) = -2t^2 + 20t + 8, \\hspace{0.5em} t \\geq 0,\\end{aligned}\n$$\n\nwhere\n$t$ is the time, in seconds, since the moment the cannon-ball was fired.\n\n- Write down the height of the tower. <span class="marks">[1]</span>\n\n- Calculate the height of the cannon-ball $5$ seconds after it was\nfired. <span class="marks">[2]</span>\n\n\nThe cannon-ball hits its target on the ground $n$ seconds after it was\nfired.\n\n- Find the value of $n$. <span class="marks">[2]</span>\n\n- Find $h\'(t)$. <span class="marks">[2]</span>\n\n- Calculate the maximum height reached by the cannon-ball,\nand\nwrite down the corresponding time $t$. <span class="marks">[3]</span>\n\n- Determine the total time the cannon ball was above the\nheight of the tower.<span class="marks">[3]</span>\n\n',
    markScheme:
      "\n- Evaluating $h(t)$ for $t = 0$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.7em} h(0) &= -2(0)^2+20(0)+8 \\\\[6pt]\n  &\\answer{= 8 \\text{ m}}\\end{aligned}\n  $$\n\n- Evaluating $h(t)$ for $t = 5$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.7em} h(5) &= -2(5)^2+20(5)+8 \\\\[6pt]\n  &\\answer{= 58 \\text{ m}}\\end{aligned}\n  $$\n\n- Solving the equation $h(n) = 0$ for $n > 0$, we find\n\n  $$\n  \\begin{aligned}\n  -2n^2+20n+8 &= 0 \\hspace{9em} \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{9.2em} \\answer{n \\approx 10.4} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- If we differentiate $h(t)$ with respect to $t$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.2em} h'(t) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\big[-2t^2+20t+8\\big] \\\\[6pt]\n  &\\answer{= -4t+20}\\end{aligned}\n  $$\n\n- If we sketch the graph of $y = h(t)$, for $t \\geq 0$ [by using\nG.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c760d599-f910-4557-b1f6-1de511fb6a68/images/1f252474-3408-41a9-a62f-a5254bf8ee4e/397bd75d8b517ae440b92c4aa69a8d23b9a43a67.svg)\n\n\n  Hence the maximum height is\n$\\answer{58 \\text{ m}}$\nand it is reached after\n$\\answer{5 \\text{ seconds}}$\n- Solving the equation $h(t) = 8$ for $t > 0$, we find\n\n  $$\n  \\begin{aligned}\n  -2t^2+20t+8 &= 8 \\hspace{8.6em} \\\\[6pt]\n  -2t^2+20t &= 0 \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{12.2em} \\answer{t = 10 \\text{ seconds}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '13',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 60',
    content:
      'At the start 2001, a team of zoologists introduced a new species of rabbit onto a large island. $1000$ rabbits were initially introduced and there were $1728$ rabbits at the start of 2004.\nThe size of the population of the species, $N$, $t$ years after the start of 2001, can be modelled by the following function\n\n$$\nN(t) = p \\times q^t, \\quad \\qquad t\\geq 0\n$$\n\n\n- \n  - Show that the value of $p$ is $1000$.\n  - Verify that $q=1.2$.<span class="marks">[2]</span>\n\n\n- State the annual growth rate of the population as a percentage. <span class="marks">[1]</span>\n\n- Use the model to predict the population size at the start of 2011.<span class="marks">[2]</span>\n\n\nIn 2012, the team observed that the growth rate of the rabbit species was changing and that the overall population was now in decline. Upon investigation, they found that the rabbits had became the prey of a new type of snake on the island. Zoologists adjusted their model to the following new function, where $t$ is still the number of years after the start of 2001.\n\n$$\nN(t) = 1380 \\times (0.87)^{(t-12)} \\quad \\qquad t\\geq 12\n$$\n\n\n- Use this model to find the size of the population at the start of 2019.<span class="marks">[2]</span>\n\n- Find the year in which the population of the species will first drop below $200$.<span class="marks">[3]</span>\n\n- In the period from 2013 onwards, find the number of complete years in which the size of the population of the species was greater than or equal to $800$.<span class="marks">[3]</span>\n\n\nAt the start of 2020, the remaining population of the species was transferred to another island along with $300$ more rabbits. The team of zoologists now expect the population growth will recover and will increase at a rate of $10\\%$ per year.\n\n- Estimate the size of the population at the start of 2030. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- \n  - We have been given that $N(0)=1000$. Therefore\n\n    $$\n    \\begin{align*}\n    N(0) &= p \\times q^0 \\tag*{\\textbf{A1}}\\\\[8pt]\n    1000 &= p \n    \\end{align*}\n    $$\n\n    $\\answer{\\text{We have shown that $p=1000$.}}$\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{AG}}\t\n    \\end{aligned}\n    $$\n\n  - Now we know that $N(t)=1000\\times q^t$ and we have been given that $N(3)=1728$. We can use the value $q=1.2$ to verify that $N(3)$ gives the correct result.\n\n    $$\n    \\begin{align*}\n    N(3) &= 1000 \\times (1.2)^3 \\tag*{\\textbf{A1}}\\\\[8pt]\n    &= 1728\n    \\end{align*}\n    $$\n\n    Using the value $q=1.2$, we have shown that the model predicts $1728$ rabbits at the start of $2004$. This verifies that $q=1.2$.\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{AG}}\t\n    \\end{aligned}\n    $$\n\n\n- We have shown that the model is $N(t)=1000(1.2)^t$.\n  This tells us that each year, we multiply the existing population by $1.2$ to generate the next population value.\n  Therefore $\\answer{\\text{the annual growth rate is $20\\%$}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- After ten years the population size is\n\n  $$\n  \\begin{align*}\n  N(10) &= 1000 \\times 1.2^{10}  \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 6191.7... \\\\[6pt]\n  &\\hspace{0em}\\tcbhighmath{ = 6190\\,\\text{(3 s.f.)}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We have\n\n  $$\n  N(t) = 1380 \\times (0.87)^{(t-12)}\n  $$\n\n  The start of 2019 will be when $t=18$. We have\n\n  $$\n  \\begin{align*}\n  N(18) &= 1380 \\times (0.87)^{(18-12)}  \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 598.40... \\\\[6pt]\n  &\\hspace{0em}\\tcbhighmath{ = 598\\,\\text{(3 s.f.)}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The graph of $N(t) = 1380 \\times (0.87)^{(t-12)}$ is shown below. We can sketch this on the G.D.C. and use it to determine the exact value of $t$ when $N=200$, and interpret this value in context.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/e360e93f-14ad-43f3-86bc-5eb708cda046/images/bab12a3b-5595-46ac-9a61-591ea590d300/ai1209a.JPG)\n\n\n  From the graph we have $N(t) < 200$ when $t>25.9$.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  The population will first drop below $200$ during the $25$th year after the start of 2001, which is towards the end of the year 2026.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- The graph of $N(t) = 1380 \\times (0.87)^{(t-12)}$ is shown below\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/e360e93f-14ad-43f3-86bc-5eb708cda046/images/60426c4d-6d77-4c77-a92b-3fca0b81ac77/ai1209b.JPG)\n\n\n  From the graph we have $N(t) \\geq 800$ when $t \\leq 15.9$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  This means we have a population of at least $800$ for the full duration of $2013, 2014$ and $2015$. The value $t=15.9$ occurs during the year $2016$.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  The population size is greater than or equal to $800$ for three complete years (2013 to 2015).\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- At the start of $2020$, $t=19$. We have\n\n  $$\n  \\begin{align*}\n  N(19) &= 1380 \\times (0.87)^{(19-12)}  \\\\[6pt]\n  &=520.61... \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  We can round this to the nearest whole number, as we require a whole number of rabbits to be transferred to the new island.\n  The starting population on the new island will be $521+300=821$\n  With the predicted growth rate of $10\\%$, the model for population growth on the new island will be $N(t)=821 \\times (1.1)^t$, where $t$ will be time since the start of $2020$, therefore we will use $t=10$.\n\n  $$\n  \\begin{align*}\n  \\text{Population at the start of 2030} &= 821 \\times (1.1)^{10}  \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 2129.4...\\\\[6pt]\n  &\\hspace{0em}\\tcbhighmath{ = 2130\\,\\text{(3 s.f.)}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '16',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 61',
    content:
      'The average petrol price, $P$, in cents per litre, in Australia $2019$\ncan be modelled by the function\n\n$$\n\\hspace{1em} P(t) = a\\sin\\hspace{0.15em}(\\ang{10}\\hspace{-0.15em}\\times t) + b, \\hspace{0.5em} 0 \\leq t \\leq 365, \\\\[3pt]\n$$\n\nwhere $t$ is the elapsed time, in days, since New Year\'s Eve $2018$.\nPart of the graph of $y = P(t)$ is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/f4e9707a-58e9-43d3-a5cf-acd20baf6f9d/images/72a07772-6b2a-48cc-aea3-9d4440fb053e/3686d49d230056274ce98d6aa0d4dd1872a85c82.svg)\n\n\n\n- Write down the value of $b$. <span class="marks">[1]</span>\n\n\nThe average price of petrol on the $21$st of January, $2019$ was $139$\ncents per litre.\n\n- Show the value of $a$ is equal to 12. <span class="marks">[2]</span>\n\n- Hence calculate:\n  \n  - the average petrol price on the $10$th of February, $2019$;\n  - the minimum and maximum average prices of petrol in Australia\n$2019$.<span class="marks">[3]</span>\n\n\n\nThe cycle of average petrol prices repeats every T days.\n\n- Determine the value of T.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- $\\answer{145}$\n- Solving the equation $P(21) = 139$ for $a$, we get\n\n  $$\n  \\begin{aligned}\n  a\\sin\\hspace{0.15em}(\\ang{10}\\hspace{-0.15em}\\times 21) + 145 &= 139 \\hspace{7.4em} \\\\[6pt]\n  a\\sin 2\\ang{10} + 145 &= 139 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.2em} \\answer{a = 12} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- \n  - Evaluating $P(t)$ for $t = 31+10 = 41$, we obtain\n\n    $$\n    \\begin{aligned}\n    P(41) &= 12\\sin\\hspace{0.15em}(\\ang{10}\\hspace{-0.15em}\\times 41) + 145 \\hspace{1.8em} \\\\[6pt]\n    &\\answer{\\approx 154 \\text{ cents per litre}}\\end{aligned}\n    $$\n\n  - The min and max values of the sine function are $-1$ and $+1$.\nHence the min and max average prices are\n\n    $$\n    \\begin{aligned}\n    P_{\\text{min}} &= 12(-1)+145 \\\\[6pt]\n    &\\answer{\\approx 133 \\text{ cents per litre}} \\hspace{3em} \\\\[15pt]\n    P_{\\text{max}} &= 12(+1)+145 \\\\[6pt]\n    &\\answer{\\approx 157 \\text{ cents per litre}}\\end{aligned}\n    $$\n\n\n- Using G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f4e9707a-58e9-43d3-a5cf-acd20baf6f9d/images/70f1d702-31c5-4aa3-bc1c-81a56736356c/30c06c40c5cf2c5d8e88197edf49a8900fddc76e.svg)\n\n\n  Hence we find\n$\\answer{\\text{T} = 36}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 62',
    content:
      'Sarah\'s investment portfolio, $V(t)$, in Australian dollars (AUD), is\nmodelled by the function\n\n$$\nV(t) = 64\\hspace{0.15em}000\\times\\left(1 + \\dfrac{k}{100}\\right)^t, \\hspace{0.5em} t \\geq 0,\n$$\n\nwhere $t$ is the number of years since $2019$ and $k$ is a constant.\n\n- Find an expression for the value of the investment portfolio in\n$2020$. Give your answer in the form $a + bk$, where\n$a,b \\in \\mathbb{Z}^+$. <span class="marks">[2]</span>\n\n\nThree years later, in $2022$, the value of the investment portfolio is\nexpected to be $74\\hspace{0.15em}088$ AUD.\n\n- Find the value of $k$. <span class="marks">[2]</span>\n\n\nThis model is defined for $0 \\leq t \\leq n$. At $n$ years, the value of\nthe investment portfolio would have doubled since $2019$.\n\n- Find the value of $n$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ff457177-5def-4306-a827-b5312983770c/images/6ecb8a65-c1f7-4db9-aa27-b8d368274747/70d7f3dfd5326294e23da6bf1d0710b2f53e7027.svg)\n\n\n  Hence, substituting $t = 1$ in the expression for $V(t)$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} V(1) &= 64\\hspace{0.15em}000\\times\\left(1 + \\dfrac{k}{100}\\right) \\\\[12pt]\n  &\\answer{= 64\\hspace{0.15em}000 + 640k}\\end{aligned}\n  $$\n\n- Solving the equation $V(3) = 74\\hspace{0.25em}088$ for $k$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  64\\hspace{0.15em}000\\times\\left(1 + \\dfrac{k}{100}\\right)^3 &= 74\\hspace{0.25em}088 \\hspace{9.3em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{7.8em} \\answer{k = 5} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Solving the equation $V(n) = 2\\times64\\hspace{0.15em}000$ for $n$,\nwe find\n\n  $$\n  \\begin{aligned}\n  64\\hspace{0.15em}000\\times\\left(1 + \\dfrac{5}{100}\\right)^n &= 128\\hspace{0.15em}000 \\hspace{9em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.6em} \\answer{n \\approx 14.2 \\text{ years}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 63',
    content:
      'A healthcare company is designing a new deodorant stick that can be modelled by the shape of a parabola as the top, vertical lines as the sides and a horizontal line as the base, on the $x$-axis. The parabola has end points at $(0,7)$ and $(5,7)$, and vertex at $(2.5,8)$.\nThis design is shown in the diagram below. All distances are measured in centimetres.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/0c28bf3a-d07a-4efc-8f72-f3bbd5583b2f/images/b0822073-b2c4-4e24-96eb-f3c9ee8d0169/AI1006a.PNG)\n\n\nThe quadratic curve can be expressed in the form $y=ax^2+bx+c$ for\n$0\\leq x \\leq 5$.\n\n- \n  - Find the value of $c$.\n  - Using the points $(2.5,8)$ and $(5,7)$, write two equations in $a$ and $b$.\n  - Hence, find the equation of the quadratic curve. <span class="marks">[5]</span>\n\n\n- Find the area of the shaded region in the deodorant\ndesign.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - The value of $c$ is the value of the $y$ intercept. Hence,\n\n    $$\n    \\begin{aligned}\n    &\\hspace{-0.44em}\\answer{c=7}\\end{aligned}\n    $$\n\n  - As the curve passes through points $(2.5,8)$ and $(5,7)$, we get\n\n    $$\n    \\begin{aligned}\n    a(2.5)^2 + b(2.5) + 7 &= 8 \\\\[12pt]\n    &\\hspace{-1.84cm}\\answer{6.25a + 2.5b = 1}  \\hspace{3em}{(1)}\\\\\n    \\end{aligned}\n    $$\n\n    and\n\n    $$\n    \\begin{aligned}\n    a(5)^2 + b(5) + 7 &= 7\\\\[12pt]\n    &\\hspace{-1.3cm}\\answer{25a+5b = 0} \\hspace{4.55em}{(2)}\n    \\end{aligned}\n    $$\n\n  - Solving the linear system (1) and (2), using G.D.C., we get\n\n    $$\n    \\begin{aligned}\n    a &= -0.16 \\\\[12pt]\n    b &= 0.8\\end{aligned}\n    $$\n\n    Therefore, the quadratic function is\n$\\answer{y=-0.16 x^2 + 0.8x +7}$\n\n- Using the formula for the area enclosed by a function and the\n$x$-axis, we get\n\n  $$\n  \\begin{aligned}\n  \\text{Area} &= \\int_0^5 \\big(-0.16 x^2 + 0.8x +7\\big)\\, \\mathrm{d}x \\\\[12pt]\n  &\\hspace{-2.4em}\\answer{\\text{Area} \\approx 38.3\\, \\text{cm}^2}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 64',
    content:
      'Gordon is cooking steaks for his friends Gino and Fred. When Gordon removes the first steak from the grill, the rate at which the internal temperature decreases can be modelled by the function:\n\n$$\n\\begin{align*}\nT_1 (t)=ke^{-0.0811t}+20\n\\end{align*}\n$$\n\nWhere $T_1$ is the temperature of the steak in $^\\circ \\mathrm{C}$, $t$ minutes after it has been removed from the grill. $k$ is a positive constant.\nAt the time the first steak is removed from the grill, it has an internal temperature of $65^\\circ \\mathrm{C}$.\n\n- Find the value of $k$.<span class="marks">[2]</span>\n\n- State the equation of the horizontal asymptote of the graph of $y=T_1(t)$. Interpret this in context. <span class="marks">[2]</span>\n\n\nGordon wants to let the steak rest until it reaches an internal temperature of $50^\\circ \\mathrm{C}$.\n\n- Calculate the length of time the steak should rest for.<span class="marks">[2]</span>  \n\nAt the exact time Gordon removes the first steak from the grill, he adds two more steaks to the grill to cook. The rate at which the internal temperature of the steaks increases on the grill can be modelled by the function:\n\n$$\n\\begin{align*}\nT_2 (t)=180-160e^{-0.0472t}\n\\end{align*}\n$$\n\nWhere $T_2$ is the temperature of the steaks in $^\\circ \\mathrm{C}$, $t$ minutes after they have been placed on the grill.\n\n- State the equation of the horizontal asymptote of the graph of $y=T_2(t)$. Interpret this in context.\t <span class="marks">[2]</span>\n\n- Determine the time at which all three steaks have the same internal temperature. <span class="marks">[3]</span>\n\n\nGino wants his steak rare, and so Gordon removes it from the grill after $6.5$ minutes.\n\n- Calculate the internal temperature of Gino’s steak when it is taken off the grill. <span class="marks">[2]</span>  \n\nFred wants his steak well done, which means an internal temperature of $75^\\circ \\mathrm{C}$.\n\n- Calculate how much longer Fred’s steak will stay on the grill after Gino’s is removed.<span class="marks">[3]</span>  \n',
    markScheme:
      "\n- The first steak is removed from the grill at time $t=0$. We have that $T_1(0)=65$. Substituting these into our function, we have\n\n  $$\n  \\begin{align*}\n  T_1 (t) &= ke^{-0.0811t}+20 \\\\[6pt]\n  T_1 (0) &= ke^{-0.0811(0)}+20 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  65 &= ke^0+20 \\\\[6pt]\n  65 - 20 &= k \\hspace{3em}(\\text{because }e^0=1)\\\\[6pt]\n  &\\hspace{-0.9em}\\tcbhighmath{k = 45} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Using our answer from part (a), the function is now $T_1 (t)=45e^{-0.0811t}+20$.\n  As $t \\to \\infty$, $T_1(t) \\to 20$, because $45e^{-0.0811t}$ is approaching $0$.\n  Therefore the equation of the horizontal asymptote is $\\answer{y=20}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n  In context, $\\answer{\\text{the ambient temperature is }20^{\\circ}\\mathrm{C}.}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- Susbstituting $50$ in place of $T_1(t)$, we have\n\n  $$\n  \\begin{align*}\n  50 &= 45e^{-0.0811t}+20\n  \\end{align*}\n  $$\n\n  We must solve this for the value of $t$. Using the numerical solver on the G.D.C.,\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  We find that $t=4.9995...$\n  $\\answer{\\text{To reach an internal temperature of }50^{\\circ}\\mathrm{C},\\text{ the steak should rest for 5 minutes.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- Our function is $T_2 (t)=180-160e^{-0.0472t}$.\n  As $t \\to \\infty$, $T_2(t) \\to 180$, because $160e^{-0.0472t}$ is approaching $0$.\n  Therefore the equation of the horizontal asymptote is $\\answer{y=180}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n  In context, $\\answer{\\text{the temperature of the grill is }180^{\\circ}\\mathrm{C}.}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- All three steaks will have the same internal temperature when $T_1(t)=T_2(t)$. We have\n\n  $$\n  \\begin{align*}\n  45e^{-0.0811t}+20 &= 180-160e^{-0.0472t} \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Using the numerical solver on the G.D.C.,\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  We find that $t=4.5722...$\n  $\\answer{\\text{All three steaks have the same internal temperature after $4.57$ minutes.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- Substituting $t=6.5$ into our equation, we have\n\n  $$\n  \\begin{align*}\n  T_2(6.5) &= 180 - 160e^{-0.0472(6.5)} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 62.27...\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Gino's steak will have an internal temperature of approximately }62.3^{\\circ}\\,\\mathrm{C}.}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- First we will find the length of time Fred's steak will cook for, then subtract $6.5$ from this.\n  Substituting $75$ in place of $T_2(t)$, we have\n\n  $$\n  \\begin{align*}\n  75 &= 180 - 160e^{-0.0472t}\n  \\end{align*}\n  $$\n\n  We must solve this for the value of $t$. Using the numerical solver on the G.D.C.,\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  We find that $t=8.924...$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(A1)}}\t\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{align*}\n  8.924... -  6.5 &= 2.424...\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Fred's steak will cook approximately 2.42 minutes longer than Gino's.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '16',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 65',
    content:
      'The graph shows the curve of a quadratic function of the form\n$f(x) = ax^2 + bx + 90$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/6886819b-3fbd-43d3-95f6-61cf97d171c1/images/abf35098-dbcc-4ba6-a3af-f17c013fd694/e02d6931ce58420fa7c9cbe422473aefce55e151.svg)\n\n\n\n- Write down the equation for the axis of symmetry of the curve.\n<span class="marks">[2]</span>\n\n- Hence, or otherwise, find the value of $a$ and the value of $b$.\n<span class="marks">[3]</span>\n\n- Find the $y$-coordinate of the vertex of the curve. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- The axis of symmetry intersects the $x$-axis midway between the\n$x$-intercepts.\n  Hence we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.15em} x &= \\dfrac{-5+9}{2} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.4em} \\answer{x = 2}\n  $$\n\n- Using the coordinates of A, we have\n\n  $$\n  \\begin{aligned}\n  f(-5) &= 0 \\\\[6pt]\n  a(-5)^2 + b(-5) + 90 &= 0 \\\\[6pt]\n  25a - 5b &= -90 \\hspace{1em} \\qref{(1)}\\end{aligned}\n  $$\n\n  Using the\ncoordinates of B, we have\n\n  $$\n  \\begin{aligned}\n  f(9) &= 0 \\\\[6pt]\n  \\hspace{0.6em} a(9)^2 + b(9) + 90 &= 0 \\\\[6pt]\n  81a + 9b &= -90 \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, solving the system\nof linear equations $(1)$-$(2)$ for $a$ and $b$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{10.4em} \\answer{a = -2}\\hspace{0.75em}\\text{ and }\\hspace{0.75em}\\answer{b = 8}\\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- The vertex of the curve lies on the axis of symmetry.\nHence, evaluating $f(x)$ for $x = 2$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.8em} f(2) &= -2(2)^2 + 8(2) + 90 \\\\[6pt]\n  &\\answer{= 98}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 66',
    content:
      'A farmer is going to fence two equal adjacent parcels of land. These\nparcels share one side (which also requires fencing) as shown in the\nfollowing diagram. The farmer has only $80$ metres of fence.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/942728b4-5d3b-49b2-b0df-1f2bcfdbdfa5/images/942ca9e0-fea9-4897-abd7-6e372c3eaafb/580f23d360211ad7dd2c45e79d30c7d9c7d24f56.svg)\n\n\n\n- Write down the equation for the total length of the fence,\n$80\\,$m, in terms of $x$ and $y$.\n<span class="marks">[1]</span>\n\n- Write down the total area of both parcels of land in terms of $x$.\n<span class="marks">[2]</span>\n\n- Find the maximum area, in m$^2$, of one parcel of land. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{80 = 3x + 4y}$\n- The total area of both parcels of land in terms of $x$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{8em} A(x) &= x(2y) \\\\[18pt]\n  &= 2xy \\\\[11pt]\n  &= 2x\\left(\\dfrac{80 - 3x}{4}\\right) \\hspace{3em} [\\text{from part (a)}] \\\\[7pt]\n  &\\answer{= 40x - \\dfrac{3}{2}x^2}\\end{aligned}\n  $$\n\n- If we sketch the graph of $y = A(x)$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/942728b4-5d3b-49b2-b0df-1f2bcfdbdfa5/images/c56e4bf6-38aa-4ad7-9220-a283e89a5d6e/d34855549a850484b1041b3153951956e33882fa.svg)\n\n\n  Hence the maximum area of one parcel of land is\n$\\dfrac{266.67}{2} \\approx$\n$\\answer{133 \\text{ m}^2}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 67',
    content:
      'The downward speed, $V$, in metres per second, gained by a skydiver\nduring a jump is modelled by the function\n\n$$\n\\begin{aligned}\nV(t) = 56 - 56\\times3^{-\\frac{t}{4}}, \\hspace{0.5em} t \\geq 0,\\end{aligned}\n$$\n\nwhere $t$, in seconds, is the time for which the skydiver is free\nfalling in the air.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/c78843c2-7d92-4862-b0e4-d8852e751513/images/0c7e427a-797f-41b5-a346-4d216bf8de4c/d3ee9eadbfc138be37002b3f29e50508f36ba8d9.svg)\n\n\n\n- Write down the downward speed of the skydiver at $t=0$. <span class="marks">[1]</span>\n\n\nThe line $L$ is the horizontal asymptote to the graph.\n\n- Determine the equation of $L$. <span class="marks">[2]</span>\n\n\nThe skydiver starts to feel no acceleration when he reaches the speed of\n$55$ metres per second.\n\n- Find the time it takes for the skydiver to reach this\nspeed. Give your answer correct to the nearest second.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Evaluating $V(t)$ for $t = 0$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} V(0) &= 56-56\\times 3^0 \\\\[6pt]\n  &= 56-56 \\\\[6pt]\n  &\\answer{= 0 \\text{ m$/$s}}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.2em} \\lim_{t\\rightarrow\\infty} V(t) &= \\lim_{t\\rightarrow\\infty} \\big[56 - 56\\times3^{-\\frac{t}{4}}\\big] \\\\[6pt]\n  &= 56 - 0 \\hspace{2em} [\\text{since $3^{-\\frac{t}{4}} \\rightarrow 0$ as $t \\rightarrow \\infty$}] \\\\[10pt]\n  &= 56 \\text{ m$/$s}\\end{aligned}\n  $$\n\n  Hence the equation of $L$ is\n$\\answer{y = 56}$\n- Solving the equation $V(t) = 55$ for $t$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.5em} 56 - 56\\times3^{-\\frac{t}{4}} &= 55 \\\\[6pt]\n  t &\\approx 14.7 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence it takes\n$\\answer{15 \\text{ seconds}}$\nto reach the speed of $55$ metres per second.\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 68',
    content:
      'A population of goldfish decreases exponentially. The size of the\npopulation, $P$, after $t$ days is modelled by the function\n\n$$\n\\begin{aligned}\nP(t) = 8000\\times2^{-t} + 100, \\hspace{0.5em} t \\geq 0. \\\\\n\\end{aligned}\n$$\n\n\n- Write down the exact size of the initial population. <span class="marks">[1]</span>\n\n- Find the size of the population after $5$ days. <span class="marks">[2]</span>\n\n- Calculate the time it will take for the size of the population to\ndecrease to $120$.<span class="marks">[2]</span>\n\n\nThe population will stabilize when it reaches a size of $n$.\n\n- Write down the value of $n$. <span class="marks">[1]</span>  \n',
    markScheme:
      '\n- Evaluating $P(t)$ for $t = 0$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.7em} P(0) &= 8000\\times2^0 + 100 \\\\[6pt]\n  &= 8000 + 100 \\\\[6pt]\n  &\\answer{= 8100}\\end{aligned}\n  $$\n\n- Evaluating $P(t)$ for $t = 5$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.3em} P(5) &= 8000\\times2^{-5} + 100 \\\\[6pt]\n  &\\answer{= 350}\\end{aligned}\n  $$\n\n- Solving the equation $P(t) = 120$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  8000\\times2^{-t} + 100 &= 120 \\hspace{6.1em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{14.2em} \\answer{t = 8.64 \\text{ days}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{11.9em} \\lim_{t\\rightarrow\\infty} P(t) &= \\lim_{t\\rightarrow\\infty} \\big[8000\\times2^{-t} + 100\\big] \\\\[6pt]\n  &= 0+100 \\hspace{2em} [\\text{since $2^{-t} \\rightarrow 0$ as $t \\rightarrow \\infty$}] \\\\[10pt]\n  &= 100 \\text{ days}\\end{aligned}\n  $$\n\n  Hence the value of $n$ is\n$\\answer{100}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 69',
    content:
      'The decibel scale measures how loud a sound is to the human ear. The decibel rating, $\\mathrm{dB}$, of a sound can be modelled as a function of its sound intensity, $I$, as shown by the equation\n\n$$\n\\begin{align*}\n    \\mathrm{dB} = 10\\,\\mathrm{log}_{10}\\,I + 120\n\\end{align*}\n$$\n\nWhere $I$ is measured in Watts per square metre $(\\mathrm{W}/\\mathrm{m}^2)$ and $I>0$.\nThe pain threshold for the average human ear is $130\\,\\mathrm{dB}$.\n\n- Show that the pain threshold is reached at exactly $10\\,\\mathrm{W}/\\mathrm{m}^2$. <span class="marks">[1]</span>  \n\nAmelia has a diesel generator that has a sound intensity of $1 \\times 10^{-3.5}\\,\\mathrm{W}/\\mathrm{m}^2$.\n\n- Determine the decibel rating of Amelia\'s generator. <span class="marks">[2]</span>  \n\nAmelia is considering replacing her old diesel generator and has discovered a quieter petrol generator that has a decibel rating of $50\\,\\mathrm{dB}$.\n\n- Determine the sound intensity of the petrol generator. Give your answer in the form $a \\times 10^k$ where $1 \\leq a < 10$ and $k \\in \\mathbb{Z}$.<span class="marks">[2]</span>\n\n- Find how many times greater the sound intensity of the diesel generator is compared to the petrol generator.<span class="marks">[2]</span>\n\n',
    markScheme:
      "\n- Substituting $I=10$ into our equation, we have\n\n  $$\n  \\begin{align*}\n  10\\,\\mathrm{log}_{10}\\,10 + 120 = 130\n  \\end{align*}\n  $$\n\n  The pain threshold of $130\\,\\mathrm{dB}$ is reached at a sound intensity of exactly $10\\,\\mathrm{W}/\\mathrm{m}^2$.\n- Substituting $I=1 \\times 10^{-3.5}$ into our equation, we have\n\n  $$\n  \\begin{align*}\n  \\mathrm{dB} &= 10\\,\\mathrm{log}_{10}\\,\\left(1 \\times 10^{-3.5}\\right) + 120 \\\\[8pt]\n  &= 85\n  \\end{align*}\n  $$\n\n  $\\tcbhighmath{\\text{Amelia's generator has a rating of }85\\,\\mathrm{dB}.}$\n- Substituting $\\mathrm{dB}=50$ into our equation, we have\n\n  $$\n  \\begin{align*}\n  50 &= 10\\,\\mathrm{log}_{10}\\,I + 120\n  \\end{align*}\n  $$\n\n  And we know that $0<I<10^{-3.5}$. Using the numeric solver on the G.D.C. we have\n\n  $$\n  \\begin{align*}\n  \\mathrm{nSolve}\\big(50 &= 10\\,\\mathrm{log}_{10}\\,I + 120\\,,I\\,\\big)\\,|\\,0<I<10^{-3.5} \\\\[8pt]\n  I &= 0.0000001\n  \\end{align*}\n  $$\n\n  $\\tcbhighmath{\\text{The sound intensity of the petrol generator is }1 \\times 10^{-7}\\,\\mathrm{W}/\\mathrm{m}^2.}$\n- We have\n\n  $$\n  \\begin{align*}\n  \\dfrac{1 \\times 10^{-3.5}}{1 \\times 10^{-7}} \\approx 3162\n  \\end{align*}\n  $$\n\n  The sound intensity of the diesel generator is approximately 3160 times greater than the sound intensity of the petrol generator.\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 70',
    content:
      'A hot apple pie was taken out of the oven and left cooling on the bench.\nThe $\\text{temperature}$ of the kitchen is\n$19$ $\\text{\\textdegree{C}}$. This situation can\nbe modelled by the exponential function $T = a + b\\big(k^{-t}\\big)$,\nwhere $T$ is the temperature of the $\\text{apple}$ pie, in\n$\\text{\\textdegree{C}}$, and $t$ is the number of minutes for which the\napple pie has been on the bench in the kitchen. A sketch of the\nsituation is given below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/1a60d715-c424-44cb-8944-85a330b2888c/images/7e03cf5a-bd9f-4377-9abc-d311967031fb/8b700a3ae9a0f49f95d8ab1106661a5c84fe1ddf.svg)\n\n\n\n- Explain why $a = 19$. <span class="marks">[2]</span>\n\n\nInitially, at $t = 0$, the temperature of the apple pie is\n$180$ $\\text{\\textdegree{C}}$.\n\n- Find the value of $b$. <span class="marks">[2]</span>\n\n\nAfter being left cooling on the bench for one minute, the temperature of\nthe apple pie is $159$ $\\text{\\textdegree{C}}$.\n\n- Show that $k = 1.15$. <span class="marks">[2]</span>\n\n- Find the temperature of the apple pie five minutes after it\nhas been left cooling on the bench. <span class="marks">[2]</span>\n\n- Find the total time needed for the apple pie to reach a\ntemperature of $30$ $\\text{\\textdegree{C}}$.\nGive your answer in minutes and seconds, correct to the nearest\nsecond. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1a60d715-c424-44cb-8944-85a330b2888c/images/b39e9049-ef3b-49ee-833b-90b8d18f7d54/1fd4fa4206d204d02ea08ff6cea05417465e9ca9.svg)\n\n\n  On the other hand, we know the temperature of the apple pie cannot\nfall below the temperature of the kitchen.\n  Hence we must have $a = 19$.\n- When $t = 0$, we have $T = 180$.\nHence we get\n\n  $$\n  \\begin{aligned}\n  19 + b\\big(k^{0}\\big) &= 180 \\hspace{3.3em} \\\\[6pt]\n  19 + b &= 180 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.5em} \\answer{b = 161} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- When $t = 1$, we have $T = 159$.\nHence we obtain\n\n  $$\n  \\begin{aligned}\n  19 + 161\\big(k^{-1}\\big) &= 159 \\hspace{5em} \\\\[6pt]\n  19 +  \\dfrac{161}{k} &= 159 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.65em} \\answer{k = 1.15} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Evaluating $T = 19 + 161\\big(1.15^{-t}\\big)$ for $t = 5$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} T &= 19 + 161\\big(1.15^{-t}\\big) \\\\[6pt]\n  &= 19 + 161\\big(1.15^{-5}\\big) \\\\[7pt]\n  &\\answer{\\approx 99.0 \\text{\\hspace{0.15em}\\textdegree{C}}}\\end{aligned}\n  $$\n\n- Solving the equation $T = 30$ for $t$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.4em} 19 + 161\\big(1.15^{-t}\\big) &= 30 \\\\[6pt]\n  t &\\approx 19.2006 \\text{ min} \\hspace{2em} [\\text{by using G.D.C.}] \\hspace{1.6em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{13.75em} \\answer{t \\approx 19 \\text{ min} + 12 \\text{ sec}} \\hspace{2.5em} [(0.2006)(60) \\approx 12.0]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '11',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 71',
    content:
      'An archer shoots an arrow at a circular target in front of her.\nThe trajectory of the arrow is perpendicular to the circular target which is $x$ metres away.\nThe height, in metres, of the arrows above the ground is found by the formula:\n\n$$\nh = 0.015x+1.55\n$$\n\n\n- Find the height the arrow reaches when the target is $70$ meters away. <span class="marks">[1]</span>\n\n  The centre of the target is at a height of $2.45\\hspace{0.15em}$m above the ground.\n  Hitting the inner circle of radius $12\\,$cm scores $10$ points. The next circle has a radius of $22\\,$cm and scores $8$ points. The final circle has a radius of $32\\,$cm and scores $6$ points.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5808a386-ece2-424c-90ce-4d566c437d9c/images/7482106f-495f-482d-afe1-a3d0c43f39f3/q1126.png)\n\n\n- Find the score obtained by the shot. <span class="marks">[2]</span>\n\n\nThe second shot is influenced by air resistance and the equation describing the height is now given by\n\n$$\nh_2 = -0.001x^2 + 0.0791x + 1.55\n$$\n\n\n- Find the score obtained by the second shot. <span class="marks">[2]</span>\n\n- Calculate the maximum height reached by $h_2$. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- By evaluating the formula at $x=70$, we have\n\n  $$\n  \\begin{align*}\n  h &= 0.015(70)+1.55 \\\\[9pt]\n  &\\hspace{0.275em}\\tcbhighmath{= 2.6 \\text{ m}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The height above the centre of the target is\n\n  $$\n  \\begin{align*}\n  d &= 2.6-2.45 \\\\[8pt]\n  &= 15\\text{ cm} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  The arrow is within the second circle of radius $22\\,$cm.\n  The arrow scores $\\answer{8}$.\n\n  $$\n      \\tag*{\\textbf{A1}}\n  $$\n\n\n$\\textcolor{white}{gap}$\n\n- Evaluating $h_2$ at $x=70$, we obtain\n\n  $$\n  \\begin{align*}\n  h_2 &= -0.001(70)^2 + 0.0791(70)) + 1.55 \\\\[8pt]\n  &= 2.187...\n  \\end{align*}\n  $$\n\n  Hence, the distance to the centre of the target is\n\n  $$\n  \\begin{align*}\n  d_2 &= |2.187...-2.45| \\\\[8pt]\n  &= 0.263...\\tag*{\\textbf{A1}}\\\\\n  &= 26\\hspace{0.15em}\\text{cm}\n  \\end{align*}\n  $$\n\n  The arrow is within the third circle of radius $32\\,$cm.\n  The arrow scores $\\tcbhighmath{6}$\n\n  $$\n      \\tag*{\\textbf{A1}}\n  $$\n\n\n$\\textcolor{white}{gap}$\n\n- If we sketch the graph of $y = h_2(x)$, for $x \\geq 0$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5808a386-ece2-424c-90ce-4d566c437d9c/images/1e39b79f-8205-4009-b8c4-b21d0dde44af/a1126.png)\n\n\n  Hence the maximum height is $\\answer{3.11 \\text{ m}}$\n\n  $$\n  \\tag*{\\textbf{A1}}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 72',
    content:
      'A set of BMX jumping ramps have been constructed at a local cycle park, as shown in the following diagram. It is designed for riders to take off from the first ramp, represented by $f(x)$, and land on the second ramp, represented by $g(x)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/6e6fba44-ae40-4292-a287-5720870a3e3e/images/72e41c7b-2eb3-46ea-a3bd-57ec52baf40b/1197a.JPG)\n\n\n$\\hspace{2em}\\bullet$ The first ramp starts at the origin and ends at point $A$, and has equation $f(x)=\\dfrac{1}{3} x^2 \\text{ for } 0\\leq x \\leq 3$.\n$\\hspace{2em}\\bullet$ The second ramp starts at point $C$ and ends at point $E$, and has equation $g(x)=\\dfrac{1}{3} x^2-8x+48 \\text{ for } 9\\leq x \\leq 12$.\n$\\hspace{2em}\\bullet$ $p(x)$ represents the path a rider would take in the air between the ramps between point $A$ and point $C$.\n$\\hspace{2em}\\bullet$ $q(x)$ represents a safety net that hangs between point $A$ and point $C$, and has equation $q(x)=\\dfrac{1}{9} x^2-\\dfrac{4}{3} x+6 \\text{ for } 3\\leq x \\leq 9$.\n$\\hspace{2em}\\bullet$ Point $A$ has coordinates (3,3) and point $C$ has coordinates (9,3).\nIt is given that all units and measurements are in metres.\nThe path of a rider at point $A$ is the tangent to $f(x)$ at that point.\n\n- \n  - Determine the gradient of $f(x)$ at point $A$.\n  - Hence, determine the equation of the path of a rider at point $A$. Give your answer in the form $y=mx+c$.<span class="marks">[4]</span>\n\n\n\nThe line $BC$ represents a support beam and is a normal to $g(x)$ at point $C$.\n\n- \n  - Determine the gradient of $g(x)$ at point $C$.\n  - Hence, determine the equation of the line representing the support beam $BC$.<span class="marks">[6]</span>\n\n\n\n$p(x)$ is a parabola with a maximum at (6,6).\n\n- Determine the equation of $p(x)$.<span class="marks">[2]</span>  \n\nA safety regulation at the cycle park is that a BMX rider using the jumping ramps should never be more than 5 metres above the safety net while in the air.\n\n- Determine whether the model predicts that this safety regulation will be upheld.\t<span class="marks">[4]</span>  \n',
    markScheme:
      "\n- \n  - Point $A$ has coordinates $(3,3)$, therefore we are looking for $f'(3)$. We have\n\n    $$\n    \\begin{align*}\n    f(x) &= \\dfrac{1}{3}x^2 \\\\[6pt]\n    f'(x) &= \\dfrac{2}{3}x \\tag*{\\textbf{(M1)}}\\\\[6pt]\n    f'(3) &= \\dfrac{2}{3} \\times 3 \\\\[6pt]\n    &\\hspace{-2.5em}\\tcbhighmath{f'(3) = 2} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Using the formula for the equation of a straight line, we can substitute the coordinates of $A\\,(x_1=3,y_1=3)$, and $m=2$. We have\n\n    $$\n    \\begin{align*}\n    y - y_1 &= m(x - x_1) \\\\[6pt]\n    y - 3 &= 2(x - 3) \\tag*{\\textbf{(M1)}}\\\\[6pt]\n    &\\hspace{-0.9em}\\tcbhighmath{y = 2x - 3}  \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- \n  - Point $C$ has coordinates $(9,3)$, therefore we are looking for $g'(9)$. We have\n\n    $$\n    \\begin{align*}\n    g(x) &= \\dfrac{1}{3}x^2 - 8x + 48 \\\\[6pt]\n    g'(x) &= \\dfrac{2}{3}x - 8 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n    g'(9) &= \\dfrac{2}{3} \\times 9 - 8 \\\\[6pt]\n    &\\hspace{-2.3em}\\tcbhighmath{g'(9) = -2} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Given that $BC$ is a normal to $g(x)$ at $(9,3)$, the gradient will be the negative reciprocal of $-2$.\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{(R1)}}\n    \\end{aligned}\n    $$\n\n    We have\n\n    $$\n    \\begin{align*}\n    g'(9) &= -2 \\\\[6pt]\n    m_{BC} &= \\frac{1}{2} \\tag*{\\textbf{(A1)}}\n    \\end{align*}\n    $$\n\n    Using the formula for the equation of a straight line, we can substitute the coordinates of $C\\,(x_1=9,y_1=3)$, and $m=\\frac{1}{2}$. We have\n\n    $$\n    \\begin{align*}\n    y - y_1 &= m(x - x_1) \\\\[6pt]\n    y - 3 &= \\frac{1}{2}(x - 9) \\tag*{\\textbf{(M1)}}\\\\[6pt]\n    &\\hspace{-0.9em}\\tcbhighmath{y = \\frac{1}{2}x - \\frac{3}{2}}  \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- We know the coordinates of three points on the function $p(x)$: $(3,3)\\,,\\,(6,6)$ and $(9,3)$. We have been told it is a parabola, so we know $p(x)$ is a quadratic function. We can therefore perform a quadratic regression.\n  Using the G.D.C. to perform the quadratic regression,\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  We obtain $\\answer{y = -\\tfrac{1}{3}x^2 + 4x - 6}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- To answer this question, we can sketch the graphs of $p(x)$ and $q(x)$ on the G.D.C. as shown below:\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6e6fba44-ae40-4292-a287-5720870a3e3e/images/774cd0b9-9b5b-4916-a641-f8a78d50db48/1197b.JPG)\n\n\n  We have been given that $p(x)$ has a maximum at $(6,6)$ and therefore the maximum height of a BMX rider above the ground is $6$ metres.\n  Using the G.D.C. we can find that $q(x)$ has a minimum at $(6,2)$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(A1)}}\n  \\end{aligned}\n  $$\n\n  The maximum vertical distance between a BMX rider in the air and the safety net is therefore $4$ metres.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(A1)}}\n  \\end{aligned}\n  $$\n\n  $\\answer{\\text{Yes, the model predicts that the safety regulation will be upheld.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '16',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 73',
    content:
      'A loaf pan is made in the shape of a cylinder. The pan has a diameter of\n$24$ cm and a height of\n$5$ cm.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/9aaafe79-56c4-4a37-b409-43676a3d5eed/images/855b65c5-7644-44f9-a953-a91912965eb3/a347288bee589088e6dce052611dad40b73c72e7.svg)\n\n\n\n- Calculate the volume of this pan. <span class="marks">[3]</span>\n\n\nGloria prepares enough bread dough to exactly fill the pan. The dough\nwas in the shape of a sphere.\n\n- Find the radius of the sphere in cm, correct to one decimal\nplace. <span class="marks">[4]</span>\n\n\nThe bread was cooked in a hot oven. Once taken out of the oven, the\nbread was left in the kitchen.\nThe temperature, $T$, of the bread, in degrees\nCelsius, $\\text{\\textdegree{C}}$, can be\nmodelled by the function\n\n$$\nT(t) = a\\times(1.51)^{-\\frac{t}{3}} + 21, \\hspace{0.5em} t \\geq 0,\n$$\n\nwhere $a$ is a constant and $t$ is the time, in minutes, since the bread\nwas taken out of the oven.\nWhen the bread was taken out of the oven its temperature was\n$205$ $\\text{\\textdegree{C}}$.\n\n- Find the value of $a$. <span class="marks">[2]</span>\n\n- Find the temperature that the bread will be $10$ minutes\nafter it is taken out of the oven. <span class="marks">[2]</span>\n\n\nThe bread can be eaten once its temperature drops to\n$35$ $\\text{\\textdegree{C}}$.\n\n- Calculate, to the nearest minute, the time since the bread\nwas taken out\nof the oven until it can be eaten. <span class="marks">[3]</span>\n\n- In the context of this model, state what the value of $21$\nrepresents. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Using the volume of a cylinder formula with $r = 12$ and $h = 5$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.05em} V_{\\text{pan}} &= \\pi r^2h \\\\[6pt]\n  &= \\pi(12)^2(5) \\\\[6pt]\n  &= 720\\pi \\qref{(1)}  \\\\[6pt]\n  &=2261.9...\\\\[6pt]\n  &\\answer{\\approx 2260 \\text{ cm}^3}\\end{aligned}\n  $$\n\n- Using the volume of a sphere formula, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.4em} V_{\\text{dough}} &= V_{\\text{pan}} \\\\[6pt]\n  \\dfrac{4}{3}\\pi r^3 &= 720\\pi \\hspace{3em} [\\text{from  $(1)$}] \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, solving the equation $(2)$ for $r$, we obtain\n\n  $$\n  \\hspace{12.9em} \\answer{r \\approx 8.1 \\text{ cm}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Solving the equation $T(0) = 205$ for $a$, we find\n\n  $$\n  \\begin{aligned}\n  a\\times(1.51)^0 + 21 &= 205 \\hspace{5.65em} \\\\[6pt]\n  a + 21 &= 205 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.8em} \\answer{a = 184}\n  $$\n\n- Evaluating $T(t)$ for $t=10$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} T(10) &= 184\\times(1.51)^{-\\frac{10}{3}} + 21 \\\\[9pt]\n  &\\answer{\\approx 67.6 \\text{\\hspace{0.15em}\\textdegree{C}}}\\end{aligned}\n  $$\n\n- Solving the equation $T(t) = 35$ for $t$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.6em} 184\\times(1.51)^{-\\frac{t}{3}} + 21 &= 35 \\\\[6pt]\n  t &\\approx 18.8 \\hspace{3.5em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{1.8em} \\answer{t \\approx 19 \\text{ minutes}}\n  $$\n\n- $\\answer{\\text{\\(21\\) is the room  temperature of the kitchen}}$\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 74',
    content:
      'A factory produces bars in the shape of a cuboid, with a fixed height of\n$30$ cm and varying base. The area, $A$, of each\nbar base is described by the function\n\n$$\n\\begin{aligned}\nA(x) &= x(40 - x), \\hspace{0.5em} 5 \\leq x \\leq 35,\\end{aligned}\n$$\n\nwhere\n$x$ is the length of the bar base in centimetres.\n\n- Bar P has a length of $10$ cm. Find the\nvolume of P. <span class="marks">[2]</span>\n\n- Bar Q has the same volume as bar P, however has a different length.\nFind the length of Q. <span class="marks">[2]</span>\n\n- Find the value of $x$ that makes the bar\'s volume a maximum, and\nstate this maximum volume. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The volume of a bar with base length $x$ cm\nis given by the function\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.95em} V(x) &= A(x)\\times h \\\\[7pt]\n  &= x(40-x)(30) \\\\[6pt]\n  &= 1200x - 30x^2 \\end{aligned}\n  $$\n\n  Hence, evaluating $V(x)$ for\n$x = 10$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.85em} V(10) &= 1200(10) - 30(10)^2 \\\\[6pt]\n  &\\answer{= 9000 \\text{ cm}^3}\\end{aligned}\n  $$\n\n- Solving the equation $V(x) = 9000$ for $x \\neq 10$, we obtain\n\n  $$\n  \\begin{aligned}\n  1200x - 30x^2 &= 9000 \\hspace{6.7em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{9.85em} \\answer{x = 30 \\text{ cm}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- If we sketch the graph of $y = V(x)$, for $5 \\leq x \\leq 35$ [by\nusing G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a4b969d0-4df7-4184-8874-c1e566eb036b/images/590e9d59-33f3-47b2-8b53-31174f419f04/862b3de66152091d457aa4678f6ddd98efb4d6c4.svg)\n\n\n  Hence the maximum volume is\n$\\answer{12\\hspace{0.15em}000 \\text{ cm}^3}$\nand it occurs when\n$\\answer{x = 20 \\text{ cm}}$\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 75',
    content:
      'The half-life, $T$, in years, of a radioactive isotope can be modelled\nby the function\n\n$$\n\\begin{aligned}\nT(k) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{k}{100}\\right)}, \\hspace{0.5em} 0 < k < 100,\\end{aligned}\n$$\n\nwhere $k$ is the decay rate, in percent, per year of the isotope.\n\n- The decay rate of Hydrogen-$3$ is $5.5$ %\nper year. Find its half-life.<span class="marks">[2]</span>\n\n\nThe half-life of Uranium-$232$ (U-$232$) is $68.9$ years. A sample\ncontaining $250$ grams of U-$232$ is obtained and stored as a side\nproduct of a nuclear fuel cycle.\n\n- Find the decay rate per year of U-$232$. <span class="marks">[2]</span>\n\n- Find the amount of U-$232$ left in the sample after:\n  \n  - $68.9$ years;\n  - $100$ years. <span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- Evaluating $T(k)$ for $k = 5.5$, we get\n\n  $$\n  \\begin{aligned}\n  T(5.5) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{5.5}{100}\\right)} \\\\[6pt]\n  &\\answer{\\approx 12.3 \\text{ years}}\\end{aligned}\n  $$\n\n- Solving the equation $T(k) = 68.9$ for $k$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{r}{100}\\right)} &= 68.9 \\hspace{6.05em} \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.3em} \\answer{k = 1.00\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- \n  - $\\answer{125 \\text{ grams}}$\n  - We have a geometric sequence with the first term $u_1 = 250$ and\nthe $\\text{common}$ ratio $r = (1 - 1.00/100) = 0.99$.\n    Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with\n$n=101$, we find\n\n    $$\n    \\begin{aligned}\n    u_{101} &= u_1r^{101-1} \\\\[6pt]\n    &= 250\\hspace{0.05em}(0.99)^{101-1} \\hspace{0.2em} \\\\[7pt]\n    &\\answer{\\approx 91.5 \\text{ grams}}\\end{aligned}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 76',
    content:
      'In a water filtration plant, the containers of water are filled and then\nfiltered, all by an automated system. The volume of water in a\ncontainer, $W(t)$, in litres, after $t$ seconds of the filling\ncommencing can be modelled by the function\n\n$$\nW(t) = V(1-e^{\\frac{-t}{k}}),\n$$\n\nwhere $V$ is the maximum volume of the\nwater container and $k$ is a positive constant used to alter the rate at\nwhich water is filling the containers.\nThe value of $k$ is currently set at 25.\n\n- Find how long it takes, $t$, for a container to fill up to $50\\%$ of\nits maximum volume. <span class="marks">[2]</span>\n\n- If one of the containers has a maximum volume of 20 litres, find the\nvolume of water in this container after $22$ seconds. <span class="marks">[2]</span>\n\n\nThe engineers of the plant want to alter the value of $k$ so that it\ntakes $20$ seconds to fill each container up to $95\\%$ of their maximum\nvolumes.\n\n- Find the value of $k$ required. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Since the container is $50\\%$ of its maximum volume,\n$W=\\dfrac{V}{2}$. Hence\n\n  $$\n  \\begin{aligned}\n  \\dfrac{V}{2}&=V(1-e^{\\frac{-t}{25}})\\\\[6pt]\n  \\dfrac{1}{2}&=1-e^{\\frac{-t}{25}}\\\\[8pt]\n  &\\hspace{-0.5em}\\answer{t\\approx17.3 \\text{ seconds}} \\qquad \\qquad \\qquad [\\text{using GDC}]\\end{aligned}\n  $$\n\n- Substituting $V=20$ and $t=22$ into $W(t)$ function, we get\n\n  $$\n  \\begin{aligned}\n  W(t) &= V(1-e^{\\frac{-t}{25}})\\\\[6pt]\n  W(22)  &=20(1-e^{\\frac{-22}{25}})\\\\[6pt]\n  &\\hspace{0.5em}\\answer{\\approx11.7 \\text{ litres}} \\qquad \\qquad \\qquad [\\text{using GDC}]\\end{aligned}\n  $$\n\n- Since the containers are filled to $95\\%$ of their maximum volume,\n$W=0.95V$. Hence,\n\n  $$\n  \\begin{aligned}\n  0.95V&=V(1-e^{\\frac{-20}{k}})\\\\[6pt]\n  0.95&=1-e^{\\frac{-20}{k}}\\\\[6pt]\n  e^{\\frac{-20}{k}}&=0.05\\\\[6pt]\n  &\\hspace{-0.5em}\\answer{k\\approx 6.68} \\qquad \\qquad \\qquad [\\text{using GDC}]\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 77',
    content:
      'The half-life, $T$, in days, of a radioactive isotope can be modelled by\nthe function\n\n$$\n\\begin{aligned}\nT(k) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{k}{100}\\right)}, \\hspace{0.5em} 0 < k < 100,\\end{aligned}\n$$\n\nwhere $k$ is the decay rate, in percent, per day of the isotope.\n\n- The decay rate of Gold-$196$ is $6.2$ % per\nday. Find its half-life.<span class="marks">[2]</span>\n\n\nThe half-life of Phosphorus-$32$ (P-$32$) is $14.3$ days. A sample\ncontaining $120$ grams of P-$32$ is produced and stored in a\nbiochemistry laboratory.\n\n- Find the decay rate per day of P-$32$. <span class="marks">[2]</span>\n\n- Find the amount of P-$32$ left in the sample after:\n  \n  - $14.3$ days;\n  - $50$ days. <span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- Evaluating $T(k)$ for $k = 6.2$, we get\n\n  $$\n  \\begin{aligned}\n  T(6.2) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{6.2}{100}\\right)} \\\\[6pt]\n  &\\answer{\\approx 10.8 \\text{ days}}\\end{aligned}\n  $$\n\n- Solving the equation $T(k) = 14.3$ for $k$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{r}{100}\\right)} &= 14.3 \\hspace{6.05em} \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.25em} \\answer{k = 4.73\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- \n  - $\\answer{60 \\text{ grams}}$\n  - We have a geometric sequence with the first term $u_1 = 120$ and\nthe $\\text{common}$ ratio $r = (1 - 4.73/100) = 0.9527$.\n    Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with\n$n=51$, we find\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.8em} u_{51} &= u_1r^{51-1} \\\\[6pt]\n    &= 120\\hspace{0.05em}(0.9527)^{51-1} \\\\[7pt]\n    &\\answer{\\approx 10.6 \\text{ grams}}\\end{aligned}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 78',
    content:
      'The Burj Khalifa, located in Dubai, is the tallest building in the\nworld. It has a height of $830 \\text{ m}$ and has a square base that\ncovers a floor area of $556 \\text{ m} \\times 556 \\text{ m}$. A tourism\nshop located near the building sells souvenirs of the tower, which sit\ninside glass pyramids, as illustrated by the diagram below. The souvenir\ntower is an accurate scale replica of the actual tower.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/dd6dcb9f-6f6a-4d52-86ef-4383fc6f3f51/images/490aa73b-d0b9-484e-9cf9-6362beb9193f/75dbfe1df45464ae26235a84b47e84fedd3f43ea.svg)\n\n\nThe scaled model of Burj Khalifa has a base area of\n$20 \\text{ cm} \\times 20 \\text{ cm}$. The height and base area\ndimensions of the glass pyramid are 10% larger than the model.\n\n- \n  - Find the height of the souvenir tower, in cm, correct to the\nnearest mm.\n  - Find the volume of the glass pyramid, rounding your answer\ncorrect to the nearest cubic centimetre. <span class="marks">[5]</span>\n\n\n\nThe shop owner aims to maximise profits from selling the souvenirs. The\nmore the owner orders from the manufacturer, the cheaper the souvenirs\nare to buy. However, if too many are ordered, profits may decrease due\nto surplus stock unsold.\nThe number of souvenirs ordered from previous years and the resulting\nprofits are shown in the following table.\nQuantityProfit($)$5000$$35\\,000$$10\\,000$$95\\,500$$13\\,000$$116\\,500$\nThe shop owner decides to fit a cubic model of the form\n\n$$\nP(x) = ax^3+bx^2+cx+d\n$$\n\nto model the profit, $P$, for $x$ thousand\nsouvenirs ordered.\n\n- Explain why $d=0$.<span class="marks">[1]</span>\n\n- Construct three linear equations to solve for $a$, $b$ and $c$, and\nhence write down the completed function $P(x)$. <span class="marks">[5]</span>\n\n- Find $P\'(x)$.<span class="marks">[2]</span>\n\n- Find, to the nearest hundred souvenirs, the optimal number of\nsouvenirs the owner should buy to maximise profit, and the resulting\nprofit from this number. <span class="marks">[4]</span>\n\n',
    markScheme:
      "\n- \n  - The height $(h_m)$ of the model can be calculated by\n\n    $$\n    \\begin{aligned}\n    h_m&= \\text{height of Burj Khalifa} \\times \\text{scale factor}\\\\[6pt]\n    &= 83000 \\times \\dfrac{20}{55600}\\hspace{4.1em} [\\text{all values in cm}] \\\\[6pt]\n    &\\hspace{0.3em}\\answer{\\approx 29.9 \\text{ cm} }\\end{aligned}\n    $$\n\n  - Let $x$ be the side length of the base and $h$ be the height of\nthe glass pyramid. Since the dimensions of glass pyramid are\n$10\\%$ larger than the model, we get\n\n    $$\n    \\begin{aligned}\n    x&= 20+20(0.1)\\hspace{2cm} \\\\[6pt]\n    &= 22 \\text{ cm}\\\\[6pt]\n    h&= 29.9+29.9(0.1)\\\\[6pt]\n    &\\approx 32.9 \\text{ cm}\\end{aligned}\n    $$\n\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/dd6dcb9f-6f6a-4d52-86ef-4383fc6f3f51/images/19611668-b3b5-4172-ace2-b6f0010e0b75/c16aa6b415e3ff65a129bf040b3ec43c108d55ec.svg)\n\n\n  The volume $(V)$ of the glass pyramid can therefore be calculated by\n\n  $$\n  \\begin{aligned}\n  V&= \\dfrac{1}{3}\\times x^2 \\times h \\\\[6pt]\n  &=\\dfrac{1}{3}\\times (22)^2 \\times(32.9)\\\\[6pt]\n  &\\hspace{0.3em}\\answer{\\approx 5308 \\text{ cm}^3 }\\end{aligned}\n  $$\n\n- If zero souvenirs are ordered (i.e. $x=0$), there won't be any\nsouvenirs to sell. Hence, the profit, $P$, will also be zero.\n\n  $$\n  \\answer{P(0)=0, \\,\\text{ hence } \\, d=0 }\n  $$\n\n- Since $x$ is in thousands, we have\n\n  $$\n  \\begin{aligned}\n  P(5)&=5^3a+5^2b+5c=35\\, 000\\qref{(1)}\\\\[6pt]\n  P(10) &= 10^3a+10^2b+10c = 95\\, 500\\qref{(2)}\\\\[6pt]\n  P(13) &= 13^3a+13^2b+13c = 116\\, 500 \\qref{(3)}\\end{aligned}\n  $$\n\n  Using\nG.D.C. to solve the equations $(1)$, $(2)$ and $(3)$, we get\n\n  $$\n  a=-\\dfrac{2295}{26},\\, b=\\dfrac{47685}{26}, \\text{ and } c=\\dfrac{475}{13}\n  $$\n\n  Hence\n\n  $$\n  \\hspace{0.3em}\\answer{P(x) =-\\dfrac{2295}{26}x^3+\\dfrac{47685}{26}x^2+\\dfrac{475}{13}x}\n  $$\n\n- Differentiating $P(x)$ with respect to $x$, we get\n\n  $$\n  \\hspace{0.3em}\\answer{P'(x) =-\\dfrac{6885}{26}x^2+\\dfrac{47685}{13}x+\\dfrac{475}{13}}\n  $$\n\n- If we sketch the graph of $P(x)$, the maximum profit occurs at point\nA.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/dd6dcb9f-6f6a-4d52-86ef-4383fc6f3f51/images/01769894-ccf2-4567-9e25-00dfe1fa2901/5541c9fa3d0d1b43403859281edadfc0d340eef4.svg)\n\n\n  Using G.D.C. to find the coordinates of A, we get\n\n  $$\n  x=13.9, \\text{ and } P(x)\\approx 118\\,000\n  $$\n\n  Hence,\n  The maximum profit will occur when the owner buys\n$\\hspace{0.4em}\\answer{13\\,900}\\hspace{0.4em}$ souvenirs.\nThe resulting profit will be approximately\n$\\hspace{0.35em}\\answer{118\\,000.}$\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '17',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 79',
    content:
      'The axis of symmetry of the graph of a quadratic function has equation\n$x = \\dfrac{3}{2}$.\n\n- Draw the axis of symmetry on the grid below. <span class="marks">[1]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f3b8f30f-dfd0-4c3d-af10-599523d5bfc7/images/8127e62b-8e3d-4e6a-800c-1ba598460cd3/095afe930760d162dfc8b9c36b42836af719a0ca.svg)\n\n\n\nThe graph of the quadratic function intersects the $x$-axis at the point\nP$(-1,0)$. There is a second point, Q , at\nwhich the graph of the quadratic function intersects the $x$-axis.\n\n- Mark and label P and Q on the grid above. <span class="marks">[1]</span>\n\n\nThe graph of the quadratic function has equation $y = -x^2+bx+c$, where\n$b,c \\in \\mathbb{Z}$.\n\n- \n  - Find the value of $b$ and the value of $c$.\n  - Find the coordinates of the vertex, M.\n  - Draw the graph of the quadratic function on the grid above.\n<span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- If we draw the axis of symmetry on the grid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f3b8f30f-dfd0-4c3d-af10-599523d5bfc7/images/675f3abb-838e-4191-9b73-48d678ab9e7c/251642e55ba01124027bed7ddba72f11d48d8750.svg)\n\n\n- The $x$-coordinate of $Q$ is\n\n  $$\n  \\begin{aligned}\n  x &= \\dfrac{3}{2} + \\left[\\dfrac{3}{2}-(-1)\\right] \\\\[6pt]\n  &= 4\\end{aligned}\n  $$\n\n  Hence, if we mark and label P and Q on the grid\nbelow, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f3b8f30f-dfd0-4c3d-af10-599523d5bfc7/images/ad959939-6aee-4367-b94d-7bb2b0d330f5/1fa563586fbd8e498bbc0f6a90199f2a3a99e7f7.svg)\n\n\n- \n  - Using the coordinates of P, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.1em} 0 &= -(-1)^2 + b(-1) + c \\\\[6pt]\n    0 &= -1 - b + c \\\\[6pt]\n    1 &= -b + c \\qref{(1)}\\end{aligned}\n    $$\n\n    Using the coordinates of\nQ, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.6em} 0 &= -(4)^2 + b(4) + c \\\\[6pt]\n    0 &= -16 + 4b + c \\\\[6pt]\n    16 &= 4b + c \\qref{(2)}\\end{aligned}\n    $$\n\n    Hence, solving the system\nof linear equations $(1)$-$(2)$ for $b$ and $c$, we find\n\n    $$\n    \\begin{aligned}\n    \\hspace{10em} \\answer{b = 3}\\hspace{0.75em}\\text{ and }\\hspace{0.75em}\\answer{c = 4}\\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n  - Evaluating $y = -x^2 + 3x + 4$ for $x = 3/2 = 1.5$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.2em} y &= -(1.5)^2 + 3(1.5) + 4 \\\\[6pt]\n    &= 6.25\\end{aligned}\n    $$\n\n    Hence the coordinates of M are\n$\\answer{(1,5,6.25)}$\n  - If we draw the graph of $y = -x^2 + 3x + 4$ on the grid below,\nwe obtain\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f3b8f30f-dfd0-4c3d-af10-599523d5bfc7/images/35a967a1-1150-4aa0-a4fd-7d63f734e780/db963f9fd832653990678f1ba763db2a3974d991.svg)\n\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 80',
    content:
      'The distance travelled, $d$, in meters, of a freely falling object is\nproportional to the square of the time of the fall, $t$, in seconds.\nA football dropped from the top of a school building falls a distance of\n$19.6\\text{ m}$ in the first $2$ seconds.\n\n- Show that $d(t)=4.9t^2$. <span class="marks">[2]</span>\n\n- Sketch the curve of $d$ for $t>0$, clearly showing the point\n$(2,19.6)$. <span class="marks">[2]</span>\n\n\nThe distance covered, $s$, in meters, by a quad-copter drone undertaking\na vertical landing can be modelled by $s(t) = 8t$, where $t$ is the time\nin seconds after the landing commences.\nThe football is dropped at the same time as the drone commences a\nlanding from the same height of the school building.\nThe football covers more distance than the drone when $t>p$.\n\n- Find the value of $p$. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Since $d$ varies proportionally with the square of $t$, we can state\n\n  $$\n  \\begin{aligned}\n  d&=kt^2 \\quad \\text{[where k is a constant]}\\end{aligned}\n  $$\n\n  We have\n$d=19.6 \\text{ m}$ when $t=2\\text{ s}$. We can use these to find\n$k$:\n\n  $$\n  \\begin{aligned}\n  19.6 &= k(2)^{2}\\hspace{3.8cm}\\\\[6pt]\n  k&=4.9\\end{aligned}\n  $$\n\n  Hence, we have shown\n\n  $$\n  \\begin{aligned}\n  \\hspace{-7em}\\answer{d=4.9t^2}\\end{aligned}\n  $$\n\n- Using GDC, we can plot the curve of $d(t)=4.9t^2$ for $t>0$, as\nshown\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/08b312a2-f2be-4c99-a017-56011a6e21b2/images/14d89890-1629-4583-8dca-99e74de71942/523fcfa1c1e8c9a28b03f2d2499ceebab285f5d8.svg)\n\n\n- The curves of $d(t)=4.9t^2$ and $s(t)=8t$ are plotted on the graph\nbelow\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/08b312a2-f2be-4c99-a017-56011a6e21b2/images/ff8238cb-8231-4138-b80c-2159b3626395/f8c3444e7186ece84caeb418dfee107029e62cc6.svg)\n\n\n  From the graph, $d(t) > s(t)$ when $t>1.63$. Hence,\n$\\answer{p=1.63}$\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 81',
    content:
      'The security personnel at the entry of a rural campground activate a\nsiren to alert campers when a wild animal is spotted nearby. The sound\nintensity, $I$, of the siren varies inversely with the square of the\ndistance from the siren, $d$. When initially testing the siren, the\nsecurity personnel found that at a distance of $3$ metres from the\nsiren, the sound intensity is $5$ watts per square metre\n$(\\text{Wm}^{-2})$.\n\n- Show that $I=\\dfrac{45}{d^2}$. <span class="marks">[2]</span>\n\n- Sketch the curve of $I$ for $d>0$, labelling the point $(3,5)$.\n<span class="marks">[2]</span>\n\n\nThe campers can only hear the siren if the sound intensity at their\nlocation is greater than $1.2\\times10^{-5} \\text{Wm}^{-2}$.\n\n- Find the minimum distance, in kilometers, from the siren where the\ncampers can no longer hear the siren. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Since $I$ varies inversely with the square of $d$, we can state\n\n  $$\n  \\begin{aligned}\n  I&=\\dfrac{k}{d^2} \\quad \\text{[where k is a constant]}\\end{aligned}\n  $$\n\n  We have $I=5 \\text{ Wm}^{-2}$ when $d=3\\text{ m}$. We can use these to find $k$:\n\n  $$\n  \\begin{aligned}\n  5 &= \\dfrac{k}{3^2}\\hspace{3.8cm}\\\\[6pt]\n  k&=45\\end{aligned}\n  $$\n\n  Hence, we have shown\n\n  $$\n  \\begin{aligned}\n  \\tcbhighmath{I=\\dfrac{45}{d^2}}\\end{aligned}\n  $$\n\n- Using GDC, we can plot the curve of $I=\\dfrac{45}{d^2}$ for $d>0$, as shown\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/151224cf-2f80-4345-b68e-a612caa31abb/images/612a624d-0502-474e-802f-6124a743e115/AI875.PNG)\n\n\n- Campers can only hear the siren when $I>1.2\\times 10^{-5}$. Therefore\n\n  $$\n  \\begin{aligned}\n  I &> 1.2\\times 10^{-5} \\\\[6pt]\n  \\dfrac{45}{d^2} &> 1.2\\times 10^{-5}\\\\[6pt]\n  \\dfrac{45}{1.2\\times 10^{-5}}&>d^2\\\\[6pt]\n  d &< \\sqrt{\\dfrac{45}{1.2\\times 10^{-5}}}\\\\[6pt]\n  d &< 1936.49\\end{aligned}\n  $$\n\n  Hence, the minimum distance from the siren is $\\answer{1.94 \\text{ km}}$\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 82',
    content:
      'The mean depth, $D$, in metres, of a mountain lake fluctuates in a\nyearly cycle and can be modelled by the function\n\n$$\nD(t) = a\\cos\\hspace{0.15em}(k t) + b,\n$$\n\nwhere $t$ is the elapsed time,\nin months, since the beginning of an autumn season.\nThe mean depth of the lake on month $1$ is\n$33.2$ m and on month $5$ is\n$22.8$ m.\n\n- Find the value of $k$, in degrees. <span class="marks">[2]</span>\n\n- Set up a pair of equations and find the value of $a$ and the value\nof $b$. Give your answers correct to the nearest integer.\n<span class="marks">[3]</span>\n\n- Hence find the mean depth of the lake on month $8$. <span class="marks">[2]</span>\n\n- Draw the graph of $y = D(t)$ on the grid below, for one full year,\nindicating clearly the minimum and maximum points.\n<span class="marks">[4]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/892d8911-e718-441b-bcaf-1a5740d0392e/images/650b6656-5f6c-4fd2-980c-ceab4bbe6228/22e9fb4574cbc4ff36d7eb0e402d77e50876a875.svg)\n\n\n- Determine the total amount of time in one year that the mean depth is expected to be lower than 26 metres. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The period of $D$ is $12$ months.\nHence we get\n\n  $$\n  \\begin{aligned}\n  k &= \\dfrac{\\ang{360}}{12} \\\\[6pt]\n  &\\answer{= \\ang{30}}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  D(1) &= 33.2 \\hspace{3em} \\\\[6pt]\n  a\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times 1) + b &= 33.2 \\\\[6pt]\n  0.866a + b &= 33.2 \\qref{(1)}\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  D(5) &= 22.8 \\hspace{3em} \\\\[6pt]\n  a\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times 5) + b &= 22.8 \\\\[6pt]\n  -0.866a + b &= 22.8 \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, solving the\nsystem of linear equations $(1)$-$(2)$ for $a$ and $b$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{11.8em} \\answer{a \\approx 6} \\hspace{1em}\\text{ and }\\hspace{1em} \\answer{b \\approx 28} \\hspace{3.8em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- Evaluating $D(t)$ for $t = 8$, we find\n\n  $$\n  \\begin{aligned}\n  D(8) &= 6\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times8) + 28 \\hspace{0.7em} \\\\[6pt]\n  &\\answer{= 25 \\text{ m}}\\end{aligned}\n  $$\n\n- The min and max values of the cosine function are $-1$ and $+1$.\nHence the min and max mean depths of the lake during the year are\n\n  $$\n  \\begin{aligned}\n  \\hspace{10.2em} D_{\\text{min}} &= 6(-1)+28 \\\\[6pt]\n  &= 22 \\text{ m} \\hspace{1em} [\\text{when } t = (0.5)12 = 9] \\\\[15pt]\n  D_{\\text{max}} &= 6(+1)+28 \\\\[6pt]\n  &= 34 \\text{ m} \\hspace{1em} [\\text{when } t = (0)12 = 0\\hspace{0.25em}\\&\\hspace{0.25em}t = (1)12 = 12]\\end{aligned}\n  $$\n\n  If we draw the graph of $y = D(t)$ on the grid below, for\n$0 \\leq t \\leq 12$, indicating the points A$(0,34)$, B$(12,34)$ and\nC$(6,22)$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/892d8911-e718-441b-bcaf-1a5740d0392e/images/2b12daf7-2a64-4082-be83-d94cf2bb913d/73e28209b510fb17f449ac18e686993a5d03e3ef.svg)\n\n\n- Adding the graph of $y=26$ to our solution from part (d), we can find the points of intersection:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/892d8911-e718-441b-bcaf-1a5740d0392e/images/afc9ddca-9147-42e2-83ce-681f27150723/ai177a.PNG)\n\n\n\n  $$\n  \\begin{align*}\n  8.351-3.649 &= 4.702\n  \\end{align*}\n  $$\n\n  The mean depth of the lake is lower than $26$ metres for approximately $\\answer{\\text{$4.70$ months.}}$\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '13',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 83',
    content:
      'A new class of antibiotics is studied in the medical research center.\nAntibiotics are applied to a pure culture of bacteria. The number of\nbacteria, $N$, present in the culture $t$ hours after the start of the\nexperiment are recorded. The results are shown in the table below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c408642-a9dc-4bbb-957a-5d6a5fe9857e/images/7ce99e72-9c18-4516-b553-7fa9196ca477/e1fb081fc41a9cc621eeb3b2ff28f126bbc93514.svg)\n\n\n\n- Complete the third row of the table above. <span class="marks">[2]</span>\n\n- Draw a scatter diagram of $\\log N$ versus $t$, scaling the axes if\nneeded. <span class="marks">[3]</span>\n\n- State the type of model that best fits the data displayed on your\nscatter\ndiagram from part (b). <span class="marks">[1]</span>\n\n\nA researcher in the center claims that the number of bacteria, $N$, left\nin the culture $\\text{after}$ applying antibiotics can be\nmodelled by an exponential function of the form $N(t) = a\\times b^t$,\nwhere $a$ and $b$ are positive constants.\n\n- Explain why the researcher is correct. <span class="marks">[4]</span>\n\n- Find the value of $a$ and the value of $b$. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- Calculating the values of $\\log N$, we get\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c408642-a9dc-4bbb-957a-5d6a5fe9857e/images/520e95cb-de01-4462-a729-e7b911bbcb85/61b4f3ec9ac851d948d8978ac81720c3afe52589.svg)\n\n\n\n- If we draw a scatter diagram of $\\log N$ versus $t$, we\nhave\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c408642-a9dc-4bbb-957a-5d6a5fe9857e/images/fefd2280-20f5-4296-828e-ec96dc4feb80/e884512675852ac6da9bd0f7c67f1081c0ab4d85.svg)\n\n\n- $\\answer{\\text{Linear model}}$\n- Using the properties of exponents, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.2em} \\log N(t) &= mt + c \\hspace{3em} [\\text{by parts (b) and (c)}] \\\\[8pt]\n  10^{mt+c} &= N(t) \\hspace{3em} [\\text{by definition of log}] \\\\[8pt]\n  (10^{mt})(10^c) &= N(t) \\\\[8pt]\n  N(t) &= (10^c)(10^{m})^t\\end{aligned}\n  $$\n\n  Hence we obtain\n$N(t) = a\\times b^t$ for $a = 10^c$ and $b = 10^m$.\n- The equation of the regression line of $\\log N$ on $t$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{11em} \\log N(t) &= -0.13765t + 4.84028 \\hspace{2em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence, using part (d), we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.2em} a &= 10^{4.84028} \\\\[6pt]\n  &\\answer{\\approx 69\\hspace{0.15em}200}\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.9em} b &= 10^{-0.13765} \\\\[6pt]\n  &\\answer{\\approx 0.728}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 84',
    content:
      'The amount of water, $A$, in thousands of litres, available in a water\ntank located on a farm fluctuates in a yearly cycle and can be modelled\nby the function\n\n$$\nA(t) = a\\sin\\hspace{0.15em}(k t) + b,\n$$\n\nwhere $t$ is the elapsed time, in weeks, since the start of the\nyear.\nThe amount of water available in the tank on week $6$ is $24$ thousand\nlitres and on week $31$ is $9.2$ thousand\nlitres.\n\n- Find the value of $k$, in degrees, assuming there are $52$ whole\nweeks in a year.<span class="marks">[2]</span>\n\n- Set up a pair of equations to find the value of $a$ and the value of\n$b$. Give your answers correct to the nearest integer.\n<span class="marks">[3]</span>\n\n- Hence find the amount of water available in the tank in week $42$.\n<span class="marks">[2]</span>\n\n- Draw the graph of $y = A(t)$ on the grid below, for one full year,\nindicating clearly the minimum and maximum points.\n<span class="marks">[4]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9f9ea1ac-4ddd-4bad-86a6-cabf74ce33e5/images/e6db81cc-44d6-4dec-bb02-b8db7bb46b78/a35842049aa426b4bf5aefe8b287a6da9db53a2d.svg)\n\n\n- Determine the total number of weeks that the amount of water in the tank is at least $24\\,000$ litres. Give your answer to the nearest week. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The period of $A$ is $52$ weeks.\nHence we get\n\n  $$\n  \\begin{aligned}\n  k &= \\dfrac{\\ang{360}}{52} \\\\[6pt]\n  &\\answer{\\approx \\ang{6.92}}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  A(6) &= 24 \\hspace{3em} \\\\[6pt]\n  a\\sin\\hspace{0.15em}(\\ang{6.92}\\hspace{-0.15em}\\times 6) + b &= 24 \\\\[6pt]\n  0.663a + b &= 24 \\qref{(1)}\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  A(31) &= 9.2 \\hspace{3em} \\\\[6pt]\n  a\\sin\\hspace{0.15em}(\\ang{6.92}\\hspace{-0.15em}\\times 31) + b &= 9.2 \\\\[6pt]\n  -0.567a + b &= 9.2 \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, solving the\nsystem of linear equations $(1)$-$(2)$ for $a$ and $b$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{11.5em} \\answer{a \\approx 12} \\hspace{1em}\\text{ and }\\hspace{1em} \\answer{b \\approx 16} \\hspace{3.5em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- Evaluating $A(t)$ for $t = 42$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} A(42) &= 12\\sin\\hspace{0.15em}(\\ang{6.92}\\hspace{-0.15em}\\times42) + 16 \\\\[6pt]\n  &\\answer{= 4.77 \\text{ thousand litres}}\\end{aligned}\n  $$\n\n- The min and max values of the sine function are $-1$ and $+1$.\nHence the min and max amounts of water in the tank available during\nthe year are\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.3em} A_{\\text{min}} &= 12(-1)+16 \\\\[6pt]\n  &= 4 \\text{ thousand litres} \\hspace{2.5em} [\\text{when } t = (0.75)52 = 39] \\\\[15pt]\n  A_{\\text{max}} &= 12(+1)+16 \\\\[6pt]\n  &= 28 \\text{ thousand litres} \\hspace{2em} [\\text{when } t = (0.25)52 = 13]\\end{aligned}\n  $$\n\n  If we draw the graph of $y = A(t)$ on the grid below, for\n$0 \\leq t \\leq 52$, indicating the points P$(13,28)$ and Q$(39,4)$,\nwe have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9f9ea1ac-4ddd-4bad-86a6-cabf74ce33e5/images/b8498a75-a823-45e9-98f9-710beed4d209/8814e237c9bc7b3142ac40e7f50be90d39e62a05.svg)\n\n\n- Adding the graph of $y=24$ to our solution from part (d), we can find the points of intersection:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9f9ea1ac-4ddd-4bad-86a6-cabf74ce33e5/images/ebef324b-3baf-41cb-98f1-619d4c70d32a/ai176a.PNG)\n\n\n  The amount of water in the tank is at least $24\\,000$ litres for $\\answer{\\text{$14$ weeks}}$ (to the nearest week).\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '13',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 85',
    content:
      'A particular species of microbes is studied in the laboratory. Microbes\nare grown under controlled conditions in pure culture. The number of\nmicrobes, $N$, present in the culture $t$ hours after the start of the\nexperiment are recorded. The results are shown in the table below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/e9b46dc9-0930-45e2-82d6-cef1f0c4947c/images/e0c72216-8582-4a43-b865-6568739b5e03/05f74794f9493b7052849a256cb95a218dff9b51.svg)\n\n\n\n- Complete the third row of the table above. <span class="marks">[2]</span>\n\n- Draw a scatter diagram of $\\log N$ versus $t$, scaling the axes if\nneeded. <span class="marks">[3]</span>\n\n- State the type of model that best fits the data displayed on your\nscatter\ndiagram from part (b). <span class="marks">[1]</span>\n\n\nA scientist in the laboratory claims that the number of microbes, $N$,\ngrown in the laboratory during the experiment can be modelled by an\nexponential function of the form $N(t) = a\\times b^t$, where $a$ and $b$\nare positive constants.\n\n- Explain why the scientist is correct. <span class="marks">[4]</span>\n\n- Find the value of $a$ and the value of $b$. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- Calculating the values of $\\log N$, we get\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/e9b46dc9-0930-45e2-82d6-cef1f0c4947c/images/04df3b88-45a9-4949-aa9e-88b0f0bf335c/6cf620ba27d00fb0d7be6bd8c31f6e9e22c0c9ce.svg)\n\n\n\n- If we draw a scatter diagram of $\\log N$ versus $t$, we\nhave\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/e9b46dc9-0930-45e2-82d6-cef1f0c4947c/images/18131649-4993-445a-99d1-5cf1380f097e/73d2d06aa23839e33065bdf471930d83ad8030b6.svg)\n\n\n- $\\answer{\\text{Linear model}}$\n- Using the properties of exponents, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.2em} \\log N(t) &= mt + c \\hspace{3em} [\\text{by parts (b) and (c)}] \\\\[8pt]\n  10^{mt+c} &= N(t) \\hspace{3em} [\\text{by definition of log}] \\\\[8pt]\n  (10^{mt})(10^c) &= N(t) \\\\[8pt]\n  N(t) &= (10^c)(10^{m})^t\\end{aligned}\n  $$\n\n  Hence we obtain\n$N(t) = a\\times b^t$ for $a = 10^c$ and $b = 10^m$.\n- The equation of the regression line of $\\log N$ on $t$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{11em} \\log N(t) &= 0.14521t + 1.69035 \\hspace{2em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence, using part (d), we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.2em} a &= 10^{1.69035} \\\\[6pt]\n  &\\answer{\\approx 49.0}\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.3em} b &= 10^{0.14521} \\\\[6pt]\n  &\\answer{\\approx 1.40}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 86',
    content:
      'A right cylinder has height $h$ mm and diameter $x$ mm. The volume of\nthis cylinder is equal to $45$ mm$^3$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/ff24aae3-1825-4594-84b1-18ff6ebb70d3/images/efc9fbc4-0075-415f-b8c9-1a1def8352df/9aebb1d3e12c9fb1c552ed279ae0c28d1ca125c3.svg)\n\n\nThe total surface area, $A$, of the cylinder can be expressed as\n$A = \\dfrac{\\pi}{2}x^2 + \\dfrac{k}{x}$.\n\n- Find the value of $k$. <span class="marks">[4]</span>\n\n- Find the value of $x$ that makes the total surface area a minimum.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the volume of a right cylinder formula, we have\n\n  $$\n  \\begin{aligned}\n  V &= \\pi r^2h \\\\[6pt]\n  45 &= \\pi\\bigg[\\dfrac{x}{2}\\bigg]^2\\hspace{-0.2em}h \\\\[3pt]\n  45 &= \\dfrac{\\pi x^2h}{4} \\\\[6pt]\n  h &= \\dfrac{180}{\\pi x^2} \\end{aligned}\n  $$\n\n  Hence the total surface area is\n\n  $$\n  \\begin{aligned}\n  \\hspace{8em} A(x) &= [\\text{top \\& bottom area}] + [\\text{curved surface area}] \\\\[16pt]\n  &=  2\\pi r^2 + 2\\pi rh \\\\[9pt]\n  &= 2\\pi\\bigg[\\dfrac{x}{2}\\bigg]^2 + 2\\pi\\bigg[\\dfrac{x}{2}\\bigg]\\bigg[\\dfrac{180}{\\pi x^2}\\bigg] \\\\[6pt]\n  &= \\dfrac{\\pi}{2}x^2 + \\dfrac{180}{x}\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{k = 180}$\n- If we sketch the graph of $y = A(x)$, for $x > 0$ [by using\nG.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ff24aae3-1825-4594-84b1-18ff6ebb70d3/images/70443638-b03e-4b02-9371-621e475b9a63/10ad2caa42e46f8e9db41f9ae6642694c0b81ac1.svg)\n\n\n  Hence\n$\\answer{x \\approx 3.86 \\text{  mm}}$\nmakes the total surface area a minimum.\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 87',
    content:
      'Peter wants to reach a rock, located $5$ km away\nfrom his current position, using the strategy outlined below.\nEvery hour Peter approaches the rock by a fixed percent of the remaining\ndistance to the rock.\nThe distance, $D$, in kilometres, Peter has travelled from his original\nposition, can be modelled by the exponential function\n\n$$\n\\begin{aligned}\nD(t) = a + b\\big(k^{-t}\\big), \\hspace{0.5em} t\\geq 0, \\end{aligned}\n$$\n\nwhere $t$ is the time, in hours, since Peter started moving.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/801847f8-3a4e-4e44-b8ec-eefd0e4a732e/images/f49c99b3-6084-4cce-b203-48eef7cf3293/819ba2cfeb3383629fe25649fde3301bcf8c76d4.svg)\n\n\n\n- Explain why $a= 5$. <span class="marks">[2]</span>\n\n- Find the value of $b$. <span class="marks">[2]</span>\n\n\nAfter one hour, the distance from Peter to the rock is\n$3.75$ km.\n\n- Find the value of $k$. <span class="marks">[2]</span>\n\n- Find the distance between Peter and the rock after $4$\nhours. <span class="marks">[2]</span>\n\n\nPeter can be heard when shouting from $200$ metres away.\n\n- Calculate the time it takes until someone standing on the\nrock can hear Peter shouting. Round your answer correct to the\nnearest hour.\n<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/801847f8-3a4e-4e44-b8ec-eefd0e4a732e/images/749982c8-e46c-4506-bf93-4534155f5e67/284ba0b0f6db44c91e038d4ec5486789b5846da8.svg)\n\n\n  On the other hand, we know Peter will not travel more than\n$5$ km.\n  Hence we must have $a = 5$.\n- Solving the equation $D(0) = 0$ for $t$, we get\n\n  $$\n  \\begin{aligned}\n  5 + b\\big(k^{0}\\big) &= 0 \\hspace{1.6em} \\\\[6pt]\n  5 + b &= 0 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2.8em} \\answer{b = -5}\n  $$\n\n- Solving the equation $D(1) = 5 - 3.75 = 1.25$ for $k$, we obtain\n\n  $$\n  \\begin{aligned}\n  5 - 5\\big(k^{-1}\\big) &= 1.25 \\hspace{2.35em} \\\\[10pt]\n  5 - \\dfrac{5}{k} &= \\dfrac{5}{4} \\\\[6pt]\n  1 - \\dfrac{1}{k} &= \\dfrac{1}{4} \\\\[6pt]\n  \\dfrac{3}{4} &= \\dfrac{1}{k} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.8em} \\answer{k = \\dfrac{4}{3}}\n  $$\n\n- Evaluating $D(t)$ for $t = 4$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.4em} D(4) &= 5 - 5\\hspace{-0.15em}\\left(\\dfrac{4}{3}\\right)^{-4} \\\\[6pt]\n  &\\approx 3.42\\end{aligned}\n  $$\n\n  Hence, the distance between Peter and\nthe rock after $4$ hours is\n\n  $$\n  \\begin{aligned}\n  5  - D(4) &= 5 - 3.42 \\\\[6pt]\n  &\\answer{= 1.58 \\text{ km}} \\hspace{1.4em}\\end{aligned}\n  $$\n\n- Solving the equation $D(t) = 5 - 0.2 = 4.80$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.8em} 5 - 5\\big(k^{-t}\\big) &= 4.80 \\hspace{1em} \\\\[6pt]\n  t &\\approx 11.2 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence it takes\n$\\answer{11 \\text{ hours}}$\nuntil someone on the rock can hear Peter shouting.\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '11',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'Jeremy invests $\\$8000$ into a savings account that pays an annual\ninterest rate of $5.5$ %, compounded\nannually.\n\n- Write down a formula which calculates that total value of the\ninvestment after $n$ years. <span class="marks">[2]</span>\n\n- Calculate the amount of money in the savings account after:\n  \n  - $1$ year;\n  - $3$ years. <span class="marks">[2]</span>\n\n\n- Jeremy wants to use the money to put down a $\\$10\\hspace{0.15em}000$\ndeposit on an apartment. Determine if Jeremy will be able to do this\nwithin a $5$-year timeframe.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/29dc8a60-0190-46e1-8d7c-a827be9924b6/images/828dc7db-36fb-4e0e-b60e-5970709ce9e1/eaedd006beb5ba238d9ad76a3a6f6101e049be71.svg)\n\n\n  Hence, using the compound interest formula, we have\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 8000\\bigg(1 + \\dfrac{5.5}{100\\times1}\\bigg)^{1\\times n} \\\\[12pt]\n  &\\answer{= 8000\\hspace{0.05em}(1+0.055)^n} \\qref{(1)}\\end{aligned}\n  $$\n\n- \n  - Substituting $n = 1$ in the formula $(1)$, we get\n\n    $$\n    \\begin{aligned}\n    \\mathrm{FV} &= 8000\\hspace{0.05em}(1+0.055) \\hspace{0.5em} \\\\[8pt]\n    &\\answer{= \\$8440}\\end{aligned}\n    $$\n\n  - Substituting $n = 3$ in the formula $(1)$, we get\n\n    $$\n    \\begin{aligned}\n    \\mathrm{FV} &= 8000\\hspace{0.05em}(1+0.055)^3 \\\\[8pt]\n    &\\answer{\\approx \\$9390}\\end{aligned}\n    $$\n\n\n- Substituting $n = 5$ in the formula $(1)$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.2em} \\mathrm{FV} &= 8000\\hspace{0.05em}(1+0.055)^5 \\\\[8pt]\n  &\\approx \\$10\\hspace{0.15em}456\\end{aligned}\n  $$\n\n  $\\answer{\\text{Yes, Jeremy will be able to do this within a \\(5\\)-year timeframe.}}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 2',
    content:
      'In this question give all answers correct to two decimal places.\nMia deposits $4000$ Australian dollars (AUD) into a bank account. The\nbank pays a nominal annual interest rate of\n$6$ %, compounded semi-annually.\n\n- Find the amount of interest that Mia will earn over the next\n$2.5$ years. <span class="marks">[3]</span>\n\n\nElla also deposits AUD into a bank account. Her bank pays a nominal\nannual $\\text{interest}$ rate of $4$ %,\ncompounded monthly. In $2.5$ years, the total amount in Ella\'s\naccount will be $4000$ AUD.\n\n- Find the amount that Ella deposits in the bank account.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/fe9fa58e-345a-4e8b-947c-bd0926c22efc/images/89cb9c5a-552f-42ac-ae24-1de2d90c0b31/dc425b29b9e196ccc51470e8966f83917d4179b9.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 4000\\bigg(1+\\dfrac{6}{100\\times2}\\bigg)^{2\\times2.5} \\\\[12pt]\n  &\\approx 4637.10 \\text{ AUD}\\end{aligned}\n  $$\n\n  Hence the amount of interest earned is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} - \\text{PV} &\\approx 4637.10 - 4000 \\hspace{3.7em} \\\\[6pt]\n  &\\answer{\\approx 637.10 \\text{ AUD}}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/fe9fa58e-345a-4e8b-947c-bd0926c22efc/images/5cef2eea-f085-41af-9844-b363be5b4d34/bc195cd8b953f93121c2542be7b715a98cf4c62e.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} 4000 &= \\text{PV}\\bigg(1+\\dfrac{4}{100\\times12}\\bigg)^{12\\times2.5} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{9em} \\answer{\\text{PV} \\approx 3619.95 \\text{ AUD}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 3',
    content:
      'Hannah buys a car for $\\$24\\hspace{0.15em}900$. The value of the car\ndepreciates by $16$ %\neach year.\n\n- Find the value of the car after $10$ years. <span class="marks">[3]</span>\n\n\nPatrick buys a car for $\\$12\\hspace{0.15em}000$. The car depreciates by\na fixed amount each year, and after $6$ years it is worth $\\$6200$.\n\n- Find the annual rate of depreciation of the car.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6bbf1c0c-9c5b-4ac3-9edf-a63b70a97e44/images/88e9f084-1c6e-4955-9bad-33565408c7dd/848a0a2395b69bf10b5ffc75fbbed6c738b8c64e.svg)\n\n\n  Hence, using the compound depreciation formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\\\[5pt]\n  &= 24\\hspace{0.25em}900\\bigg(1 - \\dfrac{16}{100}\\bigg)^{10}  \\\\[12pt]\n  &\\answer{\\approx \\$4360}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6bbf1c0c-9c5b-4ac3-9edf-a63b70a97e44/images/afa47a69-1f95-43f7-9609-3fc3d093e416/80839ebacd99f943925e1048218639215d638a8d.svg)\n\n\n  Hence, using the compound depreciation formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.9em} 6200 &= 12\\hspace{0.15em}000\\bigg(1 - \\dfrac{r}{100}\\bigg)^6  \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{7.7em} \\answer{r \\approx 10.4\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 4',
    content:
      'Edward wants to buy a new car, and he decides to take out a loan of $70\\hspace{0.15em}000$ Australian dollars from a bank. The loan is for $6$ years, with a nominal annual interest rate of $7.2\\%$, compounded monthly. Edward will pay the loan in fixed monthly instalments.\n\n- Determine the amount Edward should pay each month. Give your answer to the nearest dollar.<span class="marks">[3]</span>\n\n- Calculate the amount Edward will still owe the bank at the end of the third year. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the TVM Solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/81302b98-a4c3-4b12-b7cc-241b7600cf4c/images/c0fb52bd-e0f6-44d1-94fe-56ce5b429b92/AI1004a.PNG)\n\n\n  Hence Edward should pay $\\answer{1200}$ each month.\n- Using the TVM Solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/81302b98-a4c3-4b12-b7cc-241b7600cf4c/images/3b0a65d6-26e2-4f86-9343-e107ef09262d/AI1004b.PNG)\n\n\n  Therefore the outstanding balance is\n$\\answer{38\\hspace{0.15em}800}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 5',
    content:
      'In this question give all answers correct to two decimal places.\nElena invests in a retirement plan. She initially invests €$1500$, then invests a further\n€$1500$ at the end of each year.\nInterest is earned on each payment at a rate of\n$2.49$ % per year, compounded annually.\n\n- Find the value of the investment after $25$ years. <span class="marks">[3]</span>\n\n- Find the amount of interest Elena will earn on the investment over\n$25$ years.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the finance solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/aeeaa377-5325-4ba1-a51c-3dcecd533607/images/398c6725-cab0-4359-a428-f9fd85d44515/elena%201.PNG)\n\n\n  Hence the value of the investment after $25$ years is\n$\\answer{\\text{\\euro\\hspace{0.05em}}53\\hspace{0.15em}944.48}$\n- The amount of interest earned on the investment over $25$ years is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} - 1500\\times26 &= 53\\hspace{0.15em}944.48 - 39\\hspace{0.15em}000 \\hspace{3em} \\\\[6pt]\n  &\\answer{= \\text{\\euro\\hspace{0.05em}}14\\hspace{0.15em}944.48}\\end{aligned}\n  $$\n\n  Note that Elena has made an initial investment, followed by 25 end-of-year payments, so there are 26 payments of €$\\bm{1500}$ altogether.\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 6',
    content:
      'Maria invests $\\$25\\hspace{0.15em}000$ into a savings account that pays\na nominal annual interest rate of $4.25$ %,\ncompounded monthly.\n\n- Calculate the amount of money in the savings account after $3$\nyears. <span class="marks">[3]</span>\n\n- Calculate the number of years it takes for the account to reach\n$\\$40\\hspace{0.15em}000$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c21abc04-a180-4878-84cc-a28c2f008ce7/images/077d667f-2011-479d-af8f-8dd6e16290f9/987f4c1d6bf2f65199be87193b7aea8bd2861a05.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.4em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 25\\hspace{0.15em}000\\bigg(1 + \\dfrac{4.25}{100\\times12}\\bigg)^{12\\times3} \\\\[12pt]\n  &\\answer{\\approx \\$28\\hspace{0.15em}400}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c21abc04-a180-4878-84cc-a28c2f008ce7/images/7db60b6f-f208-4027-943e-8c8d186394d8/f2cb8aa057458cfd9f39f532ecc8e0e8adc7b0a4.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} 40\\hspace{0.15em}000 &= 25\\hspace{0.15em}000\\bigg(1 + \\dfrac{4.25}{100\\times12}\\bigg)^{12n} \\\\[6pt]\n  n &\\approx 11.1 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence it takes\n$\\answer{11.1 \\text{ years}}$\nfor the account to reach $\\$40\\hspace{0.15em}000$.\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 7',
    content:
      'In this question give all answers correct to two decimal places.\nCharlie deposits $8000$ Canadian dollars (CAD) into a bank account. The\nbank pays a nominal annual interest rate of\n$5$ %, compounded semi-monthly.\n\n- Find the amount of interest that Charlie will earn over the next\n$2$ years. <span class="marks">[3]</span>\n\n\nOscar also deposits CAD into a bank account. His bank pays a nominal\nannual interest rate of $6$ %, compounded\nquarterly. In $2$ years, the total amount in Oscar\'s account will be\n$\\$8000$ CAD.\n\n- Find the amount that Oscar deposits in the bank account.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/14cf9d6f-fe6d-4f19-83b2-f919b8e959c3/images/1d2b9973-cb55-4367-87c3-a59c79ce0017/866b44da1125ebe5d0b89561134ddf7c866ae57c.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\text{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 8000\\bigg(1 + \\dfrac{5}{100\\times24}\\bigg)^{24\\times 2} \\\\[12pt]\n  &\\answer{\\approx 8840.45 \\text{ CAD}}\\end{aligned}\n  $$\n\n  Hence the amount of interest earned is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} - \\text{PV} &\\approx 8840.45 - 8000 \\\\[6pt]\n  &\\answer{\\approx 840.45 \\text{ CAD}}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/14cf9d6f-fe6d-4f19-83b2-f919b8e959c3/images/83179f72-5202-4cfc-96b3-bedb58e027e4/8eeac585959bad7f1c4494696a7d0f0eef5ec337.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.1em} 8000 &= \\text{PV}\\bigg(1+\\dfrac{6}{100\\times4}\\bigg)^{4\\times2} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{12.6em} \\answer{\\text{PV} \\approx 7101.69 \\text{ CAD}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 8',
    content:
      'At the beginning of a year, Jack has $\\$5000$ in a savings account that pays a $4\\hspace{0.05em}\\%$ annual interest rate, compounded quarterly. At the end of each year, Jack plans to deposit a further $\\$5000$ in the account.\n\n- Find the number of whole years it will take until Jack has at least\n$\\$100\\hspace{0.15em}000$ in his account. <span class="marks">[3]</span>\n\n\nAt the same time, John has $\\$6000$ in a savings account that pays an annual interest rate that is compounded semi-annually. At the end of each year, John deposits a further $\\$6000$ in the account. After $20$ years, John has $\\$200\\hspace{0.15em}000$ in his account.\n\n- Find John\'s annual interest rate. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- Using the finance solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c829974-7a5e-4d83-ab07-258cb6050a4d/images/0338c3c8-8d90-429e-8cf4-3e634966d7d8/jj1.PNG)\n\n\n  Hence it will take\n$\\answer{14 \\text{ whole years}}$\nuntil Jack has at least $\\$100\\hspace{0.15em}000$ in his account.\n- Using the finance solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c829974-7a5e-4d83-ab07-258cb6050a4d/images/bf90cdaf-e5db-4347-9095-76399691ccd1/jj2.PNG)\n\n\n  Hence John's annual interest rate is\n$\\answer{4.33\\hspace{0.05em}\\%}$\n",
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 9',
    content:
      'In this question give all answers correct to the nearest whole\nnumber.\nBenjamin spends € $32\\hspace{0.15em}000$ buying\nbitcoin mining hardware for his cryptocurrency $\\text{mining}$\nbusiness. The hardware depreciates by $16$ %\neach year.\n\n- Find the value of the hardware after two years. <span class="marks">[3]</span>\n\n- Find the number of years it will take for the hardware to be worth\nless than € 8000. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9a6278b0-5d6d-4ead-be25-cf6e623be990/images/f4ea5999-da14-46c4-a49f-ae6ab7a1bfba/0586f73ff6162ac0d35f7aa7d72624e24f0856bf.svg)\n\n\n  Hence, using the compound depreciation formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.9em} \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\\\[5pt]\n  &= 32\\hspace{0.15em}000\\bigg(1 - \\dfrac{16}{100}\\bigg)^2 \\\\[12pt]\n  &\\answer{\\approx \\text{\\euro\\hspace{0.05em}}22\\hspace{0.15em}579}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9a6278b0-5d6d-4ead-be25-cf6e623be990/images/bd728f37-1f09-41ee-847d-2b9a343c8101/532b7aee114d6a0a16e054edfa0e732a7eb37db7.svg)\n\n\n  Hence, using the compound depreciation formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.8em} 8000 &= 32\\hspace{0.15em}000\\bigg(1 - \\dfrac{16}{100}\\bigg)^n \\\\[8pt]\n  n &\\approx 7.95 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence it takes\n$\\answer{8 \\text{ years}}$\nfor the hardware to be worth less than\n€ $8000$.\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 10',
    content:
      'Ali bought a car for $\\$18\\hspace{0.15em}000$. The value of the car\ndepreciates by $10.5$ %\neach year.\n\n- Find the value of the car at the end of the first year. <span class="marks">[2]</span>\n\n- Find the value of the car after $4$ years. <span class="marks">[2]</span>\n\n- Calculate the number of years it will take for the car to be worth\nexactly half its original value. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/adf4fafa-562e-4070-a40a-3221bf3c76fb/images/d9a62615-240a-4867-8825-961128367193/86d0641572fd7d8ca13b40e061d1374bca7391bc.svg)\n\n\n  Hence, using the compound depreciation formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\\\[6pt]\n  &= 18\\hspace{0.15em}000\\bigg(1 - \\dfrac{10.5}{100}\\bigg)  \\\\[12pt]\n  &= \\$16\\hspace{0.15em}110 \\\\[18pt]\n  &\\answer{\\approx \\$16\\hspace{0.15em}100} \\\\[12pt]\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/adf4fafa-562e-4070-a40a-3221bf3c76fb/images/adcb999b-6295-4e6f-83a7-abd24505d77c/8adbc1baad593f942992356c96995063b6051eee.svg)\n\n\n  Hence, using the compound depreciation formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} \\mathrm{FV} &= 18\\hspace{0.15em}000\\bigg(1 - \\dfrac{10.5}{100}\\bigg)^4  \\\\[12pt]\n  &= \\$11\\hspace{0.15em}549.5 \\\\[18pt]\n  &\\answer{\\approx \\$11\\hspace{0.15em}500}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/adf4fafa-562e-4070-a40a-3221bf3c76fb/images/5a3c1fb3-b32a-48f2-a85f-fe8df0fc8495/22cbaefd6c6344e284fd948d4606858070563a4e.svg)\n\n\n  Hence, using the compound depreciation formula, we find\n\n  $$\n  \\begin{aligned}\n  9000 &= 18\\hspace{0.15em}000\\bigg(1 - \\dfrac{10.5}{100}\\bigg)^n \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{8em} \\answer{n \\approx 6.25 \\text{ years}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 11',
    content:
      'In this question give all answers correct to two decimal places.\nGeorge invests in a retirement plan in which equal payments of $\\$2750$\nare made at the end of each year. Interest is earned on each payment at\na rate of $3$ % per year, compounded\nsemi-annually.\n\n- Find the value of the investment after $20$ years. <span class="marks">[3]</span>\n\n- Find the amount of interest George will earn on the investment over\n$20$ years.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the TVM Solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/cf44f0b2-e32f-449d-878b-08bfc4cc04bc/images/ab2a7b26-477a-4e83-b834-fd3f19ed0bd7/9cd1305c72a2e65dc53aca0d9d1f030cd54bae2c.svg)\n\n\n  Hence the value of the investment after $20$ years is\n$\\answer{74\\hspace{0.15em}062.88}$\n- The amount of interest earned on the investment over $20$ years is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} - 2750\\times20 &= 74\\hspace{0.15em}062.88 - 55\\hspace{0.15em}000 \\hspace{3em} \\\\[6pt]\n  &\\answer{= \\$19\\hspace{0.15em}062.88} \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 12',
    content:
      'On January the 1st 2017 Ji Sun had savings of $7,380.\nHe decided to keep his money in a bank account that pays an annual interest rate of 4.7% per year which is compounded monthly.\n\n- Ji Sun left the money in the bank account until January the 1st 2025.\n  Calculate the value of his investment on this day, giving your answer to 2 decimal places. <span class="marks">[2]</span>\n\n\nAfter 2 complete years of earning interest in the bank account, Ji Sun decided to move his money into a savings account which paid a higher rate of yearly interest, compounded monthly.\n\n- On January the 1st 2025 he is projected to have  $11,747.40.\n  Determine the annual interest rate of the savings account. <span class="marks">[4]</span>\n\n',
    markScheme:
      "\n- The savings are invested for a total of $8$ years, hence we can write down the following\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d184c033-8328-4ae2-9235-9a4dd2b123b8/images/068fca3b-355a-44b2-bb91-1363cca8680e/a1131v1.png)\n\n\n  Using the compound interest formula, we have\n\n  $$\n  \\begin{align*}\n  FV&= 7380\\bigg(1 + \\dfrac{4.7}{100\\times12}\\bigg)^{12\\times 8}\\tag*{\\textbf{(M1)}}\\\\[12pt]\n  &\\hspace{0.275em}\\tcbhighmath{=\\$10740.69}  \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- First we need to work out the value of Ji Sun's savings after $2$ complete years\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d184c033-8328-4ae2-9235-9a4dd2b123b8/images/ae8ad18d-864b-4d72-927e-f5589d37895d/a1131v2.png)\n\n\n\n  $$\n  \\begin{align*}\n  &= 7380\\bigg(1 + \\dfrac{4.7}{100\\times12}\\bigg)^{12\\times 2} \\tag*{\\textbf{(M1)}}\\\\[12pt]\n  &=\\$8105.88... \\tag*{\\textbf{(A1)}}\\\\\n  \\end{align*}\n  $$\n\n  As this amount of money is invested for the remaining $6$ years, we can form the following equation in terms of the unknown interest rate $r$.\n\n  $$\n  \\begin{align*}\n  11747.40&= 8105.88...\\bigg(1 + \\dfrac{r} {100\\times12}\\bigg)^{12\\times 6} \\tag*{\\textbf{(M1)}}\\\\\n  \\end{align*}\n  $$\n\n  We solve this equation graphically\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d184c033-8328-4ae2-9235-9a4dd2b123b8/images/f88b1b6c-c7da-4f1d-bc82-337664f0ce41/a1131v3.png)\n\n\n  Hence the value of $r$ is $\\answer{6.20\\%} $\n\n  $$\n      \\tag*{\\textbf{A1}}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 13',
    content:
      'Isabella and Charlotte both receives $80\\hspace{0.15em}000$ Australian\ndollars (AUD) on their $18$th birthday to invest for later in their\nlife.\nIsabella deposits her $80\\hspace{0.15em}000$ AUD in a bank account that\npays a nominal annual interest rate of $x$ %,\ncompounded monthly.\n\n- The amount in a bank account after $6$ years will be\n$100\\hspace{0.15em}000$ AUD. Find the nominal annual interest rate.\nGive your answer correct to two decimal places.<span class="marks">[3]</span>\n\n\nCharlotte uses her $80\\hspace{0.15em}000$ AUD to buy a house that\nincreases in value at a rate of $3$ % per year.\n\n- Find the house price after $6$ years. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1145470e-716a-45bc-bf45-a97b5ce6883e/images/989f13b5-edfb-4fc6-8e38-225387a88ff4/871a7a7a5a84cb584b72c76d9154c0cb59ec2b91.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  100\\hspace{0.15em}000 &= 80\\hspace{0.15em}000\\bigg(1 + \\dfrac{x}{100\\times12}\\bigg)^{12\\times6} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{5.5em} \\answer{x \\approx 3.72\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1145470e-716a-45bc-bf45-a97b5ce6883e/images/127fe779-4cec-44a0-bb70-10854a67226c/29de2b1927fb49c589695bb5780062dd569e5dff.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.2em} \\mathrm{FV} &= 80\\hspace{0.15em}000\\bigg(1 + \\dfrac{3}{100\\times1}\\bigg)^{1\\times 6} \\\\[12pt]\n  &\\answer{\\approx 95\\hspace{0.15em}500 \\text{ AUD}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 14',
    content:
      'Michael buys a second hand Tesla car for $\\$18\\hspace{0.15em}000$. The\nvalue of the car depreciates by $10\\%$ each\nyear.\n\n- Find the total amount the car will depreciate after 5 years, giving\nyour answer correct to the nearest dollar. <span class="marks">[3]</span>\n\n\nThe price of a different used car depreciates by $5\\%$ each year.\n\n- Find the value reduction of this car after $4$ years as a\npercentage, when compared to the original purchase price.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1ef72e0b-6daf-49bf-86a3-f321048cbc21/images/8ad5fa87-b19d-4552-90d8-eab141f1d092/6462608efbf9ba0d371a0ca7fdfe6437d1874af0.svg)\n\n\n  Using the compound depreciation formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\\\[5pt]\n  &= 18\\hspace{0.25em}000\\bigg(1 - \\dfrac{10}{100}\\bigg)^{5}  \\\\[12pt]\n  &\\approx \\$10\\hspace{0.15em}629\\end{aligned}\n  $$\n\n  Hence, after $5$\nyears the car has depreciated by\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.1em} \\mathrm{PV} - \\text{FV} &= 18\\hspace{0.15em}000 - 10\\hspace{0.15em}629 \\\\[6pt]\n  &\\answer{=\\$\\, 7\\hspace{0.15em}371 }\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1ef72e0b-6daf-49bf-86a3-f321048cbc21/images/4f46d5f5-a0a5-46ed-962c-a2080abe4c9c/16c3205d28d13971f8ad1ff276a51f080dad38f6.svg)\n\n\n  Using the compound depreciation formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\\\[5pt]\n  &= \\text{PV}\\bigg(1 - \\dfrac{5}{100}\\bigg)^{4}  \\\\[12pt]\n  &=\\text{PV}\\bigg(\\dfrac{19}{20}\\bigg)^{4}\\end{aligned}\n  $$\n\n  Therefore,\nthe reduction in price is\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.1em} \\mathrm{PV} -\\text{PV}\\bigg(\\dfrac{19}{20}\\bigg)^{4} &=\\Big(1-\\bigg(\\dfrac{19}{20}\\bigg)^{4}\\Big) \\, \\mathrm{PV} \\\\[6pt]\n  &\\approx 0.185 \\, \\mathrm{PV}\\end{aligned}\n  $$\n\n  Hence, the reduction in\nprice after $4$ years as a percentage is\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.1em} 0.185\\times 100\\% \\,\\,\\hspace{0.525em} \\answer{=18.5\\% }\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 15',
    content:
      'Charles plans to invest in a retirement plan for $30$ years. In this\nplan, he will deposit $1000$ British pounds (GBP) at the end of every\nmonth and receive a $6.5\\hspace{0.05em}\\%$ interest rate per annum,\ncompounded monthly.\n\n- Find the future value of the investment at the end of the $30$\nyears. Give your answer correct to the nearest pound.<span class="marks">[3]</span>\n\n\nAfter the $30$-year period, Charles will start receiving regular monthly\npayments of $1500$ GBP.\n\n- Calculate the number of years it will take Charles\'s\nmonthly retirement $\\text{payments}$ to match the total\namount originally invested. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Using the TVM Solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43be05e3-7082-4b01-9acc-d460b81cea14/images/469f7639-6fd8-415d-92a6-530e174de8ac/2c602bcdce03de3ab58076d77f8cc01aa8e5098c.svg)\n\n\n  Hence the value of the investment at the end of the $30$ years is\n$\\answer{1\\hspace{0.15em}106\\hspace{0.15em}178 \\text{ GBP}}$\n- The amount that Charles invests over $30$ years is\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.2em} 1000\\times360 &= 360\\hspace{0.15em}000 \\text{ GBP}\\end{aligned}\n  $$\n\n  Hence Charles breaks even with the amount he invested after\n\n  $$\n  \\begin{aligned}\n  \\dfrac{360\\hspace{0.15em}000}{1500\\times12} &=\\hspace{0.525em}\\answer{20 \\text{ years}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 17',
    content:
      'Alex invests an amount of USD into a savings account which pays 3.3%\n(p.a.) interest, compounded monthly. After 5 years Alex has\n$8\\hspace{0.15em}000$ USD in the account.\n\n- Find the amount of USD initially invested, rounding your answer to\ntwo decimal places.<span class="marks">[3]</span>  \n\nWith this money, Alex purchases a used car for $5\\hspace{0.15em}000$\ndollars, and sells it 3 years later for $4\\hspace{0.15em}200$.\n\n- Find the rate at which the car depreciates per year over\nthe 3 year period.<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ed3f0bc4-a558-44ca-b7a6-f08e22040280/images/ffe55127-eb46-4edf-aa5a-308ce1c35e47/02190c699d42d109e659d8b5742f5cdb828d8e79.svg)\n\n\n  Using the compound interest formula, we can solve for PV\n\n  $$\n  \\begin{aligned}\n  8\\hspace{0.15em}000 &= \\text{PV}\\bigg(1 + \\dfrac{3.3}{100\\times 12}\\bigg)^{12(5)} \\\\[8pt]\n  &\\hspace{0.3em}\\answer{\\approx 6\\hspace{0.15em}784.69} \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ed3f0bc4-a558-44ca-b7a6-f08e22040280/images/25c7d355-25fd-4bb5-b27b-9d118a9ae125/6f2b95ec07474eac9d47b28cc09e2eb63167e4c5.svg)\n\n\n  We can use the compound depreciation formula to solve for $r$\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\rule[-4.5mm]{0pt}{13mm}\\\\\n  4\\hspace{0.15em}200&= 5\\hspace{0.25em}000\\bigg(1 - \\dfrac{r}{100}\\bigg)^{3}  \\rule[-4.5mm]{0pt}{13mm}\\\\\n  &\\hspace{-0.5em}\\answer{r\\approx 5.65} \\rule[0mm]{0pt}{6mm}\\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 18',
    content:
      '$\\textbf{Give all answers for this question to 2 decimal places, unless otherwise stated.}$\nOn 1 January 2024, Emily invests $\\$600\\hspace{0.10em}000$ in a savings account which pays a nominal annual interest rate of 4.5%, compounded annually.\n\n- Determine the  amount of money that will be in the account after $12$ years.<span class="marks">[3]</span>  \n\nAfter these $12$ years, Emily is planning to retire and place the money she has saved into an annuity fund which pays a nominal annual interest rate of 3.5%, compounded monthly.\nEmily wants to withdraw money from this account at the end of each month.\n\n- \n  - Calculate the amount Emily can withdraw at the end of each month if she wants the money to last for $18$ years after her retirement.\n  - Find how many $\\textbf{complete months}$, counted from 1 January 2036, it will take for the balance of the fund to fall below $\\$500\\hspace{0.1em}000$.<span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- In $12$ years we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0da11a45-0df2-4c92-84b9-239870fa63dc/images/44bde01e-f282-486a-a489-d4f2ab70cef7/683a.JPEG)\n\n\n\n  $$\n  \\begin{align*}\n   \\tag*{\\textbf{(M1)(A1)}}\n  \\end{align*}\n  $$\n\n  Hence, using the finance solver on the GDC (or the compound interest formula), we obtain\n\n  $$\n  \\begin{align*}\n  \\text{FV} &= 600\\hspace{0.15em}000\\bigg(1 + \\dfrac{4.5}{100(1)}\\bigg)^{12(1)} \\\\[8pt]\n  &\\hspace{0.3em}\\tcbhighmath{= \\$1\\hspace{0.15em}017\\hspace{0.15em}528.86 \\, (2\\,\\text{d.p.})} \\hspace{3em} [\\text{by using G.D.C.}]\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- \n  - In $18$ years we have $216$ months. Hence, using the finance solver on the G.D.C., we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0da11a45-0df2-4c92-84b9-239870fa63dc/images/24e58f26-7e8d-4fbe-a70d-5282ffcf5870/683b.JPEG)\n\n\n\n    $$\n    \\begin{align*}\n     \\tag*{\\textbf{(A1)}}\n    \\end{align*}\n    $$\n\n    Therefore, Emily can withdraw $\\enskip\\tcbhighmath{6\\hspace{0.15em}356.11}\\ \\enskip$ each month.\n\n    $$\n    \\begin{align*}\n     \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - This time we need to calculate N, given that $\\text{FV}=-500\\hspace{0.15em}000$, thus, we get\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0da11a45-0df2-4c92-84b9-239870fa63dc/images/971f0121-99de-4d98-9675-3a6c158a1f4f/683c.JPEG)\n\n\n\n    $$\n    \\begin{align*}\n     \\tag*{\\textbf{(A1)}}\n    \\end{align*}\n    $$\n\n    Therefore, it takes more than $126.5$ months to fall below $\\mbox{500\\hspace{0.1em}000}$, so in total $\\tcbhighmath{\\text{127 months}}$.\n\n    $$\n    \\begin{align*}\n     \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 19',
    content:
      'Smith has saved $\\$5\\,000$ from working a part-time job and wants to\ninvest this money so that it grows over time. His bank offers a savings\naccount that pays an annual interest rate of $4.2\\%$, compounded\nquarterly.\n\n- Find how many years it will take for Smith\'s investment amount to\ndouble in value, rounding your answer to the nearest integer.\n<span class="marks">[3]</span>  \n\nSmith wants his money to grow faster than this first option. His wants\nto invest the money so that it will double in value in $5$ years. He\nconsiders an high-growth, higher-risk option, which pays an annual\ninterest of $r\\%$, compounding half-yearly.\n\n- Determine the value of $r$ required in this option, rounding your\nanswer to two decimal places. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- The compound interest formula is\n\n  $$\n  \\begin{aligned}\n  FV &= PV\\left(1+\\dfrac{r}{100k}\\right)^{kn} \\end{aligned}\n  $$\n\n  We\nhave $FV=2\\times 5000 = 10000,\\, PV=5000,\\, r=4.2,$ and $k=4$.\nSubstituting these values into the formula, we get\n\n  $$\n  \\begin{aligned}\n  10000 &= 5000\\left(1+\\dfrac{4.2}{100(4)} \\right)^{4n}\\\\[6pt]\n  &\\hspace{-0.4em}\\answer{\\text{n}= 17} \\qquad \\qquad [\\text{using GDC}]\\end{aligned}\n  $$\n\n- We have $FV=10000, \\,PV=5000,\\, k=2,$ and $n=5$.\nSubstituting these values into the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  10000 &= 5000\\left(1+\\dfrac{r}{100(2)} \\right)^{2(5)}\\\\[6pt]\n  2 &= \\left(1+\\dfrac{r}{200} \\right)^{10}\\\\[6pt]\n  \\sqrt[10]{2}&=1+\\dfrac{r}{200}\\\\[6pt]\n  \\sqrt[10]{2}-1&=\\dfrac{r}{200}\\\\[6pt]\n  (\\sqrt[10]{2}-1)\\times200&=r\\\\[6pt]\n  &\\hspace{-0.3em}\\answer{\\text{r}= 14.35 \\%}\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 20',
    content:
      'Greg has saved $2000$ British pounds (GBP) over the last six months. He\ndecided to deposit his savings in a bank which offers a nominal annual\ninterest rate of $\\text{\\(8\\)\\hspace{0.05em}\\%}$, compounded\nmonthly, for two years.\n\n- Calculate the total amount of interest Greg would earn over the two\nyears. Give your answer correct to two decimal places.\n<span class="marks">[3]</span>\n\n\nGreg would earn the same amount of interest, compounded\nsemi-annually, for two years if he deposits his savings in a second\nbank.\n\n- Calculate the nominal annual interest rate the second bank\noffers. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/fe610d27-a954-4e19-b5c0-7535e2b675b8/images/fcc1357b-4e66-4e93-8cbd-34948432cd76/d94b9efaa433da997063a9b0927befd8e7a68df2.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{5em} \\mathrm{FV} &= \\text{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 2000\\bigg(1 + \\dfrac{8}{100\\times12}\\bigg)^{12\\times 2} \\\\[12pt]\n  &= 2345.78 \\text{ GBP}\\end{aligned}\n  $$\n\n  Hence the total amount of interest earned is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} - \\text{PV} &= 2345.78 - 2000 \\hspace{2.2em} \\\\[6pt]\n  &\\answer{= 345.78 \\text{ GBP}}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/fe610d27-a954-4e19-b5c0-7535e2b675b8/images/4ba3785f-39ac-4776-83c7-b04c77097206/218c768ecef0bd0485a005a319e86a9adb263fd0.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.1em} 2345.78 &= 2000\\bigg(1 + \\dfrac{r}{100\\times2}\\bigg)^{2\\times 2} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{8.2em} \\answer{r \\approx 8.13\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 21',
    content:
      'On January 1st 2023, Virgil deposits 1500 Canadian dollars (CAD) into a savings account which pays a nominal annual interest rate of $4.6\\%$ compounded monthly. At the end of each month, Virgil deposits an extra CAD$\\,1\\,000$ into the savings account.\nAfter $k$ months, Virgil will have enough money to withdraw CAD$\\,25\\,000$.\n\n- Find the smallest possible value for $k$, given that $k$ is a whole number.<span class="marks">[4]</span>  \n\nAt this time, $k$ months, annual interest rates have improved. Virgil withdraws CAD$\\,25\\,000$ and re-invests the remaining money in the same account with the new nominal annual interest rate for 24 months, making no further deposits. After 24 months, Virgil has CAD$\\,800$ in the account.\n\n- Determine the new nominal annual interest rate.<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- The following table summarizes the information we have been given, to be used in the financial solver on the G.D.C. Note that Present Value (PV) and Payment (PMT) should be negative, and Future Value (FV) should be positive:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/000d745a-7168-4e23-9a92-1568e19ad9f2/images/a4115b9b-1c0f-4481-b2fb-a97b70f2d343/ai1057a.PNG)\n\n\n  Note that, although the closest whole number to $22.42$ is $22$, at this time Virgil will have less than CAD$\\,25\\,000$. Hence it is only after $23$ months that Virgil can withdraw CAD$\\,25\\,000$.\n  $\\tcbhighmath{\\text{The smallest possible value for $k$ is $23$.}}$\n- Using our table from part (a), but adjusting N to 23, we find that when $k=23$, Virgil has CAD $\\,25\\,634.34$ available:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/000d745a-7168-4e23-9a92-1568e19ad9f2/images/c4802576-38dc-49f2-9463-c73a3490481f/ai1057b.PNG)\n\n\n  Virgil is therefore re-investing CAD$\\,634.34$ for 24 months, making no payments. At this time he has CAD $\\,800$:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/000d745a-7168-4e23-9a92-1568e19ad9f2/images/94c5d024-b447-42ba-9778-e44bc8d2434c/ai1057c.PNG)\n\n\n  $\\tcbhighmath{\\text{The new nominal annual interest rate is approximately  $11.7\\,\\%$.}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 22',
    content:
      'Melinda has $\\$300\\hspace{0.15em}000$ in a private foundation. Each year\nshe donates $10\\hspace{0.05em}\\%$ of the money remaining in her private\nfoundation to charity.\n\n- Find the maximum number of years Melinda can donate to charity while\nkeeping at least $\\$100\\hspace{0.15em}000$ in the private\nfoundation. <span class="marks">[3]</span>\n\n\nBill invests $\\$400\\hspace{0.15em}000$ in a bank account that pays a\nnominal interest rate of $4$ %, compounded\nquarterly, for ten years.\n\n- Calculate the value of Bill\'s investment at the end of this\ntime. Give your answer correct to the nearest dollar.\n<span class="marks">[3]</span>  \n',
    markScheme:
      "\n- We can form an inequality using the compound interest formula, with a $\\textcolor{red}{\\text{minus}}$ sign instead of a plus sign, to show that Melinda's money is decreasing instead of increasing:\n\n  $$\n  \\begin{align*}\n  \\mathrm{FV} &\\leq \\mathrm{PV}\\bigg(1 \\textcolor{red}{-} \\dfrac{r}{100k}\\bigg)^{kn} \n  \\end{align*}\n  $$\n\n  We need to find the largest value $n$ so that the RHS is greater than or equal to the LHS. We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0e854986-7c8c-4bbb-8249-3257b097b50e/images/d5dbbadb-073a-4390-9be7-0b924338a98a/ai109a.PNG)\n\n\n  Hence we must solve the inequality\n\n  $$\n  \\begin{align*}\n  100\\,000 &\\leq 300\\,000\\bigg(1 - \\dfrac{10}{100}\\bigg)^{n} \\\\[6pt]\n  \\dfrac{1}{3} &\\leq 0.9^n\n  \\end{align*}\n  $$\n\n  Sketching the graphs of $y=\\dfrac{1}{3}$ and $y=0.9^x$ and finding the point of intersection, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0e854986-7c8c-4bbb-8249-3257b097b50e/images/dcc783a9-b923-433e-a2b4-3fdab031e4b6/ai109b.PNG)\n\n\n  Hence we have $n \\leq 10.427...$ and given that $n$ must be a whole number, the maximum number of years is $\\answer{10}$\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0e854986-7c8c-4bbb-8249-3257b097b50e/images/684d5665-68cb-494e-a248-9c8c0a434421/d87692941dc43b1f610dcca79c498cfb3a932d8a.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 400\\hspace{0.15em}000\\bigg(1 + \\dfrac{4}{100\\times4}\\bigg)^{4\\times10} \\\\[12pt]\n  &\\answer{\\approx \\$595\\hspace{0.15em}545} \\end{aligned}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 23',
    content:
      'Emily deposits $2000$ Australian dollars (AUD) into a bank account. The\nbank pays a nominal annual interest rate of\n$4$ %, compounded monthly.\n\n- Find the amount of money that Emily will have in her bank account\nafter $5$ years. Give your answer correct to two decimal places.\n<span class="marks">[3]</span>\n\n\nEmily will withdraw the money back from her bank account when the amount\nreaches $3000$ AUD.\n\n- Find the time, in full years, until Emily withdraws the\nmoney from her bank account. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/4b75c27c-e338-4085-9f67-b13e1181fa57/images/4d2d5769-bdf2-4027-9ec9-500f861e3e2c/adb2e5a5727d896793f414aff36c01c8cf4261d3.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\text{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 2000\\bigg(1 + \\dfrac{4}{100\\times12}\\bigg)^{12\\times 5} \\\\[12pt]\n  &\\answer{= 2441.99 \\text{ AUD}}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/4b75c27c-e338-4085-9f67-b13e1181fa57/images/f8ce68fe-0368-4f41-bf4a-b5187bff9977/07a5668b1bebdc2755dde33ca8b99bce2a25d25a.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.7em} 3000 &= 2000\\bigg(1 + \\dfrac{4}{100\\times12}\\bigg)^{12n} \\\\[8pt]\n  n &\\approx 10.2 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence Emily will withdraw the money from her bank account after\n$\\answer{11 \\text{ years}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 24',
    content:
      'In this question give all answers correct to two decimal places.\nStella receives a loan of\n€ $32\\hspace{0.15em}000$ for her flower shop\nbusiness at an interest rate $5.29$ % per year,\ncompounded monthly. She agrees to pay back the loan in $60$ equal\ninstallments, made at the end of each month over the next five years.\n\n- Calculate the amount of monthly installment. <span class="marks">[3]</span>\n\n\nFour years after she starts repaying the loan, Stella decides to repay\nthe rest in a final single installment.\n\n- Calculate the amount owing at the end of the four years.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Using the TVM Solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/730a0795-b064-4d40-87e1-75260e39cfb5/images/eae0fbb0-8651-4293-99d0-b4b25ed22395/922da718c31cffb68ea64d109ed894ad9969fd5d.svg)\n\n\n  Hence the amount of monthly installment is\n$\\answer{\\text{\\euro\\hspace{0.05em}}608.14}$\n- Using the TVM Solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/730a0795-b064-4d40-87e1-75260e39cfb5/images/9a8fd848-c4e4-4abb-9f7a-a3dc18e51383/15a77a22e62a4168556f61f229f11cc2cafcc512.svg)\n\n\n  Hence the amount still owing at the end of the four years is\n$\\answer{\\text{\\euro\\hspace{0.05em}}7092.82}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 25',
    content:
      'In this question give all answers correct to the nearest whole\nnumber.\nMichelle takes out a loan of $\\$12\\hspace{0.15em}000$. The unpaid\nbalance on the loan has an interest rate of\n$4.3$ % per year, compounded annually.\n\n- The loan is to be repaid in payments of $\\$1500$ made at the end of\neach year.\n  \n  - Find the number of years it will take to repay the loan.\n  - Calculate the total amount that has been paid in amortising\nthe loan.<span class="marks">[3]</span>\n\n\n- The loan is to be amortised over $5$ years.\n  \n  - Find the annual payment made at the end of each year.\n  - Calculate the total amount that has been paid in amortising\nthe loan.<span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- \n  - Using the TVM Solver on G.D.C., we have\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9d052a3e-1245-4218-997d-d2de3d78ee36/images/0fdb1889-66b0-42fb-a16f-286ab87519bd/ae1bea79bbe5db1ff5e9a55b63da4d2955868892.svg)\n\n\n  Hence it will take\n$\\answer{10 \\text{ years}}$\nto repay the loan.\n  \n  - The total amount that has been paid in amortising the\nloan is\n\n    $$\n    \\begin{aligned}\n    (\\$1500)(10.01) = \\hspace{0.525em}\\answer{\\$15\\hspace{0.15em}015}\\end{aligned}\n    $$\n\n\n- \n  - Using the TVM Solver on G.D.C., we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9d052a3e-1245-4218-997d-d2de3d78ee36/images/6e123131-9d9d-42d8-b45c-ac6cd1884c61/d6742ce41668dcd87c3bfb663211ce279059d238.svg)\n\n\n    Hence the annual payment is\n$\\answer{2718}$\n  - The total amount that has been paid in amortising the loan is\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.3em} (\\$2718.28)(5) &= \\$13\\hspace{0.15em}591.4 \\\\[6pt] \n    &\\answer{\\approx \\$13\\hspace{0.15em}591}\\end{aligned}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 26',
    content:
      'Julia wants to buy a house that requires a deposit of\n$74\\hspace{0.15em}000$ Australian dollars (AUD).\nJulia is going to invest an amount of AUD in an account that pays a\nnominal annual interest rate of $5.5$ %,\ncompounded monthly.\n\n- Find the amount of AUD Julia needs to invest to reach\n$74\\hspace{0.15em}000$ AUD after $8$ years. Give your answer correct\nto the nearest dollar. <span class="marks">[3]</span>\n\n\nJulia\'s parents offer to add $5000$ AUD to her initial investment from\npart (a), however, only if she invests her money in a more reliable bank\nthat pays a nominal annual interest rate only of\n$3.5$ %, compounded quarterly.\n\n- Find the number of years it would take Julia to save the\n$74\\hspace{0.15em}000$ AUD if she accepts her parents money and\nfollows their advice. Give your answer correct to   the nearest\nyear. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/520ffad3-690b-4fb3-890d-b50f4dc5c132/images/ac73771e-7dfd-45ca-ba48-14e31549496d/3787235f52ce0a9532d1fb499061fa26f27dacb9.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.8em} \\mathrm{FV} &= \\text{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  74\\hspace{0.15em}000 &= \\text{PV}\\bigg(1 + \\dfrac{5.5}{100\\times12}\\bigg)^{12\\times 8} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{9.1em} \\answer{\\text{PV} \\approx 47\\hspace{0.15em}707 \\text{ AUD}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/520ffad3-690b-4fb3-890d-b50f4dc5c132/images/beabb7cc-1074-4f94-aeca-f00c6745c471/c0f56a142d7776c6858b94a3b97c9a56ff5d69a7.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.6em} 74\\hspace{0.15em}000 &= 52\\hspace{0.15em}707\\bigg(1 + \\dfrac{3.5}{100\\times4}\\bigg)^{4n} \\\\[8pt]\n  n &\\approx 9.74 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence it would take Julia\n$\\answer{10 \\text{ years}}$\nto save the $74\\hspace{0.15em}000$ AUD.\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 28',
    content:
      'Phil\'s phone shop sells Azura smartphones for $\\$1\\hspace{0.05em}499$\nand Bellson smartphones for $\\$850$. It is expected that a Bellson\nsmartphone will depreciate at a rate of $20\\hspace{0.05em}\\%$ per\nyear.\nAfter 2 years, an Azura smartphone is worth approximately $\\$735$.\n\n- Show that the expected annual depreciation rate of an Azura\nsmartphone is 30%. <span class="marks">[2]</span>  \n\nAn Azura smartphone and a Bellson smartphone will have the same value\n$n$ years after they were purchased.\n\n- Find the value of $n$. <span class="marks">[2]</span>\n\n- Comment on the validity of your answer to part (b).\n<span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/91affd3c-63e6-4666-a2b2-3b5817344ee4/images/c7b87679-af3f-429d-b1b3-14be28570a01/b2a5ec580f342612071c0ff847247c8492db8bc3.svg)\n\n\n  Hence, using the compound depreciation formula, we get\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\\\[5pt]\n  735 &= 1\\hspace{0.05em}499\\hspace{0.05em}\\bigg(1 - \\dfrac{r}{100}\\bigg)^{2}  \\\\[12pt]\n  &\\hspace{-0.5em}\\answer{r \\approx 30\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  \\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/91affd3c-63e6-4666-a2b2-3b5817344ee4/images/f6cea8f8-f2ea-463b-83ab-ec4b6cf569ce/a5751dd1907b71c5a82464012ef3bda35a63fb6f.svg)\n\n\n  Hence, using the compound depreciation formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV}_{\\text{A}} &= \\mathrm{FV}_{\\text{B}} \\\\[12pt]\n  1\\hspace{0.05em}499\\hspace{0.05em}\\bigg(1 - \\dfrac{30}{100}\\bigg)^{n} &= 850\\hspace{0.05em}\\bigg(1 - \\dfrac{20}{100}\\bigg)^{n} \\hspace{0.9em} \\\\[12pt]\n  &\\hspace{-0.5em}\\answer{n \\approx 4.25} \\hspace{3.5em} [\\text{by using G.D.C.}]\\\\\n  \\end{aligned}\n  $$\n\n- For example,\n  The calculation assumes that both smartphones will depreciate at a constant rate for over 4 years. This is unlikely given that new model smartphones are released regularly, and when new model smartphones are released, older phones are likely to depreciate in value more quickly.\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 29',
    content:
      'Bruce goes into a car dealership to purchase a new vehicle. The one he\nwants to buy costs $\\$16\\hspace{0.15em}000$, however he doesn\'t have\nthat much money in his bank. The salesman offers him a financing option\nof a $30$ % deposit followed by $12$ monthly\npayments of $\\$1150$.\n\n- Find the amount of the deposit. <span class="marks">[1]</span>\n\n- Calculate the total cost of the loan under this financing option.\n<span class="marks">[2]</span>\n\n\nBruce\'s father generously offers him an interest free loan of\n$\\$16\\hspace{0.15em}000$ to buy the car to avoid the expensive loan\nrepayments. They agree that Bruce will repay the loan by paying his\nfather $\\$\\hspace{0.05em}x$ in the first month and $\\$\\hspace{0.05em}y$\nevery following month until the $\\$16\\hspace{0.15em}000$ is repaid.\nThe total amount Bruce\'s father receives after $12$ months is $\\$5200$.\nThis can be expressed by the equation $x + 11y = 5200$. The total amount\nthat Bruce\'s father receives after $24$ months is\n$\\$10\\hspace{0.15em}600$.\n\n- Write down a second equation involving $x$ and $y$.\n<span class="marks">[1]</span>\n\n- Determine the value of $x$ and the value of $y$.\n<span class="marks">[2]</span>\n\n- Calculate the number of months it will take Bruce\'s father\nto receive\nthe $\\$16\\hspace{0.15em}000$. <span class="marks">[3]</span>\n\n\nBruce decides to buy a cheaper car for $\\$12\\hspace{0.15em}000$ and\ninvest the remaining $\\$4000$. He is considering two investment options\nover four years.\nOption A: Compound interest at an annual rate of\n$6.5$ %.\nOption B: Compound interest at a nominal annual rate of\n$6$ %, compounded monthly.\nExpress each answer in part (f) to the nearest dollar.\n\n- Calculate the value of each investment option after four\nyears.\n  \n  - Option A.\n  - Option B. <span class="marks">[5]</span>\n\n\n',
    markScheme:
      "\n- The amount of the deposit is\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.4em} \\mathrm{PV} &= 16\\hspace{0.15em}000\\times0.3 \\\\[6pt]\n  &\\answer{= \\$4800}\\end{aligned}\n  $$\n\n- The total cost of the loan is\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.7em} \\mathrm{FV} &= 4800 + 1150\\times12 \\\\[6pt]\n  &\\answer{= \\$18\\hspace{0.15em}600}\\end{aligned}\n  $$\n\n- $\\answer{x + 23y = 10\\hspace{0.15em}600}$\n- We have\n\n  $$\n  \\begin{aligned}\n  x+11y &= 5200 \\qref{(1)} \\\\[6pt]\n  x + 23y &= 10\\hspace{0.15em}600 \\hspace{3em} \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, solving the system of linear equations $(1)$ and $(2)$, we\nget\n\n  $$\n  \n  \\hspace{8.9em} \\begin{array}{rl}\n  &\\answer{x = 250} \\\\[6pt]\n  &\\answer{y = 450}\n  \\end{array} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.4em} 250 + 450n &= 16\\hspace{0.15em}000 \\\\[8pt]\n  n &= 35 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence it will take Bruce's father\n$\\answer{36 \\text{ months}}$\nto receive the $\\$16\\hspace{0.15em}000$.\n- \n  - We have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/109f5bcf-7e24-48da-933e-bf9abe847c29/images/83b5567c-360a-4827-bcf6-7981fa2e12e1/f5c80495cb4b6289d9e252ee117b474ac0267df8.svg)\n\n\n    Hence, using the compound interest formula, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{4.1em} \\mathrm{FV} &= \\text{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n    &= 4000\\hspace{0.05em}\\bigg(1 + \\dfrac{6.5}{100\\times1}\\bigg)^{1\\times 4}  \\\\[12pt]\n    &\\answer{\\approx \\$5146}\\end{aligned}\n    $$\n\n  - We have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/109f5bcf-7e24-48da-933e-bf9abe847c29/images/2a954c17-2361-4029-9e42-e5a49752668c/94b36ff454d13c51eba6ab9f5086d95bd5a04ffa.svg)\n\n\n    Hence, using the compound interest formula, we obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{5em} \\mathrm{FV} &= 4000\\bigg(1 + \\dfrac{6}{100\\times12}\\bigg)^{12\\times 4} \\\\[12pt]\n    &\\answer{\\approx \\$5082}\\end{aligned}\n    $$\n\n\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 30',
    content:
      'Tom takes out a loan of $\\$80\\hspace{0.15em}000$ to purchase some new\nmachinery for his farming business. He agrees to pay the bank $\\$1200$\nat the end of every month to amortise the loan. Interest accumulates on\nthe balance at a rate of $5.65$ % per year,\ncompounded monthly.\n\n- Find the number of years and months it takes to pay back the loan.\n<span class="marks">[2]</span>\n\n- Calculate the total amount that Tom pays in amortising the loan.\n<span class="marks">[1]</span>\n\n- Tom decides to increase the monthly payment to $\\$1500$. How much\ninterest will Tom save in comparison to the former payment\nschedule.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the TVM Solver on G.D.C., we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a0f48c37-2dae-4c19-8762-19e949fe1e1d/images/5a1f2454-4e3f-4e09-8d4c-e92eb06c8b9d/cf8f60a9fc3e95ab43aa6633d52580e8a0ade9f8.svg)\n\n\n  Converting a $N$ value of $80.2$ into years and months, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} \\dfrac{80.2}{12} &\\approx 6.7 \\hspace{2.6em} \\\\\n  \\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  80.2 - (6)(12) = 8.2 \\hspace{3.1em} \\\\\n  \\end{aligned}\n  $$\n\n  Hence it with\ntake\n$\\answer{\\text{\\(6\\) years and \\(9\\) months}}$\nto pay back the loan.\n- The total amount Tom pays in amortising the loan is\n\n  $$\n  \\begin{aligned}\n  (\\$1200)(80.2) \\enskip\\answer{= \\$96\\hspace{0.15em}240}\\end{aligned}\n  $$\n\n- Using the TVM Solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a0f48c37-2dae-4c19-8762-19e949fe1e1d/images/15f99082-b219-4589-9492-facf1c3118c5/eeba3d0ac9bd4ad6429d52e528bf2c1dd2e9674f.svg)\n\n\n  Tom will save $(1200)(80.2) - (1500)(61.56) =$\n$\\answer{3\\hspace{0.15em}900.}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 31',
    content:
      'Nathan receives a lump sum inheritance of $\\$ 55\\,000$ and invests the\nmoney into a savings account with an annual interest rate of $7.5 \\%$,\ncompounded quarterly.\n\n- Calculate the value of Nathan\'s investment after 5 years, rounding\nyour answer to the nearest dollar. <span class="marks">[3]</span>  \n\nAfter $m$ months, the amount in the savings account has increased to\nmore than $\\$70\\,000$.\n\n- Find the minimum value of $m$, where $m\\in N$.<span class="marks">[4]</span>  \n\nNathan is saving to purchase a property. The price of the property is\n$\\$150\\,000$. Nathan puts down a $15\\%$ deposit and takes out a loan for\nthe remaining amount.\n\n- Write down the loan amount.<span class="marks">[1]</span>  \n\nThe loan duration is for eight years, compounded monthly, with equal\nmonthly payments of $\\$1500$ made by Nathan at the end of each month.\n\n- For this loan, find\n  \n  - the amount of interest paid by Nathan over the life of the loan.\n  - the annual interest rate of the loan, correct to two decimal\nplaces. <span class="marks">[5]</span>\n\n\n\nAfter $5$ years of paying this loan, Nathan decides to pay the\noutstanding loan amount in one final payment.\n\n- Find the amount of the final payment after $5$ years, rounding your\nanswer to the nearest dollar. <span class="marks">[3]</span>\n\n- Find the amount Nathan saved by making this final payment after $5$\nyears, rounding your answer to the nearest dollar.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The compound interest formula is\n\n  $$\n  FV = PV\\left(1+\\dfrac{r}{100k}\\right)^{kn}\n  \n  $$\n\n  We have\n$PV=55000,\\, r=7.5,\\, k=4,$ and $n=5$.\nSubstituting these values into the formula, we get\n\n  $$\n  \\begin{aligned}\n  FV &= 55000\\left(1+\\dfrac{7.5}{100(4)} \\right)^{4(5)}\\\\[6pt]\n  &\\hspace{0.5em}\\answer{= \\$ 79\\,747}\\end{aligned}\n  $$\n\n- We have $FV=70000,\\,PV=55000,\\, r=7.5,$ and $k=4$.\nSubstituting these values into the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  70000 &= 55000\\left(1+\\dfrac{7.5}{100(4)} \\right)^{4(n)}\\\\[6pt]\n  &\\text{n}\\approx 3.25 \\text{ years}\\hspace{2em}[\\text{using GDC}]\\end{aligned}\n  $$\n\n  Converting to months, we get\n\n  $$\n  \\answer{m=12\\times 3.25 = 39 \\text{ months} }\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{Property price}&= 150\\,000 \\\\[6pt]\n  \\text{Deposit} &= 15\\% \\\\[6pt]\n  \\text{Loan amount} &= 150\\,000 - (0.15\\times 150\\,000)\\\\[6pt]\n  &\\hspace{0.5em}\\answer{= \\$ 127\\,500}\\end{aligned}\n  $$\n\n- \n  - For $8$ years, we have\n\n    $$\n    \\begin{aligned}\n    \\text{Monthly payment}&= 1500 \\\\[6pt]\n    \\text{Total payments made}&= 1500\\times 8 \\times 12 \\\\[6pt]\n    &= \\$144 \\, 000\\\\[6pt]\n    \\text{Interest paid} &= 144\\,000 - 127\\,500\\\\[6pt]\n    &\\hspace{0.5em}\\answer{= \\$ 16\\,500}\\end{aligned}\n    $$\n\n  - Using the TVM Solver, we get\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ae5cf580-ab59-40fb-8ced-4d26e74bd0d2/images/4c35fbee-049b-4253-9105-1716cb2e9ec9/f86a2954a9febbb42bfade9d41e506828f7bff13.svg)\n\n\n    The annual interest rate of the loan is\n$\\answer{3.08 \\%}$\n\n- Using the TVM Solver, we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ae5cf580-ab59-40fb-8ced-4d26e74bd0d2/images/1a82f790-922b-439e-b454-6c453f202291/405e9952db0082ca8955bbdaa92e691e8b526e72.svg)\n\n\n  The final payment after $5$ years is\n$\\answer{51\\,533}$\n- We can find the amount of interest Nathan saves by finding the\ndifference between the total amount paid without the $5$ year final\npayment, and the total amount with making the $5$ year final\npayment, as follows\n\n  $$\n  \\begin{aligned}\n  \\text{Amount saved} &= (127\\,500+ 16\\,500)-[(5\\times 12 \\times 1500)+51\\,533]\\\\[8pt]\n  &\\hspace{0.5em}\\answer{=\\$2\\,467}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '19',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 32',
    content:
      'Ray takes out a loan of $\\$200\\hspace{0.15em}000$ to purchase a house.\nHe agrees to pay the bank $\\$1250$ at the end of every month to amortise\nthe loan, and interest accumulates on the balance at a rate of\n$3.79$ % per year, compounded\nmonthly.\n\n- Find the number of years and months it takes to pay back the loan.\n<span class="marks">[2]</span>\n\n- Calculate the total amount that Ray has paid in amortising the loan.\n<span class="marks">[2]</span>\n\n- Ray decides to increase the monthly payment to $\\$1500$. Justify\nthis decision.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the TVM Solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/e291cbb4-564b-4df7-a599-0f99f79d6045/images/895eb20c-1fab-4165-bb58-f3302cf41dd4/807cb3b24494abc00d35532f20bfa6dbb18a7335.svg)\n\n\n  We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} \\dfrac{223.21}{12} &\\approx 18.6 \\hspace{2.6em} \\\\\n  \\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  223.21 - (18)(12) = 7.21 \\hspace{3.1em} \\\\\n  \\end{aligned}\n  $$\n\n  Hence it\ntakes\n$\\answer{\\text{\\(18\\) years and \\(8\\) months}}$\nto pay back the loan.\n- The total amount Ray has paid in amortising the loan is\n\n  $$\n  \\begin{aligned}\n  (\\$1250)(223.21) &= \\$279\\hspace{0.15em}012.5 \\\\[6pt]\n  &\\answer{\\approx \\$279\\hspace{0.15em}000}\\end{aligned}\n  $$\n\n- Using the TVM Solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/e291cbb4-564b-4df7-a599-0f99f79d6045/images/9c1fca97-eada-4f71-8955-ea6a59916b04/4d3eeb80a810b337ca1f8591a874142415cbd386.svg)\n\n\n  Ray will save $(1250)(223.21) - (1500)(173.35) = 18\\hspace{0.15em}987.5$ and repay the~loan in $14$ years and $6$ months.\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 33',
    content:
      'In this question, give all answers correct to the nearest whole\nnumber.\nAnn is considering investing $\\$85\\hspace{0.15em}000$ into a term\ndeposit in one of two banks. The first bank offers an annual interest\nrate of $3$ %, compounding monthly. The second\nbank offers a fixed payment amount of $\\$250$ per month.\n\n- Calculate:\n  \n  - the amount that would be in the account in the first bank at the\nend of the first year;\n  - the amount that would be in the account in the second bank at\nthe end of the first year. <span class="marks">[4]</span>\n\n\n- Write down an expression for:\n  \n  - the amount in the account in the first bank at the end of the\n$n$th year;\n  - the amount in the account in the second bank at the end of the\n$n$th year. <span class="marks">[4]</span>\n\n\n- Calculate the year in which the amount in the first bank account\nbecomes\ngreater than the amount in the second bank. <span class="marks">[2]</span>\n\n- Calculate:\n  \n  - the interest that Ann would earn if she invested in the first\nbank for $10$ years;\n  - the interest that Ann would earn if she invested in the second\nbank for $10$ years. <span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- \n  - We have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/232e357c-6acd-47a0-a1f4-5603fff97359/images/0a22ca91-3767-4d3c-9a6e-5f078b8a8a55/0c690c84985cd8557d52ccd31a650fd8f2724611.svg)\n\n\n    Using the compound interest formula, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{3em} \\mathrm{FV} &= \\text{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[4pt]\n    &= 85\\hspace{0.15em}000\\bigg(1 + \\dfrac{3}{100\\times 12}\\bigg)^{12\\times 1} \\\\[12pt]\n    &\\answer{\\approx \\,87\\hspace{0.15em}585 }\\end{aligned}\n    $$\n\n  - We have\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.8em} \\mathrm{FV} &= 85\\hspace{0.15em}000 + 250\\times12 \\hspace{2em} \\\\[12pt]\n    &\\answer{=\\, 88\\hspace{0.15em}000 }\\end{aligned}\n    $$\n\n\n- \n  - We have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/232e357c-6acd-47a0-a1f4-5603fff97359/images/690721cf-3cef-404c-a984-8b5e0caac6b6/591518dd74541a1ad697223c79b663df51d02954.svg)\n\n\n    Using the compound interest formula, we obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{3em} \\mathrm{FV} &= 85\\hspace{0.15em}000\\bigg(1 + \\dfrac{3}{100\\times 12}\\bigg)^{12\\times n} \\\\[8pt]\n    &\\hspace{0.525em}\\answer{=85\\hspace{0.15em}000(1 + 0.0025)^{12n}} \\hspace{0.35em} \\qref{(1)}\\end{aligned}\n    $$\n\n  - We have\n\n    $$\n    \\begin{aligned}\n    \\mathrm{FV} &= 85\\hspace{0.15em}000 + 250(12)n \\\\[8pt]\n    &\\hspace{0.525em}\\answer{=85\\hspace{0.15em}000 + 3\\hspace{0.15em}000n} \\hspace{0.9em} \\qref{(2)}\\end{aligned}\n    $$\n\n\n- Solving the inequality $(1) > (2)$ for $n$, we find\n\n  $$\n  \\begin{aligned}\n  85\\hspace{0.15em}000\\hspace{0.05em}(1 + 0.0025)^{12n} &> 85\\hspace{0.15em}000 + 3000n \\hspace{1.2em} \\\\[6pt]\n  85\\hspace{0.05em}(1 + 0.0025)^{12n} &> 85+3n \\\\[6pt]\n  n &> 10.65 \\hspace{3em} [\\text{using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence\nthis will happen in\n$\\answer{11\\text{th year}}$\n- \n  - Substituting $n=10$ into formula $(1)$, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{4em} \\mathrm{FV} &= 85\\hspace{0.15em}000\\hspace{0.05em}(1 + 0.0025)^{12(10)} \\\\[6pt]\n    &\\approx \\, \\$\\,114\\hspace{0.15em}695\\end{aligned}\n    $$\n\n    Hence the\namount of interest earned in the first bank is\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.4em} \\mathrm{FV} - \\text{PV} &= 114\\hspace{0.15em}695 - 85\\hspace{0.15em}000 \\\\[6pt]\n    &\\answer{=\\, 29\\hspace{0.15em}695}\\end{aligned}\n    $$\n\n  - Substituting $n=10$ into formula $(2)$, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.9em} \\mathrm{FV} &= 85\\hspace{0.15em}000 + 3000(10) \\\\[6pt]\n    &=\\, \\$\\,115\\hspace{0.15em}000\\end{aligned}\n    $$\n\n    Hence the amount\nof interest earned in the second bank is\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.1em} \\mathrm{FV} - \\text{PV} &= 115\\hspace{0.15em}000 - 85\\hspace{0.15em}000 \\\\[6pt]\n    &\\answer{=\\$\\, 30\\hspace{0.15em}000 }\\end{aligned}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 34',
    content:
      'Lily and Eva both receive $50\\hspace{0.15em}000$ Australian dollars\n(AUD) on their $18$th birthday. Lily deposits her $50\\hspace{0.15em}000$\nAUD into a bank account. The bank pays an annual interest rate of\n$5$ %, compounded yearly. Eva invests her\n$50\\hspace{0.15em}000$ AUD into a high-yield mutual fund that returns a\nfixed amount of $3000$ AUD per year.\n\n- Calculate:\n  \n  - the amount in Lily\'s bank account at the end of the first year;\n  - the total amount of Eva\'s funds at the end of the first year.\n<span class="marks">[2]</span>\n\n\n- Write down an expression for:\n  \n  - the amount in Lily\'s bank account at the end of the $n$th year;\n  - the total amount of Eva\'s funds at the end of the $n$th year.\n<span class="marks">[4]</span>\n\n\n- Calculate the year in which the amount in Lily\'s bank account\nbecomes\ngreater than the amount in Eva\'s fund. <span class="marks">[2]</span>\n\n- Calculate:\n  \n  - the interest amount that Lily earns if invested for $12$ years,\ngiving your answer correct to two decimal places;\n  - the amount of funds that Eva earns for her investment if\ninvested for $12$ years. <span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- \n  - We have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/cd45bbd6-5df5-41f8-b879-de3bf727d371/images/c9512c05-b8bf-433d-8dc0-f6aea96b77cb/328a5b6ca0a70c17db6ec544ec351e070664f88c.svg)\n\n\n    Hence, using the compound interest formula, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{3em} \\mathrm{FV} &= \\text{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[4pt]\n    &= 50\\hspace{0.15em}000\\bigg(1 + \\dfrac{5}{100\\times1}\\bigg)^{1\\times 1} \\\\[12pt]\n    &\\answer{= 52\\hspace{0.15em}500 \\text{ AUD}}\\end{aligned}\n    $$\n\n  - We have\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.8em} \\mathrm{FV} &= 50\\hspace{0.15em}000 + 3000\\times1 \\hspace{2em} \\\\[12pt]\n    &\\answer{= 53\\hspace{0.15em}000 \\text{ AUD}}\\end{aligned}\n    $$\n\n\n- \n  - We have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/cd45bbd6-5df5-41f8-b879-de3bf727d371/images/a7e6da9b-e991-4ce3-aa6c-8869aadd733a/b18073c0cd76ad6f2055e24c813e9a92346b6b01.svg)\n\n\n    Hence, using the compound interest formula, we obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{3em} \\mathrm{FV} &= 50\\hspace{0.15em}000\\bigg(1 + \\dfrac{5}{100\\times1}\\bigg)^{1\\times n} \\\\[6pt]\n    &= \\hspace{0.525em}\\answer{50\\hspace{0.15em}000\\hspace{0.05em}(1 + 0.05)^n} \\hspace{0.35em} \\qref{(1)}\\end{aligned}\n    $$\n\n  - We have\n\n    $$\n    \\begin{aligned}\n    \\mathrm{FV} = \\hspace{0.525em}\\answer{50\\hspace{0.15em}000 + 3000n} \\hspace{0.9em} \\qref{(2)}\\end{aligned}\n    $$\n\n\n- Solving the inequality $(1) > (2)$ for $n$, we find\n\n  $$\n  \\begin{aligned}\n  50\\hspace{0.15em}000\\hspace{0.05em}(1 + 0.05)^n &> 50\\hspace{0.15em}000 + 3000n \\hspace{1.2em} \\\\[6pt]\n  50\\hspace{0.05em}(1 + 0.05)^n &> 50+3n \\\\[6pt]\n  n &> 8.20\\end{aligned}\n  $$\n\n  Hence this will happen in\n$\\answer{9\\text{th year}}$\n- \n  - Substituting $n=12$ in the formula $(1)$, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{4em} \\mathrm{FV} &= 50\\hspace{0.15em}000\\hspace{0.05em}(1 + 0.05)^{12} \\\\[6pt]\n    &= 89\\hspace{0.15em}792.82 \\text{ AUD}\\end{aligned}\n    $$\n\n    Hence the\namount of interest earned is\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.4em} \\mathrm{FV} - \\text{PV} &= 89\\hspace{0.15em}792.82 - 50\\hspace{0.15em}000 \\\\[6pt]\n    &\\answer{= 39\\hspace{0.15em}792.82 \\text{ AUD}}\\end{aligned}\n    $$\n\n  - Substituting $n=12$ in the formula $(2)$, we obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.9em} \\mathrm{FV} &= 50\\hspace{0.15em}000 + 3000(12) \\\\[6pt]\n    &= 86\\hspace{0.15em}000 \\text{ AUD}\\end{aligned}\n    $$\n\n    Hence the\namount of funds earned is\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.1em} \\mathrm{FV} - \\text{PV} &= 86\\hspace{0.15em}000 - 50\\hspace{0.15em}000 \\\\[6pt]\n    &\\answer{= 36\\hspace{0.15em}000 \\text{ AUD}}\\end{aligned}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'The diagram below shows a straight line $L_1$ which passes through\nA$(0,-2)$ and B$(8,0)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/47b65cc9-515d-4eb0-ae20-be61fd47f030/images/e476ece8-ad04-4e3b-8740-1be6a35203d6/dd225af0bca38352f0853ac9a9eb9c1cd3829f36.svg)\n\n\n\n- Write down the coordinates of the midpoint of line segment [AB].\n<span class="marks">[2]</span>\n\n\nAnother line, $L_2$ , intersects the $y$-axis at\nC$(0,3)$ and is parallel to $L_1$.\n\n- Find the gradient of $L_2$. <span class="marks">[2]</span>\n\n- Find the equation of $L_2$, giving your answer in the form\n$y = mx+c$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- $\\answer{(4,-1)}$\n- The gradient of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{12.2em} m_{L_2} &= m_{L_1}  \\hspace{3em} [\\text{since }L_2 \\parallel L_1] \\\\[6pt]\n  &= \\dfrac{0-(-2)}{8-0} \\hspace{3em} [\\text{by gradient formula}] \\\\[8pt]\n  &\\answer{= 0.25}\\end{aligned}\n  $$\n\n- Using the point-gradient formula with C$(0,3)$ and $m = 0.25$, we\nget\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\\\[6pt]\n  y - 3 &= 0.25\\hspace{0.05em}(x-0) \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{1.3em} \\answer{y = 0.25x + 3}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 2',
    content:
      'A small town is planning the construction of a new road. The new road will pass through the point A$(0,5)$ and will be perpendicular to the road connecting the points B$(3,0)$ and C$(6,6)$. This information is shown in the following diagram.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b30beb64-0ecd-4246-8108-6275a6e4a3b6/images/8ae74cd9-ad4b-4f19-bde8-a50bf3a19b39/55d55a043dfcb136022e8a71a28efdbe577c0832.svg)\n\n\n\n- Find the gradient of the line through points B and C. <span class="marks">[2]</span>\n\n- Hence, state the gradient of the line through points A and D. <span class="marks">[1]</span>\n\n- Find the equation of the line through A and D. Give your answer in the form $y=mx+c$.<span class="marks">[2]</span>\n\n- Point D lies on the $x$-axis. Find the coordinates of point D.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the gradient formula, we get\n\n  $$\n  \\begin{aligned}\n  m_{\\mathrm{BC}} &= \\dfrac{6-0}{6-3} \\\\[12pt]\n  &\\hspace{-2.2em}\\tcbhighmath{m_{\\mathrm{BC}} = 2}\\end{aligned}\n  $$\n\n- Since A and D lie on a perpendicular line to the line through B and\nC we get\n\n  $$\n  \\begin{aligned}\n  m_{\\mathrm{AD}} &= -\\dfrac{1}{m_{\\mathrm{BC}}} \\\\[12pt]\n  &\\hspace{-2.25em}\\tcbhighmath{ m_{\\mathrm{AD}} = -\\dfrac{1}{2}}\\end{aligned}\n  $$\n\n- The $y$-intercept of the line through points A and D is $(0,5)$, therefore we have $c = 5$. Using the gradient-intercept formula with $c = 5$ and $m=-\\dfrac{1}{2}$, we get\n$m=-\\dfrac{1}{2}$, we get\n\n  $$\n  \\begin{aligned}\n  &\\hspace{-0.5em}\\tcbhighmath{y = -\\dfrac{1}{2}x + 5}\\end{aligned}\n  $$\n\n- As point D lies on the $x$-axis, it has a $y$-coordinate of $0$. Using the solution from part (c)  and substituting in $y = 0$, we have\n\n  $$\n  \\begin{aligned}\n  0 &= -\\dfrac{1}{2}x + 5 \\\\[12pt]\n  \\dfrac{1}{2}x &= 5 \\\\[12pt]\n  x &= 10\\end{aligned}\n  $$\n\n  Therefore, point D has coordinates\n$\\answer{(10,0)}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 3',
    content:
      'The straight line, $L_1$, has the equation $y = \\dfrac{1}{3}x-5$.\n\n- Write down the $y$-intercept of $L_1$. <span class="marks">[1]</span>\n\n- Write down the gradient of $L_1$. <span class="marks">[1]</span>\n\n\nThe line $L_2$ is perpendicular to $L_1$ and passes through the point\nA$(2,4)$.\n\n- Find the gradient of $L_2$. <span class="marks">[1]</span>\n\n- Find the equation of $L_2$, giving your answer in the form\n$ax + by + d = 0$,\nwhere $a,b,d \\in \\mathbb{Z}$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{\\mathrm{B}(0,-5)}$\n- $\\answer{m_{L_1} = 1/3}$\n- The gradient of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.8em} m_{L_2} &= -\\dfrac{1}{m_{L_1}} \\hspace{3em} [\\text{since }L_2 \\perp L_1] \\\\[6pt]\n  &= -\\dfrac{1}{1/3} \\\\[10pt]\n  &\\answer{= -3}\\end{aligned}\n  $$\n\n- Using the point-gradient formula with A$(2,4)$ and $m = -3$, we find\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\\\[6pt]\n  y - 4 &= -3(x-2) \\\\[6pt]\n  y - 4 &= -3x+6 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{3x + y - 10 = 0} \\hspace{6.3em}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 4',
    content:
      'The equation of a line $L_1$ is $y = 0.5x + p$. The point A$(2,-1)$ lies\non $L_1$.\n\n- Find the value of $p$. <span class="marks">[2]</span>\n\n\nA second line, $L_2$ , is perpendicular to $L_1$\nand intersects $L_1$ at point A.\n\n- Find the gradient of $L_2$. <span class="marks">[1]</span>\n\n- Find the equation of $L_2$. Give your answer in the form\n$y = mx+c$. <span class="marks">[2]</span>\n\n- Write your answer to part (c) in the form\n$ax + by + d = 0$, where $a, b, d \\in \\mathbb{Z}$.<span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Substituting $x = 2$ and $y = -1$ in the equation of $L_1$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.2em}  -1 = 0.5(2) + p \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{p = -2}\n  $$\n\n- The gradient of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.8em} m_{L_2} &= -\\dfrac{1}{m_{L_1}} \\hspace{3em} [\\text{since }L_2 \\perp L_1] \\\\[6pt]\n  &= -\\dfrac{1}{0.5} \\\\[12pt]\n  &\\answer{= -2}\\end{aligned}\n  $$\n\n- Using the point-gradient formula with A$(2,-1)$ and $m = -2$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\\\[6pt]\n  y - (-1) &= -2\\hspace{0.05em}(x-2) \\hspace{0.25em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2.2em} \\answer{y = -2x + 3}\n  $$\n\n- $\\answer{2x + y - 3 = 0}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 5',
    content:
      'The diagram shows the straight line $L_1$, which intersects the $x$-axis\nat A$(-8,0)$ and the $y$-axis at B$(0,4)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/4b3e7801-0e33-489b-9a1d-49c48847723a/images/d9f6f8fd-c35c-40a4-938d-58f9cb89eef1/c40083b445b05ffe171f553a310158b5de8ce983.svg)\n\n\n\n- Write down the coordinates of M, the midpoint of line segment\n[AB].<span class="marks">[2]</span>\n\n- Calculate the gradient of $L_1$. <span class="marks">[2]</span>\n\n\nThe line $L_2$ is perpendicular to $L_1$ and passes through the point\nP$(1,2)$.\n\n- Find the equation of $L_2$. Give your answer in the form\n$y = mx + c$. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- M:  $\\answer{(-4,2)}$\n- The gradient of $L_1$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{11.9em} m_{L_1} &= \\dfrac{4-0}{0-(-8)} \\hspace{3em} [\\text{by gradient formula}] \\\\[8pt]\n  &\\answer{= 0.5}\\end{aligned}\n  $$\n\n- The gradient of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.1em} m_{L_2} &= -\\dfrac{1}{m_{L_1}} \\hspace{3em} [\\text{since }L_2 \\perp L_1] \\\\[5pt]\n  &= -\\dfrac{1}{0.5} \\\\[12pt]\n  &= -2\\end{aligned}\n  $$\n\n  Hence, using the point-gradient formula with\nP$(1,2)$ and $m = -2$, we get\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\hspace{0.7em} \\\\[6pt]\n  y - 2 &= -2\\hspace{0.05em}(x-1) \\\\[6pt]\n  y - 2 &= -2x + 2 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.5em} \\answer{y = -2x + 4}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 6',
    content:
      'The equation of a line $L_1$ is $y - 3x + 5 = 0$.\n\n- For the line $L_1$, find:\n  \n  - the $x$-intercept;\n  - the gradient. <span class="marks">[2]</span>\n\n\n\nA second line, $L_2$, intersects the $y$-axis at P$(0,2)$ and is\nparallel to $L_1$.\n\n- Find the equation of $L_2$. Give your answer in the form\n$y = mx+c$. <span class="marks">[1]</span>\n\n\nA third line, $L_3$, passes through the point Q$(3,1)$ and is\nperpendicular to $L_1$.\n\n- Find the gradient of the line $L_3$. <span class="marks">[1]</span>\n\n- Find the equation of $L_3$, giving your answer in the form\n$ax + by + d = 0$,\nwhere $a, b, d \\in \\mathbb{Z}$.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - Substituting $y = 0$ in the equation of $L_1$, we have\n\n    $$\n    \\begin{aligned}\n    0 - 3x + 5 &= 0 \\hspace{2.3em} \\\\[9pt]\n    5 &= 3x \\\\[4pt]\n    x &= \\dfrac{5}{3}\\end{aligned}\n    $$\n\n    Hence the point\n$\\answer{\\text{A}(5/3,0)}$\nis the $x$-intercept of $L_1$.\n  - If we rewrite the equation of $L_1$ in the form $y = mx + c$, we\nhave\n\n    $$\n    \\begin{aligned}\n    y - 3x + 5 &= 0 \\\\[6pt]\n    y &= 3x - 5 \\end{aligned}\n    $$\n\n    Hence the gradient of $L_1$ is\n$\\answer{m_{L_1} = 3}$\n\n- The gradient of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.9em} m_{L_2} &= m_{L_1} \\hspace{3em} [\\text{since }L_2 \\parallel L_1] \\\\[6pt]\n  &= 3\\end{aligned}\n  $$\n\n  Hence, using the point-gradient formula with\nP$(0,2)$ and $m = 3$, we get\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\hspace{0.6em} \\\\[6pt]\n  y - 2 &= 3\\hspace{0.05em}(x-0) \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{y = 3x + 2} \\hspace{0.1em}\n  $$\n\n- The gradient of $L_3$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.2em} m_{L_3} &= -\\dfrac{1}{m_{L_1}} \\hspace{3em} [\\text{since }L_3 \\perp L_1] \\\\[6pt]\n  &\\answer{= -\\dfrac{1}{3}}\\end{aligned}\n  $$\n\n- Using the point-gradient formula with Q$(3,1)$ and $m = -1/3$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\hspace{0.7em} \\\\[6pt]\n  y - 1 &= -\\dfrac{1}{3}\\hspace{0.05em}(x-3) \\\\[8pt]\n  3y - 3 &= -x + 3 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{x + 3y - 6 = 0} \\hspace{6.5em}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 7',
    content:
      'The coordinates of point K are $(-2,-3)$ and the coordinates of point N\nare $(8,6)$. M is the midpoint of [KN].\n\n- Find the coordinates of M. <span class="marks">[2]</span>  \n\n$L_1$ is the line which passes through K and N.\n\n- Find the gradient of $L_1$. <span class="marks">[2]</span>  \n\nA new line, $L_2$, is perpendicular to $L_1$ and passes through M.\n\n- \n  - Write down the gradient of $L_2$.\n  - Write down the equation of $L_2$ in the form $y = mx + c$.\n<span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- Using the coordinates of a midpoint formula, we get\n\n  $$\n  \\begin{aligned}\n  \\text M &= \\left(\\dfrac {x_1+x_2} 2, \\dfrac {y_1 + y_2} 2\\right)\\rule[-4mm]{0pt}{3mm}\\\\\n  & = \\left(\\dfrac {-2 + 8} 2, \\dfrac {-3 + 6} 2\\right)\\rule[-4mm]{0pt}{10mm}\\\\\n  &\\answer{  = \\left(3, \\dfrac 3 2\\right)}   \\rule[0mm]{0pt}{6mm}\\end{aligned}\n  $$\n\n- Using the gradient formula, we obtain\n\n  $$\n  \\begin{aligned}\n  m_{L_1} &=  \\dfrac {y_2 - y_1} {x_2 - x_1}\\rule[-3.5mm]{0pt}{4mm}\\\\\n  & = \\dfrac {6 - (-3)}{8 - (-2)}\\rule[-3.5mm]{0pt}{9mm}\\\\\n  &\\answer{  = \\dfrac {9} {10}}\\rule[0mm]{0pt}{5.5mm}\\\\\n  \\end{aligned}\n  $$\n\n- \n  - Since $L_2$ is perpendicular to $L_1$, then\n\n    $$\n    \\begin{aligned}\n    m_{L_2} & = -\\dfrac 1 {m_{L_1}}\\hspace{5mm}\\\\[6pt]\n    &\\answer{  = -\\dfrac {10}{9}}\\\\\n    \\end{aligned}\n    $$\n\n  - From (c) (i) we have $y = -\\dfrac {10}{9} \\,x + c$. To find $c$\nwe substitute the coordinates of M into the equation (since\n$L_2$ passes through M).\n\n    $$\n    \\begin{aligned}\n    \\dfrac 3 2  & = -\\dfrac {10} {9} \\left(3 \\right) + c\\rule[-3.5mm]{0pt}{4mm}\\\\\n    \\dfrac 3 2  & = -\\dfrac {10}{3} + c\\rule[-3.5mm]{0pt}{9mm}\\\\\n    c & = \\dfrac 3 2 + \\dfrac {10} {3}\\rule[-3.5mm]{0pt}{9mm}\\\\\n    c & = \\dfrac {29}{6}\\rule[0mm]{0pt}{5.5mm}\\\\\n    \\end{aligned}\n    $$\n\n    Hence the equation of $L_2$ is\n\n    $$\n    \\begin{aligned}\n    &\\answer{ y = -\\dfrac {10} {9}\\, x + \\dfrac {29}{6}}\\end{aligned}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 8',
    content:
      'The coordinates of point P are $(-4,6)$ and the coordinates of point Q\nare $(5,1)$. M is the midpoint of [PQ].\n\n- Find the coordinates of M. <span class="marks">[2]</span>  \n\n$L_1$ is the line which passes through P and Q.\n\n- Find the gradient of $L_1$. <span class="marks">[2]</span>  \n\nA new line, $L_2$, is perpendicular to $L_1$ and passes through M.\n\n- \n  - Write down the gradient of $L_2$.\n  - Write down the equation of $L_2$ in the form $y = mx + c$.\n<span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- Using the coordinates of a midpoint formula, we get\n\n  $$\n  \\begin{aligned}\n  \\text M &= \\left(\\dfrac {x_1+x_2} 2, \\dfrac {y_1 + y_2} 2\\right)\\rule[-4mm]{0pt}{10mm}\\\\\n  & = \\left(\\dfrac {-4+5} 2, \\dfrac {6+1} 2\\right)\\rule[-4mm]{0pt}{10mm}\\\\\n  &\\answer{  = \\left(\\dfrac 1 2, \\dfrac 7 2\\right)}\\rule[-4mm]{0pt}{10mm}    \\end{aligned}\n  $$\n\n- Using the gradient formula, we obtain\n\n  $$\n  \\begin{aligned}\n  m_{L_1} &= \\dfrac {y_2 - y_1} {x_2 - x_1} \\rule[-4mm]{0pt}{0mm}\\\\\n  & = \\dfrac {1 - 6}{5-(-4)} \\rule[-4mm]{0pt}{10mm}\\\\\n  &\\answer{  = -\\dfrac 5 9}\\rule[0mm]{0pt}{6mm}\\\\\n  \\end{aligned}\n  $$\n\n- \n  - Since $L_2$ is perpendicular to $L_1$, then\n\n    $$\n    \\begin{aligned}\n    m_{L_2}     & = -\\dfrac 1 {m_{L_1}}\\hspace{5mm}\\\\[6pt]\n    &\\answer{  = \\dfrac 9 5}\\\\\n    \\end{aligned}\n    $$\n\n  - From (c) (i) we have $y = \\dfrac 9 5 \\,x + c$. To find $c$ we\nsubstitute the coordinates of M into the equation (since $L_2$\npasses through M).\n\n    $$\n    \\begin{aligned}\n    \\dfrac 7 2  & = \\dfrac 9 5 \\left(\\dfrac 1 2 \\right) + c\\rule[-3.5mm]{0pt}{9mm}\\\\\n    \\dfrac 7 2  & = \\dfrac {9}{10} + c\\rule[-3.5mm]{0pt}{9mm}\\\\\n    c       & = \\dfrac 7 2 - \\dfrac 9 {10}\\rule[-3.5mm]{0pt}{9mm}\\\\\n    c       & = \\dfrac {13}{5}\\rule[-3.5mm]{0pt}{9mm}\\\\\n    \\end{aligned}\n    $$\n\n    Hence the equation of $L_2$ is\n\n    $$\n    \\begin{aligned}\n    &\\answer{ y = \\dfrac 9 5\\, x + \\dfrac {13}{5}}\\end{aligned}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 9',
    content:
      'The equation of a line $L_1$ is $2x + 3y = -5$.\n\n- Find the gradient of $L_1$. <span class="marks">[1]</span>\n\n\nA second line, $L_2$, is perpendicular to $L_1$.\n\n- Find the gradient of $L_2$. <span class="marks">[1]</span>\n\n\nThe point P$(4,0)$ lies on $L_2$.\n\n- Find the equation of $L_2$, giving your answer in the form\n$ax + by + d = 0$, where $a, b, d \\in \\mathbb{Z}$. <span class="marks">[2]</span>\n\n\nThe point Q is the intersection of $L_1$ and $L_2$.\n\n- Find the coordinates of Q. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- If we rewrite the equation of $L_1$ in the form $y = mx + c$, we\nhave\n\n  $$\n  \\begin{aligned}\n  2x + 3y &= -5 \\\\[12pt]\n  3y &= -2x - 5 \\\\[6pt]\n  y &= -\\dfrac{2}{3}x-\\dfrac{5}{3} \\hspace{0.4em} \\\\\n  \\end{aligned}\n  $$\n\n  Hence the gradient of $L_1$ is\n$\\answer{m_{L_1} = -2/3}$\n- The gradient of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{9em} m_{L_2} &= -\\dfrac{1}{m_{L_1}} \\hspace{3em} [\\text{since }L_2 \\perp L_1] \\\\[6pt]\n  &= -\\dfrac{1}{(-2/3)} \\\\[6pt]\n  &\\answer{= \\dfrac{3}{2}}\\end{aligned}\n  $$\n\n- Using the point-gradient formula with P$(4,0)$ and $m = 3/2$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.2em} y - y_1 &= m(x - x_1) \\\\[5pt]\n  y - 0 &= \\dfrac{3}{2}\\hspace{0.05em}(x - 4) \\\\[6pt]\n  2y &= 3x - 12 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{3.45em} \\answer{0 = 3x - 2y - 12}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  L_1&:\\hspace{1.0em} 2x + 3y = -5 \\qref{(1)} \\\\[6pt]\n  L_2&:\\hspace{1.0em} 3x - 2y = 12 \\qref{(2)}\\end{aligned}\n  $$\n\n  Solving\nthe system of linear equations $(1)$-$(2)$ for $x$ and $y$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  \n  \\hspace{10.8em} \\begin{array}{rcl}\n  x &=& 2 \\\\[6pt]\n  y &=& -3\n  \\end{array} \\hspace{4em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence the coordinates of Q are\n$\\answer{(2,-3)}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 10',
    content:
      'The coordinates of point A are $(-1,-7)$ and the coordinates of point\n$B$ are $(5,2)$. $L_1$ is the line which passes through A and B.\n\n- Find the equation of $L_1$. <span class="marks">[3]</span>  \n\nPoint M is the midpoint of [AB]. The line $L_2$ is perpendicular to\n$L_1$ and passes through M.\n\n- Find the equation of $L_2$. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- First, let's find the gradient of $L_1$. Using the gradient formula,\nwe obtain\n\n  $$\n  \\begin{aligned}\n  m_{L_1} &= \\dfrac {y_2 - y_1} {x_2 - x_1}\\rule[-3.5mm]{0pt}{3mm}\\\\\n  & = \\dfrac {2 - (-7)}{5 - (-1)} \\rule[-3.7mm]{0pt}{8mm}\\\\\n  &  = \\dfrac{9}{6} \\rule[-3.5mm]{0pt}{8mm}\\\\\n  & = \\dfrac 3 2 \\rule[0mm]{0pt}{4.5mm}\\end{aligned}\n  $$\n\n  So far the\nequation of $L_1$ is $y = \\dfrac 3 2 \\, x + c$. To find $c$ we can\nsubstitute in the coordinates of B into the equation\n\n  $$\n  \\begin{aligned}\n  2   & = \\dfrac 3 2 \\,(5) + c\\\\[6pt]\n  c   & = -\\dfrac {11} 2\\end{aligned}\n  $$\n\n  Hence the equation of $L_1$ is\n\n  $$\n  \\begin{aligned}\n  &\\answer{ y    = \\dfrac 3 2 \\,x - \\dfrac {11} 2}\\end{aligned}\n  $$\n\n- Since $L_2$ is perpendicular to $L_1$, then\n\n  $$\n  \\begin{aligned}\n  m_{L_2}     & = -\\dfrac 1 {m_{L_1}}\\hspace{5mm}\\\\\n  & = -\\dfrac 2 3 \\end{aligned}\n  $$\n\n  So far we have\n$y = -\\dfrac 2 3\\, x + c$.\n  Let's find coordinates of M. Using the coordinates of a midpoint\nformula, we get\n\n  $$\n  \\begin{aligned}\n  \\text M &= \\left(\\dfrac {x_1+x_2} 2, \\dfrac {y_1 + y_2} 2\\right)\\rule[-4mm]{0pt}{3mm}\\\\\n  & = \\left(\\dfrac {-1 + 5} 2, \\dfrac {-7 + 2} 2\\right)\\rule[-4mm]{0pt}{9mm}\\\\\n  &\\answer{  = \\left(2, -\\dfrac 5 2\\right)}\\rule[0mm]{0pt}{6mm}  \\end{aligned}\n  $$\n\n  To find $c$ we can substitute M into the equation (since $L_2$\npasses through M).\n\n  $$\n  \\begin{aligned}\n  -\\dfrac 5 2 & = -\\dfrac 2 3  (2) + c\\rule[-3mm]{0pt}{3mm}\\\\\n  c   & = -\\dfrac 5 2 + \\dfrac 4 3\\rule[-3mm]{0pt}{8mm}\\\\\n  c   & = -\\dfrac 7 6\\rule[0mm]{0pt}{5mm}\\end{aligned}\n  $$\n\n  Hence the\nequation of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  &\\answer{ y = -\\dfrac 2 3  x - \\dfrac 7 6}\\end{aligned}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 11',
    content:
      'The coordinates of point A are $(6,-3)$ and the coordinates of point B\nare $(-2,-1)$. $L_1$ is the line which passes through A and B.\n\n- Find the equation of $L_1$. <span class="marks">[3]</span>  \n\nPoint M is the midpoint of [AB]. The line $L_2$ is perpendicular to\n$L_1$ and passes through M.\n\n- Find the equation of $L_2$. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- First, let's find the gradient of $L_1$. Using the gradient formula,\nwe obtain\n\n  $$\n  \\begin{aligned}\n  m_{L_1} &= \\dfrac {y_2 - y_1} {x_2 - x_1}\\rule[-3.5mm]{0pt}{3mm}\\\\\n  & = \\dfrac {-1 - (-3)}{-2 - 6} \\rule[-3.5mm]{0pt}{9mm}\\\\\n  &  = \\dfrac{2}{-8} \\rule[-3.5mm]{0pt}{9mm}\\\\\n  & = -\\dfrac 1 4 \\rule[0mm]{0pt}{5.5mm}\\end{aligned}\n  $$\n\n  So far the\nequation of $L_1$ is $y = -\\dfrac 1 4 \\, x + c$. To find $c$ we can\nsubstitute coordinates of B into the equation\n\n  $$\n  \\begin{aligned}\n  -1  & = -\\dfrac 1 4 (-2) + c\\\\[6pt]\n  c   & = -\\dfrac 3 2\\end{aligned}\n  $$\n\n  Hence the equation of $L_1$\nis\n\n  $$\n  \\begin{aligned}\n  &\\answer{ y    = -\\dfrac 1 4 \\,x - \\dfrac 3 2}\\end{aligned}\n  $$\n\n- Since $L_2$ is perpendicular to $L_1$, then\n\n  $$\n  \\begin{aligned}\n  m_{L_2}     & = -\\dfrac 1 {m_{L_1}}\\hspace{5mm}\\\\[6pt]\n  & = 4\\end{aligned}\n  $$\n\n  So far we have $y = 4 x + c$.\n  Let's find the coordinates of the midpoint, M. Using the coordinates\nof a midpoint formula, we get\n\n  $$\n  \\begin{aligned}\n  \\text M &= \\left(\\dfrac {x_1+x_2} 2, \\dfrac {y_1 + y_2} 2\\right)\\rule[-3.5mm]{0pt}{3mm}\\\\\n  & = \\left(\\dfrac {6 - 2} 2, \\dfrac {-3 - 1} 2\\right)\\rule[-3.5mm]{0pt}{9mm}\\\\\n  &\\answer{  = \\left(2, -2\\right)}   \\rule[0mm]{0pt}{5.5mm}\\end{aligned}\n  $$\n\n  To find $c$ we substitute M into the equation (since $L_2$ passes\nthrough M).\n\n  $$\n  \\begin{aligned}\n  -2  & = 4  (2) + c\\rule[-1.5mm]{0pt}{3mm}\\\\\n  c   & = -2 - 8\\rule[-1.5mm]{0pt}{5.5mm}\\\\\n  c   & = -10\\rule[0mm]{0pt}{4mm}\\end{aligned}\n  $$\n\n  Hence the equation of\n$L_2$ is\n\n  $$\n  \\begin{aligned}\n  &\\answer{ y = 4 x - 10}\\end{aligned}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 12',
    content:
      'The diagram below shows the straight lines $L_1$ and $L_2$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/633be528-7eef-4908-9690-cf9b303eb5ba/images/d0523e39-da10-418a-a674-d373c7768ea3/9ee6dfa84eb27bb1c8584bbd4318407cba979047.svg)\n\n\n\n- Find:\n  \n  - the gradient of $L_1$;\n  - the equation of $L_1$, giving your answer in the form\n$y = mx + c$. <span class="marks">[3]</span>\n\n\n\nThe equation of $L_2$ is $x - 2y = 0$.\n\n- Find the area of the shaded triangle. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- \n  - Using the gradient formula with A$(0,6)$ and B$(8,0)$, we get\n\n    $$\n    \\begin{aligned}\n    m_{L_1} &= \\dfrac{0-6}{8-0} \\hspace{3em} \\\\[6pt]\n    &\\answer{= -\\dfrac{3}{4}}\\end{aligned}\n    $$\n\n  - Using the point-gradient formula with A$(0,6)$ and $m = -3/4$,\nwe find\n\n    $$\n    \\begin{aligned}\n    y - y_1 &= m(x - x_1) \\\\[10pt]\n    y - 6 &= -\\dfrac{3}{4}(x-0) \\hspace{1.8em} \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\answer{y = -\\dfrac{3}{4}x+6} \\hspace{0.4em}\n    $$\n\n\n- Substituting $x = 2y$ in the equation of $L_1$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{10em} y &= -\\dfrac{3}{4}(2y)+6 \\\\[6pt]\n  y &= 2.4 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence, using the area of a triangle formula with $b = 8$ and\n$h = 2.4$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.9em} A &= \\dfrac{1}{2}(b\\times h) \\\\[6pt]\n  &= \\dfrac{1}{2}(8)(2.4) \\\\[10pt]\n  &\\answer{= 9.6  \\text{ units}^2} \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 13',
    content:
      'Bruce goes into a car dealership to purchase a new vehicle. The one he\nwants to buy costs $\\$16\\hspace{0.15em}000$, however he doesn\'t have\nthat much money in his bank. The salesman offers him a financing option\nof a $30$ % deposit followed by $12$ monthly\npayments of $\\$1150$.\n\n- Find the amount of the deposit. <span class="marks">[1]</span>\n\n- Calculate the total cost of the loan under this financing option.\n<span class="marks">[2]</span>\n\n\nBruce\'s father generously offers him an interest free loan of\n$\\$16\\hspace{0.15em}000$ to buy the car to avoid the expensive loan\nrepayments. They agree that Bruce will repay the loan by paying his\nfather $\\$\\hspace{0.05em}x$ in the first month and $\\$\\hspace{0.05em}y$\nevery following month until the $\\$16\\hspace{0.15em}000$ is repaid.\nThe total amount Bruce\'s father receives after $12$ months is $\\$5200$.\nThis can be expressed by the equation $x + 11y = 5200$. The total amount\nthat Bruce\'s father receives after $24$ months is\n$\\$10\\hspace{0.15em}600$.\n\n- Write down a second equation involving $x$ and $y$.\n<span class="marks">[1]</span>\n\n- Determine the value of $x$ and the value of $y$.\n<span class="marks">[2]</span>\n\n- Calculate the number of months it will take Bruce\'s father\nto receive\nthe $\\$16\\hspace{0.15em}000$. <span class="marks">[3]</span>\n\n\nBruce decides to buy a cheaper car for $\\$12\\hspace{0.15em}000$ and\ninvest the remaining $\\$4000$. He is considering two investment options\nover four years.\nOption A: Compound interest at an annual rate of\n$6.5$ %.\nOption B: Compound interest at a nominal annual rate of\n$6$ %, compounded monthly.\nExpress each answer in part (f) to the nearest dollar.\n\n- Calculate the value of each investment option after four\nyears.\n  \n  - Option A.\n  - Option B. <span class="marks">[5]</span>\n\n\n',
    markScheme:
      "\n- The amount of the deposit is\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.4em} \\mathrm{PV} &= 16\\hspace{0.15em}000\\times0.3 \\\\[6pt]\n  &\\answer{= \\$4800}\\end{aligned}\n  $$\n\n- The total cost of the loan is\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.7em} \\mathrm{FV} &= 4800 + 1150\\times12 \\\\[6pt]\n  &\\answer{= \\$18\\hspace{0.15em}600}\\end{aligned}\n  $$\n\n- $\\answer{x + 23y = 10\\hspace{0.15em}600}$\n- We have\n\n  $$\n  \\begin{aligned}\n  x+11y &= 5200 \\qref{(1)} \\\\[6pt]\n  x + 23y &= 10\\hspace{0.15em}600 \\hspace{3em} \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, solving the system of linear equations $(1)$ and $(2)$, we\nget\n\n  $$\n  \n  \\hspace{8.9em} \\begin{array}{rl}\n  &\\answer{x = 250} \\\\[6pt]\n  &\\answer{y = 450}\n  \\end{array} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.4em} 250 + 450n &= 16\\hspace{0.15em}000 \\\\[8pt]\n  n &= 35 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence it will take Bruce's father\n$\\answer{36 \\text{ months}}$\nto receive the $\\$16\\hspace{0.15em}000$.\n- \n  - We have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/109f5bcf-7e24-48da-933e-bf9abe847c29/images/83b5567c-360a-4827-bcf6-7981fa2e12e1/f5c80495cb4b6289d9e252ee117b474ac0267df8.svg)\n\n\n    Hence, using the compound interest formula, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{4.1em} \\mathrm{FV} &= \\text{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n    &= 4000\\hspace{0.05em}\\bigg(1 + \\dfrac{6.5}{100\\times1}\\bigg)^{1\\times 4}  \\\\[12pt]\n    &\\answer{\\approx \\$5146}\\end{aligned}\n    $$\n\n  - We have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/109f5bcf-7e24-48da-933e-bf9abe847c29/images/2a954c17-2361-4029-9e42-e5a49752668c/94b36ff454d13c51eba6ab9f5086d95bd5a04ffa.svg)\n\n\n    Hence, using the compound interest formula, we obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{5em} \\mathrm{FV} &= 4000\\bigg(1 + \\dfrac{6}{100\\times12}\\bigg)^{12\\times 4} \\\\[12pt]\n    &\\answer{\\approx \\$5082}\\end{aligned}\n    $$\n\n\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 14',
    content:
      'The diagram below shows the triangle ABC. The point C has coordinates\n$(9,5)$ and the equation of the line (AB) is $x+4y = 12$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/84736b6d-9b3f-4a1d-aaa7-96f1f82c66c6/images/bacc960f-2cef-46d6-bf11-b301716ccd84/3d9c33de7f7eaf861d1fdfed39a4fd8d1cf5d629.svg)\n\n\n\n- Find the coordinates of:\n  \n  - A;\n  - B. <span class="marks">[2]</span>\n\n\n- Show that the length of [AB] is $12.4$ correct to three\nsignificant figures.<span class="marks">[2]</span>\n\n\nThe point D lies on the line (AB). The line (CD) is perpendicular to the\nline (AB).\n\n- Find:\n  \n  - the gradient of (CD);\n  - the equation of (CD). <span class="marks">[5]</span>\n\n\n- Find the coordinates of D. <span class="marks">[3]</span>\n\n- Calculate the length of [CD] correct to three significant\nfigures. <span class="marks">[2]</span>\n\n- Calculate the area of triangle ABC. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - Substituting $x = 0$ in the equation of (AB), we have\n\n    $$\n    \\begin{aligned}\n    0+4y &= 12 \\hspace{1.65em} \\\\[6pt]\n    y &= 3\\end{aligned}\n    $$\n\n    Hence the coordinates of A are\n$\\answer{(0,3)}$\n  - Substituting $y = 0$ in the equation of (AB), we have\n\n    $$\n    \\begin{aligned}\n    x+4(0) &= 12 \\hspace{2.5em} \\\\[6pt]\n    x &= 12\\end{aligned}\n    $$\n\n    Hence the coordinates of B are\n$\\answer{(12,0)}$\n\n- Using the distance b/n two points formula with A$(0,3)$ and\nB$(12,0)$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.6em} \\mathrm{AB} &= \\sqrt{(12-0)^2 + (0-3)^2} \\\\[6pt]\n  &= \\sqrt{12^2 + (-3)^2} \\\\[9pt]\n  &\\answer{\\approx 12.4}\\end{aligned}\n  $$\n\n- \n  - If we rewrite the equation of (AB) in the form $y = mx + c$, we\nhave\n\n    $$\n    \\begin{aligned}\n    \\hspace{1em} x+4y &= 12 \\\\[12pt]\n    4y &= -x + 12 \\\\[6pt]\n    y &= -\\dfrac{1}{4}x + 3\\end{aligned}\n    $$\n\n    Hence the gradient\nof (CD) is\n\n    $$\n    \\begin{aligned}\n    \\hspace{10.9em} m_{(\\mathrm{CD})} &= -\\dfrac{1}{m_{(\\mathrm{AB})}} \\hspace{3em} [\\text{since }(\\mathrm{CD}) \\perp (\\mathrm{AB})] \\\\[6pt]\n    &= -\\dfrac{1}{(-1/4)} \\\\[12pt]\n    &\\answer{= 4}\\end{aligned}\n    $$\n\n  - Using the point-gradient formula with C$(9,5)$ and $m = 4$, we\nfind\n\n    $$\n    \\begin{aligned}\n    y - y_1 &= m(x - x_1) \\hspace{0.1em} \\\\[6pt]\n    y - 5 &= 4(x - 9) \\\\[6pt]\n    y - 5 &= 4x - 36 \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\answer{y = 4x - 31} \\hspace{0.05em}\n    $$\n\n\n- We have\n\n  $$\n  \\begin{aligned}\n  (\\mathrm{AB}) &: \\hspace{1.0em} x + 4y = 12 \\qref{(1)} \\\\[6pt]\n  (\\mathrm{CD}) &: \\hspace{1.0em} 4x - y = 31 \\qref{(2)}\\end{aligned}\n  $$\n\n  Solving the system of linear equations $(1)$-$(2)$ for $x$ and $y$,\nwe obtain\n\n  $$\n  \\begin{aligned}\n  \n  \\hspace{12em} \\begin{array}{rcl}\n  x &=& 8 \\\\[6pt]\n  y &=& 1\n  \\end{array} \\hspace{4em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence the coordinates of D are\n$\\answer{(8,1)}$\n- Using the distance b/n two points formula with C$(9,5)$ and\nD$(8,1)$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{CD} &= \\sqrt{(8-9)^2 + (1-5)^2} \\\\[6pt]\n  &= \\sqrt{(-1)^2 + (-4)^2} \\\\[9pt]\n  &\\answer{\\approx 4.12}\\end{aligned}\n  $$\n\n- Using the area of a triangle formula with $b = 12.4$ and $h = 4.12$,\nwe obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} A &= \\dfrac{1}{2}(b\\times h) \\\\[6pt]\n  &= \\dfrac{1}{2}(12.4)(4.12) \\\\[10pt]\n  &= 25.544 \\\\[13pt]\n  &\\answer{\\approx 25.5 \\text{ units}^2} \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '17',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 15',
    content:
      'The equation of the line $L_1$ is $3y - x - 5 = 0$. The line $L_1$ is\nshown on the diagram below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/6727684d-5ad2-4628-a91a-56ec3054bbb5/images/11d4345c-1293-4672-a434-88c3f326f964/f4ed7a05bbd56bbe84b8725c56c6d6ec6699d794.svg)\n\n\nThe point K has coordinates $(4,3)$. The point T has coordinates\n$(2,-3)$. The point M is the midpoint of [TK].\n\n- Calculate the coordinates of the point M. <span class="marks">[2]</span>\n\n- Show that the point K lies on the line $L_1$. <span class="marks">[2]</span>\n\n- Calculate the length of [TK]. <span class="marks">[2]</span>\n\n\nThe line $L_2$ passes through the point M and is perpendicular to $L_1$.\n\n- Find the gradient of the line $L_2$. <span class="marks">[2]</span>\n\n- Find the equation of $L_2$. Give your answer in the form\n$ax + by + d = 0$, where $a, b$ and $d$ are integers. <span class="marks">[4]</span>\n\n\nThe point N is the intersection of $L_1$ and $L_2$.\n\n- Calculate the coordinates of N. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \n  \\begin{array}{rcccl}\n  \\dfrac{x_1+x_2}{2} &=& \\dfrac{4+2}{2} &=& 3 \\\\[12pt]\n  \\dfrac{y_1+y_2}{2} &=& \\dfrac{3+(-3)}{2} &=& 0\n  \\end{array} \\hspace{3em}\n  $$\n\n  Hence the coordinates of the midpoint of\nthe line segment [TK] are\n$\\answer{(3,0)}$\n- Substituting $x = 4$ & $y = 3$ in the left hand side of the equation\nof $L_1$, we have\n\n  $$\n  \\begin{aligned}\n  3(3) - 4 - 5 &= 9 - 4 - 5 \\\\[6pt]\n  &= 0 \\end{aligned}\n  $$\n\n  Hence the point K lies on the line $L_1$.\n- Using the distance b/n two points formula with T$(2,-3)$ and\nK$(4,3)$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.6em} \\mathrm{TK} &= \\sqrt{(4-2)^2 + (3-(-3))^2} \\\\[6pt]\n  &= \\sqrt{2^2 + 6^2} \\\\[9pt]\n  &\\answer{\\approx 6.32}\\end{aligned}\n  $$\n\n- If we rewrite the equation of $L_1$ in the form $y = mx + c$, we\nhave\n\n  $$\n  \\begin{aligned}\n  3y - x - 5 &= 0 \\hspace{5.2em} \\\\[12pt]\n  3y &= x + 5 \\\\[6pt]\n  y &= \\dfrac{1}{3}x + \\dfrac{5}{3} \\end{aligned}\n  $$\n\n  Hence the gradient\nof $L_1$ is\n\n  $$\n  \\begin{aligned}\n  m_{L_1} &= \\dfrac{1}{3} \\hspace{2.3em}\\end{aligned}\n  $$\n\n  Therefore the\ngradient of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.5em} m_{L_2} &= -\\dfrac{1}{m_{L_1}} \\hspace{3em} [\\text{since }L_2 \\perp L_1] \\\\[6pt]\n  &= -\\dfrac{1}{1/3} \\\\[12pt]\n  &\\answer{= -3}\\end{aligned}\n  $$\n\n- Using the point-gradient formula with M$(3,0)$ and $m = -3$, we find\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\\\[6pt]\n  y - 0 &= -3\\hspace{0.05em}(x-3) \\\\[6pt]\n  \\hspace{2.8em} y &= -3x + 9 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{3x + y - 9 = 0} \\hspace{5.2em}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  L_1&:\\hspace{1.0em} 3y - x = 5 \\qref{(1)} \\\\[6pt]\n  L_2&:\\hspace{1.0em} 3x + y = 9 \\qref{(2)}\\end{aligned}\n  $$\n\n  Solving the\nsystem of linear equations $(1)$-$(2)$ for $x$ and $y$, we obtain\n\n  $$\n  \\begin{aligned}\n  \n  \\hspace{11em} \\begin{array}{rcl}\n  x &=& 2.2 \\\\[6pt]\n  y &=& 2.4\n  \\end{array} \\hspace{4em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence the coordinates of N are\n$\\answer{(2.2,2.4)}$\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 16',
    content:
      'The line $L_1$ has equation $2y - x - 10 = 0$ and is shown on the\ndiagram.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b013bdd6-5c84-45cd-88f4-56ef7bb231a9/images/a9ab7183-1dd3-46b7-a00f-eb986d2c8406/de606d5be573f475a578c89b32ed5f6e2d4e6f74.svg)\n\n\nThe point A has coordinates $(2,6)$.\n\n- Show that A lies on $L_1$. <span class="marks">[2]</span>\n\n\nThe point C has coordinates $(8,18)$. M is the midpoint of [AC].\n\n- Find the coordinates of M. <span class="marks">[2]</span>\n\n- Find the length of [AC]. <span class="marks">[2]</span>\n\n\nThe straight line, $L_2$, is perpendicular to [AC] and passes through\nM.\n\n- Show that the equation of $L_2$ is $2y + x - 29 = 0$.\n<span class="marks">[5]</span>\n\n\nThe point D is the intersection of $L_1$ and $L_2$.\n\n- Find the coordinates of D. <span class="marks">[2]</span>\n\n\nThe length of [MD] is $\\dfrac{9\\sqrt{5}}{4}$.\n\n- Write down the length of [MD] correct to three\nsignificant figures. <span class="marks">[1]</span>\n\n\nThe point B is such that ABCD is a rhombus.\n\n- Find the area of ABCD. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Substituting $x = 2$ & $y = 6$ in the left hand side of the equation\nof $L_1$, we have\n\n  $$\n  \\begin{aligned}\n  2(6) - 2 - 10 &= 12 - 2 - 10 \\\\[6pt]\n  &= 0 \\end{aligned}\n  $$\n\n  Hence the point A$(2,6)$ lies on the line\n$L_1$.\n- We have\n\n  $$\n  \n  \\hspace{2.8em} \\begin{array}{rcccl}\n  \\dfrac{x_1+x_2}{2} &=& \\dfrac{2+8}{2} &=& 5 \\\\[12pt]\n  \\dfrac{y_1+y_2}{2} &=& \\dfrac{6+18}{2} &=& 12 \\\\[3pt]\n  \\end{array} \\vspace{0.5em}\n  $$\n\n  Hence the coordinates of M are\n$\\answer{(5,12)}$\n- Using the distance b/n two points formula with A$(2,6)$ and\nC$(8,18)$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{AC} &= \\sqrt{(8-2)^2 + (18-6)^2} \\\\[6pt]\n  &= \\sqrt{6^2 + 12^2} \\\\[9pt]\n  &\\answer{\\approx 13.4}\\end{aligned}\n  $$\n\n- The gradient of line segment AC is\n\n  $$\n  \\begin{aligned}\n  \\hspace{12em} m_{\\mathrm{AC}} &= \\dfrac{18-6}{8-2} \\hspace{3em} [\\text{by gradient formula}] \\\\[8pt]\n  &\\answer{= 2}\\end{aligned}\n  $$\n\n  Hence the gradient\nof $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.7em} m_{L_2} &= -\\dfrac{1}{m_{\\mathrm{AC}}} \\hspace{3em} [\\text{since }L_2 \\perp L_1] \\\\[6pt]\n  &\\answer{= -\\dfrac{1}{2}} \\\\\n  \\end{aligned}\n  $$\n\n  Hence, using the point-gradient formula with M$(5,12)$ and\n$m = -1/2$, we get\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\\\[6pt]\n  y - 12 &= -\\dfrac{1}{2}\\hspace{0.05em}(x-5) \\\\[6pt]\n  \\hspace{0.3em}  2y - 24 &= -x + 5 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{2y + x - 29 = 0} \\hspace{5.6em}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  L_1&:\\hspace{1.0em} 2y - x = 10 \\qref{(1)} \\\\[6pt]\n  L_2&:\\hspace{1.0em} 2y + x = 29 \\qref{(2)}\\end{aligned}\n  $$\n\n  Solving\nthe system of linear equations $(1)$-$(2)$ for $x$ and $y$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  \n  \\hspace{11.3em} \\begin{array}{rcl}\n  x &=& 9.5 \\\\[6pt]\n  y &=& 9.75 \\\\[2pt]\n  \\end{array} \\hspace{3.5em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence the coordinates of D are\n$\\answer{(9.5,9.75)}$\n- $\\answer{\\mathrm{MD} \\approx 5.03}$\n- If we sketch the lines $L_1$ and $L_2$, and the points A, B, C, D\nand M, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/b013bdd6-5c84-45cd-88f4-56ef7bb231a9/images/fe7ba0a5-c700-4399-a915-517dd0ed1fe8/77fb9723b552ee7da7594cc46fb5967dcf76c511.svg)\n\n\n  Using the area of a rhombus formula, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{11.8em} A &= \\dfrac{1}{2}[\\mathrm{AC}\\times\\mathrm{BD}] \\\\[6pt]\n  &\\approx \\dfrac{1}{2}[13.4][2(5.03)] \\hspace{3em} [\\text{since }\\mathrm{BD} = 2\\mathrm{MD}] \\\\[12pt]\n  &\\answer{\\approx 67.4 \\text{ unit}^2}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '17',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 1',
    content:
      'After solving a problem, John has an exact answer of $z = 0.1475$.\n\n- Write down the exact value of $z$ in the form $a\\times10^k$,\nwhere $1 \\leq a < 10, k\\in \\mathbb{Z}$.<span class="marks">[2]</span>\n\n- State the value of $z$ given correct to $2$ significant figures.\n<span class="marks">[1]</span>\n\n- Calculate the percentage error if $z$ is given correct to $2$\nsignificant figures. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{1.475\\times10^{-1}}$\n- $\\answer{0.15}$\n- Using the percentage error formula\n$\\epsilon = \\bigg|\\dfrac{v_\\mathrm{A} - v_\\mathrm{E}}{v_\\mathrm{E}}\\bigg|\\times 100\\hspace{0.05em}\\%$\nwith $v_\\mathrm{E} = 0.1475$ and $v_\\mathrm{A} = 0.15$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\epsilon &= \\bigg|\\dfrac{0.15 - 0.1475}{0.1475}\\bigg|\\times 100\\hspace{0.05em}\\% \\\\[6pt]\n  &\\answer{\\approx 1.69\\hspace{0.05em}\\%}\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 2',
    content:
      'Given that $z = \\dfrac{10\\sin \\alpha}{3x+y}$, where $\\alpha = \\ang{30}$,\n$x = 6$ and $y = 46$.\n\n- Find the exact value of $z$. <span class="marks">[2]</span>\n\n- Write your answer to part (a)\n  \n  - correct to $2$ decimal places;\n  - correct to $3$ significant figures;\n  - in the form $a\\times10^k$, where $1 \\leq a < 10$ and\n$k\\in \\mathbb{Z}$.<span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- Substituting $\\alpha = \\ang{30}$, $x = 6$ and $y = 46$ in the\nexpression for $z$, we get\n\n  $$\n  \\begin{aligned}\n  z &=  \\dfrac{10\\sin \\ang{30}}{3(6)+46} \\\\[6pt]\n  &\\answer{= 0.078125}\\end{aligned}\n  $$\n\n- \n  - $\\answer{0.08}$\n  - $\\answer{0.0781}$\n  - $\\answer{7.81\\times10^{-2}}$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 3',
    content:
      'Let $A = \\sqrt{\\dfrac{\\sin \\alpha - \\sin \\beta}{x^2 + 2y}}$, where\n$\\alpha = \\ang{54}$, $\\beta = \\ang{18}$, $x = 24$ and $y = 18.25$.\n\n- Find the value of $A$. Write down your full calculator display.\n<span class="marks">[2]</span>\n\n- Give your answer to part (a) correct to\n  \n  - three significant figures;\n  - three decimal places. <span class="marks">[2]</span>\n\n\n- Give the answer to part (b) (i) in the form $a\\times10^k$, where\n$1 \\leq a < 10$, $k \\in \\mathbb{Z}$.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Substituting $\\alpha = \\ang{54}$, $\\beta = \\ang{18}$, $x = 24$ and\n$y = 18.25$ in the expression for $A$, we get\n\n  $$\n  \\begin{aligned}\n  A &= \\sqrt{\\dfrac{\\sin \\ang{54} - \\sin \\ang{18}}{24^2 + 2(18.25)}} \\\\[6pt]\n  &\\answer{\\approx 0.028571}\\end{aligned}\n  $$\n\n- \n  - $\\answer{0.0286}$\n  - $\\answer{0.029}$\n\n- $\\answer{2.86\\times10^{-2}}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 4',
    content:
      'Let $Q = \\dfrac{(\\sin 2x + b)(2\\sin x - 1)}{a^2 - 4\\tan x}$, where\n$x = \\ang{45}$, $a = 18$ and $b = \\sqrt{2}$.\n\n- Find the exact value of $Q$. <span class="marks">[2]</span>\n\n- Give your answer to part (a) correct to\n  \n  - three decimal places;\n  - three significant figures. <span class="marks">[2]</span>\n\n\n- Calculate the percentage error if $Q$ is given to three decimal\nplaces. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Substituting $x = \\ang{45}$, $a = 18$ and $b = \\sqrt{2}$ in the\nexpression for $Q$, we get\n\n  $$\n  \\begin{aligned}\n  Q &= \\dfrac{(\\sin \\ang{90} + \\sqrt{2})(2\\sin \\ang{45} - 1)}{18^2 - 4\\tan \\ang{45}} \\\\[6pt]\n  &\\answer{= 0.003125}\\end{aligned}\n  $$\n\n- \n  - $\\answer{0.003}$\n  - $\\answer{0.00313}$\n\n- Using the percentage error formula\n$\\epsilon = \\bigg|\\dfrac{v_\\mathrm{A} - v_\\mathrm{E}}{v_\\mathrm{E}}\\bigg|\\times 100\\hspace{0.05em}\\%$\nwith $v_\\mathrm{E} = 0.003125$ and $v_\\mathrm{A} = 0.003$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\epsilon &= \\bigg|\\dfrac{0.003 - 0.003125}{0.003125}\\bigg|\\times 100\\hspace{0.05em}\\% \\\\[6pt]\n  &\\answer{= 4\\hspace{0.05em}\\%}\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 5',
    content:
      'The volume of a hemisphere, $V$, is given by the formula\n\n$$\nV = \\sqrt{\\dfrac{4S^3}{243\\pi}}\\hspace{0.05em},\n$$\n\nwhere $S$ is the\ntotal surface area.\nThe total surface area of a given hemisphere is\n$529$ cm$^2$.\n\n- Calculate the volume of this hemisphere in cm$^3$. Give your answer\ncorrect to one decimal place. <span class="marks">[3]</span>\n\n- Write down your answer to part (a) correct to the nearest\ninteger. <span class="marks">[1]</span>\n\n- Write down your answer to part (b) in the form $a\\times10^k$,\nwhere $1 \\leq a < 10$ and $k \\in \\mathbb{Z}$.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Substituting $S = 529$ in the volume of a hemisphere formula, we get\n\n  $$\n  \\begin{aligned}\n  V &= \\sqrt{\\dfrac{4(529)^3}{243\\pi}} \\\\[6pt]\n  &\\answer{\\approx 880.7\\hspace{0.25em}\\text{cm}^3}\\end{aligned}\n  $$\n\n- $\\answer{881\\hspace{0.25em}\\text{cm}^3}$\n- $\\answer{8.81\\times10^2\\hspace{0.25em}\\text{cm}^3}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 6',
    content:
      'Four cement bags labelled, "5 kg", were\ndelivered to a customer. The customer measured each bag to check their\nweights and recorded the following:\n\n$$\n\\begin{aligned}\n4.92,\\hspace{0.3em} 4.95,\\hspace{0.3em} 5.02,\\hspace{0.3em}4.95 \\\\\n\\end{aligned}\n$$\n\n\n- \n  - Find the mean of the customer\'s measurements.\n  - Calculate the percentage error between the mean and the stated,\napproximate weight of $5$ kg.\n<span class="marks">[3]</span>\n\n\n- Calculate $\\sqrt{2.15^8-5.12^{-0.8}}$, giving your answer\n  \n  - correct to the nearest integer;\n  - in the form $a\\times10^k$, where $1 \\leq a < 10$ and\n$k\\in \\mathbb{Z}$. <span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- \n  - If we calculate the mean of the measurements, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.8em} \\mu &=  \\dfrac{4.92 + 4.95 + 5.02 + 4.95}{4} \\\\[6pt]\n    &\\answer{= 4.96}\\end{aligned}\n    $$\n\n  - Using the percentage error formula\n$\\epsilon = \\bigg|\\dfrac{v_\\mathrm{A} - v_\\mathrm{E}}{v_\\mathrm{E}}\\bigg|\\times 100\\hspace{0.05em}\\%$\nwith $v_\\mathrm{E} = 4.96$ and $v_\\mathrm{A} = 5$, we obtain\n\n    $$\n    \\begin{aligned}\n    \\epsilon &= \\bigg|\\dfrac{5 - 4.96}{4.96}\\bigg|\\times 100\\hspace{0.05em}\\% \\\\[6pt]\n    &\\answer{= 0.81\\hspace{0.05em}\\%}\n    \\end{aligned}\n    $$\n\n\n- \n  - $\\answer{21}$\n  - $\\answer{2.14\\times10^1}$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 7',
    content:
      'The distance between two points with coordinates $(x_1,y_1)$ and\n$(x_2,y_2)$ is equal to $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.\n\n- Calculate the distance between points A$(40,-100)$ and B$(1,-2)$.\nGive your answer correct to three significant figures. <span class="marks">[3]</span>\n\n- Give your answer from part (a) correct to one decimal place.\n<span class="marks">[1]</span>\n\n- Write the answer to part (b) in the form $a\\times10^k$, where\n$1 \\leq a < 10$, $k \\in \\mathbb{Z}$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The distance between points A$(40,-100)$ and B$(1,-2)$ is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{AB} &= \\sqrt{(1-40)^2+(-2-(-100))^2} \\\\[8pt]\n  &\\approx 105.475 \\\\[8pt]\n  &\\answer{\\approx 105} \\end{aligned}\n  $$\n\n- $\\answer{105.5}$\n- $\\answer{1.055\\times10^2}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 8',
    content:
      'The following diagram shows a rectangle with sides of length\n$7.6\\times10^2$ cm and\n$1.5\\times10^3$ cm.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b941e1fd-194d-4791-af1f-5051b95d132b/images/44cb6de2-68db-48c4-ae43-e4d84077333c/95dfeaca3907795a90048551ee5f6c3d7e41c444.svg)\n\n\n\n- Write down the area of the rectangle in the form $a\\times10^k$,\nwhere  \n$1 \\leq a < 10$ and $k \\in \\mathbb{Z}$. <span class="marks">[3]</span>  \n\nNatalie estimates the area of the rectangle to be\n$1\\hspace{0.1em}200\\hspace{0.15em}000$ cm$^2$.\n\n- Find the percentage error in Natalie\'s estimate.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- The area of the rectangle is\n\n  $$\n  \\begin{aligned}\n  A &= \\big(7.6\\times10^2\\big)\\hspace{-0.05em}\\times\\big(1.5\\times10^3\\big) \\\\[8pt]\n  &\\answer{= 1.14\\times10^6\\hspace{0.25em}\\text{cm}^2}\\end{aligned}\n  $$\n\n- Using the percentage error formula\n$\\epsilon = \\bigg|\\dfrac{v_\\mathrm{A} - v_\\mathrm{E}}{v_\\mathrm{E}}\\bigg|\\times 100\\hspace{0.05em}\\%$\nwith $v_\\mathrm{E} = 1\\hspace{0.1em}140\\hspace{0.15em}000$ and\n$v_\\mathrm{A} = 1\\hspace{0.1em}200\\hspace{0.15em}000$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.75em}\\epsilon &= \\bigg|\\dfrac{1\\hspace{0.1em}200\\hspace{0.15em}000 - 1\\hspace{0.1em}140\\hspace{0.15em}000}{1\\hspace{0.1em}140\\hspace{0.15em}000}\\bigg|\\times 100\\hspace{0.05em}\\% \\\\[6pt]\n  &\\answer{\\approx 5.26\\hspace{0.05em}\\%}\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 9',
    content:
      'Let $F = \\dfrac{(4\\sin 2z-1)(2\\tan 3z+1)}{x^2-y^2}$, where $x = 12$,\n$y = 8$ and $z = \\ang{15}$.\n\n- Calculate the exact value of $F$. <span class="marks">[2]</span>\n\n- Give your answer to $F$ correct to\n  \n  - two significant figures;\n  - two decimal places. <span class="marks">[2]</span>\n\n\n\nSasha estimates the value of $F$ to be $0.03$.\n\n- Calculate the percentage error in Sasha\'s estimate.\n<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Substituting $x = 12$, $y = 8$ and $z = \\ang{15}$ in the expression\nfor $F$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.55em} F &= \\dfrac{(4\\sin \\ang{30}-1)(2\\tan \\ang{45}+1)}{12^2-8^2} \\\\[6pt]\n  &\\answer{= 0.0375}\\end{aligned}\n  $$\n\n- \n  - $\\answer{0.038}$\n  - $\\answer{0.04}$\n\n- Using the percentage error formula\n$\\epsilon = \\bigg|\\dfrac{v_\\mathrm{A} - v_\\mathrm{E}}{v_\\mathrm{E}}\\bigg|\\times 100\\hspace{0.05em}\\%$\nwith $v_\\mathrm{E} = 0.0375$ and $v_\\mathrm{A} = 0.03$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\epsilon &= \\bigg|\\dfrac{0.03 - 0.0375}{0.0375}\\bigg|\\times 100\\hspace{0.05em}\\% \\\\[6pt]\n  &\\answer{= 20\\hspace{0.05em}\\%}\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 10',
    content:
      'Given $r = 2a - \\dfrac{\\sqrt{b}}{c}$, $a = 0.975$, $b = 4.41$ and\n$c = 35$,\n\n- calculate the value of $r$. <span class="marks">[2]</span>\n\n\nAlbert first writes $a$, $b$ and $c$ correct to one significant figure\nand then uses these values to estimate the value of $r$.\n\n- \n  - Write down $a$, $b$ and $c$ each correct to one significant\nfigure.\n  - Find Albert\'s estimate of the value of $r$. <span class="marks">[2]</span>\n\n\n- Calculate the percentage error in Albert\'s estimate of the\nvalue of $r$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Substituting $a = 0.975$, $b = 4.41$ and $c = 35$ in the expression\nfor $r$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} r &= 2(0.975) - \\dfrac{\\sqrt{4.41}}{35} \\\\[6pt]\n  &\\answer{= 1.89}\\end{aligned}\n  $$\n\n- \n  - $\\answer{a = 1,\\, b = 4,\\, c = 40}$\n  - Substituting $a = 1$, $b = 4$ and $c = 40$ in the expression for\n$r$, we get\n\n    $$\n    \\begin{aligned}\n    r &= 2(1) - \\dfrac{\\sqrt{4}}{40} \\hspace{3.3em} \\\\[6pt]\n    &\\answer{= 1.95}\\end{aligned}\n    $$\n\n\n- Using the percentage error formula\n$\\epsilon = \\bigg|\\dfrac{v_\\mathrm{A} - v_\\mathrm{E}}{v_\\mathrm{E}}\\bigg|\\times 100\\hspace{0.05em}\\%$\nwith $v_\\mathrm{E} = 1.89$ and $v_\\mathrm{A} = 1.95$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.75em} \\epsilon &= \\bigg|\\dfrac{1.95 - 1.89}{1.89}\\bigg|\\times 100\\hspace{0.05em}\\% \\\\[6pt]\n  &\\answer{\\approx 3.17\\hspace{0.05em}\\%}\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 11',
    content:
      'Jurgen is a scientist working for NASA.\nHe maintains a telescope that is in orbit around the Earth.\nTo test the accuracy of the telescope he uses it to measure the radius of the Earth.\nThe radius of the Earth is known to be $6\\hspace{0.1em}378\\hspace{0.1em}137$ metres.\n\n- Jurgen measures the radius of the Earth to be $6\\hspace{0.1em}432\\hspace{0.1em}400$ metres. What is the percentage error in his measurement? <span class="marks">[2]</span>  \n\nJurgen uses his measurement to calculate the circumference of the Earth. He assumes the Earth is spherical.\n\n- \n  - What value for the circumference of the Earth does Jurgen obtain? Round your answer to $4$ significant figures.\n  - Write down the answer to part (b)(i) in the form $a\\times10^k$, where $1\\leq a<10$ and $k\\in \\mathbb{Z}$. <span class="marks">[3]</span>    \n\n',
    markScheme:
      "\n- Using the formula we can write the percentage error in Jurgen's estimate as\n\n  $$\n  \\begin{align*}\n      \\epsilon &=\\bigg|\\frac{6\\hspace{0.1em}432\\hspace{0.1em}400 - 6\\hspace{0.1em}378\\hspace{0.1em}137}{6378137}\\bigg|\\times 100 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n      &=0.8507656...\\\\[6pt]\n      &=\\hspace{0.275em}\\tcbhighmath{0.851\\%} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- \n  - As Jurgen has assumed the Earth is spherical we can use the formula for the circumference of a circle to find the circumference of the Earth. Hence\n\n    $$\n    \\begin{align*}\n        C_{\\text{Earth}}&=2\\pi r \\tag*{\\textbf{(M1)}}\\\\\n        &=2\\pi\\times 6\\hspace{0.1em}432\\hspace{0.1em}400\\\\\n        &=40\\hspace{0.1em}415\\hspace{0.1em}961\\\\[6pt]\n        &=\\hspace{0.275em}\\answer{{40\\,420\\,000} \\text{ metres}} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - \n    $$\n    \\begin{align*}\n        &=\\hspace{0.275em}\\answer{4.042 \\times 10^7 \\text{ metres}} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n",
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 12',
    content:
      'A cuboid has the following dimensions: $\\text{length} = 9.6\\hspace{0.25em}$cm, $\\text{width} = 7.4\\hspace{0.25em}$cm, and $\\text{height} = 5.2\\hspace{0.25em}$cm, measured correct to the nearest millimetre.\n\n- Using these measurements, calculate the volume of the cuboid, in cm$^3$. Give your answer to two decimal places. <span class="marks">[2]</span>  \n\nThe lower and upper bounds for the length of the cuboid can be expressed as $9.55 \\leq l < 9.65$.\n\n- Write similar expressions for\n  \n  - the width;\n  - the height. <span class="marks">[2]</span>\n\n\n- Hence, calculate the minimum volume of the cuboid. Give your answer to three significant figures. <span class="marks">[2]</span>\n\n- Write your answer to part (c) in the form $a\\times10^k$, where $1 \\leq a < 10$ and $k \\in \\mathbb{Z}$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the volume of a cuboid formula $V = l \\times w \\times h$, we\nget\n\n  $$\n  \\begin{aligned}\n  V &= 9.6\\times7.4\\times5.2 \\\\[6pt]\n  &= 369.408 \\\\[6pt]\n  &\\answer{= 369.41\\hspace{0.25em}\\mathrm{cm}^3 \\text{ (2 d.p.)}} \n  \\end{aligned}\n  $$\n\n- \n  - $\\answer{7.35 \\leq w < 7.45}$\n  - $\\answer{5.15 \\leq h < 5.25}$\n\n- Using the lower bound for each dimension, and the volume formula, we get\n\n  $$\n  \\begin{align*}\n  V &= 9.55\\times7.35\\times5.15 \\\\[6pt]\n  &= 361.491... \\\\[6pt]\n  &\\tcbhighmath{= 361\\hspace{0.25em}\\mathrm{cm}^3 \\text{ ($3$ s.f.)}}\n  \\end{align*}\n  $$\n\n- $\\answer{3.61\\times10^2}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 1',
    content:
      'The subscription fee for an online project management software by\nAB-Tech is $\\$ 40$ per month. If the customer buys for a whole year in\nadvance, a discount of $\\$130$ is applied.\nThis can be modelled by the following function, $P(n)$, which gives the\ntotal cost when paying annually for the subscription.\n\n$$\nP(n) = 40n - 130,\\quad n\\geq 12\n$$\n\nwhere $n$ is the number months.\n\n- Find the total cost of buying a subscription for $2$ years.\n<span class="marks">[2]</span>\n\n- Find $P^{-1}(1790)$. <span class="marks">[2]</span>\n\n\nThe subscription price for a different online project management tool by\nYZ-tech is $\\$35$ per month, however customers can only purchase\nannually in advance, and there are no discounts. The total subscription\ncost of YZ-tech\'s software is less than AB-tech\'s software when $n>k$ .\n\n- Find the minimum value of $k$. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- Substituting $n=24$ into the $P(n)$ function, we get\n\n  $$\n  \\begin{aligned}\n  P(n) &=40n-130\\\\[6pt]\n  P(24) &= 40(24)-130 \\\\[6pt]\n  &\\hspace{0.5em}\\answer{=\\$ 830}\\end{aligned}\n  $$\n\n- Let's denote $P(n)$ by $y$. To find the inverse we can interchange\nthe variables $n$ and $y$ and rearrange for $y$, as follows\n\n  $$\n  \\begin{aligned}\n  y &= 40n-130 \\\\[6pt]\n  n&=40y-130\\\\[6pt]\n  40y&=n+130\\\\[6pt]\n  y&=\\dfrac{n+130}{40}\\\\[6pt]\n  P^{-1}(n) &= \\dfrac{n+130}{40}\\end{aligned}\n  $$\n\n  We can now find\n$P^{-1}(1790)$ as follows\n\n  $$\n  \\begin{aligned}\n  P^{-1}(1790)&=\\dfrac{1790+130}{40}\\\\[6pt]\n  &\\hspace{-3.5em}\\answer{P^{-1}(1790)=48 \\text{ months}}\\end{aligned}\n  $$\n\n- For AB-tech's software we we were given the pricing function\n\n  $$\n  P(n)=40n-130\n  \n  $$\n\n  For YZ-tech, we can define the function, $S(n)$, to\nrepresent the subscription price for their software\n\n  $$\n  S(n)=35n\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/2b908e8c-786e-4fec-844c-19b9653ea308/images/7386b1f2-6825-49b7-88df-da2a1e5501e7/7402d7e1fc9d51e4e9f6b0f5ea74f75143d1438e.svg)\n\n\n  From the graph, $S(n) < P(n)$ for $n>26$.\n  The price of YZ-tech's software is less than AB-tech's when $n>26$.\n  Therefore,  $\\answer{k=26}$\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 2',
    content:
      'The circumference, $C$, of a given circle can be represented by the\nfunction\n\n$$\n\\begin{aligned}\nC(A) &= 2\\pi\\sqrt{\\dfrac{A}{\\pi}}, \\hspace{0.5em} A \\geq 0,\\end{aligned}\n$$\n\nwhere $A$ is the area of the circle.\nThe graph of the function $C$, for $0 \\leq A \\leq 24$, is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/0b7df521-ef1b-4c8a-87b1-32e564791325/images/ce866e5f-cd7d-44ed-9b43-19469f4d4737/3388e210bb4d6f02426816cb2651396f2822c4c1.svg)\n\n\n\n- Find the value of $C(24)$. <span class="marks">[1]</span>\n\n- On the grid above, draw the graph of the inverse function, $C^{-1}$.\n<span class="marks">[3]</span>\n\n- In the context of the question, explain the meaning of\n$C^{-1}(2\\pi) = \\pi$. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Evaluating $C(A)$ for $A = 24$, we get\n\n  $$\n  \\begin{aligned}\n  C(A) &= 2\\pi\\sqrt{\\dfrac{24}{\\pi}} \\\\[6pt]\n  &\\answer{\\approx 17.4}\\end{aligned}\n  $$\n\n- If we draw the graph of the inverse function, $C^{-1}$, on the grid\nbelow, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0b7df521-ef1b-4c8a-87b1-32e564791325/images/3b17f6c6-ed96-4a9a-b40e-195870b66409/fae26733051cc1a7c15c3478abb0d0697e69d7fa.svg)\n\n\n- $\\answer{\\text{For a given circle, when the circumference is \\(2\\pi\\), the area is \\(\\pi\\)}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 3',
    content:
      'The radius of a cylindrical container with height\n$x$ cm is\n\n$$\n\\begin{aligned}\nr(x) = \\dfrac{56}{x},\\qquad 4\\leq x\\leq 16\\end{aligned}\n$$\n\n\n- Find the range of $r$.<span class="marks">[3]</span>  \n\nThe function $r^{-1}$ is the inverse function of\n$r$.\n\n- \n  - Find $r^{-1}(8)$.\n  - Interpret the answer to part (b) (i) in\ncontext.\n  - Find the range of $r^{-1}$.<span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- A sketch of $r(x)$ shows that the minimum value is found where $x=16$ and the maximum value is found where $x=4$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/47ec87ad-d03d-40ae-b070-86ca7d589f8a/images/5e3319c6-2a5b-4f5e-9751-0736b3e580f0/AI1002a.PNG)\n\n\n  Evaluating $r$ at the endpoints of its domain, we get\n\n  $$\n  \\begin{align*}\n  r(4) &= \\dfrac{56}{4} = 14 \\\\[11pt]\n  r(16) &= \\dfrac{56}{16} = 3.5\n  \\end{align*}\n  $$\n\n  Therefore the range of $r$ is $\\answer{3.5 \\leq r \\leq 14}$\n- \n  - Let $r^{-1}(8)=a$. This implies that $r(a)=8$.\n\n    $$\n    \\begin{align*}\n    \\dfrac{56}{a} &= 8 \\\\[11pt]\n    a &= \\dfrac{56}{8} \\\\[11pt]\n    a &= 7\n    \\end{align*}\n    $$\n\n    $r(7)=8$ and therefore $\\answer{r^{-1}(8) = 7}$\n  - When the radius of the container is $8\\,$cm the height is $7\\,$cm\n  - Using the definition of a function inverse, we have\n\n    $$\n    \\begin{align*}\n    \\text{range of $r^{-1}$} &= \\text{domain of $r$}\n    \\end{align*}\n    $$\n\n    Therefore the range of $r^{-1}$ is $\\answer{4 \\leq r^{-1} \\leq 16}$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 4',
    content:
      'The perimeter, $P$, of a given rectangle can be represented by the\nfunction\n\n$$\n\\begin{aligned}\nP(A) &= 6\\sqrt{\\dfrac{A}{2}}, \\hspace{0.5em} A \\geq 0,\\end{aligned}\n$$\n\nwhere $A$ is the area of the rectangle.\nThe graph of the function $P$, for $0 \\leq A \\leq 24$, is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/ab39cb62-6642-463f-8d55-b3b4e61d9fc1/images/d77d8ca4-60bf-47df-b71e-f5b1a82ac6ef/13be64c3a363091e834dcc3848fda5575c4c9b07.svg)\n\n\n\n- Find the value of $P(24)$. <span class="marks">[1]</span>\n\n- On the grid above, draw the graph of the inverse function, $P^{-1}$.\n<span class="marks">[3]</span>\n\n- In the context of the question, explain the meaning of\n$P^{-1}(12) = 8$. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Evaluating $P(A)$ for $A = 24$, we get\n\n  $$\n  \\begin{aligned}\n  P(A) &= 6\\sqrt{\\dfrac{24}{2}} \\hspace{0.6em}  \\\\[6pt]\n  &\\answer{\\approx 20.8}\\end{aligned}\n  $$\n\n- If we draw the graph of the inverse function, $P^{-1}$, on the grid\nbelow, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ab39cb62-6642-463f-8d55-b3b4e61d9fc1/images/ff3fed55-9366-4196-a9da-e2951114048a/0d0a8ad4bbd75e6a6d48466c8f25e5a869af08fe.svg)\n\n\n- $\\answer{\\text{For a given rectangle, when the perimeter is \\(12\\), the area is \\(8\\)}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 5',
    content:
      'The area, $A$, of a given square can be represented by the function\n\n$$\n\\begin{aligned}\nA(P) &= \\dfrac{P^2}{16}, \\hspace{0.5em} P \\geq 0,\\end{aligned}\n$$\n\nwhere\n$P$ is the perimeter of the square.\nThe graph of the function $A$, for $0 \\leq P \\leq 20$, is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d67d010e-f96a-4959-94d7-dd830ba69f41/images/db5dae3b-4d37-46d8-a488-586d1cdc2312/8c2c1a298c1b79e92e64f94fe2b4a4d452e488ad.svg)\n\n\n\n- Find the value of $A(20)$. <span class="marks">[1]</span>\n\n- On the grid above, draw the graph of the inverse function, $A^{-1}$.\n<span class="marks">[3]</span>\n\n- In the context of the question, explain the meaning of\n$A^{-1}(4) = 8$. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Evaluating $A(P)$ for $P = 20$, we get\n\n  $$\n  \\begin{aligned}\n  A(P) &= \\dfrac{20^2}{16} \\hspace{1.7em} \\\\[6pt]\n  &\\answer{= 25}\\end{aligned}\n  $$\n\n- If we draw the graph of the inverse function, $A^{-1}$, on the grid\nbelow, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d67d010e-f96a-4959-94d7-dd830ba69f41/images/8288a0de-f259-43ef-a694-da2f13679dc3/508588bd8662a40575516587374d1e3379be6249.svg)\n\n\n- $\\answer{\\text{For a given square, when the area is \\(4\\), the perimeter is \\(8\\)}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 6',
    content:
      'A function is defined by $g(x)=3-\\dfrac{12}{x+3}$ for $-9\\leq x\\leq 9$,\n$x\\neq -3$\n\n- Find the range of $g$. <span class="marks">[3]</span>\n\n- Find the value of $g^{-1}(0)$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The graph of $g(x)=3-\\dfrac{12}{x+3}$ is plotted below.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/616164a4-faa5-4676-9f3c-4769c3d41be8/images/23cbcbe8-15fc-47be-83cd-0d50dcfbc06b/AI881a.PNG)\n\n\n  From the graph, the range of $g$ is $\\answer{(-\\infty,2]\\cup[5,\\infty)]}$\n- $g^{-1}(0)$ corresponds to the value of $x$ when $g(x)=0$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/616164a4-faa5-4676-9f3c-4769c3d41be8/images/47112aa7-51a3-49b0-9ae0-889a5f78ea51/AI881b.PNG)\n\n\n  From the graph, $g(x)=0$ when $x=1$. Hence,\n\n  $$\n  \\begin{aligned}\n  \\answer{g^{-1}(0)=1}\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 7',
    content:
      'A function is defined by $f(x)=\\dfrac{\\sqrt{x+1}}{x^2-4}$, for the\ndomain $-1\\leq x\\leq 5$, $x\\neq 2$\n\n- Find the range of $f$. <span class="marks">[4]</span>\n\n- Find the value of $f^{-1}\\left(\\dfrac{2}{5}\\right)$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The graph of $f(x)=\\dfrac{\\sqrt{x+1}}{x^2-4}$ is plotted below\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/771c20b0-6647-4ac7-8e39-ad9d8d9a73fc/images/a00f5f74-aa09-49c4-9f67-0d0f12c451c2/AI883a.PNG)\n\n\n  From the graph, the range of $f$ is\n\n  $$\n  \\begin{aligned}\n  &\\answer{(-\\infty,0]\\cup[0.117,\\infty)])}\n  \\end{aligned}\n  $$\n\n- $f^{-1}\\bigg(\\dfrac{2}{5}\\bigg)$ corresponds to the value of $x$ when $f(x)=\\dfrac{2}{5}$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/771c20b0-6647-4ac7-8e39-ad9d8d9a73fc/images/45b4d1cb-3fb1-439c-ad5f-8bba89649cdf/AI883b.PNG)\n\n\n  From the graph, $f(x)=\\dfrac{2}{5}$ when $x=3$. Hence,\n\n  $$\n  \\begin{aligned}\n  &\\answer{f^{-1}\\bigg(\\dfrac{2}{5}\\bigg)=3}\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 8',
    content:
      'A function is defined by $f(x)=\\sqrt{x+5}$, $x\\geq -5$\n\n- Determine the domain and range of $f$. <span class="marks">[3]</span>\n\n- Find the value of $f^{-1}(\\sqrt{6})$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The graph of $f(x)=\\sqrt{x+5}$ is plotted below.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8ae200fc-c8c2-45b4-aa13-f0e9f279cb9a/images/881074fb-10d0-4145-9bf1-ee5c090fa571/1805e337e073512237286acb5583906bdf31bb84.svg)\n\n\n  From the graph, the domain of $f$ is\n\n  $$\n  \\answer{[-5,\\infty)}\n  $$\n\n  and the range of $f$ is\n\n  $$\n  \\answer{[0,\\infty)}\n  $$\n\n- $f^{-1}(\\sqrt{6})$ corresponds to the value of $x$ when\n$f(x)=\\sqrt{6}$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8ae200fc-c8c2-45b4-aa13-f0e9f279cb9a/images/5e47c30a-f23c-47d5-b947-709f7668078d/7c19742e74bbe79b3eeb3b8509335ac2df5057a0.svg)\n\n\n  From the graph, $f(x)=\\sqrt{6}$ when $x=1$. Hence,\n\n  $$\n  \\answer{f^{-1}(\\sqrt{6})=1}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'The $15$th term of an arithmetic sequence is $21$ and the common\ndifference is $-4$.\n\n- Find the first term of the sequence. <span class="marks">[2]</span>\n\n- Find the $29$th term of the sequence. <span class="marks">[2]</span>\n\n- Find the sum of the first $40$ terms of the sequence. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_{15} + (n-15)d$ with $n = 1$,\nwe get\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_{15} + (1-15)d \\\\[6pt]\n  &= 21 + (1-15)(-4) \\\\[6pt]\n  &\\answer{= 77}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 29$, we\nfind\n\n  $$\n  \\begin{aligned}\n  u_{29} &= u_1 + (29-1)d \\\\[6pt]\n  &= 77 + (29-1)(-4) \\hspace{0.4em} \\\\[6pt]\n  &\\answer{= -35}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 40$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.8em} S_{40} &= \\dfrac{40}{2}(2u_1 + (40-1)d) \\\\[6pt]\n  &= \\dfrac{40}{2}(2(77) + (40-1)(-4)) \\\\[11pt]\n  &\\answer{= -40}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 2',
    content:
      'Only one of the following four sequences is arithmetic and only one of\nthem is geometric.\n\n$$\n\\begin{array}{rcccccl}\na_n &=& 1,\\,5,\\,10,\\,15,\\,\\dots &\\,\\hspace{4em}\\,& c_n &=& 1.5,\\,3,\\,4.5,\\,6,\\,\\dots \\\\[12pt]\nb_n &=& \\dfrac{1}{2},\\,\\dfrac{2}{3},\\,\\dfrac{3}{4},\\,\\dfrac{4}{5},\\,\\dots &\\,\\hspace{4em}\\,& d_n &=& 2,\\,1,\\,\\dfrac{1}{2},\\,\\dfrac{1}{4},\\,\\dots\n\\end{array}\n$$\n\n\n- State which sequence is arithmetic and find the common difference of\nthe sequence. <span class="marks">[2]</span>\n\n- State which sequence is geometric and find the common ratio of the\nsequence.<span class="marks">[2]</span>\n\n- For the geometric sequence find the exact value of the\neighth term. Give your answer as a fraction. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \n  \\begin{array}{rclc|crcl}\n  a_2-a_1 &\\neq& a_3-a_2 &\\,\\hspace{0.5em}\\,&\\,\\hspace{0.5em}\\,& c_2-c_1 &=& c_3-c_2 \\\\[12pt]\n  5-1 &\\neq& 10-5 &&& 3-1.5 &=& 4.5-3 \\\\[12pt]\n  4 &\\neq& 5 &&& 1.5 &=& 1.5 \\\\[12pt] \\hline\n  &&&&&&& \\\\\n  b_2-b_1 &\\neq& b_3-b_2 &&& d_2-d_1 &\\neq& d_3-d_2 \\\\[12pt]\n  \\dfrac{2}{3}-\\dfrac{1}{2} &\\neq& \\dfrac{3}{4}-\\dfrac{2}{3} &&& 1-2 &\\neq& \\dfrac{1}{2}-1 \\\\[12pt]\n  \\dfrac{1}{6} &\\neq& \\dfrac{1}{12} &&& -1 &\\neq& -\\dfrac{1}{2}\n  \\end{array} \\vspace{0.75em}\n  $$\n\n  Hence\n$\\answer{c_n}$\nis arithmetic and\n$\\answer{d = 1.5}$\n- We have\n\n  $$\n  \n  \\begin{array}{rclc|crcl}\n  \\dfrac{a_2}{a_1} &\\neq& \\dfrac{a_3}{a_2} &\\,\\hspace{0.5em}\\,&\\,\\hspace{0.5em}\\,& \\dfrac{c_2}{c_1} &\\neq& \\dfrac{c_3}{c_2} \\\\[12pt]\n  \\dfrac{5}{1} &\\neq& \\dfrac{10}{5} &&& \\dfrac{3}{1.5} &\\neq& \\dfrac{4.5}{3} \\\\[12pt]\n  5 &\\neq& 2 &&& 2 &\\neq& 1.5 \\\\[12pt] \\hline\n  &&&&&&& \\\\\n  \\dfrac{b_2}{b_1} &\\neq& \\dfrac{b_3}{b_2} &&& \\dfrac{d_2}{d_1} &=& \\dfrac{d_3}{d_2} \\\\[12pt]\n  \\dfrac{2/3}{1/2} &\\neq& \\dfrac{3/4}{2/3} &&& \\dfrac{1}{2} &=& \\dfrac{1/2}{1} \\\\[12pt]\n  \\dfrac{4}{3} &\\neq& \\dfrac{9}{8} &&& \\dfrac{1}{2} &=& \\dfrac{1}{2}\n  \\end{array} \\vspace{0.5em}\n  $$\n\n  Hence\n$\\answer{d_n}$\nis geometric and\n$\\answer{r = \\dfrac{1}{2}}$\n- Using the $n$th term formula $d_n = d_1r^{n-1}$ with $n = 8$, we get\n\n  $$\n  \\begin{aligned}\n  d_8 &= d_1r^{8-1} \\\\[8pt]\n  &= 2\\left(\\dfrac{1}{2}\\right)^{8-1} \\\\[6pt]\n  &\\answer{= \\dfrac{1}{64}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 3',
    content:
      'An arithmetic sequence has $u_1 = 40$, $u_2 = 32$, $u_3 = 24$.\n\n- Find the common difference, $d$. <span class="marks">[2]</span>\n\n- Find $u_8$. <span class="marks">[2]</span>\n\n- Find $S_8$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common difference is\n\n  $$\n  \\begin{aligned}\n  d &= u_2 - u_1 \\hspace{2.5em} \\\\[6pt]\n  &= 32 - 40 \\\\[6pt]\n  &\\answer{= -8}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 8$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.0em} u_8 &= u_1 + (8-1)d \\\\[6pt]\n  &= 40 + (8-1)(-8) \\\\[6pt]\n  &\\answer{= -16}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(u_1 + u_n)$\nwith $n = 8$, we obtain\n\n  $$\n  \\begin{aligned}\n  S_8 &= \\dfrac{8}{2}(u_1+u_8) \\\\[6pt]\n  &= \\dfrac{8}{2}(40+(-16)) \\\\[10pt]\n  &\\answer{= 96}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 4',
    content:
      'Only one of the following four sequences is arithmetic and only one of\nthem is geometric.\n\n$$\n\\begin{array}{rcccccl}\na_n &=& \\dfrac{1}{3},\\,\\dfrac{1}{4},\\,\\dfrac{1}{5},\\,\\dfrac{1}{6},\\,\\dots &\\,\\hspace{4em}\\,& c_n &=& 3,\\,1,\\,\\dfrac{1}{3},\\,\\dfrac{1}{9},\\,\\dots \\\\[12pt]\nb_n &=& 2.5,\\,5,\\,7.5,\\,10,\\,\\dots &\\,\\hspace{4em}\\,& d_n &=& 1,\\,3,\\,6,\\,10,\\,\\dots\n\\end{array}\n$$\n\n\n- State which sequence is arithmetic and find the common difference of\nthe sequence. <span class="marks">[2]</span>\n\n- State which sequence is geometric and find the common ratio of the\nsequence.<span class="marks">[2]</span>\n\n- For the geometric sequence find the exact value of the sixth\nterm. Give your answer as a fraction. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \n  \\begin{array}{rclc|crcl}\n  a_2-a_1 &\\neq& a_3-a_2 &\\,\\hspace{0.5em}\\,&\\,\\hspace{0.5em}\\,& c_2-c_1 &\\neq& c_3-c_2 \\\\[12pt]\n  \\dfrac{1}{4}-\\dfrac{1}{3} &\\neq& \\dfrac{1}{5}-\\dfrac{1}{4} &&& 1-3 &\\neq& \\dfrac{1}{3}-1 \\\\[12pt]\n  -\\dfrac{1}{12} &\\neq& -\\dfrac{1}{20} &&& -2 &\\neq& -\\dfrac{2}{3} \\\\[12pt] \\hline\n  &&&&&&& \\\\\n  b_2-b_1 &=& b_3-b_2 &&& d_2-d_1 &\\neq& d_3-d_2 \\\\[12pt]\n  5-2.5 &=& 7.5-5 &&& 3-1 &\\neq& 6-3 \\\\[12pt]\n  2.5 &=& 2.5 &&& 2 &\\neq& 3\n  \\end{array} \\vspace{0.75em}\n  $$\n\n  Hence\n$\\answer{b_n}$\nis arithmetic and\n$\\answer{d = 2.5}$\n- We have\n\n  $$\n  \n  \\begin{array}{rclc|crcl}\n  \\dfrac{a_2}{a_1} &\\neq& \\dfrac{a_3}{a_2} &\\,\\hspace{0.5em}\\,&\\,\\hspace{0.5em}\\,& \\dfrac{c_2}{c_1} &=& \\dfrac{c_3}{c_2} \\\\[12pt]\n  \\dfrac{1/4}{1/3} &\\neq& \\dfrac{1/5}{1/4} &&& \\dfrac{1}{3} &=& \\dfrac{1/3}{1} \\\\[12pt]\n  \\dfrac{3}{4} &\\neq& \\dfrac{4}{5} &&& \\dfrac{1}{3} &=&\\dfrac{1}{3} \\\\[12pt] \\hline\n  &&&&&&& \\\\\n  \\dfrac{b_2}{b_1} &\\neq& \\dfrac{b_3}{b_2} &&& \\dfrac{d_2}{d_1} &\\neq& \\dfrac{d_3}{d_2} \\\\[12pt]\n  \\dfrac{5}{2.5} &\\neq& \\dfrac{7.5}{5} &&& \\dfrac{3}{1} &\\neq& \\dfrac{6}{3} \\\\[12pt]\n  2 &\\neq& 1.5 &&& 3 &\\neq& 2\n  \\end{array} \\vspace{0.5em}\n  $$\n\n  Hence\n$\\answer{c_n}$\nis geometric and\n$\\answer{r = \\dfrac{1}{3}}$\n- Using the $n$th term formula $c_n = c_1r^{n-1}$ with $n = 6$, we get\n\n  $$\n  \\begin{aligned}\n  c_6 &= c_1r^{6-1} \\\\[8pt]\n  &= 3\\left(\\dfrac{1}{3}\\right)^{6-1} \\\\[6pt]\n  &\\answer{= \\dfrac{1}{81}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 5',
    content:
      'An arithmetic sequence has $u_1 = 12$, $u_2 = 21$, $u_3 = 30$.\n\n- Find the common difference, $d$. <span class="marks">[2]</span>\n\n- Find $u_{10}$. <span class="marks">[2]</span>\n\n- Find $S_{10}$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common difference is\n\n  $$\n  \\begin{aligned}\n  d &= u_2 - u_1 \\hspace{1.5em} \\\\[6pt]\n  &= 21 - 12 \\\\[6pt]\n  &\\answer{= 9}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 10$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.35em} u_{10} &= u_1 + (10-1)d \\\\[6pt]\n  &= 12 + (10-1)(9) \\\\[6pt]\n  &\\answer{= 93}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(u_1+u_n)$\nwith $n=10$, we obtain\n\n  $$\n  \\begin{aligned}\n  S_{10} &= \\dfrac{10}{2}(u_1+u_{10}) \\\\[6pt]\n  &= \\dfrac{10}{2}(12+93) \\\\[10pt]\n  &\\answer{= 525}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 6',
    content:
      'Brendan is training for a long distance bike race.\nIn week $1$ of his training he cycled $22\\,$km. In week $2$ he cycled $34\\,$km. This pattern continues, with him cycling an extra $12\\,$km per week.\nThe distances Brendan cycled in the first $5$ weeks of training is shown in the following table.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/fbe76ea2-07bd-426c-90a3-5ad8f53713f4/images/02dbbd15-959b-4291-aa53-aba9944b29df/Screenshot%202023-08-31%20at%202.15.24%20PM.png)\n\n\n\n- Calculate how far he cycles in the $17$th week of his training. <span class="marks">[3]</span>\n\n- In total how far has he cycled after $17$ weeks? <span class="marks">[2]</span>\n\n- Find the mean distance per week he cycled over 17 weeks. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the formula for the $n$th term of an arithmetic sequence\n\n  $$\n  \\begin{align*}\n      u_{17}&=22+(17-1)\\times 12\\\\[6pt]\n      u_{17}&=214\n  \\end{align*}\n  $$\n\n  He cycled $\\answer{214\\,\\text{km}}$ in the $17$th week.\n- Using the formula for the sum of $n$ terms of an arithmetic sequence\n\n  $$\n  \\begin{align*}\n      S_{17}&=\\frac{17}{2}(2\\times22+(17-1)\\times12)\\\\[6pt]\n      S_{17}&=2006\n  \\end{align*}\n  $$\n\n  After $17$ weeks he cycled a total of $\\answer{2006\\,\\text{km}}$.\n- Using the formula for the mean\n\n  $$\n  \\begin{align*}\n      &=\\frac{22+34+46+...+214}{17}\\\\[6pt]\n      &=\\frac{2006}{17}\\\\[6pt]\n      &=118\n  \\end{align*}\n  $$\n\n  His mean distance per week over the $17$ weeks of training was $\\answer{118 \\text{ km}}$ per week.\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 7',
    content:
      'A geometric sequence has $u_1 =5$, $u_2 = -1$ and $u_3 = \\dfrac{1}{5}$.\n\n- Find the common ratio, $r$. <span class="marks">[2]</span>\n\n- Find the exact value of $u_{7}$. <span class="marks">[2]</span>\n\n- Find the exact value of $S_{7}$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r&= \\dfrac{u_2}{u_1} \\hspace{1.5em} \\\\[6pt]\n  &= \\dfrac{-1}{5} \\\\[6pt]\n  &\\answer{= -\\dfrac{1}{5}}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1 r^{n-1}$ with $n = 7$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.35em} u_{7} &= u_1 r^{7-1} \\\\[6pt]\n  &= 5\\Big(-\\dfrac{1}{5}\\Big)^6 \\\\[6pt]\n  &\\answer{= \\dfrac{1}{3\\hspace{0.15em}125}}\\end{aligned}\n  $$\n\n- Using the sum of the first $n$ terms formula\n$S_n = \\dfrac{u_1(1-r^n)}{1-r}$ with $n = 7$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.7em} S_{7} &= \\dfrac{u_1(1-r^{7})}{1-r} \\\\[6pt]\n  &= \\dfrac{5\\Big(1-\\Big(-\\dfrac{1}{5}\\Big)^{7}\\Big)}{1-\\Big(-\\dfrac{1}{5}\\Big)} \\\\[9pt]\n  &\\answer{=\\dfrac{13\\hspace{0.15em}021}{3\\hspace{0.15em}125}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 8',
    content:
      'Emily starts reading Leo Tolstoy\'s War and Peace on the $1$st of\nFebruary. The number of pages she reads each day increases by the same\nnumber on each successive day.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/29b61ef5-212d-453f-8416-c57dea2dd219/images/4ebe951b-b165-4c1e-936c-8c17fec35849/c94a768fb53af8987d3e1115bdd47ee0b1976776.svg)\n\n\n\n- Calculate the number of pages Emily reads on the $14$th of February.\n<span class="marks">[3]</span>\n\n- Find the exact total number of pages Emily reads in the $28$ days of\nFebruary.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have an arithmetic sequence with the first term $u_1 = 8$ and the\ncommon difference $d = 3$.\n  Hence, using the $n$the term formula $u_n = u_1 + (n-1)d$ with\n$n = 14$, we get\n\n  $$\n  \\begin{aligned}\n  u_{14} &= u_1 + (14-1)d \\hspace{1.75em} \\\\[6pt]\\\n  &= 8 + (14-1)(3) \\\\[6pt]\n  &\\answer{= 47 \\text{ pages}}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 28$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.7em} S_{28} &= \\dfrac{28}{2}(2u_1 + (28-1)d) \\\\[6pt]\n  &= \\dfrac{28}{2}(2(8) + (28-1)(3)) \\\\[11pt]\n  &\\answer{= 1358 \\text{ pages}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 9',
    content:
      'A geometric sequence has $20$ terms, with the first four terms given\nbelow.\n\n$$\n\\begin{aligned}\n418.5,\\hspace{0.25em} 279,\\hspace{0.25em} 186,\\hspace{0.25em} 124,\\hspace{0.25em}\\dots \\\\\n\\end{aligned}\n$$\n\n\n- Find $r$, the common ratio of the sequence. Give your answer as a\nfraction. <span class="marks">[1]</span>\n\n- Find $u_5$, the fifth term of the sequence. Give your answer as a\nfraction. <span class="marks">[1]</span>\n\n- Find the smallest term in the sequence that is an integer.\n<span class="marks">[2]</span>\n\n- Find $S_{10}$, the sum of the first $10$ terms of the sequence. Give\nyour answer correct to one decimal place. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have $u_1 = 418.5$ and $u_2 = 279$.\nHence the common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n  &= \\dfrac{279}{418.5} \\\\[8pt]\n  &\\answer{= \\dfrac{2}{3}}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 5$, we get\n\n  $$\n  \\begin{aligned}\n  u_5 &= u_1r^{5-1} \\\\[8pt]\n  &= 418.5\\bigg(\\dfrac{2}{3}\\bigg)^{5-1} \\\\[6pt]\n  &\\answer{= \\dfrac{248}{3}}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  u_5 &= \\dfrac{248}{3},\\hspace{0.3em}u_6 = \\dfrac{496}{9},\\hspace{0.3em}u_7 = \\dfrac{992}{27},\\hspace{0.3em}\\dots\\end{aligned}\n  $$\n\n  Hence the smallest integer term of the sequence is\n$\\answer{u_4 = 124}$\n- Using the sum of $n$ terms formula $S_n = \\dfrac{u_1(1-r^n)}{1-r}$\nwith $n = 10$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.7em} S_{10} &= \\dfrac{u_1(1-r^{10})}{1-r} \\\\[6pt]\n  &= \\dfrac{418.5(1-(2/3)^{10})}{1-2/3} \\\\[9pt]\n  &\\answer{\\approx 1233.7}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 10',
    content:
      'A tennis ball bounces on the ground $n$ times. The heights of the\nbounces, $h_1, h_2, h_3, \\dots,h_n,$ form a geometric sequence. The\nheight that the ball bounces the first time, $h_1$, is\n$80$ cm, and the second time, $h_2$, is\n$60$ cm.\n\n- Find the value of the common ratio for the sequence. <span class="marks">[2]</span>\n\n- Find the height that the ball bounces the tenth time, $h_{10}$.\n<span class="marks">[2]</span>\n\n- Find the total distance travelled by the ball during the first\nsix bounces (up and down). Give your answer correct to $2$ decimal\nplaces. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{h_2}{h_1} \\\\[6pt]\n  &= \\dfrac{60}{80} \\\\[12pt]\n  &\\answer{= 0.75} \\hspace{2.75em}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $h_n = h_1r^{n-1}$ with $n = 10$, we\nget\n\n  $$\n  \\begin{aligned}\n  h_{10} &= h_1r^{10-1} \\\\[6pt]\n  &= 80(0.75)^{10-1} \\\\[7pt]\n  &\\answer{\\approx 6.01\\hspace{0.25em}\\text{cm}}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{h_1(1-r^n)}{1-r}$\nwith $n=6$, we find\n\n  $$\n  \\begin{aligned}\n  \\text{total distance} &= 2S_6 \\\\[12pt]\n  &= 2\\bigg[\\dfrac{h_1(1-r^6)}{1-r}\\bigg] \\\\[6pt]\n  &= 2\\bigg[\\dfrac{80(1-0.75^6)}{1-0.75}\\bigg] \\hspace{2.4em} \\\\[12pt]\n  &\\answer{\\approx 526.09\\hspace{0.25em}\\text{cm}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 11',
    content:
      'The table shows the first four terms of three sequences: $u_n$, $v_n$,\nand $w_n$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/5a6e3e9a-7fb2-470e-9158-094a41eb3d33/images/74fa1661-4759-4c81-bc1b-8a688c7642eb/c39694c1cf7513ffce115791e6b0f1c54c230963.svg)\n\n\n\n- State which sequence is\n  \n  - arithmetic;\n  - geometric. <span class="marks">[2]</span>\n\n\n- Find the sum of the first $50$ terms of the arithmetic sequence.\n<span class="marks">[2]</span>\n\n- Find the exact value of the $13$th term of the geometric sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - $\\answer{v_n}$\n  - $\\answer{w_n}$\n\n- The common difference of the arithmetic sequence is\n\n  $$\n  \\begin{aligned}\n  d &= v_2 - v_1 \\hspace{0.75em} \\\\[6pt]\n  &= 24 - 12 \\\\[6pt]\n  &= 12\\end{aligned}\n  $$\n\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2v_1 + (n-1)d)$ with\n$n=50$,\n  we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{6em} S_{50} &= \\dfrac{50}{2}(2v_1 + (50-1)d) \\\\[6pt]\n  &= \\dfrac{50}{2}(2(12) + (50-1)(12)) \\\\[11pt]\n  &\\answer{= 15\\hspace{0.15em}300}\\end{aligned}\n  $$\n\n- The common ratio of the geometric sequence is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{w_2}{w_1} \\hspace{2.4em} \\\\[6pt]\n  &= \\dfrac{24}{12} \\\\[12pt]\n  &= 2\\end{aligned}\n  $$\n\n  Hence, using the $n$th term formula\n$w_n = u_1r^{n-1}$ with $n = 13$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.1em} w_{13} &= u_1r^{13-1} \\\\[6pt]\n  &= 12\\hspace{0.05em}(2)^{13-1} \\hspace{3.8em} \\\\[7pt]\n  &\\answer{= 49\\hspace{0.15em}152}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 12',
    content:
      'The table below shows the first four terms of three sequences: $u_n$,\n$v_n$, and $w_n$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/dca9feb2-8cd0-4d31-b2ae-7b00470e9eb2/images/c9077b28-4f22-4249-b824-0e6b8171ba7e/6896afb03e54861ed9a71ba4f129a85ea32667d8.svg)\n\n\n\n- State which sequence is\n  \n  - arithmetic;\n  - geometric. <span class="marks">[2]</span>\n\n\n- Find the exact value of the sum of the first $35$ terms of the\narithmetic\nsequence. <span class="marks">[2]</span>\n\n- Find the exact value of the $10$th term of the geometric sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - $\\answer{u_n}$\n  - $\\answer{w_n}$\n\n- The common difference of the arithmetic sequence, $u_n$, is\n\n  $$\n  \\begin{aligned}\n  d &= u_2 - u_1 \\hspace{0.75em} \\\\[6pt]\n  &= 9 - 5 \\\\[6pt]\n  &= 4\\end{aligned}\n  $$\n\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with\n$n=35$,\n  we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{6em} S_{35} &= \\dfrac{35}{2}(2u_1 + (35-1)d) \\\\[6pt]\n  &= \\dfrac{35}{2}(2(5) + (35-1)(4)) \\\\[11pt]\n  &\\answer{= 2\\hspace{0.15em}555}\\end{aligned}\n  $$\n\n- The common ratio of the geometric sequence, $w_n$, is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{w_2}{w_1} \\hspace{2.4em} \\\\[6pt]\n  &= \\dfrac{9}{-3} \\\\[12pt]\n  &= -3\\end{aligned}\n  $$\n\n  Hence, using the $n$th term formula\n$w_n =w_1r^{n-1}$ with $n = 10$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.1em} w_{10} &= w_1r^{10-1} \\\\[6pt]\n  &= (-3)\\hspace{0.05em}(-3)^{10-1} \\hspace{3.8em} \\\\[7pt]\n  &\\answer{= 59\\hspace{0.15em}049}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 13',
    content:
      'In this question give all answers correct to the nearest whole\nnumber.\nA population of goats on an island starts at $232$. The population is\nexpected\nto increase by $15$ % each year.\n\n- Find the expected population size after:\n  \n  - $10$ years;\n  - $20$ years. <span class="marks">[4]</span>\n\n\n- Find the number of years it will take for the population to reach\n$15\\hspace{0.15em}000$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/3f91abc0-e62e-4e9a-9d1c-8f1150f49aa0/images/051538fe-fce6-4c1b-8839-8ba85c83e74d/537894a1e06c34454736a91f01647c46ca2f4fa3.svg)\n\n\n  Hence the population size is expected to increase according to a\ngeometric sequence with the first term $u_1 = 232(1.15)$ and the\ncommon ratio $r = 1.15$.\n  \n  - Using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 10$,\nwe get\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.1em} u_{10} &= u_1r^{10-1} \\\\[6pt]\n    &= [232(1.15)](1.15)^{10-1} \\\\[7pt]\n    &\\answer{\\approx 939}\\end{aligned}\n    $$\n\n  - Using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 20$,\nwe get\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.1em} u_{20} &= u_1r^{20-1} \\\\[6pt]\n    &= [232(1.15)](1.15)^{20-1} \\\\[7pt]\n    &\\answer{\\approx 3797}\\end{aligned}\n    $$\n\n\n- Solving the equation $u_n = 15\\hspace{0.15em}000$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  u_1r^{n-1} &= 15\\hspace{0.15em}000 \\\\[6pt]\n  \\hspace{1.5em} [232(1.15)](1.15)^{n-1} &= 15\\hspace{0.15em}000 \\\\[7pt]\n  n &\\approx 29.8 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence it will take\n$\\answer{30 \\text{ years}}$\nfor the population of goats to reach $15\\hspace{0.15em}000$.\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 14',
    content:
      'On the first day of September, $2019$, Gloria planted $5$ flowers in her\ngarden. The number of flowers, which she plants at every day of the\nmonth, forms an arithmetic sequence. The number of flowers she is going\nto plant in the last day of September is $63$.\n\n- Find the common difference of the sequence. <span class="marks">[2]</span>\n\n- Find the total number of flowers Gloria is going to plant during\nSeptember.<span class="marks">[2]</span>\n\n- Gloria estimated she would plant $1000$ flowers in the month of\nSeptember. Calculate the percentage error in Gloria\'s estimate.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have $u_1 = 5$ and $u_{30}=63$.\nHence, using the $n$th term formula $u_n = u_1 + (n-1)d$ with\n$n=30$, we get\n\n  $$\n  \\begin{aligned}\n  u_{30} &= u_1 + (30-1)d \\\\[6pt]\n  63 &= 5 + (30-1)d \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{5.8em}\\answer{d = 2} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(2u_1+(n-1)d)$\nwith $n = 30$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.5em} S_{30} &= \\dfrac{30}{2}(2u_1+(30-1)d) \\\\[6pt]\n  &= \\dfrac{30}{2}(2(5)+(30-1)(2)) \\\\[12pt]\n  &\\answer{= 1020}\\end{aligned}\n  $$\n\n- Using the percentage error formula\n$\\epsilon = \\bigg|\\dfrac{v_\\mathrm{A} - v_\\mathrm{E}}{v_\\mathrm{E}}\\bigg|\\times 100\\hspace{0.05em}\\%$\nwith $v_\\mathrm{E} = 1020$ and $v_\\mathrm{A} = 1000$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.4em} \\epsilon &= \\bigg|\\dfrac{1000 - 1020}{1020}\\bigg|\\times 100\\hspace{0.05em}\\% \\\\[6pt]\n  &\\answer{= 1.96\\hspace{0.05em}\\%}\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 15',
    content:
      'The fifth term, $u_5$, of a geometric sequence is $375$. The sixth term,\n$u_6$, of the sequence is $75$.\n\n- Write down the common ratio of the sequence. <span class="marks">[1]</span>\n\n- Find $u_1$. <span class="marks">[2]</span>\n\n\nThe sum of the first $k$ terms in the sequence is\n$292\\hspace{0.15em}968$.\n\n- Find the value of $k$. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_6}{u_5} \\\\[6pt]\n  &= \\dfrac{75}{375} \\\\[12pt]\n  &\\answer{= 0.2} \\hspace{3.2em}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_5r^{n-5}$ with $n = 1$, we get\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_5r^{1-5} \\\\[6pt]\n  &= 375(0.2)^{1-5} \\\\[7pt]\n  &\\answer{= 234\\hspace{0.15em}375}\\end{aligned}\n  $$\n\n- Solving the equation $S_k = 292\\hspace{0.15em}968$ for $k$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{u_1(1-r^k)}{1-r} &= 292\\hspace{0.15em}968 \\hspace{9.3em} \\\\[6pt]\n  \\dfrac{234\\hspace{0.15em}375(1-(0.2)^k)}{1-0.2} &= 292\\hspace{0.15em}968 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{6.6em} \\answer{k = 8} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 16',
    content:
      'Bruno rides his bike to school each morning. During the first minute, he travels $160$ metres. In each subsequent minute, he travels $80\\,\\%$ of the distance travelled during the previous minute.\nThe distance from his home to school is $750$ metres. Bruno leaves his house at $8$:$30$ am and must be at school by $8$:$40$ am.\n\n- Verify that Bruno will not arrive at school on time. <span class="marks">[3]</span>  \n\nBruno realises that if he can increase the distance he travels each minute, from $80\\,\\%$ of the distance travelled during the previous minute to $k\\,\\%$, he will make it to school on time.\n\n- Determine the minimum value of $k$, given that Bruno still travels $160\\,\\text{m}$ in the first minute. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- We could consider each minute of Bruno's journey as a term of a geometric sequence, and we need the sum of the first 10 terms to determine how far Bruno travels between $8$:$30$ and $8$:$40$ am.\n  We have a geometric sequence with the first term $u_1 = 160$ and common ratio $r = 0.8$.\n  If we use the sum of $n$ terms formula $S_n = \\dfrac{u_1(1-r^n)}{1-r}$ with $n=10$, we get\n\n  $$\n  \\begin{align*}\n  S_{10} &= \\dfrac{u_1(1-r^{10})}{1-r} \\\\[6pt]\n  &= \\dfrac{160(1-0.8^{10})}{1-0.8} \\tag*{\\textbf{(M1)}}\\\\[12pt]\n  &= 714.10... \\tag*{\\textbf{A1}} \\\\[6pt]\n  714.10... &< 750 \\tag*{\\textbf{R1}}\n  \\end{align*}    \n  $$\n\n  Bruno will only travel $714$ metres by $8$:$40$ am, which is less than the $750$ metres required.\n  Therefore, Bruno $\\textbf{will not}$ arrive at school on time.\n- Again, we require the sum of the first 10 terms of a geometric sequence with first term $u_1=160$. This sum must be $\\textbf{at least}$ 750 to ensure that Bruno will make it to school on time. We do not know the common ratio, but if each minute Bruno travels $k\\,\\%$ of the distance travelled in the previous minute, then we will have a common ratio of $r=\\frac{k}{100}$.\n  Using this information we can form an inequality.\n\n  $$\n  \\begin{align*}\n      S_{10} &\\geq 750 \\\\[6pt]\n      \\dfrac{160\\left(1-\\left(\\frac{k}{100}\\right)^{10}\\right)}{1-\\frac{k}{100}} &\\geq 750 \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  To solve this, we can sketch both sides of the inequality and find the point of intersection.\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  The diagram below shows the graph of $y=S_{10}$ in $\\textbf{\\textcolor{red}{red}}$ and the graph of $y=750$ in $\\textbf{\\textcolor{green}{green}}$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/97916e5b-161e-4564-9663-3fafa5a98fac/images/fbe81f61-c25d-4cee-b32d-b8ae6801cad0/786.JPEG)\n\n\n  Hence the smallest value of $k$ such that the sum of the first ten terms is at least 750 metres is $\\tcbhighmath{81.4\\%\\,\\text{(3 s.f.)}}$\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 17',
    content:
      'The third term, $u_3$, of an arithmetic sequence is $7$. The common\ndifference of\nthe sequence, $d$, is $3$.\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Find $u_{60}$, the $60$th term of sequence. <span class="marks">[2]</span>\n\n\nThe first and fourth terms of this arithmetic sequence are the first two\nterms\nof a geometric sequence.\n\n- Calculate the sixth term of the geometric sequence.\n<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_3 + (n-3)d$ with $n = 1$, we\nget\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_3 + (1-3)d \\hspace{0.4em} \\\\[6pt]\n  &= 7 + (1-3)(3) \\\\[6pt]\n  &\\answer{= 1}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_3 + (n-3)d$ with $n = 60$, we\nfind\n\n  $$\n  \\begin{aligned}\n  u_{60} &= u_3 + (60-3)d \\\\[6pt]\n  &= 7 + (60-3)(3) \\\\[6pt]\n  &\\answer{= 178}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/077c6738-9c33-4398-a027-bb1140fcb037/images/9d0d8334-9630-4b77-b911-39471a73ca86/ad62ab3f954984b454acd9a772d836d707c86a2f.svg)\n\n\n  Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 6$,\nwe obtain\n\n  $$\n  \\begin{aligned}\n  u_6 &= u_1r^{6-1} \\\\[6pt]\n  &= 1(10)^{6-1} \\\\[7pt]\n  &\\answer{\\approx 100\\hspace{0.15em}000} \\hspace{3em}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 18',
    content:
      'A $3$D printer builds a set of $49$ Ei$\\text{f}$fel Tower\nReplicas in different sizes. The height of the largest tower in this set\nis $64$ cm. The heights of successive smaller\ntowers are $95$ % of the preceding larger tower,\nas shown in the diagram below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/127e3c5d-3aa2-4475-aa67-2df200261d2b/images/6ef94ba8-4b62-4fb0-9b70-993b9ddba3a5/AI110.PNG)\n\n\n\n- Find the height of the smallest tower in this set. <span class="marks">[3]</span>\n\n- Find the total height if all $49$ towers were placed one on top\nof another. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have a geometric sequence with the first term $u_1 = 64$ and the\ncommon ratio $r = 0.95$.\n  Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with $n=49$,\nwe get\n\n  $$\n  \\begin{aligned}\n  u_{49} &= u_1r^{49-1} \\\\[6pt]\n  &= 64(0.95)^{49-1} \\\\[7pt]\n  &\\answer{\\approx 5.46 \\text{ cm}}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{u_1(1-r^n)}{1-r}$\nwith $n=49$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.9em} S_{49} &= \\dfrac{u_1(1-r^{49})}{1-r} \\\\[6pt]\n  &= \\dfrac{64\\hspace{0.05em}(1-0.95^{49})}{1-0.95} \\\\[12pt]\n  &\\approx 1176.33 \\\\[16pt] \n  &\\answer{\\approx 1180 \\text{ cm}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 19',
    content:
      'The fourth term, $u_4$, of a geometric sequence is $135$. The fifth\nterm, $u_5$, is $81$.\n\n- Find the common ratio of the sequence. <span class="marks">[2]</span>\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Calculate the sum of the first $20$ terms of the sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_5}{u_4} \\\\[6pt]\n  &= \\dfrac{81}{135} \\\\[11pt]\n  &\\answer{= 0.6} \\hspace{3.2em}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_4r^{n-4}$ with $n = 1$, we get\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_4r^{1-4} \\\\[6pt]\n  &= 135(0.6)^{1-4} \\\\[6pt]\n  &\\answer{= 625}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{u_1(1-r^n)}{1-r}$\nwith $n = 20$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.7em} S_{20} &= \\dfrac{u_1(1-r^{20})}{1-r} \\\\[6pt]\n  &= \\dfrac{625(1-(0.6)^{20})}{1-0.6} \\\\[12pt]\n  &\\answer{\\approx 1560}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 20',
    content:
      'The fifth term, $u_5$, of a geometric sequence is $125$. The sixth term,\n$u_6$, is $156.25$.\n\n- Find the common ratio of the sequence. <span class="marks">[2]</span>\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Calculate the sum of the first $12$ terms of the sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_6}{u_5} \\\\[6pt]\n  &= \\dfrac{156.25}{125} \\\\[11pt]\n  &\\answer{= 1.25} \\hspace{3.2em}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_5r^{n-5}$ with $n = 1$, we get\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_5r^{1-5} \\\\[6pt]\n  &= 125(1.25)^{1-5} \\\\[6pt]\n  &\\answer{= 51.2}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{u_1(r^n-1)}{r-1}$\nwith $n = 12$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} S_{12} &= \\dfrac{u_1(r^{12}-1)}{r-1} \\\\[6pt]\n  &= \\dfrac{51.2((1.25)^{12}-1)}{1.25-1} \\\\[12pt]\n  &\\answer{\\approx 2780}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 21',
    content:
      'The fifth term, $u_5$, of an arithmetic sequence is $5$. The eighth\nterm, $u_8$, of the same sequence is $14$.\n\n- Find $d$, the common difference of the sequence. <span class="marks">[2]</span>\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Find $S_{100}$, the sum of the first $100$ terms of the sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_5 + (n-5)d$ with $n=8$, we get\n\n  $$\n  \\begin{aligned}\n  u_8 &= u_5 + (8-5)d \\\\[6pt]\n  14 &= 5 + (8-5)d\\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{5.9em}\\answer{d = 3} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Using the $n$th term formula $u_n = u_5 + (n-5)d$ with $n=1$, we\nfind\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.2em} u_1 &= u_5 + (1-5)d \\\\[6pt]\n  &= 5 + (1-5)(3) \\\\[6pt]\n  &\\answer{= -7}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(2u_1+(n-1)d)$\nwith $n = 100$,\n  we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{5em} S_{100} &= \\dfrac{100}{2}(2u_1+(100-1)d) \\\\[6pt]\n  &= \\dfrac{100}{2}(2(-7)+(100-1)(3)) \\\\[6pt]\n  &= 14150\\\\[8pt]\n  &\\answer{\\approx 14200}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 22',
    content:
      'The fifth term, $u_5$, of an arithmetic sequence is $25$. The eleventh\nterm, $u_{11}$, of the same sequence is $49$.\n\n- Find $d$, the common difference of the sequence. <span class="marks">[2]</span>\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Find $S_{100}$, the sum of the first $100$ terms of the sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_5 + (n-5)d$ with $n=11$, we\nget\n\n  $$\n  \\begin{aligned}\n  u_{11} &= u_5 + (11-5)d \\\\[6pt]\n  49 &= 25 + (11-5)d\\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{5.8em}\\answer{d = 4} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Using the $n$th term formula $u_n = u_5 + (n-5)d$ with $n=1$, we\nfind\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.7em} u_1 &= u_5 + (1-5)d \\\\[6pt]\n  &= 25 + (1-5)(4) \\\\[6pt]\n  &\\answer{= 9}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(2u_1+(n-1)d)$\nwith $n = 100$,\n  we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.1em} S_{100} &= \\dfrac{100}{2}(2u_1+(100-1)d) \\\\[6pt]\n  &= \\dfrac{100}{2}(2(9)+(100-1)(4)) \\\\[10pt]\n  &\\answer{= 20\\hspace{0.15em}700}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 23',
    content:
      'Charles has a New Years Resolution that he wants to be able to complete\n$100$ pushups in one go without a break. He sets out a training regime\nwhereby he completes $20$ pushups on the first day, then adds $5$\npushups each day thereafter.\n\n- Write down the number of pushups Charles completes\n  \n  - on the $4$th training day;\n  - on the $n$th training day. <span class="marks">[3]</span>\n\n\n\nOn the $k$th training day Charles completes $100$\npushups for the first time.\n\n- Find the value of $k$. <span class="marks">[2]</span>\n\n- Calculate the total number of pushups Charles completes on\nthe first $10$ training days. <span class="marks">[4]</span>\n\n\nCharles is also working on improving his long distance swimming in\npreparation for an Iron Man event in $12$ weeks time. He swims a total\nof $10\\hspace{0.15em}000$ metres in the first week, and plans to\nincrease this by $10$ % each week up until the\nevent.\n\n- Find the distance Charles swims in the $6$th week of\ntraining. <span class="marks">[3]</span>\n\n- Calculate the total distance Charles swims until the event.\n<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have an arithmetic sequence with the first term $u_1 = 20$ and\nthe common difference $d = 5$.\n  \n  - Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n=4$, we\nhave\n\n    $$\n    \\begin{aligned}\n    u_4 &= u_1 + (4-1)d \\\\[6pt]\n    &= 20 + (4-1)(5) \\\\[6pt]\n    &\\answer{= 35}\\end{aligned}\n    $$\n\n  - Using the $n$th term formula $u_n = u_1 + (n-1)d$, we have\n\n    $$\n    \\begin{aligned}\n    u_n &= 20 + (n-1)(5) \\\\[6pt]\n    &\\answer{= 20+5(n-1)}\\end{aligned}\n    $$\n\n\n- Solving the equation $u_k = 100$ for $k$, we get\n\n  $$\n  \\begin{aligned}\n  20+5(k-1) &= 100 \\hspace{7.5em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.9em} \\answer{k = 17} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 10$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.6em} S_{10} &= \\dfrac{10}{2}(2u_1 + (10-1)d) \\\\[6pt]\n  &= \\dfrac{10}{2}(2(20) + (10-1)(5)) \\\\[12pt]\n  &\\answer{= 425}\\end{aligned}\n  $$\n\n- We have a geometric sequence with the first term\n$v_1 = 10\\hspace{0.15em}000$ and the $\\text{common}$ ratio\n$r = 1.1$.\nHence, using the $n$th term formula $v_n = v_1r^{n-1}$ with $n=6$,\nwe get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} v_6 &= v_1r^{6-1} \\\\[6pt]\n  &= 10\\hspace{0.15em}000\\hspace{0.05em}(1.1)^{6-1} \\\\[7pt]\n  &= 16105.1 \\\\[7pt]\n  &\\answer{\\approx 16\\hspace{0.15em}100\\text{ m}}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{v_1(r^n-1)}{r-1}$\nwith $n=12$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.9em} S_{12} &= \\dfrac{v_1(r^{12}-1)}{r-1} \\\\[6pt]\n  &= \\dfrac{10\\hspace{0.15em}000\\hspace{0.05em}(1.1^{12}-1)}{1.1-1} \\\\[12pt]\n  &\\approx 213\\hspace{0.15em}842.84 \\\\[16pt]\n  &\\answer{\\approx 214\\hspace{0.15em}000 \\text{ m}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 24',
    content:
      'The second and the third terms of a geometric sequence are $u_2 = 3$ and\n$u_3 = 6$.\n\n- Find the value of $r$, the common ratio of the sequence. <span class="marks">[2]</span>\n\n- Find the value of $u_6$. <span class="marks">[2]</span>\n\n- Find the largest value of $n$ for which $u_n$ is less than\n$10^4$.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_3}{u_2} \\hspace{2.15em} \\\\[6pt]\n  &= \\dfrac{6}{3} \\\\[12pt]\n  &\\answer{=2}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_2r^{n-2}$ with $n = 6$, we get\n\n  $$\n  \\begin{aligned}\n  u_6 &= u_2r^{6-2} \\hspace{1em} \\\\[6pt]\n  &= 3(2)^{6-2} \\\\[7pt]\n  &\\answer{= 48}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.5em} u_n &< 10^4 \\\\[6pt]\n  u_2r^{n-2} &< 10^4 \\\\[6pt]\n  3(2)^{n-2} &< 10^4 \\\\[7pt]\n  n &< 13.7 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence\nthe largest value of $n$ such that $u_n < 10^4$ is\n\n  $$\n  \\begin{aligned}\n  \\answer{n = 13} \\hspace{2.5em}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 25',
    content:
      'The sum of the first $n$ terms of an arithmetic sequence,\n$S_n = u_1 + u_2 + u_3 + \\dots + u_n$, is given by $S_n = 2n^2 + n$.\n\n- Write down the values of $S_1$ and $S_2$. <span class="marks">[2]</span>\n\n- Write down the values of $u_1$ and $u_2$. <span class="marks">[2]</span>\n\n- Find $d$, the common difference of the sequence. <span class="marks">[1]</span>\n\n- Find $u_{10}$, the tenth term of the sequence. <span class="marks">[2]</span>\n\n- Find the greatest value of $n$, for which $u_n$ is less than $100$.\n<span class="marks">[3]</span>\n\n- Find the value of $n$, for which $S_n$ is equal to $1275$.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \n  \\begin{array}{rlcrl}\n  S_1 &= 2(1)^2 + 1 &\\text{and}& S_2 &= 2(2)^2 + 2 \\\\[6pt]\n  &\\answer{= 3} &\\,\\hspace{5em}\\,& &\\answer{= 10}\n  \\end{array} \\hspace{2.2em}\n  $$\n\n- We have\n\n  $$\n  \n  \\begin{array}{rlcrl}\n  u_1 &= S_1 &\\text{and}& u_2 &= S_2 - S_1 \\\\[6pt]\n  &\\answer{= 3} &\\,\\hspace{5em}\\,& &=10-3 \\\\[6pt]\n  &&&&\\answer{= 7}\n  \\end{array}\n  $$\n\n- The common difference is\n\n  $$\n  \\begin{aligned}\n  d &= u_2 - u_1 \\\\[6pt]\n  &= 7 - 3 \\\\[6pt]\n  &\\answer{= 4}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 10$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.35em} u_{10} &= u_1 + (10-1)d \\\\[6pt]\n  &= 3 + (10-1)(4) \\\\[6pt]\n  &\\answer{= 39}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.7em} u_n &< 100 \\\\[9pt]\n  u_1 + (n-1)d &< 100 \\\\[9pt]\n  3 + (n-1)(4) &< 100 \\\\[10pt]\n  n &< 25.3 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence\nthe greatest value of $n$ such that $u_n < 100$ is\n\n  $$\n  \\begin{aligned}\n  \\answer{n = 25} \\hspace{2.3em}\\end{aligned}\n  $$\n\n- Solving the equation $S_n = 1275$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{n}{2}(2u_1 + (n-1)d) &= 1275 \\hspace{4em} \\\\[6pt]\n  \\dfrac{n}{2}(2(3) + (n-1)(4)) &= 1275 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{13.9em} \\answer{n = 25} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 26',
    content:
      'The Australian Koala Foundation estimates that there are about\n$45\\hspace{0.15em}000$ koalas left in the wild in $2019$. A year before,\nin $2018$, the population of koalas was estimated as\n$50\\hspace{0.15em}000$. Assuming the population of koalas continues to\ndecrease by the same percentage each year, find:\n\n- the exact population of koalas in $2022$; <span class="marks">[3]</span>\n\n- the number of years it will take for the koala population to reduce\nto half of its number in $2018$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have a geometric sequence with\n\n  $$\n  \\begin{aligned}\n  2018:\\hspace{0.5em} u_1 &= 50\\hspace{0.15em}000 \\\\[6pt]\n  2019:\\hspace{0.5em} u_2 &= 45\\hspace{0.15em}000\\end{aligned}\n  $$\n\n  The\ncommon ratio of the sequence is\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.1em} r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n  &= \\dfrac{45\\hspace{0.15em}000}{50\\hspace{0.15em}000} \\\\[12pt]\n  &= 0.9\\end{aligned}\n  $$\n\n  Using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 5$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.5em} 2022:\\hspace{0.5em} u_5 &= u_1r^{5-1} \\\\[6pt]\n  &= 50\\hspace{0.15em}000(0.9)^{5-1} \\\\[7pt]\n  &\\answer{= 32\\hspace{0.15em}805}\\end{aligned}\n  $$\n\n- Solving the equation $u_n = 25\\hspace{0.15em}000$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  u_1r^{n-1} &= 25\\hspace{0.15em}000 \\hspace{2em} \\\\[6pt]\n  50\\hspace{0.15em}000(0.9)^{n-1} &= 25\\hspace{0.15em}000\\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{13.5em} n \\approx 7.58 \\hspace{3em} [\\text{by using G.D.C.}] \\\\[2pt]\n  $$\n\n  Hence it will take\n$\\answer{7.58 \\text{ years}}$\nfor the koala population to reduce to half of its number in $2018$.\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 27',
    content:
      'A battalion is arranged, per row, according to an arithmetic sequence.\nThere are $24$ troops in the third row and $42$ troops in the sixth row.\n\n- Find the first term and the common difference of this arithmetic\nsequence. <span class="marks">[3]</span>\n\n\nThere are $15$ rows in the battalion.\n\n- Find the total number of troops in the battalion.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have $u_3 = 24$ and $u_6 = 42$.\nUsing the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 3$ and\n$n = 6$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.75em} u_3 &= u_1 + (3-1)d \\\\[6pt]\n  24 &= u_1 + 2d \\tag*{$(1)$}\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.75em} u_6 &= u_1 + (6-1)d \\\\[6pt]\n  42 &= u_1 + 5d \\tag*{$(2)$}\\end{aligned}\n  $$\n\n  Hence $(1)$ & $(2)$ are\nsimultaneous equations which can be solved for $u_1$ and $d$.\n  If we subtract the equation $(1)$ from the equation $(2)$ and solve\nthe resulting equation for $d$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.1em} 42-24 &= (u_1 + 5d) - (u_1 + 2d) \\\\[6pt]\n  18 &= 3d \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  \\answer{d = 6} \\hspace{4em} \\\\\n  \\end{aligned}\n  $$\n\n  [$\\text{This could have been solved using G.D.C.}$]\n  Hence, if we substitute $d = 6$ in the equation $(1)$ and solve the\nresulting equation for $u_1$, we get\n\n  $$\n  \\begin{aligned}\n  24 &= u_1 + 2(6) \\hspace{1.5em}\\end{aligned}\n  $$\n\n\n  $$\n  \\answer{u_1 = 12} \\hspace{4.5em}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 15$, $u_1 = 12$ and\n$d = 6$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.35em} S_{15} &= \\dfrac{15}{2}(2u_1 + (15-1)d) \\\\[6pt]\n  &= \\dfrac{15}{2}(2(12) + (15-1)(6)) \\\\[11pt]\n  &\\answer{= 810 \\text{ troops}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 28',
    content:
      'Towards the end of 2004, a theatre company upgraded their auditorium and\ninstalled new comfortable ergonomic chairs for the audience.\nAfter the redesign, there were $20$ seats in the first row and each\nsubsequent row had three more seats than the previous row.\n\n- If the auditorium had a total of $16$ rows, find\n  \n  - the total number of seats in the last row.\n  - the total number of seats in the auditorium. <span class="marks">[5]</span>\n\n\n\nThe auditorium reopened for performances at the start of 2005. The\naverage number of visitors per show during that year was $500$. In 2006,\nthe average number of visitors per show increased by $5\\%$.\n\n- Find the average number of visitors per show in 2006. <span class="marks">[1]</span>  \n\nThe average number of visitors per show continued to increase by $5\\%$\neach year.\n\n- Determine the first year in which the total number of visitors to a\nshow exceeded the seating capacity of the auditorium. <span class="marks">[5]</span>  \n\nThe theatre company hosts $25$ shows per year.\n\n- Determine the total number of visitors that attended the auditorium\nfrom when it opened in 2005 until the end of 2011. Round your answer\ncorrect to the nearest integer. <span class="marks">[4]</span>  \n',
    markScheme:
      '\n- \n  - The $n$th term formula for an arithmetic sequence is\n\n    $$\n    \\begin{aligned}\n    u_n=u_1+(n-1)d\\hspace{1.5cm}\\end{aligned}\n    $$\n\n    We have\n$u_1=20, n=16$, and $d=3$. Hence, we get\n\n    $$\n    \\begin{aligned}\n    u_{16} &= 20+ (16-1)(3) \\hspace{0.75cm}\\\\[8pt]\n    &\\hspace{0.3em}\\answer{= 65 \\text{ seats}}\\end{aligned}\n    $$\n\n  - The formula for the sum of $n$ terms of an arithmetic sequence\nis\n\n    $$\n    S_n=\\dfrac{n}{2}[2u_1+(n-1)d]\n    \n    $$\n\n    We have $u_1=20$, $n=16$\nand $d=3$. Hence, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{1cm} S_{16} &= \\dfrac{16}{2}[2(20)+(16-1)3]\\\\[8pt]\n    &\\hspace{0.3em}\\answer{= 680 \\text{ seats}}\\end{aligned}\n    $$\n\n\n- Increasing $500$ by $5\\%$, we get\n\n  $$\n  500 \\times 1.05\\hspace{0.7em}\\answer{= 525 \\text{ visitors}}\n  $$\n\n- The $n$th term formula for a geometric sequence is\n\n  $$\n  \\begin{aligned}\n  u_n=&u_1r^{n-1}\\end{aligned}\n  $$\n\n  We have $u_1=500$ and $r=1.05$.\nHence, an expression for the average number of visitors, $u_n$, for\na given year $n$ is\n\n  $$\n  \\begin{aligned}\n  u_{n} &=500 (1.05)^{n-1}\\end{aligned}\n  $$\n\n  The total seating\ncapacity is $680$ (part a). The graph of $u_n$ is plotted below\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1a946065-ec7c-44c2-8032-5e56a68bee01/images/ed84f08b-b4cc-4bfc-b9cd-a34744553633/f454f823cc38ef44e946be77438706a366c95060.svg)\n\n\n  From the graph, $u_n > 680$ when $n>7.3$, which corresponds to the\n$8$th year.\n  Hence, the average number of visitors will exceed the total capacity\nin  $\\answer{2012}$.\n- The formula for the sum of $n$ terms in a geometric sequence is\n\n  $$\n  S_n=\\dfrac{u_1(r^n-1)}{r-1}\n  \n  $$\n\n  We have\n$u_1=500\\times 25 = 12\\,500$, $r=1.05$ and $n=7$. Hence, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1cm} S_{7} &= \\dfrac{12\\,500(1.05^{7}-1)}{1.05-1}\\\\[8pt]\n  &\\hspace{0.3em}\\answer{= 101\\,775 \\text{ visitors}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 29',
    content:
      'The first term of an arithmetic sequence is $24$ and the common\ndifference is $16$.\n\n- Find the value of the $62$ nd term of the\nsequence. <span class="marks">[2]</span>\n\n\nThe first term of a geometric sequence is $8$. The $4$th term of the\ngeometric sequence is equal to the $13$th term of the arithmetic\nsequence given above.\n\n- Write down an equation using this information. <span class="marks">[2]</span>\n\n- Calculate the common ratio of the geometric sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have $u_1 = 24$ and $d = 16$.\nUsing the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 62$, we\nfind\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} u_{62} &= u_1 + (62-1)d \\\\[6pt]\n  &= 24 + (62-1)(16) \\\\[6pt]\n  &\\answer{= 1000}\\end{aligned}\n  $$\n\n- We have $v_1 = 8$ and $v_4 = u_{13}$.\nUsing the $n$th term formula $v_n = v_1r^{n-1}$ with $n = 4$, we\nhave\n\n  $$\n  \\begin{aligned}\n  v_4 &= v_1r^{4-1} \\hspace{1.15em} \\\\[6pt]\n  &= 8r^{4-1} \\\\[6pt]\n  &= 8r^3\\end{aligned}\n  $$\n\n  Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 13$, we\nhave\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} u_{13} &= u_1 + (13-1)d \\\\[6pt]\n  &= 24 + (13-1)(16) \\\\[6pt]\n  &= 216\\end{aligned}\n  $$\n\n  Hence we get\n\n  $$\n  \\begin{aligned}\n  v_4 = u_{13} \\hspace{2.6em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  \\answer{8r^3 = 216} \\hspace{3.05em}\\end{aligned}\n  $$\n\n- If we solve the equation $8r^3 = 216$ for $r$ using G.D.C., we\nobtain  $\\answer{r = 3}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 30',
    content:
      'Bill is planning to hike the Appalachian trail, a $3\\hspace{0.1em}600$ kilometre long walking track along the east coast of the USA.\nBill plans to hike $2.1$ kilometres on the first day, then increase his distance by $200$ metres every day, so that on day $2$ he will hike $2.3$ kilometres, on day $3$ he will hike $2.5$ kilometres and so on.\n\n- Calculate how far Bill will hike on day 90. <span class="marks">[2]</span>\n\n- Determine how many days it will take Bill to hike the entire Appalachian trail. <span class="marks">[3]</span>\n\n- Hence determine how far Bill will have to hike on the final day. <span class="marks">[1]</span>\n\n\nBill can hike at an average speed of 5 kilometres per hour.\n\n- Determine how long Bill will have to hike for on the final day.<span class="marks">[2]</span>  \n\nBill’s friend Stephen starts hiking the Appalachian trail on the same day but uses a different strategy to Bill.\nStephen will hike 1 kilometre on the first day, then increase his distance by $3\\%$ per day, so that on day 2 he will hike 1.03 kilometres, on day 3 he will hike 1.0609 kilometres and so on.\n\n- Calculate how much further Bill hikes than Stephen on day 90. <span class="marks">[3]</span>\n\n- Determine the day on which Stephen passes Bill. <span class="marks">[3]</span>\n\n- Calculate how many days earlier Stephen finishes the entire trail than Bill.   <span class="marks">[2]</span>\n\n',
    markScheme:
      "\n- Bill's progress can be modelled by an arithmetic sequence, with first term $u_1 = 2.1$, and common difference $d=0.2$. Using the formula for the $n$th term of an arithemtic sequence, we can find $u_{90}$. We have\n\n  $$\n  \\begin{align*}\n  u_n &= u_1 + (n-1)d \\\\[6pt]\n  u_{90} &= 2.1 + (90-1)(0.2) \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 19.9 \\\\[6pt]\n  &\\hspace{-5.275em}\\tcbhighmath{\\text{On day $90$, Bill hikes $19.9$ kilometres.}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We need to determine the value of $n$ so that the sum of $n$ terms of the arithmetic sequence is $3\\,600$. Using the formula for the sum of $n$ terms of an arithmetic sequence, we have\n\n  $$\n  \\begin{align*}\n  S_n &= \\dfrac{n}{2}\\left(2u_1 + (n-1)d\\right) \\\\[6pt]\n  3\\,600 &= \\dfrac{n}{2}\\left(2 (2.1) + (n-1)(0.2)\\right) \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Using the numerical solver on the G.D.C.,\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  $\\answer{\\text{It will take Bill $180$ days to hike the entire trail.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- Using the formula for the $n$th term of an arithmetic sequence, we can find $u_{180}$. We have\n\n  $$\n  \\begin{align*}\n  u_{180} &= 2.1 + (180-1)(0.2) \\\\[6pt]\n  &= 37.9 \n  \\end{align*}\n  $$\n\n  $\\answer{\\text{On the final day, Bill will have to hike $37.9$ kilometres.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- Using the relationship between speed, distance and time, we have\n\n  $$\n  \\begin{align*}\n  \\text{time} &= \\dfrac{\\text{distance}}{\\text{speed}} \\\\[6pt]\n  &= \\dfrac{37.9}{5} \\tag*{\\textbf{(M1)}} \\\\[6pt]\n  &= 7.58 \\text{ hours}\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{On the final day, Bill will have to hike for $7.58$ hours.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- Stephen's progress can be modelled by a geometric sequence, with first term $u_1 = 1$, and common ratio $r=1.03$. Using the formula for the $n$th term of a geometric sequence, we can find $u_{90}$, then subtract this from $19.9$ (the distance Bill hiked on day $90$, our answer to part (a)). We have\n\n  $$\n  \\begin{align*}\n  u_n &= u_1\\,r^{n-1} \\\\[6pt]\n  u_{90} &= 1.03^{89} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  \\text{difference} &= 19.9 - 1.03^{89} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 6.016...\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{On day 90, Bill hikes approximately $6.02$ kilometres further than Stephen.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- We need to find the value of $n$ for which the sum of the arithmetic sequence (Bill's total progress) is equal to the sum of the geometric sequence (Stephen's total progress). This is shown as follows:\n\n  $$\n  \\begin{align*}\n  \\dfrac{n}{2}\\left(2(2.1) + (n-1)(0.2)\\right) &= \\dfrac{1.03^n-1}{1.03-1} \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  On the G.D.C., we can sketch the graphs of $y = \\frac{x}{2}\\left(2(2.1) + (x-1)(0.2)\\right)$ and $y = \\frac{1.03^x-1}{1.03-1}$, and find the point of intersection. This is shown on the following axes:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6107303c-946f-43f5-aa18-bf336395b043/images/d7ca50e5-958f-4c56-8a3f-9ca6db939868/1195a.JPG)\n\n\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  In context, this tells us that Stephen catches up to Bill after exactly $145.1$ days. At this point, both have hiked $2\\,395$ kilometres.\n  We are asked for the $\\textbf{day}$ on which Stephen catches up. At the end of day $145$, Stephen is still slightly behind (the green curve is below the red curve). At the end of day $146$, Stephen is now slightly ahead (the green curve is above the red curve). Therefore,\n\n  $$\n  \\begin{align*}\n  \\tcbhighmath{\\text{Stephen catches up to Bill on day $146$.}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Using the graph on our G.D.C. from part (f), we can identify the $x$ values when $y = 3\\,600$. This will tell us when each hiker completes the trail. We do already know from part (b) that Bill takes $180$ days.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6107303c-946f-43f5-aa18-bf336395b043/images/0535464e-6e7b-4452-b79e-3b9d9e85f70e/1195b.JPG)\n\n\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  We need the difference between the two $x$ values, because in context, Stephen has taken a total of $159$ days, and Bill has taken $180$ days.\n  $\\answer{\\text{Stephen finishes the entire trail $21$ days earlier than Bill.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '16',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 31',
    content:
      'A ball is dropped from the top of the Eiffel Tower, $324$ metres from\nthe ground. The ball falls a distance of $4.9$ metres during the first\nsecond, $14.7$ metres during the next second, $24.5$ metres during the\nthird second, and so on. The distances that the ball falls each second\nform an arithmetic sequence.\n\n- \n  - Find $d$, the common difference of the sequence.\n  - Find $u_5$, the fifth term of the sequence. <span class="marks">[2]</span>\n\n\n- Find $S_6$, the sum of the first $6$ terms of the sequence.\n<span class="marks">[2]</span>\n\n- Find the time the ball will take to reach the ground. Give your\nanswer in seconds correct to one decimal place. <span class="marks">[3]</span>\n\n\nAssuming the ball is dropped another time from a much higher height than\nof the Eiffel Tower,\n\n- find the distance the ball travels from the start of the\n$10$th second to the end of the $15$th second. <span class="marks">[3]</span>\n\n\nThe Eiffel Tower in Paris, France was opened in $1889$, and $1.9$\nmillion visitors ascended it during that first year. The number of\npeople who visited the tower the following year ($1890$) was $2$\nmillion.\n\n- Calculate the percentage increase in the number of visitors\nfrom $1889$ to $1890$. Give your answer correct to one decimal\nplace. <span class="marks">[2]</span>\n\n- Use your answer to part (e) to estimate the number of\nvisitors in $1900$, assuming that the number of visitors continues\nto increase at the same percentage rate. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - We have $u_1 = 4.9$ and $u_2 = 14.7$.\nHence the common difference is\n\n    $$\n    \\begin{aligned}\n    d &= u_2 - u_1 \\hspace{1.4em} \\\\[6pt]\n    &= 14.7 - 4.9 \\\\[6pt]\n    &\\answer{= 9.8\\hspace{0.25em}\\text{m}}\\end{aligned}\n    $$\n\n  - Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 5$,\nwe find\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.4em} u_5 &= u_1 + (5-1)d \\\\[6pt]\n    &= 4.9 + (5-1)(9.8) \\\\[6pt]\n    &\\answer{= 44.1\\hspace{0.25em}\\text{m}}\\end{aligned}\n    $$\n\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 6$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.4em} S_6 &= \\dfrac{6}{2}(2u_1 + (6-1)d) \\\\[4pt]\n  &= \\dfrac{6}{2}(2(4.9) + (6-1)(9.8)) \\\\[9pt]\n  &\\answer{= 176\\hspace{0.25em}\\text{m}}\\end{aligned}\n  $$\n\n- Solving the equation $S_n = 324$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{n}{2}(2u_1 + (n-1)d) &= 324 \\\\[3pt]\n  \\dfrac{n}{2}(2(4.9) + (n-1)(9.8)) &= 324 \\\\[6pt]\n  n &\\approx 8.13 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.45em} \\answer{n \\approx 8.1\\text{ seconds}}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 9$ and $n=15$, we get\n\n  $$\n  \\begin{aligned}\n  S_{15} - S_9 &= \\bigg[\\dfrac{15}{2}(2u_1 + (15-1)d)\\bigg] - \\bigg[\\dfrac{9}{2}(2u_1 + (9-1)d)\\bigg] \\\\[6pt]\n  &= \\bigg[\\dfrac{15}{2}(2(4.9) + (15-1)(9.8))\\bigg] - \\bigg[\\dfrac{9}{2}(2(4.9) + (9-1)(9.8))\\bigg] \\\\[11pt]\n  &\\answer{= 705.6\\hspace{0.25em}\\text{m}}\\end{aligned}\n  $$\n\n- Using the percentage increase formula\n$\\%\\hspace{0.2em}\\textbf{increase} = \\dfrac{v_\\mathrm{E}-v_\\mathrm{S}}{v_\\mathrm{S}}\\times 100\\hspace{0.05em}\\%$\nwith $v_\\mathrm{S} = 1.9$ and $v_\\mathrm{E} = 2.0$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\%\\hspace{0.2em}\\textbf{increase} &= \\dfrac{2.0-1.9}{1.9}\\times100\\hspace{0.05em}\\% \\hspace{2em} \\\\[6pt]\n  &\\answer{\\approx 5.3\\hspace{0.05em}\\%}\n  \\end{aligned}\n  $$\n\n- We have a geometric sequence with the first term $v_1 = 1.9$ million\nand the common ratio $r =  1.0526$.\n  Hence, using the $n$th term formula $v_n = v_1r^{n-1}$ with\n$n = 12$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.8em} v_{12} &= v_1r^{12-1} \\\\[6pt]\n  &= (1.9\\text{ million})(1.0526)^{12-1} \\\\[7pt]\n  &\\answer{= 3.34 \\text{ million}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 32',
    content:
      'On September 1st, an orchard commences the process of harvesting $36$ hectares of apple trees. At the end of September 4th, there were $30$ hectares remaining to be harvested, and at the end of September 8th, there were $24$ hectares remaining. Assuming that the number of hectares harvested each day is constant, the total number of hectares remaining to be harvested can be described by an arithmetic sequence.\n\n- Find the number of hectares of apple trees that are harvested each day. <span class="marks">[3]</span>\n\n- Determine the number of hectares remaining to be harvested at the end of September 1st. <span class="marks">[1]</span>\n\n- Determine the date on which the harvest will be complete. <span class="marks">[2]</span>\n\n\nIn 2021 the orchard sold their apple crop for $\\$220\\,000$. It is expected that the selling price will then increase by $3.2\\%$ annually for the next $7$ years.\n\n- Determine the amount of money the orchard will earn for their crop in 2026. Round your answer to the nearest dollar. <span class="marks">[3]</span>\n\n- \n  - Find the value of $\\displaystyle\\sum_{n=1}^8 \\big(220\\hspace{0.15em}000 \\times 1.032^{n-1}\\big)$. Round your answer to the nearest integer.\n  - Describe, in context, what the value in part (e) (i) represents. <span class="marks">[3]</span>\n\n\n- Comment on whether it is appropriate to model this situation in terms of a geometric sequence. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- The formula for the $n$th term of an arithmetic sequence is\n\n  $$\n  \\begin{align*}\n  u_n &= u_1+(n-1)d\\\\[-12pt]\n  \\end{align*}\n  $$\n\n  Taking $u_1$ as the number of hectares remaining to be harvested at the end of September 1st, we have $u_4=30$, and $u_8=24$. Hence, we get\n\n  $$\n  \\begin{align}\n  u_1 + 3d &= 30 \\\\[11pt]\n  u_1 + 7d &= 24 \\\\[-12pt]  \\nonumber\n  \\end{align}\n  $$\n\n  Hence subtracting (1) from (2), we have\n\n  $$\n  \\begin{align*}\n  4d &= -6 \\\\[8pt]\n  d &= -1.5 \\\\[-12pt]\n  \\end{align*}\n  $$\n\n  Therefore, $\\answer{\\text{the orchard harvests $1.5$ hectares of apple trees per day.}}$\n- There are 36 hectares of apple trees remaining to be harvested at the start of September 1st, and from part (a) we know that they are being harvested at 1.5 hectares per day.\n  Therefore, at the end of September 1st, there are $\\answer{\\text{$34.5$ hectares}}\\,$remaining to be harvested.\n- We must find the value of $n$ such that $u_n = 0$. We have $u_1 = 34.5$ and $d = -1.5$. Therefore, using the formula for the $n$th term of an arithmetic sequence, we have\n\n  $$\n  \\begin{align*}\n  34.5 + (n-1)(-1.5) &= 0\\\\[7pt]\n  34.5 -1.5n +1.5 &= 0\\\\[11pt]\n  36 - 1.5n &= 0 \\\\[11pt]\n  -1.5n &= -36 \\\\[11pt]\n  n &= \\dfrac{-36}{-1.5}\\\\[11pt]\n  n &= 24\n  \\end{align*}\n  $$\n\n  Therefore, $\\answer{\\text{the harvest will be complete at the end of September 24th.}}$\n- From $2021$ until $2028$, the selling price of the apple crop can be modelled by a geometric sequence with $u_1 = 220\\hspace{0.15em}000$ and $r = 1.032$. The selling price in $2026$ will be term $u_6$ in this sequence.\n  Using the formula for the $n$th term in a geometric sequence, we have\n\n  $$\n  \\begin{align*}\n  u_n &= u_1 \\times r^{n-1} \\\\[11pt]\n  u_6 &= 220\\hspace{0.15em}000 \\left(1.032\\right)^{6-1} \\\\[11pt]\n  &= 257526\\\\[-12pt]\n  \\end{align*}\n  $$\n\n  In $2026$, the orchard will earn $\\answer{257\\,526}\\,$ for their crop.\n- \n  - Using the G.D.C., we obtain\n\n    $$\n    \\begin{align*}\n    \\sum_{n=1}^8 220\\hspace{0.15em}000 \\times 1.032^{n-1} \\  \\answer{\\approx 1\\,970\\,253}\\\\[-12pt]\n    \\end{align*}\n    $$\n\n  - $\\answer{\\text{The total amount earned for the apple crop from 2021 to 2028}}$\n\n- The model is appropriate as long as:\n  $\\answer{\\text{the selling price increases at a similar rate annually.}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '13',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 33',
    content:
      'A hotel is built so that the highest rooms have an outstanding view of a local tourist attraction. The hotel has 26 floors, and the number of rooms per floor decreases in a regular pattern by a fixed amount of $d$ rooms. There are $96$ rooms on the third floor and $84$ on the sixth floor.\n\n- Write down an equation, in terms of $u_1$ and $d$, for the number of rooms on\n  \n  - the third floor.\n  - the sixth floor.<span class="marks">[2]</span>\n\n\n- Hence find the value of $u_1$ and $d$.<span class="marks">[3]</span>\n\n- Calculate the total number of rooms in the hotel. Give your answer to the nearest whole number.<span class="marks">[2]</span>\n\n\nThe cost of booking a room increases the higher the floor on which the room is located. The price of booking a room on the first floor is $\\$ 98$ dollars and the price increases by $5 \\%$ per floor. Thus the price for booking a room on the second floor is $\\$102.90$ and $\\$108.05$ on the third floor, and so on.\n\n- Find the price of booking a room on the eighth floor. Give your answer to two decimal places.<span class="marks">[2]</span>\n\n- Determine the floor at which the price of booking a room first increases above $\\$200$.<span class="marks">[3]</span>\n\n- Calculate the total revenue for the hotel if three rooms on each of the 26 floors are booked. Give your answer to the nearest dollar.<span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- The $n$th term of an arithmetic sequence can be found by $u_n=u_1+(n-1)d$. Hence, we get\n  \n  - $\\answer{u_1+2d=96}$\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n  - $\\answer{u_1+5d=84}$\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n\n- Using the equations we found in part (a), we get\n\n  $$\n  \\left\\{\\begin{array}{lcl}\n  u_1+2d=96 \\\\[8pt]\n  u_1+5d=84\n  \\end{array}\\right. \\\\[4pt]\n  $$\n\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  Using G.D.C. to solve, we get $\\answer{u_1=104}$ and $\\answer{d=-4}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A2}}\t\n  \\end{aligned}\n  $$\n\n- Using the formula for the sum of terms of an arithmetic sequence, we get\n\n  $$\n  \\begin{align*}\n  S_{n} \n  &= \\dfrac{n}{2}(2u_1+(n-1)d)\\\\[6pt]\n  S_{26} &= \\dfrac{26}{2}(2(104)+(25)(-4))\\tag*{\\textbf{(M1)}}\\\\[8pt]\n  &\\hspace{0em}\\tcbhighmath{= 1\\,404} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Using the formula for the $n$th term in a geometric sequence, we get\n\n  $$\n  \\begin{align*}\n  u_n &= u_1r^{n-1} \\\\[8pt]\n  u_8 &= 98(1.05)^7 \\tag*{\\textbf{(M1)}}\\\\[8pt]\n  &= 137.895... \\\\[8pt]\n  &\\hspace{0em}\\tcbhighmath{=\\text{\\$}137.90} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We can form an inequality using the formula for the $n$th term in a geometric sequence.\n\n  $$\n  \\begin{align*}\n  98(1.05)^{n-1} &> 200 \n  \\end{align*}\n  $$\n\n  Using the numerical solver, we can determine the value of $n$ for which both sides are equal, and then interpret our answer, given that $n$ must be a positive integer.\n\n  $$\n  \\begin{align*}\n  98(1.05)^{n-1} &= 200 \\tag*{\\textbf{(M1)}}\\\\[8pt]\n  n &= 15.62... \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  When $n=15$, $98(1.05)^{14}=194.03$.\n  When $n=16$, $98(1.05)^{15}=203.73$.\n  Therefore, booking first increases above $200 on the $\\answer{16\\text{th floor}.}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- The sum of terms in a geometric sequence can be found by $s_n=\\dfrac{u_1(1-r^n)}{1-r}$. Hence, the revenue for the hotel of having 1 room booked on each floor is given by\n\n  $$\n  \\begin{align*}\n  s_{26} &=\\dfrac{98(1-1.05^{26})}{1-1.05} \\tag*{\\textbf{(M1)}}\\\\[7pt]\n  &= 5\\,009.118...\\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Thus, the income for 3 rooms booked on each floor can therefore be calculated by\n\n  $$\n  \\begin{align*}\n  3 \\times s_{26} &= 3 \\times 5\\,009.118... \\tag*{\\textbf{(M1)}}\\\\[9pt]\n  &= 15\\,027.35...\\\\[9pt]\n  &\\hspace{0em}\\tcbhighmath{= \\text{\\$}15\\,027} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '16',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 34',
    content:
      'The number of seats in an auditorium follows a regular pattern where the\nfirst row has $u_1$ seats, and the amount increases by the same amount,\n$d$, each row. In the fifth row, there are $62$ seats and in the\nthirteenth row there are $86$ seats.\n\n- Write down an equation, in terms of $u_1$ and $d$, for the amount of\nseats\n  \n  - in the fifth row.\n  - in the thirteenth row.<span class="marks">[2]</span>\n\n\n- Find the value of $u_1$ and $d$.<span class="marks">[2]</span>\n\n- Calculate the total number of seats if the auditorium has 20\nrows.<span class="marks">[3]</span>\n\n\nThe cost of the ticket for a musical held at the auditorium is inversely\nproportional to the seat\'s row. The price for a seat in the first row is\n$120 dollars, and the price decreases $3\\%$ each row. Thus, the value\nof the ticket for seats in the second row is $116.40 and $112.91 in\nthe third one, etc.\n\n- \n  - Find the price of the ticket for a seat in the fifth row,\nrounding your answer to two decimal places.\n  - Find the row of the seat at which the price of a ticket first\nfalls below $70.\n  - Find the total revenue the auditorium generates by tickets sales\nif 40 seats in each of the 20 rows are sold. Give your answer\nrounded to the nearest dollar.<span class="marks">[9]</span>\n\n\n',
    markScheme:
      '\n- The $n$th term of an arithmetic sequence can be found by\n$u_n=u_1+(n-1)d$. Hence, we get\n  \n  - $\\answer{u_5=u_1+4d}$\n  - $\\answer{u_{13}=u_1+12d}$\n\n- Substituting the values of $u_5=62$ and $u_{13}=86$ into the\nequations found in part (a), we get\n\n  $$\n  \\begin{cases}\n  u_1+4d = 62 \\\\\n  u_1+12d= 86\n  \\end{cases}\n  $$\n\n  Using G.D.C. to solve, we get\n$\\answer{u_1=50}$\n$\\text{ and }\\answer{d=3}$\n- Using the formula for the sum of terms of an arithmetic sequence, we\nget\n\n  $$\n  \\begin{aligned}\n     S_{n} \n     &= \\dfrac{n}{2}(2u_1+(n-1)d)\\\\[6pt]\n     S_{20} &= \\dfrac{20}{2}(2(50)+(19)3)\\\\[8pt]\n     &\\hspace{0.3em}\\answer{= 1570}\\end{aligned}\n  $$\n\n- \n  - Let $p_n$ be the price of the ticket in the $n$-th row. Using\nthe formula for the $n$-th term in a geometric sequence, we get\n\n    $$\n    \\begin{aligned}\n        p_n &= u_1r^{n-1} \\\\[7pt]\n        p_5 &= 120(0.97)^4 \\\\[8pt]\n        &\\hspace{0.3em}\\answer{=\\text{\\$}106.24}\\end{aligned}\n    $$\n\n  - Solving for the nearest integer the equation for the $n$-th\nterm, we get\n\n    $$\n        \\begin{aligned}\n        70 &= 120(0.97)^{n-1} \\\\[7pt]\n        n &\\approx 18.70\\end{aligned}\n    $$\n\n    Therefore, the price of a\nticket first falls below $70 in the\n$\\answer{19\\text{th row}}$.\n  - The sum of terms in a geometric sequence can be found by\n$s_n=\\dfrac{u_1(1-r^n)}{1-r}$. Hence, 1 ticket sold in each row\ncan calculated by\n\n    $$\n        \\begin{aligned}\n        s_{20} &=\\dfrac{120(1-0.97^{20})}{1-0.97} \\\\[7pt]\n        &\\approx 1824.82\\end{aligned}\n    $$\n\n    40 tickets sold in each row can therefore be calculated by\n\n    $$\n        \\begin{aligned}\n        40 \\times s_{20} &=40 \\times 1824.82 \\\\[9pt]\n        &\\hspace{0.3em}\\answer{\\text{\\$}72\\text{,}993}\\end{aligned}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '16',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 35',
    content:
      "Two college students, David and Lisa, decide to invest money they have\nsaved from working part-time jobs. David's investment strategy results\nin an increase of his investment amount by $\\$ 1\\,000$ each year. Lisa's\ninvestment strategy results in her investment amount increasing by\n$5 \\%$ each year.\nAt the start of the second year of investing, David's total investment\namount is $\\$21\\,000$ and Lisa's is $\\$11\\,655$.\n\n- Calculate\n  \n  - the original amount David invested.\n  - the original amount Lisa invested.<span class=\"marks\">[4]</span>\n\n\n\nDuring a certain year, $n$, Lisa's investment amount becomes larger than\nDavid's amount for the first time.\n\n- Find the value of $n$. <span class=\"marks\">[3]</span>  \n",
    markScheme:
      "\n- \n  - Using the $n$th term formula for an arithmetic sequence with\n$u_2=21\\,000$, $n=2$, and $d=1\\,000$, we get\n\n    $$\n    \\begin{aligned}\n    u_n &= u_1+(n-1)d\\hspace{0.75cm}\\\\[6pt]\n    21\\,000 &= u_1+ (2-1)(1\\,000) \\hspace{0.75cm}\\\\[6pt]\n    21\\,000  &= u_1+ 1\\,000 \\hspace{0.75cm}\\\\[8pt]\n    &\\hspace{-0.5em}\\answer{u_1 = \\$20\\,000}\\end{aligned}\n    $$\n\n  - Using the $n$th term formula for a geometric sequence with\n$v_2 = 11\\,655$, $n=2$, and $r=1.05$, we get\n\n    $$\n    \\begin{aligned}\n    v_n&=v_1r^{n-1}\\hspace{0.75cm}\\\\[6pt]\n    11\\,655 &=v_1 (1.05)^{2-1}\\hspace{0.75cm}\\\\[6pt]\n    11\\,655&=v_1(1.05) \\\\[6pt]\n    &\\hspace{-0.5em}\\answer{v_1= \\$ 11\\,100}\\end{aligned}\n    $$\n\n\n- David's investment amount at the start of the $n$th year can be\nexpressed as\n\n  $$\n  \\begin{aligned}\n  u_n &= u_1+(n-1)d\\nonumber\\\\[6pt]\n  &= 20\\,000+(n-1)1\\,000\\nonumber\\\\[6pt]\n  &=1\\,000n+19\\,000\\nonumber\\end{aligned}\n  $$\n\n  Lisa's investment amount at the start of the $n$th year can be\nexpressed as\n\n  $$\n  \\begin{aligned}\n  v_n &= v_1r^{n-1}\\nonumber\\hspace{1.3cm}\\\\[6pt]\n  &= 11\\,100(1.05)^{n-1}\\nonumber\\end{aligned}\n  $$\n\n  Both investment amounts are plotted on the graph below, for a given\nstart of year $n$\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/eaf9f497-ddf1-40c8-9c21-b0fc2e24b7f6/images/c286e305-85d9-4285-9e32-7a4537c9f8e1/8d89268e496fd951a9f86ddd8871c22f623a5d88.svg)\n\n\n  Form the graph, $11\\,100(1.05)^{n-1} > 1\\,000n+19\\,000$ when\n$n > 32.4$.\n  Hence, Lisa's amount will become larger than David's during year $32$.\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 36',
    content:
      'Georgia is on vacation in Costa Rica. She is in a hot air balloon over a\nlush jungle in Muelle.\nWhen she leans forward to see the treetops, she accidentally drops her\npurse. The purse falls down a distance of $4$ metres during the first\nsecond, $12$ metres during the next second, $20$ metres during the third\nsecond and continues in this way. The distances that the purse falls\nduring each second forms an arithmetic sequence.\n\n- \n  - Write down the common difference, $d$, of this arithmetic\nsequence.\n  - Write down the distance the purse falls during the fourth\nsecond. <span class="marks">[2]</span>\n\n\n- Calculate the distance the purse falls during the $13$th second.\n<span class="marks">[2]</span>\n\n- Calculate the total distance the purse falls in the first $13$\nseconds. <span class="marks">[2]</span>\n\n\nGeorgia drops the purse from a height of $1250$ metres above the ground.\n\n- Calculate the time, to the nearest second, the purse will\ntake to reach\nthe ground. <span class="marks">[3]</span>\n\n\nGeorgia visits a national park in Muelle. It is opened at the start of\n$2019$ and in the first year there were $20\\hspace{0.15em}000$ visitors.\nThe number of people who visit the national park is expected to increase\nby $8\\hspace{0.1em}\\%$ each year.\n\n- Calculate the number of people expected to visit the\nnational park in $2020$. <span class="marks">[2]</span>\n\n- Calculate the total number of people expected to visit the\nnational park by the end of $2028$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - We have $u_1 = 4$ and $u_2 = 12$.\nHence the common difference is\n\n    $$\n    \\begin{aligned}\n    d &= u_2 - u_1 \\hspace{2.2em} \\\\[6pt]\n    &= 12 - 4 \\\\[6pt]\n    &\\answer{= 8}\\end{aligned}\n    $$\n\n  - Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 4$,\nwe get\n\n    $$\n    \\begin{aligned}\n    u_4 &= u_1 + (4-1)d \\\\[6pt]\n    &= 4 + (4-1)(8) \\\\[6pt]\n    &\\answer{= 28\\hspace{0.25em}\\text{m}}\\end{aligned}\n    $$\n\n\n- Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 13$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.35em} u_{13} &= u_1 + (13-1)d \\\\[6pt]\n  &= 4 + (13-1)(8) \\\\[6pt]\n  &\\answer{= 100\\hspace{0.25em}\\text{m}}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 13$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.6em} S_{13} &= \\dfrac{13}{2}(2u_1 + (13-1)d) \\\\[6pt]\n  &= \\dfrac{13}{2}(2(4) + (13-1)(8)) \\\\[12pt]\n  &\\answer{= 676\\hspace{0.25em}\\text{m}}\\end{aligned}\n  $$\n\n- Solving the equation $S_n = 1250$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{n}{2}(2u_1 + (n-1)d) &= 1250 \\\\[6pt]\n  \\dfrac{n}{2}(2(4) + (n-1)(8)) &= 1250 \\\\[9pt]\n  n &\\approx 17.7 \\hspace{3em} [\\text{by using G.D.C.}] \\hspace{2.2em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  \\answer{n \\approx 18\\text{ seconds}} \\hspace{1.6em}\\end{aligned}\n  $$\n\n- We have a geometric sequence with the first term\n$v_1 = 20\\hspace{0.15em}000$ and the common ratio $r = 1.08$.\n  Hence, using the $n$th term formula $v_n = v_1r^{n-1}$ with $n = 2$,\nwe get\n\n  $$\n  \\begin{aligned}\n  v_2 &= v_1r^{2-1} \\\\[6pt]\n  &= 20\\hspace{0.15em}000(1.08)^{2-1} \\\\[7pt]\n  &\\answer{= 21\\hspace{0.15em}600}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{v_1(r^n-1)}{r-1}$\nwith $n = 10$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.7em} S_{10} &= \\dfrac{v_1(r^{10}-1)}{r-1} \\\\[6pt]\n  &= \\dfrac{20\\hspace{0.15em}000((1.08)^{10}-1)}{1.08-1} \\\\[12pt]\n  &\\approx 289\\hspace{0.15em}731 \\\\[16pt]\n  &\\answer{\\approx 290\\hspace{0.15em}000}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 37',
    content:
      'A bouncy ball is dropped out of a second story classroom window,  $5\\,$m off the ground. Every time the ball hits the ground it bounces $89\\,$% of its previous height.\n\n- Find the height the ball reaches after the $2$nd bounce. <span class="marks">[2]</span>\n\n- Find the total distance the ball has travelled when it hits the ground for the $5$th time. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The height of the ball after each bounce follows a geometric sequence, with first term $u_1 = 5(0.89)$ and common ratio $r = 0.89$.\n  Using the formula for the $n$th term of a geometric sequence, we have\n\n  $$\n  \\begin{align*}\n  u_{2} &= u_1r^{2-1} \\\\[6pt]\n  &= [5(0.89)](0.89)^1 \\\\[7pt]\n  &\\hspace{0.275em}\\tcbhighmath{\\approx 3.96\\text{ m}}\n  \\end{align*}\n  $$\n\n- The total distance travelled by the ball is the sum of two separate geometric sequences.\n  The first, when the ball is travelling downwards, has first term $u_1=5$ and common ratio $r=0.89$. When the ball hits the ground for the $5$th time, it has travelled downwards a distance that is equivalent to the sum of the first five terms of this sequence. We have\n\n  $$\n  \\begin{align*}\n  S_n &= \\dfrac{u_1(1-r^n)}{1-r} \\\\[6pt]\n  S_5 &= \\dfrac{5(1-0.89^5)}{1-0.89} \\\\[7pt]\n  &\\approx 20.07 \\,\\text{m}\n  \\end{align*}\n  $$\n\n  The second, when the ball is travelling upwards, has first term $u_1=5(0.89)$ and common ratio $r=0.89$. When the ball hits the ground for the $5$th time, it has travelled upwards a distance that is equivalent to the sum of the first four terms of this sequence. We have\n\n  $$\n  \\begin{align*}\n  S_n &= \\dfrac{u_1(1-r^n)}{1-r} \\\\[6pt]\n  S_4 &= \\dfrac{5(0.89)(1-0.89^4)}{1-0.89} \\\\[7pt]\n  &\\approx 15.07 \\,\\text{m}\n  \\end{align*}\n  $$\n\n  The total distance travelled is given by $20.07 + 15.07$.\n  The total distance travelled by the ball is approximately $\\hspace{0.525em}\\tcbhighmath{35.1\\,\\text{metres}}$.\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 38',
    content:
      'Aoife and Barack have both started a delivery job, where they are paid the same amount daily to make a certain number of deliveries.\nOn the first day, both Aoife and Barack take 240 minutes to make their deliveries.\nAoife plans to reduce the amount of time the deliveries take by 2 minutes per day.\nBarack plans to reduce the amount of time the deliveries take by $1\\%$ per day.\nAssuming both Aoife and Barack are able to follow this plan indefinitely, determine the first day on which Aoife will complete her deliveries faster than Barack.',
    markScheme:
      "The time Aoife takes daily to complete her deliveries follows an $\\textbf{arithmetic sequence}$, with first term $u_1=240$ and common difference $d=-2$.\nThe time Barack takes daily to complete his deliveries follows a $\\textbf{geometric sequence}$ with first term $v_1=240$ and common ratio $r$.\nGiven that Barack is $\\textit{reducing}$ his time by $1\\%$ per day, this means that each day his deliveries take $99\\%$ of the time of the day before. Therefore $r=0.99$.\nWe are looking for the first day that Aoife will complete her deliveries faster than Barack. Let's call this day $n$.\nWe are therfore looking for the smallest value of $n$ such that $u_n < v_n$.\nUsing the formula for the $n$th term of an arithmetic sequence, we have\n\n$$\n\\begin{align*}\n    u_n &= u_1 + (n-1)d \\\\[6pt]\n    &= 240 + (n-1)(-2) \\\\[6pt]\n    &= 240 -2n + 2 \\\\[6pt]\n    u_n &= 242 - 2n \\tag*{\\textbf{(A1)}}\n\\end{align*}\n$$\n\nUsing the formula for the $n$th term of a geometric sequence, we have\n\n$$\n\\begin{align*}\n    v_n &= v_1\\,r^{n-1} \\\\[6pt]\n    &= 240(0.99)^{n-1} \\tag*{\\textbf{(A1)}}\n\\end{align*}\n$$\n\nHence we are trying determine the smallest value of $n$ so that\n\n$$\n\\begin{align*}\n    242 - 2n < 240(0.99)^{n-1} \\tag*{\\textbf{(A1)}}\n\\end{align*}\n$$\n\nTo do this, we will sketch and interpret the graphs of $y=242-2x$ and $y=240(0.99)^{x-1}$:\n\n$$\n\\begin{aligned}\n\\tag*{\\textbf{(M1)}}\n\\end{aligned}\n$$\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/5abb56ff-0206-43c0-b41f-d8df69082b2f/images/0aeaebcb-92b3-42b0-a61a-20bb9a72a750/1179.JPG)\n\n\nWe see that the graphs intersect at $(39.52,163.0)$.\n\n$$\n\\begin{aligned}\n\\tag*{\\textbf{(A1)}}\n\\end{aligned}\n$$\n\nLet's look at the nearest whole numbers to the left and right of $x=39.52$.\nWhen $x=39$, the red line is slightly $\\textbf{above}$ the green curve.\nWhen $x=40$, now the red line is slightly $\\textbf{below}$ the green curve.\nIn the context of our question, this means that on day 39, Barack completed his deliveries slightly quicker than Aoife.\nOn day 40, Aoife completed her deliveries slightly quicker than Barack, and this was the first time it happened.\n$\\tcbhighmath{\\text{Day 40 is the first day on which Aoife completes her deliveries faster than Barack.}}$\n\n$$\n\\begin{aligned}\n\\tag*{\\textbf{A1}}\n\\end{aligned}\n$$\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 39',
    content:
      'Let $u_n = 4n+1$, for $n \\in \\mathbb{Z}^+$.\n\n- \n  - Using sigma notation, write down an expression for\n$u_1 + u_2 + u_3 + \\dots + u_{20}$.\n  - Find the value of the sum from part (a) (i). <span class="marks">[4]</span>\n\n\n\nA geometric sequence is defined by $v_n = 9\\times 4^{n-1}$, for\n$n \\in \\mathbb{Z}^+$.\n\n- Find the value of the sum of the geometric series\n$\\displaystyle\\sum_{k = 1}^5\\hspace{0.1em}v_k$.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- \n  - Using sigma notation, we have\n\n    $$\n    \\begin{aligned}\n    u_1 + u_2 + u_3 + \\dots + u_{10} &= \\sum_{k=1}^{20} u_k \\\\[6pt]\n    &\\answer{= \\displaystyle\\sum_{k=1}^{20} (4k+1)} \\hspace{8em}\\end{aligned}\n    $$\n\n  - If we rewrite $u_n = 4n+1$ in the form $u_n = u_1 + (n-1)d$, we\nhave\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.5em} u_n &= 5 + (n-1)(4)\\end{aligned}\n    $$\n\n    Hence $u_n$ is\nan arithmetic sequence with the first term $u_1 = 5$ and\nthe common difference $d = 4$.\n    Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with\n$n=20$\n    we find\n\n    $$\n    \\begin{aligned}\n    \\sum_{k=1}^{20} (4k+1) &= S_{20} \\\\[3pt]\n    &= \\dfrac{20}{2}(2u_1 + (20-1)d) \\\\[9pt]\n    &= \\dfrac{20}{2}(2(5) + (20-1)(4)) \\\\[14pt]\n    &\\answer{= 860}\\end{aligned}\n    $$\n\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.3em} v_1 &= 9 \\hspace{3em} [\\text{the first term}] \\\\[9pt]\n  r &= 4 \\hspace{3em} [\\text{the common ratio}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{v_1(r^n-1)}{r-1}$ with\n$n=5$, we get\n\n  $$\n  \\begin{aligned}\n  \\sum_{k = 1}^5 9\\times 4^{k-1} &= S_5 \\\\[3pt]\n  &= \\dfrac{v_1(r^5-1)}{r-1} \\hspace{3.4em}  \\\\[9pt]\n  &= \\dfrac{9\\hspace{0.05em}(4^5-1)}{4-1} \\\\[15pt]\n  &\\answer{= 3069}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 40',
    content:
      'Landmarks are placed along the road from London to Edinburgh and the\ndistance between each landmark is $16.1$ km. The\nfirst milestone placed on the road is $124.7$ km\nfrom London, and the last milestone is near Edinburgh. The length of the\nroad from London to Edinburgh is $667.1$ km.\n\n- Find the distance between the fifth milestone and London.\n<span class="marks">[3]</span>\n\n- Determine how many milestones there are along the road. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have an arithmetic sequence with $u_1 = 124.7$ and $d = 16.1$.\nHence, using the $n$th term formula $u_n = u_1 + (n-1)d$ with\n$n = 5$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.6em} u_5 &= u_1 + (5-1)d \\\\[6pt]\n  &= 124.7 + (5-1)(16.1) \\\\[6pt]\n  &= 189.1\\end{aligned}\n  $$\n\n  Hence the the distance between the fifth\nmilestone and London is\n$\\answer{189\\hspace{0.25em}\\text{km}}$\n- If we solve the inequality $u_n < 667.1$ for the largest value of\n$n$, we obtain\n\n  $$\n  \\begin{aligned}\n  u_1 + (n-1)d &< 667.1 \\\\[6pt]\n  124.7 + (n-1)(16.1) &< 667.1 \\\\[6pt]\n  n &< 34.7 \\hspace{3em} [\\text{by using G.D.C.}] \\hspace{1em} \\\\[6pt]\n  n &= 34 \\\\\n  \\end{aligned}\n  $$\n\n  Hence there are\n$\\answer{34}$\nmilestones along the road.\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 41',
    content:
      'Let $u_n = 5n-1$, for $n \\in \\mathbb{Z}^+$.\n\n- \n  - Using sigma notation, write down an expression for\n$u_1 + u_2 + u_3 + \\dots + u_{10}$.\n  - Find the value of the sum from part (a) (i). <span class="marks">[4]</span>\n\n\n\nA geometric sequence is defined by $v_n = 5\\times 2^{n-1}$, for\n$n \\in \\mathbb{Z}^+$.\n\n- Find the value of the sum of the geometric series\n$\\displaystyle\\sum_{k = 1}^6\\hspace{0.1em}v_k$.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- \n  - Using sigma notation, we have\n\n    $$\n    \\begin{aligned}\n    u_1 + u_2 + u_3 + \\dots + u_{10} &= \\sum_{k=1}^{10} u_k \\\\[6pt]\n    &\\answer{= \\displaystyle\\sum_{k=1}^{10} (5k-1)} \\hspace{8em}\\end{aligned}\n    $$\n\n  - If we rewrite $u_n = 5n-1$ in the form $u_n = u_1 + (n-1)d$, we\nhave\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.5em} u_n &= 4 + (n-1)(5)\\end{aligned}\n    $$\n\n    Hence $u_n$ is\nan arithmetic sequence with the first term $u_1 = 4$ and\nthe common difference $d = 5$.\n    Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with\n$n=10$\n    we find\n\n    $$\n    \\begin{aligned}\n    \\sum_{k=1}^{10} (5k-1) &= S_{10} \\\\[3pt]\n    &= \\dfrac{10}{2}(2u_1 + (10-1)d) \\\\[9pt]\n    &= \\dfrac{10}{2}(2(4) + (10-1)(5)) \\\\[14pt]\n    &\\answer{= 265}\\end{aligned}\n    $$\n\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.3em} v_1 &= 5 \\hspace{3em} [\\text{the first term}] \\\\[9pt]\n  r &= 2 \\hspace{3em} [\\text{the common ratio}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{v_1(r^n-1)}{r-1}$ with\n$n=6$, we get\n\n  $$\n  \\begin{aligned}\n  \\sum_{k = 1}^6 5\\times 2^{k-1} &= S_6 \\\\[3pt]\n  &= \\dfrac{v_1(r^6-1)}{r-1} \\hspace{3.3em}  \\\\[9pt]\n  &= \\dfrac{5\\hspace{0.05em}(2^6-1)}{2-1} \\\\[15pt]\n  &\\answer{= 315}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 42',
    content:
      'Consider the sum $\\displaystyle S = \\sum_{k = 4}^l (2k-3)$, where $l$ is\na positive integer greater than $4$.\n\n- Write down the first three terms of the series. <span class="marks">[2]</span>\n\n- Write down the number of terms in the series. <span class="marks">[1]</span>\n\n- Given that $S = 725$, find the value of $l$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{5,\\, 7,\\, 9}$\n- $\\answer{l-3}$\n- From part (a), we have an arithmetic sequence with the first term\n$u_1 = 5$ and the common difference $d = 2$.\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = l-3$, we get\n\n  $$\n  \\begin{aligned}\n  S &= S_{l-3} \\\\[11pt]\n  \\hspace{4.5em}725 &= \\bigg[\\dfrac{l-3}{2}\\bigg](2u_1 + ((l-3)-1)d) \\\\[6pt]\n  725 &= \\bigg[\\dfrac{l-3}{2}\\bigg](2(5) + (l-4)(2)) \\\\[6pt]\n  725 &= \\bigg[\\dfrac{l-3}{2}\\bigg](2 + 2l) \\\\[12pt]\n  725 &= (l-3)(l+1) \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{4.65em} \\answer{l = 28} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 43',
    content:
      'Consider the sequence $u_1,\\, u_2,\\, u_3,\\, \\dots,\\, u_n,\\, \\dots$ where\n\n$$\n\\begin{aligned}\nu_1 = 860,\\hspace{0.3em} u_2 = 980,\\hspace{0.3em} u_3 = 1100,\\hspace{0.3em} u_4 = 1220.\\end{aligned}\n$$\n\nThe sequence continues in the same manner.\n\n- Find the value of $u_{50}$. <span class="marks">[3]</span>\n\n- Find the sum of the first $10$ terms of the sequence. <span class="marks">[3]</span>\n\n\nNow consider the sequence $v_1,\\, v_2,\\, v_3,\\, \\dots,\\, v_n,\\, \\dots$\nwhere\n\n$$\n\\begin{aligned}\nv_1 = 2,\\hspace{0.3em} v_2 = 4,\\hspace{0.3em} v_3 = 8,\\hspace{0.3em} v_4 = 16.\\end{aligned}\n$$\n\nThis sequence continues in the same manner.\n\n- Find the exact value of $v_{13}$. <span class="marks">[3]</span>\n\n- Find the sum of the first $10$ terms of this sequence.\n<span class="marks">[3]</span>\n\n\n$k$ is the smallest value of $n$ for which $v_n$ is greater than $u_n$.\n\n- Calculate the value of $k$. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- The sequence $(u_n)$ is arithmetic with the common difference\n$d = 120$.\n  Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 50$, we\nget\n\n  $$\n  \\begin{aligned}\n  u_{50} &= u_1 + (50-1)d \\\\[6pt]\n  &= 860 + (50-1)(120) \\\\[6pt]\n  &\\answer{= 6740}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 10$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.8em} S_{10} &= \\dfrac{10}{2}(2u_1 + (10-1)d) \\\\[6pt]\n  &= \\dfrac{10}{2}(2(860) + (10-1)(120)) \\\\[11pt]\n  &\\answer{= 14\\hspace{0.15em}000}\\end{aligned}\n  $$\n\n- The sequence $(v_n)$ is geometric with the common ratio $r = 2$.\nUsing the $n$th term formula $v_n = v_1r^{n-1}$ with $n = 13$, we\nget\n\n  $$\n  \\begin{aligned}\n  v_{13} &= v_1r^{13-1} \\\\[6pt]\n  &= 2(2)^{13-1} \\\\[7pt]\n  &\\answer{= 8192} \\hspace{2.8em}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{v_1(r^n-1)}{r-1}$\nwith $n = 10$, we obtain\n\n  $$\n  \\begin{aligned}\n  S_{10} &= \\dfrac{v_1(r^{10}-1)}{r-1} \\\\[6pt]\n  &= \\dfrac{2(2^{10}-1)}{2-1} \\\\[12pt]\n  &\\answer{= 2046}\\end{aligned}\n  $$\n\n- Solving the inequality $v_n > u_n$ for the smallest value of $n$, we\nfind\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.4em} v_1r^{n-1} &> u_1 + (n-1)d \\\\[8pt]\n  2(2)^{n-1} &> 860 + (n-1)(120) \\\\[8pt]\n  2^n &> 120n + 740 \\\\[8pt]\n  n &> 11.009 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{1.2em} \\answer{k=12} \\hspace{7.8em}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 44',
    content:
      'On Wednesday Eddy goes to a velodrome to train. He cycles the first lap\nof the track in $25$ seconds. Each lap Eddy cycles takes him $1.6$\nseconds longer than the previous lap.\n\n- Find the time, in seconds, Eddy takes to cycle his tenth lap.\n<span class="marks">[3]</span>\n\n\nEddy cycles his last lap in $55.4$ seconds.\n\n- Find how many laps he has cycled on Wednesday. <span class="marks">[3]</span>\n\n- Find the total time, in minutes, cycled by Eddy on\nWednesday. <span class="marks">[4]</span>\n\n\nOn Friday Eddy brings his friend Mario to train. They both cycled the\nfirst lap of the track in $25$ seconds. Each lap Mario cycles takes him\n$1.05$ times as long as his previous lap.\n\n- Find the time, in seconds, Mario takes to cycle his fifth\nlap. <span class="marks">[3]</span>\n\n- Find the total time, in minutes, Mario takes to\ncycle his first ten laps. <span class="marks">[3]</span>\n\n\nEach lap Eddy cycles again takes him $1.6$ seconds longer that his\nprevious lap.\nAfter a certain number of laps Eddy takes less time per lap than Mario.\n\n- Find the number of the lap when this happens. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have an arithmetic sequence with the first term $u_1 = 25$ and\nthe common difference $d = 1.6$.\n  Hence, using the $n$th term formula $u_n = u_1 + (n-1)d$ with\n$n = 10$, we get\n\n  $$\n  \\begin{aligned}\n  u_{10} &= u_1 + (10-1)d \\\\[6pt]\n  &= 25 + (10-1)(1.6) \\\\[6pt]\n  &\\answer{= 39.4 \\text{ seconds}}\\end{aligned}\n  $$\n\n- Solving the equation $u_n = 55.4$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  u_1 + (n-1)d &= 55.4 \\hspace{10.1em} \\\\[6pt]\n  25 + (n-1)(1.6) &= 55.4 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{8.6em} \\answer{n = 20 \\text{ laps}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 20$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.1em} S_{20} &= \\dfrac{20}{2}(2u_1 + (20-1)d) \\\\[6pt]\n  &= \\dfrac{20}{2}(2(25) + (20-1)(1.6)) \\\\[10pt]\n  &= 804 \\\\[14pt]\n  &\\answer{= 13.4 \\text{ minutes}}\\end{aligned}\n  $$\n\n- We have a geometric sequence with the first term $v_1 = 25$ and the\ncommon ratio $r = 1.05$.\n  Hence, using the $n$th term formula $v_n = v_1r^{n-1}$ with $n = 5$,\nwe obtain\n\n  $$\n  \\begin{aligned}\n  v_5 &= v_1r^{5-1} \\\\[6pt]\n  &= 25(1.05)^{5-1} \\\\[7pt]\n  &\\answer{\\approx 30.4 \\text{ seconds}}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{v_1(r^n-1)}{r-1}$\nwith $n = 10$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.6em} S_{10} &= \\dfrac{v_1(r^{10}-1)}{r-1} \\\\[6pt]\n  &= \\dfrac{25((1.05)^{10}-1)}{1.05-1} \\hspace{0.7em} \\\\[12pt]\n  &\\approx 314.45 \\\\[15pt]\n  &\\answer{\\approx 5.24 \\text{ minutes}}\\end{aligned}\n  $$\n\n- Solving the inequality $u_n < v_n$ for the smallest value of $n$, we\nget\n\n  $$\n  \\begin{aligned}\n  u_1 + (n-1)d &< v_1r^{n-1} \\\\[8pt]\n  25 + (n-1)(1.6) &< 25(1.05)^{n-1} \\\\[9pt]\n  11.7 &< n \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{n = 12 \\text{th lap}} \\hspace{0.7em}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '19',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 45',
    content:
      'Sarah has started a 12 week training program to improve her cycling. She plans to cycle $100$ kilometres in the first week and, in each subsequent week, cycle $15$ kilometres further than she did the week before.\n\n- Calculate the distance she will cycle during the eighth week. <span class="marks">[3]</span>\n\n- Calculate the total distance she will have cycled by the end of the training program. <span class="marks">[2]</span>\n\n\nSarah\'s coach tells her she should have cycled $2\\hspace{0.1em}500$ kilometres by the end of the training program, so Sarah decides to increase her cycling distances. She still plans to cycle $100$ kilometres in the first week, but in each subsequent week, she will cycle $k$ kilometres more than she did the week before.\n\n- Calculate the minimum integer value of $k$ required for Sarah to reach the target of $2\\hspace{0.1em}500$ kilometres in 12 weeks.<span class="marks">[3]</span>  \n\nAs part of her training, each week Sarah performs a one kilometre time trial, in which she aims to cycle one kilometre as fast as she can. Sarah\'s time decreases by $2\\%$ each week. In the first week, her time is exactly $110$ seconds.\n\n- Calculate Sarah\'s time in the 12th week. <span class="marks">[3]</span>  \n\nSarah\'s goal is to cycle one kilometre in less than $85$ seconds by the end of the training program. To do this, she needs to decrease her time by at least $m\\%$ per week from her time of $110$ seconds in week one.\n\n- Find the minimum value of $m$ so that Sarah reaches her goal. <span class="marks">[4]</span>  \n',
    markScheme:
      "\n- We have an arithmetic sequence with first term $u_1 = 100$ and $d = 15$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  Using the formula for the eighth term of an arithmetic sequence we have\n\n  $$\n  \\begin{align*}\n  u_8 &= u_1 + 7d \\\\[6pt]\n  &= 100 + 7 \\times 15 \\tag*{\\textbf{(M1)}} \\\\[6pt]\n  u_8 &= 205\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Sarah cycles $205$ kilometres during the eighth week.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- Using the formula for the sum of 12 terms, we have\n\n  $$\n  \\begin{align*}\n  s_{12} &= \\dfrac{12}{2}\\left(2 \\times 100 + (12-1) \\times 15\\right) \\tag*{\\textbf{(M1)}} \\\\[6pt]\n  &= 2\\hspace{0.1em}190\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Sarah cycles }2\\hspace{0.1em}190 kilometres in total during the training program.}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- Using the formula for the sum of 12 terms, with $k$ instead of $15$ for the common difference, we form the equation\n\n  $$\n  \\begin{align*}\n  6\\left(200 + 11k\\right) &= 2\\hspace{0.1em}500 \\tag*{\\textbf{(M1)}} \\\\[6pt]\n  k &\\approx 19.70 \\hspace{3em} \\text{[using G.D.C.]} \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{The minimum integer value of $k$ is $20$.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- We have a geometric sequence with $u_1=110$ and $r=0.98$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  Using the formula for the twelfth term of a geometric sequence, we have\n\n  $$\n  \\begin{align*}\n  u_{12} &= u_1 \\times r^{11} \\\\[8pt]\n  &= 110 \\times 0.98^{11} \\tag*{\\textbf{(M1)}} \\\\[8pt]\n  u_{12} &\\approx 88.08\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Sarah's time in week 12 is approximately $88.1$ seconds.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- Let $r$ be the common ratio of the geometric sequence with first term $u_1=110$ and twelfth term $u_{12}<85$. Thus, using the formula for the twelfth term, we form the inequality\n\n  $$\n  \\begin{align*}\n  110 \\times r^{11} &< 85\n  \\end{align*}\n  $$\n\n  Using the numerical solver on the G.D.C. we can solve the equation $110 \\times r^{11} = 85$, finding that $r \\approx 0.9768$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  Hence to satisfy the inequality $110 \\times r^{11} < 85$, we must have $r<0.9768$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(A1)}}\n  \\end{aligned}\n  $$\n\n  The value $m$ we require will be equal to $(1-r) \\times 100$. We have\n\n  $$\n  \\begin{align*}\n  (1-0.9768) \\times 100 &= 2.32 \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Sarah must decrease her time by at least $2.32\\%$ per week in order to cycle the one kilometre time trial in less than 85 seconds by the end of the training program.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 46',
    content:
      'The half-life, $T$, in years, of a radioactive isotope can be modelled\nby the function\n\n$$\n\\begin{aligned}\nT(k) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{k}{100}\\right)}, \\hspace{0.5em} 0 < k < 100,\\end{aligned}\n$$\n\nwhere $k$ is the decay rate, in percent, per year of the isotope.\n\n- The decay rate of Hydrogen-$3$ is $5.5$ %\nper year. Find its half-life.<span class="marks">[2]</span>\n\n\nThe half-life of Uranium-$232$ (U-$232$) is $68.9$ years. A sample\ncontaining $250$ grams of U-$232$ is obtained and stored as a side\nproduct of a nuclear fuel cycle.\n\n- Find the decay rate per year of U-$232$. <span class="marks">[2]</span>\n\n- Find the amount of U-$232$ left in the sample after:\n  \n  - $68.9$ years;\n  - $100$ years. <span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- Evaluating $T(k)$ for $k = 5.5$, we get\n\n  $$\n  \\begin{aligned}\n  T(5.5) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{5.5}{100}\\right)} \\\\[6pt]\n  &\\answer{\\approx 12.3 \\text{ years}}\\end{aligned}\n  $$\n\n- Solving the equation $T(k) = 68.9$ for $k$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{r}{100}\\right)} &= 68.9 \\hspace{6.05em} \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.3em} \\answer{k = 1.00\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- \n  - $\\answer{125 \\text{ grams}}$\n  - We have a geometric sequence with the first term $u_1 = 250$ and\nthe $\\text{common}$ ratio $r = (1 - 1.00/100) = 0.99$.\n    Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with\n$n=101$, we find\n\n    $$\n    \\begin{aligned}\n    u_{101} &= u_1r^{101-1} \\\\[6pt]\n    &= 250\\hspace{0.05em}(0.99)^{101-1} \\hspace{0.2em} \\\\[7pt]\n    &\\answer{\\approx 91.5 \\text{ grams}}\\end{aligned}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 47',
    content:
      'The half-life, $T$, in days, of a radioactive isotope can be modelled by\nthe function\n\n$$\n\\begin{aligned}\nT(k) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{k}{100}\\right)}, \\hspace{0.5em} 0 < k < 100,\\end{aligned}\n$$\n\nwhere $k$ is the decay rate, in percent, per day of the isotope.\n\n- The decay rate of Gold-$196$ is $6.2$ % per\nday. Find its half-life.<span class="marks">[2]</span>\n\n\nThe half-life of Phosphorus-$32$ (P-$32$) is $14.3$ days. A sample\ncontaining $120$ grams of P-$32$ is produced and stored in a\nbiochemistry laboratory.\n\n- Find the decay rate per day of P-$32$. <span class="marks">[2]</span>\n\n- Find the amount of P-$32$ left in the sample after:\n  \n  - $14.3$ days;\n  - $50$ days. <span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- Evaluating $T(k)$ for $k = 6.2$, we get\n\n  $$\n  \\begin{aligned}\n  T(6.2) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{6.2}{100}\\right)} \\\\[6pt]\n  &\\answer{\\approx 10.8 \\text{ days}}\\end{aligned}\n  $$\n\n- Solving the equation $T(k) = 14.3$ for $k$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{r}{100}\\right)} &= 14.3 \\hspace{6.05em} \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.25em} \\answer{k = 4.73\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- \n  - $\\answer{60 \\text{ grams}}$\n  - We have a geometric sequence with the first term $u_1 = 120$ and\nthe $\\text{common}$ ratio $r = (1 - 4.73/100) = 0.9527$.\n    Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with\n$n=51$, we find\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.8em} u_{51} &= u_1r^{51-1} \\\\[6pt]\n    &= 120\\hspace{0.05em}(0.9527)^{51-1} \\\\[7pt]\n    &\\answer{\\approx 10.6 \\text{ grams}}\\end{aligned}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 48',
    content:
      'Jenni is conducting an experiment with a spring and has attached a mass so that it will oscillate up and down.\nShe is measuring the $y$-coordinate of the centre of the mass.\nAt the start of the experiment the mass is at rest with its centre being at the point $(0, 0)$.\nShe gives the mass a nudge upwards in the positive $y$-direction. She makes her first measurement of $(0, 37.5)$ when the centre of the mass is at the first maximum point ($n=1$). The units of the $y$-coordinate are in millimetres.\nThe mass then moves downwards passing the $x$-axis and reaching its first minimum point ($n=2$). Jenni makes her second measurement of the $y$-coordinate of the centre of a the mass as $(0, a)$.\nThe mass then moves up past the $x$-axis to the next maximum point ($n=3$) and Jenni makes her third measurement of $(0, 24)$.\nThe diagram below shows how the mass moves up and down until Jenni makes her $3$rd measurement.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/5c432714-26e0-44d2-ad4c-8fbd32ef03e2/images/e1e394ce-c8ff-476f-b471-b3fad49316a7/springs.png)\n\n\nJenni notices that the $y$-coordinates of the three measurements $37.5,\\; a,\\; 24$ form a geometric sequence.\n\n- Find $a$. <span class="marks">[2]</span>  \n\nThe spring continues to oscillate up and down with Jenni measuring the $y$-coordinate in the same way as described.\nThe results continue to form a geometric sequence.\n\n- Find the $6$th term in the sequence. Give your answer to 3 decimal places. <span class="marks">[2]</span>\n\n- Show that the total distance travelled in the $y$-direction by the mass when the $6$th measurement is made is  $264.408$ mm. <span class="marks">[3]</span>\n\n',
    markScheme:
      "\n- Let the common ratio of the sequence be $r$.\n  As the sequence is geometric we can use the general formula for the third term...\n\n  $$\n  \\begin{align*}\n      u_3&=u_1r^2\\\\\n      24&=37.5r^2\\\\\n      r^2&=0.64\\\\\n      r=&=\\pm 0.8\n  \\end{align*}\n  $$\n\n  The value of $a$ is negative as the mass moves below the $x$-axis.\n  Therefore $a=37.5\\times(-0.8)$.\n  $\\answer{a=-30}$\n- We can use the general formula with $n=6$.\n\n  $$\n  \\begin{align*}\n      u_6&=37.5\\times(-0.8)^{6-1}\\\\\n      &=-12.288\n  \\end{align*}\n  $$\n\n  The $6$th term is $\\answer{u_6=-12.288}$\n- Let's first review the total distance travelled when the $3$rd measurement is taken, as shown in the diagram...\n\n  $$\n  \\begin{align*}\n      S_3 &= 2\\times u_1 + 2\\times u_2 + u_3\\\\\n      &=2(u_1 + u_2) + u_3\\\\\n      &=2S_2 + u_3\n  \\end{align*}\n  $$\n\n  This means all distances before the third term must be $\\times2$ as the mass must both extend to that distance and return to the $x$-axis.\n  But when the measurement is taken it only extends that distance therefore we don't double the distance for that measurement.\n  Using that information we can work out the total distance travelled when the $6$th measurement is taken...\n\n  $$\n  \\begin{align*}\n      S_6 &= 2\\times u_1 + 2\\times u_2 + .... 2\\times u_5 + u_6\\\\\n      &= 2(u_1 + u_2 + .... +u_5) + u_6\\\\\n      &= 2(S_5) + u_6\n  \\end{align*}\n  $$\n\n  We can find the value of $S_5$ using the formula for the sum of $n$ terms of a geometric sequence.\n  However, realise that we must use the positive values of the $y$-coordinate as we are finding the total distance travelled. Therefore we must use $r=0.8$.\n\n  $$\n  \\begin{align*}\n      &= 2\\left(\\frac{37.5(1-(0.8)^5)}{1-(0.8)}\\right) + 37.5\\times(0.8)^{5}\\\\\n      &=  264.408\n  \\end{align*}\n  $$\n\n  The total distance travelled when the $6$th measurement is taken is $\\answer{264.408}$ as required.\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'The Burns, Gordons and Longstaff families make meal plans for their households. The table below shows the amount of carbohydrate, fat and protein, all measured in grams, consumed by the family over a single day. The table also shows the daily calories, measured in kcal, this equates to.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/350ffb2d-5f7c-4d42-9455-67a41e1ff452/images/8ca2d5dd-4221-43ed-b694-8407a3540349/1111a.JPG)\n\n\nLet $x$, $y$ and $z$ represent the amount of calories, in kcal, for $1$ g of carbohydrate, fat and protein respectively.\n\n- Write down a system of three linear equations in terms of $x$, $y$ and $z$ that represents the information in the table above. <span class="marks">[2]</span>\n\n- Find the values $x$, $y$ and $z$. <span class="marks">[2]</span>\n\n\nThe Howe family also plans meals. The table below shows the amount of carbohydrates, fat and protein consumed by the family over a single day.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/350ffb2d-5f7c-4d42-9455-67a41e1ff452/images/a0f40aa2-3fd5-4e46-b963-a74843eb2043/1111b.JPG)\n\n\n\n- Calculate the daily calories for the Howe family. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{align*}\n  \\tcbhighmath{\\begin{array}{rcccccl}\n  859x &+& 164y &+& 296z &=& 6561 \\\\[3pt]\n  1026x &+& 231y &+& 414z &=& 8543 \\\\[3pt]\n  595x &+& 217y &+& 112z &=& 4980\n  \\end{array}} \\hspace{0.6em}\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A2}}\n  \\end{align*}\n  $$\n\n- Using a G.D.C. the calories per gram are\n\n  $$\n  \\begin{align*}\n  \\text{Carbohydrates} &:\\hspace{0.75em} \\hspace{0.525em}\\tcbhighmath{3.70 \\text{ grams per calorie}} \\\\[6pt]\n  \\text{Fat} &:\\hspace{0.75em} \\hspace{0.525em}\\tcbhighmath{9.67 \\text{ grams per calorie}} \\\\[6pt]\n  \\text{Protein} &:\\hspace{0.75em} \\hspace{0.525em}\\tcbhighmath{6.07 \\text{ grams per calorie}} \\tag*{\\textbf{A2}}\n  \\end{align*}\n  $$\n\n- The daily calories for the Howe family are\n\n  $$\n  \\begin{align*}\n  1790\\times3.70 + 206\\times9.67 + 901\\times6.07 &= 14084.09 \\approx \\hspace{0.525em}\\tcbhighmath{14100}\\hspace{0.525em} \\text{ daily calories.} \\tag*{\\textbf{M1A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 2',
    content:
      'A toy rocket is fired, from a platform, vertically into the air, its height above the ground after $t$ seconds is given by $s(t) = at^2 + bt + c$, where $a,b,c \\in \\mathbb{R}$ and $s(t)$ is measured in metres.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/bb0065fc-bc20-4898-a580-9d8d84f4cc81/images/26a3d948-9010-49f6-b623-7aac14c767bf/rocket.png)\n\n\nAfter $2$ second, the rocket is $28.3$ m above the ground; after $4$ seconds, $25.6$ m; after $5$ seconds, $14.7$ m.\n\n- \n  - Write down a system of three linear equations in terms of $a$, $b$ and $c$.\n  - Hence find the values of $a$, $b$ and $c$. <span class="marks">[3]</span>\n\n\n- Find the height, above the ground, of the platform. <span class="marks">[1]</span>\n\n- Find the time it takes for the rocket to hit the ground. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - We have\n\n\n  $$\n  \\begin{align*}\n  \\tcbhighmath{\\begin{array}{rcccccl}\n  4a &+& 2b &+& c &=& 28.3 \\\\[3pt]\n  16a &+& 4b &+& c &=& 25.6 \\\\[3pt]\n  25a &+& 5b &+& c &=& 14.7\n  \\end{array}} \n  \\tag*{\\textbf{A2}}\n  \\end{align*}\n  $$\n\n  \n  - Using a G.D.C. we find $\\answer{a = -3.18, \\hspace{0.25em} b = 17.8, \\hspace{0.25em} c = 5.53}$\n\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Evaluating $s(t)$ at $t = 0$, we obtain the height of the platform\n\n\n$$\n\\begin{align*}\n\\hspace{7.2em} s(0) &= -3.18(0)^2 + 17.8(0) + 5.53 \\tag*{\\textbf{A1}}\\\\[6pt]\n&\\hspace{0.275em}\\answer{= 5.53 \\text{ m}}\n\\end{align*}\n$$\n\n\n- Solving the equation $s(t) = 0$ for $t$, we find\n\n  $$\n  \\begin{align*}\n  -3.18t^2 + 17.8t + 5.53 &= 0 \\hspace{10.8em}\\tag*{\\textbf{M1}}\\\\\n  t&=-0.295..., 5.8925...\\hspace{3em} [\\text{by using G.D.C.}]\n  \\end{align*}\n  $$\n\nThe value of $t$ must be positive\n\n  $$\n  \\begin{equation*}\n  \\answer{t =5.89 \\text{ seconds}} \\tag*{\\textbf{A1}}\n  \\end{equation*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 3',
    content:
      'An owl takes off from from a tree branch and flies higher into the sky. Its height above the ground after $t$ seconds, where $t\\geq 0$, is given by $s(t) = at^3 + bt^2 + ct+d$, where $a,b,c,d \\in \\mathbb{R}$ and $s(t)$ is measured in metres.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/f2f10540-8736-484c-b76e-293673a1a920/images/e10ba209-e2d4-4ca9-a89f-fc01ced21fb2/owl.png)\n\n\nInitially the owl is $12\\,$ metres above the ground.\n\n- Write down the value of $d$. <span class="marks">[1]</span>  \n\nAfter $1$ second, the owl is $19.8$ m above the ground; after $2$ seconds, $34.5$ m; after $4$ seconds, $22.8$ m.\n\n- \n  - Write down a system of three linear equations in terms of $a$, $b$ and $c$.\n  - Hence find the values of $a$, $b$ and $c$.  <span class="marks">[3]</span>\n\n\n\nAfter some time the owl reaches a maximum height. At this time it spots some prey at ground level and then immediately swoops down to catch it.\n\n- \n  - Find the maximum height of the owl above the ground as it spots the prey.\n  - Find the time it catches the prey. <span class="marks">[2]</span>\n\n\n',
    markScheme:
      '\n- $d=12$ m\n\n\n$$\n\\begin{align*}\n    \\tag*{\\textbf{A1}}\n\\end{align*}\n$$\n\n\n- \n  - We have\n\n\n  $$\n  \\begin{align*}\n  \\answer{\\begin{array}{rcccccccl}\n  a &+& b &+& c &+& 12&=& 19.8 \\\\[3pt]\n  8a &+& 4b &+& 2c &+& 12&=& 34.5 \\\\[3pt]\n  64a &+& 16b &+& 4c &+& 12&=& 22.8\n  \\end{array}}\n  \\tag*{\\textbf{M1A1}}\n  \\end{align*}\n  $$\n\n  \n  - Using a G.D.C. we can find the values of the parameters, $a=-2.575$, $b=11.175$ and $c=-0.8$.\\[6pt]\nThese values can be rounded to three significant figures giving\n$\\answer{a = -2.58, \\hspace{0.25em} b = 11.2, \\hspace{0.25em} c = -0.8} $\n\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- \n  - The coordinates of the local maximum of when the owl spots the prey is $(2.857..., 40.96...)$.\n    The $y-$coordinate of this local maximum gives the height of the owl as it spots the prey.\\[6pt]\nHence the owl is at a height of $\\answer{41.0\\,\\text{m}}$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - The owl catches the prey when the height of the owl is zero, i.e. $s(t)=0$ when $t>0$. This can be found with a G.D.C., $(4.501..., 0)$. With the $x-$coordinate being the time.\n    Hence the owl catches the prey at $\\answer{t=4.50\\,\\text{s}}$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 4',
    content:
      'The graph below shows the amount of money $M$ (in thousands of dollars), in the account of a contractor,  where $t$ is the time in months since he opened the account.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/be163de5-68b0-49ca-94db-b870708b6869/AI1015a.PNG)\n\n\n\n- Write down one characteristic of the graph which suggests that a cubic function might be an appropriate model for the amount of money in the account. <span class="marks">[1]</span>  \n\nThe equation of the model can be expressed as $M(t)=at^3+bt^2+ct+d$, where $a$, $b$, $c$ and $d \\in \\mathbb{R}$. It is given that the graph of the model passes through the following points.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/5c93f523-f86a-4794-ac51-31c1c41cc134/AI1015b.PNG)\n\n\n\n- \n  - State the value of $d$.\n  - Using the values in the table, write down three equations in $a$, $b$, and $c$.\n  - By solving the system of equations from part (ii), find the values of $a$, $b$ and $c$. <span class="marks">[4]</span>\n\n\n\nIf $M$ has a negative value, the contractor is in debt.\n\n- Use the model from part (b) to find the number of months the contractor expects to be in debt. Give your answer to the nearest month. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- The graph of $M$ has exactly one maximum point and one minimum point.\n- \n  - From the table, we have $M(0)=1$. Substituting the value $t=0$ into the model we have\n\n    $$\n    \\begin{align*}\n    M(0)&= a(0)^3+b(0)^2+c(0)+d = d\n    \\end{align*}\n    $$\n\n    We have $M(0)=1$ and $M(0)=d$ and therefore $\\answer{d=1}$\n  - Using the values given in the table, and part (i), we have\n\n    $$\n    \\begin{align*}\n    M(1)&= a(1)^3+b(1)^2+c(1)+1 = 2 \\\\[11pt]\n    M(2) &= a(2)^3+b(2)^2+c(2)+1 = -3 \\\\[11pt]\n    M(3) &= a(3)^3+b(3)^2+c(3)+1 = 4  \\\\[-11pt]\n    \\end{align*}\n    $$\n\n    Hence, the linear system for variables $a$, $b$ and $c$ is\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{\\begin{cases}\n    a+b+c = 1 \\\\[6pt]\n    8a+4b+2c = -4 \\\\[6pt]\n    27a+9b+3c = 3\n    \\end{cases}}\n    \\end{align*}\n    $$\n\n  - Using G.D.C. to solve the linear system found in part (ii), we get\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{a=3,\\, b=-12, \\text{ and } c=10}\n    \\end{align*}\n    $$\n\n\n- Using the G.D.C. to graph the polynomial $M(t)=3t^3-12t^2+10t+1$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/4b085cb1-6cef-4368-855b-cb6f761ecd30/AI1015c.PNG)\n\n\n  Hence, the time the contractor is in debt equals the time between point A and point B:\n\n  $$\n  \\begin{align*}\n  \\text{Time in debt} &= 2.738 - 1.352 \\\\[11pt]\n  &= 1.386\\\\[-10pt]\n  \\end{align*}\n  $$\n\n  To the nearest month, the contractor expects to be in debt for $\\answer{\\text{one month.}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 5',
    content:
      'Coral is a wildlife expert who tags  flying fish and records their movement using an electronic device.\nThe tagging device tells her the height of a fish relative to the water level, at any given time.\nShe knows that the fish swim mostly in the water, but occasionally they fly (jump!) out of the water.\nThe height is measured in metres and the time in seconds. If the height is negative the fish is under the water, if the height is positive the fish is flying.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/99db50ab-81ea-421b-8f20-21b4669fedcd/images/70f02a92-7870-456a-abea-c262c3ce2d2b/seagull.png)\n\n\nCoral notices one particular fish as it flies out of the water. The moment it re-enters the water the device begins tracking its height.\nAt $2$ seconds the fish is at a height of $-2.8\\,$m; at $5$ seconds the fish is at a height of $-2\\,$m and at $11$ seconds the fish is also at a height of $-2\\,$m.\nThe height of the fish can be expressed as $H(t)=at^3+bt^2+ct+d$, where $a$, $b$, $c$ and $d \\in \\mathbb{R}$.\n\n- \n  - Write down the value of $d$.\n  - Using the information given write down three equations involving $a$, $b$ and $c$.\n  - Solve the system of equations to find the values of $a$, $b$ and $c$. <span class="marks">[4]</span>\n\n\n\nFrom previous research, Coral knows that if a fish is flying for more than $1$ second then a seagull will attempt to catch it.\n\n- Use a justification to explain why a seagull will attempt to catch this fish. <span class="marks">[4]</span>  \n\nAt $t=9\\,$s a seagull begins swooping down to catch the fish.\nIts height is given by $b(t)=-1.5t^2+27t-118$.\n\n- \n  - Find the height at which the bird catches the fish.\n  - Interpret the answer in the context of the problem. <span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- \n  - $d=0$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Using the information given we have\n\n    $$\n    \\begin{align*}\n    \\answer{\\begin{array}{rccccccl}\n    8a &+& 4b &+& 2c &=& -2.8 \\\\[3pt]\n    125a &+& 25b &+& 5c &=& -2 \\\\[3pt]\n    1331a &+& 121b &+& 11c &=& -2\n    \\end{array}}\n    \\tag*{\\textbf{M1A1}}\n    \\end{align*}\n    $$\n\n  - Solving on a G.D.C. we have $\\hspace{0.525em}\\tcbhighmath{a=-0.0330, b=0.564 \\text{ and } c=-2.40}\\hspace{0.525em}$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- When the fish is out of the water it is said to be flying. Hence we need to identify when $H(t)>0$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  We can sketch $H(t)=-0.0330t^3+0.564t^2-2.40t$ on a G.D.C.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/99db50ab-81ea-421b-8f20-21b4669fedcd/images/954048de-59b6-4d32-b5eb-dc27f1407e86/an1.png)\n\n\n  The difference between the two roots $x_1$ and $x_2$ is the time when $H(t)>0$. This can be seen on the graph above as the length of the red line.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n  Hence, the total time out of the water is given by\n\n  $$\n  \\begin{align*}\n      &=x_2-x_1\\\\[6pt]\n      &=9.0909...-8 \\hspace{3em}\\text{[using G.D.C.]} \\\\[6pt]\n      &=1.09\\text{ seconds} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  As $\\hspace{0.525em}\\answer{1.09 > 1}\\hspace{0.525em}$ we can say that a seagull will attempt to catch the fish.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{R1}}\n  \\end{align*}\n  $$\n\n- The bird catches the fish when the $b(t)=H(t)$ and $t>9$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Using a G.D.C. we can show to motion of the bird, in blue, using the model $b(t)$\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/99db50ab-81ea-421b-8f20-21b4669fedcd/images/b3837cf2-870c-4368-bdc5-34bdc0a05ee2/an2.png)\n\n\n  The point $C$, $t>9$, is when the bird catches the fish.\n  The coordinates of point $C$ are $(10.893..., -1.8735...)$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  Hence the bird catches the fish at a height of $\\hspace{0.525em}\\tcbhighmath{-1.87\\,\\text{m}}$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The height is negative, this means the bird catches the fish\n  $\\answer{1.87\\,\\text{m below the surface of the water}}$\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{R1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 6',
    content:
      'Consider the quadratic function $f(x) = ax^2+bx+c$. The graph of\n$y=f(x)$ is shown in the diagram below. The vertex of the graph has\ncoordinates $\\text{R}(m,-9)$.\nThe graph intersects the $x$-axis at two points; $\\text{P}(-4,0)$ and\n$\\text{Q}(2,0)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b09e52c7-02f5-45a2-96f9-ab7aa4138a3b/images/a78c2481-ec6d-41fe-99c5-6ab402d1c48c/b188999a18650c4961f7def85ea1bfd8a1276fc9.svg)\n\n\n\n- Find the value of $m$. <span class="marks">[1]</span>\n\n- Find the values of $a$, $b$, and $c$.<span class="marks">[5]</span>\n\n- Write down the equation of the axis of symmetry of the graph.\n<span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- The point $(m,0)$ is halfway between P and Q (symmetrical nature of\nquadratic graphs). Since the total length from P to Q is 6 units,\nthe length from P to $(m,0)$ is 3 units. Therefore,\n\n  $$\n  \\begin{aligned}\n  &\\answer{m=-1}\\end{aligned}\n  $$\n\n- Using $y=ax^2+bx+c$ and the 3 coordinates we know the graph passes\nthrough, we can set up three equations, as follows\n\n  $$\n  \\begin{aligned}\n  0 &= a(-4)^2+b(-4)+c \\qquad \\qquad \\quad \\text{Using P$(-4,0)$}\\nonumber \\\\[6pt]\n  0&=16a-4b+c \\tag*{\\textbf{(1)}}\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  0 &= a(2)^2+b(2)+c \\qquad \\qquad \\qquad \\,\\, \\,\\text{Using Q$(2,0)$}\\nonumber \\\\[6pt]\n  0&=4a+2b+c \\tag*{\\textbf{(2)}}\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  -9 &= a(-1)^2+b(-1)+c \\qquad \\qquad \\quad \\text{Using R$(-1,-9)$}\\nonumber \\\\[6pt]\n  -9&=a-b+c \\tag*{\\textbf{(3)}}\n  \\end{aligned}\n  $$\n\n  We can now use a GDC to solve equations\n$(1)$, $(2)$, and $(3)$. We get\n\n  $$\n  \\answer{a=1, \\, \\, \\, b=2,\\,\\,\\text{and}\\,\\, c=-8}\n  $$\n\n- The axis of symmetry of the graph is the line that splits the\nquadratic graph in half, passing through the turning point. Hence,\nthe equation of this line is\n\n  $$\n  \\answer{x=-1}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 7',
    content:
      'The graph below shows the profit $P$ (in thousands of dollars), that business A makes,  where $t$ is the time in months since January 1st.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/c66ce31d-cb54-4bbd-848a-ef2cd4a05037/ai1106e.PNG)\n\n\n\n- Write down one characteristic of the graph which suggests that a cubic function might be an appropriate model for the business profit. <span class="marks">[1]</span>  \n\nThe model can be expressed as $P(t)=at^3+bt^2+ct+d$, where $a$, $b$, $c$ and $d \\in \\mathbb{R}$. It is given that the graph of the model passes through the following points.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/ef93a216-cfb9-450f-a315-71dbbb9af371/ai1106b.PNG)\n\n\n\n- \n  - State the value of $d$.\n  - Using the values in the table, write down three equations in $a$, $b$, and $c$.\n  - By solving the system of equations from part (ii), find the values of $a$, $b$ and $c$. <span class="marks">[4]</span>\n\n\n\nIf $P$ has a negative value, business A is losing money. The owner has decided they will not open during the corresponding time next year.\n\n- Use the model from part (b) to find the approximate dates during which business A will not open next year. <span class="marks">[4]</span>  \n\nBusiness B has a profit function given by $P(t)=-0.1t^2+1.2t$, for $0 \\leq t \\leq 12$.\n\n- Determine the total amount of time for which business B is more profitable than business A. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- $\\answer{\\text{The graph of $P$ has exactly one maximum point and one minimum point.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- \n  - From the table, we have $P(0)=2$. Substituting the value $t=0$ into the model we have\n\n    $$\n    \\begin{align*}\n    P(0)&= a(0)^3+b(0)^2+c(0)+d = d\n    \\end{align*}\n    $$\n\n    We have $P(0)=2$ and $P(0)=d$ and therefore $\\answer{d=2}$\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n  - Using the values given in the table, and part (i), we have\n\n    $$\n    \\begin{align*}\n    P(4)&= a(4)^3+b(4)^2+c(4)+2 = 4 \\\\[11pt]\n    P(8) &= a(8)^3+b(8)^2+c(8)+2 = -6 \\tag*{\\textbf{(M1)}} \\\\[11pt]\n    P(12) &= a(12)^3+b(12)^2+c(12)+2 = 8  \\\\[-11pt]\n    \\end{align*}\n    $$\n\n    Hence, the linear system for variables $a$, $b$ and $c$ is\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{\\begin{cases}\n    64a+16b+4c = 2 \\\\[6pt]\n    512a+64b+8c = -8 \\\\[6pt]\n    1728a+144b+12c = 6\n    \\end{cases}}\n    \\end{align*}\n    $$\n\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n  - Using G.D.C. to solve the linear system found in part (ii), we get\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{a=0.09375,\\, b=-1.5, \\text{ and } c=5} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- Using the G.D.C. to graph the polynomial $P(t)=0.09375t^3-1.5t^2+5t+2$,\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  we can find the zeroes of the function.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(A1)}}\t\n  \\end{aligned}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/f941dc8d-5e1b-4150-9755-fcb2277ef68a/ai1106c.PNG)\n\n\n  Hence, the time that business A will not open is from $t=5.407$ months until $t=10.95$ months after January 1st. Note that $t=5.407$ equates to a date in June, which has 30 days, and $t=10.95$ equates to a date in November, which also has 30 days.\n\n  $$\n  \\begin{align*}\n  0.407 \\times 30 &= 12.21 \\\\[11pt]\n  0.95 \\times 30 &= 28.5 \\tag*{\\textbf{(M1)}}\\\\[-10pt]\n  \\end{align*}\n  $$\n\n  Business A will be closed from approximately $\\answer{\\text{June 13th until November 29th.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- Using the G.D.C., we can graph the polynomial for business B (shown in red), $P(t)=-0.1t^2+1.2t$, on the same axes as the polynomial for business A. We can then find the points of intersection.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/94fdb4ca-3aad-4323-a785-bc1185c059fb/ai1106d.PNG)\n\n\n  Business B is more profitable for $4.270 \\leq t \\leq 11.11$. We have\n\n  $$\n  \\begin{align*}\n  11.11 - 4.270 &= 6.84 \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Business B is more profitable for approximately 6.84 months.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '3'
  }
];
