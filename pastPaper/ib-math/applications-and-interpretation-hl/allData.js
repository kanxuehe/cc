export const allData = [
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
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 2',
    content:
      'The amount of water, $W$, in litres, remaining in a cooking pot after it\nis placed onto a hot stove is given by the function\n\n$$\nW(t) = 40(0.75)^t,\\quad t\\geq 0\n$$\n\nwhere $t$ is the time in hours after\nthe pot is placed on the stove.\n\n- Find\n  \n  - the initial amount of water in the pot.\n  - the percentage of water that leaves the pot in the form of steam\neach hour. <span class="marks">[3]</span>\n\n\n- Calculate the amount of water remaining in the pot after $5$ hours.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - At $t=0$, we get\n\n    $$\n    \\begin{aligned}\n    W(0)&=40(0.75)^0\\\\[6pt]\n    &\\hspace{0.5em}\\answer{=40 \\text{ litres}}\\end{aligned}\n    $$\n\n  - At $t=1$, we get\n\n    $$\n    \\begin{aligned}\n    W(1)&=40(0.75)^1\\\\[6pt]\n    &=30 \\text{ litres}\\end{aligned}\n    $$\n\n    We can find the percentage\ndecrease between $t=0$ and $t=1$, as follows\n\n    $$\n    \\begin{aligned}\n    \\text{Percentage decrease}&=\\dfrac{40-30}{40}\\times 100\\%\\hspace{1cm}\\\\[6pt]\n    &\\hspace{0.5em}\\answer{=25\\%}\n    \\end{aligned}\n    $$\n\n\n- At $t=5$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.5cm}W(5)&=40(0.75)^5\\\\[6pt]\n  &\\hspace{0.5em}\\answer{=9.49 \\text{ litres}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '1.5'
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
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 4',
    content:
      'A toy rocket is fired, from a platform, vertically into the air, its height above the ground after $t$ seconds is given by $s(t) = at^2 + bt + c$, where $a,b,c \\in \\mathbb{R}$ and $s(t)$ is measured in metres.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/bb0065fc-bc20-4898-a580-9d8d84f4cc81/images/26a3d948-9010-49f6-b623-7aac14c767bf/rocket.png)\n\n\nAfter $2$ second, the rocket is $28.3$ m above the ground; after $4$ seconds, $25.6$ m; after $5$ seconds, $14.7$ m.\n\n- \n  - Write down a system of three linear equations in terms of $a$, $b$ and $c$.\n  - Hence find the values of $a$, $b$ and $c$. <span class="marks">[3]</span>\n\n\n- Find the height, above the ground, of the platform. <span class="marks">[1]</span>\n\n- Find the time it takes for the rocket to hit the ground. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - We have\n\n\n  $$\n  \\begin{align*}\n  \\tcbhighmath{\\begin{array}{rcccccl}\n  4a &+& 2b &+& c &=& 28.3 \\\\[3pt]\n  16a &+& 4b &+& c &=& 25.6 \\\\[3pt]\n  25a &+& 5b &+& c &=& 14.7\n  \\end{array}} \n  \\tag*{\\textbf{A2}}\n  \\end{align*}\n  $$\n\n  \n  - Using a G.D.C. we find $\\answer{a = -3.18, \\hspace{0.25em} b = 17.8, \\hspace{0.25em} c = 5.53}$\n\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Evaluating $s(t)$ at $t = 0$, we obtain the height of the platform\n\n\n$$\n\\begin{align*}\n\\hspace{7.2em} s(0) &= -3.18(0)^2 + 17.8(0) + 5.53 \\tag*{\\textbf{A1}}\\\\[6pt]\n&\\hspace{0.275em}\\answer{= 5.53 \\text{ m}}\n\\end{align*}\n$$\n\n\n- Solving the equation $s(t) = 0$ for $t$, we find\n\n  $$\n  \\begin{align*}\n  -3.18t^2 + 17.8t + 5.53 &= 0 \\hspace{10.8em}\\tag*{\\textbf{M1}}\\\\\n  t&=-0.295..., 5.8925...\\hspace{3em} [\\text{by using G.D.C.}]\n  \\end{align*}\n  $$\n\nThe value of $t$ must be positive\n\n  $$\n  \\begin{equation*}\n  \\answer{t =5.89 \\text{ seconds}} \\tag*{\\textbf{A1}}\n  \\end{equation*}\n  $$\n\n',
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
    title: 'Question 5',
    content:
      'In an ecology experiment, a number of mosquitoes are placed in a\ncontainer with water and vegetation. The population of mosquitoes, $P$,\nincreases and can be modelled by the function\n\n$$\nP(t) = 24\\times 4^{0.385t}, \\hspace{0.5em} t \\geq 0,\n$$\n\nwhere $t$ is\nthe time, in days, since the mosquitoes were places in the\ncontainer.\n\n- Find the number of mosquitoes:\n  \n  - initially placed in the container;\n  - in the container after $5$ days. <span class="marks">[4]</span>\n\n\n\nThe maximum capacity of the container is $5000$ mosquitoes.\n\n- Find the number of days until the container reaches its\nmaximum capacity. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- \n  - Evaluating $P(t)$ for $t = 0$, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.3em} P(0) &= 24\\times 4^{0.385(0)} \\\\[6pt]\n    &\\answer{= 24}\\end{aligned}\n    $$\n\n  - Evaluating $P(t)$ for $t = 5$, we obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.3em} P(5) &= 24\\times 4^{0.385(5)} \\\\[6pt]\n    &\\answer{\\approx 346}\\end{aligned}\n    $$\n\n\n- Solving the equation $P(t) = 5000$ for $t$, find\n\n  $$\n  \\begin{aligned}\n  24\\times 4^{0.385t} &= 5000 \\hspace{1.9em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{15.3em} \\answer{t \\approx 10.0 \\text{ days}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 6',
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
    title: 'Question 7',
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
    title: 'Question 8',
    content:
      'An eagle is sitting in her nest and scanning the area for prey.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/36821331-1fa8-495a-bc0b-36afa80ad28c/images/beb96113-bce6-4e9f-96f9-57c723565e26/eagle.png)\n\n\nThe height, $h$, of the eagle above the ground, in metres, is modelled by the following quadratic function.\n$h(t)=1.8t^2-8.7t+14$, $t \\geq 0$\nwhere $t$ is the time in seconds after the eagle begins to move.\n\n- Write down the height above the ground of the eagles nest. <span class="marks">[1]</span>\n\n- The eagle sees a dormouse and swoops down to try and catch it, however, the dormouse runs away and the eagle returns back to the nest.\n  \n  - How high above the ground was the eagle when it turned around and went back to the nest?\n  - How long does it take for the eagle to return to the nest, from the time it left the nest? <span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- The eagle is initially in her nest, that is at $t=0$. Therefore her height is\n\n  $$\n  \\begin{align*}\n      h(0)&=1.8\\times(0)^2-8.7\\times(0)+14\\\\\n      &=14\n  \\end{align*}\n  $$\n\nThe nest is $\\answer{14\\,\\text{m}}$ above the ground.\n- \n  - The eagle turns around and returns to the nest at the minimum point of $h(t)$ with the $y$-coordinate being the height above the ground at this moment.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/36821331-1fa8-495a-bc0b-36afa80ad28c/images/b14f56e1-7645-4a85-a4f1-c17abecdf0c8/para1.png)\n\n\n    The eagle was $\\answer{3.49\\,\\text{m}}$ above the ground when it turned around.\n  - The nest is $14$m above the ground. By solving $h(t)=14$ we can find the time the eagle arrives back at the nest.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/36821331-1fa8-495a-bc0b-36afa80ad28c/images/e5dafd1a-8037-4edf-9ab2-63ad77102b02/para2.png)\n\n\n    The eagle took $\\answer{4.83\\,\\text{s}}$ to return to the nest.\n\n',
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
    title: 'Question 9',
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
    title: 'Question 10',
    content:
      'In the realm of Artificial Intelligence (AI), machine learning models are trained using data sets. The time taken to train a machine learning model is directly proportional to the size of the training data set. This is shown by the following:\n\n$$\n\\begin{align*}\nt &\\propto x\n\\end{align*}\n$$\n\nWhere $t$ is training time in hours, and $x$ is the size of the training data set in gigabytes.\nIt is known that a certain machine learning model takes $15$ hours to train using a data set of size $100$ gigabytes.\n\n- Find an equation for $t$ in terms of $x$. <span class="marks">[2]</span>\n\n- If a dataset of 250 gigabytes is used, determine the expected training time. <span class="marks">[2]</span>\n\n\nThe larger the data set that is used for training, the more effective the machine learning model is deemed to be.\nA new and improved training model has been developed, so that a machine learning model can be trained in the same amount of time as the previous model, using larger data sets. The equation for the new model is $t=0.1x$.\n\n- Given a training time of $20$ hours, determine the difference in the size of the data sets between the first and second machine learning models. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{align*}\n  t &= kx\n  \\end{align*}\n  $$\n\n  And if $x=100$, then $t=15$:\n\n  $$\n  \\begin{align*}\n  15 &= 100k \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Hence $k=0.15$ and we have $\\answer{t = 0.15x}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\\end{aligned}  \n  $$\n\n- Substituting $x=250$ into our equation from part (a), we have\n\n  $$\n  \\begin{align*}\n  t &= 0.15 \\times 250 \\tag*{\\textbf{(M1)}} \n  \\end{align*}\n  $$\n\n  $\\answer{\\text{The expected training time is $37.5$ hours.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\\end{aligned}  \n  $$\n\n- Using the first model, with $t=20$, we have\n\n  $$\n  \\begin{align*}\n  20 &= 0.15x \\tag*{\\textbf{(M1)}} \\\\[8pt]\n  x&\\approx 133 \\text{ gigabytes}\n  \\end{align*}\n  $$\n\n  Using the second model, with $t=20$, we have\n\n  $$\n  \\begin{align*}\n  20 &= 0.1x \\tag*{\\textbf{(M1)}} \\\\[8pt]\n  x&= 200 \\text{ gigabytes}\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{The difference in data set sizes is approximately $67$ gigabytes.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\\end{aligned}  \n  $$\n\n',
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
    title: 'Question 11',
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
    title: 'Question 12',
    content:
      'A water tank has a float valve that allows water to enter while the tank is not full.  Over time, the float valve reduces the water flow until the tank is almost at its maximum capacity.\nThe amount of water in the tank, in litres, is given by the function $W(t)=5\\,000-C\\left(1.04^{-t}\\right)$\nwhere $t$ is minutes after the tank starts to fill.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b93229be-02cb-4ca6-90cd-091a590021f8/images/206420d5-addd-4321-a0d4-63591b3fa52a/779.JPEG)\n\n\n\n- Given that the tank was initially empty, find the value of $C$.<span class="marks">[2]</span>\n\n- State what the horizontal asymptote represents in the context of the question.<span class="marks">[1]</span>\n\n- Find the total amount of water in the tank after one and half hours. Give your answer in cubic metres. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Substituting $t=0$, and letting $W(0)=0$, to solve for $C$, we get\n\n  $$\n  \\begin{align*}\n  0 &= 5\\hspace{0.15em}000 - C(1.04^{-0}) \\tag*{\\textbf{(M1)}} \\\\[5pt]\n  &= 5\\hspace{0.15em}000-C \\\\[7pt]\n  &\\hspace{-0.8em}\\tcbhighmath{C = 5\\hspace{0.15em}000} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The horizontal asymptote represents the maximum capacity of the tank, which is $5\\,000$ litres.\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{R1}}\n  \\end{align*}\n  $$\n\n- First, we must convert the given time to minutes, because minutes is the unit used in the question.\n\n  $$\n  \\begin{align*}\n      1.5\\text{ hours}&= 90\\text{ minutes}\n  \\end{align*}\n  $$\n\n  Then the amount of water, in litres, after 90 minutes is\n\n  $$\n  \\begin{align*}\n      W(90) &= 5\\,000-5\\,000\\left(1.04^{-90}\\right) \\tag*{\\textbf{(M1)}}\\\\[5pt]\n      &= 4\\hspace{0.15em}853.45... \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Now we must convert from litres to cubic metres, using the fact that $1\\,000$ litres $=1\\,\\text{m}^3$. We can divide the amount in litres by $1\\,000$.\n  Expressed in cubic metres, we obtain\n\n  $$\n  \\begin{align*}\n  4\\hspace{0.15em}853.45\\text{ litres} &= \\enskip\\, \\tcbhighmath{4.85\\hspace{0.25em}\\textrm{m}^3\\,(3\\,\\text{s.f.)}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
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
    title: 'Question 14',
    content:
      'An owl takes off from from a tree branch and flies higher into the sky. Its height above the ground after $t$ seconds, where $t\\geq 0$, is given by $s(t) = at^3 + bt^2 + ct+d$, where $a,b,c,d \\in \\mathbb{R}$ and $s(t)$ is measured in metres.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/f2f10540-8736-484c-b76e-293673a1a920/images/e10ba209-e2d4-4ca9-a89f-fc01ced21fb2/owl.png)\n\n\nInitially the owl is $12\\,$ metres above the ground.\n\n- Write down the value of $d$. <span class="marks">[1]</span>  \n\nAfter $1$ second, the owl is $19.8$ m above the ground; after $2$ seconds, $34.5$ m; after $4$ seconds, $22.8$ m.\n\n- \n  - Write down a system of three linear equations in terms of $a$, $b$ and $c$.\n  - Hence find the values of $a$, $b$ and $c$.  <span class="marks">[3]</span>\n\n\n\nAfter some time the owl reaches a maximum height. At this time it spots some prey at ground level and then immediately swoops down to catch it.\n\n- \n  - Find the maximum height of the owl above the ground as it spots the prey.\n  - Find the time it catches the prey. <span class="marks">[2]</span>\n\n\n',
    markScheme:
      '\n- $d=12$ m\n\n\n$$\n\\begin{align*}\n    \\tag*{\\textbf{A1}}\n\\end{align*}\n$$\n\n\n- \n  - We have\n\n\n  $$\n  \\begin{align*}\n  \\answer{\\begin{array}{rcccccccl}\n  a &+& b &+& c &+& 12&=& 19.8 \\\\[3pt]\n  8a &+& 4b &+& 2c &+& 12&=& 34.5 \\\\[3pt]\n  64a &+& 16b &+& 4c &+& 12&=& 22.8\n  \\end{array}}\n  \\tag*{\\textbf{M1A1}}\n  \\end{align*}\n  $$\n\n  \n  - Using a G.D.C. we can find the values of the parameters, $a=-2.575$, $b=11.175$ and $c=-0.8$.\\[6pt]\nThese values can be rounded to three significant figures giving\n$\\answer{a = -2.58, \\hspace{0.25em} b = 11.2, \\hspace{0.25em} c = -0.8} $\n\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- \n  - The coordinates of the local maximum of when the owl spots the prey is $(2.857..., 40.96...)$.\n    The $y-$coordinate of this local maximum gives the height of the owl as it spots the prey.\\[6pt]\nHence the owl is at a height of $\\answer{41.0\\,\\text{m}}$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - The owl catches the prey when the height of the owl is zero, i.e. $s(t)=0$ when $t>0$. This can be found with a G.D.C., $(4.501..., 0)$. With the $x-$coordinate being the time.\n    Hence the owl catches the prey at $\\answer{t=4.50\\,\\text{s}}$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n',
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
    title: 'Question 15',
    content:
      'The average time, $T$, in seconds, it takes for a customer to find their\nfavourite menu item in an alphabetical menu list can be modelled by the\nfunction\n\n$$\n\\begin{aligned}\nT(n) &= \\dfrac{3}{2}\\log_2(n+1), \\hspace{0.5em} n \\geq 1,\\end{aligned}\n$$\n\nwhere $n$ is the number of different menu items in the list.\nMehmet visits Taste of Adana Restaurant for the first time to have a\nlunch.\n\n- The restaurant serves $10$ different fresh salads. Find the time it\ntakes for Mehmet to find Persian Salad in the Fresh Salads section\nof the menu list. <span class="marks">[2]</span>\n\n- It takes $7.5$ seconds for Mehmet to find Lamb Chops Kebab in the\nAdana Kebab section of the menu list. Find the number of different\nkebab dishes served by the restaurant. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Evaluating $T(n)$ for $n = 10$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} T(10) &= \\dfrac{3}{2}\\log_2(10+1) \\\\[6pt]\n  &\\answer{\\approx 5.19 \\text{ seconds}}\\end{aligned}\n  $$\n\n- Solving the equation $T(n) = 7.5$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{3}{2}\\log_2(n+1) &= 7.5 \\hspace{6.1em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{9.45em} \\answer{n = 31} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 16',
    content:
      'The diagram below shows the graph of a quadratic function\n$f(x) = 2x^2 + bx + c$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/1f982a52-59ba-4f95-a36a-b780904e0f9b/images/45767584-5045-4282-ac7c-db20e0fb8792/75e0c507b59edc93cc9f79e429c580e90c045817.svg)\n\n\n\n- Write down the value of $c$. <span class="marks">[1]</span>\n\n- Find the value of $b$ and write down $f(x)$. <span class="marks">[3]</span>\n\n- Calculate the coordinates of the vertex of the graph of $f$.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- $\\answer{c = -30}$\n- The graph of $f$ passes through the point P$(3,0)$.\nHence, using the coordinates of P, we get\n\n  $$\n  \\begin{aligned}\n  f(3) &= 0 \\hspace{3em} \\\\[6pt]\n  2(3)^2 + b(3) - 30 &= 0 \\\\[6pt]\n  18 + 3b - 30 &= 0 \\\\[6pt]\n  3b - 12 &= 0 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{4em} \\answer{b = 4}\n  $$\n\n  Hence we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.4em} \\answer{f(x) = 2x^2 + 4x - 30}\\end{aligned}\n  $$\n\n- The axis of symmetry of the graph of $f$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.5em}  x &= -\\dfrac{b}{2a} \\\\[6pt]\n  x &= -\\dfrac{4}{2(2)} \\\\[8pt]\n  x &= -1\\end{aligned}\n  $$\n\n  Evaluating $f(x)$ for $x = -1$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.65em} f(-1) &= 2(-1)^2 + 4(-1) - 30 \\\\[6pt]\n  &= -32\\end{aligned}\n  $$\n\n  Hence the coordinates of the vertex are\n$\\answer{(-1,-32)}$\n',
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
    title: 'Question 17',
    content:
      'PM$2.5$ particles are tiny air pollutants with a diameter of $2.5$\nmicrometres or less. In comparison, the average diameter of a human hair\nis about $70$ $\\text{micrometres}$. Air pollution from diesel &\npetrol engines form part of PM$2.5$ emissions and\nof $\\text{particular}$ concern due to the\nhealth impacts.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/317d2b94-7c4d-4921-822c-e2e52637e72e/images/6e671114-89e5-4a4e-97fd-f26f87bea003/2e913d65859b2219fd828cae63e39f9922b8ba1c.svg)\n\n\nDuring a particular working day, the rate of PM$2.5$ emissions, in grams\nper second, from all road vehicles in Beijing, China is modelled by the\nfunction\n\n$$\nE(t) = 6\\sin\\left(\\dfrac{\\pi}{6}t - \\dfrac{5\\pi}{6}\\right) + 9, \\hspace{0.5em} 0 \\leq t \\leq 24,\n$$\n\nwhere $t$ is the elapsed time, in hours, since midnight.\n\n- Find the maximum rate of PM2.5 emissions during the day in Beijing,\nChina.<span class="marks">[2]</span>\n\n- Find the times at which the maximum rate of PM2.5 emissions occur\nduring the day. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The max value of the sine function is $1$.\nHence the max rate of PM2.5 emissions during the day is\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.55em} E_{\\text{max}} &= 6(1) + 9 \\\\[6pt]\n  &\\answer{= 15 \\text{ g$/$sec}}\\end{aligned}\n  $$\n\n- Solving the equation $E(t) = 15$ for $t$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} 6\\sin\\left(\\dfrac{\\pi}{6}t - \\dfrac{5\\pi}{6}\\right) + 9 &= 15 \\\\[4pt]\n  t &= 8,\\hspace{0.25em} 20 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence the max rate of PM2.5 emissions occurs at\n$\\answer{8 \\text{ am}}$\nand  $\\answer{8 \\text{ pm}}$\n',
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
    title: 'Question 18',
    content:
      'The tip of a large wind turbine\'s blade rotates at a constant speed on a\nwindy day. Its height, $H$ , in metres, above\nthe ground is modelled by the function\n\n$$\nH(t) = 52\\sin\\hspace{0.15em}(\\ang{60}\\hspace{-0.15em}\\times t) + 80,\n$$\n\nwhere $t$ is the elapsed time, in seconds, since the turbine was\naccelerated to its max speed.\n\n- Write down the minimum height of the blade\'s tip above the ground.\n<span class="marks">[2]</span>\n\n- Find the height of the blade\'s tip above the ground after $8$\nseconds. <span class="marks">[2]</span>\n\n- Find the time it takes for the blade\'s tip to complete one full\nrevolution. <span class="marks">[2]</span>\n\n',
    markScheme:
      "\n- The min value of the sine function is $-1$.\nHence the min height of the blade's tip is\n\n  $$\n  \\begin{aligned}\n  H_{\\text{min}} &= 52(-1) + 80 \\hspace{1.7em} \\\\[6pt]\n  &\\answer{= 28\\text{ m}}\\end{aligned}\n  $$\n\n- Evaluating $H(t)$ for $t = 8$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.5em} H(8) &= 52\\sin\\hspace{0.15em}(\\ang{60}\\hspace{-0.15em}\\times 8) + 80 \\\\[6pt]\n  &= 52\\sin \\ang{480} + 80 \\\\[6pt]\n  &\\answer{\\approx 125\\text{ m}}\\end{aligned}\n  $$\n\n- If we draw the graph of $y = D(t)$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/345633bb-e844-436b-bd39-eff8642672ef/images/5f3d01f7-4c01-4f77-b034-46af9d83cc7a/279de316931380f9a5da6848695c261465d527a8.svg)\n\n\n  Hence it takes\n$\\answer{6 \\text{ seconds}}$\nfor the blade's tip to complete one full revolution.\n",
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
    title: 'Question 19',
    content:
      'The orbital velocity, $v$, of a spacecraft in km/s is given by\n\n$$\nv = -0.0098t + c \\ln R,\n$$\n\nwhere $t$ is the firing time in seconds, $c$\nis the exhaust velocity in km/s and $R$ is the mass ratio.\nIf $R=30$, find\n\n- The orbital velocity, $v$, after a firing time of 150 seconds and an\nexhaust velocity of 3 km/s. <span class="marks">[2]</span>\n\n- The exhaust velocity, $c$, of the spacecraft traveling at an orbital\nvelocity of $9.5 \\text{ km/s}$ after a firing time of 150 seconds.\n<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Substituting in $t=150$, $c=3$ and $R=30$, we get\n\n  $$\n  \\begin{aligned}\n  v &= -0.0098(150) + (3) \\ln (30)\\hspace{0.5cm}\\\\[6pt]\n  &\\hspace{0.35em}\\answer{ \\approx 8.73 \\text{ km/s}}\\end{aligned}\n  $$\n\n- Substituting in $v=9.5$, $t=150$ and $R=30$, we can solve for $c$\n\n  $$\n  \\begin{aligned}\n  9.5 &= -0.0098(150) + c \\ln (30)\\hspace{0.5cm}\\\\[8pt]\n  c \\ln (30) &= 9.5 + 0.0098(150)\\\\[8pt]\n  c &= \\dfrac{9.5+0.0098(150)}{\\ln (30)}\\\\[8pt]\n  &\\hspace{0.35em}\\answer{ \\approx 3.23 \\text{ km/s}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 20',
    content:
      'The magnitude of an earthquake, $M$, on the Richter scale, can be\nmodelled by the function\n\n$$\nM(E) = \\dfrac{2}{3}\\log_{10}(E) - 3.2, \\\\[3pt]\n$$\n\nwhere $E$ is the\namount of energy, in joules, released by the earthquake.\n\n- Find the magnitude of an earthquake which releases\n$6.3\\times10^{13}$ joules of $\\text{energy}$. <span class="marks">[2]</span>\n\n\nThe Great Chilean Earthquake of $1960$, the most powerful earthquake\nrecorded in the $20$th century, had a magnitude of $9.5$ on the Richter\nscale.\n\n- Find the amount of energy, in joules, released by the Great\nChilean $\\text{Earthquake}$. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Evaluating $M(E)$ for $E = 6.3\\times10^{13}$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{6em} M(E) &= \\dfrac{2}{3}\\log_{10}(6.3\\times10^{13}) - 3.2 \\\\[6pt]\n  &\\answer{\\approx 6.00}\\end{aligned}\n  $$\n\n- Solving the equation $M(E) = 9.5$ for $E$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{2}{3}\\log_{10}(E) - 3.2 &= 9.5 \\hspace{7.85em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{14.2em} \\answer{E \\approx 1.12\\times10^{19} \\text{ joules}} \\hspace{2em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 21',
    content:
      'The water depth, $D$, in metres, in a harbour on a particular day can be\nmodelled by the equation\n\n$$\nD = 2.5\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t) + 5, \\hspace{0.5em} 0 \\leq t \\leq 24, \\\\[3pt]\n$$\n\nwhere $t$ is the elapsed time, in hours, since midnight.\n\n- Draw the graph of $D$ versus $t$ on the grid below. <span class="marks">[2]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/847eec72-676b-4606-a4fb-3dcfedc9b6da/images/4265cedf-520e-4467-bdb0-2d56bcfc7630/19fd3a817fff397619c38bc3f6d8f3794089c50d.svg)\n\n\n- Find the lowest and highest depths of water in the harbour, and the\ntimes when they occur. <span class="marks">[2]</span>\n\n- A large yacht has a draught of $3$ metres. Decide whether the yacht\nwill be able to enter the harbour at $5$ pm. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- If we draw the graph of $D$ versus $t$ on the grid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/847eec72-676b-4606-a4fb-3dcfedc9b6da/images/ba52a231-78e9-46b9-857b-1237e71c6260/99ad31616997cbd93f3b2bcca5b2e21cec1a56b5.svg)\n\n\n- From the graph of $D$ versus $t$ on the grid above, we have\n\n  $$\n  \\begin{aligned}\n  \\answer{D_{\\text{min}} = 2.5 \\text{ m}}\\hspace{0.525em} &\\text{ when }\\hspace{0.525em}\\answer{t = 6, 18} \\\\[6pt]\n  \\hspace{4.2em} \\answer{D_{\\text{max}} = 7.5 \\text{ m}}\\hspace{0.525em} &\\text{ when }\\hspace{0.525em}\\answer{t = 0, 12, 24}\\end{aligned}\n  $$\n\n- Evaluating $D$ when $t = 17$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} D &= 2.5\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times 17) + 5 \\\\[6pt]\n  &= 2.5\\cos 5\\ang{10} + 5 \\\\[6pt]\n  &\\approx 2.83\\text{ m} \\\\[6pt]\n  &< 3 \\text{ m}\\end{aligned}\n  $$\n\n  Hence the yacht\n$\\answer{\\text{will not be able}}$\nto enter the harbour at $5$ pm.\n',
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
    title: 'Question 22',
    content:
      'For $2019$, the income tax rates for a resident in UK are shown on the\ngraph below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/92f945de-d157-4da3-bd84-e9ceb61ac7f4/images/10766b83-e4d8-4b2c-bca4-d3ffad2296e5/b0ad0a092577a73313e3e5cec3d37079a38fab29.svg)\n\n\n\n- Write down the highest amount of income that is free of tax.\n<span class="marks">[1]</span>\n\n- Calculate the amount of tax payable on the first\n£$50\\hspace{0.15em}000$ of income.<span class="marks">[2]</span>\n\n- Theresa earns £$148\\hspace{0.15em}500$ in $2019$. Find the amount of\nher income tax payable.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{\\text{\\pounds}12\\hspace{0.15em}500}$\n- Evaluating tax payable for the income of £$50\\hspace{0.15em}000$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{1em} \\text{Tax payable} &= 0 + 0.2(50\\hspace{0.15em}000 - 12\\hspace{0.15em}500) \\\\[6pt]\n  &\\answer{= \\text{\\pounds}7500}\\end{aligned}\n  $$\n\n- Evaluating tax payable for the income of £$148\\hspace{0.15em}500$,\nwe obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\text{Tax payable} &= 7500 + 0.4(148\\hspace{0.15em}500 - 50\\hspace{0.15em}000) \\\\[6pt]\n  &\\answer{= \\text{\\pounds}46\\hspace{0.15em}900}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 23',
    content:
      'The water depth, $D$, in metres, in a harbour on a particular can be\nmodelled by the equation\n\n$$\nD = 3\\sin\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t) + 5, \\hspace{0.5em} 0 \\leq t \\leq 24, \\\\[3pt]\n$$\n\nwhere $t$ is the elapsed time, in hours, since midnight.\n\n- Draw the graph of $D$ versus $t$ on the grid below. <span class="marks">[2]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9aa0d706-15a7-45ce-b7c4-c439903d95d0/images/88525833-f18f-4bc6-8659-178e0c8217ce/bc607b763c6a7abff0abf4c7db110b192240d1a3.svg)\n\n\n- Find the lowest and highest depths of water in the harbour, and the\ntimes when they occur. <span class="marks">[2]</span>\n\n- A large boat has a draught of $2.5$ metres. Decide whether the boat\nwill be able to enter the harbour at $8$ pm. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- If we draw the graph of $D$ versus $t$ on the grid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9aa0d706-15a7-45ce-b7c4-c439903d95d0/images/c2909ae5-a8e9-4c71-8012-36bfe1b65413/5c4bc36227599f18aecea5fee37d5db9b328bd33.svg)\n\n\n- From the graph of $D$ versus $t$ on the grid above, we have\n\n  $$\n  \\begin{aligned}\n  \\answer{D_{\\text{min}} = 2 \\text{ m}}\\hspace{0.525em} &\\text{ when }\\hspace{0.525em}\\answer{t = 9, 21} \\\\[6pt]\n  \\hspace{1.35em} \\answer{D_{\\text{max}} = 8 \\text{ m}}\\hspace{0.525em} &\\text{ when }\\hspace{0.525em}\\answer{t = 3, 15}\\end{aligned}\n  $$\n\n- Evaluating $D$ when $t = 20$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.5em} D &= 3\\sin\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times 20) + 5 \\\\[6pt]\n  &= 3\\sin 600\\text{\\textdegree} + 5 \\\\[6pt]\n  &\\approx 2.40\\text{ m} \\\\[6pt]\n  &< 2.5 \\text{ m}\\end{aligned}\n  $$\n\n  Hence the boat\n$\\answer{\\text{will not be able}}$\nto enter the harbour at $8$ pm.\n',
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
    title: 'Question 24',
    content:
      'The size of the trunk diameter of a chestnut oak tree, $d$, in\ncentimetres, can be modelled by the function\n\n$$\nd(t) = 9\\ln(0.25\\hspace{0.05em}t), \\hspace{0.5em} t \\geq 5, \\\\[3pt]\n$$\n\nwhere $t$ is the age, in years, of the tree.\n\n- Find the size of the trunk diameter of a $10$-year-old chestnut oak\ntree.<span class="marks">[2]</span>\n\n- The size of the trunk diameter of a chestnut oak tree is\n$15$ cm. Find its age. <span class="marks">[2]</span>\n\n\nA chestnut oak tree can be harvested for wood when the size of its trunk\ndiameter reaches $20$ cm.\n\n- Find the age of the chestnut oak tree when it is old enough\nto be harvested for timber. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Evaluating $d(t)$ for $t = 10$, we get\n\n  $$\n  \\begin{aligned}\n  d(10) &= 9\\ln(0.25(10)) \\\\[6pt]\n  &\\answer{= 8.25 \\hspace{0.25em}\\text{ cm}}\\end{aligned}\n  $$\n\n- Solving the equation $d(t) = 15$ for $t$, we obtain\n\n  $$\n  \\begin{aligned}\n  9\\ln(0.25\\hspace{0.05em}t) &= 15 \\hspace{7em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.1em} \\answer{t = 21.2 \\text{ years}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Solving the equation $d(t) = 20$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  9\\ln(0.25\\hspace{0.05em}t) &= 20 \\hspace{7em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.1em} \\answer{t = 36.9 \\text{ years}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 25',
    content:
      'Jack, a volleyball player, serves the ball with a trajectory modelled by the function\n\n$$\nh_1(x)=-0.12x^2+x+0.725\n$$\n\nwhere $h$ is the height of the ball above the ground, in metres, and $x$ is the horizontal distance from the serving point, in metres.\n\n- Find the height of the ball when Jack makes his serve (i.e. the height above the ground at the point where he connects with the ball).<span class="marks">[2]</span>  \n\nUnfortunately, the serve is short and misses. For his next attempt, Jack will serve the ball $c$ metres higher at the serving point, so that the ball has the same trajectory (only the vertical height changes, increasing by $c$ metres).\n\n- Write down a second function, $h_2(x)$, modelling the new path of the ball in terms of $x$ and $c$.<span class="marks">[1]</span>\n\n- \n  - Calculate  the value of $c$, if the horizontal distance is $10$ metres from the serving point to the point where the ball would hit the ground.\n  - Determine the vertical height of the ball from which Jack makes his successful serve.<span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- Letting $x=0$ and solving for $h_1(0)$, we get\n\n  $$\n  \\begin{align*}\n  h_1(x) &= -0.12x^2+x+0.725 \\\\[6pt]\n   h_1(0) &= -0.12(0)^2+(0)+0.725 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 0.725 \\\\[6pt] \n  \\end{align*}\n  $$\n\n  Therefore the ball was served at a height of $\\answer{\\text{$0.725$ metres}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- As $c$ is a vertical height, we get\n\n  $$\n  \\begin{align*}\n  &\\hspace{-0.3em}\\tcbhighmath{h_2(x)=-0.12x^2+x+0.725+c} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- \n  - Given that the distance is $10$ metres, we have $h_2(10)=0$, thus\n\n    $$\n    \\begin{align*}\n    h_2(10) &= 0 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n    -0.12(10)^2+10+0.725+c&=0 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n    &\\hspace{-0.9em} \\tcbhighmath{c = 1.275} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Height of ball at  service point = 0.725 + 1.275\n\n    $$\n    \\begin{align*}\n    &\\hspace{-0.3em}\\tcbhighmath{{\\text{height = $2$ metres}}}\\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n',
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
    title: 'Question 26',
    content:
      'A house located in a town experiencing drought issues features a square-shaped roof, with each side being $x$ meters.\nThe roof is able to catch and store rainwater.\nDuring a rainfall, it is known that the mean amount of rainwater ($W$ in litres) collected is directly proportional to the square of $x$.\nIt is known that the system can collect $19\\hspace{0.15em}845$ litres when the value of $x$ is $7$ metres.\n\n- Find an equation for $W$ in terms of $x$.<span class="marks">[2]</span>  \n\nThe formula found in part (a) can be used to determine the mean amount of rainwater ($W$ in litres) collected by other houses in the town with a square roof.\n\n- Determine the side length of a square roof that has collected $32\\hspace{0.1em}805$ litres during a rainfall. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- According to the description we have\n\n  $$\n  \\begin{align*}\n      W &= cx^2 \\\\\n      19\\hspace{0.15em}845 &= c(7)^2 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n      c &= \\dfrac{19\\hspace{0.15em}845}{49} \\\\[6pt]\n      c &= 405\\\\[-10pt]\n  \\end{align*}\n  $$\n\nTherefore, the formula is $\\answer{W(x)=405x^2}$\n\n  $$\n      \\tag*{\\textbf{A1}}\n  $$\n\n\n$\\textcolor{white}{gap}$\n\n- Substituting $W=32\\hspace{0.1em}805$ into our equation from part (a), we have\n\n  $$\n  \\begin{align*}\n      32\\hspace{0.1em}805 &= 405x^2 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n      x^2 &= \\dfrac{32\\hspace{0.1em}805}{405} \\\\[6pt]\n      &= 81 \\tag*{\\textbf{(M1)}} \\\\[6pt]\n      &\\hspace{-0.5em}\\tcbhighmath{x = 9\\hspace{0.15em}\\text{m}}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
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
    title: 'Question 27',
    content:
      'Atmospheric pressure, $P$, in kPa, decreases exponentially with\nincreasing height above sea level, $h$. The atmospheric pressure can be\nmodelled by the function\n\n$$\n\\begin{aligned}\nP(h) &= 101\\times\\bigg(\\dfrac{25}{22}\\bigg)^{-h},\\end{aligned}\n$$\n\nwhere\n$h$ is the height above sea level in kilometres.\n\n- Write down the exact atmospheric pressure at sea level, in kPa.\n<span class="marks">[1]</span>\n\n\nMount Kosciuszko is the highest mountain in Australia with a height of\n$2228$ $\\text{metres}$ above sea level at the top.\n\n- Calculate the atmospheric pressure at the top of the Mount\nKosciuszko. <span class="marks">[2]</span>\n\n- Calculate the height where the atmospheric pressure is\nequal to $10$ kPa. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{101 \\text{ kPa}}$\n- Evaluating $P(h)$ for $h = 2.228$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.6em} P(2.228) &= 101\\times\\bigg(\\dfrac{25}{22}\\bigg)^{-2.228} \\\\[6pt]\n  &\\answer{\\approx 76.0 \\text{ kPa}}\\end{aligned}\n  $$\n\n- Solving the equation $P(h) = 10$ for $h$, we obtain\n\n  $$\n  \\begin{aligned}\n  101\\times\\bigg(\\dfrac{25}{22}\\bigg)^{-h} &= 10 \\hspace{8.1em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11em} \\answer{h = 18.1\\hspace{0.25em}\\text{km}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 28',
    content:
      'A Ferris wheel rotates at a constant rate in a clockwise direction. The height of a passenger car above the ground, $h$ metres, at time $t$ minutes, can be modelled by\n\n$$\n\\begin{align*}\n    h(t)=a \\sin (bt) + c \\, , \\hspace{3em}\\text{where $a, b, c \\in \\mathbb{R}$.}\n\\end{align*}\n$$\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/01bb276f-eb90-4d9f-80b8-d3071fb7b4e5/images/a13e08ac-86a9-45d8-9793-3dcecb46fb25/ai1056.PNG)\n\n\nWhen $t=0$, the passenger car is $75$ metres above the ground.\n\n- State the value of $c$.<span class="marks">[1]</span>  \n\nThe passenger car first reaches its maximum height of $135$ metres when $t=6$.\n\n- Find the value of\n  \n  - $a$.\n  - $b$.<span class="marks">[3]</span>\n\n\n\nA ride on the Ferris wheel consists of two full rotations.\n\n- Calculate the how long it takes to ride on the Ferris wheel.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- We have $h(0)=75$. Substituting these values into our equation, we have\n\n  $$\n  \\begin{align*}\n  h(t)&=a \\sin (bt) + c \\\\[8pt]\n  h(0)&=a \\sin (b\\times0) + c \\\\[8pt]\n  75 &= a \\sin(0) + c \\\\[8pt]\n  &\\hspace{-0.8em}\\tcbhighmath{c = 75}\n  \\end{align*}\n  $$\n\n- \n  - We have $h(6)=135$. Substituting these values into our equation, we have\n\n    $$\n    \\begin{align*}\n    h(t)&=a \\sin (bt) + 75 \\\\[8pt]\n    h(6)&=a \\sin (6b) + 75 \\\\[8pt]\n    135&=a \\sin (6b) + 75 \\\\[8pt]\n    a \\sin (6b) &= 60\n    \\end{align*}\n    $$\n\n    Note that at its maximum, $\\sin (6b)$ must equal 1. Hence $\\tcbhighmath{a=60}$\n  - Following on from part (b) (i), the maximum value of a sine function first occurs when the argument is $90^{\\circ}$. Hence we have\n\n    $$\n    \\begin{align*}\n    6b &= 90 \\\\[8pt]\n    &\\hspace{-0.8em}\\tcbhighmath{b=15}\n    \\end{align*}\n    $$\n\n\n- The period of a sine function is given by\n\n  $$\n  \\begin{align*}\n  \\text{period}&=\\dfrac{360}{b} \\\\[8pt]\n  &= \\dfrac{360}{15} \\\\[8pt]\n  &= 24\n  \\end{align*}\n  $$\n\n  One full rotation takes 24 minutes. Given that a ride on the Ferris wheel consists of two full rotations,\n\n  $$\n  \\begin{align*}\n  \\tcbhighmath{\\text{A ride on the Ferris wheel takes $48$ minutes.}}\n  \\end{align*}\n  $$\n\n',
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
    title: 'Question 29',
    content:
      'The graph below shows the amount of money $M$ (in thousands of dollars), in the account of a contractor,  where $t$ is the time in months since he opened the account.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/be163de5-68b0-49ca-94db-b870708b6869/AI1015a.PNG)\n\n\n\n- Write down one characteristic of the graph which suggests that a cubic function might be an appropriate model for the amount of money in the account. <span class="marks">[1]</span>  \n\nThe equation of the model can be expressed as $M(t)=at^3+bt^2+ct+d$, where $a$, $b$, $c$ and $d \\in \\mathbb{R}$. It is given that the graph of the model passes through the following points.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/5c93f523-f86a-4794-ac51-31c1c41cc134/AI1015b.PNG)\n\n\n\n- \n  - State the value of $d$.\n  - Using the values in the table, write down three equations in $a$, $b$, and $c$.\n  - By solving the system of equations from part (ii), find the values of $a$, $b$ and $c$. <span class="marks">[4]</span>\n\n\n\nIf $M$ has a negative value, the contractor is in debt.\n\n- Use the model from part (b) to find the number of months the contractor expects to be in debt. Give your answer to the nearest month. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- The graph of $M$ has exactly one maximum point and one minimum point.\n- \n  - From the table, we have $M(0)=1$. Substituting the value $t=0$ into the model we have\n\n    $$\n    \\begin{align*}\n    M(0)&= a(0)^3+b(0)^2+c(0)+d = d\n    \\end{align*}\n    $$\n\n    We have $M(0)=1$ and $M(0)=d$ and therefore $\\answer{d=1}$\n  - Using the values given in the table, and part (i), we have\n\n    $$\n    \\begin{align*}\n    M(1)&= a(1)^3+b(1)^2+c(1)+1 = 2 \\\\[11pt]\n    M(2) &= a(2)^3+b(2)^2+c(2)+1 = -3 \\\\[11pt]\n    M(3) &= a(3)^3+b(3)^2+c(3)+1 = 4  \\\\[-11pt]\n    \\end{align*}\n    $$\n\n    Hence, the linear system for variables $a$, $b$ and $c$ is\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{\\begin{cases}\n    a+b+c = 1 \\\\[6pt]\n    8a+4b+2c = -4 \\\\[6pt]\n    27a+9b+3c = 3\n    \\end{cases}}\n    \\end{align*}\n    $$\n\n  - Using G.D.C. to solve the linear system found in part (ii), we get\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{a=3,\\, b=-12, \\text{ and } c=10}\n    \\end{align*}\n    $$\n\n\n- Using the G.D.C. to graph the polynomial $M(t)=3t^3-12t^2+10t+1$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/4b085cb1-6cef-4368-855b-cb6f761ecd30/AI1015c.PNG)\n\n\n  Hence, the time the contractor is in debt equals the time between point A and point B:\n\n  $$\n  \\begin{align*}\n  \\text{Time in debt} &= 2.738 - 1.352 \\\\[11pt]\n  &= 1.386\\\\[-10pt]\n  \\end{align*}\n  $$\n\n  To the nearest month, the contractor expects to be in debt for $\\answer{\\text{one month.}}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 30',
    content:
      'The total cost of a gym membership, $C$, in Australian dollars (AUD), in\nJohn\'s Gym can be modelled by the function\n\n$$\n\\begin{aligned}\nC = 65t +30,\\end{aligned}\n$$\n\nwhere $t$ is the time in months.\n\n- Calculate the gym membership cost over a $6$ month duration.\n<span class="marks">[1]</span>\n\n- On the grid below, sketch the graph of the function $C = 65t + 30$,\nfor $t\\geq0$. <span class="marks">[2]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/242b7846-dd0a-4322-956c-9edf06d9bc3f/images/55390a78-3718-4b81-9faf-956a934b2e3f/40ef97be540273524df8765426fe4afbd3aa99f1.svg)\n\n\n- Calculate the time, $t$, in months, when the total cost reach $290$\nAUD. <span class="marks">[1]</span>\n\n\nIn the neighbouring Jetts Gym, the initial payment is $\\$75$ higher than\nin John\'s Gym, however the monthly fee is $\\$35$ lower per month.\n\n- Find the number of months it takes for the total cost to be\nless by attending Jetts Gym in comparison to John\'s Gym. <span class="marks">[2]</span>  \n',
    markScheme:
      "\n- Evaluating $C = 65t + 30$ for $t = 6$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.9em} C &= 65(6) + 30 \\\\[6pt]\n  &\\answer{= 420 \\text{ AUD}}\\end{aligned}\n  $$\n\n- If we sketch the graph of $C = 65t + 30$, for $t \\geq 0$, on the\ngrid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/242b7846-dd0a-4322-956c-9edf06d9bc3f/images/92290ff7-7fd4-46b2-b43d-07393fff434a/ffcb3caa4ff34c194a63936e0581df79e4c6a499.svg)\n\n\n- Solving the equation $C = 290$ for $t$, we obtain\n\n  $$\n  \\begin{aligned}\n  65t + 30 &= 290 \\hspace{3.9em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{12.5em} \\answer{t = 4 \\text{ months}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{John's Gym}:& \\hspace{1.0em} C = 65t + 30 \\qref{(1)} \\\\[6pt]\n  \\text{Jetts Gym}:& \\hspace{1.0em} C = 30t + 105 \\qref{(2)}\\end{aligned}\n  $$\n\n  If we sketch the graphs of $(1)$ and $(2)$, for $t \\geq 0$ [by\nusing G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/242b7846-dd0a-4322-956c-9edf06d9bc3f/images/af2dfaa5-075c-4939-b8c4-fbc3ad83643b/502b76a7a4ee55ede1c0b292e93ff534a6d4ff0f.svg)\n\n\n  Hence it takes\n$\\answer{\\text{\\(2.14\\) months}}$\nfor the total cost to be less by attending Jetts\n  Gym in comparison to John's Gym.\n",
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
    title: 'Question 31',
    content:
      'The subscription fee for an online project management software by\nAB-Tech is $\\$ 40$ per month. If the customer buys for a whole year in\nadvance, a discount of $\\$130$ is applied.\nThis can be modelled by the following function, $P(n)$, which gives the\ntotal cost when paying annually for the subscription.\n\n$$\nP(n) = 40n - 130,\\quad n\\geq 12\n$$\n\nwhere $n$ is the number months.\n\n- Find the total cost of buying a subscription for $2$ years.\n<span class="marks">[2]</span>\n\n- Find $P^{-1}(1790)$. <span class="marks">[2]</span>\n\n\nThe subscription price for a different online project management tool by\nYZ-tech is $\\$35$ per month, however customers can only purchase\nannually in advance, and there are no discounts. The total subscription\ncost of YZ-tech\'s software is less than AB-tech\'s software when $n>k$ .\n\n- Find the minimum value of $k$. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- Substituting $n=24$ into the $P(n)$ function, we get\n\n  $$\n  \\begin{aligned}\n  P(n) &=40n-130\\\\[6pt]\n  P(24) &= 40(24)-130 \\\\[6pt]\n  &\\hspace{0.5em}\\answer{=\\$ 830}\\end{aligned}\n  $$\n\n- Let's denote $P(n)$ by $y$. To find the inverse we can interchange\nthe variables $n$ and $y$ and rearrange for $y$, as follows\n\n  $$\n  \\begin{aligned}\n  y &= 40n-130 \\\\[6pt]\n  n&=40y-130\\\\[6pt]\n  40y&=n+130\\\\[6pt]\n  y&=\\dfrac{n+130}{40}\\\\[6pt]\n  P^{-1}(n) &= \\dfrac{n+130}{40}\\end{aligned}\n  $$\n\n  We can now find\n$P^{-1}(1790)$ as follows\n\n  $$\n  \\begin{aligned}\n  P^{-1}(1790)&=\\dfrac{1790+130}{40}\\\\[6pt]\n  &\\hspace{-3.5em}\\answer{P^{-1}(1790)=48 \\text{ months}}\\end{aligned}\n  $$\n\n- For AB-tech's software we we were given the pricing function\n\n  $$\n  P(n)=40n-130\n  \n  $$\n\n  For YZ-tech, we can define the function, $S(n)$, to\nrepresent the subscription price for their software\n\n  $$\n  S(n)=35n\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/2b908e8c-786e-4fec-844c-19b9653ea308/images/7386b1f2-6825-49b7-88df-da2a1e5501e7/7402d7e1fc9d51e4e9f6b0f5ea74f75143d1438e.svg)\n\n\n  From the graph, $S(n) < P(n)$ for $n>26$.\n  The price of YZ-tech's software is less than AB-tech's when $n>26$.\n  Therefore,  $\\answer{k=26}$\n",
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
    title: 'Question 32',
    content:
      'The Chicago Wheel, the world\'s first Ferris wheel, was designed and\nbuilt in 1893 by an American civil engineer, George W. G. Ferris Jr.\nThe height, in metres, above the ground of a passenger on the Chicago\nWheel after\n$t$ minutes can be modelled by the function\n$h(t) = 38\\cos\\hspace{-0.1em}\\Big(\\dfrac{\\pi}{10}(t-10)\\Big) + 42$.\n\n- Find the maximum height reached by a passenger on the Chicago Wheel.\n<span class="marks">[1]</span>\n\n- Find the height above the ground of a passenger $12$ minutes after\nthe ride has started. <span class="marks">[1]</span>\n\n- Find the time, in minutes, it takes for the Chicago Wheel to\ncomplete one $\\text{rotation}$. <span class="marks">[2]</span>\n\n- Given that passengers only complete one rotation on the Chicago\nWheel, calculate how long they are more than $65$ metres above the\nground. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  h_{\\text{max}} &= 38(1) + 42 \\hspace{2.6em} \\\\[6pt]\n  &\\answer{= 80 \\text{ m}}\\end{aligned}\n  $$\n\n- Evaluating $h(t)$ for $t = 12$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} h(12) &= 38\\cos\\hspace{-0.1em}\\Big(\\dfrac{\\pi}{10}(12-10)\\Big) + 42 \\\\[6pt]\n  &\\answer{\\approx 72.7 \\text{ m}}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.1em} h_{\\text{min}} &= 38\\cos(-1) + 42 \\\\[6pt]\n  &= 4\\end{aligned}\n  $$\n\n  Hence, solving the equation\n$h(t) = h_{\\text{min}}$ for the smallest $t > 0$, we obtain\n\n  $$\n  \\begin{aligned}\n  38\\cos\\hspace{-0.1em}\\Big(\\dfrac{\\pi}{10}(t-10)\\Big) + 42 &= 4 \\hspace{8.5em}\\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{15em} \\answer{t = 20 \\text{ min}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- If we sketch the graph of $y = h(t)$ for $0 \\leq t \\leq 20$\n[$\\text{by using G.D.C.}$], we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/4717f775-0a3f-4223-b3ee-8b10dddef24b/images/ea76f0bb-2822-4d64-9854-793238d573ca/935019cd90c17f379ec426e2bc01f82901b22530.svg)\n\n\n  Hence, using the $t$-coordinates of points A and B, we find\n\n  $$\n  \\begin{aligned}\n  t_{\\text{more than $65$\\hspace{0.25em}m}} &= 12.9 -  7.07 \\hspace{2.3em}  \\\\[6pt]\n  &\\answer{\\approx 5.86 \\text{ min}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 33',
    content:
      'Jasper owns a business and has 7 employees. He can assign any number of employees to a task. The time the task takes varies inversely with the number of employees who are assigned to it. This is shown by the following:\n\n$$\n\\begin{align*}\nt &\\propto \\dfrac{1}{x}\n\\end{align*}\n$$\n\nWhere $t$ is time a task takes in hours, and $x$ is the number of employees assigned to the task.\nIf one employee is assigned to a task, it will take 8 hours to complete the task.\n\n- Find an equation for $t$ in terms of $x$. <span class="marks">[2]</span>  \n\nJasper has a task that must be completed within three hours.\n\n- \n  - Determine the minimum number of employees that should be assigned to the task to ensure it is completed within three hours.\n  - State the total amount of time the task will take. Give your answer to the nearest minute. <span class="marks">[3]</span>\n\n\n\nIf a task does not take a whole number of hours, Jasper must round up to the nearest whole hour to pay his employees.\n\n- Determine the optimal number of employees Jasper should assign to ensure the task is complete within three hours, while minimising the number of hours of work he needs to pay for. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{align*}\n  t &= \\dfrac{k}{x}\n  \\end{align*}\n  $$\n\n  And if $x=1$, then $t=8$:\n\n  $$\n  \\begin{align*}\n  8 &= \\dfrac{k}{1} \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Hence $k=8$ and we have $\\answer{t = \\dfrac{8}{x}} $\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- \n  - We must have $t \\leq 3$ and therefore, using our expression from part (a), we have\n\n    $$\n    \\begin{align*}\n    \\dfrac{8}{x} &\\leq 3 \\\\[8pt]\n    \\dfrac{8}{3} &\\leq x \\tag*{\\textbf{(M1)}}\n    \\end{align*}\n    $$\n\n    $x$ must be $\\geq \\dfrac{8}{3}$, and must be a whole number. Therefore,\n    $\\answer{\\text{A minimum of 3 employees should be assigned to the task.}}$\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n  - $\\dfrac{8}{3}\\approx2.67$. The task will take $2.67$ hours, which we convert to minutes.\n    $\\answer{\\text{The task will take 2 hours and 40 minutes.}}$\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n\n- The following table summarises:\n  \n  - The number of employees assigned to the task ($x$),\n  - The number of hours the task will take ($t$),\n  - The number of hours rounded up to the next whole number,\n  - The number of hours that Jasper will need to pay his employees for.\n\n  Note that, from part (b), the minimum is 3 employees. From the question we note that Jasper has a maximum of 7 employees to assign.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/482806a4-30df-4b2a-a29b-d7456233f260/images/fe2dcac9-63d7-4216-b7d1-8f81abdd1ab2/ai1107a.PNG)\n\n\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M2)}}\t\n  \\end{aligned}\n  $$\n\n  To ensure the task is completed within three hours, but cost is minimized,\n  $\\answer{\\text{Jasper should assign 4 employees to the task.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 34',
    content:
      'Tom has a model train set, which includes a tunnel that the model train must pass through. The entrance of the tunnel is in the shape of the parabola $h(x)=-0.6x^2+3.12x$, where $h$ is the height of the tunnel in centimetres, and $x$ is the horizontal distance from the bottom left corner of the tunnel entrance at $(0,0)$, also in centimetres.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/4b56be12-9b7e-47a6-8d33-db4ce1696bee/images/987cf5eb-a4ea-4400-b222-435b2427a3c5/AI1017a.PNG)\n\n\n\n- Find the equation of the axis of symmetry of the parabola that models the tunnel entrance. <span class="marks">[2]</span>  \n\nTom is considering purchasing a new carriage for his model train. The carriage is in the shape of a cuboid with a height of $3.5\\hspace{0.25em}\\text{cm}$ and a width of $2\\hspace{0.25em}\\text{cm}$.\n\n- Determine whether the carriage will fit through the tunnel entrance. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Using the formula for the axis of symmetry of a quadratic function, with $a=-0.6$ and $b=3.12$, we have\n\n  $$\n  \\begin{align*}\n  x &= - \\dfrac{b}{2a} \\\\[11pt]\n  &= - \\dfrac{3.12}{(2)(-0.6)} \\\\[11pt]\n  & \\hspace{-0.55em}\\tcbhighmath{x = 2.6}\n  \\end{align*}\n  $$\n\n- Since the height of the carriage is $3.5\\hspace{0.25em}\\text{cm}$ we can find the available horizontal width by finding the intersection of the parabola with the line $y=3.5$. Using G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/4b56be12-9b7e-47a6-8d33-db4ce1696bee/images/0c8e24b3-697a-4ff7-9ac8-0f36449f9dc2/AI1017b.PNG)\n\n\n  Since the length of segment AB is $3.563-1.637=1.926$, and $1.926<2$, we conclude that $\\answer{\\text{the carriage will not be able to fit through the tunnel entrance.}}$\n',
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
    title: 'Question 35',
    content:
      'The cross-section of a ship\'s hull below the surface of the ocean can be modelled by a parabola. The depth of the boat\'s hull, $d$ metres, is given by $d(x) = 0.5x^2-6.4x$, where $x$ is the horizontal distance from the left-hand side of the hull at the surface, also in metres, as shown in the following diagram. The $x$-axis represents the ocean surface.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/50b7a549-0fae-4e88-8198-43d4e8b67c4a/images/cb400f16-0845-431b-94dc-26dd2eb56467/AI1018a.PNG)\n\n\n\n- Find the equation of the axis of symmetry of the parabola that models the hull of the ship. <span class="marks">[2]</span>  \n\nThe ship has a horizontal storage deck at a depth of $10$ metres, with a ceiling at surface level. The storage deck is used to transport containers in the shape of cuboids.\n\n- Determine the maximum width of a container that the ship can transport on the storage deck, given that the container is $10$ metres high. Give your answer to the nearest metre. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Using the formula for the axis of symmetry of a quadratic function, with $a=0.5$ and $b=-6.4$, we have\n\n  $$\n  \\begin{align*}\n  x &= - \\dfrac{b}{2a} \\\\[11pt]\n  &= - \\dfrac{-6.4}{(2)(0.5)} \\\\[11pt]\n  & \\hspace{-0.55em}\\tcbhighmath{x = 6.4}\n  \\end{align*}\n  $$\n\n- Since the depth of the storage deck is $10\\hspace{0.25em}\\text{m}$, we can find the available horizontal width by finding the intersection of the parabola with the line $y=-10$. Using G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/50b7a549-0fae-4e88-8198-43d4e8b67c4a/images/0c8115e4-bb78-4db4-b0b4-d73febbc287e/AI1018b.PNG)\n\n\n  Since the length of segment AB is $10.98 - 1.822 = 9.158$ we conclude:\n  The maximum width of a transportable container that is $10$ metres high is $9$ metres.\n',
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
    title: 'Question 36',
    content:
      'The total cost of a ride, $C$, in British pounds (GBP), on BlackCabs can\nbe $\\text{modelled}$ by the function\n\n$$\nC = 1.75x + 3.00, \\\\[3pt]\n$$\n\nwhere $x$ is the distance travelled in\nkilometres.\n\n- Calculate the total cost of an $8$ kilometre ride in a BlackCab.\n<span class="marks">[1]</span>\n\n- On the grid below, sketch the graph of the\nfunction $\\text{\\(C\\hspace{-0.1em}=\\hspace{-0.1em}1.75x + 3.00\\)}$, for $\\text{\\(x\\hspace{-0.1em}\\geq\\hspace{-0.1em}0\\)}$.<span class="marks">[2]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6340868f-a8d3-4dff-a066-c93ed0c4bad4/images/813cd0c4-bfc6-4212-aaf2-af18bdc2015e/c07ee70da58c7beac03974a72c1af86381c22994.svg)\n\n\n- Calculate the distance travelled, $x$, in kilometres, when the total\ncost of a ride reach $45$ GBP. <span class="marks">[1]</span>\n\n\nThe starting fare of MiniCabs is $2.00$ GBP higher than of BlackCabs,\nhowever the ride fare is lower at $1.40$ GBP per kilometre travelled.\n\n- Find the least number of whole kilometres required to\ntravel for the total cost to be less on a MiniCab ride in comparison\nto a BlackCab ride. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Evaluating $C = 1.75x + 3.00$ for $x = 8$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.6em} C &= 1.75(8) + 3.00 \\\\[6pt]\n  &\\answer{= 17 \\text{ GBP}}\\end{aligned}\n  $$\n\n- If we sketch the graph\nof $\\text{\\(C\\hspace{-0.15em}=\\hspace{-0.15em}1.75x\\hspace{-0.15em}+\\hspace{-0.15em}3.00\\)}$, for $\\text{\\(x\\hspace{-0.15em}\\geq\\hspace{-0.15em}0\\)}$, on the grid $\\text{below}$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6340868f-a8d3-4dff-a066-c93ed0c4bad4/images/b628cbad-3d33-4732-a1c3-7206661a40ba/0fbc572f5386caf92a0b3a37fe873d0c550a8cee.svg)\n\n\n- Solving the equation $C = 45$ for $x$, we obtain\n\n  $$\n  \\begin{aligned}\n  1.75x + 3.00 &= 45 \\hspace{6.95em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.2em} \\answer{x = 24 \\text{ km}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{BlackCab}:& \\hspace{1.0em} C = 1.75x + 3.00 \\qref{(1)} \\\\[6pt]\n  \\text{MiniCab}:& \\hspace{1.0em} C = 1.40x + 5.00 \\qref{(2)}\\end{aligned}\n  $$\n\n  If we sketch the graphs of $(1)$ and $(2)$, for $x \\geq 0$ [by\nusing G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6340868f-a8d3-4dff-a066-c93ed0c4bad4/images/48426bc3-2d7a-45b4-bfc3-9e0988433f8c/e7c289a4de8f1b0042a6607943738c5b0d6aeabd.svg)\n\n\n  Hence\n$\\answer{\\text{at least \\(6\\) km}}$\nis required to travel for the total cost of the ride to be\n  less on a MiniCab than on a BlackCab.\n',
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
    title: 'Question 37',
    content:
      'The Mohs scale of mineral hardness is a qualitative, discrete scale characterizing the scratch resistance of various minerals through the ability of harder materials to scratch softer ones. It ranges from talc (1), the softest mineral, to diamond (10), the hardest.  Minerals are assigned a whole number value on the Mohs scale.\nAbsolute hardness of a mineral quantifies its resistance to scratching on a continuous scale, providing a more precise measurement than the Mohs scale.\nThe relationship between Mohs scale score, $M$, and absolute hardness, $H$, is given by\n\n$$\n\\begin{align*}\n0.319M &= \\log_{10}H-0.117\n\\end{align*}\n$$\n\n\n- Calculate the Mohs scale score for quartz, which has an absolute hardness of 100. Give your answer to the nearest whole number.\t <span class="marks">[2]</span>\n\n- Find $H$ as a function of $M$.<span class="marks">[2]</span>\n\n- Calculate the absolute hardness of fluorite, which has a Mohs scale score of 4.<span class="marks">[2]</span>\n\n- Hence determine how many times greater the absolute hardness of quartz is than the absolute hardness of fluorite.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- For quartz, we have $H=100$. If we substitute this value into the Mohs scale equation, we have\n\n  $$\n  \\begin{align*}\n  0.319M &= \\log_{10} (100) - 0.117 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  M &= \\dfrac{1.883}{0.319} \\\\[6pt]\n  &\\hspace{-1.4em}\\tcbhighmath{M = 6 \\text{ [Nearest whole number]}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We have\n\n  $$\n  \\begin{align*}\n  0.319M &= \\log_{10}H-0.117 \\\\[6pt]\n  0.319M + 0.117 &= \\log_{10}H\n  \\end{align*}\n  $$\n\n  We can now use the log equivalence statement, $a^x=b \\Leftrightarrow x = \\log_a b$, with $a=10$, $b=H$ and $x = 0.319M + 0.117$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{align*}\n  &\\tcbhighmath{H = 10^{0.319M + 0.117}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- For fluorite, we have $M=4$. If we substitute this value into the expression we formed in part (b), we have\n\n  $$\n  \\begin{align*}\n  H &= 10^{0.319\\times 4 + 0.117} \\tag*{\\textbf{(M1)}} \\\\[6pt]\n  &= 24.71...\\\\[6pt]\n  &\\hspace{-1.25em}\\tcbhighmath{H = 24.7\\,(3\\,\\mathrm{s.f.})} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We have\n\n  $$\n  \\begin{align*}\n  \\dfrac{\\text{Hardness of quartz}}{\\text{Hardness of fluorite}} &= \\dfrac{100}{24.71...} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 4.045...\\\\[6pt]\n  &= 4.05\\,(3\\,\\mathrm{s.f.})\n  \\end{align*}\n  $$\n\n  Quartz is approximately 4.05 times harder than fluorite.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 38',
    content:
      'Two identical water waves pass a sensor in an oceanography laboratory.\nAs the waves pass the sensor, the\ndepth, $D$, in metres, of water is recorded\nand modelled by the function\n\n$$\nD(t) = 3.21-0.45\\cos\\hspace{0.15em}(\\ang{24.2}\\hspace{-0.15em}\\times t)\n$$\n\nwhere $t$ is the elapsed time, in seconds, since the first wave hit the\nsensor.\n\n- Find the minimum and maximum depths of the water as the two waves\npass the sensor. <span class="marks">[3]</span>\n\n- Find the first time after $16$ seconds at which the depth of water\nreaches $\\text{\\(3.5\\)\\hspace{0.25em}m}$.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The min and max values of the cosine function are $-1$ and $+1$.\nHence the min and max depths of water are\n\n  $$\n  \\begin{aligned}\n  D_{\\text{min}} &= 3.21-0.45(+1) \\\\[6pt]\n  &\\answer{= 2.76 \\text{ m}} \\\\[15pt]\n  \\hspace{1em} D_{\\text{max}} &= 3.21-0.45(-1) \\\\[6pt]\n  &\\answer{= 3.66 \\text{ m}}\\end{aligned}\n  $$\n\n- Solving the equation $D(t) = 3.5$ for first $t > 16$, we get\n\n  $$\n  \\begin{aligned}\n  3.21-0.45\\cos\\hspace{0.15em}(\\ang{24.2}\\hspace{-0.15em}\\times t) &= 3.5 \\hspace{13em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{8.6em} \\answer{t \\approx 20.3} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    type: 'ERQ',
    title: 'Question 39',
    content:
      'Coral is a wildlife expert who tags  flying fish and records their movement using an electronic device.\nThe tagging device tells her the height of a fish relative to the water level, at any given time.\nShe knows that the fish swim mostly in the water, but occasionally they fly (jump!) out of the water.\nThe height is measured in metres and the time in seconds. If the height is negative the fish is under the water, if the height is positive the fish is flying.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/99db50ab-81ea-421b-8f20-21b4669fedcd/images/70f02a92-7870-456a-abea-c262c3ce2d2b/seagull.png)\n\n\nCoral notices one particular fish as it flies out of the water. The moment it re-enters the water the device begins tracking its height.\nAt $2$ seconds the fish is at a height of $-2.8\\,$m; at $5$ seconds the fish is at a height of $-2\\,$m and at $11$ seconds the fish is also at a height of $-2\\,$m.\nThe height of the fish can be expressed as $H(t)=at^3+bt^2+ct+d$, where $a$, $b$, $c$ and $d \\in \\mathbb{R}$.\n\n- \n  - Write down the value of $d$.\n  - Using the information given write down three equations involving $a$, $b$ and $c$.\n  - Solve the system of equations to find the values of $a$, $b$ and $c$. <span class="marks">[4]</span>\n\n\n\nFrom previous research, Coral knows that if a fish is flying for more than $1$ second then a seagull will attempt to catch it.\n\n- Use a justification to explain why a seagull will attempt to catch this fish. <span class="marks">[4]</span>  \n\nAt $t=9\\,$s a seagull begins swooping down to catch the fish.\nIts height is given by $b(t)=-1.5t^2+27t-118$.\n\n- \n  - Find the height at which the bird catches the fish.\n  - Interpret the answer in the context of the problem. <span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- \n  - $d=0$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Using the information given we have\n\n    $$\n    \\begin{align*}\n    \\answer{\\begin{array}{rccccccl}\n    8a &+& 4b &+& 2c &=& -2.8 \\\\[3pt]\n    125a &+& 25b &+& 5c &=& -2 \\\\[3pt]\n    1331a &+& 121b &+& 11c &=& -2\n    \\end{array}}\n    \\tag*{\\textbf{M1A1}}\n    \\end{align*}\n    $$\n\n  - Solving on a G.D.C. we have $\\hspace{0.525em}\\tcbhighmath{a=-0.0330, b=0.564 \\text{ and } c=-2.40}\\hspace{0.525em}$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- When the fish is out of the water it is said to be flying. Hence we need to identify when $H(t)>0$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  We can sketch $H(t)=-0.0330t^3+0.564t^2-2.40t$ on a G.D.C.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/99db50ab-81ea-421b-8f20-21b4669fedcd/images/954048de-59b6-4d32-b5eb-dc27f1407e86/an1.png)\n\n\n  The difference between the two roots $x_1$ and $x_2$ is the time when $H(t)>0$. This can be seen on the graph above as the length of the red line.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n  Hence, the total time out of the water is given by\n\n  $$\n  \\begin{align*}\n      &=x_2-x_1\\\\[6pt]\n      &=9.0909...-8 \\hspace{3em}\\text{[using G.D.C.]} \\\\[6pt]\n      &=1.09\\text{ seconds} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  As $\\hspace{0.525em}\\answer{1.09 > 1}\\hspace{0.525em}$ we can say that a seagull will attempt to catch the fish.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{R1}}\n  \\end{align*}\n  $$\n\n- The bird catches the fish when the $b(t)=H(t)$ and $t>9$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Using a G.D.C. we can show to motion of the bird, in blue, using the model $b(t)$\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/99db50ab-81ea-421b-8f20-21b4669fedcd/images/b3837cf2-870c-4368-bdc5-34bdc0a05ee2/an2.png)\n\n\n  The point $C$, $t>9$, is when the bird catches the fish.\n  The coordinates of point $C$ are $(10.893..., -1.8735...)$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  Hence the bird catches the fish at a height of $\\hspace{0.525em}\\tcbhighmath{-1.87\\,\\text{m}}$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The height is negative, this means the bird catches the fish\n  $\\answer{1.87\\,\\text{m below the surface of the water}}$\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{R1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 40',
    content:
      'A team of painters is hired to paint a house. The time $T$ (in hours) required to paint the house varies inversely with the number of painters, $P$. This can be expressed as\n\n$$\n\\begin{align*}\nT &= \\dfrac{k}{P}\n\\end{align*}\n$$\n\nA team of 3 painters can paint the house in 12 hours.\n\n- Write an equation relating the time $T$ to the number of painters $P$.<span class="marks">[2]</span>  \n\nThe following diagram shows the graph of $T=P$ for $0 \\leq P \\leq 12$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/9f6c0dfc-56fd-41ec-9a8d-73c9b11fe61f/images/5820e2f4-959d-4183-85b4-14415d66fc32/AI1177a.JPG)\n\n\n\n- On the axes above, sketch the graph of $T(P)$ for $3 \\leq P \\leq 12$.<span class="marks">[2]</span>\n\n- State the coordinates of the point of intersection.<span class="marks">[1]</span>\n\n- State the meaning of the coordinates of this point in the context of the question. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- We have that when $P=3$, $T=12$. Substituting in these values, we have\n\n  $$\n  \\begin{align*} \n  12 &= \\dfrac{k}{3} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  k &= 36\n  \\end{align*}\n  $$\n\n  Therefore,\n\n  $$\n  \\begin{align*}\n  &\\tcbhighmath{T = \\dfrac{36}{P}}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We can use the G.D.C. to sketch the function, then transfer this to paper.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  We just need to ensure that our sketch starts at the point $(3,12)$, ends at the point $(12,3)$ and follows a smooth curve. This is shown in the graph below, in $\\color{green}\\text{green}$:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9f6c0dfc-56fd-41ec-9a8d-73c9b11fe61f/images/b3f15b16-65ac-4bc4-b333-e7df5b3dc9ee/AI1177b.JPG)\n\n\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- $\\hspace{0.275em}\\answer{(6,6)}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- $\\hspace{0.275em}\\answer{\\text{A team of 6 painters can paint the house in 6 hours.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n',
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
    title: 'Question 41',
    content:
      'Consider the quadratic function $f(x) = ax^2+bx+c$. The graph of\n$y=f(x)$ is shown in the diagram below. The vertex of the graph has\ncoordinates $\\text{R}(m,-9)$.\nThe graph intersects the $x$-axis at two points; $\\text{P}(-4,0)$ and\n$\\text{Q}(2,0)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b09e52c7-02f5-45a2-96f9-ab7aa4138a3b/images/a78c2481-ec6d-41fe-99c5-6ab402d1c48c/b188999a18650c4961f7def85ea1bfd8a1276fc9.svg)\n\n\n\n- Find the value of $m$. <span class="marks">[1]</span>\n\n- Find the values of $a$, $b$, and $c$.<span class="marks">[5]</span>\n\n- Write down the equation of the axis of symmetry of the graph.\n<span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- The point $(m,0)$ is halfway between P and Q (symmetrical nature of\nquadratic graphs). Since the total length from P to Q is 6 units,\nthe length from P to $(m,0)$ is 3 units. Therefore,\n\n  $$\n  \\begin{aligned}\n  &\\answer{m=-1}\\end{aligned}\n  $$\n\n- Using $y=ax^2+bx+c$ and the 3 coordinates we know the graph passes\nthrough, we can set up three equations, as follows\n\n  $$\n  \\begin{aligned}\n  0 &= a(-4)^2+b(-4)+c \\qquad \\qquad \\quad \\text{Using P$(-4,0)$}\\nonumber \\\\[6pt]\n  0&=16a-4b+c \\tag*{\\textbf{(1)}}\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  0 &= a(2)^2+b(2)+c \\qquad \\qquad \\qquad \\,\\, \\,\\text{Using Q$(2,0)$}\\nonumber \\\\[6pt]\n  0&=4a+2b+c \\tag*{\\textbf{(2)}}\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  -9 &= a(-1)^2+b(-1)+c \\qquad \\qquad \\quad \\text{Using R$(-1,-9)$}\\nonumber \\\\[6pt]\n  -9&=a-b+c \\tag*{\\textbf{(3)}}\n  \\end{aligned}\n  $$\n\n  We can now use a GDC to solve equations\n$(1)$, $(2)$, and $(3)$. We get\n\n  $$\n  \\answer{a=1, \\, \\, \\, b=2,\\,\\,\\text{and}\\,\\, c=-8}\n  $$\n\n- The axis of symmetry of the graph is the line that splits the\nquadratic graph in half, passing through the turning point. Hence,\nthe equation of this line is\n\n  $$\n  \\answer{x=-1}\n  $$\n\n',
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
    title: 'Question 42',
    content:
      'Certain content on the internet can become viral when the content\nspreads exponentially. The spread of content published by a specific\ncontent creator can be modelled by the function\n\n$$\nN(t)=145 \\times 1.25^t,\n$$\n\nwhere $N$ is the number of people reached by\nthe content, and $t$ is the number of hours since the content\'s\npublication.\n\n- Write down the number of people reached immediately after the\ncontent\'s publication.<span class="marks">[1]</span>\n\n- Calculate the number of hours it takes for the content to reach\n$100\\hspace{0.15em}000$ people.<span class="marks">[2]</span>\n\n- Calculate the number of people reached after $80$ hours.<span class="marks">[2]</span>\n\n\nApproximately $5$ billion people in the world are now connected to the\ninternet.\n\n- Explain why the model starts to become unrealistic after\nabout $3$ days.<span class="marks">[1]</span>  \n',
    markScheme:
      '\n- The immediate number of people reached can be found when $t=0$.\nHence,\n\n  $$\n  \\answer{N(0)=145}\n  $$\n\n- We solve the equation\n\n  $$\n  \\begin{aligned}\n  N(t) &= 100\\hspace{0.15em}000 \\\\[4pt]\n  145 \\times 1.25^t &= 100\\hspace{0.15em}000 \\\\[4pt]\n  t &\\answer{t\\approx29.3}\\hspace{3em} [\\text{using G.D.C.}]\\end{aligned}\n  $$\n\n- Substituting $t=80$ into the function $N(t)$, we get\n\n  $$\n  \\begin{aligned}\n  N(t) &= 145 \\times 1.25^t \\\\[4pt]\n  N(80) &= 145 \\times 1.25^{80} \\\\[4pt]\n  &= 8\\hspace{0.15em}206\\hspace{0.15em}709\\hspace{0.15em}165.19 \\\\[4pt]\n  &\\hspace{0.3em}\\answer{\\approx8\\hspace{0.15em}210\\hspace{0.15em}000\\hspace{0.15em}000}\\end{aligned}\n  $$\n\n- $\\answer{\\text{The model becomes unrealistic after about 3 days (72 hours) as the output of the model}}$\n  $\\answer{\\text{(number of people reached) starts to exceed the total number of people in the world }}$\n  $\\answer{\\text{connected to the internet.}}$\n',
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
    type: 'ERQ',
    title: 'Question 43',
    content:
      'The most popular mobile phone plans in $2019$ from a major mobile\nservice provider in Australia are summarised in the table below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b75a904d-f2de-4d46-bdc6-b410cc688853/images/6cf3428b-91b5-413a-90f3-ffc1bf9e7a1b/4b6cfffce9db227a1223cd6215b239f9cf62d983.svg)\n\n\n\n- The total monthly cost, $C$, in AUD, of the Optimal Data Plan can\nbe $\\text{modelled}$ as a\npiecewise linear function of the amount of data, $d$, in\nGB, used. Determine the model.\n<span class="marks">[4]</span>\n\n- Find down the total monthly cost of the Optimal Data Plan if:\n  \n  - $8$ GB of data is used;\n  - $12$ GB of data is used. <span class="marks">[3]</span>\n\n\n- Determine how many GB of data is used when the Optimal Data\nPlan $\\text{becomes}$ more\nexpensive than the Massive Data Plan. <span class="marks">[2]</span>\n\n\nDaniela is using the Optimal Data Plan and is thinking of changing it\nto the $\\text{Massive}$ Data\nPlan. It is the evening of December $7$, $2019$ and she\nhas already used $3.5$ GB of data so\nfar. Assume that her data usage continues\nat the same constant rate during\nDecember and the next year.\n\n- Estimate Daniela\'s data usage in December. <span class="marks">[2]</span>\n\n- Hence explain why Daniela should change her plan.\n<span class="marks">[1]</span>\n\n- Find the amount of money Daniela will save each month in\n$2020$ if she changes her Optimal\nData Plan to the Massive Data Plan.<span class="marks">[2]</span>\n\n',
    markScheme:
      "\n- We have\n\n  $$\n  \\begin{aligned}\n  \\answer{C(d) = \\left\\{ \\begin{array}{lcl}\n  39, && 0\\leq d \\leq 10 \\\\[6pt]\n  39 + 10(d-10), && d > 10 \n  \\end{array} \\right.}\\end{aligned}\n  $$\n\n- \n  - $\\answer{39 \\text{ AUD}}$\n  - Evaluating $C(d)$ for $d = 12$, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.1em} C(12) &= 39 + 10(12-10) \\\\[6pt]\n    &\\answer{= 59 \\text{ AUD}}\\end{aligned}\n    $$\n\n\n- Solving the equation $C(d) = 79$ for $d > 10$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.6em} 39 + 10(d-10) &= 79 \\\\[6pt] \n  d &= 14 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence\nOptimal Data Plan becomes more expensive than Massive Data Plan\n  $\\answer{\\text{when more than \\(14\\) GB of data is used}}$\n- Daniela's approximate data usage in December is\n\n  $$\n  \\begin{aligned}\n  \\dfrac{3.5}{7} \\times 31 &= \\hspace{0.525em}\\answer{15.5 \\text{ GB}} \\hspace{1em}\\end{aligned}\n  $$\n\n- $\\answer{\\text{Because her current plan is more expensive than Massive Data Plan}}$\n- Evaluating $C(d) - 79$ for $d = 15.5$, we obtain\n\n  $$\n  \\begin{aligned}\n  C(15.5) - 79 &= [39 + 10(15.5-10)] - 79\\\\[6pt]\n  &= 94 - 79 \\\\[6pt] \n  &\\answer{= 15 \\text{ AUD}}\\end{aligned}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 44',
    content:
      'The graph below shows the profit $P$ (in thousands of dollars), that business A makes,  where $t$ is the time in months since January 1st.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/c66ce31d-cb54-4bbd-848a-ef2cd4a05037/ai1106e.PNG)\n\n\n\n- Write down one characteristic of the graph which suggests that a cubic function might be an appropriate model for the business profit. <span class="marks">[1]</span>  \n\nThe model can be expressed as $P(t)=at^3+bt^2+ct+d$, where $a$, $b$, $c$ and $d \\in \\mathbb{R}$. It is given that the graph of the model passes through the following points.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/ef93a216-cfb9-450f-a315-71dbbb9af371/ai1106b.PNG)\n\n\n\n- \n  - State the value of $d$.\n  - Using the values in the table, write down three equations in $a$, $b$, and $c$.\n  - By solving the system of equations from part (ii), find the values of $a$, $b$ and $c$. <span class="marks">[4]</span>\n\n\n\nIf $P$ has a negative value, business A is losing money. The owner has decided they will not open during the corresponding time next year.\n\n- Use the model from part (b) to find the approximate dates during which business A will not open next year. <span class="marks">[4]</span>  \n\nBusiness B has a profit function given by $P(t)=-0.1t^2+1.2t$, for $0 \\leq t \\leq 12$.\n\n- Determine the total amount of time for which business B is more profitable than business A. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- $\\answer{\\text{The graph of $P$ has exactly one maximum point and one minimum point.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- \n  - From the table, we have $P(0)=2$. Substituting the value $t=0$ into the model we have\n\n    $$\n    \\begin{align*}\n    P(0)&= a(0)^3+b(0)^2+c(0)+d = d\n    \\end{align*}\n    $$\n\n    We have $P(0)=2$ and $P(0)=d$ and therefore $\\answer{d=2}$\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n  - Using the values given in the table, and part (i), we have\n\n    $$\n    \\begin{align*}\n    P(4)&= a(4)^3+b(4)^2+c(4)+2 = 4 \\\\[11pt]\n    P(8) &= a(8)^3+b(8)^2+c(8)+2 = -6 \\tag*{\\textbf{(M1)}} \\\\[11pt]\n    P(12) &= a(12)^3+b(12)^2+c(12)+2 = 8  \\\\[-11pt]\n    \\end{align*}\n    $$\n\n    Hence, the linear system for variables $a$, $b$ and $c$ is\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{\\begin{cases}\n    64a+16b+4c = 2 \\\\[6pt]\n    512a+64b+8c = -8 \\\\[6pt]\n    1728a+144b+12c = 6\n    \\end{cases}}\n    \\end{align*}\n    $$\n\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n  - Using G.D.C. to solve the linear system found in part (ii), we get\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{a=0.09375,\\, b=-1.5, \\text{ and } c=5} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- Using the G.D.C. to graph the polynomial $P(t)=0.09375t^3-1.5t^2+5t+2$,\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  we can find the zeroes of the function.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(A1)}}\t\n  \\end{aligned}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/f941dc8d-5e1b-4150-9755-fcb2277ef68a/ai1106c.PNG)\n\n\n  Hence, the time that business A will not open is from $t=5.407$ months until $t=10.95$ months after January 1st. Note that $t=5.407$ equates to a date in June, which has 30 days, and $t=10.95$ equates to a date in November, which also has 30 days.\n\n  $$\n  \\begin{align*}\n  0.407 \\times 30 &= 12.21 \\\\[11pt]\n  0.95 \\times 30 &= 28.5 \\tag*{\\textbf{(M1)}}\\\\[-10pt]\n  \\end{align*}\n  $$\n\n  Business A will be closed from approximately $\\answer{\\text{June 13th until November 29th.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- Using the G.D.C., we can graph the polynomial for business B (shown in red), $P(t)=-0.1t^2+1.2t$, on the same axes as the polynomial for business A. We can then find the points of intersection.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/94fdb4ca-3aad-4323-a785-bc1185c059fb/ai1106d.PNG)\n\n\n  Business B is more profitable for $4.270 \\leq t \\leq 11.11$. We have\n\n  $$\n  \\begin{align*}\n  11.11 - 4.270 &= 6.84 \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Business B is more profitable for approximately 6.84 months.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 45',
    content:
      'The amount of fuel in a car\'s tank, $V$, in litres, can be modelled by a\nlinear function, $V = mx + c$, where\n$x$ is the distance driven measured in kilometres.\nAfter driving $100$ km, the amount of fuel in\nthe tank is $33$ litres.\n\n- Write down an equation that describes this information. <span class="marks">[1]</span>\n\n\nAfter driving $250$ km, the amount of fuel in\nthe tank is $22.5$ litres.\n\n- Write down an equation that describes this second piece of\ninformation. <span class="marks">[1]</span>\n\n- Calculate the amount of fuel in the tank after driving\n$50$ km. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- Substituting $x = 100$ and $V = 33$ in the equation $V = mx + c$, we\nget\n\n  $$\n  \\begin{aligned}\n  33 = m(100) + c \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{33 = 100m+c} \\hspace{0.8em}\n  $$\n\n- Substituting $x = 250$ and $V = 22.5$ in the equation $V = mx + c$,\nwe obtain\n\n  $$\n  \\begin{aligned}\n  22.5 = m(250) + c \\hspace{0.8em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{22.5 = 250m+c} \\hspace{1.6em}\n  $$\n\n- From parts (a) and (b), we have\n\n  $$\n  \\begin{aligned}\n  100m + c &= 33  \\qref{(1)} \\\\[6pt]\n  250m + c &= 22.5 \\hspace{0.75em} \\qref{(2)}\\end{aligned}\n  $$\n\n  Solving\nthe system of linear equations $(1)$-$(2)$ for $m$ and $c$, we get\n\n  $$\n  \\begin{aligned}\n  \n  \\hspace{8.5em} \\begin{array}{rcl}\n  m &=& -0.07 \\\\[6pt]\n  c &=& 40\n  \\end{array} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence, evaluating $V = -0.07x + 40$ for $x = 50$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.9em} V &= -0.07(50) + 40 \\\\[6pt]\n  &\\answer{= 36.5 \\text{ litres}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 46',
    content:
      'The water depth, $D$, in metres, in a boating marina on a particular day\ncan be modelled by the function\n\n$$\n\\begin{aligned}\nD(t) &= 4\\sin\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t) + 12.5, \\hspace{0.5em} 0 \\leq t \\leq 24,\\end{aligned}\n$$\n\nwhere $t$ is the elapsed time, in hours, since midnight.\n\n- Write down the depth of water at midnight. <span class="marks">[1]</span>\n\n- The cycle of water depths repeats every T hours. Find the value\nof T. <span class="marks">[2]</span>\n\n- \n  - Write down the minimum and maximum depths of water\nduring the day.\n  - Find the times at which the minimum and maximum depths of water\noccur during the day.<span class="marks">[4]</span>\n\n\n- Draw the graph of $D$ versus $t$ on the grid below.<span class="marks">[3]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/13a225e5-63c6-476e-81ff-2ded39715f6e/images/9f9c68ce-1d0d-4487-a7d2-c9a33bc05e53/65ae508d3aaa92f2c9dd08b381c4298f16693fe9.svg)\n\n\n- A ship with $8$ m draught is allowed to\nenter the marina if the depth of water is greater than\n$10$ m. Find the time interval before\nmidday, in hours and minutes, during which the ship is not\nallowed to enter the marina. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- $\\answer{12.5\\text{ m}}$\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{T} &= \\dfrac{360}{30} \\hspace{0.1em} \\\\[6pt]\n  &\\answer{=12}\\end{aligned}\n  $$\n\n- \n  - The min and max values of the sine function are $-1$ and $+1$.\nHence the min and max depths of water are\n\n    $$\n    \\begin{aligned}\n    D_{\\text{min}} &=  4(-1)+12.5 \\hspace{0.2em} \\\\[6pt]\n    &\\answer{= 8.5\\text{ m}} \\\\[15pt]\n    D_{\\text{max}} &=  4(+1)+12.5 \\\\[6pt]\n    &\\answer{= 16.5\\text{ m}}\\end{aligned}\n    $$\n\n  - Solving the equation $D(t) = 8.5$ for $t$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.9em} 4\\sin\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t) + 12.5 &= 8.5 \\\\[6pt]\n    t &= 9,\\hspace{0.25em} 21 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence the min depth of water occurs at\n$\\answer{9 \\text{ am}}$\nand\n$\\answer{9 \\text{ pm}}$\n    Similarly, solving the equation $D(t) = 16.5$ for $t$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.8em} 4\\sin\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t) + 12.5 &= 16.5 \\\\[6pt]\n    t &= 3,\\hspace{0.25em} 15 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence the max depth of water occurs at\n$\\answer{3 \\text{ am}}$\nand\n$\\answer{3 \\text{ pm}}$\n\n- If we draw the graph of $D$ versus $t$ on the grid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/13a225e5-63c6-476e-81ff-2ded39715f6e/images/3fbc1ff1-c2d9-4c80-a98e-ea0dfbdfbd10/51784b29690fe6ba6b16afe9863a1352814ae7c6.svg)\n\n\n- Solving the equation $D(t) = 10$ for $t < 12$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.8em} 4\\sin\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t) + 12.5 &= 10 \\\\[6pt]\n  t &\\approx 7.289,\\hspace{0.25em} 10.711 \\hspace{2.8em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  We have\n\n  $$\n  \\begin{aligned}\n  0.289(60) &= 17.34 \\hspace{1em} \\\\[6pt]\n  0.711(60) &= 42.66\\end{aligned}\n  $$\n\n  Hence the ship is not allowed to\nenter the marina\n$\\answer{\\text{between 7:17 am and 10:43 am}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 47',
    content:
      'The number of French words, $N$, that are remembered by students after\nthe completion of a French language course decreases exponentially over\ntime. This data can be modelled by the function\n\n$$\n\\begin{aligned}\nN(t) = a\\times b^{-t} + 450,\\end{aligned}\n$$\n\nwhere $a$ and $b$ are\npositive constants, and $t$ is the time in years since a student\ncompleted the French language course.\nImmediately after completion, a student remembers $4200$ French words.\n\n- Find the value of $a$. <span class="marks">[2]</span>\n\n\nAfter $4$ years a student remembers only $1600$ French words.\n\n- Find the value of $b$. <span class="marks">[3]</span>\n\n\nThe number of French words a student remembers never decreases below a\ncertain number of words, $n$.\n\n- Write down the value of $n$. <span class="marks">[1]</span>  \n',
    markScheme:
      '\n- Solving the equation $N(0) = 4200$ for $a > 0$, we get\n\n  $$\n  \\begin{aligned}\n  a\\times b^{-0} + 450 &= 4200 \\hspace{5.4em} \\\\[6pt]\n  a + 450 &= 4200 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{a = 3750}\n  $$\n\n- Solving the equation $N(4) = 1600$ for $b > 0$, we obtain\n\n  $$\n  \\begin{aligned}\n  3750\\times b^{-4} + 450 &= 1600 \\hspace{6.9em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.6em} \\answer{b \\approx 1.34} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- If we draw the graph of $y = N(t)$, for $t \\geq 0$ [by using\nG.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1aa30751-ed4b-44ac-bb07-63116dc7d37f/images/2a235dae-dec6-4e18-9719-39fb24c0f276/5f0266262d56defec1ffa52f191a9228b568fd3e.svg)\n\n\n  Hence the value of $n$ is\n$\\answer{450}$\n',
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
    title: 'Question 48',
    content:
      'Mehmet organises a graduation party on a boat in the Strait of Istanbul\nfor his peers from college. The cost to rent a large boat for the\nevening is $5000$ Turkish liras (TRY) and the cost to hire a DJ is\n$1500$ TRY. The cost for food and drinks is estimated to be $125$ TRY\nper person.\n\n- Find an expression for the total cost, $y$ TRY, of the evening in\nterms of the number of peers, $x$, attending the party. <span class="marks">[2]</span>\n\n- Find the total cost of the evening if $40$ peers attend the party.\n<span class="marks">[2]</span>\n\n- Given that Mehmet decides to collect $250$ TRY from each peer\nattending the party, find the least number of peers he has to invite\nto be able to cover the total cost of the evening. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.8em} \\text{Total cost} &= \\text{Fixed costs} +  \\text{Variable costs} \\\\[6pt]\n  y &= (5000+1500) + 125x \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{y = 6500 + 125x} \\hspace{1.2em}\n  $$\n\n- Evaluating $y = 6500 + 125x$ for $x = 40$, we get\n\n  $$\n  \\begin{aligned}\n  y &= 6500 + 125(40) \\\\[6pt]\n  &\\answer{= 11\\hspace{0.15em}500 \\text{ TRY}}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{Total cost} &= 250x \\hspace{9.2em} \\\\[6pt]\n  6500 + 125x &= 250x \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{5.1em} \\answer{x = 52} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 49',
    content:
      'The bench press world record weight, $W$, in kilograms, is modelled by\nthe function\n\n$$\nW(t) = \\dfrac{M}{1 + Ce^{-0.04t}},\n\n$$\n\nwhere $t$ is the\nnumber of years that have passed since $1953$.\nThe first bench press world record of\n$227.27$ kg was set in $1953$. According\nto bench press experts, the record weight will eventually reach a limit\nof $350$ kg.\n\n- \n  - Write down the value of $M$.\n  - Find the value of $C$ , giving your\nanswer correct to $2$ decimal places. <span class="marks">[3]</span>\n\n\n- The current unbeaten bench press world record weight is\n$337$ kg. Find the\nyear in which this record was set. <span class="marks">[2]</span>\n\n- A young and promising powerlifter claims that he is going to break\nany bench press world record performed until $2025$. Find the weight\nthat he has to bench press in $2025$ to set a new bench press world\nrecord according to the model. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - $\\answer{M = 350}$\n  - Solving the equation $W(0) = 227.27$ for $C$, we get\n\n    $$\n    \\begin{aligned}\n    \\dfrac{350}{1 + Ce^{-0.04(0)}} &= 227.27 \\hspace{5.6em} \\\\[6pt]\n    \\dfrac{350}{1 + C} &= 227.27 \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\hspace{9.6em} \\answer{C \\approx 0.54} \\hspace{3em} [\\text{by using G.D.C.}]\n    $$\n\n\n- Solving the equation $W(t) = 337$ for $t$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.9em} \\dfrac{350}{1 + 0.54e^{-0.04t}} &= 337 \\\\[6pt]\n  t &\\approx 66 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/515632bd-ef04-40ae-b5cf-41c585276775/images/17a3be18-8a25-4d9c-9902-4ab75a6551e2/3995fc167568b86787ae79ed98ca134320f14178.svg)\n\n\n  Hence the current unbeaten bench press world record was set in\n$\\answer{2019}$\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/515632bd-ef04-40ae-b5cf-41c585276775/images/592efbef-223b-4918-a7ee-77220e95126c/00dae124260e7339716684c3dd5812e8ff1deace.svg)\n\n\n  Hence, evaluating $W(t)$ for $t = 72$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.7em} W(72) &= \\dfrac{350}{1 + 0.54e^{-0.04(72)}} \\\\[9pt]\n  &\\answer{\\approx 340 \\text{ kg}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 50',
    content:
      'The water depth, $D$, in metres, at the entrance of a boating harbour\ncan be modelled by the function\n\n$$\n\\begin{aligned}\nD(t) &= 4.5\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t + \\ang{90}) + 15, \\hspace{0.5em} 0 \\leq t \\leq 24,\\end{aligned}\n$$\n\nwhere $t$ is the elapsed time, in hours, since midnight.\n\n- Write down the depth of water at midnight. <span class="marks">[1]</span>\n\n- The cycle of water depths repeats every T hours. Find the value\nof T. <span class="marks">[2]</span>\n\n- \n  - Write down the minimum and maximum depths of water\nduring the day.\n  - Find the times at which the minimum and maximum depths of water\noccur during the day.<span class="marks">[4]</span>\n\n\n- Draw the graph of $D$ versus $t$ on the grid below.<span class="marks">[3]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5eb2e8d5-7054-4bdd-9c01-bd9a1fa5f2b9/images/2593030c-67cf-409b-9794-ba745de824ef/5ebec9fd250b988a5cdb00654083b4ecdda5ad72.svg)\n\n\n- A ship with $10$ m draught is allowed to\nenter the harbour if the depth of $\\text{water}$ is greater\nthan $12$ m. Find the time interval\nafter midday, in hours and minutes, during which the ship is\nnot allowed to enter the harbour. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- $\\answer{15\\text{ m}}$\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{T} &= \\dfrac{360}{30} \\hspace{0.1em} \\\\[6pt]\n  &\\answer{=12}\\end{aligned}\n  $$\n\n- \n  - The min and max values of the cosine function are $-1$ and $+1$.\nHence the min and max depths of water are\n\n    $$\n    \\begin{aligned}\n    D_{\\text{min}} &=  4.5(-1)+15 \\hspace{0.2em} \\\\[6pt]\n    &\\answer{= 10.5\\text{ m}} \\\\[15pt]\n    D_{\\text{max}} &=  4.5(+1)+15 \\\\[6pt]\n    &\\answer{= 19.5\\text{ m}}\\end{aligned}\n    $$\n\n  - Solving the equation $D(t) = 10.5$ for $t$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.2em} 4.5\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t + \\ang{90}) + 15 &= 10.5 \\\\[6pt]\n    t &= 3,\\hspace{0.25em} 15 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence the min depth of water occurs at\n$\\answer{3 \\text{ am}}$\nand\n$\\answer{3 \\text{ pm}}$\n    Similarly, solving the equation $D(t) = 19.5$ for $t$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.1em} 4.5\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t + \\ang{90}) + 15 &= 19.5 \\\\[6pt]\n    t &= 9,\\hspace{0.25em} 21 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence the max depth of water occurs at\n$\\answer{9 \\text{ am}}$\nand\n$\\answer{9 \\text{ pm}}$\n\n- If we draw the graph of $D$ versus $t$ on the grid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5eb2e8d5-7054-4bdd-9c01-bd9a1fa5f2b9/images/26c8f477-b4fc-4200-831b-ec38467e5a08/86eb70569effce9a800c12036b0b3ecc63fb97b4.svg)\n\n\n- Solving the equation $D(t) = 12$ for $t > 12$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.1em} 4.5\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times t + \\ang{90}) + 15 &= 12 \\\\[6pt]\n  t &\\approx 13.394,\\hspace{0.25em} 16.606 \\hspace{2em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  We have\n\n  $$\n  \\begin{aligned}\n  0.394(60) &= 23.64 \\hspace{1em} \\\\[6pt]\n  0.606(60) &= 36.36\\end{aligned}\n  $$\n\n  Hence the ship is not allowed to\n\n  enter the harbour\n$\\answer{\\text{b\\(/\\)n 1:24 pm and 4:36 pm}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 51',
    content:
      'Two carpet cleaning companies have different pricing structures.\nCarpetShine charges $1.80$ AUD per square metre, plus an upfront\nscheduling fee of $50$ AUD. CleanMaster has no scheduling a service fee,\nbut the rate is $2.50$ AUD per square metre. Let $C_1(x)$ and $C_2(x)$\nbe the costs, in AUD, of cleaning $x$ square metres of carpet area by\nCarpetShine and CleanMaster respectively.\n\n- Write down expressions for the costs, $C_1$ and $C_2$, of cleaning\n$x$ square metres of carpet area. <span class="marks">[2]</span>\n\n- Find the least number of whole square metres of carpet area cleaned\nby $\\text{CarpetShine}$ for its $\\text{services}$ to\nbe a cheaper option. <span class="marks">[3]</span>\n\n',
    markScheme:
      "\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{CarpetShine}:&\\hspace{0.75em}\\hspace{0.525em} \\answer{C_1(x) = 1.80x + 50} \\hspace{0.6em} \\qref{(1)}  \\\\[8pt]\n  \\text{CleanMaster}:&\\hspace{0.75em}\\hspace{0.525em} \\answer{C_2(x) = 2.50x} \\qref{(2)}\\end{aligned}\n  $$\n\n- If we sketch the graphs of $(1)$ and $(2)$, for $x \\geq 0$ [by\nusing G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5fc2ff98-42dc-416f-a3a0-c7e1d46e3145/images/51d828e3-1f65-46c3-8c32-7a9992ed51a6/222304bb048f5e481f5e9f67da7635f92b5b303e.svg)\n\n\n  Hence\n$\\answer{\\text{at least \\(72\\) whole square metres}}$\nof carpet area is required for\n  CarpetShine's cleaning services to be a cheaper option.\n",
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
    title: 'Question 52',
    content:
      'The mass of a radioactive sample is given by\n\n$$\nM(t)=P+Q\\left(\\dfrac{1}{2}\\right)^\\frac{t}{300}, \\qquad t\\geq 0 \\text{ days.}\n$$\n\nwhere t is the number of days after the sample was collected and\nmeasured.\nThe initial weight of the sample is $20 \\text{ g}$. When each atom emits\nits $\\alpha$-particle, the mass of the atom is reduced by $3.2\\%$.\n\n- \n  - Explain why P is the final mass of the sample after every atom\nin the sample has emitted its $\\alpha$-particle.\n  - Hence, find the value of P, leaving your answer correct to two\ndecimal places. <span class="marks">[2]</span>\n\n\n- Find the value of Q. <span class="marks">[2]</span>\n\n- Estimate the mass of the sample after $2.5$ years (assume no leap\nyears). <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - We have\n\n    $$\n    M(t)=P+Q\\left(\\dfrac{1}{2}\\right)^\\frac{t}{300}\n    $$\n\n    $\\answer{{\\text{As } t\\rightarrow \\infty, \\left(\\dfrac{1}{2} \\right)^\\frac{t}{300} \\rightarrow 0. \\text{ Therefore }, M(\\infty) \\approx P.}}$\n  - Hence\n\n    $$\n    \\begin{aligned}\n    \\hspace{2cm}P &= 0.968\\times 20 \\qquad [\\text{$96.8\\%$ of $20$}]\\\\[6pt]\n    &\\hspace{0.35em}\\answer{ \\approx 19.36 \\text{ g}}\\end{aligned}\n    $$\n\n\n- We have $M(0)=20$\n\n  $$\n  \\begin{aligned}\n  M(0) &= P+Q\\left(\\dfrac{1}{2}\\right)^0\\\\[6pt]\n  20 &= 19.36+Q\\\\[6pt]\n  &\\hspace{-0.25cm}\\answer{ Q = 0.64 }\\end{aligned}\n  $$\n\n- $2.5$ years is $2.5\\times 365 = 912.5 \\text{ days}$. Hence, we get\n\n  $$\n  \\begin{aligned}\n  M(912.5) &= 19.36+0.64\\left(\\dfrac{1}{2}\\right)^{\\frac{912.5}{300}}\\\\[8pt]\n  &\\hspace{0.35em}\\answer{\\approx 19.4  \\text{ g}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 53',
    content:
      'An oil tank at a mine site was at full capacity before the tank incurred\na puncture in the base and the oil start to leak out. A site engineer\nused the following function, $L(t)$, to model the percentage of oil\nremaining in the tank\n\n$$\nL(t)=100e^{-kt},\\quad t\\geq0,\n\n$$\n\nwhere $t$ is the\nnumber of days after the puncture occurred.\nThe engineer found that after one day, $30\\%$ of the oil originally in\nthe tank had leaked out.\n\n- Find the value of $k$. <span class="marks">[2]</span>\n\n- Use this model to find the percentage of oil remaining in the tank\nafter $30$ hours. <span class="marks">[2]</span>\n\n\nBased on the model, the engineer makes the claim that the tank will\nalways have some oil in it and never completely empty.\n\n- State a mathematical reason supporting the engineers claim.\n<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- If $30\\%$ oil has leaked, there is $70\\%$ remaining in the tank. We\ncan substitute in $L=70$ and $t=1$ to find $k$, as follows\n\n  $$\n  \\begin{aligned}\n  L(t) &=100e^{-kt}\\\\[6pt]\n  70 &=100e^{-k(1)}  \\\\[8pt]\n  &\\hspace{-0.3em}\\answer{\\text{k}\\approx0.357}  \\hspace{2em} [\\text{using GDC}]\\end{aligned}\n  $$\n\n- $30$ hours is equal to $1.25$ days ($30/24=1.25$). Hence, we get\n\n  $$\n  \\begin{aligned}\n  L(1.25) &= 100e^{-0.357(1.25)} \\\\[6pt]\n  &\\hspace{0.5em}\\answer{=64 \\%}\n  \\end{aligned}\n  $$\n\n- We have $L(t)=100e^{-0.357t}$\n  As $t\\rightarrow \\infty,\\,\\, L(t)\\rightarrow 0$. Hence, there is a horizontal asymptote at $L=0$. The percentage of oil remaining gets very close to zero, but never reaches it.\n',
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
    title: 'Question 54',
    content:
      'An elephant raised in a wildlife sanctuary. Her height, $H$, in metres,\nis modelled by the logistic function\n\n$$\n\\begin{aligned}\nH(t) &= \\dfrac{2.5}{1+1.5e^{-0.25t}}\\hspace{0.05em},\\end{aligned}\n$$\n\nwhere $t$ is the number of years that have passed since her birth.\n\n- Find the elephant\'s height:\n  \n  - when she was born;\n  - on her $5$th birthday. <span class="marks">[4]</span>\n\n\n\nThe elephant\'s height approaches a limit of $M$ metres as she ages.\n\n- Write down the value of $M$. <span class="marks">[1]</span>\n\n\nThe elephant reaches a height of $2$ m before\nher $n$th birthday.\n\n- Find the smallest value of $n$. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- \n  - Evaluating $H(t)$ for $t = 0$, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.2em} H(0) &= \\dfrac{2.5}{1+1.5e^{-0.25(0)}} \\\\[9pt]\n    &\\answer{= 1 \\text{ m}}\\end{aligned}\n    $$\n\n  - Evaluating $H(t)$ for $t = 5$, we obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.2em} H(5) &= \\dfrac{2.5}{1+1.5e^{-0.25(5)}} \\\\[9pt]\n    &\\answer{\\approx 1.75 \\text{ m}}\\end{aligned}\n    $$\n\n\n- $\\answer{M = 2.5}$\n- Solving the equation $H(t) = 2$ for $t$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.1em} \\dfrac{2.5}{1+1.5e^{-0.25t}} &= 2 \\\\[6pt]\n  t &\\approx 7.17 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{n = 8}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 55',
    content:
      'Two IT consulting firms have different pricing structures. TechMind\ncharges $\\$115$ per hour, plus an upfront fee of $\\$250$ for booking an\nappointment. RiddleBreak doesn\'t charge for booking an appointment, but\nthe rate is $\\$160$ per hour. Let $C_1(t)$ and $C_2(t)$ be the costs, in\ndollars, of consulting $t$ hours by TechMind and RiddleBreak\nrespectively.\n\n- Write down expressions for the costs of consulting, $C_1$ and $C_2$,\nin terms of the number of hours, $t$, charged. <span class="marks">[2]</span>\n\n- Find the least number of whole hours of consulting from TechMind for\nits $\\text{services}$ to be a cheaper option. <span class="marks">[3]</span>\n\n',
    markScheme:
      "\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{TechMind}:&\\hspace{0.75em}\\hspace{0.525em} \\answer{C_1(t) = 115t + 250} \\hspace{0.6em} \\qref{(1)}  \\\\[8pt]\n  \\text{RiddleBreak}:&\\hspace{0.75em}\\hspace{0.525em} \\answer{C_2(t) = 160t} \\qref{(2)}\\end{aligned}\n  $$\n\n- If we sketch the graphs of $(1)$ and $(2)$, for $t \\geq 0$ [by\nusing G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9ff19c56-9082-4058-a2cf-c84b25aad999/images/a990f43d-8499-4644-b38a-ba9bd26a4dc4/798f80d7abe42cc91e804962407e19461e89e38d.svg)\n\n\n  Hence\n$\\answer{\\text{at least \\(6\\) whole hours}}$\nis required for TechMind's consulting services\n  to be a cheaper option.\n",
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
    type: 'ERQ',
    title: 'Question 56',
    content:
      'A cannon-ball is fired from the top of a tower. The height, $h$, in\nmetres, of the cannon-ball above the ground is modelled by the function\n\n$$\n\\begin{aligned}\nh(t) = -2t^2 + 20t + 8, \\hspace{0.5em} t \\geq 0,\\end{aligned}\n$$\n\nwhere\n$t$ is the time, in seconds, since the moment the cannon-ball was fired.\n\n- Write down the height of the tower. <span class="marks">[1]</span>\n\n- Calculate the height of the cannon-ball $5$ seconds after it was\nfired. <span class="marks">[2]</span>\n\n\nThe cannon-ball hits its target on the ground $n$ seconds after it was\nfired.\n\n- Find the value of $n$. <span class="marks">[2]</span>\n\n- Find $h\'(t)$. <span class="marks">[2]</span>\n\n- Calculate the maximum height reached by the cannon-ball,\nand\nwrite down the corresponding time $t$. <span class="marks">[3]</span>\n\n- Determine the total time the cannon ball was above the\nheight of the tower.<span class="marks">[3]</span>\n\n',
    markScheme:
      "\n- Evaluating $h(t)$ for $t = 0$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.7em} h(0) &= -2(0)^2+20(0)+8 \\\\[6pt]\n  &\\answer{= 8 \\text{ m}}\\end{aligned}\n  $$\n\n- Evaluating $h(t)$ for $t = 5$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.7em} h(5) &= -2(5)^2+20(5)+8 \\\\[6pt]\n  &\\answer{= 58 \\text{ m}}\\end{aligned}\n  $$\n\n- Solving the equation $h(n) = 0$ for $n > 0$, we find\n\n  $$\n  \\begin{aligned}\n  -2n^2+20n+8 &= 0 \\hspace{9em} \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{9.2em} \\answer{n \\approx 10.4} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- If we differentiate $h(t)$ with respect to $t$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.2em} h'(t) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\big[-2t^2+20t+8\\big] \\\\[6pt]\n  &\\answer{= -4t+20}\\end{aligned}\n  $$\n\n- If we sketch the graph of $y = h(t)$, for $t \\geq 0$ [by using\nG.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c760d599-f910-4557-b1f6-1de511fb6a68/images/1f252474-3408-41a9-a62f-a5254bf8ee4e/397bd75d8b517ae440b92c4aa69a8d23b9a43a67.svg)\n\n\n  Hence the maximum height is\n$\\answer{58 \\text{ m}}$\nand it is reached after\n$\\answer{5 \\text{ seconds}}$\n- Solving the equation $h(t) = 8$ for $t > 0$, we find\n\n  $$\n  \\begin{aligned}\n  -2t^2+20t+8 &= 8 \\hspace{8.6em} \\\\[6pt]\n  -2t^2+20t &= 0 \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{12.2em} \\answer{t = 10 \\text{ seconds}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '13',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 57',
    content:
      'The dietary reference intake (DRI, in grams), $y$, of protein for a\nsedentary male adult of mass $x$ kg is\ndetermined by the equation $y = mx + c$, where $m$ and $c$ are\nconstants.\nFor a male adult of mass $60$ kg the DRI of\nprotein is $69$ grams, and for a male adult of mass\n$90$ kg the DRI of protein is $91.5$ grams.\n\n- Determine the value of $m$ and the value of $c$. <span class="marks">[3]</span>\n\n- Find the DRI of protein for a male adult of mass\n$70$ kg. <span class="marks">[2]</span>\n\n- Suggest a reason why the equation may not be appropriate for\ndetermining the DRI of protein for a male child of mass\n$40$ kg. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  69 &= 60m + c \\hspace{3.5em} \\qref{(1)} \\\\[6pt]\n  91.5 &= 90m + c \\qref{(2)}\\end{aligned}\n  $$\n\n  Solving the system of\nlinear equations $(1)$-$(2)$ for $m$ and $c$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} \\answer{m = 0.75}\\hspace{0.525em}\\text{ and }\\hspace{0.525em}\\answer{c = 24} \\hspace{2.5em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- Evaluating $y = 0.75x + 24$ for $x = 70$, we obtain\n\n  $$\n  \\begin{aligned}\n  y &= 0.75(70) + 24 \\\\[6pt]\n  &\\answer{= 76.5 \\text{ grams}}\\end{aligned}\n  $$\n\n- The relationship may no longer be linear outside the range of weights of male adults.\n',
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
    title: 'Question 58',
    content:
      'The graph of a quadratic function has a $y$-intercept at A$(0,24)$ and\none of its $x$-intercepts is B$(2,0)$.\nThe $x$-coordinate of the vertex of the graph is $4$.\nThe equation of the quadratic function is in the form $y = ax^2+bx+c$.\n\n- Write down the value of $c$. <span class="marks">[1]</span>\n\n- Find the value of $a$ and the value of $b$. <span class="marks">[4]</span>\n\n- Write down the coordinates of the second $x$-intercept of the\nfunction. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- $\\answer{c = 24}$\n- Using the axis of symmetry formula, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.4em} 4 &= -\\dfrac{b}{2a} \\hspace{3em} [\\text{since $x = 4$}] \\\\[6pt]\n  b &= -8a \\qref{(1)}\\end{aligned}\n  $$\n\n  Using the coordinates of B, we\nget\n\n  $$\n  \\begin{aligned}\n  0 &= a(2)^2 + b(2) + c \\\\[6pt]\n  [\\text{from $(1)$ \\& part (a)}] \\hspace{2em} 0 &= a(2)^2 + (-8a)(2) + 24 \\hspace{3.6em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{8.1em} \\answer{a = 2} \\\\[3pt] \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n  Hence, substituting $a = 2$ in the equation $(1)$, we obtain\n\n  $$\n  \\begin{aligned}\n  b &= -8(2) \\hspace{0.4em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{b = -16} \\hspace{1.7em}\n  $$\n\n- $\\answer{(6,0)}$\n',
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
    title: 'Question 59',
    content:
      'Sarah\'s investment portfolio, $V(t)$, in Australian dollars (AUD), is\nmodelled by the function\n\n$$\nV(t) = 64\\hspace{0.15em}000\\times\\left(1 + \\dfrac{k}{100}\\right)^t, \\hspace{0.5em} t \\geq 0,\n$$\n\nwhere $t$ is the number of years since $2019$ and $k$ is a constant.\n\n- Find an expression for the value of the investment portfolio in\n$2020$. Give your answer in the form $a + bk$, where\n$a,b \\in \\mathbb{Z}^+$. <span class="marks">[2]</span>\n\n\nThree years later, in $2022$, the value of the investment portfolio is\nexpected to be $74\\hspace{0.15em}088$ AUD.\n\n- Find the value of $k$. <span class="marks">[2]</span>\n\n\nThis model is defined for $0 \\leq t \\leq n$. At $n$ years, the value of\nthe investment portfolio would have doubled since $2019$.\n\n- Find the value of $n$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ff457177-5def-4306-a827-b5312983770c/images/6ecb8a65-c1f7-4db9-aa27-b8d368274747/70d7f3dfd5326294e23da6bf1d0710b2f53e7027.svg)\n\n\n  Hence, substituting $t = 1$ in the expression for $V(t)$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} V(1) &= 64\\hspace{0.15em}000\\times\\left(1 + \\dfrac{k}{100}\\right) \\\\[12pt]\n  &\\answer{= 64\\hspace{0.15em}000 + 640k}\\end{aligned}\n  $$\n\n- Solving the equation $V(3) = 74\\hspace{0.25em}088$ for $k$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  64\\hspace{0.15em}000\\times\\left(1 + \\dfrac{k}{100}\\right)^3 &= 74\\hspace{0.25em}088 \\hspace{9.3em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{7.8em} \\answer{k = 5} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Solving the equation $V(n) = 2\\times64\\hspace{0.15em}000$ for $n$,\nwe find\n\n  $$\n  \\begin{aligned}\n  64\\hspace{0.15em}000\\times\\left(1 + \\dfrac{5}{100}\\right)^n &= 128\\hspace{0.15em}000 \\hspace{9em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.6em} \\answer{n \\approx 14.2 \\text{ years}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 60',
    content:
      'The following table shows the total revenue, $y$, in Australian dollars\n(AUD), $\\text{obtained}$ daily during the first week of January\n$2020$, by Peppy\'s Pizza $\\text{restaurant}$ and the number of\nguests, $x$, served.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/0b8e05a7-0c33-4aef-a8f9-eaa7da8cacbd/images/5c7e3e73-93f7-4332-8ef8-a9fee762c9a8/9736e8eb9c9cfe8a065bfa8f5344721e7887b704.svg)\n\n\n\n- \n  - Calculate the Pearson\'s product-moment correlation coefficient,\n$r$, for this data.\n  - Hence comment on the result. <span class="marks">[4]</span>\n\n\n- Write down the equation of the regression line $y$ on $x$.\n<span class="marks">[2]</span>\n\n- Use the line of the regression to estimate the revenue of serving\n$70$ guests. Give your answer correct to the nearest AUD.\n<span class="marks">[3]</span>\n\n\nDaily maintenance cost for the restaurant is $240$ AUD. Additionally,\nthe cost of serving one guest is $5$ AUD.\n\n- Determine if the restaurant makes a profit when serving\n$45$ guests on a $\\text{particular}$ day. <span class="marks">[2]</span>\n\n- \n  - Write down an expression for the total revenue of serving $x$\nguests.\n  - Find an expression for the profit of the restaurant when serving\n$x$ guests on a particular day.\n  - Find the least number of guests required to be served to result\nin a profit for the day. <span class="marks">[5]</span>\n\n\n',
    markScheme:
      '\n- \n  - $\\answer{r = 0.991}$ [$\\text{by using G.D.C.}$]\n  - $\\answer{\\text{Positive, strong correlation b/n the number of guests and revenue}}$\n\n- $\\answer{y = 10.4x - 14.3}$ [$\\text{by using G.D.C.}$]\n- Evaluating $y = 10.4x - 14.3$ for $x = 70$, we get\n\n  $$\n  \\begin{aligned}\n  y &= 10.4(70) - 14.3 \\\\[6pt] \n  &= 713.7 \\\\[6pt]\n  &\\answer{\\approx 714 \\text{ AUD}}\\end{aligned}\n  $$\n\n- The profit of the restaurant when serving $45$ guests on a\nparticular day is\n\n  $$\n  \\begin{aligned}\n  \\text{Profit} &= \\text{Revenue} - \\text{Costs} \\\\[6pt]\n  &= 410 - (240 + 5(45)) \\\\[6pt]\n  &= -55 \\text{ AUD} \\\\\n  \\end{aligned}\n  $$\n\n  $\\answer{\\text{Hence the restaurant makes a loss when serving only \\(45\\) guests.}}$\n- \n  - $\\answer{\\mathrm{Revenue} = 10.4x - 14.3}$\n  - We have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.4em} \\mathrm{Profit} &= \\text{Revenue} - \\text{Costs} \\\\[6pt]\n    &= (10.4x - 14.3) - (240 + 5x) \\\\[6pt]\n    &= 10.4x - 14.3 - 240 - 5x \\\\[6pt]\n    &\\answer{= 5.4x - 254.3}\\end{aligned}\n    $$\n\n  - Solving the equation $\\text{Profit} = 0$ for $x$, we obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.1em} 5.4x - 254.3 &= 0 \\\\[6pt]\n    x &\\approx 47.1 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence\n$\\answer{\\text{at least \\(48\\) guests}}$\nare required to be served to result in a profit.\n\n',
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
    title: 'Question 61',
    content:
      'The table below shows the income tax rates in Australia for $2019/2020$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/38e87d71-aa45-4ae1-997c-8168046a7a6b/images/62b3675b-f14c-40c4-a8aa-d70cde20282f/fdc54f4f44cdc2829f72776123b2f9c38299e7c3.svg)\n\n\n\n- Find the exact amount of tax payable for a person who earns\n$\\$200\\hspace{0.15em}000$. <span class="marks">[2]</span>\n\n- Draw the graph of tax payable versus income on the grid below.\n<span class="marks">[4]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/38e87d71-aa45-4ae1-997c-8168046a7a6b/images/7085a029-658e-46f4-be97-d44b512fce9b/8e8ba36becb38ae96165f6d48e55934a801a7f2e.svg)\n\n\n',
    markScheme:
      '\n- Evaluating tax payable for the income of $\\$200\\hspace{0.15em}000$,\nwe get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.7em} \\text{Tax payable} &=  54\\hspace{0.15em}096 + 0.45(200\\hspace{0.15em}000 - 180\\hspace{0.15em}000) \\\\[6pt]\n  &\\answer{= \\$63\\hspace{0.15em}096}\\end{aligned}\n  $$\n\n- If we draw the graph of tax payable versus income on the grid below,\nwe have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/38e87d71-aa45-4ae1-997c-8168046a7a6b/images/fb4d534a-b60f-4c0a-8de5-135a69bbb778/d0dcbec18fa7bb96c644a91fc31b7a8ba8c32cb7.svg)\n\n\n',
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
    title: 'Question 62',
    content:
      'The following table shows the total revenue, $y$, in US dollars (USD),\n$\\text{obtained}$ monthly during the first six months of $2020$,\nby Law Office of Fox Brothers and the number of clients, $x$, served.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/3fada96d-f0c9-41f0-9d39-499c701ec1ba/images/c0269508-9618-4eab-8784-4661a19513ee/e4734e7152b428b88af8a05241306257c07d8464.svg)\n\n\n\n- \n  - Calculate the Pearson\'s product-moment correlation coefficient,\n$r$, for this data.\n  - Hence comment on the result. <span class="marks">[4]</span>\n\n\n- Write down the equation of the regression line $y$ on $x$.\n<span class="marks">[2]</span>\n\n- Use the line of the regression to estimate the revenue of serving\n$20$ clients. Give your answer correct to the nearest USD.\n<span class="marks">[3]</span>\n\n\nMonthly operating cost for the law office is $\\$2500$. Additionally, the\ncost of serving each client is $\\$200$.\n\n- Determine if the law office makes a profit when serving $6$\nclients on a $\\text{particular}$ month. <span class="marks">[2]</span>\n\n- \n  - Write down an expression for the total revenue of serving $x$\nclients.\n  - Find an expression for the profit of the law office when serving\n$x$ clients on a particular month.\n  - Find the least number of clients required to be served to result\nin a profit for the month. <span class="marks">[5]</span>\n\n\n',
    markScheme:
      '\n- \n  - $\\answer{r = 0.995}$ [$\\text{by using G.D.C.}$]\n  - $\\answer{\\text{Positive, strong correlation b/n the number of clients and revenue}}$\n\n- $\\answer{y = 654x - 541}$ [$\\text{by using G.D.C.}$]\n- Evaluating $y = 654x - 541$ for $x = 20$, we get\n\n  $$\n  \\begin{aligned}\n  y &= 654(20) - 541 \\hspace{0.5em} \\\\[6pt]\n  &= 12\\hspace{0.15em}539 \\\\[6pt]\n  &\\answer{= 12\\hspace{0.15em}539} \\end{aligned}\n  $$\n\n- The profit of the law office when serving $6$ clients on a\nparticular month is\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.5em} \\text{Profit} &= \\text{Revenue} - \\text{Costs} \\\\[6pt]\n  &= 3000 - (2500 + 200(6)) \\\\[6pt]\n  &= -\\$700 \\\\\n  \\end{aligned}\n  $$\n\n  $\\answer{\\text{Hence the law office makes a loss when serving only \\(6\\) clients.}}$\n- \n  - $\\answer{\\mathrm{Revenue} = 654x - 541}$\n  - We have\n\n    $$\n    \\begin{aligned}\n    \\hspace{4.3em} \\mathrm{Profit} &= \\text{Revenue} - \\text{Costs} \\\\[6pt]\n    &= (654x - 541) - (2500 + 200x) \\\\[6pt]\n    &= 654x - 541 - 2500 - 200x \\\\[6pt]\n    &\\answer{= 454x - 3041}\\end{aligned}\n    $$\n\n  - Solving the equation $\\text{Profit} = 0$ for $x$, we obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.1em} 454x - 3041 &= 0 \\\\[6pt]\n    x &\\approx 6.70 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence\n$\\answer{\\text{at least \\(7\\) clients}}$\nare required to be served to result in a profit.\n\n',
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
    title: 'Question 63',
    content:
      'The brightness of a star can be measured in terms of its apparent magnitude, $M$, as seen from Earth.\nThe amount of energy received on Earth by a star is called the the observed flux density, $F$.\n$M$ and $F$ are related by the following formula\n\n$$\n\\frac{M}{2.5} = \\log_{10}\\left(\\frac{1}{F}\\right)\n$$\n\n\n- If a star has a value of $F=2500$, find the value of $M$.<span class="marks">[2]</span>\n\n- Find $F$ as a function of $M$.<span class="marks">[2]</span>\n\n\nThe apparent magnitude of the sun is known to be $M_s=-26.8$ and the apparent magnitude of the full moon is known to be $M_m=-12.7$.\n\n- Find their brightness factor, $\\dfrac{F_s}{F_m}$, to three significant figures in the form $a\\times10^k$, where $1<a<10$ and $k\\in \\mathbb{Z}$.<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Using the numerical solver on the G.D.C.\n\n  $$\n  \\begin{align*}\n  \\frac{M}{2.5} &= \\log_{10}\\left(\\frac{1}{2500}\\right)\\tag*{\\textbf{M1}}\\\\\n      M&=-8.49485...\\\\[6pt]\n      &=\\hspace{0.525em}\\tcbhighmath{-8.49} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- First we raise both sides of the equation to the power of $10$.\n  The R.H.S. is such that $10^{\\log_{10}\\tfrac{1}{F}}=\\frac{1}{F}$.\n  Hence\n\n  $$\n  \\begin{align*}\n      10^{\\tfrac{M}{2.5}}&=\\frac{1}{F} \\tag*{\\textbf{A1}}\\\\[6pt]\n      F&=\\hspace{0.525em}\\answer{10^{-\\tfrac{M}{2.5}}} \\hspace{2em} \\text{or } \\hspace{2em} \\hspace{0.525em}\\tcbhighmath{\\frac{1}{10^{\\tfrac{M}{2.5}}}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We can use the formula from part (b) to find $F_s=F(-26.8)$ and  $F_m=F(-12.7)$. Hence\n\n  $$\n  \\begin{align*}\n      \\frac{F_s}{F_m}&=\\frac{F(-26.8)}{F(-12.7)} \\tag*{\\textbf{M1}}\\\\[6pt]\n      &=\\frac{10^{-\\tfrac{-26.8}{2.5}}}{10^{-\\tfrac{-12.7}{2.5}}}\n  \\end{align*}\n  $$\n\n  Notice the negative signs cancel out.\n\n  $$\n  \\begin{align*}\n      &=\\frac{5.248...\\times10^{10}}{120226.44..} \\tag*{\\textbf{A1}}\\\\\n      &=436515.8...\\\\[6pt]\n      &=\\hspace{0.525em}\\tcbhighmath{4.37 \\times 10^5} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
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
    title: 'Question 64',
    content:
      'The data below shows the price, $y$, in Kazakhstani tenge (KZT), that\neach bag of wheat flour can be purchased for at a wholesale market in\nAlmaty if $x$ bags are ordered.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/620f11cc-de36-420f-8fd5-6f61bec6fd2e/images/6fdb89eb-7ab4-4f60-a277-9ebc4bccb019/5a253ce60e250108cf649fd1f8dc000abcca0657.svg)\n\n\n\n- Find an expression for the price, $y$ KZT, of each bag purchased in\nterms of the number of bags, $x$, ordered. <span class="marks">[2]</span>\n\n- Hence find the exact total cost of purchasing $250$ bags of wheat\nflour. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- From the data we see that $y$ is determined by the linear equation\n$y= mx + c$.\n  Hence we have\n\n  $$\n  \\begin{aligned}\n  50m + c &= 6500  \\qref{(1)} \\\\[6pt]\n  100m + c &= 6000 \\hspace{0.75em} \\qref{(2)}\\end{aligned}\n  $$\n\n  Solving\nthe system of linear equations $(1)$-$(2)$ for $m$ and $c$, we get\n\n  $$\n  \\begin{aligned}\n  \n  \\hspace{8.9em} \\begin{array}{rcl}\n  m &=& -10 \\\\[6pt]\n  c &=& 7000\n  \\end{array} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{y = -10x + 7000}$\n- Evaluating $y = -10x + 7000$ for $x = 250$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.8em} y &= -10(250) + 7000 \\\\[6pt]\n  &= 4500 \\text{ KZT}\\end{aligned}\n  $$\n\n  Hence the total cost of\npurchasing $250$ bags of wheat flour is\n\n  $$\n  \\begin{aligned}\n  \\text{Total cost} &= 4500(250) \\\\[6pt]\n  &\\answer{= 1\\hspace{0.15em}125\\hspace{0.15em}000 \\text{ KZT}} \\hspace{1em}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 65',
    content:
      'The average gasoline price, $P$, in cents per gallon, in USA $2019$ can\nbe modelled by the function\n\n$$\n\\hspace{1em} P(t) = a\\cos\\hspace{0.15em}(\\ang{15}\\hspace{-0.15em}\\times t+\\ang{90}) + b, \\hspace{0.5em} 0 \\leq t \\leq 365,\n$$\n\nwhere $t$ is the elapsed time, in days, since New Year\'s Eve $2018$.\nPart of the graph of $y = P(t)$ is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/80d14f42-a9e9-49a9-8f34-f3ad09b8c895/images/f323592f-678a-4312-aa48-55fd411bb4ce/eba99471e7227e6ca3549b0274fdd498563d4121.svg)\n\n\n\n- Write down the value of $b$. <span class="marks">[1]</span>\n\n\nThe average price of gasoline at the end of $14$th of January, $2019$ was $328$\ncents per gallon.\n\n- Show that the value of $a$ is equal to 56. <span class="marks">[2]</span>\n\n- Hence calculate:\n  \n  - the average gasoline price on the $14$th of February, $2019$;\n  - the minimum and maximum average prices of gasoline in USA\n$2019$. <span class="marks">[3]</span>\n\n\n\nThe cycle of average gasoline prices repeats every T days.\n\n- Determine the value of T.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- $\\answer{300}$\n- Solving the equation $P(14) = 328$ for $a$, we get\n\n  $$\n  \\begin{aligned}\n  a\\cos\\hspace{0.15em}(\\ang{15}\\hspace{-0.15em}\\times 14+\\ang{90}) + 300 &= 328 \\hspace{10em} \\\\[6pt]\n  a\\cos \\ang{300} + 300 &= 328 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.2em} \\answer{a = 56} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- \n  - Evaluating $P(t)$ for $t = 31+14 = 45$, we obtain\n\n    $$\n    \\begin{aligned}\n    P(45) &= 56\\cos\\hspace{0.15em}(\\ang{15}\\hspace{-0.15em}\\times 45+\\ang{90}) + 300 \\\\[6pt]\n    &\\answer{\\approx 340 \\text{ cents per gallon}}\\end{aligned}\n    $$\n\n  - The min and max values of the cosine function are $-1$ and $+1$.\nHence the min and max average prices are\n\n    $$\n    \\begin{aligned}\n    P_{\\text{min}} &= 56(-1)+300 \\\\[6pt]\n    &\\answer{\\approx 244 \\text{ cents per gallon}} \\hspace{3em} \\\\[15pt]\n    P_{\\text{max}} &= 56(+1)+300 \\\\[6pt]\n    &\\answer{\\approx 356 \\text{ cents per gallon}}\\end{aligned}\n    $$\n\n\n- Using G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/80d14f42-a9e9-49a9-8f34-f3ad09b8c895/images/95fdb075-ae11-4e91-9c51-45fed90c3c09/0189e79cc182a1047199d3fb9dc1b367d698bb2d.svg)\n\n\n  Hence we find\n$\\answer{\\text{T} = 24}$\n',
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
    title: 'Question 66',
    content:
      'Part of the graph of $y = f(x)$ is shown below. The point A$(3,4)$ lies\non the graph.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/bc997ee1-157a-4954-840a-c7cf3a649ca9/images/40752509-d462-43d8-b4eb-2c65b6d2b48f/cc26169f3e878b541f9e30065e66509e180ee603.svg)\n\n\n\n- Write down the value of $f(3)$. <span class="marks">[1]</span>\n\n\nThe tangent line $L$ to the graph of $y = f(x)$ at point A has equation\n$y = 3x - 5$.\n\n- Find the equation of the normal line $N$ to the graph of\n$y = f(x)$ at point A. Give your answer in the form\n$ax + by + d = 0$, where $a, b, d \\in \\mathbb{Z}$. <span class="marks">[3]</span>\n\n- Draw the lines $L$ and $N$ on the same grid above,\nlabelling the intercepts with the axes. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{f(3) = 4}$\n- The gradient of $N$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.7em} m_{N} &= -\\dfrac{1}{m_{L}} \\hspace{3em} [\\text{since $N \\perp L$}] \\\\[6pt]\n  &= -\\dfrac{1}{3}\\end{aligned}\n  $$\n\n  Hence, using the point-gradient\nformula with A$(3,4)$ and $m = -1/3$, we get\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\\\[5pt]\n  y - 4 &= -\\dfrac{1}{3}\\hspace{0.05em}(x - 3) \\\\[6pt]\n  \\hspace{1.0em} 3(y - 4) &= -(x - 3) \\\\[11pt]\n  3y - 12 &= -x + 3 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{x + 3y - 15 = 0} \\hspace{4.65em}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  L:&\\hspace{1em} y = 3x - 5 \\\\[10pt] \n  \\text{$x$-intercept}:& \\hspace{1em} \\mathrm{B}(5/3,0) \\\\[10pt]\n  \\text{$y$-intercept}:& \\hspace{1em} \\mathrm{C}(0,-5)\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  N:&\\hspace{1em} y = -\\dfrac{1}{3}x + 5 \\\\[6pt] \n  \\text{$x$-intercept}:& \\hspace{1em} \\mathrm{D}(15,0) \\\\[10pt]\n  \\hspace{1.1em} \\text{$y$-intercept}:& \\hspace{1em} \\mathrm{E}(0,5)\\end{aligned}\n  $$\n\n  Hence, if we draw the lines $L$ and $N$ on the same grid below,\nindicating the points B and E, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/bc997ee1-157a-4954-840a-c7cf3a649ca9/images/73281b15-cfe0-4b6f-854a-9bef91565be1/a6912eec889f05ce26fa48c17eb09f173f2604d9.svg)\n\n\n',
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
    title: 'Question 67',
    content:
      'The number of users on a new social network in $2018$ was\n$320\\hspace{0.15em}000$. One year later, in $2019$, the number of users\non this network is estimated to be $350\\hspace{0.15em}000$. The number\nof the users on this network, $N$, can be modelled by the function\n\n$$\n\\begin{aligned}\nN(t) = 320\\hspace{0.15em}000\\times b^t, \\hspace{0.5em} t\\geq0, \\end{aligned}\n$$\n\nwhere $t$ is the number of years since $2018$ and $b$ is a constant.\n\n- Find the value of $b$. <span class="marks">[2]</span>\n\n- Estimate the number of the users on this network there will be in\n$2023$.<span class="marks">[2]</span>\n\n- Forecast the year for which the number of the social network users\nreaches one million. Give your answer correct to the nearest\nyear. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c0462e85-e9f3-4564-b103-1800a0e6c31a/images/6fd93ccd-3403-459a-b1d0-cc108da6027c/033cf3beecde613f81a96d293306464dcb68241a.svg)\n\n\n  Hence, solving the equation $N(1) = 350\\hspace{0.15em}000$ for $b$,\nwe get\n\n  $$\n  \\begin{aligned}\n  320\\hspace{0.15em}000\\times b &= 350\\hspace{0.15em}000 \\hspace{4.4em} \\\\[9pt]\n  b &= \\dfrac{350\\hspace{0.15em}000}{320\\hspace{0.15em}000} \\\\[6pt]\n  b &= \\dfrac{35}{32} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{b \\approx 1.09} \\hspace{1.4em}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c0462e85-e9f3-4564-b103-1800a0e6c31a/images/84b094eb-d9dd-4085-b69d-76fef087f129/74c77aa092bfa1ac875f40785f7097708883e3e2.svg)\n\n\n  Hence, evaluating $N(t)$ for $t = 5$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.6em} N(5) &= 320\\hspace{0.15em}000\\times \\left(\\dfrac{35}{32}\\right)^5 \\\\[4pt]\n  &\\approx 500\\hspace{0.15em}888 \\\\[10pt]\n  &\\answer{\\approx 501\\hspace{0.15em}000 \\text{ users}}\\end{aligned}\n  $$\n\n  Note: Using a rounded answer from part (a) will produce a different answer. It is very important to use unrounded answers in subsequent parts unless otherwise stated!\n- Solving the equation $N(t) = 1\\hspace{0.15em}000\\hspace{0.15em}000$\nfor $t$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.75em} 320\\hspace{0.15em}000\\times \\left(\\dfrac{35}{32}\\right)^t &= 1\\hspace{0.15em}000\\hspace{0.15em}000 \\\\[6pt]\n  t &\\approx 12.7 \\text{ years} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  If we determine the years corresponding to $t = 12$ and $t=13$, we\nhave\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c0462e85-e9f3-4564-b103-1800a0e6c31a/images/1245122b-6dac-4c68-8899-ca6456b3869e/a616f6ab254b62e363c8d49827ba23ea9d06f1c6.svg)\n\n\n  Hence the number of network users reaches one million\n$\\answer{\\text{during } 2030}$\n',
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
    title: 'Question 68',
    content:
      'The downward speed, $V$, in metres per second, gained by a skydiver\nduring a jump is modelled by the function\n\n$$\n\\begin{aligned}\nV(t) = 56 - 56\\times3^{-\\frac{t}{4}}, \\hspace{0.5em} t \\geq 0,\\end{aligned}\n$$\n\nwhere $t$, in seconds, is the time for which the skydiver is free\nfalling in the air.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/c78843c2-7d92-4862-b0e4-d8852e751513/images/0c7e427a-797f-41b5-a346-4d216bf8de4c/d3ee9eadbfc138be37002b3f29e50508f36ba8d9.svg)\n\n\n\n- Write down the downward speed of the skydiver at $t=0$. <span class="marks">[1]</span>\n\n\nThe line $L$ is the horizontal asymptote to the graph.\n\n- Determine the equation of $L$. <span class="marks">[2]</span>\n\n\nThe skydiver starts to feel no acceleration when he reaches the speed of\n$55$ metres per second.\n\n- Find the time it takes for the skydiver to reach this\nspeed. Give your answer correct to the nearest second.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Evaluating $V(t)$ for $t = 0$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} V(0) &= 56-56\\times 3^0 \\\\[6pt]\n  &= 56-56 \\\\[6pt]\n  &\\answer{= 0 \\text{ m$/$s}}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.2em} \\lim_{t\\rightarrow\\infty} V(t) &= \\lim_{t\\rightarrow\\infty} \\big[56 - 56\\times3^{-\\frac{t}{4}}\\big] \\\\[6pt]\n  &= 56 - 0 \\hspace{2em} [\\text{since $3^{-\\frac{t}{4}} \\rightarrow 0$ as $t \\rightarrow \\infty$}] \\\\[10pt]\n  &= 56 \\text{ m$/$s}\\end{aligned}\n  $$\n\n  Hence the equation of $L$ is\n$\\answer{y = 56}$\n- Solving the equation $V(t) = 55$ for $t$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.5em} 56 - 56\\times3^{-\\frac{t}{4}} &= 55 \\\\[6pt]\n  t &\\approx 14.7 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence it takes\n$\\answer{15 \\text{ seconds}}$\nto reach the speed of $55$ metres per second.\n',
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
    title: 'Question 69',
    content:
      'At the start 2001, a team of zoologists introduced a new species of rabbit onto a large island. $1000$ rabbits were initially introduced and there were $1728$ rabbits at the start of 2004.\nThe size of the population of the species, $N$, $t$ years after the start of 2001, can be modelled by the following function\n\n$$\nN(t) = p \\times q^t, \\quad \\qquad t\\geq 0\n$$\n\n\n- \n  - Show that the value of $p$ is $1000$.\n  - Verify that $q=1.2$.<span class="marks">[2]</span>\n\n\n- State the annual growth rate of the population as a percentage. <span class="marks">[1]</span>\n\n- Use the model to predict the population size at the start of 2011.<span class="marks">[2]</span>\n\n\nIn 2012, the team observed that the growth rate of the rabbit species was changing and that the overall population was now in decline. Upon investigation, they found that the rabbits had became the prey of a new type of snake on the island. Zoologists adjusted their model to the following new function, where $t$ is still the number of years after the start of 2001.\n\n$$\nN(t) = 1380 \\times (0.87)^{(t-12)} \\quad \\qquad t\\geq 12\n$$\n\n\n- Use this model to find the size of the population at the start of 2019.<span class="marks">[2]</span>\n\n- Find the year in which the population of the species will first drop below $200$.<span class="marks">[3]</span>\n\n- In the period from 2013 onwards, find the number of complete years in which the size of the population of the species was greater than or equal to $800$.<span class="marks">[3]</span>\n\n\nAt the start of 2020, the remaining population of the species was transferred to another island along with $300$ more rabbits. The team of zoologists now expect the population growth will recover and will increase at a rate of $10\\%$ per year.\n\n- Estimate the size of the population at the start of 2030. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- \n  - We have been given that $N(0)=1000$. Therefore\n\n    $$\n    \\begin{align*}\n    N(0) &= p \\times q^0 \\tag*{\\textbf{A1}}\\\\[8pt]\n    1000 &= p \n    \\end{align*}\n    $$\n\n    $\\answer{\\text{We have shown that $p=1000$.}}$\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{AG}}\t\n    \\end{aligned}\n    $$\n\n  - Now we know that $N(t)=1000\\times q^t$ and we have been given that $N(3)=1728$. We can use the value $q=1.2$ to verify that $N(3)$ gives the correct result.\n\n    $$\n    \\begin{align*}\n    N(3) &= 1000 \\times (1.2)^3 \\tag*{\\textbf{A1}}\\\\[8pt]\n    &= 1728\n    \\end{align*}\n    $$\n\n    Using the value $q=1.2$, we have shown that the model predicts $1728$ rabbits at the start of $2004$. This verifies that $q=1.2$.\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{AG}}\t\n    \\end{aligned}\n    $$\n\n\n- We have shown that the model is $N(t)=1000(1.2)^t$.\n  This tells us that each year, we multiply the existing population by $1.2$ to generate the next population value.\n  Therefore $\\answer{\\text{the annual growth rate is $20\\%$}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- After ten years the population size is\n\n  $$\n  \\begin{align*}\n  N(10) &= 1000 \\times 1.2^{10}  \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 6191.7... \\\\[6pt]\n  &\\hspace{0em}\\tcbhighmath{ = 6190\\,\\text{(3 s.f.)}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We have\n\n  $$\n  N(t) = 1380 \\times (0.87)^{(t-12)}\n  $$\n\n  The start of 2019 will be when $t=18$. We have\n\n  $$\n  \\begin{align*}\n  N(18) &= 1380 \\times (0.87)^{(18-12)}  \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 598.40... \\\\[6pt]\n  &\\hspace{0em}\\tcbhighmath{ = 598\\,\\text{(3 s.f.)}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The graph of $N(t) = 1380 \\times (0.87)^{(t-12)}$ is shown below. We can sketch this on the G.D.C. and use it to determine the exact value of $t$ when $N=200$, and interpret this value in context.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/e360e93f-14ad-43f3-86bc-5eb708cda046/images/bab12a3b-5595-46ac-9a61-591ea590d300/ai1209a.JPG)\n\n\n  From the graph we have $N(t) < 200$ when $t>25.9$.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  The population will first drop below $200$ during the $25$th year after the start of 2001, which is towards the end of the year 2026.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- The graph of $N(t) = 1380 \\times (0.87)^{(t-12)}$ is shown below\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/e360e93f-14ad-43f3-86bc-5eb708cda046/images/60426c4d-6d77-4c77-a92b-3fca0b81ac77/ai1209b.JPG)\n\n\n  From the graph we have $N(t) \\geq 800$ when $t \\leq 15.9$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  This means we have a population of at least $800$ for the full duration of $2013, 2014$ and $2015$. The value $t=15.9$ occurs during the year $2016$.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  The population size is greater than or equal to $800$ for three complete years (2013 to 2015).\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- At the start of $2020$, $t=19$. We have\n\n  $$\n  \\begin{align*}\n  N(19) &= 1380 \\times (0.87)^{(19-12)}  \\\\[6pt]\n  &=520.61... \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  We can round this to the nearest whole number, as we require a whole number of rabbits to be transferred to the new island.\n  The starting population on the new island will be $521+300=821$\n  With the predicted growth rate of $10\\%$, the model for population growth on the new island will be $N(t)=821 \\times (1.1)^t$, where $t$ will be time since the start of $2020$, therefore we will use $t=10$.\n\n  $$\n  \\begin{align*}\n  \\text{Population at the start of 2030} &= 821 \\times (1.1)^{10}  \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 2129.4...\\\\[6pt]\n  &\\hspace{0em}\\tcbhighmath{ = 2130\\,\\text{(3 s.f.)}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
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
    title: 'Question 70',
    content:
      'Hayley is investigating the growth of a bacteria. She records the approximate number of bacteria, $N$, after $t$ hours.\nAfter creating a scatterplot with t on the $x$-axis and $\\ln(N)$ on the $y$-axis, Hayley notices a strong linear correlation during the first 5 hours. The line of best fit, shown on the following diagram, passes through the points $(0,3.054)$ and $(5, 8.094)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/e3bb3be6-64f7-4a98-803b-e082cddcb2c3/images/2663f4aa-688b-4d35-bfb3-c08ea748b81e/1183.JPG)\n\n\n\n- Find an equation for $N$ in terms of $t$. Give your answer in the form $N(t)=a(b)^t$, where $a,b \\in \\mathbb{R}$. \t<span class="marks">[3]</span>\n\n- Hence state the values of\n  \n  - $N(0)$\n  - $N(5)$ <span class="marks">[2]</span>\n\n\n\nAfter tracking her data over several more hours, Hayley notices that the number of bacteria never reaches 10,000 and realises a more appropriate model would be of the form\n\n$$\n\\begin{align*}\nN(t)=\\dfrac{10\\,000}{1+Ce^{-kt}},\\enskip \\text{ where }\\enskip C,k>0.\n\\end{align*}\n$$\n\n\n- Using part (b), find appropriate values for $C$ and $k$. \t <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Because we have a linear relationship between $\\ln N$ and $t$, we can express this as $\\ln N = mt + c$.\n  The $y$-intercept is $(0,3.054)$, therefore $c=3.054$. To find the gradient, we have\n\n  $$\n  \\begin{align*}\n  m &= \\dfrac{y_2-y_1}{x_2-x_1} \\\\[6pt]\n  &= \\dfrac{8.094-3.054}{5-0} \\\\[6pt]\n  &= 1.008\n  \\end{align*}\n  $$\n\n  We can now convert this linear equation into the form required:\n\n  $$\n  \\begin{align*}\n  \\ln N &= 1.008t + 3.054 \\tag*{\\textbf{(A1)}}\\\\[6pt]\n  N &= e^{1.008t + 3.054} \\\\[6pt]\n  &= e^{1.008t}\\cdot e^{3.054} \\hspace{3.5em}[e^{m+n}=e^m \\cdot e^n] \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= e^{3.054}\\left(e^{1.008}\\right)^t \\hspace{3em}[e^{m\\times n}=\\left(e^m\\right)^n]\\\\[6pt]\n  &= 21.199...(2.7401...)^t \\\\[6pt]\n  &\\hspace{-2.25em}\\tcbhighmath{N(t) = 21.2(2.74)^t\\,(3\\,\\mathrm{s.f.})} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- \n  - We have\n\n    $$\n    \\begin{align*}\n    N(0) &= 21.199...(2.7401...)^0 \\\\[6pt]\n    &= 21.199... \\\\[6pt]\n    &\\hspace{-2.5em}\\tcbhighmath{N(0) = 21.2\\,(3\\,\\mathrm{s.f.})} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - We have\n\n    $$\n    \\begin{align*}\n    N(5) &= 21.199...(2.7401...)^5 \\\\[6pt]\n    &= 3274.7...\\\\[6pt]\n    &\\hspace{-2.5em}\\tcbhighmath{N(5) = 3270\\,\\text{(3 s.f.)}} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- From part (b) we have $N(0)=21.199...$ and $N(5)=3274.7...$. Using the first of these solutions, we have\n\n  $$\n  \\begin{align*}\n  N(t) &=\\dfrac{10\\,000}{1+Ce^{-kt}} \\\\[6pt]\n  N(0) &= \\dfrac{10\\,000}{1+Ce^{-k(0)}} \\\\[6pt] \n  21.199... &= \\dfrac{10\\,000}{1+C} \\tag*{\\textbf{(M1)}} \n  \\end{align*}\n  $$\n\n  Using the numerical solver on the G.D.C., we find that $C=470.698...$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n  Using the second of these solutions, we have\n\n  $$\n  \\begin{align*}\n  N(t) &=\\dfrac{10\\,000}{1+470.698...e^{-kt}} \\\\[6pt]\n  N(5) &= \\dfrac{10\\,000}{1+470.698...e^{-5k}} \\\\[6pt] \n  3274.7... &= \\dfrac{10\\,000}{1+470.698...e^{-5k}}\n  \\end{align*}\n  $$\n\n  Using the numerical solver on the G.D.C., we find that $k=1.0869...$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{align*}\n  &\\tcbhighmath{C = 471 \\enskip \\text{and} \\enskip k = 1.09\\,(3\\,\\mathrm{s.f.})}\n  \\end{align*}\n  $$\n\n',
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
    title: 'Question 71',
    content:
      'The average petrol price, $P$, in cents per litre, in Australia $2019$\ncan be modelled by the function\n\n$$\n\\hspace{1em} P(t) = a\\sin\\hspace{0.15em}(\\ang{10}\\hspace{-0.15em}\\times t) + b, \\hspace{0.5em} 0 \\leq t \\leq 365, \\\\[3pt]\n$$\n\nwhere $t$ is the elapsed time, in days, since New Year\'s Eve $2018$.\nPart of the graph of $y = P(t)$ is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/f4e9707a-58e9-43d3-a5cf-acd20baf6f9d/images/72a07772-6b2a-48cc-aea3-9d4440fb053e/3686d49d230056274ce98d6aa0d4dd1872a85c82.svg)\n\n\n\n- Write down the value of $b$. <span class="marks">[1]</span>\n\n\nThe average price of petrol on the $21$st of January, $2019$ was $139$\ncents per litre.\n\n- Show the value of $a$ is equal to 12. <span class="marks">[2]</span>\n\n- Hence calculate:\n  \n  - the average petrol price on the $10$th of February, $2019$;\n  - the minimum and maximum average prices of petrol in Australia\n$2019$.<span class="marks">[3]</span>\n\n\n\nThe cycle of average petrol prices repeats every T days.\n\n- Determine the value of T.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- $\\answer{145}$\n- Solving the equation $P(21) = 139$ for $a$, we get\n\n  $$\n  \\begin{aligned}\n  a\\sin\\hspace{0.15em}(\\ang{10}\\hspace{-0.15em}\\times 21) + 145 &= 139 \\hspace{7.4em} \\\\[6pt]\n  a\\sin 2\\ang{10} + 145 &= 139 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.2em} \\answer{a = 12} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- \n  - Evaluating $P(t)$ for $t = 31+10 = 41$, we obtain\n\n    $$\n    \\begin{aligned}\n    P(41) &= 12\\sin\\hspace{0.15em}(\\ang{10}\\hspace{-0.15em}\\times 41) + 145 \\hspace{1.8em} \\\\[6pt]\n    &\\answer{\\approx 154 \\text{ cents per litre}}\\end{aligned}\n    $$\n\n  - The min and max values of the sine function are $-1$ and $+1$.\nHence the min and max average prices are\n\n    $$\n    \\begin{aligned}\n    P_{\\text{min}} &= 12(-1)+145 \\\\[6pt]\n    &\\answer{\\approx 133 \\text{ cents per litre}} \\hspace{3em} \\\\[15pt]\n    P_{\\text{max}} &= 12(+1)+145 \\\\[6pt]\n    &\\answer{\\approx 157 \\text{ cents per litre}}\\end{aligned}\n    $$\n\n\n- Using G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f4e9707a-58e9-43d3-a5cf-acd20baf6f9d/images/70f1d702-31c5-4aa3-bc1c-81a56736356c/30c06c40c5cf2c5d8e88197edf49a8900fddc76e.svg)\n\n\n  Hence we find\n$\\answer{\\text{T} = 36}$\n',
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
    title: 'Question 72',
    content:
      'A healthcare company is designing a new deodorant stick that can be modelled by the shape of a parabola as the top, vertical lines as the sides and a horizontal line as the base, on the $x$-axis. The parabola has end points at $(0,7)$ and $(5,7)$, and vertex at $(2.5,8)$.\nThis design is shown in the diagram below. All distances are measured in centimetres.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/0c28bf3a-d07a-4efc-8f72-f3bbd5583b2f/images/b0822073-b2c4-4e24-96eb-f3c9ee8d0169/AI1006a.PNG)\n\n\nThe quadratic curve can be expressed in the form $y=ax^2+bx+c$ for\n$0\\leq x \\leq 5$.\n\n- \n  - Find the value of $c$.\n  - Using the points $(2.5,8)$ and $(5,7)$, write two equations in $a$ and $b$.\n  - Hence, find the equation of the quadratic curve. <span class="marks">[5]</span>\n\n\n- Find the area of the shaded region in the deodorant\ndesign.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - The value of $c$ is the value of the $y$ intercept. Hence,\n\n    $$\n    \\begin{aligned}\n    &\\hspace{-0.44em}\\answer{c=7}\\end{aligned}\n    $$\n\n  - As the curve passes through points $(2.5,8)$ and $(5,7)$, we get\n\n    $$\n    \\begin{aligned}\n    a(2.5)^2 + b(2.5) + 7 &= 8 \\\\[12pt]\n    &\\hspace{-1.84cm}\\answer{6.25a + 2.5b = 1}  \\hspace{3em}{(1)}\\\\\n    \\end{aligned}\n    $$\n\n    and\n\n    $$\n    \\begin{aligned}\n    a(5)^2 + b(5) + 7 &= 7\\\\[12pt]\n    &\\hspace{-1.3cm}\\answer{25a+5b = 0} \\hspace{4.55em}{(2)}\n    \\end{aligned}\n    $$\n\n  - Solving the linear system (1) and (2), using G.D.C., we get\n\n    $$\n    \\begin{aligned}\n    a &= -0.16 \\\\[12pt]\n    b &= 0.8\\end{aligned}\n    $$\n\n    Therefore, the quadratic function is\n$\\answer{y=-0.16 x^2 + 0.8x +7}$\n\n- Using the formula for the area enclosed by a function and the\n$x$-axis, we get\n\n  $$\n  \\begin{aligned}\n  \\text{Area} &= \\int_0^5 \\big(-0.16 x^2 + 0.8x +7\\big)\\, \\mathrm{d}x \\\\[12pt]\n  &\\hspace{-2.4em}\\answer{\\text{Area} \\approx 38.3\\, \\text{cm}^2}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 73',
    content:
      'When a coin is thrown from the top of a skyscraper, its height above the\nground after $t$ seconds is given by $s(t) = at^2 + bt + c$, where\n$a,b,c \\in \\mathbb{R}$ and $s(t)$ is measured in metres. After $1$\nsecond, the coin is $179.3$ m above the ground;\nafter $2$ seconds, $188.2$ m; after $6$ seconds,\n$159.8$ m.\n\n- \n  - Write down a system of three linear equations in terms of $a$,\n$b$ and $c$.\n  - Hence find the values of $a$, $b$ and $c$. <span class="marks">[3]</span>\n\n\n- Find the height of the skyscraper. <span class="marks">[1]</span>\n\n- Find the time it takes for the coin to hit the ground. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - We have\n\n    $$\n    \\begin{aligned}\n    \n    \\answer{\\begin{array}{rcccccl}\n    a &+& b &+& c &=& 179.3 \\\\[3pt]\n    4a &+& 2b &+& c &=& 188.2 \\\\[3pt]\n    36a &+& 6b &+& c &=& 159.8\n    \\end{array}} \\qref{(1)}\\end{aligned}\n    $$\n\n  - If we express the system of linear equations $(1)$ as a matrix\nequation, we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/45dabcef-b9ef-4f62-87fe-f37674153ffe/images/3205da83-27aa-4a59-acd7-c2722a0e3a9c/13c88ece23638748c2e63548748180dced5a9e26.svg)\n\n\n    Hence, if we solve the matrix equation $(2)$, we get\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/45dabcef-b9ef-4f62-87fe-f37674153ffe/images/918f55b1-39bd-4ecb-8146-97ebf200d357/8c737a936777a47edd03c6c7de7ba744071b76ba.svg)\n\n\n    Hence we find\n$\\answer{a = -3.2, \\hspace{0.25em} b = 18.5, \\hspace{0.25em} c = 164}$\n\n- Evaluating $s(t)$ at $t = 0$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.9em} s(0) &= -3.2(0)^2 + 18.5(0) + 164 \\\\[6pt]\n  &\\answer{= 164 \\text{ m}}\\end{aligned}\n  $$\n\n- Solving the equation $s(t) = 0$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  -3.2t^2 + 18.5t + 164 &= 0 \\hspace{10.6em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{13.5em} \\answer{t \\approx 10.6 \\text{ seconds}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 74',
    content:
      'A population of $40$ rabbits are brought to an island at the end of\nDecember, $2018$.\nThe population, $P$, of rabbits on the island can be modelled by the\nlogistic function\n\n$$\n\\begin{aligned}\nP(t) &= \\dfrac{M}{1 + Ce^{-0.3t}}\\hspace{0.05em},\\end{aligned}\n$$\n\nwhere\n$t$ is the number of months that have passed since New Year Eve $2019$.\nAfter $12$ months, the population of rabbits on the island is increased\nto $1423$.\n\n- Find the value of $M$ and the value of $C$. <span class="marks">[4]</span>\n\n- Write down the largest population of rabbits that the island will\never be able to accommodate.<span class="marks">[1]</span>\n\n- Hence calculate the number of months it takes for the population of\nrabbits to reach half of its largest\npopulation.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- If we solve the equation $P(0) = 40$ for $M$ (in terms of $C$), we\nhave\n\n  $$\n  \\begin{aligned}\n  \\dfrac{M}{1 + Ce^{-0.3(0)}} &= 40 \\\\[6pt]\n  \\dfrac{M}{1 + C} &= 40 \\\\[12pt]\n  M &= 40(1+C) \\hspace{2.5em} \\qref{(1)}\\end{aligned}\n  $$\n\n  Hence, solving the equation $P(12) = 1423$ for $C$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.6em} \\dfrac{M}{1 + Ce^{-0.3(12)}} &= 1423 \\\\[4pt]\n  \\dfrac{40(1+C)}{1 + Ce^{-0.3(12)}} &= 1423 \\hspace{3em} [\\text{by $(1)$}] \\\\[10pt]\n  C &\\approx 1236.65 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{C \\approx 1240} \\hspace{0.8em}\n  $$\n\n  Hence, substituting $C \\approx 1236.65$ in the equation $(1)$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.7em} M &= 40(1+1236.65) \\\\[6pt]\n  &= 49\\hspace{0.15em}506 \\\\[6pt]\n  &\\answer{\\approx 49\\hspace{0.15em}500}\\end{aligned}\n  $$\n\n- $\\answer{49\\hspace{0.15em}500}$\n- Solving the equation $P(t) = 49\\hspace{0.15em}500(0.5)$ for $t$, we\nfind\n\n  $$\n  \\begin{aligned}\n  \\dfrac{49\\hspace{0.15em}500}{1 + 1240e^{-0.3t}} &= 24\\hspace{0.15em}750 \\hspace{5.8em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{13.6em}  \\answer{t = 23.7 \\text{ months}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 75',
    content:
      'Gordon is cooking steaks for his friends Gino and Fred. When Gordon removes the first steak from the grill, the rate at which the internal temperature decreases can be modelled by the function:\n\n$$\n\\begin{align*}\nT_1 (t)=ke^{-0.0811t}+20\n\\end{align*}\n$$\n\nWhere $T_1$ is the temperature of the steak in $^\\circ \\mathrm{C}$, $t$ minutes after it has been removed from the grill. $k$ is a positive constant.\nAt the time the first steak is removed from the grill, it has an internal temperature of $65^\\circ \\mathrm{C}$.\n\n- Find the value of $k$.<span class="marks">[2]</span>\n\n- State the equation of the horizontal asymptote of the graph of $y=T_1(t)$. Interpret this in context. <span class="marks">[2]</span>\n\n\nGordon wants to let the steak rest until it reaches an internal temperature of $50^\\circ \\mathrm{C}$.\n\n- Calculate the length of time the steak should rest for.<span class="marks">[2]</span>  \n\nAt the exact time Gordon removes the first steak from the grill, he adds two more steaks to the grill to cook. The rate at which the internal temperature of the steaks increases on the grill can be modelled by the function:\n\n$$\n\\begin{align*}\nT_2 (t)=180-160e^{-0.0472t}\n\\end{align*}\n$$\n\nWhere $T_2$ is the temperature of the steaks in $^\\circ \\mathrm{C}$, $t$ minutes after they have been placed on the grill.\n\n- State the equation of the horizontal asymptote of the graph of $y=T_2(t)$. Interpret this in context.\t <span class="marks">[2]</span>\n\n- Determine the time at which all three steaks have the same internal temperature. <span class="marks">[3]</span>\n\n\nGino wants his steak rare, and so Gordon removes it from the grill after $6.5$ minutes.\n\n- Calculate the internal temperature of Gino’s steak when it is taken off the grill. <span class="marks">[2]</span>  \n\nFred wants his steak well done, which means an internal temperature of $75^\\circ \\mathrm{C}$.\n\n- Calculate how much longer Fred’s steak will stay on the grill after Gino’s is removed.<span class="marks">[3]</span>  \n',
    markScheme:
      "\n- The first steak is removed from the grill at time $t=0$. We have that $T_1(0)=65$. Substituting these into our function, we have\n\n  $$\n  \\begin{align*}\n  T_1 (t) &= ke^{-0.0811t}+20 \\\\[6pt]\n  T_1 (0) &= ke^{-0.0811(0)}+20 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  65 &= ke^0+20 \\\\[6pt]\n  65 - 20 &= k \\hspace{3em}(\\text{because }e^0=1)\\\\[6pt]\n  &\\hspace{-0.9em}\\tcbhighmath{k = 45} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Using our answer from part (a), the function is now $T_1 (t)=45e^{-0.0811t}+20$.\n  As $t \\to \\infty$, $T_1(t) \\to 20$, because $45e^{-0.0811t}$ is approaching $0$.\n  Therefore the equation of the horizontal asymptote is $\\answer{y=20}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n  In context, $\\boxed{\\text{the ambient temperature is } 20^{\\circ}\\mathrm{C}.}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- Susbstituting $50$ in place of $T_1(t)$, we have\n\n  $$\n  \\begin{align*}\n  50 &= 45e^{-0.0811t}+20\n  \\end{align*}\n  $$\n\n  We must solve this for the value of $t$. Using the numerical solver on the G.D.C.,\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  We find that $t=4.9995...$\n  $\\answer{\\text{To reach an internal temperature of } 50^{\\circ}\\mathrm{C} \\text{, the steak should rest for } 5 \\text{ minutes.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- Our function is $T_2 (t)=180-160e^{-0.0472t}$.\n  As $t \\to \\infty$, $T_2(t) \\to 180$, because $160e^{-0.0472t}$ is approaching $0$.\n  Therefore the equation of the horizontal asymptote is $\\answer{y=180}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n  In context, $\\answer{\\text{the temperature of the grill is } 180^{\\circ}\\mathrm{C}.}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- All three steaks will have the same internal temperature when $T_1(t)=T_2(t)$. We have\n\n  $$\n  \\begin{align*}\n  45e^{-0.0811t}+20 &= 180-160e^{-0.0472t} \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Using the numerical solver on the G.D.C.,\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  We find that $t=4.5722...$\n  $\\answer{\\text{All three steaks have the same internal temperature after $4.57$ minutes.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- Substituting $t=6.5$ into our equation, we have\n\n  $$\n  \\begin{align*}\n  T_2(6.5) &= 180 - 160e^{-0.0472(6.5)} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 62.27...\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Gino's steak will have an internal temperature of approximately } 62.3^{\\circ}\\,\\mathrm{C}.}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- First we will find the length of time Fred's steak will cook for, then subtract $6.5$ from this.\n  Substituting $75$ in place of $T_2(t)$, we have\n\n  $$\n  \\begin{align*}\n  75 &= 180 - 160e^{-0.0472t}\n  \\end{align*}\n  $$\n\n  We must solve this for the value of $t$. Using the numerical solver on the G.D.C.,\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  We find that $t=8.924...$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(A1)}}\t\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{align*}\n  8.924... -  6.5 &= 2.424...\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Fred's steak will cook approximately 2.42 minutes longer than Gino's.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n",
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
    title: 'Question 76',
    content:
      'The graph shows the curve of a quadratic function of the form\n$f(x) = ax^2 + bx + 90$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/6886819b-3fbd-43d3-95f6-61cf97d171c1/images/abf35098-dbcc-4ba6-a3af-f17c013fd694/e02d6931ce58420fa7c9cbe422473aefce55e151.svg)\n\n\n\n- Write down the equation for the axis of symmetry of the curve.\n<span class="marks">[2]</span>\n\n- Hence, or otherwise, find the value of $a$ and the value of $b$.\n<span class="marks">[3]</span>\n\n- Find the $y$-coordinate of the vertex of the curve. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- The axis of symmetry intersects the $x$-axis midway between the\n$x$-intercepts.\n  Hence we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.15em} x &= \\dfrac{-5+9}{2} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.4em} \\answer{x = 2}\n  $$\n\n- Using the coordinates of A, we have\n\n  $$\n  \\begin{aligned}\n  f(-5) &= 0 \\\\[6pt]\n  a(-5)^2 + b(-5) + 90 &= 0 \\\\[6pt]\n  25a - 5b &= -90 \\hspace{1em} \\qref{(1)}\\end{aligned}\n  $$\n\n  Using the\ncoordinates of B, we have\n\n  $$\n  \\begin{aligned}\n  f(9) &= 0 \\\\[6pt]\n  \\hspace{0.6em} a(9)^2 + b(9) + 90 &= 0 \\\\[6pt]\n  81a + 9b &= -90 \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, solving the system\nof linear equations $(1)$-$(2)$ for $a$ and $b$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{10.4em} \\answer{a = -2}\\hspace{0.75em}\\text{ and }\\hspace{0.75em}\\answer{b = 8}\\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- The vertex of the curve lies on the axis of symmetry.\nHence, evaluating $f(x)$ for $x = 2$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.8em} f(2) &= -2(2)^2 + 8(2) + 90 \\\\[6pt]\n  &\\answer{= 98}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 77',
    content:
      'Radiocarbon dating can be used to estimate the age of an artifact made\nof wood. Archeologists take a sample of wood from the artifact and\nmeasure the ratio, $r$, of Carbon-$14$ in the sample to Carbon-$14$\nin a living wood. The age, $t$, in years, is then estimated by using the\nequation\n\n$$\n\\begin{aligned}\n\\hspace{14.5em} t &= -\\dfrac{6000}{\\ln 2}\\times\\ln r, \\hspace{8em} [\\text{Age Model}]\\end{aligned}\n$$\n\nwhere $0.01 < r < 1$.\nA team of underwater archeologists found an ancient wooden shipwreck\ndeep down in the Black Sea. A sample of wood is taken from the shipwreck\nto determine its age.\n\n- Find the age of the shipwreck if $r = 0.75$. <span class="marks">[2]</span>\n\n\nIn all wood samples, Carbon-$14$ decays over time. If $r < 0.01$, there\nis insufficient amount of Carbon-$14$ left in the sample wood for its\nage estimate calculated by the age model to be reliable.\n\n- Find the oldest sample of wood for its age estimate found\nby the age model would just cease to be reliable. Give your answer\nto the nearest $10\\hspace{0.15em}000$ years.<span class="marks">[2]</span>\n\n- Using the age model, express $r$ in terms of $t$.\n<span class="marks">[2]</span>\n\n- Hence find $r$ when $t = 7500$, giving your answer correct\nto $2$ decimal places. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Evaluating $t$ when $r = 0.75$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.9em} t &= -\\dfrac{6000}{\\ln 2}\\times\\ln 0.75 \\\\[6pt]\n  &\\answer{\\approx 2490 \\text{ years}}\\end{aligned}\n  $$\n\n- Evaluating $t$ when $r = 0.01$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.9em} t &= -\\dfrac{6000}{\\ln 2}\\times\\ln 0.01 \\\\[6pt]\n  &\\answer{\\approx 40\\hspace{0.15em}000 \\text{ years}}\\end{aligned}\n  $$\n\n- Using the age model, we have\n\n  $$\n  \\begin{aligned}\n  t &= -\\dfrac{6000}{\\ln 2}\\times\\ln r \\hspace{1.7em} \\\\[6pt]\n  -\\dfrac{\\ln 2}{6000}\\times t &= \\ln r \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.4em}\\answer{r = e^{-\\frac{\\ln 2}{6000}\\times t}}\n  $$\n\n- Hence evaluating $r$ when $t = 7500$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.65em} r &= e^{-\\frac{\\ln 2}{6000}\\times t} \\\\[6pt]\n  &= e^{-\\frac{\\ln 2}{6000}\\times 7500} \\\\[8pt]\n  &\\answer{\\approx 0.42}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 78',
    content:
      'A farmer is going to fence two equal adjacent parcels of land. These\nparcels share one side (which also requires fencing) as shown in the\nfollowing diagram. The farmer has only $80$ metres of fence.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/942728b4-5d3b-49b2-b0df-1f2bcfdbdfa5/images/942ca9e0-fea9-4897-abd7-6e372c3eaafb/580f23d360211ad7dd2c45e79d30c7d9c7d24f56.svg)\n\n\n\n- Write down the equation for the total length of the fence,\n$80\\,$m, in terms of $x$ and $y$.\n<span class="marks">[1]</span>\n\n- Write down the total area of both parcels of land in terms of $x$.\n<span class="marks">[2]</span>\n\n- Find the maximum area, in m$^2$, of one parcel of land. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{80 = 3x + 4y}$\n- The total area of both parcels of land in terms of $x$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{8em} A(x) &= x(2y) \\\\[18pt]\n  &= 2xy \\\\[11pt]\n  &= 2x\\left(\\dfrac{80 - 3x}{4}\\right) \\hspace{3em} [\\text{from part (a)}] \\\\[7pt]\n  &\\answer{= 40x - \\dfrac{3}{2}x^2}\\end{aligned}\n  $$\n\n- If we sketch the graph of $y = A(x)$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/942728b4-5d3b-49b2-b0df-1f2bcfdbdfa5/images/c56e4bf6-38aa-4ad7-9220-a283e89a5d6e/d34855549a850484b1041b3153951956e33882fa.svg)\n\n\n  Hence the maximum area of one parcel of land is\n$\\dfrac{266.67}{2} \\approx$\n$\\answer{133 \\text{ m}^2}$\n',
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
    title: 'Question 79',
    content:
      'The frequency, $f$, in hertz (Hz), and the period, $T$, in seconds, of a\nwave are related by the equation\n\n$$\n\\hspace{-2em} f = \\dfrac{1}{T}  \\\\[3pt]\n$$\n\nAn electronic signal is sent\nout with amplitude $3$ and frequency $200$\nHz. The strength of this signal at time\n$t$ seconds is given by\n\n$$\nS_1 = 3\\sin(bt)\n$$\n\n\n- Find the value of $b$, giving your answer in terms of $\\pi$.\n<span class="marks">[2]</span>\n\n\nA second signal of equal strength is sent out with a time delay of $2$\nmilliseconds. The strength of the second signal at time $t$ seconds is\ngiven by\n\n$$\nS_2 = 3\\sin(b\\hspace{0.05em}(t - c)) \\hspace{1em}\n$$\n\n\n- Write down the value of $c$. <span class="marks">[1]</span>\n\n\nThe strength of the sum of the two signals at time $t$ seconds is given\nby\n\n$$\n\\hspace{3.5em} S_3 = 3\\sin(bt) + 3\\sin(b\\hspace{0.05em}(t - c))\n$$\n\n\n- Draw the graphs of $S_1$, $S_2$ and $S_3$ versus $t$, for\n$0 \\leq t \\leq 0.01$, on the same axes.<span class="marks">[4]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  b &= \\dfrac{2\\pi}{T} \\\\[6pt]\n  &= 2\\pi f \\\\[10pt]\n  &= 2\\pi(200) \\\\[10pt]\n  &\\answer{= 400\\pi}\\end{aligned}\n  $$\n\n- $\\answer{0.002 \\text{ seconds}}$\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} S_1 &= 3\\sin(400\\pi t) \\\\[6pt]\n  S_2 &= 3\\sin(400\\pi(t-0.002)) \\\\[6pt]\n  S_3 &= 3\\sin(400\\pi t)+3\\sin(400\\pi(t-0.002))\\end{aligned}\n  $$\n\n  If we\ndraw the graphs of $S_1$, $S_2$ and $S_3$ versus $t$, for\n$0 \\leq t \\leq 0.01$, on the same axes, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/bfbddd54-1721-4ba9-8e4d-bbff7c700dc7/images/4d1bfeeb-8b4e-4e69-a027-b8d8c7486c42/0df5ba0b08b1afb94d525de7b9f106155190849e.svg)\n\n\n',
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
    title: 'Question 80',
    content:
      'A population of goldfish decreases exponentially. The size of the\npopulation, $P$, after $t$ days is modelled by the function\n\n$$\n\\begin{aligned}\nP(t) = 8000\\times2^{-t} + 100, \\hspace{0.5em} t \\geq 0. \\\\\n\\end{aligned}\n$$\n\n\n- Write down the exact size of the initial population. <span class="marks">[1]</span>\n\n- Find the size of the population after $5$ days. <span class="marks">[2]</span>\n\n- Calculate the time it will take for the size of the population to\ndecrease to $120$.<span class="marks">[2]</span>\n\n\nThe population will stabilize when it reaches a size of $n$.\n\n- Write down the value of $n$. <span class="marks">[1]</span>  \n',
    markScheme:
      '\n- Evaluating $P(t)$ for $t = 0$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.7em} P(0) &= 8000\\times2^0 + 100 \\\\[6pt]\n  &= 8000 + 100 \\\\[6pt]\n  &\\answer{= 8100}\\end{aligned}\n  $$\n\n- Evaluating $P(t)$ for $t = 5$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.3em} P(5) &= 8000\\times2^{-5} + 100 \\\\[6pt]\n  &\\answer{= 350}\\end{aligned}\n  $$\n\n- Solving the equation $P(t) = 120$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  8000\\times2^{-t} + 100 &= 120 \\hspace{6.1em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{14.2em} \\answer{t = 8.64 \\text{ days}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{11.9em} \\lim_{t\\rightarrow\\infty} P(t) &= \\lim_{t\\rightarrow\\infty} \\big[8000\\times2^{-t} + 100\\big] \\\\[6pt]\n  &= 0+100 \\hspace{2em} [\\text{since $2^{-t} \\rightarrow 0$ as $t \\rightarrow \\infty$}] \\\\[10pt]\n  &= 100 \\text{ days}\\end{aligned}\n  $$\n\n  Hence the value of $n$ is\n$\\answer{100}$\n',
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
    title: 'Question 81',
    content:
      'The half-life, $T$, in years, of a radioactive isotope can be modelled\nby the function\n\n$$\n\\begin{aligned}\nT(k) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{k}{100}\\right)}, \\hspace{0.5em} 0 < k < 100,\\end{aligned}\n$$\n\nwhere $k$ is the decay rate, in percent, per year of the isotope.\n\n- The decay rate of Hydrogen-$3$ is $5.5$ %\nper year. Find its half-life.<span class="marks">[2]</span>\n\n\nThe half-life of Uranium-$232$ (U-$232$) is $68.9$ years. A sample\ncontaining $250$ grams of U-$232$ is obtained and stored as a side\nproduct of a nuclear fuel cycle.\n\n- Find the decay rate per year of U-$232$. <span class="marks">[2]</span>\n\n- Find the amount of U-$232$ left in the sample after:\n  \n  - $68.9$ years;\n  - $100$ years. <span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- Evaluating $T(k)$ for $k = 5.5$, we get\n\n  $$\n  \\begin{aligned}\n  T(5.5) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{5.5}{100}\\right)} \\\\[6pt]\n  &\\answer{\\approx 12.3 \\text{ years}}\\end{aligned}\n  $$\n\n- Solving the equation $T(k) = 68.9$ for $k$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{r}{100}\\right)} &= 68.9 \\hspace{6.05em} \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.3em} \\answer{k = 1.00\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- \n  - $\\answer{125 \\text{ grams}}$\n  - We have a geometric sequence with the first term $u_1 = 250$ and\nthe $\\text{common}$ ratio $r = (1 - 1.00/100) = 0.99$.\n    Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with\n$n=101$, we find\n\n    $$\n    \\begin{aligned}\n    u_{101} &= u_1r^{101-1} \\\\[6pt]\n    &= 250\\hspace{0.05em}(0.99)^{101-1} \\hspace{0.2em} \\\\[7pt]\n    &\\answer{\\approx 91.5 \\text{ grams}}\\end{aligned}\n    $$\n\n\n',
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
    title: 'Question 82',
    content:
      'The decibel scale measures how loud a sound is to the human ear. The decibel rating, $\\mathrm{dB}$, of a sound can be modelled as a function of its sound intensity, $I$, as shown by the equation\n\n$$\n\\begin{align*}\n    \\mathrm{dB} = 10\\,\\mathrm{log}_{10}\\,I + 120\n\\end{align*}\n$$\n\nWhere $I$ is measured in Watts per square metre $(\\mathrm{W}/\\mathrm{m}^2)$ and $I>0$.\nThe pain threshold for the average human ear is $130\\,\\mathrm{dB}$.\n\n- Show that the pain threshold is reached at exactly $10\\,\\mathrm{W}/\\mathrm{m}^2$. <span class="marks">[1]</span>  \n\nAmelia has a diesel generator that has a sound intensity of $1 \\times 10^{-3.5}\\,\\mathrm{W}/\\mathrm{m}^2$.\n\n- Determine the decibel rating of Amelia\'s generator. <span class="marks">[2]</span>  \n\nAmelia is considering replacing her old diesel generator and has discovered a quieter petrol generator that has a decibel rating of $50\\,\\mathrm{dB}$.\n\n- Determine the sound intensity of the petrol generator. Give your answer in the form $a \\times 10^k$ where $1 \\leq a < 10$ and $k \\in \\mathbb{Z}$.<span class="marks">[2]</span>\n\n- Find how many times greater the sound intensity of the diesel generator is compared to the petrol generator.<span class="marks">[2]</span>\n\n',
    markScheme:
      "\n- Substituting $I=10$ into our equation, we have\n\n  $$\n  \\begin{align*}\n  10\\,\\mathrm{log}_{10}\\,10 + 120 = 130\n  \\end{align*}\n  $$\n\n  The pain threshold of $130\\,\\mathrm{dB}$ is reached at a sound intensity of exactly $10\\,\\mathrm{W}/\\mathrm{m}^2$.\n- Substituting $I=1 \\times 10^{-3.5}$ into our equation, we have\n\n  $$\n  \\begin{align*}\n  \\mathrm{dB} &= 10\\,\\mathrm{log}_{10}\\,\\left(1 \\times 10^{-3.5}\\right) + 120 \\\\[8pt]\n  &= 85\n  \\end{align*}\n  $$\n\n  $\\tcbhighmath{\\text{Amelia's generator has a rating of }85\\,\\mathrm{dB}.}$\n- Substituting $\\mathrm{dB}=50$ into our equation, we have\n\n  $$\n  \\begin{align*}\n  50 &= 10\\,\\mathrm{log}_{10}\\,I + 120\n  \\end{align*}\n  $$\n\n  And we know that $0<I<10^{-3.5}$. Using the numeric solver on the G.D.C. we have\n\n  $$\n  \\begin{align*}\n  \\mathrm{nSolve}\\big(50 &= 10\\,\\mathrm{log}_{10}\\,I + 120\\,,I\\,\\big)\\,|\\,0<I<10^{-3.5} \\\\[8pt]\n  I &= 0.0000001\n  \\end{align*}\n  $$\n\n  $\\tcbhighmath{\\text{The sound intensity of the petrol generator is } 1 \\times 10^{-7}\\,\\mathrm{W}/\\mathrm{m}^2.}$\n- We have\n\n  $$\n  \\begin{align*}\n  \\dfrac{1 \\times 10^{-3.5}}{1 \\times 10^{-7}} \\approx 3162\n  \\end{align*}\n  $$\n\n  The sound intensity of the diesel generator is approximately 3160 times greater than the sound intensity of the petrol generator.\n",
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
    title: 'Question 83',
    content:
      'The half-life, $T$, in days, of a radioactive isotope can be modelled by\nthe function\n\n$$\n\\begin{aligned}\nT(k) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{k}{100}\\right)}, \\hspace{0.5em} 0 < k < 100,\\end{aligned}\n$$\n\nwhere $k$ is the decay rate, in percent, per day of the isotope.\n\n- The decay rate of Gold-$196$ is $6.2$ % per\nday. Find its half-life.<span class="marks">[2]</span>\n\n\nThe half-life of Phosphorus-$32$ (P-$32$) is $14.3$ days. A sample\ncontaining $120$ grams of P-$32$ is produced and stored in a\nbiochemistry laboratory.\n\n- Find the decay rate per day of P-$32$. <span class="marks">[2]</span>\n\n- Find the amount of P-$32$ left in the sample after:\n  \n  - $14.3$ days;\n  - $50$ days. <span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- Evaluating $T(k)$ for $k = 6.2$, we get\n\n  $$\n  \\begin{aligned}\n  T(6.2) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{6.2}{100}\\right)} \\\\[6pt]\n  &\\answer{\\approx 10.8 \\text{ days}}\\end{aligned}\n  $$\n\n- Solving the equation $T(k) = 14.3$ for $k$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{r}{100}\\right)} &= 14.3 \\hspace{6.05em} \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.25em} \\answer{k = 4.73\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- \n  - $\\answer{60 \\text{ grams}}$\n  - We have a geometric sequence with the first term $u_1 = 120$ and\nthe $\\text{common}$ ratio $r = (1 - 4.73/100) = 0.9527$.\n    Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with\n$n=51$, we find\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.8em} u_{51} &= u_1r^{51-1} \\\\[6pt]\n    &= 120\\hspace{0.05em}(0.9527)^{51-1} \\\\[7pt]\n    &\\answer{\\approx 10.6 \\text{ grams}}\\end{aligned}\n    $$\n\n\n',
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
    title: 'Question 84',
    content:
      'The position, $s$, in metres, of a cyclist on a straight track can be\nmodelled by the piecewise function\n\n$$\ns(t) = \\left\\{\\begin{array}{lcl}\nat^2, && 0 \\leq t < 6.5, \\\\[6pt]\n0.102t^2+2.48t-12, && 6.5 \\leq t < 10, \\\\[6pt]\nmt-62, && t \\geq 10,\n\\end{array} \\right. \\\\[4pt]\n$$\n\nwhere $t$ is the time, in seconds, and\n$a, m \\in \\mathbb{R}$.\n\n- Show that $a = 0.1995$ correct to $4$ significant figures.\n<span class="marks">[2]</span>\n\n- Find the exact value of $m$. <span class="marks">[2]</span>\n\n- Calculate the time it takes for the cyclist to travel:\n  \n  - $15$ m;\n  - $200$ m. <span class="marks">[4]</span>\n\n\n- Draw the graph of $s$ versus $t$, showing the position of the\ncyclist during the first $20$ seconds. <span class="marks">[3]</span>\n\n- Determine the time interval when the cyclist is travelling fastest.\n<span class="marks">[1]</span>\n\n- Hence find its maximum speed, giving your answer in kilometres per\nhour.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The piecewise function $s$ must be continuous at $6.5$.\nHence we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} a(6.5)^2 &= 0.102(6.5)^2+2.48(6.5)-12 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{4.9em} \\answer{a \\approx 0.1995} \\hspace{2em} [\\text{by using G.D.C.}]\n  $$\n\n- The piecewise function $s$ must be continuous at $10$.\nHence we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.6em} m(10)-62 &= 0.102(10)^2+2.48(10)-12 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{6em} \\answer{m = 8.5} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Evaluating $s(t)$ for $t = 6.5$ and $t = 10$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.5em} s(6.5) &= 0.102(6.5)^2+2.48(6.5)-12 \\\\[6pt]\n  &\\approx 8.43 \\text{ m} \\\\[9pt]\n  s(10) &= 8.5(10)-62 \\\\[6pt]\n  &= 23 \\text{ m}\\end{aligned}\n  $$\n\n  \n  - Hence solving the equation $s(t) = 15$ for $6.5 < t < 10$, we\nget\n\n    $$\n    \\begin{aligned}\n    0.102t^2+2.48t-12 &= 15 \\hspace{15em} \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\hspace{8.4em} \\answer{t \\approx 8.15 \\text{ seconds}} \\hspace{3em} [\\text{by using G.D.C.}]\n    $$\n\n  - Hence solving the equation $s(t) = 200$ for $t > 10$, we obtain\n\n    $$\n    \\begin{aligned}\n    8.5t-62 &= 200 \\hspace{9.7em} \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\hspace{8.4em} \\answer{t \\approx 30.8 \\text{ seconds}} \\hspace{3em} [\\text{by using G.D.C.}]\n    $$\n\n\n- If we draw the graph of $s$ versus $t$, for $0 \\leq t \\leq 20$ [by\nusing G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ec58a4fe-1cff-4db1-9142-c1caafdc49f4/images/84cadd48-cb0d-4e53-b1ff-4e33fa84d6ab/616ac32f24b562cc41bdf637d012fe75a106e91e.svg)\n\n\n- The graph of $s$ versus $t$ is steepest (highest speed) on the\ninterval  $\\answer{t \\geq 10}$\n- Hence the maximum speed of the cyclist is\n\n  $$\n  \\begin{aligned}\n  \\hspace{10.2em} \\dfrac{\\mathrm{d}s}{\\mathrm{d}t} &= \\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\big[8.5t-62\\big] \\\\[6pt]\n  &= 8.5 \\text{ m sec$^{-1}$} \\\\[9pt]\n  &= 8.5\\times3.6 \\text{ km h$^{-1}$} \\hspace{2em} [1 \\text{ m sec}^{-1} = 3.6 \\text{ km h}^{-1}] \\\\[9pt]\n  &\\answer{= 30.6 \\text{ km h$^{-1}$}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 85',
    content:
      'The axis of symmetry of the graph of a quadratic function has equation\n$x = \\dfrac{3}{2}$.\n\n- Draw the axis of symmetry on the grid below. <span class="marks">[1]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f3b8f30f-dfd0-4c3d-af10-599523d5bfc7/images/8127e62b-8e3d-4e6a-800c-1ba598460cd3/095afe930760d162dfc8b9c36b42836af719a0ca.svg)\n\n\n\nThe graph of the quadratic function intersects the $x$-axis at the point\nP$(-1,0)$. There is a second point, Q , at\nwhich the graph of the quadratic function intersects the $x$-axis.\n\n- Mark and label P and Q on the grid above. <span class="marks">[1]</span>\n\n\nThe graph of the quadratic function has equation $y = -x^2+bx+c$, where\n$b,c \\in \\mathbb{Z}$.\n\n- \n  - Find the value of $b$ and the value of $c$.\n  - Find the coordinates of the vertex, M.\n  - Draw the graph of the quadratic function on the grid above.\n<span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- If we draw the axis of symmetry on the grid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f3b8f30f-dfd0-4c3d-af10-599523d5bfc7/images/675f3abb-838e-4191-9b73-48d678ab9e7c/251642e55ba01124027bed7ddba72f11d48d8750.svg)\n\n\n- The $x$-coordinate of $Q$ is\n\n  $$\n  \\begin{aligned}\n  x &= \\dfrac{3}{2} + \\left[\\dfrac{3}{2}-(-1)\\right] \\\\[6pt]\n  &= 4\\end{aligned}\n  $$\n\n  Hence, if we mark and label P and Q on the grid\nbelow, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f3b8f30f-dfd0-4c3d-af10-599523d5bfc7/images/ad959939-6aee-4367-b94d-7bb2b0d330f5/1fa563586fbd8e498bbc0f6a90199f2a3a99e7f7.svg)\n\n\n- \n  - Using the coordinates of P, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.1em} 0 &= -(-1)^2 + b(-1) + c \\\\[6pt]\n    0 &= -1 - b + c \\\\[6pt]\n    1 &= -b + c \\qref{(1)}\\end{aligned}\n    $$\n\n    Using the coordinates of\nQ, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.6em} 0 &= -(4)^2 + b(4) + c \\\\[6pt]\n    0 &= -16 + 4b + c \\\\[6pt]\n    16 &= 4b + c \\qref{(2)}\\end{aligned}\n    $$\n\n    Hence, solving the system\nof linear equations $(1)$-$(2)$ for $b$ and $c$, we find\n\n    $$\n    \\begin{aligned}\n    \\hspace{10em} \\answer{b = 3}\\hspace{0.75em}\\text{ and }\\hspace{0.75em}\\answer{c = 4}\\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n  - Evaluating $y = -x^2 + 3x + 4$ for $x = 3/2 = 1.5$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.2em} y &= -(1.5)^2 + 3(1.5) + 4 \\\\[6pt]\n    &= 6.25\\end{aligned}\n    $$\n\n    Hence the coordinates of M are\n$\\answer{(1,5,6.25)}$\n  - If we draw the graph of $y = -x^2 + 3x + 4$ on the grid below,\nwe obtain\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f3b8f30f-dfd0-4c3d-af10-599523d5bfc7/images/35a967a1-1150-4aa0-a4fd-7d63f734e780/db963f9fd832653990678f1ba763db2a3974d991.svg)\n\n\n',
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
    title: 'Question 86',
    content:
      'When a ball is thrown from the top of a tall building, its height above\nthe ground after $t$ seconds is given by\n$s(t) = at^2 + bt + c\\,,$ where\n$a,b,c \\in \\mathbb{R}$ and $s(t)$ is measured in metres. After $1$\nsecond, the ball is $84.3$ m above the ground;\nafter $2$ seconds, $93.9$ m; after $8$ seconds,\n$42.3$ m.\n\n- \n  - Write down a system of three linear equations in terms of $a$,\n$b$ and $c$.\n  - Use matrices to find the values of $a$, $b$ and $c$. <span class="marks">[3]</span>\n\n\n- Find the height of the building. <span class="marks">[1]</span>\n\n- Find the time it takes for the ball to hit the ground. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - We have\n\n    $$\n    \\begin{aligned}\n    \n    \\answer{\\begin{array}{rcccccl}\n    a &+& b &+& c &=& 84.3 \\\\[3pt]\n    4a &+& 2b &+& c &=& 93.9 \\\\[3pt]\n    64a &+& 8b &+& c &=& 42.3\n    \\end{array}} \\qref{(1)}\\end{aligned}\n    $$\n\n  - If we express the system of linear equations $(1)$ as a matrix\nequation, we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/fa6bc1e0-527f-4b17-bf69-2b0fc42d8867/images/865960d0-98ce-4b87-a675-6a46a2ee65ce/b40b58be9e04029307e50815631013b0e434f45c.svg)\n\n\n    Hence, if we solve the matrix equation $(2)$, we get\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/fa6bc1e0-527f-4b17-bf69-2b0fc42d8867/images/1b3b62dd-72c9-42d4-8867-f02c938bd983/04caede963f7db2aac1bc0812ea44cf5b6a29875.svg)\n\n\n    Hence we find\n$\\answer{a = -2.6, \\hspace{0.25em} b = 17.4, \\hspace{0.25em} c = 69.5}$\n\n- Evaluating $s(t)$ at $t = 0$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.2em} s(0) &= -2.6(0)^2 + 17.4(0) + 69.5 \\\\[6pt]\n  &\\answer{= 69.5 \\text{ m}}\\end{aligned}\n  $$\n\n- Solving the equation $s(t) = 0$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  -2.6t^2 + 17.4t + 69.5 &= 0 \\hspace{10.8em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{13.6em} \\answer{t \\approx 9.50 \\text{ seconds}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 87',
    content:
      'The tides at the Port of Bristol, UK, were observed by a student.\nOn a particular day, the range between the lowest and highest tides is\n$10.6$ m and the time\ndifference between high tides is $12.2$ hours.\nThe first highest tide occurs at $8$:$12$ am and is\n$12.5$ m high.\nThe height, $H$, in metres, of the tides can be modelled by the equation\n\n$$\n\\begin{aligned}\nH &= a\\sin\\hspace{0.1em}(b\\hspace{0.1em}(t-c)) + d, \\hspace{0.5em} 0 \\leq t \\leq 24,\\end{aligned}\n$$\n\nwhere $t$ is the elapsed time, in hours, since midnight.\n\n- Write down the value of:\n  \n  - $a$;\n  - $d$. <span class="marks">[2]</span>\n\n\n- Find the value of $b$. <span class="marks">[2]</span>\n\n- Find the smallest possible value of $c$, given $c > 0$. <span class="marks">[2]</span>\n\n- Hence draw the graph of $H$ versus $t$, for $0 \\leq t \\leq 24$.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - We have\n\n    $$\n    \\begin{aligned}\n    a &= \\dfrac{10.6}{2} \\hspace{3.4em} \\\\[6pt]\n    &\\answer{= 5.3}\\end{aligned}\n    $$\n\n  - We have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.4em} d &= \\dfrac{12.5+(12.5-10.6)}{2} \\\\[6pt]\n    &\\answer{= 7.2}\\end{aligned}\n    $$\n\n\n- The period of $H$ is $12.2$ hours.\nHence we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.8em} b &= \\dfrac{2\\pi}{12.2} \\\\[6pt]\n  &\\answer{\\approx 0.515}\\end{aligned}\n  $$\n\n- Solving the equation\n$a\\sin\\hspace{0.1em}(b\\hspace{0.1em}(8.2-c)) + d = 12.5$ for the\nsmallest $c > 0$, we obtain\n\n  $$\n  \\begin{aligned}\n  5.3\\sin\\hspace{0.1em}(0.515\\hspace{0.1em}(8.2-c)) + 7.2 = 12.5 \\hspace{10.4em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{12em} \\answer{c \\approx 5.15} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- If we draw the graph of\n$H = 5.3\\sin\\hspace{0.1em}(0.515\\hspace{0.1em}(t-5.15)) + 7.2$\nversus $t$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/02542410-de4e-45d3-bf51-c998e419f7c0/images/7614d96a-d12f-4438-820c-1e79fcc211a6/b2f8746d367fe8d39e25915d6f9b5408ac78e4cb.svg)\n\n\n',
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
    title: 'Question 88',
    content:
      'A hot apple pie was taken out of the oven and left cooling on the bench.\nThe $\\text{temperature}$ of the kitchen is\n$19$ $\\text{\\textdegree{C}}$. This situation can\nbe modelled by the exponential function $T = a + b\\big(k^{-t}\\big)$,\nwhere $T$ is the temperature of the $\\text{apple}$ pie, in\n$\\text{\\textdegree{C}}$, and $t$ is the number of minutes for which the\napple pie has been on the bench in the kitchen. A sketch of the\nsituation is given below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/1a60d715-c424-44cb-8944-85a330b2888c/images/7e03cf5a-bd9f-4377-9abc-d311967031fb/8b700a3ae9a0f49f95d8ab1106661a5c84fe1ddf.svg)\n\n\n\n- Explain why $a = 19$. <span class="marks">[2]</span>\n\n\nInitially, at $t = 0$, the temperature of the apple pie is\n$180$ $\\text{\\textdegree{C}}$.\n\n- Find the value of $b$. <span class="marks">[2]</span>\n\n\nAfter being left cooling on the bench for one minute, the temperature of\nthe apple pie is $159$ $\\text{\\textdegree{C}}$.\n\n- Show that $k = 1.15$. <span class="marks">[2]</span>\n\n- Find the temperature of the apple pie five minutes after it\nhas been left cooling on the bench. <span class="marks">[2]</span>\n\n- Find the total time needed for the apple pie to reach a\ntemperature of $30$ $\\text{\\textdegree{C}}$.\nGive your answer in minutes and seconds, correct to the nearest\nsecond. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1a60d715-c424-44cb-8944-85a330b2888c/images/b39e9049-ef3b-49ee-833b-90b8d18f7d54/1fd4fa4206d204d02ea08ff6cea05417465e9ca9.svg)\n\n\n  On the other hand, we know the temperature of the apple pie cannot\nfall below the temperature of the kitchen.\n  Hence we must have $a = 19$.\n- When $t = 0$, we have $T = 180$.\nHence we get\n\n  $$\n  \\begin{aligned}\n  19 + b\\big(k^{0}\\big) &= 180 \\hspace{3.3em} \\\\[6pt]\n  19 + b &= 180 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.5em} \\answer{b = 161} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- When $t = 1$, we have $T = 159$.\nHence we obtain\n\n  $$\n  \\begin{aligned}\n  19 + 161\\big(k^{-1}\\big) &= 159 \\hspace{5em} \\\\[6pt]\n  19 +  \\dfrac{161}{k} &= 159 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.65em} \\answer{k = 1.15} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Evaluating $T = 19 + 161\\big(1.15^{-t}\\big)$ for $t = 5$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} T &= 19 + 161\\big(1.15^{-t}\\big) \\\\[6pt]\n  &= 19 + 161\\big(1.15^{-5}\\big) \\\\[7pt]\n  &\\answer{\\approx 99.0 \\text{\\hspace{0.15em}\\textdegree{C}}}\\end{aligned}\n  $$\n\n- Solving the equation $T = 30$ for $t$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.4em} 19 + 161\\big(1.15^{-t}\\big) &= 30 \\\\[6pt]\n  t &\\approx 19.2006 \\text{ min} \\hspace{2em} [\\text{by using G.D.C.}] \\hspace{1.6em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{13.75em} \\answer{t \\approx 19 \\text{ min} + 12 \\text{ sec}} \\hspace{2.5em} [(0.2006)(60) \\approx 12.0]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '11',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 89',
    content:
      'The downward speed, $V$, in metres per second, of a skydiver $t$ seconds\nafter a jump from a plane is modelled by the piecewise function\n\n$$\n\\begin{aligned}\nV(t) &= \\left\\{ \\begin{array}{lcl}\n60 - \\dfrac{K}{t+1}, && 0 \\leq t < T, \\\\[15pt]\n12 + \\dfrac{46}{t-28}, && t \\geq T.\n\\end{array} \\right.\\end{aligned}\n$$\n\n\n- Show that $K = 60$.  <span class="marks">[2]</span>\n\n- Draw the graphs of $y = 60 - \\dfrac{60}{t+1}$, for $t \\geq 0$, and\n$y = 12 + \\dfrac{46}{t-28}$, for $t > 28$,\n  on the grid below. <span class="marks">[4]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/2df6984d-0273-4410-8b2b-ac32d48ec20c/images/55d9f90c-36a2-4705-a8c9-87a33f526aef/82e862a110791fe827f0532a883ee15963d674c3.svg)\n\n\n- Find the time $T$ at which the skydiver opened their parachute.\n<span class="marks">[2]</span>\n\n- Calculate the speed of the skydiver after:\n  \n  - $10$ seconds;\n  - $32$ seconds. <span class="marks">[4]</span>\n\n\n\nAssume that the skydiver\'s parachute failed to open.\n\n- Write down the terminal downward speed of the skydiver.\n<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Solving the equation $V(0) = 0$ for $K$, we have\n\n  $$\n  \\begin{aligned}\n  60 - \\dfrac{K}{0+1} &= 0 \\hspace{3.6em} \\\\[6pt]\n  60 - K &= 0 \\\\  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.3em} \\answer{K = 60} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- If we draw the graphs of $y = 60 - \\dfrac{60}{t+1}$, for $t \\geq 0$,\nand $y = 12 + \\dfrac{46}{t-28}$, for $t > 28$, on the grid below, we\nhave\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/2df6984d-0273-4410-8b2b-ac32d48ec20c/images/3273e4d6-3871-4a0c-a24a-35721999c286/f1e6feb2dcd8269a36b82b80c11b2c1941011f79.svg)\n\n\n- The piecewise function $V$ must be continuous at $T$.\nHence we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.1em} 60 - \\dfrac{60}{T+1} &= 12 + \\dfrac{46}{T-28} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{15.15em} \\answer{T = 29 \\text{ seconds}} \\hspace{3em} [\\text{by using G.D.C.}] \\\\[6pt]\n  $$\n\n  Note that the value of $T$ is the\n$x$-coordinate of the point A$(29,58)$ from part (b).\n- \n  - Evaluating $V(t)$ for $t = 10$, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{9em} V(10) &= 60 - \\dfrac{60}{10+1} \\hspace{2em} [\\text{since $t = 10 < T = 29$}] \\\\[6pt]\n    &\\answer{\\approx 54.5 \\text{ m sec$^{-1}$}}\\end{aligned}\n    $$\n\n  - Evaluating $V(t)$ for $t = 32$, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{9.4em} V(32) &= 12 + \\dfrac{46}{32-28} \\hspace{2em} [\\text{since $t = 32 > T = 29$}] \\\\[6pt]\n    &\\answer{= 23.5 \\text{ m sec$^{-1}$}}\\end{aligned}\n    $$\n\n\n- $\\answer{60 \\text{ m sec\\(^{-1}\\)}}$\n',
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
    title: 'Question 90',
    content:
      'An archer shoots an arrow at a circular target in front of her.\nThe trajectory of the arrow is perpendicular to the circular target which is $x$ metres away.\nThe height, in metres, of the arrows above the ground is found by the formula:\n\n$$\nh = 0.015x+1.55\n$$\n\n\n- Find the height the arrow reaches when the target is $70$ meters away. <span class="marks">[1]</span>\n\n  The centre of the target is at a height of $2.45\\hspace{0.15em}$m above the ground.\n  Hitting the inner circle of radius $12\\,$cm scores $10$ points. The next circle has a radius of $22\\,$cm and scores $8$ points. The final circle has a radius of $32\\,$cm and scores $6$ points.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5808a386-ece2-424c-90ce-4d566c437d9c/images/7482106f-495f-482d-afe1-a3d0c43f39f3/q1126.png)\n\n\n- Find the score obtained by the shot. <span class="marks">[2]</span>\n\n\nThe second shot is influenced by air resistance and the equation describing the height is now given by\n\n$$\nh_2 = -0.001x^2 + 0.0791x + 1.55\n$$\n\n\n- Find the score obtained by the second shot. <span class="marks">[2]</span>\n\n- Calculate the maximum height reached by $h_2$. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- By evaluating the formula at $x=70$, we have\n\n  $$\n  \\begin{align*}\n  h &= 0.015(70)+1.55 \\\\[9pt]\n  &\\hspace{0.275em}\\tcbhighmath{= 2.6 \\text{ m}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The height above the centre of the target is\n\n  $$\n  \\begin{align*}\n  d &= 2.6-2.45 \\\\[8pt]\n  &= 15\\text{ cm} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  The arrow is within the second circle of radius $22\\,$cm.\n  The arrow scores $\\answer{8}$.\n\n  $$\n      \\tag*{\\textbf{A1}}\n  $$\n\n\n$\\textcolor{white}{gap}$\n\n- Evaluating $h_2$ at $x=70$, we obtain\n\n  $$\n  \\begin{align*}\n  h_2 &= -0.001(70)^2 + 0.0791(70)) + 1.55 \\\\[8pt]\n  &= 2.187...\n  \\end{align*}\n  $$\n\n  Hence, the distance to the centre of the target is\n\n  $$\n  \\begin{align*}\n  d_2 &= |2.187...-2.45| \\\\[8pt]\n  &= 0.263...\\tag*{\\textbf{A1}}\\\\\n  &= 26\\hspace{0.15em}\\text{cm}\n  \\end{align*}\n  $$\n\n  The arrow is within the third circle of radius $32\\,$cm.\n  The arrow scores $\\tcbhighmath{6}$\n\n  $$\n      \\tag*{\\textbf{A1}}\n  $$\n\n\n$\\textcolor{white}{gap}$\n\n- If we sketch the graph of $y = h_2(x)$, for $x \\geq 0$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5808a386-ece2-424c-90ce-4d566c437d9c/images/1e39b79f-8205-4009-b8c4-b21d0dde44af/a1126.png)\n\n\n  Hence the maximum height is $\\answer{3.11 \\text{ m}}$\n\n  $$\n  \\tag*{\\textbf{A1}}\n  $$\n\n',
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
    title: 'Question 91',
    content:
      'A set of BMX jumping ramps have been constructed at a local cycle park, as shown in the following diagram. It is designed for riders to take off from the first ramp, represented by $f(x)$, and land on the second ramp, represented by $g(x)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/6e6fba44-ae40-4292-a287-5720870a3e3e/images/72e41c7b-2eb3-46ea-a3bd-57ec52baf40b/1197a.JPG)\n\n\n$\\hspace{2em}\\bullet$ The first ramp starts at the origin and ends at point $A$, and has equation $f(x)=\\dfrac{1}{3} x^2 \\text{ for } 0\\leq x \\leq 3$.\n$\\hspace{2em}\\bullet$ The second ramp starts at point $C$ and ends at point $E$, and has equation $g(x)=\\dfrac{1}{3} x^2-8x+48 \\text{ for } 9\\leq x \\leq 12$.\n$\\hspace{2em}\\bullet$ $p(x)$ represents the path a rider would take in the air between the ramps between point $A$ and point $C$.\n$\\hspace{2em}\\bullet$ $q(x)$ represents a safety net that hangs between point $A$ and point $C$, and has equation $q(x)=\\dfrac{1}{9} x^2-\\dfrac{4}{3} x+6 \\text{ for } 3\\leq x \\leq 9$.\n$\\hspace{2em}\\bullet$ Point $A$ has coordinates (3,3) and point $C$ has coordinates (9,3).\nIt is given that all units and measurements are in metres.\nThe path of a rider at point $A$ is the tangent to $f(x)$ at that point.\n\n- \n  - Determine the gradient of $f(x)$ at point $A$.\n  - Hence, determine the equation of the path of a rider at point $A$. Give your answer in the form $y=mx+c$.<span class="marks">[4]</span>\n\n\n\nThe line $BC$ represents a support beam and is a normal to $g(x)$ at point $C$.\n\n- \n  - Determine the gradient of $g(x)$ at point $C$.\n  - Hence, determine the equation of the line representing the support beam $BC$.<span class="marks">[6]</span>\n\n\n\n$p(x)$ is a parabola with a maximum at (6,6).\n\n- Determine the equation of $p(x)$.<span class="marks">[2]</span>  \n\nA safety regulation at the cycle park is that a BMX rider using the jumping ramps should never be more than 5 metres above the safety net while in the air.\n\n- Determine whether the model predicts that this safety regulation will be upheld.\t<span class="marks">[4]</span>  \n',
    markScheme:
      "\n- \n  - Point $A$ has coordinates $(3,3)$, therefore we are looking for $f'(3)$. We have\n\n    $$\n    \\begin{align*}\n    f(x) &= \\dfrac{1}{3}x^2 \\\\[6pt]\n    f'(x) &= \\dfrac{2}{3}x \\tag*{\\textbf{(M1)}}\\\\[6pt]\n    f'(3) &= \\dfrac{2}{3} \\times 3 \\\\[6pt]\n    &\\hspace{-2.5em}\\tcbhighmath{f'(3) = 2} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Using the formula for the equation of a straight line, we can substitute the coordinates of $A\\,(x_1=3,y_1=3)$, and $m=2$. We have\n\n    $$\n    \\begin{align*}\n    y - y_1 &= m(x - x_1) \\\\[6pt]\n    y - 3 &= 2(x - 3) \\tag*{\\textbf{(M1)}}\\\\[6pt]\n    &\\hspace{-0.9em}\\tcbhighmath{y = 2x - 3}  \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- \n  - Point $C$ has coordinates $(9,3)$, therefore we are looking for $g'(9)$. We have\n\n    $$\n    \\begin{align*}\n    g(x) &= \\dfrac{1}{3}x^2 - 8x + 48 \\\\[6pt]\n    g'(x) &= \\dfrac{2}{3}x - 8 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n    g'(9) &= \\dfrac{2}{3} \\times 9 - 8 \\\\[6pt]\n    &\\hspace{-2.3em}\\tcbhighmath{g'(9) = -2} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Given that $BC$ is a normal to $g(x)$ at $(9,3)$, the gradient will be the negative reciprocal of $-2$.\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{(R1)}}\n    \\end{aligned}\n    $$\n\n    We have\n\n    $$\n    \\begin{align*}\n    g'(9) &= -2 \\\\[6pt]\n    m_{BC} &= \\frac{1}{2} \\tag*{\\textbf{(A1)}}\n    \\end{align*}\n    $$\n\n    Using the formula for the equation of a straight line, we can substitute the coordinates of $C\\,(x_1=9,y_1=3)$, and $m=\\frac{1}{2}$. We have\n\n    $$\n    \\begin{align*}\n    y - y_1 &= m(x - x_1) \\\\[6pt]\n    y - 3 &= \\frac{1}{2}(x - 9) \\tag*{\\textbf{(M1)}}\\\\[6pt]\n    &\\hspace{-0.9em}\\tcbhighmath{y = \\frac{1}{2}x - \\frac{3}{2}}  \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- We know the coordinates of three points on the function $p(x)$: $(3,3)\\,,\\,(6,6)$ and $(9,3)$. We have been told it is a parabola, so we know $p(x)$ is a quadratic function. We can therefore perform a quadratic regression.\n  Using the G.D.C. to perform the quadratic regression,\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  We obtain $\\answer{y = -\\tfrac{1}{3}x^2 + 4x - 6}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- To answer this question, we can sketch the graphs of $p(x)$ and $q(x)$ on the G.D.C. as shown below:\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6e6fba44-ae40-4292-a287-5720870a3e3e/images/774cd0b9-9b5b-4916-a641-f8a78d50db48/1197b.JPG)\n\n\n  We have been given that $p(x)$ has a maximum at $(6,6)$ and therefore the maximum height of a BMX rider above the ground is $6$ metres.\n  Using the G.D.C. we can find that $q(x)$ has a minimum at $(6,2)$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(A1)}}\n  \\end{aligned}\n  $$\n\n  The maximum vertical distance between a BMX rider in the air and the safety net is therefore $4$ metres.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(A1)}}\n  \\end{aligned}\n  $$\n\n  $\\answer{\\text{Yes, the model predicts that the safety regulation will be upheld.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n",
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
    title: 'Question 92',
    content:
      'A loaf pan is made in the shape of a cylinder. The pan has a diameter of\n$24$ cm and a height of\n$5$ cm.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/9aaafe79-56c4-4a37-b409-43676a3d5eed/images/855b65c5-7644-44f9-a953-a91912965eb3/a347288bee589088e6dce052611dad40b73c72e7.svg)\n\n\n\n- Calculate the volume of this pan. <span class="marks">[3]</span>\n\n\nGloria prepares enough bread dough to exactly fill the pan. The dough\nwas in the shape of a sphere.\n\n- Find the radius of the sphere in cm, correct to one decimal\nplace. <span class="marks">[4]</span>\n\n\nThe bread was cooked in a hot oven. Once taken out of the oven, the\nbread was left in the kitchen.\nThe temperature, $T$, of the bread, in degrees\nCelsius, $\\text{\\textdegree{C}}$, can be\nmodelled by the function\n\n$$\nT(t) = a\\times(1.51)^{-\\frac{t}{3}} + 21, \\hspace{0.5em} t \\geq 0,\n$$\n\nwhere $a$ is a constant and $t$ is the time, in minutes, since the bread\nwas taken out of the oven.\nWhen the bread was taken out of the oven its temperature was\n$205$ $\\text{\\textdegree{C}}$.\n\n- Find the value of $a$. <span class="marks">[2]</span>\n\n- Find the temperature that the bread will be $10$ minutes\nafter it is taken out of the oven. <span class="marks">[2]</span>\n\n\nThe bread can be eaten once its temperature drops to\n$35$ $\\text{\\textdegree{C}}$.\n\n- Calculate, to the nearest minute, the time since the bread\nwas taken out\nof the oven until it can be eaten. <span class="marks">[3]</span>\n\n- In the context of this model, state what the value of $21$\nrepresents. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Using the volume of a cylinder formula with $r = 12$ and $h = 5$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.05em} V_{\\text{pan}} &= \\pi r^2h \\\\[6pt]\n  &= \\pi(12)^2(5) \\\\[6pt]\n  &= 720\\pi \\qref{(1)}  \\\\[6pt]\n  &=2261.9...\\\\[6pt]\n  &\\answer{\\approx 2260 \\text{ cm}^3}\\end{aligned}\n  $$\n\n- Using the volume of a sphere formula, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.4em} V_{\\text{dough}} &= V_{\\text{pan}} \\\\[6pt]\n  \\dfrac{4}{3}\\pi r^3 &= 720\\pi \\hspace{3em} [\\text{from  $(1)$}] \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, solving the equation $(2)$ for $r$, we obtain\n\n  $$\n  \\hspace{12.9em} \\answer{r \\approx 8.1 \\text{ cm}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Solving the equation $T(0) = 205$ for $a$, we find\n\n  $$\n  \\begin{aligned}\n  a\\times(1.51)^0 + 21 &= 205 \\hspace{5.65em} \\\\[6pt]\n  a + 21 &= 205 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.8em} \\answer{a = 184}\n  $$\n\n- Evaluating $T(t)$ for $t=10$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} T(10) &= 184\\times(1.51)^{-\\frac{10}{3}} + 21 \\\\[9pt]\n  &\\answer{\\approx 67.6 \\text{\\hspace{0.15em}\\textdegree{C}}}\\end{aligned}\n  $$\n\n- Solving the equation $T(t) = 35$ for $t$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.6em} 184\\times(1.51)^{-\\frac{t}{3}} + 21 &= 35 \\\\[6pt]\n  t &\\approx 18.8 \\hspace{3.5em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{1.8em} \\answer{t \\approx 19 \\text{ minutes}}\n  $$\n\n- $\\answer{\\text{\\(21\\) is the room  temperature of the kitchen}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 93',
    content:
      'A factory produces bars in the shape of a cuboid, with a fixed height of\n$30$ cm and varying base. The area, $A$, of each\nbar base is described by the function\n\n$$\n\\begin{aligned}\nA(x) &= x(40 - x), \\hspace{0.5em} 5 \\leq x \\leq 35,\\end{aligned}\n$$\n\nwhere\n$x$ is the length of the bar base in centimetres.\n\n- Bar P has a length of $10$ cm. Find the\nvolume of P. <span class="marks">[2]</span>\n\n- Bar Q has the same volume as bar P, however has a different length.\nFind the length of Q. <span class="marks">[2]</span>\n\n- Find the value of $x$ that makes the bar\'s volume a maximum, and\nstate this maximum volume. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The volume of a bar with base length $x$ cm\nis given by the function\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.95em} V(x) &= A(x)\\times h \\\\[7pt]\n  &= x(40-x)(30) \\\\[6pt]\n  &= 1200x - 30x^2 \\end{aligned}\n  $$\n\n  Hence, evaluating $V(x)$ for\n$x = 10$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.85em} V(10) &= 1200(10) - 30(10)^2 \\\\[6pt]\n  &\\answer{= 9000 \\text{ cm}^3}\\end{aligned}\n  $$\n\n- Solving the equation $V(x) = 9000$ for $x \\neq 10$, we obtain\n\n  $$\n  \\begin{aligned}\n  1200x - 30x^2 &= 9000 \\hspace{6.7em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{9.85em} \\answer{x = 30 \\text{ cm}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- If we sketch the graph of $y = V(x)$, for $5 \\leq x \\leq 35$ [by\nusing G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a4b969d0-4df7-4184-8874-c1e566eb036b/images/590e9d59-33f3-47b2-8b53-31174f419f04/862b3de66152091d457aa4678f6ddd98efb4d6c4.svg)\n\n\n  Hence the maximum volume is\n$\\answer{12\\hspace{0.15em}000 \\text{ cm}^3}$\nand it occurs when\n$\\answer{x = 20 \\text{ cm}}$\n',
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
    title: 'Question 94',
    content:
      'In a water filtration plant, the containers of water are filled and then\nfiltered, all by an automated system. The volume of water in a\ncontainer, $W(t)$, in litres, after $t$ seconds of the filling\ncommencing can be modelled by the function\n\n$$\nW(t) = V(1-e^{\\frac{-t}{k}}),\n$$\n\nwhere $V$ is the maximum volume of the\nwater container and $k$ is a positive constant used to alter the rate at\nwhich water is filling the containers.\nThe value of $k$ is currently set at 25.\n\n- Find how long it takes, $t$, for a container to fill up to $50\\%$ of\nits maximum volume. <span class="marks">[2]</span>\n\n- If one of the containers has a maximum volume of 20 litres, find the\nvolume of water in this container after $22$ seconds. <span class="marks">[2]</span>\n\n\nThe engineers of the plant want to alter the value of $k$ so that it\ntakes $20$ seconds to fill each container up to $95\\%$ of their maximum\nvolumes.\n\n- Find the value of $k$ required. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Since the container is $50\\%$ of its maximum volume,\n$W=\\dfrac{V}{2}$. Hence\n\n  $$\n  \\begin{aligned}\n  \\dfrac{V}{2}&=V(1-e^{\\frac{-t}{25}})\\\\[6pt]\n  \\dfrac{1}{2}&=1-e^{\\frac{-t}{25}}\\\\[8pt]\n  &\\hspace{-0.5em}\\answer{t\\approx17.3 \\text{ seconds}} \\qquad \\qquad \\qquad [\\text{using GDC}]\\end{aligned}\n  $$\n\n- Substituting $V=20$ and $t=22$ into $W(t)$ function, we get\n\n  $$\n  \\begin{aligned}\n  W(t) &= V(1-e^{\\frac{-t}{25}})\\\\[6pt]\n  W(22)  &=20(1-e^{\\frac{-22}{25}})\\\\[6pt]\n  &\\hspace{0.5em}\\answer{\\approx11.7 \\text{ litres}} \\qquad \\qquad \\qquad [\\text{using GDC}]\\end{aligned}\n  $$\n\n- Since the containers are filled to $95\\%$ of their maximum volume,\n$W=0.95V$. Hence,\n\n  $$\n  \\begin{aligned}\n  0.95V&=V(1-e^{\\frac{-20}{k}})\\\\[6pt]\n  0.95&=1-e^{\\frac{-20}{k}}\\\\[6pt]\n  e^{\\frac{-20}{k}}&=0.05\\\\[6pt]\n  &\\hspace{-0.5em}\\answer{k\\approx 6.68} \\qquad \\qquad \\qquad [\\text{using GDC}]\\end{aligned}\n  $$\n\n',
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
    title: 'Question 95',
    content:
      'The Burj Khalifa, located in Dubai, is the tallest building in the\nworld. It has a height of $830 \\text{ m}$ and has a square base that\ncovers a floor area of $556 \\text{ m} \\times 556 \\text{ m}$. A tourism\nshop located near the building sells souvenirs of the tower, which sit\ninside glass pyramids, as illustrated by the diagram below. The souvenir\ntower is an accurate scale replica of the actual tower.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/dd6dcb9f-6f6a-4d52-86ef-4383fc6f3f51/images/490aa73b-d0b9-484e-9cf9-6362beb9193f/75dbfe1df45464ae26235a84b47e84fedd3f43ea.svg)\n\n\nThe scaled model of Burj Khalifa has a base area of\n$20 \\text{ cm} \\times 20 \\text{ cm}$. The height and base area\ndimensions of the glass pyramid are 10% larger than the model.\n\n- \n  - Find the height of the souvenir tower, in cm, correct to the\nnearest mm.\n  - Find the volume of the glass pyramid, rounding your answer\ncorrect to the nearest cubic centimetre. <span class="marks">[5]</span>\n\n\n\nThe shop owner aims to maximise profits from selling the souvenirs. The\nmore the owner orders from the manufacturer, the cheaper the souvenirs\nare to buy. However, if too many are ordered, profits may decrease due\nto surplus stock unsold.\nThe number of souvenirs ordered from previous years and the resulting\nprofits are shown in the following table.\nQuantityProfit($)$5000$$35\\,000$$10\\,000$$95\\,500$$13\\,000$$116\\,500$\nThe shop owner decides to fit a cubic model of the form\n\n$$\nP(x) = ax^3+bx^2+cx+d\n$$\n\nto model the profit, $P$, for $x$ thousand\nsouvenirs ordered.\n\n- Explain why $d=0$.<span class="marks">[1]</span>\n\n- Construct three linear equations to solve for $a$, $b$ and $c$, and\nhence write down the completed function $P(x)$. <span class="marks">[5]</span>\n\n- Find $P\'(x)$.<span class="marks">[2]</span>\n\n- Find, to the nearest hundred souvenirs, the optimal number of\nsouvenirs the owner should buy to maximise profit, and the resulting\nprofit from this number. <span class="marks">[4]</span>\n\n',
    markScheme:
      "\n- \n  - The height $(h_m)$ of the model can be calculated by\n\n    $$\n    \\begin{aligned}\n    h_m&= \\text{height of Burj Khalifa} \\times \\text{scale factor}\\\\[6pt]\n    &= 83000 \\times \\dfrac{20}{55600}\\hspace{4.1em} [\\text{all values in cm}] \\\\[6pt]\n    &\\hspace{0.3em}\\answer{\\approx 29.9 \\text{ cm} }\\end{aligned}\n    $$\n\n  - Let $x$ be the side length of the base and $h$ be the height of\nthe glass pyramid. Since the dimensions of glass pyramid are\n$10\\%$ larger than the model, we get\n\n    $$\n    \\begin{aligned}\n    x&= 20+20(0.1)\\hspace{2cm} \\\\[6pt]\n    &= 22 \\text{ cm}\\\\[6pt]\n    h&= 29.9+29.9(0.1)\\\\[6pt]\n    &\\approx 32.9 \\text{ cm}\\end{aligned}\n    $$\n\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/dd6dcb9f-6f6a-4d52-86ef-4383fc6f3f51/images/19611668-b3b5-4172-ace2-b6f0010e0b75/c16aa6b415e3ff65a129bf040b3ec43c108d55ec.svg)\n\n\n  The volume $(V)$ of the glass pyramid can therefore be calculated by\n\n  $$\n  \\begin{aligned}\n  V&= \\dfrac{1}{3}\\times x^2 \\times h \\\\[6pt]\n  &=\\dfrac{1}{3}\\times (22)^2 \\times(32.9)\\\\[6pt]\n  &\\hspace{0.3em}\\answer{\\approx 5308 \\text{ cm}^3 }\\end{aligned}\n  $$\n\n- If zero souvenirs are ordered (i.e. $x=0$), there won't be any\nsouvenirs to sell. Hence, the profit, $P$, will also be zero.\n\n  $$\n  \\answer{P(0)=0, \\,\\text{ hence } \\, d=0 }\n  $$\n\n- Since $x$ is in thousands, we have\n\n  $$\n  \\begin{aligned}\n  P(5)&=5^3a+5^2b+5c=35\\, 000\\qref{(1)}\\\\[6pt]\n  P(10) &= 10^3a+10^2b+10c = 95\\, 500\\qref{(2)}\\\\[6pt]\n  P(13) &= 13^3a+13^2b+13c = 116\\, 500 \\qref{(3)}\\end{aligned}\n  $$\n\n  Using\nG.D.C. to solve the equations $(1)$, $(2)$ and $(3)$, we get\n\n  $$\n  a=-\\dfrac{2295}{26},\\, b=\\dfrac{47685}{26}, \\text{ and } c=\\dfrac{475}{13}\n  $$\n\n  Hence\n\n  $$\n  \\hspace{0.3em}\\answer{P(x) =-\\dfrac{2295}{26}x^3+\\dfrac{47685}{26}x^2+\\dfrac{475}{13}x}\n  $$\n\n- Differentiating $P(x)$ with respect to $x$, we get\n\n  $$\n  \\hspace{0.3em}\\answer{P'(x) =-\\dfrac{6885}{26}x^2+\\dfrac{47685}{13}x+\\dfrac{475}{13}}\n  $$\n\n- If we sketch the graph of $P(x)$, the maximum profit occurs at point\nA.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/dd6dcb9f-6f6a-4d52-86ef-4383fc6f3f51/images/01769894-ccf2-4567-9e25-00dfe1fa2901/5541c9fa3d0d1b43403859281edadfc0d340eef4.svg)\n\n\n  Using G.D.C. to find the coordinates of A, we get\n\n  $$\n  x=13.9, \\text{ and } P(x)\\approx 118\\,000\n  $$\n\n  Hence,\n  The maximum profit will occur when the owner buys\n$\\hspace{0.4em}\\answer{13\\,900}\\hspace{0.4em}$ souvenirs.\nThe resulting profit will be approximately\n$\\hspace{0.35em}\\answer{118\\,000.}$\n",
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
    title: 'Question 96',
    content:
      'The temperature, $T$, in degrees Celsius, in Istanbul during a\nparticular winter day is modelled by the equation\n\n$$\n\\begin{aligned}\nT &= a\\sin\\hspace{0.1em}(b\\hspace{0.1em}(t-c))+d, \\hspace{0.5em} 0 \\leq t \\leq 24, \\end{aligned}\n$$\n\nwhere $a,b,c,d \\in \\mathbb{R}$ and $t$ is the elapsed time, in hours,\nsince midnight.\nThe graph of $T$ versus $t$ is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/fb0e5137-6e45-4694-89d8-210a316e08af/images/0d3b5230-b966-4d6e-bcd2-b7caf84d141a/6960bc2052fe8ed1bdd6d4f86c2a3bd840872a33.svg)\n\n\nThe lowest temperature was recorded at $3$:$30$ am and the highest\n$\\text{temperature}$ was recorded at $3$:$30$ pm.\n\n- Write down the value of:\n  \n  - $a$;\n  - $d$. <span class="marks">[2]</span>\n\n\n- Find the value of $b$. <span class="marks">[2]</span>\n\n- Find the smallest possible value of $c$, given $c > 0$. <span class="marks">[2]</span>\n\n\nThe temperature, $T$, in degrees Celsius, in Istanbul during a\nparticular summer day is modelled by the equation\n\n$$\n\\begin{aligned}\nT &= 5\\sin\\hspace{0.1em}(0.262\\hspace{0.1em}(t-8))+25, \\hspace{0.5em} 0 \\leq t \\leq 24, \\end{aligned}\n$$\n\nwhere $t$ is the elapsed time, in hours, since midnight.\n\n- Find the time, in hours and minutes, when the temperature:\n  \n  - reaches its maximum;\n  - first drops below $24$ $\\text{\\textdegree{C}}$. <span class="marks">[5]</span>\n\n\n- The temperature is below $24$ $\\text{\\textdegree{C}}$ for\n$h$ hours and $m$ minutes. Find\nthe value of $h$ and the value of $m$.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - We have\n\n    $$\n    \\begin{aligned}\n    a &= \\dfrac{T_{\\text{max}} - T_{\\text{min}}}{2} \\\\[6pt]\n    &= \\dfrac{10 - 2}{2} \\\\[10pt]\n    &\\answer{= 4}\\end{aligned}\n    $$\n\n  - We have\n\n    $$\n    \\begin{aligned}\n    d &= \\dfrac{T_{\\text{max}} + T_{\\text{min}}}{2} \\\\[6pt]\n    &= \\dfrac{10 + 2}{2} \\\\[10pt]\n    &\\answer{= 6}\\end{aligned}\n    $$\n\n\n- The period of $T$ is $24$ hours.\nHence we get\n\n  $$\n  \\begin{aligned}\n  b &= \\dfrac{2\\pi}{24} \\\\[10pt]\n  &\\answer{\\approx 0.262}\\end{aligned}\n  $$\n\n- The max temperature occurs at $3$:$30$ pm ($t = 15.5$) and the mean\ntemperature occurs $6$ hours earlier.\n  Hence we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.75em} t_{\\text{max}} &= t_{\\text{mean}} + 6 \\\\[6pt]\n  15.5 &= c + 6 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{c = 9.5} \\hspace{0.5em}\n  $$\n\n- If we draw the graph of $T$ versus $t$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/fb0e5137-6e45-4694-89d8-210a316e08af/images/2c85c575-3b76-42dc-84dd-5dda2f5b1cfd/22498aef2f9240c0f54bbcd77edc60575ac3345f.svg)\n\n\n  \n  - If we write $0.995$ hour in whole minutes, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{1em} 0.995(60) &= 59.7 \\\\[6pt]\n    &\\approx 60 \\text{ minutes}\\end{aligned}\n    $$\n\n    Hence the temperature\nreaches maximum at\n$\\answer{\\text{\\(2\\):\\(00\\) pm}}$\n  - If we write $0.759$ hour in whole minutes, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{1em} 0.759(60) &= 45.54 \\\\[6pt]\n    &\\approx 46 \\text{ minutes}\\end{aligned}\n    $$\n\n    Hence the temperature\nfirst drops below $24$ $\\text{\\textdegree{C}}$ at\n$\\answer{\\text{\\(8\\):\\(46\\) pm}}$\n\n- Using the $x$-coordinates of B and C, we obtain\n\n  $$\n  \\begin{aligned}\n  24 - (20.759-7.231) &= 10.472 \\text{ hours} \\hspace{1.2em}\\end{aligned}\n  $$\n\n  If we write $0.472$ hour in whole minutes, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.3em} 0.472(60) &= 28.32 \\\\[6pt]\n  &\\approx 28 \\text{ minutes}\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{h = 10}$\nand  $\\answer{m = 28}$\n',
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
    type: 'SAQ',
    title: 'Question 97',
    content:
      'A right cylinder has height $h$ mm and diameter $x$ mm. The volume of\nthis cylinder is equal to $45$ mm$^3$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/ff24aae3-1825-4594-84b1-18ff6ebb70d3/images/efc9fbc4-0075-415f-b8c9-1a1def8352df/9aebb1d3e12c9fb1c552ed279ae0c28d1ca125c3.svg)\n\n\nThe total surface area, $A$, of the cylinder can be expressed as\n$A = \\dfrac{\\pi}{2}x^2 + \\dfrac{k}{x}$.\n\n- Find the value of $k$. <span class="marks">[4]</span>\n\n- Find the value of $x$ that makes the total surface area a minimum.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the volume of a right cylinder formula, we have\n\n  $$\n  \\begin{aligned}\n  V &= \\pi r^2h \\\\[6pt]\n  45 &= \\pi\\bigg[\\dfrac{x}{2}\\bigg]^2\\hspace{-0.2em}h \\\\[3pt]\n  45 &= \\dfrac{\\pi x^2h}{4} \\\\[6pt]\n  h &= \\dfrac{180}{\\pi x^2} \\end{aligned}\n  $$\n\n  Hence the total surface area is\n\n  $$\n  \\begin{aligned}\n  \\hspace{8em} A(x) &= [\\text{top \\& bottom area}] + [\\text{curved surface area}] \\\\[16pt]\n  &=  2\\pi r^2 + 2\\pi rh \\\\[9pt]\n  &= 2\\pi\\bigg[\\dfrac{x}{2}\\bigg]^2 + 2\\pi\\bigg[\\dfrac{x}{2}\\bigg]\\bigg[\\dfrac{180}{\\pi x^2}\\bigg] \\\\[6pt]\n  &= \\dfrac{\\pi}{2}x^2 + \\dfrac{180}{x}\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{k = 180}$\n- If we sketch the graph of $y = A(x)$, for $x > 0$ [by using\nG.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ff24aae3-1825-4594-84b1-18ff6ebb70d3/images/70443638-b03e-4b02-9371-621e475b9a63/10ad2caa42e46f8e9db41f9ae6642694c0b81ac1.svg)\n\n\n  Hence\n$\\answer{x \\approx 3.86 \\text{  mm}}$\nmakes the total surface area a minimum.\n',
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
    title: 'Question 98',
    content:
      'The distance travelled, $d$, in meters, of a freely falling object is\nproportional to the square of the time of the fall, $t$, in seconds.\nA football dropped from the top of a school building falls a distance of\n$19.6\\text{ m}$ in the first $2$ seconds.\n\n- Show that $d(t)=4.9t^2$. <span class="marks">[2]</span>\n\n- Sketch the curve of $d$ for $t>0$, clearly showing the point\n$(2,19.6)$. <span class="marks">[2]</span>\n\n\nThe distance covered, $s$, in meters, by a quad-copter drone undertaking\na vertical landing can be modelled by $s(t) = 8t$, where $t$ is the time\nin seconds after the landing commences.\nThe football is dropped at the same time as the drone commences a\nlanding from the same height of the school building.\nThe football covers more distance than the drone when $t>p$.\n\n- Find the value of $p$. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Since $d$ varies proportionally with the square of $t$, we can state\n\n  $$\n  \\begin{aligned}\n  d&=kt^2 \\quad \\text{[where k is a constant]}\\end{aligned}\n  $$\n\n  We have\n$d=19.6 \\text{ m}$ when $t=2\\text{ s}$. We can use these to find\n$k$:\n\n  $$\n  \\begin{aligned}\n  19.6 &= k(2)^{2}\\hspace{3.8cm}\\\\[6pt]\n  k&=4.9\\end{aligned}\n  $$\n\n  Hence, we have shown\n\n  $$\n  \\begin{aligned}\n  \\hspace{-7em}\\answer{d=4.9t^2}\\end{aligned}\n  $$\n\n- Using GDC, we can plot the curve of $d(t)=4.9t^2$ for $t>0$, as\nshown\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/08b312a2-f2be-4c99-a017-56011a6e21b2/images/14d89890-1629-4583-8dca-99e74de71942/523fcfa1c1e8c9a28b03f2d2499ceebab285f5d8.svg)\n\n\n- The curves of $d(t)=4.9t^2$ and $s(t)=8t$ are plotted on the graph\nbelow\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/08b312a2-f2be-4c99-a017-56011a6e21b2/images/ff8238cb-8231-4138-b80c-2159b3626395/f8c3444e7186ece84caeb418dfee107029e62cc6.svg)\n\n\n  From the graph, $d(t) > s(t)$ when $t>1.63$. Hence,\n$\\answer{p=1.63}$\n',
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
    title: 'Question 99',
    content:
      'The security personnel at the entry of a rural campground activate a\nsiren to alert campers when a wild animal is spotted nearby. The sound\nintensity, $I$, of the siren varies inversely with the square of the\ndistance from the siren, $d$. When initially testing the siren, the\nsecurity personnel found that at a distance of $3$ metres from the\nsiren, the sound intensity is $5$ watts per square metre\n$(\\text{Wm}^{-2})$.\n\n- Show that $I=\\dfrac{45}{d^2}$. <span class="marks">[2]</span>\n\n- Sketch the curve of $I$ for $d>0$, labelling the point $(3,5)$.\n<span class="marks">[2]</span>\n\n\nThe campers can only hear the siren if the sound intensity at their\nlocation is greater than $1.2\\times10^{-5} \\text{Wm}^{-2}$.\n\n- Find the minimum distance, in kilometers, from the siren where the\ncampers can no longer hear the siren. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Since $I$ varies inversely with the square of $d$, we can state\n\n  $$\n  \\begin{aligned}\n  I&=\\dfrac{k}{d^2} \\quad \\text{[where k is a constant]}\\end{aligned}\n  $$\n\n  We have $I=5 \\text{ Wm}^{-2}$ when $d=3\\text{ m}$. We can use these to find $k$:\n\n  $$\n  \\begin{aligned}\n  5 &= \\dfrac{k}{3^2}\\hspace{3.8cm}\\\\[6pt]\n  k&=45\\end{aligned}\n  $$\n\n  Hence, we have shown\n\n  $$\n  \\begin{aligned}\n  \\tcbhighmath{I=\\dfrac{45}{d^2}}\\end{aligned}\n  $$\n\n- Using GDC, we can plot the curve of $I=\\dfrac{45}{d^2}$ for $d>0$, as shown\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/151224cf-2f80-4345-b68e-a612caa31abb/images/612a624d-0502-474e-802f-6124a743e115/AI875.PNG)\n\n\n- Campers can only hear the siren when $I>1.2\\times 10^{-5}$. Therefore\n\n  $$\n  \\begin{aligned}\n  I &> 1.2\\times 10^{-5} \\\\[6pt]\n  \\dfrac{45}{d^2} &> 1.2\\times 10^{-5}\\\\[6pt]\n  \\dfrac{45}{1.2\\times 10^{-5}}&>d^2\\\\[6pt]\n  d &< \\sqrt{\\dfrac{45}{1.2\\times 10^{-5}}}\\\\[6pt]\n  d &< 1936.49\\end{aligned}\n  $$\n\n  Hence, the minimum distance from the siren is $\\answer{1.94 \\text{ km}}$\n',
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
    title: 'Question 100',
    content:
      'The mean depth, $D$, in metres, of a mountain lake fluctuates in a\nyearly cycle and can be modelled by the function\n\n$$\nD(t) = a\\cos\\hspace{0.15em}(k t) + b,\n$$\n\nwhere $t$ is the elapsed time,\nin months, since the beginning of an autumn season.\nThe mean depth of the lake on month $1$ is\n$33.2$ m and on month $5$ is\n$22.8$ m.\n\n- Find the value of $k$, in degrees. <span class="marks">[2]</span>\n\n- Set up a pair of equations and find the value of $a$ and the value\nof $b$. Give your answers correct to the nearest integer.\n<span class="marks">[3]</span>\n\n- Hence find the mean depth of the lake on month $8$. <span class="marks">[2]</span>\n\n- Draw the graph of $y = D(t)$ on the grid below, for one full year,\nindicating clearly the minimum and maximum points.\n<span class="marks">[4]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/892d8911-e718-441b-bcaf-1a5740d0392e/images/650b6656-5f6c-4fd2-980c-ceab4bbe6228/22e9fb4574cbc4ff36d7eb0e402d77e50876a875.svg)\n\n\n- Determine the total amount of time in one year that the mean depth is expected to be lower than 26 metres. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The period of $D$ is $12$ months.\nHence we get\n\n  $$\n  \\begin{aligned}\n  k &= \\dfrac{\\ang{360}}{12} \\\\[6pt]\n  &\\answer{= \\ang{30}}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  D(1) &= 33.2 \\hspace{3em} \\\\[6pt]\n  a\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times 1) + b &= 33.2 \\\\[6pt]\n  0.866a + b &= 33.2 \\qref{(1)}\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  D(5) &= 22.8 \\hspace{3em} \\\\[6pt]\n  a\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times 5) + b &= 22.8 \\\\[6pt]\n  -0.866a + b &= 22.8 \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, solving the\nsystem of linear equations $(1)$-$(2)$ for $a$ and $b$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{11.8em} \\answer{a \\approx 6} \\hspace{1em}\\text{ and }\\hspace{1em} \\answer{b \\approx 28} \\hspace{3.8em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- Evaluating $D(t)$ for $t = 8$, we find\n\n  $$\n  \\begin{aligned}\n  D(8) &= 6\\cos\\hspace{0.15em}(\\ang{30}\\hspace{-0.15em}\\times8) + 28 \\hspace{0.7em} \\\\[6pt]\n  &\\answer{= 25 \\text{ m}}\\end{aligned}\n  $$\n\n- The min and max values of the cosine function are $-1$ and $+1$.\nHence the min and max mean depths of the lake during the year are\n\n  $$\n  \\begin{aligned}\n  \\hspace{10.2em} D_{\\text{min}} &= 6(-1)+28 \\\\[6pt]\n  &= 22 \\text{ m} \\hspace{1em} [\\text{when } t = (0.5)12 = 9] \\\\[15pt]\n  D_{\\text{max}} &= 6(+1)+28 \\\\[6pt]\n  &= 34 \\text{ m} \\hspace{1em} [\\text{when } t = (0)12 = 0\\hspace{0.25em}\\&\\hspace{0.25em}t = (1)12 = 12]\\end{aligned}\n  $$\n\n  If we draw the graph of $y = D(t)$ on the grid below, for\n$0 \\leq t \\leq 12$, indicating the points A$(0,34)$, B$(12,34)$ and\nC$(6,22)$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/892d8911-e718-441b-bcaf-1a5740d0392e/images/2b12daf7-2a64-4082-be83-d94cf2bb913d/73e28209b510fb17f449ac18e686993a5d03e3ef.svg)\n\n\n- Adding the graph of $y=26$ to our solution from part (d), we can find the points of intersection:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/892d8911-e718-441b-bcaf-1a5740d0392e/images/afc9ddca-9147-42e2-83ce-681f27150723/ai177a.PNG)\n\n\n\n  $$\n  \\begin{align*}\n  8.351-3.649 &= 4.702\n  \\end{align*}\n  $$\n\n  The mean depth of the lake is lower than $26$ metres for approximately $\\answer{\\text{$4.70$ months.}}$\n',
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
    title: 'Question 101',
    content:
      'A new class of antibiotics is studied in the medical research center.\nAntibiotics are applied to a pure culture of bacteria. The number of\nbacteria, $N$, present in the culture $t$ hours after the start of the\nexperiment are recorded. The results are shown in the table below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c408642-a9dc-4bbb-957a-5d6a5fe9857e/images/7ce99e72-9c18-4516-b553-7fa9196ca477/e1fb081fc41a9cc621eeb3b2ff28f126bbc93514.svg)\n\n\n\n- Complete the third row of the table above. <span class="marks">[2]</span>\n\n- Draw a scatter diagram of $\\log N$ versus $t$, scaling the axes if\nneeded. <span class="marks">[3]</span>\n\n- State the type of model that best fits the data displayed on your\nscatter\ndiagram from part (b). <span class="marks">[1]</span>\n\n\nA researcher in the center claims that the number of bacteria, $N$, left\nin the culture $\\text{after}$ applying antibiotics can be\nmodelled by an exponential function of the form $N(t) = a\\times b^t$,\nwhere $a$ and $b$ are positive constants.\n\n- Explain why the researcher is correct. <span class="marks">[4]</span>\n\n- Find the value of $a$ and the value of $b$. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- Calculating the values of $\\log N$, we get\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c408642-a9dc-4bbb-957a-5d6a5fe9857e/images/520e95cb-de01-4462-a729-e7b911bbcb85/61b4f3ec9ac851d948d8978ac81720c3afe52589.svg)\n\n\n\n- If we draw a scatter diagram of $\\log N$ versus $t$, we\nhave\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c408642-a9dc-4bbb-957a-5d6a5fe9857e/images/fefd2280-20f5-4296-828e-ec96dc4feb80/e884512675852ac6da9bd0f7c67f1081c0ab4d85.svg)\n\n\n- $\\answer{\\text{Linear model}}$\n- Using the properties of exponents, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.2em} \\log N(t) &= mt + c \\hspace{3em} [\\text{by parts (b) and (c)}] \\\\[8pt]\n  10^{mt+c} &= N(t) \\hspace{3em} [\\text{by definition of log}] \\\\[8pt]\n  (10^{mt})(10^c) &= N(t) \\\\[8pt]\n  N(t) &= (10^c)(10^{m})^t\\end{aligned}\n  $$\n\n  Hence we obtain\n$N(t) = a\\times b^t$ for $a = 10^c$ and $b = 10^m$.\n- The equation of the regression line of $\\log N$ on $t$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{11em} \\log N(t) &= -0.13765t + 4.84028 \\hspace{2em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence, using part (d), we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.2em} a &= 10^{4.84028} \\\\[6pt]\n  &\\answer{\\approx 69\\hspace{0.15em}200}\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.9em} b &= 10^{-0.13765} \\\\[6pt]\n  &\\answer{\\approx 0.728}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 102',
    content:
      'The amount of water, $A$, in thousands of litres, available in a water\ntank located on a farm fluctuates in a yearly cycle and can be modelled\nby the function\n\n$$\nA(t) = a\\sin\\hspace{0.15em}(k t) + b,\n$$\n\nwhere $t$ is the elapsed time, in weeks, since the start of the\nyear.\nThe amount of water available in the tank on week $6$ is $24$ thousand\nlitres and on week $31$ is $9.2$ thousand\nlitres.\n\n- Find the value of $k$, in degrees, assuming there are $52$ whole\nweeks in a year.<span class="marks">[2]</span>\n\n- Set up a pair of equations to find the value of $a$ and the value of\n$b$. Give your answers correct to the nearest integer.\n<span class="marks">[3]</span>\n\n- Hence find the amount of water available in the tank in week $42$.\n<span class="marks">[2]</span>\n\n- Draw the graph of $y = A(t)$ on the grid below, for one full year,\nindicating clearly the minimum and maximum points.\n<span class="marks">[4]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9f9ea1ac-4ddd-4bad-86a6-cabf74ce33e5/images/e6db81cc-44d6-4dec-bb02-b8db7bb46b78/a35842049aa426b4bf5aefe8b287a6da9db53a2d.svg)\n\n\n- Determine the total number of weeks that the amount of water in the tank is at least $24\\,000$ litres. Give your answer to the nearest week. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The period of $A$ is $52$ weeks.\nHence we get\n\n  $$\n  \\begin{aligned}\n  k &= \\dfrac{\\ang{360}}{52} \\\\[6pt]\n  &\\answer{\\approx \\ang{6.92}}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  A(6) &= 24 \\hspace{3em} \\\\[6pt]\n  a\\sin\\hspace{0.15em}(\\ang{6.92}\\hspace{-0.15em}\\times 6) + b &= 24 \\\\[6pt]\n  0.663a + b &= 24 \\qref{(1)}\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  A(31) &= 9.2 \\hspace{3em} \\\\[6pt]\n  a\\sin\\hspace{0.15em}(\\ang{6.92}\\hspace{-0.15em}\\times 31) + b &= 9.2 \\\\[6pt]\n  -0.567a + b &= 9.2 \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, solving the\nsystem of linear equations $(1)$-$(2)$ for $a$ and $b$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{11.5em} \\answer{a \\approx 12} \\hspace{1em}\\text{ and }\\hspace{1em} \\answer{b \\approx 16} \\hspace{3.5em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- Evaluating $A(t)$ for $t = 42$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} A(42) &= 12\\sin\\hspace{0.15em}(\\ang{6.92}\\hspace{-0.15em}\\times42) + 16 \\\\[6pt]\n  &\\answer{= 4.77 \\text{ thousand litres}}\\end{aligned}\n  $$\n\n- The min and max values of the sine function are $-1$ and $+1$.\nHence the min and max amounts of water in the tank available during\nthe year are\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.3em} A_{\\text{min}} &= 12(-1)+16 \\\\[6pt]\n  &= 4 \\text{ thousand litres} \\hspace{2.5em} [\\text{when } t = (0.75)52 = 39] \\\\[15pt]\n  A_{\\text{max}} &= 12(+1)+16 \\\\[6pt]\n  &= 28 \\text{ thousand litres} \\hspace{2em} [\\text{when } t = (0.25)52 = 13]\\end{aligned}\n  $$\n\n  If we draw the graph of $y = A(t)$ on the grid below, for\n$0 \\leq t \\leq 52$, indicating the points P$(13,28)$ and Q$(39,4)$,\nwe have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9f9ea1ac-4ddd-4bad-86a6-cabf74ce33e5/images/b8498a75-a823-45e9-98f9-710beed4d209/8814e237c9bc7b3142ac40e7f50be90d39e62a05.svg)\n\n\n- Adding the graph of $y=24$ to our solution from part (d), we can find the points of intersection:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9f9ea1ac-4ddd-4bad-86a6-cabf74ce33e5/images/ebef324b-3baf-41cb-98f1-619d4c70d32a/ai176a.PNG)\n\n\n  The amount of water in the tank is at least $24\\,000$ litres for $\\answer{\\text{$14$ weeks}}$ (to the nearest week).\n',
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
    title: 'Question 103',
    content:
      'A particular species of microbes is studied in the laboratory. Microbes\nare grown under controlled conditions in pure culture. The number of\nmicrobes, $N$, present in the culture $t$ hours after the start of the\nexperiment are recorded. The results are shown in the table below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/e9b46dc9-0930-45e2-82d6-cef1f0c4947c/images/e0c72216-8582-4a43-b865-6568739b5e03/05f74794f9493b7052849a256cb95a218dff9b51.svg)\n\n\n\n- Complete the third row of the table above. <span class="marks">[2]</span>\n\n- Draw a scatter diagram of $\\log N$ versus $t$, scaling the axes if\nneeded. <span class="marks">[3]</span>\n\n- State the type of model that best fits the data displayed on your\nscatter\ndiagram from part (b). <span class="marks">[1]</span>\n\n\nA scientist in the laboratory claims that the number of microbes, $N$,\ngrown in the laboratory during the experiment can be modelled by an\nexponential function of the form $N(t) = a\\times b^t$, where $a$ and $b$\nare positive constants.\n\n- Explain why the scientist is correct. <span class="marks">[4]</span>\n\n- Find the value of $a$ and the value of $b$. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- Calculating the values of $\\log N$, we get\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/e9b46dc9-0930-45e2-82d6-cef1f0c4947c/images/04df3b88-45a9-4949-aa9e-88b0f0bf335c/6cf620ba27d00fb0d7be6bd8c31f6e9e22c0c9ce.svg)\n\n\n\n- If we draw a scatter diagram of $\\log N$ versus $t$, we\nhave\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/e9b46dc9-0930-45e2-82d6-cef1f0c4947c/images/18131649-4993-445a-99d1-5cf1380f097e/73d2d06aa23839e33065bdf471930d83ad8030b6.svg)\n\n\n- $\\answer{\\text{Linear model}}$\n- Using the properties of exponents, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.2em} \\log N(t) &= mt + c \\hspace{3em} [\\text{by parts (b) and (c)}] \\\\[8pt]\n  10^{mt+c} &= N(t) \\hspace{3em} [\\text{by definition of log}] \\\\[8pt]\n  (10^{mt})(10^c) &= N(t) \\\\[8pt]\n  N(t) &= (10^c)(10^{m})^t\\end{aligned}\n  $$\n\n  Hence we obtain\n$N(t) = a\\times b^t$ for $a = 10^c$ and $b = 10^m$.\n- The equation of the regression line of $\\log N$ on $t$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{11em} \\log N(t) &= 0.14521t + 1.69035 \\hspace{2em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence, using part (d), we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.2em} a &= 10^{1.69035} \\\\[6pt]\n  &\\answer{\\approx 49.0}\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.3em} b &= 10^{0.14521} \\\\[6pt]\n  &\\answer{\\approx 1.40}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 104',
    content:
      'Alexandros monitors the temperature during a particular day in\nAthens.\nThe table below shows some of his findings.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/000aea6e-7d28-4e46-a9b8-b0aa808a7144/images/84e35a2c-c6d5-4386-b2a4-aeae6e3c1d12/063047b1151b8885e1ce8bf5005a5b210fdafca9.svg)\n\n\nBased on his observations, Alexandros concludes that the temperature,\n$T$, in $\\text{\\textdegree{C}}$, during the day can be modelled by the\nequation\n\n$$\n\\begin{aligned}\nT &= a\\sin\\hspace{0.1em}(b\\hspace{0.1em}(t-c)) + d, \\hspace{0.5em} 0 \\leq t \\leq 24,\\end{aligned}\n$$\n\nwhere $t$ is the elapsed time, in hours, since midnight.\n\n- Write down the value of:\n  \n  - $a$;\n  - $d$. <span class="marks">[2]</span>\n\n\n- Find the value of $b$. <span class="marks">[2]</span>\n\n- Find the smallest possible value of $c$, given $c > 0$. <span class="marks">[2]</span>\n\n- Find the time, in hours and minutes, when the temperature first\nreaches\n$35\\text{\\textdegree{C}}$ during the day. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - We have\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.4em} a &= \\dfrac{T_{\\text{max}} - T_{\\text{min}}}{2} \\\\[6pt]\n    &= \\dfrac{39.2 - 25.4}{2} \\\\[10pt]\n    &\\answer{= 6.9}\\end{aligned}\n    $$\n\n  - We have\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.4em} d &= \\dfrac{T_{\\text{max}} + T_{\\text{min}}}{2} \\\\[6pt]\n    &= \\dfrac{39.2 + 25.4}{2} \\\\[10pt]\n    &\\answer{= 32.3}\\end{aligned}\n    $$\n\n\n- The period of $T$ is $24$ hours.\nHence we get\n\n  $$\n  \\begin{aligned}\n  b &= \\dfrac{2\\pi}{24} \\\\[10pt]\n  &\\answer{\\approx 0.262}\\end{aligned}\n  $$\n\n- The max temperature occurs at $4$:$12$ pm ($t = 16.2$) and the mean\ntemperature occurs $6$ hours earlier.\n  Hence we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.75em} t_{\\text{max}} &= t_{\\text{mean}} + 6 \\\\[6pt]\n  16.2 &= c + 6 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{c = 10.2}\n  $$\n\n- If we draw the graph of\n$T = 6.9\\sin\\hspace{0.1em}(2.62\\hspace{0.1em}(t-10.2)) + 32.3$\nversus $t$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/000aea6e-7d28-4e46-a9b8-b0aa808a7144/images/b598813c-3dbe-453d-be50-5744baac0524/be78b702b9ccf256126ee3383eee8affe77f9461.svg)\n\n\n  If we write $0.735$ hour in whole minutes, we have\n\n  $$\n  \\begin{aligned}\n  0.735(60) &= 44.1 \\\\[6pt]\n  &\\approx 44 \\text{ minutes} \\hspace{0.65em}\\end{aligned}\n  $$\n\n  Hence the\ntemperature first reaches $35$ $\\text{\\textdegree{C}}$ during the\nday at\n$\\answer{\\text{\\(11\\):\\(44\\) am}}$\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '9',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 105',
    content:
      'The sound intensity level (SIL), $L$, in decibels (dB), of the sound\nintensity, $I$, in watts per square meter, is given by the equation\n\n$$\n\\begin{aligned}\nL &= 10\\log\\left(\\dfrac{I}{I_0}\\right),\\end{aligned}\n$$\n\nwhere $I_0$ is\nthe reference sound intensity.\n\n- Two sounds have intensities $I_1$ and $I_2$ with $I_1 < I_2$. Show\nthat the difference\n  in SIL between the two sounds is\n$\\triangle L = 10\\log\\left(\\dfrac{I_2}{I_1}\\right)$. <span class="marks">[3]</span>\n\n- A train rumble has the SIL of $82$ dB and a dishwasher noise has the\nSIL of $52$ dB. Find the number of times the train rumble is more\nintense than the dishwasher noise. <span class="marks">[3]</span>\n\n\nJack is attending a rock concert where the SIL of the music reaches\n$110$ dB. During the concert, Jack\'s mom calls him to find out if he is\nsafe and everything is going well. The SIL of his cell phone ring is\n$70$% of the SIL of the rock music.\n\n- The perceived loudness of a sound doubles for every\n$10$ dB increase in SIL.\n  \n  - Write down the SIL of Jack\'s cell phone ring.\n  - Jack perceives the rock music $k$ times as loud as his cell\nphone ringing. Find the value of $k$, giving your answer correct\nto $3$ significant figures.\n  - Hence, decide whether Jack\'s mom will reach him during the\nconcert if Jack carries his cell phone in the pocket and turned\nvibrating alert off. <span class="marks">[5]</span>\n\n\n',
    markScheme:
      "\n- Using the properties of logarithms, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.3em} \\triangle L  &= L_2 - L_1 \\\\[6pt]\n  &= 10\\log\\left(\\dfrac{I_2}{I_0}\\right) - 10\\log\\left(\\dfrac{I_1}{I_0}\\right) \\\\[6pt]\n  &= 10\\left[\\log\\left(\\dfrac{I_2}{I_0}\\right) - \\log\\left(\\dfrac{I_1}{I_0}\\right)\\right] \\\\[6pt]\n  &= 10\\log\\left(\\dfrac{I_2}{I_0} \\div \\dfrac{I_1}{I_0}\\right) \\\\[6pt]\n  &\\answer{= 10\\log\\left(\\dfrac{I_2}{I_1}\\right)}\\end{aligned}\n  $$\n\n- If we let $I_1$ and $I_2$ be the intensities of the dishwasher noise\nand the train rumble, we have\n\n  $$\n  \\begin{aligned}\n  \\triangle L &= 82 - 52 \\\\[10pt]\n  \\hspace{1.3em} 10\\log\\left(\\dfrac{I_2}{I_1}\\right) &= 30 \\hspace{3em} [\\text{by part (a)}] \\\\[5pt]\n  \\log\\left(\\dfrac{I_2}{I_1}\\right) &= 3 \\\\[5pt]\n  10^3 &= \\dfrac{I_2}{I_1} \\\\[10pt]\n  I_2 &= 1000I_1 \\\\\n  \\end{aligned}\n  $$\n\n  Hence the train rumble is\n$\\answer{1000 \\text{ times}}$\nmore intense than the dishwasher noise.\n- \n  - The SIL of Jack's cell phone ring is\n\n    $$\n    \\begin{aligned}\n    L &= 110(0.70) \\hspace{1.7em} \\\\[6pt]\n    &\\answer{= 77 \\text{ dB}}\\end{aligned}\n    $$\n\n  - We have\n\n    $$\n    \\begin{aligned}\n    \\dfrac{\\triangle L}{10} &= \\dfrac{110 - 77}{10} \\hspace{2.9em} \\\\[6pt]\n    &= 3.3\\end{aligned}\n    $$\n\n    Hence we get\n\n    $$\n    \\begin{aligned}\n    k &= 2^{3.3} \\\\[8pt]\n    &\\answer{\\approx 9.85} \\hspace{3.9em}\\end{aligned}\n    $$\n\n  - Jack's mom will not reach him during the concert b/c the rock music is too loud to hear cell phone ringing\n\n",
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
    type: 'ERQ',
    title: 'Question 106',
    content:
      'Peter wants to reach a rock, located $5$ km away\nfrom his current position, using the strategy outlined below.\nEvery hour Peter approaches the rock by a fixed percent of the remaining\ndistance to the rock.\nThe distance, $D$, in kilometres, Peter has travelled from his original\nposition, can be modelled by the exponential function\n\n$$\n\\begin{aligned}\nD(t) = a + b\\big(k^{-t}\\big), \\hspace{0.5em} t\\geq 0, \\end{aligned}\n$$\n\nwhere $t$ is the time, in hours, since Peter started moving.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/801847f8-3a4e-4e44-b8ec-eefd0e4a732e/images/f49c99b3-6084-4cce-b203-48eef7cf3293/819ba2cfeb3383629fe25649fde3301bcf8c76d4.svg)\n\n\n\n- Explain why $a= 5$. <span class="marks">[2]</span>\n\n- Find the value of $b$. <span class="marks">[2]</span>\n\n\nAfter one hour, the distance from Peter to the rock is\n$3.75$ km.\n\n- Find the value of $k$. <span class="marks">[2]</span>\n\n- Find the distance between Peter and the rock after $4$\nhours. <span class="marks">[2]</span>\n\n\nPeter can be heard when shouting from $200$ metres away.\n\n- Calculate the time it takes until someone standing on the\nrock can hear Peter shouting. Round your answer correct to the\nnearest hour.\n<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/801847f8-3a4e-4e44-b8ec-eefd0e4a732e/images/749982c8-e46c-4506-bf93-4534155f5e67/284ba0b0f6db44c91e038d4ec5486789b5846da8.svg)\n\n\n  On the other hand, we know Peter will not travel more than\n$5$ km.\n  Hence we must have $a = 5$.\n- Solving the equation $D(0) = 0$ for $t$, we get\n\n  $$\n  \\begin{aligned}\n  5 + b\\big(k^{0}\\big) &= 0 \\hspace{1.6em} \\\\[6pt]\n  5 + b &= 0 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2.8em} \\answer{b = -5}\n  $$\n\n- Solving the equation $D(1) = 5 - 3.75 = 1.25$ for $k$, we obtain\n\n  $$\n  \\begin{aligned}\n  5 - 5\\big(k^{-1}\\big) &= 1.25 \\hspace{2.35em} \\\\[10pt]\n  5 - \\dfrac{5}{k} &= \\dfrac{5}{4} \\\\[6pt]\n  1 - \\dfrac{1}{k} &= \\dfrac{1}{4} \\\\[6pt]\n  \\dfrac{3}{4} &= \\dfrac{1}{k} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.8em} \\answer{k = \\dfrac{4}{3}}\n  $$\n\n- Evaluating $D(t)$ for $t = 4$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.4em} D(4) &= 5 - 5\\hspace{-0.15em}\\left(\\dfrac{4}{3}\\right)^{-4} \\\\[6pt]\n  &\\approx 3.42\\end{aligned}\n  $$\n\n  Hence, the distance between Peter and\nthe rock after $4$ hours is\n\n  $$\n  \\begin{aligned}\n  5  - D(4) &= 5 - 3.42 \\\\[6pt]\n  &\\answer{= 1.58 \\text{ km}} \\hspace{1.4em}\\end{aligned}\n  $$\n\n- Solving the equation $D(t) = 5 - 0.2 = 4.80$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.8em} 5 - 5\\big(k^{-t}\\big) &= 4.80 \\hspace{1em} \\\\[6pt]\n  t &\\approx 11.2 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence it takes\n$\\answer{11 \\text{ hours}}$\nuntil someone on the rock can hear Peter shouting.\n',
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
    title: 'Question 107',
    content:
      'Adam is examining two quantities, $x$ and $y$, he plots some of their values on a log-log graph. The points all lie on a straight line.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/88dbe517-954b-4161-bbb7-0130a8c81f46/images/52fbfca2-5892-40a0-b406-ecc7df68469b/q1148.png)\n\n\nHe notices the line goes through the points $(x_1, 78.944)$ and $(287.545, y_2)$.\nHe also notices that $y_2$ is equal to $3x_1$.\nThe gradient on the line shown on the graph is $-0.24720$.\nFind a relationship between $y$ and $x$ that does not include any logarithmic functions. Give any parameter values to $4$ significant figures.',
    markScheme:
      'As this we see a straight line when plotting a log-log graph the relationship between $x$ and $y$ must be of the form $y=ax^n$.\n\n$$\n\\tag*{\\textbf{(M1)}}\n$$\n\n$\\textcolor{white}{gap}$\nWe can take the log of both sides and simplify\n\n$$\n\\begin{align*}\n    \\log{y}&=\\log{ax^n}\\\\\n    \\log{y}&=\\log{a} + \\log{x^n}\\\\\n    \\log{y}&=\\log{a} + n\\log{x}\n\\end{align*}\n$$\n\nBy comparing the rearranged equation above to $y=mx+c$ we can see that the gradient ($m$) of the log-log graph will be equal to $n$.\nWe have that $m = -0.24720$, hence we can write $y=ax^{-0.24720}$.\n\n$$\n\\tag*{\\textbf{(A1)}}\n$$\n\n$\\textcolor{white}{gap}$\nNow we must find the value of $a$.\nSubstituting in the coordinates of the two points we were given, $(x_1 , 78.944)$ and $(287.545 , 3x_1)$, we have\n\n$$\n\\begin{align*}\n    78.944 = a(x_1)^{-0.24720} \\hspace{2em} &\\text{and} \\hspace{2em} 3x_1 = a(287.545)^{-0.24720} \\tag*{\\textbf{(M1)}}\n\\end{align*}\n$$\n\nRearranging these equations to make $a$ the subject, we have\n\n$$\n\\begin{align*}\n     a = 78.944(x_1)^{0.24720} \\hspace{2em} &\\text{and} \\hspace{2em} a = 3\\left(287.545^{0.24720}\\right)x_1 \\tag*{\\textbf{(M1)}}\n\\end{align*}\n$$\n\nUsing the G.D.C., we can sketch these two graphs of $a$ against $x_1$ and find the point of intersection:\n\n$$\n\\tag*{\\textbf{(M2)}}\n$$\n\n$\\textcolor{white}{gap}$\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/88dbe517-954b-4161-bbb7-0130a8c81f46/images/856609d7-1ab0-446b-984c-8faf5de7b363/a1148.png)\n\n\nThis tells us that $a=145.9$ and $x_1=12.00$.\nHence $\\answer{y=145.9x^{-0.2472}}$.\n\n$$\n\\tag*{\\textbf{A1}}\n$$\n\n$\\textcolor{white}{gap}$',
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
    title: 'Question 108',
    content:
      'Grace is planning on making a 3D printed model of a well-known hill in her local area. She knows that the hill itself is approximately $400$ metres wide and $200$ metres high. A cross-section of the hill is shown in the following diagram.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/cfe367d7-cb6b-4d07-9047-93411b82d289/images/2db6ab35-c4bc-460a-be02-e3598d5f4f04/1198a.JPG)\n\n\nGrace plans to model the cross-section of the hill using a piecewise function, $f(x)$, consisting of a first function, $f_1(x)$ for $0 \\leq x \\leq 200$ and a second function, $f_2(x)$ for $200 < x \\leq 400$.\nFor the first section, Grace decides on a logistic function of the form\n\n$$\n\\begin{align*}\n    f_1(x) &= \\dfrac{202}{1+Ce^{-kx}} \\text{ , where } C,k>0\n\\end{align*}\n$$\n\nA point approximately halfway up the hill has coordinates $(100,120.684)$. Using these coordinates, Grace makes the equation\n\n$$\n\\begin{align*}\n    C &= 0.6738\\,e^{100k}\n\\end{align*}\n$$\n\nThe summit of the hill has approximate coordinates $(200,201.087)$.\n\n- Using these coordinates, find a second expression for $C$ in terms of $k$. <span class="marks">[3]</span>\n\n- Hence find the value of $C$ and the value of $k$. <span class="marks">[3]</span>\n\n\nFor the second section, Grace creates a function $f_2(x)$, which she finds by performing the following two transformations on $f_1(x)$ in order:\n$\\hspace{2em}\\bullet$ A reflection in the $y$-axis;\n$\\hspace{2em}\\bullet$ A translation of $400$ units in the direction of the positive $x$-axis.\n\n- Write a complete expression for $f_2(x)$. <span class="marks">[3]</span>\n\n- Hence write $f(x)$ as a piecewise function. <span class="marks">[1]</span>\n\n\nGrace wants her 3D printed model to be of scale $1:2\\,000$. This is equivalent to applying both a vertical stretch and horizontal stretch of scale factor $\\frac{1}{2\\,000}$ to her piecewise function.\n\n- Write a piecewise function for Grace\'s model, $g(x)$. <span class="marks">[4]</span>  \n\nTo determine the volume of plastic she requires for her 3D printed model, Grace finds the volume generated when $g(x)$ is rotated $\\bm{180^{\\circ}}$ about the $x$-axis.\n\n- Determine the volume of plastic Grace will require.<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Substituting $x=200$ and $f_1(200)=201.087$ into our equation, we have\n\n  $$\n  \\begin{align*}\n  f_1(x) &= \\dfrac{202}{1+Ce^{-kx}} \\\\[6pt]\n  f_1(200) &= \\dfrac{202}{1+Ce^{-200k}} \\\\[6pt]\n  201.087 &= \\dfrac{202}{1+Ce^{-200k}} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  1+Ce^{-200k} &= \\dfrac{202}{201.087} \\\\[6pt]\n  Ce^{-200k} &= \\dfrac{202}{201.087} - 1 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  \\dfrac{C}{e^{200k}} &= 0.004540... \\\\[6pt]\n  &\\hspace{-1.11em}\\tcbhighmath{C = 0.00454e^{200k}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We have two expressions now for $C$ and therefore these two expressions are equal. We have\n\n  $$\n  \\begin{align*}\n  0.6738e^{100k} &= 0.00454e^{200k}\n  \\end{align*}\n  $$\n\n  Using the numerical solver on the G.D.C.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  We find that $\\answer{k=0.0500}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n  Substituting this value of $k$ into either expression for $C$, we have\n\n  $$\n  \\begin{align*}\n  C &= 0.6738e^{100\\times 0.05} \\\\[6pt]\n  &\\hspace{-1.11em}\\tcbhighmath{C = 100} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Our $\\textbf{first}$ function is $f_1(x)=\\frac{202}{1+100e^{-0.05x}}$.\n  Our first step is to reflect this function in the $y$-axis. This is equivalent to generating the function $f_1(-x)$. We have\n\n  $$\n  \\begin{align*}\n  f_1(-x) &= \\frac{202}{1+100e^{0.05x}} \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Our second step is to translate the function $400$ units to the right. This is equivalent to generating the function $f_1(-(x-400))$. We have\n\n  $$\n  \\begin{align*}\n  f_2(x) &= f_1(-(x-400)) \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= \\frac{202}{1+100e^{0.05(x-400)}} \\\\[6pt]\n  &\\hspace{-2.55em}\\tcbhighmath{f_2(x) = \\frac{202}{1+100e^{0.05x-20}}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We have\n\n  $$\n  \\begin{equation*}\n  \\tcbhighmath{\n  f(x) = \\left\\{\\begin{array}{lcl}\n  \\dfrac{202}{1+100e^{-0.05x}} && \\hspace{1em}0 \\leq x \\leq 200\\,, \\\\[10pt]\n  \\dfrac{202}{1+100e^{0.05x-20}} && 200 < x \\leq 400\\,.\n  \\end{array} \\right. \\\\[4pt]\n  }\n  \\end{equation*}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- Using the given scale factor for the vertical and horizontal stretches, we have\n\n  $$\n  \\begin{align*}\n  g(x) &= \\dfrac{1}{2\\,000} \\times f(2\\,000x) \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Applying this firstly to the function $f_1(x)$, we have\n\n  $$\n  \\begin{align*}\n  g_1(x) &=  \\dfrac{1}{2\\,000} \\times f_1(2\\,000x) \\\\[6pt]\n  &= \\dfrac{1}{2\\,000} \\times \\dfrac{202}{1+100e^{-0.05(2\\,000x)}} \\\\[6pt]\n  g_1(x) &= \\dfrac{0.101}{1+100e^{-100x}} \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Applying this next to the function $f_2(x)$, we have\n\n  $$\n  \\begin{align*}\n  g_2(x) &=  \\dfrac{1}{2\\,000} \\times f_2(2\\,000x) \\\\[6pt]\n  &= \\dfrac{1}{2\\,000} \\times \\dfrac{202}{1+100e^{0.05(2\\,000x)-20}} \\\\[6pt]\n  g_2(x) &= \\dfrac{0.101}{1+100e^{100x-20}} \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Hence we have\n\n  $$\n  \\begin{equation*}\n  \\tcbhighmath{\n  g(x) = \\left\\{\\begin{array}{lcl}\n  \\dfrac{0.101}{1+100e^{-100x}} && \\hspace{0.5em}0 \\leq x \\leq 0.1\\,, \\\\[10pt]\n  \\dfrac{0.101}{1+100e^{100x-20}} && 0.1 < x \\leq 0.2\\,.\n  \\end{array} \\right. \\\\[4pt]\n  }\n  \\end{equation*}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- To find the volume, we will use the formula for a volume of revolution about the $x$-axis, but we will use $\\frac{\\pi}{2}$ instead of $\\pi$ because we only want one half of a revolution. First of all, we form our integral:\n\n  $$\n  \\begin{align*}\n  V &= \\displaystyle{\\int_0^{0.1}}\\,\\frac{\\pi}{2}\\left(\\dfrac{0.101}{1+100e^{-100x}}\\right)^2\\,\\mathrm{d}x + \\displaystyle{\\int_{0.1}^{0.2}}\\,\\frac{\\pi}{2}\\left(\\dfrac{0.101}{1+100e^{100x-20}}\\right)^2\\,\\mathrm{d}x \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Using the G.D.C.,\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  $\\answer{\\text{The volume of plastic required is approximately }0.00141\\,\\mathrm{m}^3.}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n',
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
    type: 'ERQ',
    title: 'Question 109',
    content:
      'Farmer Jimmy bought $50$ goats and brought them to his farm. He\ndetermined that $10$ of these new goats have a viral disease. The total\nnumber of goats on Jimmy\'s farm is now $600$.\nThe spread of the viral disease on Jimmy\'s farm is modelled by the\nlogistic function\n\n$$\n\\begin{aligned}\nS(d) &= \\dfrac{M}{1 + Ce^{-kd}}\\hspace{0.05em},\\end{aligned}\n$$\n\nwhere\n$S(d)$ is the number of infected goats after $d$ epidemic days.\n\n- \n  - Write down the value of $M$.\n  - Find the value of $C$. <span class="marks">[3]</span>\n\n\n- Given that quarter of the goats are infected after $12$ days, find\nthe value of $k$, giving your answer correct to $4$ significant\nfigures.<span class="marks">[2]</span>\n\n- Find the number of days it takes for $90$% of the goats to get\ninfected. <span class="marks">[2]</span>\n\n- Draw the graph of $y= S(d)$ on the axes below, indicating clearly\nthe point of inflexion and any asymptotes. <span class="marks">[5]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f49e72e7-6584-4138-8054-6fe5008cecf7/images/5238f531-f132-4a58-becb-d0b7ebce7daa/af42c884652048f15edb5d1b0dcdec977e9e56fd.svg)\n\n\n',
    markScheme:
      '\n- \n  - $\\answer{M = 600}$\n  - Solving the equation $S(0) = 10$ for $C$, we get\n\n    $$\n    \\begin{aligned}\n    \\dfrac{600}{1 + Ce^{-k(0)}} &= 10 \\hspace{8.9em} \\\\[6pt]\n    \\dfrac{600}{1 + C} &= 10 \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\hspace{6.3em} \\answer{C = 59} \\hspace{3em} [\\text{by using G.D.C.}]\n    $$\n\n\n- Solving the equation $S(12) = 600(0.25)$ for $k$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{600}{1 + 59e^{-k(12)}} &= 150 \\hspace{6.8em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.6em} \\answer{k \\approx 0.2482} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Solving the equation $S(d) = 600(0.9)$ for $d$, we find\n\n  $$\n  \\begin{aligned}\n  \\dfrac{600}{1 + 59e^{-0.2482d}} &= 540 \\hspace{7.6em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.9em} \\answer{d \\approx 25.3 \\text{ days}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- The $d$-coordinate of the point of inflexion of the graph of\n$y = S(d)$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.1em} d &= \\dfrac{1}{k}\\times\\ln\\hspace{-0.1em}\\left(\\dfrac{M-S_0}{S_0}\\right) \\\\[6pt]\n  &= \\dfrac{1}{0.2482}\\times\\ln\\hspace{-0.1em}\\left(\\dfrac{600-10}{10}\\right) \\\\[12pt]\n  &\\approx 16.4\\end{aligned}\n  $$\n\n  The $y$-coordinate of the point of\ninflexion of the graph of $y = S(d)$ is\n\n  $$\n  \\begin{aligned}\n  y &= \\dfrac{M}{2} \\\\[6pt]\n  &= \\dfrac{600}{2} \\\\[11pt]\n  &= 300 \\hspace{3em}\\end{aligned}\n  $$\n\n  Hence, if we draw the graph of\n$y= S(d)$ on the axes below, indicating clearly the point\nP$(16.4,300)$ and the horizontal asymptote $y = 600$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f49e72e7-6584-4138-8054-6fe5008cecf7/images/be5970ef-68da-418b-9d72-254b0894ca0e/f13c820f0c9b4084407257c9965d8746335e62cc.svg)\n\n\n',
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
    type: 'ERQ',
    title: 'Question 110',
    content:
      'John operates a small clothing factory that manufactures jeans. John\nobserves that the weekly total production cost, $C$, in Australian\ndollars (AUD), and the number of jeans produced per week, $N$, can be\nrelated by the equation\n\n$$\nC = aN^b + K,\n\n$$\n\nwhere $a,b$ and $K$ are\npositive constants.\nJohn estimates that the weekly total fixed cost of\n$\\text{operating}$ the $\\text{factory}$ is $7500$ AUD.\n\n- Write down the value of $K$. <span class="marks">[1]</span>\n\n\nAfter analysing the financial accounting records of a particular month,\nJohn finds the data given below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/022157df-8846-4769-addf-993d91dcc3d0/images/879f95c0-4366-46af-9667-a1ccca321eee/fbdd8eb79d6d3959b803e0d70b8e5774db6d8585.svg)\n\n\n\n- Draw a scatter diagram of $\\ln(C-K)$ versus $\\ln N$,\nscaling and shifting the axes if needed. <span class="marks">[4]</span>\n\n- State the type of model that best fits the data displayed\non your scatter diagram from part (b). <span class="marks">[1]</span>\n\n- Write down the equation of the regression line of\n$\\ln(C-K)$ on $\\ln N$. <span class="marks">[2]</span>\n\n- Hence find the value of $a$ and the value of $b$.\n<span class="marks">[4]</span>\n\n\nJohn wants to increase the production rate of jeans up to $1000$ pairs\nper week.\n\n- Using John\'s equation, estimate the weekly total cost of\nproducing $1000$ jeans.<span class="marks">[2]</span>\n\n- State whether it is valid to use John\'s equation to\nestimate the weekly total cost of producing $1000$ jeans. Give a\nreason for your answer. <span class="marks">[1]</span>\n\n- \n  - Describe how the data must be entered into your G.D.C. to\ndetermine John\'s equation using power regression method.\n  - Hence verify your answers to part (e). <span class="marks">[4]</span>\n\n\n',
    markScheme:
      "\n- $\\answer{7500}$\n- Calculating the values of $\\ln N$ and $\\ln(C-7500)$, we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/022157df-8846-4769-addf-993d91dcc3d0/images/f919f4c4-0ab8-4082-b3a5-15f4da729b49/42ab6379e4ab4c55ae6f463560051439ba03d313.svg)\n\n\n  Hence, if we draw a scatter diagram of $\\ln(C-7500)$ versus $\\ln N$,\nwe have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/022157df-8846-4769-addf-993d91dcc3d0/images/a09fc063-5ba5-4f42-b9b2-3fd0bef02a7d/59f5b36505be1f8ae52acc1dbbb0c27f31c1e5d3.svg)\n\n\n- $\\answer{\\text{Linear model}}$\n- $\\answer{\\ln(C-7500) = 0.806\\ln N + 5.14}$ [$\\text{by using G.D.C.}$]\n- Using the properties of logarithms, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\ln(C-7500) &= 0.806\\ln N + 5.14 \\\\[6pt]\n  \\ln(C-7500) &= \\ln N^{0.806} + \\ln e^{5.14} \\\\[6pt]\n  \\ln(C-7500) &= \\ln (171N^{0.806}) \\hspace{3em} [e^{5.14} \\approx 171] \\\\[6pt]\n  C - 7500 &= 171N^{0.806} \\\\[6pt]\n  C &= 171N^{0.806} + 7500\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{a = 171}$\nand  $\\answer{b = 0.806}$\n- Evaluating $C$ when $N = 1000$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} C &= 171(1000)^{0.806} + 7500 \\\\[6pt]\n  &\\answer{\\approx 52\\hspace{0.15em}300 \\text{ AUD}}\\end{aligned}\n  $$\n\n- $\\answer{\\text{Not valid, \\(N = 1000\\) is not within the range of the given data}}$\n- \n  - We have\n\n    $$\n    \\begin{aligned}\n    C &= aN^b + 7500 \\hspace{1.1em} \\\\[6pt]\n    C - 7500 &= aN^b \\end{aligned}\n    $$\n\n    Hence\n$\\answer{\\text{the values of \\(C - 7500\\) versus \\(N\\)}}$\nmust entered into G.D.C.\n    to determine John's equation using power regression method.\n  - Calculating the values of $C-7500$, we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/022157df-8846-4769-addf-993d91dcc3d0/images/1f7e6fa7-9fd5-4060-8aaa-a14e7aab59d1/99598c9925b5a9cd2c17f6f04553a8bf43f297df.svg)\n\n\n    Entering the data above into G.D.C. as described in part (h)\n(i), we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{10.3em} C - 7500 &= 177N^{0.800} \\hspace{2em} [\\text{by power regression}]\\\\[6pt]\n    C &= 177N^{0.800} + 7500\\end{aligned}\n    $$\n\n    Hence we find\n$\\answer{a = 177}$\nand\n$\\answer{b = 0.800}$\nas expected.\n\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '19',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 111',
    content:
      'Sandra operates a pizzeria that has $24$ hours delivery service. Sandra\nthinks that the daily total production cost, $C$, in euros (EUR), and\nthe number of pizzas made per day, $N$, can be related by the equation\n\n$$\nC = aN^b + K,\n$$\n\nwhere $a,b$ and $K$ are positive constants.\nSandra estimates that the daily total fixed cost of\n$\\text{operating}$ the $\\text{pizzeria}$ is $1000$ EUR.\n\n- Write down the value of $K$. <span class="marks">[1]</span>\n\n\nAfter analysing the bookkeeping records of a particular working week,\nSandra finds the data given below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/cb0acab8-5dc0-4da0-b2ae-e9c280e0b35f/images/4e23917d-54ed-4b09-9333-7c0c9887c487/7bb8aad63a8010d3b18aca0ec2b8af0e9af7f108.svg)\n\n\n\n- Draw a scatter diagram of $\\log_2(C-K)$ versus $\\log_2 N$,\nscaling and shifting the axes if needed. <span class="marks">[4]</span>\n\n- State the type of model that best fits the data displayed\non your scatter diagram from part (b). <span class="marks">[1]</span>\n\n- Write down the equation of the regression line of\n$\\log_2(C-K)$ on $\\log_2 N$. <span class="marks">[2]</span>\n\n- Hence find the value of $a$ and the value of $b$.\n<span class="marks">[4]</span>\n\n\nSandra wants to increase the selling rate of pizzas up to $800$ items\nper day.\n\n- Using Sandra\'s equation, estimate the daily total cost of\nproducing $800$ $\\text{pizzas}$.<span class="marks">[2]</span>\n\n- State whether it is valid to use Sandra\'s equation to\nestimate the daily total cost of producing $800$ pizzas. Give a\nreason for your answer. <span class="marks">[1]</span>\n\n- \n  - Describe how the data must be entered into your G.D.C. to\ndetermine Sandra\'s equation using power regression method.\n  - Hence verify your answers to part (e). <span class="marks">[4]</span>\n\n\n',
    markScheme:
      "\n- $\\answer{1000}$\n- Calculating the values of $\\log_2 N$ and $\\log_2(C-1000)$, we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/cb0acab8-5dc0-4da0-b2ae-e9c280e0b35f/images/a4a0598f-1773-4143-b4c0-43fa3acec483/6ed34dc57af21ba83ab1d7783038566a019696c0.svg)\n\n\n  Hence, if we draw a scatter diagram of $\\log_2(C-1000)$ versus\n$\\log_2 N$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/cb0acab8-5dc0-4da0-b2ae-e9c280e0b35f/images/ba1b960b-af66-4648-8cd3-21a512c38b91/ac6a60df9e23d37ccee604e1315d7e96fdca9f98.svg)\n\n\n- $\\answer{\\text{Linear model}}$\n- $\\answer{\\log_2(C-1000) = 0.853\\log_2 N + 3.02}$ [$\\text{by using G.D.C.}$]\n- Using the properties of logarithms, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.5em} \\log_2(C-1000) &= 0.853\\log_2 N + 3.02 \\\\[6pt]\n  \\log_2(C-1000) &= \\log_2 N^{0.853} + \\log_2 2^{3.02} \\\\[6pt]\n  \\log_2(C-1000) &= \\log_2 (8.11N^{0.853}) \\hspace{3em} [2^{3.02} \\approx 8.11] \\\\[6pt]\n  C - 1000 &= 8.11N^{0.853} \\\\[6pt]\n  C &= 8.11N^{0.853} + 1000\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{a = 8.11}$\nand  $\\answer{b = 0.853}$\n- Evaluating $C$ when $N = 800$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.6em} C &= 8.11(800)^{0.853} + 1000 \\\\[6pt]\n  &\\answer{\\approx 3430 \\text{ EUR}}\\end{aligned}\n  $$\n\n- $\\answer{\\text{Not valid, \\(N = 800\\) is not within the range of the given data}}$\n- \n  - We have\n\n    $$\n    \\begin{aligned}\n    C &= aN^b + 1000 \\hspace{0.5em} \\\\[6pt]\n    C - 1000 &= aN^b \\end{aligned}\n    $$\n\n    Hence\n$\\answer{\\text{the values of \\(C - 1000\\) versus \\(N\\)}}$\nmust entered into G.D.C.\n    to determine Sandra's equation using power regression method.\n  - Calculating the values of $C-1000$, we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/cb0acab8-5dc0-4da0-b2ae-e9c280e0b35f/images/84db4808-3293-4034-9822-257357cdc091/35ba533211e955abab6f16c3be55a978b4acd112.svg)\n\n\n    Entering the data above into G.D.C. as described in part (h)\n(i), we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{10.1em} C - 1000 &= 7.56N^{0.866} \\hspace{2em} [\\text{by power regression}]\\\\[6pt]\n    C &= 7.56N^{0.866} + 1000\\end{aligned}\n    $$\n\n    Hence we find\n$\\answer{a = 7.56}$\nand\n$\\answer{b = 0.866}$\nas expected.\n\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '19',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 112',
    content:
      'John is investigating a relationship between two sets of data, $X$ and $Y$. After creating a scatter plot with $\\ln Y$ on the $y$-axis and $\\ln X$ on the $x$-axis, John notices what appears to be a strong negative linear correlation. The line of best fit passes through the points $(1,3.6)$ and $(6,1.6)$, as shown in the following diagram.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/ef7542bf-9af6-4711-830a-7d31be18c041/images/4453a3d6-68cd-41c3-9c57-b3b81ac9d601/ai1063.PNG)\n\n\n\n- Find an equation for $Y$ in terms of $X$.<span class="marks">[4]</span>  \n\nJohn also has some data relating the same variable $Y$, with another variable $Z$. He thinks the data can be modelled by $\\log_{10}Y = m\\log_{10}Z + c$. Upon investigation, John does find a linear relationship between $\\log_{10}Y$ and $\\log_{10}Z$, with $m=0.6$ and $c=0.2$.\n\n- Find an equation for $X$ in terms of $Z$.<span class="marks">[4]</span>  \n',
    markScheme:
      '\n- First, we form an equation of the form $\\ln Y = m\\ln X + c$, where $m$ is the gradient and $c$ is the $y$-intercept. For the gradient, we have\n\n  $$\n  \\begin{align*}\n  m &= \\dfrac{y_2 - y_1}{x_2 - x_1} \\\\[8pt]\n  &= \\dfrac{1.6 - 3.6}{6 - 1} \\\\[8pt]\n  m &= -0.4\n  \\end{align*}\n  $$\n\n  Using the formula for the equation of a straight line, we have\n\n  $$\n  \\begin{align*}\n  y - y_1 &= m(x - x_1) \\\\[8pt]\n  \\ln Y - 3.6 &= -0.4(\\ln X - 1) \\\\[8pt]\n  \\ln Y &= -0.4\\ln X + 4\n  \\end{align*}\n  $$\n\n  Now we make $Y$ the subject of the equation:\n\n  $$\n  \\begin{align*}\n  \\ln Y &= \\ln X^{-0.4} + 4 \\hspace{3em}[a\\ln b = \\ln b^a]\\\\[8pt]\n  Y &= e^{\\ln X^{-0.4} + 4} \\\\[8pt]\n  &= X^{-0.4} \\cdot e^4 \\hspace{3em}[a^{m+n} = a^m \\cdot a^n] \\\\[8pt]\n  &\\hspace{-0.7em}\\tcbhighmath{Y = 54.6\\,X^{-0.4}}\n  \\end{align*}\n  $$\n\n- We have $\\log_{10}Y = 0.6\\log_{10}Z + 0.2$. Therefore,\n\n  $$\n  \\begin{align*}\n  \\log_{10}Y &= \\log_{10}Z^{0.6} + 0.2 \\\\[8pt]\n  Y &= 10^{\\log_{10}Z^{0.6} + 0.2} \\\\[8pt]\n  Y &= 1.585\\,Z^{0.6}\n  \\end{align*}\n  $$\n\n  From part (a) we have $Y = 54.6\\,X^{-0.4}$. Hence, equating the right hand side of each equation,\n\n  $$\n  \\begin{align*}\n  1.585\\,Z^{0.6} &= 54.6\\,X^{-0.4} \\\\[8pt]\n  1.585\\,Z^{0.6} &= \\dfrac{54.6}{X^{0.4}} \\\\[8pt]\n  X^{0.4} &= \\dfrac{54.6}{1.585\\,Z^{0.6}} \\\\[8pt]\n  &= 34.45\\,Z^{-0.6} \\\\[8pt]\n  \\left(X^{0.4}\\right)^{2.5} &= \\left(34.45\\,Z^{-0.6}\\right)^{2.5} \\\\[8pt]\n  &\\hspace{-0.7em}\\tcbhighmath{X = 6970\\,Z^{-1.5}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 113',
    content:
      'This question is about several regression equations and differential equations that can be used to model the number of views of a popular video published by a celebrity.\nThe following table shows the number of views $V$, in millions, of an internet celebrity has on her video channel $t$ hours after her last video was released.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/1f55c8eb-5664-4bcc-9237-78899795d3f9/images/501de319-17db-4078-88bd-375e001df7a0/1046a.PNG)\n\n\nThe data is also shown on the following scatter diagram:\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/1f55c8eb-5664-4bcc-9237-78899795d3f9/images/8c5ffe2d-9c13-431f-8151-883d37edccf0/1046b.PNG)\n\n\n\n- \n  - Find the equation of the regression line $V(t)$ on $t$.\n  - Sketch the regression line on the scatter diagram above.\n  - Find the Pearson\'s product-moment correlation coefficient, $r$.\n  - Explain why it is not appropriate to conduct a hypothesis test on the value found in (a) (iii). <span class="marks">[5]</span>\n\n\n\nA proposed model for approximating the first few hours since the video was released is given by the differential equation $V\'(t) = \\beta  V(t)$, where $\\beta$ is a constant related to the impact of the videos published by the celebrity.\n\n- \n  - Find the general solution to this differential equation.\n  - Using the given data, write down the equation of the non-linear regression model suggested by part (b) (i).\n  - Sketch this curve on the scatter diagram.\n  - For this model, write down the value of $R^2$.\n  - Comment on the suitability of this model. <span class="marks">[9]</span>\n\n\n\nA third model proposed is a logarithmic regression.\n\n- \n  - Write down the equation of the logarithmic regression model.\n  - Sketch this curve on the scatter diagram.\n  - State one limitation of the logarithmic model in approximating the number of views in the first few hours after a video is released. <span class="marks">[4]</span>\n\n\n\nAn estimate for $V\'(t)$, $t\\geq 3$, can be found using the formula\n\n$$\n\\begin{align*}\nV\'(t) \\approx \\dfrac{V(t+3)-V(t-3)}{6}\n\\end{align*}\n$$\n\nThe following table shows some estimates of $V\'(t)$ according to the formula.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/1f55c8eb-5664-4bcc-9237-78899795d3f9/images/9e9d502d-32b4-422c-bfdf-23c7cc14c515/1046c.PNG)\n\n\n\n- Find the values of $p$ and $q$. Give your answer correct to one decimal place. <span class="marks">[3]</span>  \n\nAn improved model for $V$ capable of dealing with high values of $t$ is given by the differential equation\n\n$$\n\\begin{align*}\n\\dfrac{V\'(t)}{V(t)} = k - \\dfrac{k}{L}V(t) \n\\end{align*}\n$$\n\nAccording to this model, the quotient $\\dfrac{V\'(t)}{V(t)}$ is a linear function of $V(t)$.\n\n- \n  - Use linear regression to find the value of $L$ rounded to the nearest thousand.\n  - Given that the solution to the differential equation is $V(t)=\\dfrac{L}{1+Ce^{-kt}}$, where $k>0$, estimate the number of views the video will have over a long period of time. <span class="marks">[7]</span>\n\n\n',
    markScheme:
      "\n- \n  - $\\answer{V(t) = 114\\,t+310}$ [by using G.D.C.]\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{(M1)A1}}\n    \\end{aligned}\n    $$\n\n  - We have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1f55c8eb-5664-4bcc-9237-78899795d3f9/images/03d83d16-98fa-4b7c-8e75-be206818b871/1046d.PNG)\n\n\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{A1}}\n    \\end{aligned}\n    $$\n\n  - $\\answer{r \\approx 0.898}$ [by using G.D.C.]\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{A1}}\n    \\end{aligned}\n    $$\n\n  - Looking at the scatter diagram, the data does not have a linear correlation.\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{R1}}\n    \\end{aligned}\n    $$\n\n\n- \n  - Re-writing $V'(t)$ as $\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}$ and $V(t)$ as $V$ will make the equation easier to manipulate:\n\n    $$\n    \\begin{align*}\n    \\dfrac{\\mathrm{d}V}{\\mathrm{d}t} &= \\beta\\,V\n    \\end{align*}\n    $$\n\n    By separating variables and integrating, we obtain\n\n    $$\n    \\begin{align*}\n    \\int \\dfrac{1}{V}\\,\\mathrm{d}V &= \\int \\beta \\,\\mathrm{d}t \\tag*{\\textbf{(M1)}}\\\\[8pt]\n    \\ln\\,V &= \\beta t + C \\tag*{\\textbf{(M1)}}\\\\[8pt]\n    V &= e^{\\beta t + C} \\tag*{\\textbf{(M1)}}\\\\[8pt]\n    &= e^C \\times (e^{\\beta})^t \\\\[8pt]\n    &\\hspace{-1.8em}\\tcbhighmath{V(t) = a \\times b^t} \\hspace{3em}[\\text{Where $a = e^C$ and $b = e^{\\beta}$}] \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Performing an exponential regression using the G.D.C., we obtain\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{(M1)}}\n    \\end{aligned}\n    $$\n\n    $\\answer{V(t) \\approx 395 \\times 1.12^t}$\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{A1}}\n    \\end{aligned}\n    $$\n\n  - We have (in red)\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1f55c8eb-5664-4bcc-9237-78899795d3f9/images/affbec8d-4412-489a-bb68-4c7a106942df/1046e.PNG)\n\n\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{A1}}\n    \\end{aligned}\n    $$\n\n  - $\\answer{R^2 \\approx 0.705}$ [by using G.D.C.]\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{A1}}\n    \\end{aligned}\n    $$\n\n  - Looking at the scatter diagram, with the exponential regression curve sketched, the data does not have an exponential correlation.\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{R1}}\n    \\end{aligned}\n    $$\n\n\n- \n  - Performing a logarithmic regression using the G.D.C., we obtain\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{(M1)}}\n    \\end{aligned}\n    $$\n\n    $\\answer{V(t) \\approx 1040 \\, \\ln{t} - 781}$\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{A1}}\n    \\end{aligned}\n    $$\n\n  - We have (in black)\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1f55c8eb-5664-4bcc-9237-78899795d3f9/images/15de21ab-bb80-457f-a6a7-ab0efe53b9d6/1046f.PNG)\n\n\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{A1}}\n    \\end{aligned}\n    $$\n\n  - The logarithmic regression curve has a zero at $(2.12,0)$.\n    The logarithmic model will predict a negative number of views for $0 \\leq t < 2.12$.\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{R1}}\n    \\end{aligned}\n    $$\n\n\n- We have\n\n  $$\n  \\begin{align*}\n  p &= V'(9) \\\\[8pt]\n  &\\approx \\dfrac{V(12)-V(6)}{6} \\tag*{\\textbf{(M1)}}\\\\[8pt]\n  &\\approx \\dfrac{1955 - 950}{6} \\\\[8pt]\n  &\\hspace{-0.5em}\\tcbhighmath{p \\approx 167.5} \\tag*{\\textbf{A1}}\\\\[8pt]\n  q &= V'(15) \\\\[8pt]\n  &\\approx \\dfrac{V(18)-V(12)}{6} \\\\[8pt]\n  &\\approx \\dfrac{2031 - 1955}{6} \\\\[8pt]\n  &\\hspace{-0.5em}\\tcbhighmath{q \\approx 12.7} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- \n  - Using our completed table, and adding a row for $\\dfrac{V'(t)}{V(t)}$:\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1f55c8eb-5664-4bcc-9237-78899795d3f9/images/cda01cb4-f9ce-47b2-bfe2-9e095ee30c20/1046g.PNG)\n\n\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{(M1)}}\n    \\end{aligned}\n    $$\n\n    We now find the equation of the regression line $\\dfrac{V'(t)}{V(t)}$ on $V(t)$ using the G.D.C.\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{(M1)}}\n    \\end{aligned}\n    $$\n\n    We get $\\dfrac{V'(t)}{V(t)}=0.4788 - 0.0002300V(t)$.\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{(A1)}}\n    \\end{aligned}\n    $$\n\n    Therefore $k=0.4788$ and $\\dfrac{k}{L}=0.0002300$. Hence,\n\n    $$\n    \\begin{align*}\n    \\dfrac{0.4788}{L} &= 0.0002300 \\tag*{\\textbf{(M1)}}\\\\[8pt]\n    L &= \\dfrac{0.4788}{0.0002300} \\\\[8pt]\n    &\\hspace{-0.5em}\\tcbhighmath{L = 2\\,000} \\hspace{3em} \\text{[To the nearest thousand]} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Given that $L=2\\,000$, we have\n\n    $$\n    \\begin{align*}\n    V(t) &= \\dfrac{2\\,000}{1+Ce^{-kt}}\n    \\end{align*}\n    $$\n\n    Given that $k>0$, as $t \\to \\infty$, $V(t) \\to 2\\,000$.\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{(M1)}}\n    \\end{aligned}\n    $$\n\n    As views are measured in millions, we multiply our value for $V(t)$ by $1\\,000\\,000$.\n    Over a long period of time, the video will have approximately 2 billion views.\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{A1}}\n    \\end{aligned}\n    $$\n\n\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '28',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'In this question give all angles in radians.\nLet $z = 1 + 2{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}$ and\n$w = 4 + {\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}$.\n\n- Find $z+w$. <span class="marks">[1]</span>\n\n- Find:\n  \n  - $|z+w|$;\n  - $\\arg(z+w)$. <span class="marks">[2]</span>\n\n\n- Find $\\theta$, the angle shown on the diagram below. <span class="marks">[2]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/50c10ba6-2e1a-451a-9954-0ba12b6fac75/images/e3abd6a6-8ddf-4035-ba97-a07d91ca55c7/9f1b9b167af97e4b2c9ee84b7c9014f2cdaf63c7.svg)\n\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  z+w &= (1+2{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}) + (4 + {\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}) \\\\[6pt]\n  &= (1+4) + (2+1){\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\\\[6pt]\n  &\\answer{= 5 + 3{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}}\\end{aligned}\n  $$\n\n- \n  - The modulus of $z+w$ is\n\n    $$\n    \\begin{aligned}\n    |z+w| &= \\sqrt{5^2 + 3^2} \\hspace{6.3em} \\\\[6pt]\n    &\\answer{\\approx 5.83}\\end{aligned}\n    $$\n\n  - The argument of $z+w$ is\n\n    $$\n    \\begin{aligned}\n    \\arg(z+w) &= \\tan^{-1}(3/5) \\hspace{7.25em} \\\\[6pt]\n    &\\answer{\\approx 0.540}\\end{aligned}\n    $$\n\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.7em} \\theta &= \\arg z - \\arg (z+w) \\\\[6pt]\n  &= \\tan^{-1}(2/1) - \\tan^{-1}(3/5) \\\\[6pt]\n  &= (1.107148\\dots) - (0.540419\\dots) \\\\[6pt]\n  &\\answer{\\approx 0.567}\\end{aligned}\n  $$\n\n',
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
      'Let $z = 2+{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}$ and\n$w = 1-2{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}$.\n\n- Find $zw$. <span class="marks">[2]</span>\n\n- Illustrate $z$, $w$ and $zw$ on the same Argand diagram. <span class="marks">[3]</span>\n\n- Let $\\theta$ be the angle between $zw$ and $w$. Find $\\theta$,\ngiving your answer in radians.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The product of $z$ and $w$ is\n\n  $$\n  \\begin{aligned}\n  zw &= (2+{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu})(1-2{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}) \\\\[6pt]\n  &= 2-4{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}+{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}+2 \\\\[6pt]\n  &\\answer{= 4-3{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}}\\end{aligned}\n  $$\n\n- If we illustrate $z$, $w$ and $zw$ on the same Argand diagram, we\nhave\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ce332d8e-4a39-41c6-929d-bcab05130838/images/e0dad541-eddc-48d6-bc66-b3dc162fa6c1/96f14dbc4defd6873946ae02a45c2e643f791342.svg)\n\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\arg w &= \\tan^{-1}((-2)/1) \\\\[6pt]\n  &= -1.107148\\dots \\hspace{1.3em} \\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  \\arg zw &= \\tan^{-1}((-3)/4) \\\\[6pt]\n  &= -0.643501\\dots \\hspace{1.8em}\\end{aligned}\n  $$\n\n  Hence we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{8em} \\theta &= |\\arg w| - |\\arg zw| \\\\[6pt]\n  &= (1.107148\\dots) - (0.643501\\dots) \\\\[6pt]\n  &\\answer{\\approx 0.464}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 3',
    content:
      'The complex numbers $z$ and $w$ correspond to the points A and B as\nshown on the diagram below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/f49c4a4e-a8b9-40a0-9883-70b2dab8b609/images/f51352cb-3ef3-4ded-8d97-25718787a7a9/0c46fa70e78de8ef6fa11a8d28566cc1742d4a83.svg)\n\n\n\n- Find the exact value of $|z - w|$. <span class="marks">[2]</span>\n\n- \n  - Find the exact perimeter of triangle AOB.\n  - Find the exact area of triangle AOB. <span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- Using the cosine rule, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} |z - w|^2 &= |z|^2 + |w|^2 - 2|z||w|\\cos\\left(\\dfrac{\\pi}{6}\\right) \\\\[6pt]\n  |z - w|^2 &= 5^2 + 5^2 - 2(5)(5)\\hspace{-0.1em} \\bigg[\\dfrac{\\sqrt{3}}{2}\\bigg] \\\\[10pt]\n  |z - w|^2 &= 25(2-\\sqrt{3}) \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{|z - w| = \\textstyle 5\\sqrt{2-\\sqrt{3}}} \\hspace{4.3em}\n  $$\n\n- \n  - The exact perimeter of triangle AOB is\n\n    $$\n    \\begin{aligned}\n    \\text{perimeter} &= |z| + |w| + |z-w| \\\\[6pt]\n    &= 5 + 5 + \\textstyle 5\\sqrt{2-\\sqrt{3}} \\\\[6pt]\n    &\\answer{= \\textstyle 10 + 5\\sqrt{2-\\sqrt{3}}}\\end{aligned}\n    $$\n\n  - The exact area of triangle AOB is\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.1em} \\text{area} &= \\dfrac{1}{2}|z||w|\\sin\\left(\\dfrac{\\pi}{6}\\right) \\\\[6pt]\n    &= \\dfrac{1}{2}(5)(5)\\hspace{-0.1em}\\bigg[\\dfrac{1}{2}\\bigg] \\\\[6pt]\n    &\\answer{= \\dfrac{25}{4}}\\end{aligned}\n    $$\n\n\n',
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
    title: 'Question 4',
    content:
      'Let\n$z_1 = 2\\sqrt{3}\\mathop{\\mathrm{cis}}\\hspace{-0.1em}\\Big(\\dfrac{7\\pi}{12}\\Big)$,\n$z_3 = 2\\mathop{\\mathrm{cis}}\\theta$, and $z_2 = z_1 + z_3$ be\nrepresented by the points\nA, B and C on an Argand diagram as shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/4cd04149-8449-4105-9b22-5e42b343e164/images/0085c6d0-51f3-4387-8aec-3a391223c6f4/f4ed9162ce8f5fbe06e47de0f00519455d24ad0d.svg)\n\n\nThe shape OABC is a rectangle.\n\n- Show that $\\theta = \\dfrac{\\pi}{12}$.\n<span class="marks">[1]</span>\n\n- Find $\\arg\\hspace{0.05em}(z_1 - z_2)$. <span class="marks">[1]</span>\n\n- Express $z_2$ in modulus-argument form. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- From the diagram, we find\n\n  $$\n  \\begin{aligned}\n  \\theta &= \\arg z_1 - \\text{A\\^{O}C} \\\\[6pt]\n  &= \\dfrac{7\\pi}{12} - \\dfrac{\\pi}{2} = \\hspace{0.525em}\\answer{\\dfrac{\\pi}{12}} \\hspace{1em}\\end{aligned}\n  $$\n\n- If we illustrate $z_1 - z_2$ on the same Argand diagram, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/4cd04149-8449-4105-9b22-5e42b343e164/images/04442292-e044-4715-9411-67fdf5174007/61b40c253f2d12de7c4ab40eafed5e3eb9ac59d0.svg)\n\n\n  Hence the argument of $z_1 - z_2$ is\n\n  $$\n  \\begin{aligned}\n  \\arg\\hspace{0.05em}(z_1 - z_2) &= \\text{C\\^{O}D} - \\arg z_3 \\hspace{0.75em} \\\\[14pt]\n  &= \\pi - \\dfrac{\\pi}{12} \\\\[8pt]\n  &\\answer{= -\\dfrac{11\\pi}{12}}\\end{aligned}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/4cd04149-8449-4105-9b22-5e42b343e164/images/04442292-e044-4715-9411-67fdf5174007/61b40c253f2d12de7c4ab40eafed5e3eb9ac59d0.svg)\n\n\n- Using the right triangle OBC, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} |z_2|^2 &= |z_1|^2 + |z_3|^2 \\\\[6pt]\n  |z_2|^2 &= (2\\sqrt{3})^2 + 2^2 \\hspace{0.2em} \\\\[6pt]\n  |z_2|^2 &= 16 \\\\[7pt]\n  |z_2| &= 4\\end{aligned}\n  $$\n\n  Using the right triangle OBC again, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.4em} \\cos(\\text{B\\^{O}C}) &= \\dfrac{|z_3|}{|z_2|} \\\\[6pt]\n  \\cos(\\text{B\\^{O}C}) &= \\dfrac{2}{4} \\hspace{3em} \\left(=\\dfrac{1}{2}\\right) \\\\[9pt]\n  \\text{B\\^{O}C} &= \\dfrac{\\pi}{3}\\end{aligned}\n  $$\n\n  Hence we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\arg z_2 &= \\arg z_3 + \\text{B\\^{O}C} \\\\[12pt]\n  &= \\dfrac{\\pi}{12} + \\dfrac{\\pi}{3} \\\\[8pt]\n  &= \\dfrac{5\\pi}{12}\\end{aligned}\n  $$\n\n  Hence, if we write $z_2$ in\nmodulus-argument form, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\answer{z_2 = 4\\mathop{\\mathrm{cis}}\\hspace{-0.1em}\\Big(\\dfrac{5\\pi}{12}\\Big)}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 5',
    content:
      'A circle is drawn on an Argand diagram as shown below. The tangent to\nthe circle from the point B$(0,9)$ meets the circle at the point A as\nshown. Let $w = \\vv{\\mathrm{OA}}$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/a933f476-df41-4384-9ff1-38ce595a983f/images/a7e2f81c-7176-46a6-9367-c80340035fc4/756bc10d49856365edc8188e18631d432452e02d.svg)\n\n\n\n- Show that $|w| = 3\\sqrt{3}$. <span class="marks">[2]</span>\n\n- Find $\\arg w$. <span class="marks">[2]</span>\n\n- Hence write $w$ in the form\n$a+b{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}$ where\n$a, b \\in \\mathbb{R}$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a933f476-df41-4384-9ff1-38ce595a983f/images/5eb70fb9-568d-4a68-b0f3-a7ba593cbbc1/be4795ddca85773f31f1a7dd616d51f34bbef9b7.svg)\n\n\n  Using the right triangle ABC, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.4em} \\cos(\\text{A\\^{C}B}) &= \\dfrac{3}{6} \\hspace{3em} \\left(=\\dfrac{1}{2}\\right) \\\\[6pt]\n  \\text{A\\^{C}B} &= \\dfrac{\\pi}{3} \\\\[6pt]\n  \\text{A\\^{C}O} &= \\dfrac{2\\pi}{3}\\end{aligned}\n  $$\n\n  Hence, using the\ncosine rule, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.4em} |w|^2 &= 3^2 + 3^2 - 2(3)(3)\\cos \\Big(\\dfrac{2\\pi}{3}\\Big) \\\\[3pt]\n  |w|^2 &= 18 - 18\\hspace{-0.1em}\\left[-\\dfrac{1}{2}\\right] \\\\[6pt]\n  |w|^2 &= 27 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  \\answer{|w| = 3\\sqrt{3}} \\hspace{0.9em}\\end{aligned}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a933f476-df41-4384-9ff1-38ce595a983f/images/5eb70fb9-568d-4a68-b0f3-a7ba593cbbc1/be4795ddca85773f31f1a7dd616d51f34bbef9b7.svg)\n\n\n- Using the isosceles triangle OAC, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\text{A\\^{O}C} &= \\dfrac{1}{2}\\hspace{0.05em}(\\pi - \\text{A\\^{C}O}) \\\\[6pt]\n  &= \\dfrac{1}{2}\\bigg[\\pi - \\dfrac{2\\pi}{3}\\bigg] \\\\[6pt]\n  &= \\dfrac{\\pi}{6}\\end{aligned}\n  $$\n\n  Hence the argument of $w$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} \\arg w &= \\dfrac{\\pi}{2} - \\text{A\\^{O}C} \\\\[8pt]\n  &= \\dfrac{\\pi}{2} - \\dfrac{\\pi}{6} \\\\[8pt]\n  &\\answer{= \\dfrac{\\pi}{3}}\\end{aligned}\n  $$\n\n- If we write $w$ in Cartesian form, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.4em} w &= 3\\sqrt{3}\\mathop{\\mathrm{cis}}\\left(\\dfrac{\\pi}{3}\\right) \\\\[9pt]\n  &= 3\\sqrt{3}\\bigg[\\hspace{-0.1em}\\cos \\left(\\dfrac{\\pi}{3}\\right) + {\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\sin \\left(\\dfrac{\\pi}{3}\\right)\\hspace{-0.2em}\\bigg] \\\\[6pt]\n  &= 3\\sqrt{3}\\bigg[\\dfrac{1}{2} + {\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\dfrac{\\sqrt{3}}{2}\\bigg] \\\\[7pt]\n  &\\answer{= \\dfrac{3\\sqrt{3}}{2} + \\dfrac{9}{2}{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 6',
    content:
      'Consider the complex number $z$, such that $z=2\\hspace{0.05em}e^{\\frac{\\pi}{a}i}$, where $|a|>1, a \\in \\mathbb{R}$.\n\n- Show that $z$ can never be a positive real number. \t<span class="marks">[2]</span>  \n\nNow consider the complex number $w$, such that $w=-\\sqrt{2}+\\sqrt{2}i$. There is one value of $a$ such that $\\frac{z}{w}$ is a positive real number.\n\n- Find this value of $a$. <span class="marks">[6]</span>  \n',
    markScheme:
      "\n- For $z$ to be a positive real number, the argument of $z$ must be a multiple of $2\\pi$. The argument of $z$ is $\\frac{\\pi}{a}$. We have\n\n  $$\n  \\begin{align*}\n  \\frac{\\pi}{a} &= 2\\pi k \\,,\\enskip k \\in \\mathbb{Z} \\tag*{\\textbf{M1}}\\\\[6pt]\n  a &= \\dfrac{\\pi}{2\\pi k} \\\\[6pt]\n  a &= \\dfrac{1}{2k} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  Given that $k \\in \\mathbb{Z}$, $|a|<1$. But we have been given that $|a|>1$.\n\n  $$\n  \\begin{align*}\n  &\\hspace{-3em}\\tcbhighmath{\\text{Therefore, $z$ can never be a positive real number.}} \\tag*{\\textbf{AG}}\n  \\end{align*}\n  $$\n\n- Let's write $w$ in exponential form. The following Argand diagram shows $w$ geometrically:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/59d736c0-c18b-4091-88f3-cee089df7548/images/0e8a0ff9-560c-4903-85ff-04d803a38478/1184a.JPG)\n\n\n  The modulus of $w$ is $2$ and the argument of $w$ is $\\frac{3\\pi}{4}$.\n  Hence, $w=2e^{\\tfrac{3\\pi}{4}i}$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(A1)}}\n  \\end{aligned}\n  $$\n\n  We have\n\n  $$\n  \\begin{align*}\n  \\dfrac{z}{w} &= \\dfrac{2e^{\\frac{\\pi}{a}i}}{2e^{\\tfrac{3\\pi}{4}i}} \\\\[8pt]\n  &= \\left(e^{\\frac{\\pi}{a}i}\\right)\\left(e^{-\\frac{3\\pi}{4}i}\\right) \\hspace{3em} \\left[\\frac{1}{a^{m}}=a^{-m} \\right] \\\\[8pt]\n  &= e^{\\left(\\frac{\\pi}{a}-\\frac{3\\pi}{4}\\right)i} \\hspace{3em} \\left[a^m \\times a^n = a^{m+n}\\right]\n  \\end{align*}\n  $$\n\n  For $\\frac{z}{w}$ to be a positive real number, the argument of $w$ must be a multiple of $2\\pi$. The argument of $\\frac{z}{w}$ is $\\frac{\\pi}{a}-\\frac{3\\pi}{4}$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(A1)}}\n  \\end{aligned}\n  $$\n\n  We have\n\n  $$\n  \\begin{align*}\n  \\frac{\\pi}{a}-\\frac{3\\pi}{4} &= 2\\pi k \\,,\\enskip k \\in \\mathbb{Z} \\\\[6pt]\n   \\dfrac{1}{a} - \\dfrac{3}{4} &= 2k \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  \\dfrac{4-3a}{4a} &= 2k \\\\[6pt]\n  4 - 3a &= 8ak \\\\[6pt]\n  4 &= 8ak + 3a \\\\[6pt]\n  4 &= a(8k+3) \\\\[6pt]\n  a &= \\dfrac{4}{8k+3} \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Recall that $|a|>1$. If we consider that $k$ must be an integer, we can say the following:\n  \n  - If $k \\geq 1$, then $0<a<1$.\n  - If $k \\leq -1$, then $-1 < a < 0$.\n\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(R1)}}\n  \\end{aligned}\n  $$\n\n  Therefore the only possible integer value for $k$ is $k=0$ and hence $\\answer{a=\\frac{4}{3}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 7',
    content:
      'On an Argand diagram, the complex numbers\n$z_1 = 2 + 2\\sqrt{3}{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}$,\n$z_2 = 1 - {\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}$ and $z_3 = z_1z_2$ are\nrepresented by the vertices of a triangle.\nFind the area of the triangle.',
    markScheme:
      'We have\n\n$$\n\\begin{aligned}\n\\hspace{1.1em} |z_1| &= \\textstyle \\sqrt{2^2+(2\\sqrt{3})^2} \\\\[6pt]\n&= 4 \\\\[12pt]\n|z_2| &= \\sqrt{1^2+(-1)^2} \\\\[6pt]\n&= \\sqrt{2}\\end{aligned}\n$$\n\nand\n\n$$\n\\begin{aligned}\n\\arg z_1 &= \\tan^{-1}(2\\sqrt{3}/2) \\\\[6pt]\n&= \\ang{60} \\\\[12pt]\n\\arg z_2 &= \\tan^{-1}(-1/1) \\\\[6pt]\n&= -\\ang{45}\\end{aligned}\n$$\n\nHence, using the property of modulus, we get\n\n$$\n\\begin{aligned}\n|z_3| &= |z_1z_2| \\\\[6pt]\n&= |z_1||z_2| \\hspace{2.1em} \\\\[6pt]\n&= 4\\sqrt{2}\\end{aligned}\n$$\n\nand\n\n$$\n\\begin{aligned}\n\\arg z_3 &= \\arg(z_1z_3) \\\\[6pt]\n&= \\arg z_1 + \\arg z_2 \\\\[6pt]\n&= \\ang{15}\\end{aligned}\n$$\n\nIf we sketch the triangle whose vertices\nrepresent $z_1$, $z_2$ and $z_3$ on an Argand diagram, we have\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d9540a91-3a6d-402f-96f6-82e7e2baf51e/images/357aebcc-946f-48d1-9cb4-5216d45536d4/cce5162c3d61fa13f25a6e2323562142371b3997.svg)\n\n\nHence the area of the triangle ABC is\n\n$$\n\\begin{aligned}\n\\text{area(A\\^{B}C)} &= \\text{area(A\\^{O}C)} + \\text{area(B\\^{O}C)} - \\text{area(A\\^{O}B)} \\\\[8pt]\n&= \\dfrac{1}{2}(4)(4\\sqrt{2})\\sin \\ang{45} + \\dfrac{1}{2}(\\sqrt{2})(4\\sqrt{2})\\sin \\ang{60} - \\dfrac{1}{2}(4)(\\sqrt{2})\\sin \\ang{105} \\\\[8pt]\n&\\answer{\\approx 8.73}\\end{aligned}\n$$\n',
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
    title: 'Question 8',
    content:
      'Consider two sinusoidal functions with the same period, $S_1$ and $S_2$, given by\n\n$$\n\\begin{align*}\nS_1= 8 \\cos (bx - 30^{\\circ}) \\hspace{3em} \\text{and} \\hspace{3em} S_2 = 6 \\cos (bx + 30^{\\circ})\n\\end{align*}\n$$\n\nThe two sinusoidal functions are combined to make the equation $S_1+S_2 = A \\cos \\left(bx + \\alpha\\right)$.\nFind the value of $A$ and the value of $\\alpha$.',
    markScheme:
      'First, converting to radians, we have\n\n$$\n\\begin{align*}\nS_1= 8 \\cos \\left(bx - \\dfrac{\\pi}{6}\\right) \\hspace{3em} \\text{and} \\hspace{3em} S_2 = 6 \\cos \\left(bx + \\dfrac{\\pi}{6}\\right)\n\\end{align*}\n$$\n\nNext, we note that $S_1$ is the real part of the complex number $z_1 = 8\\hspace{0.1em}\\mathrm{cis}\\left(bx - \\dfrac{\\pi}{6}\\right)$, and $S_2$ is the real part of the complex number $z_2 = 6\\hspace{0.1em}\\mathrm{cis}\\left(bx + \\dfrac{\\pi}{6}\\right)$.\nTherefore $S_1 + S_2$ is the real part of $z_1 + z_2$. We have\n\n$$\n\\begin{align*}\nz_1 + z_2 &= 8\\hspace{0.1em}\\mathrm{cis}\\left(bx - \\dfrac{\\pi}{6}\\right) + 6\\hspace{0.1em}\\mathrm{cis}\\left(bx + \\dfrac{\\pi}{6}\\right) \\\\[6pt]\n&= 8\\hspace{0.1em}e^{\\left(bx - \\frac{\\pi}{6}\\right)\\mathrm{i}} + 6\\hspace{0.1em}e^{\\left(bx + \\frac{\\pi}{6}\\right)\\mathrm{i}} \\hspace{3em} \\text{[converting to exponential form]} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n&= 8\\hspace{0.1em}e^{{bx\\mathrm{i}}-\\frac{\\pi}{6}\\mathrm{i}} + 6\\hspace{0.1em}e^{{bx\\mathrm{i}}+\\frac{\\pi}{6}\\mathrm{i}}\\\\[6pt]\n&= 8\\hspace{0.1em}e^{bx\\mathrm{i}}\\cdot e^{-\\frac{\\pi}{6}\\mathrm{i}} + 6\\hspace{0.1em}e^{bx\\mathrm{i}}\\cdot e^{\\frac{\\pi}{6}\\mathrm{i}} \\hspace{3em} [a^{m+n} = a^m \\cdot a^n] \\\\[6pt]\n&= e^{bx\\mathrm{i}}\\left(8\\hspace{0.1em}e^{-\\frac{\\pi}{6}\\mathrm{i}} + 6\\hspace{0.1em}e^{\\frac{\\pi}{6}\\mathrm{i}}\\right) \\\\[6pt]\n&= e^{bx\\mathrm{i}}\\left(12.17\\hspace{0.1em}e^{-0.08229\\mathrm{i}}\\right) \\hspace{3em} \\text{[using G.D.C.]} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n&= 12.17\\hspace{0.1em}e^{bx\\mathrm{i} - 0.08229\\mathrm{i}} \\hspace{3em} [a^m \\cdot a^n = a^{m+n}] \\\\[6pt]\nz_1 + z_2 &= 12.17\\hspace{0.1em}e^{(bx-0.08229)\\mathrm{i}} \\tag*{\\textbf{(M1)}}\n\\end{align*}\n$$\n\nReturning to polar form we have $z_1+z_2 = 12.17\\hspace{0.1em}\\mathrm{cis}\\hspace{0.1em}(bx-0.08229)$.\nThe real part of $z_1 + z_2$ is $12.17\\hspace{0.1em}\\mathrm{cos}\\hspace{0.1em}(bx-0.08229)$. Converting back to degrees from radians, we have\n\n$$\n\\begin{aligned}\n\\tag*{\\textbf{(M1)}}\n\\end{aligned}\n$$\n\n\n$$\n\\begin{align*}\nS_1 + S_2 &= 12.17\\hspace{0.1em}\\mathrm{cos}\\hspace{0.1em}(bx-4.715^{\\circ}) \n\\end{align*}\n$$\n\n$\\answer{A \\approx 12.2 \\text{ and } \\alpha \\approx -4.72^{\\circ}}$\n\n$$\n\\begin{aligned}\t\t\t\n\\tag*{\\textbf{A1}}\t\\end{aligned}\n$$\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 9',
    content:
      'Consider two power sources with voltages $V_1$ and $V_2$ respectively, where $\\omega$ is the frequency of the power source in Hertz (Hz) and $t$ is time in seconds.\nIt is given that\n\n$$\n\\begin{align*}\n    V_1 = 161\\sin(\\omega t + 1.047)\\,.\n\\end{align*}\n$$\n\nWhen the two power sources are combined, the resultant voltage $V_1 + V_2$ is given by\n\n$$\n\\begin{align*}\n    V_T = 240\\sin(\\omega t + 1.883)\\,.\n\\end{align*}\n$$\n\n\n- Find $V_2$. Give your answer in the form $a\\sin(\\omega t + b)$, where $a,b \\in \\mathbb{R}$.<span class="marks">[6]</span>\n\n- Hence, determine the difference in phase shift between $V_1$ and $V_2$.<span class="marks">[2]</span>\n\n',
    markScheme:
      "\n- When adding sinusoidal functions, writing the functions in Euler's form makes sense as it allows use to easily add and subtract them.\n  $V_1$ is the imaginary part of the complex number $z_1$ such that\n\n  $$\n  \\begin{align*}\n  z_1 &= 161\\left(\\cos(\\omega t + 1.047)+\\mathrm{i} \\sin(\\omega t + 1.047)\\right) \\\\[6pt]\n  &= 161e^{\\mathrm{i}(\\omega t + 1.047)}\n  \\end{align*}\n  $$\n\n  And $V_T$ is the imaginary part of the complex number $z_2$ such that\n\n  $$\n  \\begin{align*}\n  z_2 &= 240\\left(\\cos(\\omega t + 1.883)+\\mathrm{i} \\sin(\\omega t + 1.883)\\right) \\\\[6pt]\n  &= 240e^{\\mathrm{i}(\\omega t + 1.883)}\n  \\end{align*}\n  $$\n\n  Given that $V_2 = V_T - V_1$, $V_2$ is the imaginary part of $z_2 - z_1$. We have\n\n  $$\n  \\begin{align*}\n  z_2 - z_1 &= 240e^{\\mathrm{i}(\\omega t + 1.883)} - 161e^{\\mathrm{i}(\\omega t + 1.047)} \\\\[6pt]\n  &= 240\\left(e^{\\mathrm{i}\\omega t}\\right)\\left(e^{1.883\\mathrm{i}}\\right) - 161\\left(e^{\\mathrm{i}\\omega t}\\right)\\left(e^{1.047\\mathrm{i}}\\right) \\\\[6pt]\n  &= e^{\\mathrm{i}\\omega t}\\left(240e^{1.883\\mathrm{i}}-161e^{1.047\\mathrm{i}}\\right) \\\\[6pt]\n  &= e^{\\mathrm{i}\\omega t}\\left(178.1e^{2.618\\mathrm{i}}\\right) \\hspace{3em}[\\text{by G.D.C.}] \\\\[6pt]\n  &= 178e^{\\mathrm{i}(\\omega t + 2.62)}\n  \\end{align*}\n  $$\n\n  Converting to polar form, we have\n\n  $$\n  \\begin{align*}\n  V_2 &= \\mathrm{Im}\\left(178\\left(\\cos(\\omega t + 2.62)+\\mathrm{i} \\sin(\\omega t + 2.62)\\right)\\right) \\\\[6pt]\n  &\\hspace{-1em}\\tcbhighmath{V_2 = 178\\sin(\\omega t + 2.62)}\n  \\end{align*}\n  $$\n\n- The phase shift of $V_1$ is $1.047$ and the phase shift of $V_2$ is $2.62$. Hence the difference is given by\n\n  $$\n  \\begin{align*}\n  \\tcbhighmath{2.62 - 1.047 \\approx 1.57}\n  \\end{align*}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 10',
    content:
      'Points A and B represent the complex numbers\n$z_1 = \\sqrt{3} - {\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}$ and\n$z_2 = -3 - 3{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}$ as shown on an\nArgand diagram below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/4606175f-76d3-4bb2-97cc-8d9498e9a9bb/images/aea79791-5595-4133-ad16-58283147a4b9/b9acbcc9be3dbe232f939a960c2a1907744b9b96.svg)\n\n\n\n- Find the angle AOB. <span class="marks">[2]</span>\n\n- Find the argument of $z_1z_2$. <span class="marks">[1]</span>\n\n- Given that the real powers of $pz_1z_2$, for $p > 0$, all lie on a\nunit circle centred at the origin, find the exact value of $p$.\n<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\arg z_1 &= \\tan^{-1}\\left(\\hspace{-0.2em}-\\frac{1}{\\sqrt{3}}\\hspace{-0.1em}\\right) \\\\[6pt]\n  &= -\\dfrac{\\pi}{6}\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  \\arg z_2 &= \\tan^{-1}(1) \\hspace{0.9em} \\\\[12pt]\n  &= \\dfrac{\\pi}{4} - \\pi \\\\[8pt]\n  &= -\\dfrac{3\\pi}{4}\\end{aligned}\n  $$\n\n  Hence we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.3em} \\text{A\\^{O}B} &= |\\arg z_2| - |\\arg z_1| \\\\[10pt]\n  &= \\dfrac{3\\pi}{4} - \\dfrac{\\pi}{6} \\\\[7pt]\n  &\\answer{= \\dfrac{7\\pi}{12}}\\end{aligned}\n  $$\n\n- The argument of $z_1z_2$ is\n\n  $$\n  \\begin{aligned}\n  \\arg(z_1z_2) &= \\arg z_1 + \\arg z_2 \\\\[10pt]\n  &= -\\dfrac{\\pi}{6} - \\dfrac{3\\pi}{4} \\\\[7pt]\n  &\\answer{= -\\dfrac{11\\pi}{12}}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.2em} |z_1| &= \\textstyle \\sqrt{(\\sqrt{3})^2 + (-1)^2} \\\\[6pt]\n  &= \\sqrt{4} \\\\[8pt]\n  &= 2\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.1em} |z_2| &= \\sqrt{(-3)^2 + (-3)^2} \\\\[6pt]\n  &= \\sqrt{18} \\\\[6pt]\n  &= 3\\sqrt{2}\\end{aligned}\n  $$\n\n  Hence, using the properties of modulus,\nwe find\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.7em} |(pz_1z_2)^x| &= 1 \\hspace{3em} [\\text{for all $x \\in \\mathbb{R}$}] \\\\[12pt]\n  |pz_1z_2|^x &= 1 \\\\[12pt]\n  |pz_1z_2| &= 1 \\\\[12pt]\n  |p||z_1||z_2| &= 1 \\\\[12pt]\n  p\\hspace{0.05em}(2)(3\\sqrt{2}) &= 1  \\hspace{3em} [\\text{since $p > 0$}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{p = \\dfrac{\\sqrt{2}}{12}} \\hspace{2.6em}\n  $$\n\n',
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
    title: 'Question 11',
    content:
      'Let\n$z = \\sqrt{2}\\mathop{\\mathrm{cis}}\\hspace{-0.1em}\\left(\\dfrac{3\\pi}{8}\\right)$\nand\n$w = 2\\mathop{\\mathrm{cis}}\\hspace{-0.1em}\\bigg(\\dfrac{n\\pi}{24}\\bigg)$ ,\nwhere $n \\in \\mathbb{Z}^+$.\n\n- Find the value of $z^6$. Give your answer in the form\n$re^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\theta}$, where\n$r \\geq 0$, $-\\pi < \\theta \\leq \\pi$. <span class="marks">[2]</span>\n\n- Find the value of $(wz)^4$ for $n = 5$. Give your answer in the form\n$re^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\theta}$, where\n$r \\geq 0$, $-\\pi < \\theta \\leq \\pi$. <span class="marks">[3]</span>\n\n- Find the smallest integer $n > 9$ such that\n$\\dfrac{z}{w} \\in \\mathbb{R}$. <span class="marks">[3]</span>\n\n',
    markScheme:
      'We have\n\n$$\n\\begin{aligned}\nz &= \\sqrt{2}e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{3\\pi}{8}} \\\\[12pt]\nw &= 2e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{n\\pi}{24}} \\hspace{1em} \\\\\n\\end{aligned}\n$$\n\n\n- Therefore\n\n  $$\n  \\begin{aligned}\n  z^6 &= \\left(\\sqrt{2}\\,e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{3\\pi}{8}}\\right)^6 \\\\[12pt]\n  &= 8e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{9\\pi}{4}} \\\\[12pt]\n  &= 8e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\left(\\frac{9\\pi}{4} - 2\\pi\\right)} \\hspace{0.75em} [\\text{so that $-\\pi < \\theta \\leq \\pi$}] \\\\[12pt]\n  &\\hspace{-0.9em}\\answer{z^6 = 8e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{\\pi}{4}}}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  (wz)^4 &= \\Big[\\big(2e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{5\\pi}{24}}\\big)\\hspace{-0.2em}\\big(\\sqrt{2}e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{3\\pi}{8}}\\big)\\Big]^{4} \\hspace{3em} [\\text{for $n=5$}] \\\\[12pt]\n  &= \\Big[2\\sqrt{2}e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\left(\\frac{5\\pi}{24} + \\frac{3\\pi}{8}\\right)}\\Big]^{4} \\\\[12pt]\n  &= \\big(2\\sqrt{2}e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{7\\pi}{12}}\\big)^{4} \\\\[12pt]\n  &= 64e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{7\\pi}{3}} \\\\[12pt]\n  &= 64e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(\\frac{7\\pi}{3}- 2\\pi)} \\hspace{0.75em} [\\text{so that $-\\pi < \\theta \\leq \\pi$}] \\\\[12pt]\n  &\\hspace{-2.5em}\\answer{(wz)^4 = 64e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{\\pi}{3}}}\\end{aligned}\n  $$\n\n- The quotient $\\dfrac{z}{w}$ is a real number when\n$\\arg\\hspace{-0.1em}\\Big(\\dfrac{z}{w}\\Big)$ is a multiple of $\\pi$.\nWe have\n\n  $$\n  \\begin{aligned}\n  \\dfrac{z}{w} &= \\dfrac{\\sqrt{2}e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{3\\pi}{8}}}{2e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{n\\pi}{24}}} \\\\[12pt]\n  &= \\dfrac{\\sqrt{2}}{2}e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\left(\\frac{3\\pi}{8} - \\frac{n\\pi}{24}\\right)} \\\\[12pt]\n  &= \\dfrac{\\sqrt{2}}{2}e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\left(\\frac{9-n}{24}\\right)\\pi} \\\\[12pt]\n  \\arg\\hspace{-0.1em}\\Big(\\dfrac{z}{w}\\Big) &= \\left(\\frac{9-n}{24}\\right)\\pi\\\\\n  \\end{aligned}\n  $$\n\n  Therefore the smallest integer $n > 9$ such that\n$\\dfrac{z}{w} \\in \\mathbb{R}$ is\n$\\answer{n = 33}$\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 12',
    content:
      'Let $z = re^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{\\pi}{3}}$ where\n$r \\in \\mathbb{R}^+$.\n\n- For $r = \\sqrt{2}$,\n  \n  - express $z^2$ and $z^3$ in the form\n$a+b{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}$ where\n$a, b \\in \\mathbb{R}$;\n  - draw $z^2$ and $z^3$ on the following Argand diagram.\n<span class="marks">[4]</span>\n\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/eecd4b7e-d849-40ed-986b-85883ff7b716/images/f2f17a3e-671d-4ce2-8659-1788668037b1/7e711daec273ec9c0f630b852aae229a5a09d558.svg)\n\n\n\n- Given that the integer powers of\n$w = (3-3{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu})\\hspace{0.05em}z$ lie\non a unit circle centred at the origin, find the value of $r$.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - If we express $z^2$ and $z^3$ in Cartesian form, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{5.5em} z^2 &= 2e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{2\\pi}{3}} \\\\[9pt]\n    &= 2\\Big[\\hspace{-0.1em}\\cos\\Big(\\frac{2\\pi}{3}\\Big) + {\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\sin\\Big(\\frac{2\\pi}{3}\\Big)\\Big] \\\\[9pt]\n    &\\answer{=-1 + \\sqrt{3}{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}} \\end{aligned}\n    $$\n\n    and\n\n    $$\n    \\begin{aligned}\n    \\hspace{3em} z^3 &= 2\\sqrt{2}e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\pi} \\\\[9pt]\n    &= 2\\sqrt{2}\\Big[\\hspace{-0.1em}\\cos \\pi + {\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\sin \\pi \\Big] \\\\[9pt]\n    &\\answer{=-2\\sqrt{2} + 0{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}}\\end{aligned}\n    $$\n\n  - If we draw $z^2$ and $z^3$ on the following Argand diagram, we\nhave\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/eecd4b7e-d849-40ed-986b-85883ff7b716/images/ded0ec5a-bcd5-4df9-ad7f-598af8270fb2/ee3e2d0e8670f88c39e4d0221f05849bcdba3ebd.svg)\n\n\n\n- We have\n\n  $$\n  \\begin{aligned}\n  |3-3{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}| &= \\sqrt{3^2 + (-3)^2} \\\\[6pt]\n  &= \\sqrt{18} \\\\[6pt]\n  &= 3\\sqrt{2}\\end{aligned}\n  $$\n\n  Hence, using the properties of modulus,\nwe find\n\n  $$\n  \\begin{aligned}\n  |w^k| &= 1 \\hspace{3em} [\\text{for all $k \\in \\mathbb{Z}$}]  \\\\[13pt]\n  |w|^k &= 1 \\\\[14pt]\n  |w| &= 1 \\\\[14pt]\n  \\hspace{3.1em} |(3-3{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu})z| &= 1 \\hspace{3em} [w = (3-3{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu})z] \\\\[14pt]\n  |3-3{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}||z| &= 1 \\\\[12pt]\n  3\\sqrt{2}\\hspace{0.05em}r &= 1 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{r = \\dfrac{\\sqrt{2}}{6}} \\hspace{1.4em}\n  $$\n\n',
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
    title: 'Question 13',
    content:
      'Let $z = re^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{\\pi}{6}}$ where\n$r \\in \\mathbb{R}^+$.\n\n- For $r = \\sqrt{3}$,\n  \n  - express $z^2$ and $z^3$ in the form\n$a+b{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}$ where\n$a, b \\in \\mathbb{R}$;\n  - draw $z^2$ and $z^3$ on the following Argand diagram.\n<span class="marks">[4]</span>\n\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f8b7f053-da8d-4e58-93be-10882e6392eb/images/92508df3-14ba-4834-b3e9-4f2f3338ae54/633c15de281dbaeb852d4279b825abc3a94854e8.svg)\n\n\n\n- Given that the integer powers of\n$w = \\dfrac{z}{6+2{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}}$ lie on a\nunit circle centred\n  at the origin, find the value of $r$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - If we express $z^2$ and $z^3$ in Cartesian form, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{4em} z^2 &= 3e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{\\pi}{3}} \\\\[10pt]\n    &= 3\\Big[\\hspace{-0.1em}\\cos\\Big(\\frac{\\pi}{3}\\Big) + {\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\sin\\Big(\\frac{\\pi}{3}\\Big)\\Big] \\\\[4pt]\n    &\\answer{=\\dfrac{3}{2} + \\dfrac{3\\sqrt{3}}{2}{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}}\\end{aligned}\n    $$\n\n    and\n\n    $$\n    \\begin{aligned}\n    \\hspace{5.3em} z^3 &= 3\\sqrt{3}e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{\\pi}{2}} \\\\[10pt]\n    &= 3\\sqrt{3}\\Big[\\hspace{-0.1em}\\cos\\Big(\\frac{\\pi}{2}\\Big) + {\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\sin\\Big(\\frac{\\pi}{2}\\Big)\\Big] \\\\[10pt]\n    &\\answer{=0+3\\sqrt{3}{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}}\\end{aligned}\n    $$\n\n  - If we draw $z^2$ and $z^3$ on the following Argand diagram, we\nhave\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f8b7f053-da8d-4e58-93be-10882e6392eb/images/269127e3-b920-40c3-9c56-96e0a5491f22/ecdfaa8e1f1031e684d45d25638e79596842fb1a.svg)\n\n\n\n- We have\n\n  $$\n  \\begin{aligned}\n  |6+2{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}| &= \\sqrt{6^2 + 2^2} \\hspace{2.2em} \\\\[6pt]\n  &= \\sqrt{40} \\\\[6pt]\n  &= 2\\sqrt{10}\\end{aligned}\n  $$\n\n  Hence, using the properties of modulus,\nwe find\n\n  $$\n  \\begin{aligned}\n  |w^k| &= 1 \\hspace{3em} [\\text{for all $k \\in \\mathbb{Z}$}]  \\\\[16pt]\n  |w|^k &= 1 \\\\[17pt]\n  |w| &= 1 \\\\[15pt]\n  \\hspace{3.9em} \\Big|\\dfrac{z}{6+2{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}}\\Big| &= 1 \\hspace{3em} [w = z/(6+2{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu})] \\\\[8pt]\n  \\dfrac{|z|}{|6+2{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}|} &= 1 \\\\[9pt]\n  \\dfrac{r}{2\\sqrt{10}} &= 1 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{r = 2\\sqrt{10}} \\hspace{1.3em}\n  $$\n\n',
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
    title: 'Question 14',
    content:
      'Two voltage sources are connected to a circuit. At time $t$ milliseconds\n(ms), the voltage from the first source is $V_1(t) = 12\\cos(20t)$ and\nthe voltage from the second source is $V_2(t) = 18\\cos(20t+5)$, where\nboth $V_1(t)$ and $V_2(t)$ are measured in\nvolts.\n\n- Write, in the form $V(t) = A\\cos\\hspace{0.05em}(\\omega t+\\varphi)$,\nan expression for the total voltage in the circuit at time $t$ ms.\n<span class="marks">[4]</span>\n\n- Hence write down the highest voltage in the circuit. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- The total voltage in the circuit at time $t$ ms is given by\n$V(t) = V_1(t) + V_2(t)$.\n  Hence we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} V(t) &= 12\\cos(20t) + 18\\cos(20t+5) \\\\[7pt]\n  &= \\mathrm{Re}\\big[12\\mathop{\\mathrm{cis}}(20t) + 18\\mathop{\\mathrm{cis}}(20t+5)\\big] \\\\[6pt]\n  &= \\mathrm{Re}\\big[12e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}20t} + 18e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(20t+5)}\\big]\\end{aligned}\n  $$\n\n  Hence we further have\n\n  $$\n  \\begin{aligned}\n  12e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}20t} + 18e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(20t+5)} &= e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}20t}\\big[12 + 18e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}5}\\big] \\\\[6pt]\n  &\\approx e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}20t}\\big[17.1 - 17.3{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\big] \\hspace{3em} [\\text{by using G.D.C.}] \\\\[6pt]\n  &\\approx e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}20t}\\big[24.3e^{-{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}0.790}\\big] \\hspace{3.1em} [\\text{by using G.D.C.}] \\\\[6pt]\n  &\\approx 24.3e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(20t-0.790)}\\end{aligned}\n  $$\n\n  Hence we get\n\n  $$\n  \\begin{aligned}\n  V(t) &\\approx \\mathrm{Re}\\big[24.3e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(20t-0.790)}\\big] \\\\[6pt]\n  &\\answer{\\approx 24.3\\hspace{0.05em}\\cos(20t-0.790)} \\hspace{3em}\\end{aligned}\n  $$\n\n- Hence the highest voltage in the circuit is\n$\\answer{24.3\\hspace{0.25em}\\text{volts}}$\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 15',
    content:
      'The sunset time in Paris can be modelled by the function\n\n$$\n\\mathrm{S}(t) = 1.85\\sin\\hspace{0.05em}(0.52\\hspace{0.05em}t - 1.57) + 19.5\n$$\n\nwhere $t$ is time in months, from the beginning of January.\nThe sunrise time can similarly be modelled by\n\n$$\n\\mathrm{R}(t) = 1.35\\sin\\hspace{0.05em}(0.52\\hspace{0.05em}t - 4.7) + 7.5\n$$\n\nBoth $\\mathrm{S}(t)$ and $\\mathrm{R}(t)$ are measured in hours since midnight.\n$\\mathrm{S}(t)$ can be expressed as $\\mathrm{im}(z_1)+19.5$ and $\\mathrm{R}(t)$ can be expressed as $\\mathrm{im}(z_2)+7.5$, where $z_1,z_2 \\in \\mathbb{C}$.\n\n- Write down expressions for $z_1$ and $z_2$. Give your answers in the form $z_{1,2}=r\\,e^{\\theta i}$.<span class="marks">[2]</span>  \n\nThe number of daylight hours in Paris, $\\mathrm{D}(t)$, is given by $\\mathrm{D}(t)=\\mathrm{S}(t)-\\mathrm{R}(t)$.\n\n- Hence show that the number of hours of daylight in Paris can be modelled by the function\n\n  $$\n  \\mathrm{D}(t)=3.20\\sin\\hspace{0.05em}(0.52t-1.57) + 12\n  $$\n\n  <span class="marks">[6]</span>\n\n- According to the model, find:\n  \n  - the highest number of hours of daylight in a year;\n  - The approximate number of months per year in which there is at least 14 hours of daylight. <span class="marks">[5]</span>\n\n\n',
    markScheme:
      "\n- Equating our function $\\mathrm{S}(t)$ to $\\mathrm{im}(z_1)+19.5$, we must have\n\n  $$\n  \\begin{align*}\n  \\mathrm{im}(z_1) &= 1.85 \\sin (0.52t - 1.57)\n  \\end{align*}\n  $$\n\n  This is the imaginary part of the complex number\n\n  $$\n  \\begin{align*}\n  z_1 &= 1.85 \\cos (0.52t - 1.57) + i\\left(1.85 \\sin (0.52t - 1.57)\\right)\n  \\end{align*}\n  $$\n\n  In the required form, we have $\\answer{z_1 = 1.85e^{(0.52t - 1.57)i}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n  Using similar reasoning with $\\mathrm{R}(t)$, we have $\\answer{z_2 = 1.35e^{(0.52t - 4.7)i}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{align*}\n  \\mathrm{D}(t) &= \\mathrm{S}(t) - \\mathrm{R}(t) \\\\[8pt]\n  &= \\mathrm{im}(z_1) + 19.5 - \\left(\\mathrm{im}(z_2) + 7.5\\right) \\\\[8pt]\n  &= \\mathrm{im}(z_1) - \\mathrm{im}(z_2) + 12 \\\\[8pt]\n  &= \\mathrm{im}(z_1 - z_2) + 12 \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Let's find $z_1 - z_2$ so that we can identify the imaginary part.\n\n  $$\n  \\begin{align*}\n  z_1 - z_2 &= 1.85e^{(0.52\\hspace{0.05em}t-1.57)i} - 1.35e^{(0.52\\hspace{0.05em}t-4.7)i} \\\\[8pt]\n  &= 1.85e^{0.52ti-1.57i} - 1.35e^{0.52ti-4.7i} \\tag*{\\textbf{(M1)}}\\\\[8pt]\n  &= 1.85\\left(e^{0.52ti}\\right)\\left(e^{-1.57i}\\right) - 1.35\\left(e^{0.52ti}\\right)\\left(e^{-4.7i}\\right) \\\\[8pt]\n  &= e^{0.52ti}\\left(1.85e^{-1.57i}-1.35e^{-4.7i}\\right) \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  We have now factorised the variable $t$ out of the brackets, allowing us to compute a single complex number inside the brackets.\n\n  $$\n  \\begin{align*}\n  &= e^{0.52ti}\\left(3.199...e^{-1.565...i}\\right) \\hspace{3em}\\text{[by G.D.C.]} \\tag*{\\textbf{(M1)}}\\\\[8pt]\n  &= 3.199...e^{0.52ti-1.565...i} \\\\[8pt]\n  &= 3.199...e^{(0.52t-1.565...)i} \\\\[8pt]\n  z_1 - z_2 &= 3.20e^{(0.52t-1.57)i} \\,\\text{(3 s.f.)} \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Hence we get\n\n  $$\n  \\begin{align*}\n  \\mathrm{D}(t) &= \\mathrm{im}\\big[3.20e^{(0.52t-1.57)i}\\big] + 12 \\\\[8pt]\n  &\\hspace{0em}\\tcbhighmath{= 3.20\\sin\\hspace{0.05em}(0.52\\hspace{0.05em}t-1.57) + 12} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- \n  - According to the model, the highest number of hours of daylight is\n\n\n  $$\n  \\begin{align*}\n  \\mathrm{D_{max}} &= 3.20 + 12 \\tag*{\\textbf{M1}}\\\\[8pt]\n  &\\hspace{0em}\\tcbhighmath{= 15.2 \\text{ hours}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  \n  - If we sketch the graph of $y = \\mathrm{D}(t)$, and also the graph of $y=14$ [by using G.D.C.], we can find the points of intersection. Our solution is the domain for which $\\mathrm{D}(t) > 14$.\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{(M1)}}\t\n    \\end{aligned}\n    $$\n\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1c4bb223-a0f1-43f6-8a5f-86def982cb52/images/702081d9-df01-40f0-808a-189c4ef5d798/complex.JPG)\n\n\n    We have\n\n    $$\n    \\begin{align*}\n    7.762... - 4.317... &= 3.444... \\tag*{\\textbf{(M1)}}\n    \\end{align*}\n    $$\n\n    There are at least 14 hours of daylight for approximately $\\answer{\\text{3.44 months}}$ of the year.\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n    $\\textbf{Note: An answer of 3 months is acceptable.}$\n\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '13',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 16',
    content:
      'Ali is swimming in a public pool with some of his friends. At time $t$\nseconds, he $\\text{encounters}$ some waves with height\n$h_1(t) = 0.15\\sin\\hspace{0.05em}(3t)$ from big Bobby jumping into the\npool, and waves of height $h_2(t) = 0.08\\sin\\hspace{0.05em}(3t+1.25)$\nfrom small Suzie jumping into the pool. Both $h_1(t)$ and $h_2(t)$ are\nmeasured in metres.\n\n- Write, in the form $h(t) = A\\sin\\hspace{0.05em}(\\omega t+\\varphi)$,\nan expression for the total height of the waves Ali encounters at\ntime $t$ seconds. <span class="marks">[3]</span>\n\n- Find the times in the first $5$ seconds when Ali isn\'t affected by\nany waves. <span class="marks">[2]</span>\n\n- Find the first time when the waves reaching Ali has maximum height.\n<span class="marks">[1]</span>\n\n',
    markScheme:
      "\n- We have\n\n  $$\n  \\begin{aligned}\n  h(t) &= h_1(t) + h_2(t) \\\\[9pt]\n  &= 0.15\\sin\\hspace{0.05em}(3t) + 0.08\\sin\\hspace{0.05em}(3t+1.25) \\\\[8pt]\n  &= \\mathrm{Im}\\big[0.15\\mathop{\\mathrm{cis}}\\hspace{0.05em}(3t) + 0.08\\mathop{\\mathrm{cis}}\\hspace{0.05em}(3t+1.25)\\big] \\\\[8pt]\n  &= \\mathrm{Im}\\big[0.15e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}3t} + 0.08e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(3t+1.25)}\\big]\\end{aligned}\n  $$\n\n  Hence we further have\n\n  $$\n  \\begin{aligned}\n  0.15e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}3t} + 0.08e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(3t+1.25)} &= e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}3t}\\big[0.15 + 0.08e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}1.25}\\big] \\\\[8pt]\n  &\\approx e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}3t}\\big[0.175+ 0.0759{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\big] \\hspace{3em} [\\text{by using G.D.C.}] \\\\[8pt]\n  &\\approx e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}3t}\\big[0.191e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}0.409}\\big] \\hspace{3em} [\\text{by using G.D.C.}] \\\\[8pt]\n  &\\approx 0.191e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(3t+0.409)}\\end{aligned}\n  $$\n\n  Hence we find\n\n  $$\n  \\begin{aligned}\n  h(t) &\\approx \\mathrm{Im}\\big[0.191e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(3t+0.409)}\\big] \\\\[8pt]\n  &\\answer{\\approx 0.191\\sin\\hspace{0.05em}(3t+0.409)}\\end{aligned}\n  $$\n\n- If we sketch the graph of $y = h(t)$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8cbd4564-0681-4f42-b214-d4d91937919a/images/2b870085-23f9-4c2a-bcb0-7dbf9029b430/c1274d3811929d9ce0da7917e348fa7728bfc3fe.svg)\n\n\n  Hence the times in the first $5$ seconds when Ali isn't affected by\nany waves are\n\n  $$\n  \\begin{aligned}\n  \\answer{0.911\\hspace{0.25em}\\text{s},\\hspace{0.25em} 1.96\\hspace{0.25em}\\text{s},\\hspace{0.25em} 3.01\\hspace{0.25em}\\text{s},\\hspace{0.25em} 4.05\\hspace{0.25em}\\text{s}}\\end{aligned}\n  $$\n\n- If we sketch the graph of $y = h(t)$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8cbd4564-0681-4f42-b214-d4d91937919a/images/91489501-8a21-4124-adbb-cc1a63b0c90e/ffc02fbfbe87991fd09c664afe4f4f0a2e6d0e8d.svg)\n\n\n  Hence the first time when the wave reaching Ali has max height is at\n$\\answer{0.387\\hspace{0.25em}\\text{s}}$\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 17',
    content:
      'The revenues of a four seasons hotel can be modelled by the function\n$\\mathrm{R}(t) = 58.2\\sin\\hspace{0.05em}(0.0172t - 1.25) + 204$,\nwhere $t$ is the number of days after midnight on $31$ December.\nIn a similar way, the operating costs of the hotel can be modelled by\nthe function\n$\\mathrm{C}(t) = 31.4\\sin\\hspace{0.05em}(0.0172t + 1.14) + 85.0$.\nBoth $\\mathrm{R}(t)$ and $\\mathrm{C}(t)$ are measured in thousand\ndollars.\n\n- Show that the profits of the hotel can be modelled by the function\n$\\mathrm{P}(t) = 83.9\\sin\\hspace{0.05em}(0.0172t-1.51) + 119$.\n<span class="marks">[3]</span>\n\n- According to the model, find:\n  \n  - the highest profit the hotel will make;\n  - the date on which the highest profit will occur. <span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\mathrm{P}(t) &= \\mathrm{R}(t) - \\mathrm{C}(t) \\\\[9pt]\n  &= (58.2\\sin\\hspace{0.05em}(0.0172t-1.25) + 204) - (31.4\\sin\\hspace{0.05em}(0.0172t+1.14) + 85.0) \\\\[9pt]\n  &= \\big[58.2\\sin\\hspace{0.05em}(0.0172t-1.25) - 31.4\\sin\\hspace{0.05em}(0.0172t+1.14)\\big] + (204 - 85.0) \\\\[9pt]\n  &= \\mathrm{Im}\\big[58.2\\mathop{\\mathrm{cis}}\\hspace{0.05em}(0.0172t-1.25) - 31.4\\mathop{\\mathrm{cis}}\\hspace{0.05em}(0.0172t+1.14)\\big] + 119 \\\\[8pt]\n  &= \\mathrm{Im}\\big[58.2e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(0.0172t-1.25)} - 31.4e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(0.0172t+1.14)}\\big] + 119\\end{aligned}\n  $$\n\n  Hence we further have\n\n  $$\n  \\begin{aligned}\n  58.2e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(0.0172t-1.25)} - 31.4e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(0.0172t+1.14)} &= e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}0.0172t}\\big[58.2e^{-{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}1.25} - 31.4e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}1.14}\\big] \\\\[8pt]\n  [\\text{by using G.D.C.}] \\hspace{3em} &\\approx e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}0.0172t}\\big[5.24-83.8{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\big] \\\\[8pt]\n  [\\text{by using G.D.C.}] \\hspace{3em} &\\approx e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}0.0172t}\\big[83.9e^{-{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}1.51}\\big] \\\\[8pt]\n  &\\approx 83.9e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(0.0172t-1.51)}\\end{aligned}\n  $$\n\n  Hence we get\n\n  $$\n  \\begin{aligned}\n  \\mathrm{P}(t) &\\approx \\mathrm{Im}\\big[83.9e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(0.0172t-1.51)}\\big] + 119 \\\\[8pt]\n  &\\answer{\\approx 83.9\\sin\\hspace{0.05em}(0.0172t-1.51) + 119}\\end{aligned}\n  $$\n\n- \n  - According to the model, the highest profit is\n\n    $$\n    \\begin{aligned}\n    \\mathrm{P_{max}} &\\approx 83.9 + 119 \\\\[8pt]\n    &\\answer{\\approx \\$203 \\text{ thousand}}\\end{aligned}\n    $$\n\n  - If we sketch the graph of $y = \\mathrm{P}(t)$ [by using\nG.D.C.], we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a771343a-1612-47bb-9629-9a6f18d261c8/images/05fac9bf-641e-4d76-a847-d751b1246a59/543d375a9ce4d0222b972c2179c98d4a685548a5.svg)\n\n\n    Hence the highest profit occurs on $\\text{day } 179$ or\n$\\answer{\\text{June } 28}$\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 18',
    content:
      'In an unbalanced three-phase electrical circuit, the current at time $t$\nms is given by\n$I(t) = 2\\sin\\hspace{0.05em}(5t) + 5\\sin\\hspace{-0.1em}\\Big(5t-\\dfrac{3\\pi}{4}\\Big) + 10\\sin\\hspace{-0.1em}\\Big(5t-\\dfrac{5\\pi}{4}\\Big)$,\nwhere $I(t)$ is measured in milliamperes (mA).\n\n- Write $I(t)$ in the form $A\\cos\\hspace{0.05em}(\\omega t+\\varphi)$.\n<span class="marks">[4]</span>\n\n- Hence find the highest current flowing through the circuit, and the\ntime it first occurs. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  I(t) &= 2\\sin\\hspace{0.05em}(5t) + 5\\sin\\hspace{-0.1em}\\Big(5t-\\dfrac{3\\pi}{4}\\Big) + 10\\sin\\hspace{-0.1em}\\Big(5t-\\dfrac{5\\pi}{4}\\Big) \\\\[6pt]\n  &= \\mathrm{Im}\\Big[2\\mathop{\\mathrm{cis}}\\hspace{0.05em}(5t) + 5\\mathop{\\mathrm{cis}}\\hspace{-0.1em}\\Big(5t-\\dfrac{3\\pi}{4}\\Big) + 10\\mathop{\\mathrm{cis}}\\hspace{-0.1em}\\Big(5t-\\dfrac{5\\pi}{4}\\Big)\\Big] \\\\[6pt]\n  &= \\mathrm{Im}\\Big[2e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}5t} + 5e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\left(5t-\\frac{3\\pi}{4}\\right)} + 10e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\left(5t-\\frac{5\\pi}{4}\\right)}\\Big] \\qref{(1)}\\end{aligned}\n  $$\n\n  Hence we further have\n\n  $$\n  \\begin{aligned}\n  2e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}5t} + 5e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\left(5t-\\frac{3\\pi}{4}\\right)} + 10e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\left(5t-\\frac{5\\pi}{4}\\right)} &= e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}5t}\\big[2 + 5e^{-{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{3\\pi}{4}} + 10e^{-{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\frac{5\\pi}{4}}\\big] \\\\[8pt]\n  &\\approx e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}5t} \\big[-8.61 + 3.54{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}\\big] \\hspace{1.6em} [\\text{by using G.D.C.}] \\\\[8pt]\n  &\\approx e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}5t} \\big[9.30e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}2.75}\\big] \\hspace{1.6em} [\\text{by using G.D.C.}] \\\\[8pt]\n  &\\approx 9.30e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(5t+2.75)} \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, using the identity\n$\\sin \\theta = \\cos(\\theta-\\textstyle\\frac{\\pi}{2})$ with\n$\\theta = 5t+2.75$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.4em} I(t) &\\approx \\mathrm{Im}\\big[9.30e^{{\\mathrm{\\hspace{0.05em}i}\\mkern 1mu}(5t+2.75)}\\big] \\hspace{2em} [\\text{by $(1)$ and $(2)$}] \\\\[8pt]\n  &\\approx 9.30\\sin\\hspace{0.05em}(5t+2.75) \\\\[8pt]\n  &\\answer{\\approx 9.30\\cos\\hspace{0.05em}(5t+1.18)} \\hspace{2em} [\\text{since $2.75 - \\textstyle \\frac{\\pi}{2} \\approx 1.18$}]\\end{aligned}\n  $$\n\n- If we sketch the graph of $y = I(t)$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/b19fb021-405d-4f87-861f-57db50190a0c/images/826559f4-1052-4b95-9c53-4601db6b6fc2/edddcb5f4484a3ee01b2a7e1928a31daa1879cc9.svg)\n\n\n  Hence the highest current is\n$\\answer{9.30\\hspace{0.25em}\\text{mA}}$\nand the\n$1$st time it $\\text{occurs}$ is at  $\\answer{1.02\\hspace{0.25em}\\text{ms}}$\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '6',
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
    difficultyLevel: '1.5'
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
      'On January the 1st 2017 Ji Sun had savings of $7,380.\nHe decided to keep his money in a bank account that pays an annual interest rate of 4.7% per year which is compounded monthly.\n\n- Ji Sun left the money in the bank account until January the 1st 2025.\n  Calculate the value of his investment on this day, giving your answer to 2 decimal places. <span class="marks">[2]</span>\n\n\nAfter 2 complete years of earning interest in the bank account, Ji Sun decided to move his money into a savings account which paid a higher rate of yearly interest, compounded monthly.\n\n- On January the 1st 2025 he is projected to have  $11,747.40.\n  Determine the annual interest rate of the savings account. <span class="marks">[4]</span>\n\n',
    markScheme:
      "\n- The savings are invested for a total of $8$ years, hence we can write down the following\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d184c033-8328-4ae2-9235-9a4dd2b123b8/images/068fca3b-355a-44b2-bb91-1363cca8680e/a1131v1.png)\n\n\n  Using the compound interest formula, we have\n\n  $$\n  \\begin{align*}\n  FV&= 7380\\bigg(1 + \\dfrac{4.7}{100\\times12}\\bigg)^{12\\times 8}\\tag*{\\textbf{(M1)}}\\\\[12pt]\n  &\\hspace{0.275em}\\tcbhighmath{=\\$10740.69}  \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- First we need to work out the value of Ji Sun's savings after $2$ complete years\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d184c033-8328-4ae2-9235-9a4dd2b123b8/images/ae8ad18d-864b-4d72-927e-f5589d37895d/a1131v2.png)\n\n\n\n  $$\n  \\begin{align*}\n  &= 7380\\bigg(1 + \\dfrac{4.7}{100\\times12}\\bigg)^{12\\times 2} \\tag*{\\textbf{(M1)}}\\\\[12pt]\n  &=\\$8105.88... \\tag*{\\textbf{(A1)}}\\\\\n  \\end{align*}\n  $$\n\n  As this amount of money is invested for the remaining $6$ years, we can form the following equation in terms of the unknown interest rate $r$.\n\n  $$\n  \\begin{align*}\n  11747.40&= 8105.88...\\bigg(1 + \\dfrac{r} {100\\times12}\\bigg)^{12\\times 6} \\tag*{\\textbf{(M1)}}\\\\\n  \\end{align*}\n  $$\n\n  We solve this equation graphically\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d184c033-8328-4ae2-9235-9a4dd2b123b8/images/f88b1b6c-c7da-4f1d-bc82-337664f0ce41/a1131v3.png)\n\n\n  Hence the value of $r$ is $\\answer{6.20\\%} $\n\n  $$\n      \\tag*{\\textbf{A1}}\n  $$\n\n",
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
      'Isabella and Charlotte both receives $80\\hspace{0.15em}000$ Australian\ndollars (AUD) on their $18$th birthday to invest for later in their\nlife.\nIsabella deposits her $80\\hspace{0.15em}000$ AUD in a bank account that\npays a nominal annual interest rate of $x$ %,\ncompounded monthly.\n\n- The amount in a bank account after $6$ years will be\n$100\\hspace{0.15em}000$ AUD. Find the nominal annual interest rate.\nGive your answer correct to two decimal places.<span class="marks">[3]</span>\n\n\nCharlotte uses her $80\\hspace{0.15em}000$ AUD to buy a house that\nincreases in value at a rate of $3$ % per year.\n\n- Find the house price after $6$ years. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1145470e-716a-45bc-bf45-a97b5ce6883e/images/989f13b5-edfb-4fc6-8e38-225387a88ff4/871a7a7a5a84cb584b72c76d9154c0cb59ec2b91.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  100\\hspace{0.15em}000 &= 80\\hspace{0.15em}000\\bigg(1 + \\dfrac{x}{100\\times12}\\bigg)^{12\\times6} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{5.5em} \\answer{x \\approx 3.72\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1145470e-716a-45bc-bf45-a97b5ce6883e/images/127fe779-4cec-44a0-bb70-10854a67226c/29de2b1927fb49c589695bb5780062dd569e5dff.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.2em} \\mathrm{FV} &= 80\\hspace{0.15em}000\\bigg(1 + \\dfrac{3}{100\\times1}\\bigg)^{1\\times 6} \\\\[12pt]\n  &\\answer{\\approx 95\\hspace{0.15em}500 \\text{ AUD}}\\end{aligned}\n  $$\n\n',
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
      'In this question give all answers correct to two decimal places.\nCharlie deposits $8000$ Canadian dollars (CAD) into a bank account. The\nbank pays a nominal annual interest rate of\n$5$ %, compounded semi-monthly.\n\n- Find the amount of interest that Charlie will earn over the next\n$2$ years. <span class="marks">[3]</span>\n\n\nOscar also deposits CAD into a bank account. His bank pays a nominal\nannual interest rate of $6$ %, compounded\nquarterly. In $2$ years, the total amount in Oscar\'s account will be\n$\\$8000$ CAD.\n\n- Find the amount that Oscar deposits in the bank account.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/14cf9d6f-fe6d-4f19-83b2-f919b8e959c3/images/1d2b9973-cb55-4367-87c3-a59c79ce0017/866b44da1125ebe5d0b89561134ddf7c866ae57c.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\text{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 8000\\bigg(1 + \\dfrac{5}{100\\times24}\\bigg)^{24\\times 2} \\\\[12pt]\n  &\\answer{\\approx 8840.45 \\text{ CAD}}\\end{aligned}\n  $$\n\n  Hence the amount of interest earned is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} - \\text{PV} &\\approx 8840.45 - 8000 \\\\[6pt]\n  &\\answer{\\approx 840.45 \\text{ CAD}}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/14cf9d6f-fe6d-4f19-83b2-f919b8e959c3/images/83179f72-5202-4cfc-96b3-bedb58e027e4/8eeac585959bad7f1c4494696a7d0f0eef5ec337.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.1em} 8000 &= \\text{PV}\\bigg(1+\\dfrac{6}{100\\times4}\\bigg)^{4\\times2} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{12.6em} \\answer{\\text{PV} \\approx 7101.69 \\text{ CAD}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
      'Michael buys a second hand Tesla car for $\\$18\\hspace{0.15em}000$. The\nvalue of the car depreciates by $10\\%$ each\nyear.\n\n- Find the total amount the car will depreciate after 5 years, giving\nyour answer correct to the nearest dollar. <span class="marks">[3]</span>\n\n\nThe price of a different used car depreciates by $5\\%$ each year.\n\n- Find the value reduction of this car after $4$ years as a\npercentage, when compared to the original purchase price.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1ef72e0b-6daf-49bf-86a3-f321048cbc21/images/8ad5fa87-b19d-4552-90d8-eab141f1d092/6462608efbf9ba0d371a0ca7fdfe6437d1874af0.svg)\n\n\n  Using the compound depreciation formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\\\[5pt]\n  &= 18\\hspace{0.25em}000\\bigg(1 - \\dfrac{10}{100}\\bigg)^{5}  \\\\[12pt]\n  &\\approx \\$10\\hspace{0.15em}629\\end{aligned}\n  $$\n\n  Hence, after $5$\nyears the car has depreciated by\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.1em} \\mathrm{PV} - \\text{FV} &= 18\\hspace{0.15em}000 - 10\\hspace{0.15em}629 \\\\[6pt]\n  &\\answer{=\\$\\, 7\\hspace{0.15em}371 }\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1ef72e0b-6daf-49bf-86a3-f321048cbc21/images/4f46d5f5-a0a5-46ed-962c-a2080abe4c9c/16c3205d28d13971f8ad1ff276a51f080dad38f6.svg)\n\n\n  Using the compound depreciation formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\\\[5pt]\n  &= \\text{PV}\\bigg(1 - \\dfrac{5}{100}\\bigg)^{4}  \\\\[12pt]\n  &=\\text{PV}\\bigg(\\dfrac{19}{20}\\bigg)^{4}\\end{aligned}\n  $$\n\n  Therefore,\nthe reduction in price is\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.1em} \\mathrm{PV} -\\text{PV}\\bigg(\\dfrac{19}{20}\\bigg)^{4} &=\\Big(1-\\bigg(\\dfrac{19}{20}\\bigg)^{4}\\Big) \\, \\mathrm{PV} \\\\[6pt]\n  &\\approx 0.185 \\, \\mathrm{PV}\\end{aligned}\n  $$\n\n  Hence, the reduction in\nprice after $4$ years as a percentage is\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.1em} 0.185\\times 100\\% \\,\\,\\hspace{0.525em} \\answer{=18.5\\% }\n  \\end{aligned}\n  $$\n\n',
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
      'Charles plans to invest in a retirement plan for $30$ years. In this\nplan, he will deposit $1000$ British pounds (GBP) at the end of every\nmonth and receive a $6.5\\hspace{0.05em}\\%$ interest rate per annum,\ncompounded monthly.\n\n- Find the future value of the investment at the end of the $30$\nyears. Give your answer correct to the nearest pound.<span class="marks">[3]</span>\n\n\nAfter the $30$-year period, Charles will start receiving regular monthly\npayments of $1500$ GBP.\n\n- Calculate the number of years it will take Charles\'s\nmonthly retirement $\\text{payments}$ to match the total\namount originally invested. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Using the TVM Solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43be05e3-7082-4b01-9acc-d460b81cea14/images/469f7639-6fd8-415d-92a6-530e174de8ac/2c602bcdce03de3ab58076d77f8cc01aa8e5098c.svg)\n\n\n  Hence the value of the investment at the end of the $30$ years is\n$\\answer{1\\hspace{0.15em}106\\hspace{0.15em}178 \\text{ GBP}}$\n- The amount that Charles invests over $30$ years is\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.2em} 1000\\times360 &= 360\\hspace{0.15em}000 \\text{ GBP}\\end{aligned}\n  $$\n\n  Hence Charles breaks even with the amount he invested after\n\n  $$\n  \\begin{aligned}\n  \\dfrac{360\\hspace{0.15em}000}{1500\\times12} &=\\hspace{0.525em}\\answer{20 \\text{ years}}\\end{aligned}\n  $$\n\n',
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
      'At the beginning of a year, Jack has $\\$5000$ in a savings account that pays a $4\\hspace{0.05em}\\%$ annual interest rate, compounded quarterly. At the end of each year, Jack plans to deposit a further $\\$5000$ in the account.\n\n- Find the number of whole years it will take until Jack has at least\n$\\$100\\hspace{0.15em}000$ in his account. <span class="marks">[3]</span>\n\n\nAt the same time, John has $\\$6000$ in a savings account that pays an annual interest rate that is compounded semi-annually. At the end of each year, John deposits a further $\\$6000$ in the account. After $20$ years, John has $\\$200\\hspace{0.15em}000$ in his account.\n\n- Find John\'s annual interest rate. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- Using the finance solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c829974-7a5e-4d83-ab07-258cb6050a4d/images/0338c3c8-8d90-429e-8cf4-3e634966d7d8/jj1.PNG)\n\n\n  Hence it will take\n$\\answer{14 \\text{ whole years}}$\nuntil Jack has at least $\\$100\\hspace{0.15em}000$ in his account.\n- Using the finance solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c829974-7a5e-4d83-ab07-258cb6050a4d/images/bf90cdaf-e5db-4347-9095-76399691ccd1/jj2.PNG)\n\n\n  Hence John's annual interest rate is\n$\\answer{4.33\\hspace{0.05em}\\%}$\n",
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
      'Mike wants to deposit part of his savings in a bank account that pays an annual interest rate of $4.1\\,\\%\\, \\textbf{compounded annually}$. The annual inflation rate is expected to be $3\\%$ per year throughout the following $8$ years. Mike wants his initial deposit to have a real value of $\\$5\\,000$ after $8$ years, compared to current values.\nThe bank gives Mike two proposals:\n$\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\textbf{Proposal 1:} \\,\\,\\,\\text{A one-time investment at the start of the 8-year period.}$\n$\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\textbf{Proposal 2:} \\,\\,\\,\\text{Invest \\$2\\,000 at the start of the 8-year period and make payments of \\$ $x$ at the end of each year.}$\n\n- Find the minimum amount Mike should deposit if he accepts proposal 1. Round your answer to the nearest dollar. <span class="marks">[3]</span>\n\n- Find the minimum value of the annual payments, $x$, if Mike accepts proposal 2. Round your answer to the nearest dollar. <span class="marks">[3]</span>\n\n',
    markScheme:
      "\n- Using the finance solver on the G.D.C., we can determine what amount of money, in $8$ years, would have the same value as $\\$5\\,000$ today.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/903763f2-ec10-4f20-aef5-8db3e31bacc9/images/24e2ab0b-921d-4dc7-a5de-705bc2daee0b/AI1019a.PNG)\n\n\n  Now we can use the finance solver to determine Mike's initial deposit (PV) to ensure he has at least $\\$6\\,333.85$ at the end of 8 years:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/903763f2-ec10-4f20-aef5-8db3e31bacc9/images/fa4f0448-9af9-46a4-adf1-596ccd8d93e2/AI1019b.PNG)\n\n\n  Hence the minimum initial deposit is $\\answer{4\\hspace{0.15em}593}$\n- We know from part (a) that Mike requires $\\$6\\,333.85$ at the end of $8$ years.\n  Using the finance solver with a present value of $\\$2\\,000$, a future value of $\\$6\\,333.85$, and an annual interest rate of $4.1\\%$, we have:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/903763f2-ec10-4f20-aef5-8db3e31bacc9/images/cc4bb7a5-f453-4379-a524-963324878c85/AI1019c.PNG)\n\n\n  Hence the amount Mike should pay each year is $\\answer{\\hspace{0.05em}387}$\n",
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
    title: 'Question 14',
    content:
      'In this question give all answers correct to the nearest whole\nnumber.\nBenjamin spends € $32\\hspace{0.15em}000$ buying\nbitcoin mining hardware for his cryptocurrency $\\text{mining}$\nbusiness. The hardware depreciates by $16$ %\neach year.\n\n- Find the value of the hardware after two years. <span class="marks">[3]</span>\n\n- Find the number of years it will take for the hardware to be worth\nless than $\\text{\\euro\\hspace{0.05em}\\(8000\\)}$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9a6278b0-5d6d-4ead-be25-cf6e623be990/images/f4ea5999-da14-46c4-a49f-ae6ab7a1bfba/0586f73ff6162ac0d35f7aa7d72624e24f0856bf.svg)\n\n\n  Hence, using the compound depreciation formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.9em} \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\\\[5pt]\n  &= 32\\hspace{0.15em}000\\bigg(1 - \\dfrac{16}{100}\\bigg)^2 \\\\[12pt]\n  &\\answer{\\approx \\text{\\euro\\hspace{0.05em}}22\\hspace{0.15em}579}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9a6278b0-5d6d-4ead-be25-cf6e623be990/images/bd728f37-1f09-41ee-847d-2b9a343c8101/532b7aee114d6a0a16e054edfa0e732a7eb37db7.svg)\n\n\n  Hence, using the compound depreciation formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.8em} 8000 &= 32\\hspace{0.15em}000\\bigg(1 - \\dfrac{16}{100}\\bigg)^n \\\\[8pt]\n  n &\\approx 7.95 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence it takes\n$\\answer{8 \\text{ years}}$\nfor the hardware to be worth less than\n€ $8000$.\n',
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
    title: 'Question 15',
    content:
      'Ali bought a car for $\\$18\\hspace{0.15em}000$. The value of the car\ndepreciates by $10.5$ %\neach year.\n\n- Find the value of the car at the end of the first year. <span class="marks">[2]</span>\n\n- Find the value of the car after $4$ years. <span class="marks">[2]</span>\n\n- Calculate the number of years it will take for the car to be worth\nexactly half its original value. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/adf4fafa-562e-4070-a40a-3221bf3c76fb/images/d9a62615-240a-4867-8825-961128367193/86d0641572fd7d8ca13b40e061d1374bca7391bc.svg)\n\n\n  Hence, using the compound depreciation formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\\\[6pt]\n  &= 18\\hspace{0.15em}000\\bigg(1 - \\dfrac{10.5}{100}\\bigg)  \\\\[12pt]\n  &= \\$16\\hspace{0.15em}110 \\\\[18pt]\n  &\\answer{\\approx \\$16\\hspace{0.15em}100} \\\\[12pt]\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/adf4fafa-562e-4070-a40a-3221bf3c76fb/images/adcb999b-6295-4e6f-83a7-abd24505d77c/8adbc1baad593f942992356c96995063b6051eee.svg)\n\n\n  Hence, using the compound depreciation formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} \\mathrm{FV} &= 18\\hspace{0.15em}000\\bigg(1 - \\dfrac{10.5}{100}\\bigg)^4  \\\\[12pt]\n  &= \\$11\\hspace{0.15em}549.5 \\\\[18pt]\n  &\\answer{\\approx \\$11\\hspace{0.15em}500}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/adf4fafa-562e-4070-a40a-3221bf3c76fb/images/5a3c1fb3-b32a-48f2-a85f-fe8df0fc8495/22cbaefd6c6344e284fd948d4606858070563a4e.svg)\n\n\n  Hence, using the compound depreciation formula, we find\n\n  $$\n  \\begin{aligned}\n  9000 &= 18\\hspace{0.15em}000\\bigg(1 - \\dfrac{10.5}{100}\\bigg)^n \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{8em} \\answer{n \\approx 6.25 \\text{ years}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 16',
    content:
      'In this question give all answers correct to two decimal places.\nGeorge invests in a retirement plan in which equal payments of $\\$2750$\nare made at the end of each year. Interest is earned on each payment at\na rate of $3$ % per year, compounded\nsemi-annually.\n\n- Find the value of the investment after $20$ years. <span class="marks">[3]</span>\n\n- Find the amount of interest George will earn on the investment over\n$20$ years.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the TVM Solver on G.D.C., we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/cf44f0b2-e32f-449d-878b-08bfc4cc04bc/images/ab2a7b26-477a-4e83-b834-fd3f19ed0bd7/9cd1305c72a2e65dc53aca0d9d1f030cd54bae2c.svg)\n\n\n  Hence the value of the investment after $20$ years is\n$\\answer{74\\hspace{0.15em}062.88}$\n- The amount of interest earned on the investment over $20$ years is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} - 2750\\times20 &= 74\\hspace{0.15em}062.88 - 55\\hspace{0.15em}000 \\hspace{3em} \\\\[6pt]\n  &\\answer{= \\$19\\hspace{0.15em}062.88} \\end{aligned}\n  $$\n\n',
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
    title: 'Question 17',
    content:
      'Alex invests an amount of USD into a savings account which pays 3.3%\n(p.a.) interest, compounded monthly. After 5 years Alex has\n$8\\hspace{0.15em}000$ USD in the account.\n\n- Find the amount of USD initially invested, rounding your answer to\ntwo decimal places.<span class="marks">[3]</span>  \n\nWith this money, Alex purchases a used car for $5\\hspace{0.15em}000$\ndollars, and sells it 3 years later for $4\\hspace{0.15em}200$.\n\n- Find the rate at which the car depreciates per year over\nthe 3 year period.<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ed3f0bc4-a558-44ca-b7a6-f08e22040280/images/ffe55127-eb46-4edf-aa5a-308ce1c35e47/02190c699d42d109e659d8b5742f5cdb828d8e79.svg)\n\n\n  Using the compound interest formula, we can solve for PV\n\n  $$\n  \\begin{aligned}\n  8\\hspace{0.15em}000 &= \\text{PV}\\bigg(1 + \\dfrac{3.3}{100\\times 12}\\bigg)^{12(5)} \\\\[8pt]\n  &\\hspace{0.3em}\\answer{\\approx 6\\hspace{0.15em}784.69} \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ed3f0bc4-a558-44ca-b7a6-f08e22040280/images/25c7d355-25fd-4bb5-b27b-9d118a9ae125/6f2b95ec07474eac9d47b28cc09e2eb63167e4c5.svg)\n\n\n  We can use the compound depreciation formula to solve for $r$\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\rule[-4.5mm]{0pt}{13mm}\\\\\n  4\\hspace{0.15em}200&= 5\\hspace{0.25em}000\\bigg(1 - \\dfrac{r}{100}\\bigg)^{3}  \\rule[-4.5mm]{0pt}{13mm}\\\\\n  &\\hspace{-0.5em}\\answer{r\\approx 5.65} \\rule[0mm]{0pt}{6mm}\\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n',
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
    title: 'Question 18',
    content:
      '$\\textbf{Give all answers for this question to 2 decimal places, unless otherwise stated.}$\nOn 1 January 2024, Emily invests $\\$600\\hspace{0.10em}000$ in a savings account which pays a nominal annual interest rate of 4.5%, compounded annually.\n\n- Determine the  amount of money that will be in the account after $12$ years.<span class="marks">[3]</span>  \n\nAfter these $12$ years, Emily is planning to retire and place the money she has saved into an annuity fund which pays a nominal annual interest rate of 3.5%, compounded monthly.\nEmily wants to withdraw money from this account at the end of each month.\n\n- \n  - Calculate the amount Emily can withdraw at the end of each month if she wants the money to last for $18$ years after her retirement.\n  - Find how many $\\textbf{complete months}$, counted from 1 January 2036, it will take for the balance of the fund to fall below $\\$500\\hspace{0.1em}000$.<span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- In $12$ years we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0da11a45-0df2-4c92-84b9-239870fa63dc/images/44bde01e-f282-486a-a489-d4f2ab70cef7/683a.JPEG)\n\n\n\n  $$\n  \\begin{align*}\n   \\tag*{\\textbf{(M1)(A1)}}\n  \\end{align*}\n  $$\n\n  Hence, using the finance solver on the GDC (or the compound interest formula), we obtain\n\n  $$\n  \\begin{align*}\n  \\text{FV} &= 600\\hspace{0.15em}000\\bigg(1 + \\dfrac{4.5}{100(1)}\\bigg)^{12(1)} \\\\[8pt]\n  &\\hspace{0.3em}\\tcbhighmath{= \\$1\\hspace{0.15em}017\\hspace{0.15em}528.86 \\, (2\\,\\text{d.p.})} \\hspace{3em} [\\text{by using G.D.C.}]\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- \n  - In $18$ years we have $216$ months. Hence, using the finance solver on the G.D.C., we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0da11a45-0df2-4c92-84b9-239870fa63dc/images/24e58f26-7e8d-4fbe-a70d-5282ffcf5870/683b.JPEG)\n\n\n\n    $$\n    \\begin{align*}\n     \\tag*{\\textbf{(A1)}}\n    \\end{align*}\n    $$\n\n    Therefore, Emily can withdraw $\\enskip\\tcbhighmath{6\\hspace{0.15em}356.11}\\ \\enskip$ each month.\n\n    $$\n    \\begin{align*}\n     \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - This time we need to calculate N, given that $\\text{FV}=-500\\hspace{0.15em}000$, thus, we get\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0da11a45-0df2-4c92-84b9-239870fa63dc/images/971f0121-99de-4d98-9675-3a6c158a1f4f/683c.JPEG)\n\n\n\n    $$\n    \\begin{align*}\n     \\tag*{\\textbf{(A1)}}\n    \\end{align*}\n    $$\n\n    Therefore, it takes more than $126.5$ months to fall below $\\mbox{500\\hspace{0.1em}000}$, so in total $\\tcbhighmath{\\text{127 months}}$.\n\n    $$\n    \\begin{align*}\n     \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n',
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
    title: 'Question 19',
    content:
      'Smith has saved $\\$5\\,000$ from working a part-time job and wants to\ninvest this money so that it grows over time. His bank offers a savings\naccount that pays an annual interest rate of $4.2\\%$, compounded\nquarterly.\n\n- Find how many years it will take for Smith\'s investment amount to\ndouble in value, rounding your answer to the nearest integer.\n<span class="marks">[3]</span>  \n\nSmith wants his money to grow faster than this first option. His wants\nto invest the money so that it will double in value in $5$ years. He\nconsiders an high-growth, higher-risk option, which pays an annual\ninterest of $r\\%$, compounding half-yearly.\n\n- Determine the value of $r$ required in this option, rounding your\nanswer to two decimal places. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- The compound interest formula is\n\n  $$\n  \\begin{aligned}\n  FV &= PV\\left(1+\\dfrac{r}{100k}\\right)^{kn} \\end{aligned}\n  $$\n\n  We\nhave $FV=2\\times 5000 = 10000,\\, PV=5000,\\, r=4.2,$ and $k=4$.\nSubstituting these values into the formula, we get\n\n  $$\n  \\begin{aligned}\n  10000 &= 5000\\left(1+\\dfrac{4.2}{100(4)} \\right)^{4n}\\\\[6pt]\n  &\\hspace{-0.4em}\\answer{\\text{n}= 17} \\qquad \\qquad [\\text{using GDC}]\\end{aligned}\n  $$\n\n- We have $FV=10000, \\,PV=5000,\\, k=2,$ and $n=5$.\nSubstituting these values into the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  10000 &= 5000\\left(1+\\dfrac{r}{100(2)} \\right)^{2(5)}\\\\[6pt]\n  2 &= \\left(1+\\dfrac{r}{200} \\right)^{10}\\\\[6pt]\n  \\sqrt[10]{2}&=1+\\dfrac{r}{200}\\\\[6pt]\n  \\sqrt[10]{2}-1&=\\dfrac{r}{200}\\\\[6pt]\n  (\\sqrt[10]{2}-1)\\times200&=r\\\\[6pt]\n  &\\hspace{-0.3em}\\answer{\\text{r}= 14.35 \\%}\n  \\end{aligned}\n  $$\n\n',
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
      'Greg has saved $2000$ British pounds (GBP) over the last six months. He\ndecided to deposit his savings in a bank which offers a nominal annual\ninterest rate of $\\text{\\(8\\)\\hspace{0.05em}\\%}$, compounded\nmonthly, for two years.\n\n- Calculate the total amount of interest Greg would earn over the two\nyears. Give your answer correct to two decimal places.\n<span class="marks">[3]</span>\n\n\nGreg would earn the same amount of interest, compounded\nsemi-annually, for two years if he deposits his savings in a second\nbank.\n\n- Calculate the nominal annual interest rate the second bank\noffers. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/fe610d27-a954-4e19-b5c0-7535e2b675b8/images/fcc1357b-4e66-4e93-8cbd-34948432cd76/d94b9efaa433da997063a9b0927befd8e7a68df2.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{5em} \\mathrm{FV} &= \\text{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 2000\\bigg(1 + \\dfrac{8}{100\\times12}\\bigg)^{12\\times 2} \\\\[12pt]\n  &= 2345.78 \\text{ GBP}\\end{aligned}\n  $$\n\n  Hence the total amount of interest earned is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} - \\text{PV} &= 2345.78 - 2000 \\hspace{2.2em} \\\\[6pt]\n  &\\answer{= 345.78 \\text{ GBP}}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/fe610d27-a954-4e19-b5c0-7535e2b675b8/images/4ba3785f-39ac-4776-83c7-b04c77097206/218c768ecef0bd0485a005a319e86a9adb263fd0.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.1em} 2345.78 &= 2000\\bigg(1 + \\dfrac{r}{100\\times2}\\bigg)^{2\\times 2} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{8.2em} \\answer{r \\approx 8.13\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    difficultyLevel: '2.5'
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
    difficultyLevel: '2.5'
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
    difficultyLevel: '2.5'
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
    difficultyLevel: '2.5'
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
    difficultyLevel: '2.5'
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
    difficultyLevel: '3'
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
    difficultyLevel: '3'
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
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 31',
    content:
      'Nathan receives a lump sum inheritance of $\\$ 55\\,000$ and invests the\nmoney into a savings account with an annual interest rate of $7.5 \\%$,\ncompounded quarterly.\n\n- Calculate the value of Nathan\'s investment after 5 years, rounding\nyour answer to the nearest dollar. <span class="marks">[3]</span>  \n\nAfter $m$ months, the amount in the savings account has increased to\nmore than $\\$70\\,000$.\n\n- Find the minimum value of $m$, where $m\\in N$.<span class="marks">[4]</span>  \n\nNathan is saving to purchase a property. The price of the property is\n$\\$150\\,000$. Nathan puts down a $15\\%$ deposit and takes out a loan for\nthe remaining amount.\n\n- Write down the loan amount.<span class="marks">[1]</span>  \n\nThe loan duration is for eight years, compounded monthly, with equal\nmonthly payments of $\\$1500$ made by Nathan at the end of each month.\n\n- For this loan, find\n  \n  - the amount of interest paid by Nathan over the life of the loan.\n  - the annual interest rate of the loan, correct to two decimal\nplaces. <span class="marks">[5]</span>\n\n\n\nAfter $5$ years of paying this loan, Nathan decides to pay the\noutstanding loan amount in one final payment.\n\n- Find the amount of the final payment after $5$ years, rounding your\nanswer to the nearest dollar. <span class="marks">[3]</span>\n\n- Find the amount Nathan saved by making this final payment after $5$\nyears, rounding your answer to the nearest dollar.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The compound interest formula is\n\n  $$\n  FV = PV\\left(1+\\dfrac{r}{100k}\\right)^{kn}\n  \n  $$\n\n  We have\n$PV=55000,\\, r=7.5,\\, k=4,$ and $n=5$.\nSubstituting these values into the formula, we get\n\n  $$\n  \\begin{aligned}\n  FV &= 55000\\left(1+\\dfrac{7.5}{100(4)} \\right)^{4(5)}\\\\[6pt]\n  &\\hspace{0.5em}\\answer{= \\$ 79\\,747}\\end{aligned}\n  $$\n\n- We have $FV=70000,\\,PV=55000,\\, r=7.5,$ and $k=4$.\nSubstituting these values into the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  70000 &= 55000\\left(1+\\dfrac{7.5}{100(4)} \\right)^{4(n)}\\\\[6pt]\n  &\\text{n}\\approx 3.25 \\text{ years}\\hspace{2em}[\\text{using GDC}]\\end{aligned}\n  $$\n\n  Converting to months, we get\n\n  $$\n  \\answer{m=12\\times 3.25 = 39 \\text{ months} }\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{Property price}&= 150\\,000 \\\\[6pt]\n  \\text{Deposit} &= 15\\% \\\\[6pt]\n  \\text{Loan amount} &= 150\\,000 - (0.15\\times 150\\,000)\\\\[6pt]\n  &\\hspace{0.5em}\\answer{= \\$ 127\\,500}\\end{aligned}\n  $$\n\n- \n  - For $8$ years, we have\n\n    $$\n    \\begin{aligned}\n    \\text{Monthly payment}&= 1500 \\\\[6pt]\n    \\text{Total payments made}&= 1500\\times 8 \\times 12 \\\\[6pt]\n    &= \\$144 \\, 000\\\\[6pt]\n    \\text{Interest paid} &= 144\\,000 - 127\\,500\\\\[6pt]\n    &\\hspace{0.5em}\\answer{= \\$ 16\\,500}\\end{aligned}\n    $$\n\n  - Using the TVM Solver, we get\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ae5cf580-ab59-40fb-8ced-4d26e74bd0d2/images/4c35fbee-049b-4253-9105-1716cb2e9ec9/f86a2954a9febbb42bfade9d41e506828f7bff13.svg)\n\n\n    The annual interest rate of the loan is\n$\\answer{3.08 \\%}$\n\n- Using the TVM Solver, we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ae5cf580-ab59-40fb-8ced-4d26e74bd0d2/images/1a82f790-922b-439e-b454-6c453f202291/405e9952db0082ca8955bbdaa92e691e8b526e72.svg)\n\n\n  The final payment after $5$ years is\n$\\answer{51 533}$\n- We can find the amount of interest Nathan saves by finding the\ndifference between the total amount paid without the $5$ year final\npayment, and the total amount with making the $5$ year final\npayment, as follows\n\n  $$\n  \\begin{aligned}\n  \\text{Amount saved} &= (127\\,500+ 16\\,500)-[(5\\times 12 \\times 1500)+51\\,533]\\\\[8pt]\n  &\\hspace{0.5em}\\answer{=\\$2\\,467}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '19',
    difficultyLevel: '3'
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
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'The diagram below shows a straight line $L_1$ which passes through\nA$(0,-2)$ and B$(8,0)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/47b65cc9-515d-4eb0-ae20-be61fd47f030/images/e476ece8-ad04-4e3b-8740-1be6a35203d6/dd225af0bca38352f0853ac9a9eb9c1cd3829f36.svg)\n\n\n\n- Write down the coordinates of the midpoint of line segment [AB].\n<span class="marks">[2]</span>\n\n\nAnother line, $L_2$ , intersects the $y$-axis at\nC$(0,3)$ and is parallel to $L_1$.\n\n- Find the gradient of $L_2$. <span class="marks">[2]</span>\n\n- Find the equation of $L_2$, giving your answer in the form\n$y = mx+c$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- $\\answer{(4,-1)}$\n- The gradient of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{12.2em} m_{L_2} &= m_{L_1}  \\hspace{3em} [\\text{since } L_2 \\parallel L_1] \\\\[6pt]\n  &= \\dfrac{0-(-2)}{8-0} \\hspace{3em} [\\text{by gradient formula}] \\\\[8pt]\n  &\\answer{= 0.25}\\end{aligned}\n  $$\n\n- Using the point-gradient formula with C$(0,3)$ and $m = 0.25$, we\nget\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\\\[6pt]\n  y - 3 &= 0.25\\hspace{0.05em}(x-0) \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{1.3em} \\answer{y = 0.25x + 3}\n  $$\n\n',
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
      'The diagram shows the straight line $L_1$, which intersects the $x$-axis\nat A$(-8,0)$ and the $y$-axis at B$(0,4)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/4b3e7801-0e33-489b-9a1d-49c48847723a/images/d9f6f8fd-c35c-40a4-938d-58f9cb89eef1/c40083b445b05ffe171f553a310158b5de8ce983.svg)\n\n\n\n- Write down the coordinates of M, the midpoint of line segment\n[AB].<span class="marks">[2]</span>\n\n- Calculate the gradient of $L_1$. <span class="marks">[2]</span>\n\n\nThe line $L_2$ is perpendicular to $L_1$ and passes through the point\nP$(1,2)$.\n\n- Find the equation of $L_2$. Give your answer in the form\n$y = mx + c$. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- M:  $\\answer{(-4,2)}$\n- The gradient of $L_1$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{11.9em} m_{L_1} &= \\dfrac{4-0}{0-(-8)} \\hspace{3em} [\\text{by gradient formula}] \\\\[8pt]\n  &\\answer{= 0.5}\\end{aligned}\n  $$\n\n- The gradient of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.1em} m_{L_2} &= -\\dfrac{1}{m_{L_1}} \\hspace{3em} [\\text{since }L_2 \\perp L_1] \\\\[5pt]\n  &= -\\dfrac{1}{0.5} \\\\[12pt]\n  &= -2\\end{aligned}\n  $$\n\n  Hence, using the point-gradient formula with\nP$(1,2)$ and $m = -2$, we get\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\hspace{0.7em} \\\\[6pt]\n  y - 2 &= -2\\hspace{0.05em}(x-1) \\\\[6pt]\n  y - 2 &= -2x + 2 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.5em} \\answer{y = -2x + 4}\n  $$\n\n',
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
      'The straight line, $L_1$, has the equation $y = \\dfrac{1}{3}x-5$.\n\n- Write down the $y$-intercept of $L_1$. <span class="marks">[1]</span>\n\n- Write down the gradient of $L_1$. <span class="marks">[1]</span>\n\n\nThe line $L_2$ is perpendicular to $L_1$ and passes through the point\nA$(2,4)$.\n\n- Find the gradient of $L_2$. <span class="marks">[1]</span>\n\n- Find the equation of $L_2$, giving your answer in the form\n$ax + by + d = 0$,\nwhere $a,b,d \\in \\mathbb{Z}$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{\\mathrm{B}(0,-5)}$\n- $\\answer{m_{L_1} = 1/3}$\n- The gradient of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.8em} m_{L_2} &= -\\dfrac{1}{m_{L_1}} \\hspace{3em} [\\text{since }L_2 \\perp L_1] \\\\[6pt]\n  &= -\\dfrac{1}{1/3} \\\\[10pt]\n  &\\answer{= -3}\\end{aligned}\n  $$\n\n- Using the point-gradient formula with A$(2,4)$ and $m = -3$, we find\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\\\[6pt]\n  y - 4 &= -3(x-2) \\\\[6pt]\n  y - 4 &= -3x+6 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{3x + y - 10 = 0} \\hspace{6.3em}\n  $$\n\n',
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
      'The equation of a line $L_1$ is $y = 0.5x + p$. The point A$(2,-1)$ lies\non $L_1$.\n\n- Find the value of $p$. <span class="marks">[2]</span>\n\n\nA second line, $L_2$ , is perpendicular to $L_1$\nand intersects $L_1$ at point A.\n\n- Find the gradient of $L_2$. <span class="marks">[1]</span>\n\n- Find the equation of $L_2$. Give your answer in the form\n$y = mx+c$. <span class="marks">[2]</span>\n\n- Write your answer to part (c) in the form\n$ax + by + d = 0$, where $a, b, d \\in \\mathbb{Z}$.<span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Substituting $x = 2$ and $y = -1$ in the equation of $L_1$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.2em}  -1 = 0.5(2) + p \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{p = -2}\n  $$\n\n- The gradient of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{9.8em} m_{L_2} &= -\\dfrac{1}{m_{L_1}} \\hspace{3em} [\\text{since }L_2 \\perp L_1] \\\\[6pt]\n  &= -\\dfrac{1}{0.5} \\\\[12pt]\n  &\\answer{= -2}\\end{aligned}\n  $$\n\n- Using the point-gradient formula with A$(2,-1)$ and $m = -2$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\\\[6pt]\n  y - (-1) &= -2\\hspace{0.05em}(x-2) \\hspace{0.25em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2.2em} \\answer{y = -2x + 3}\n  $$\n\n- $\\answer{2x + y - 3 = 0}$\n',
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
      'The equation of a line $L_1$ is $y - 3x + 5 = 0$.\n\n- For the line $L_1$, find:\n  \n  - the $x$-intercept;\n  - the gradient. <span class="marks">[2]</span>\n\n\n\nA second line, $L_2$, intersects the $y$-axis at P$(0,2)$ and is\nparallel to $L_1$.\n\n- Find the equation of $L_2$. Give your answer in the form\n$y = mx+c$. <span class="marks">[1]</span>\n\n\nA third line, $L_3$, passes through the point Q$(3,1)$ and is\nperpendicular to $L_1$.\n\n- Find the gradient of the line $L_3$. <span class="marks">[1]</span>\n\n- Find the equation of $L_3$, giving your answer in the form\n$ax + by + d = 0$,\nwhere $a, b, d \\in \\mathbb{Z}$.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - Substituting $y = 0$ in the equation of $L_1$, we have\n\n    $$\n    \\begin{aligned}\n    0 - 3x + 5 &= 0 \\hspace{2.3em} \\\\[9pt]\n    5 &= 3x \\\\[4pt]\n    x &= \\dfrac{5}{3}\\end{aligned}\n    $$\n\n    Hence the point\n$\\answer{\\text{A}(5/3,0)}$\nis the $x$-intercept of $L_1$.\n  - If we rewrite the equation of $L_1$ in the form $y = mx + c$, we\nhave\n\n    $$\n    \\begin{aligned}\n    y - 3x + 5 &= 0 \\\\[6pt]\n    y &= 3x - 5 \\end{aligned}\n    $$\n\n    Hence the gradient of $L_1$ is\n$\\answer{m_{L_1} = 3}$\n\n- The gradient of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.9em} m_{L_2} &= m_{L_1} \\hspace{3em} [\\text{since }L_2 \\parallel L_1] \\\\[6pt]\n  &= 3\\end{aligned}\n  $$\n\n  Hence, using the point-gradient formula with\nP$(0,2)$ and $m = 3$, we get\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\hspace{0.6em} \\\\[6pt]\n  y - 2 &= 3\\hspace{0.05em}(x-0) \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{y = 3x + 2} \\hspace{0.1em}\n  $$\n\n- The gradient of $L_3$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.2em} m_{L_3} &= -\\dfrac{1}{m_{L_1}} \\hspace{3em} [\\text{since }L_3 \\perp L_1] \\\\[6pt]\n  &\\answer{= -\\dfrac{1}{3}}\\end{aligned}\n  $$\n\n- Using the point-gradient formula with Q$(3,1)$ and $m = -1/3$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\hspace{0.7em} \\\\[6pt]\n  y - 1 &= -\\dfrac{1}{3}\\hspace{0.05em}(x-3) \\\\[8pt]\n  3y - 3 &= -x + 3 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{x + 3y - 6 = 0} \\hspace{6.5em}\n  $$\n\n',
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
      'The coordinates of point K are $(-2,-3)$ and the coordinates of point N\nare $(8,6)$. M is the midpoint of [KN].\n\n- Find the coordinates of M. <span class="marks">[2]</span>  \n\n$L_1$ is the line which passes through K and N.\n\n- Find the gradient of $L_1$. <span class="marks">[2]</span>  \n\nA new line, $L_2$, is perpendicular to $L_1$ and passes through M.\n\n- \n  - Write down the gradient of $L_2$.\n  - Write down the equation of $L_2$ in the form $y = mx + c$.\n<span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- Using the coordinates of a midpoint formula, we get\n\n  $$\n  \\begin{aligned}\n  \\text M &= \\left(\\dfrac {x_1+x_2} 2, \\dfrac {y_1 + y_2} 2\\right)\\rule[-4mm]{0pt}{3mm}\\\\\n  & = \\left(\\dfrac {-2 + 8} 2, \\dfrac {-3 + 6} 2\\right)\\rule[-4mm]{0pt}{10mm}\\\\\n  &\\answer{  = \\left(3, \\dfrac 3 2\\right)}   \\rule[0mm]{0pt}{6mm}\\end{aligned}\n  $$\n\n- Using the gradient formula, we obtain\n\n  $$\n  \\begin{aligned}\n  m_{L_1} &=  \\dfrac {y_2 - y_1} {x_2 - x_1}\\rule[-3.5mm]{0pt}{4mm}\\\\\n  & = \\dfrac {6 - (-3)}{8 - (-2)}\\rule[-3.5mm]{0pt}{9mm}\\\\\n  &\\answer{  = \\dfrac {9} {10}}\\rule[0mm]{0pt}{5.5mm}\\\\\n  \\end{aligned}\n  $$\n\n- \n  - Since $L_2$ is perpendicular to $L_1$, then\n\n    $$\n    \\begin{aligned}\n    m_{L_2} & = -\\dfrac 1 {m_{L_1}}\\hspace{5mm}\\\\[6pt]\n    &\\answer{  = -\\dfrac {10}{9}}\\\\\n    \\end{aligned}\n    $$\n\n  - From (c) (i) we have $y = -\\dfrac {10}{9} \\,x + c$. To find $c$\nwe substitute the coordinates of M into the equation (since\n$L_2$ passes through M).\n\n    $$\n    \\begin{aligned}\n    \\dfrac 3 2  & = -\\dfrac {10} {9} \\left(3 \\right) + c\\rule[-3.5mm]{0pt}{4mm}\\\\\n    \\dfrac 3 2  & = -\\dfrac {10}{3} + c\\rule[-3.5mm]{0pt}{9mm}\\\\\n    c & = \\dfrac 3 2 + \\dfrac {10} {3}\\rule[-3.5mm]{0pt}{9mm}\\\\\n    c & = \\dfrac {29}{6}\\rule[0mm]{0pt}{5.5mm}\\\\\n    \\end{aligned}\n    $$\n\n    Hence the equation of $L_2$ is\n\n    $$\n    \\begin{aligned}\n    &\\answer{ y = -\\dfrac {10} {9}\\, x + \\dfrac {29}{6}}\\end{aligned}\n    $$\n\n\n',
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
    title: 'Question 8',
    content:
      'The coordinates of point P are $(-4,6)$ and the coordinates of point Q\nare $(5,1)$. M is the midpoint of [PQ].\n\n- Find the coordinates of M. <span class="marks">[2]</span>  \n\n$L_1$ is the line which passes through P and Q.\n\n- Find the gradient of $L_1$. <span class="marks">[2]</span>  \n\nA new line, $L_2$, is perpendicular to $L_1$ and passes through M.\n\n- \n  - Write down the gradient of $L_2$.\n  - Write down the equation of $L_2$ in the form $y = mx + c$.\n<span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- Using the coordinates of a midpoint formula, we get\n\n  $$\n  \\begin{aligned}\n  \\text M &= \\left(\\dfrac {x_1+x_2} 2, \\dfrac {y_1 + y_2} 2\\right)\\rule[-4mm]{0pt}{10mm}\\\\\n  & = \\left(\\dfrac {-4+5} 2, \\dfrac {6+1} 2\\right)\\rule[-4mm]{0pt}{10mm}\\\\\n  &\\answer{  = \\left(\\dfrac 1 2, \\dfrac 7 2\\right)}\\rule[-4mm]{0pt}{10mm}    \\end{aligned}\n  $$\n\n- Using the gradient formula, we obtain\n\n  $$\n  \\begin{aligned}\n  m_{L_1} &= \\dfrac {y_2 - y_1} {x_2 - x_1} \\rule[-4mm]{0pt}{0mm}\\\\\n  & = \\dfrac {1 - 6}{5-(-4)} \\rule[-4mm]{0pt}{10mm}\\\\\n  &\\answer{  = -\\dfrac 5 9}\\rule[0mm]{0pt}{6mm}\\\\\n  \\end{aligned}\n  $$\n\n- \n  - Since $L_2$ is perpendicular to $L_1$, then\n\n    $$\n    \\begin{aligned}\n    m_{L_2}     & = -\\dfrac 1 {m_{L_1}}\\hspace{5mm}\\\\[6pt]\n    &\\answer{  = \\dfrac 9 5}\\\\\n    \\end{aligned}\n    $$\n\n  - From (c) (i) we have $y = \\dfrac 9 5 \\,x + c$. To find $c$ we\nsubstitute the coordinates of M into the equation (since $L_2$\npasses through M).\n\n    $$\n    \\begin{aligned}\n    \\dfrac 7 2  & = \\dfrac 9 5 \\left(\\dfrac 1 2 \\right) + c\\rule[-3.5mm]{0pt}{9mm}\\\\\n    \\dfrac 7 2  & = \\dfrac {9}{10} + c\\rule[-3.5mm]{0pt}{9mm}\\\\\n    c       & = \\dfrac 7 2 - \\dfrac 9 {10}\\rule[-3.5mm]{0pt}{9mm}\\\\\n    c       & = \\dfrac {13}{5}\\rule[-3.5mm]{0pt}{9mm}\\\\\n    \\end{aligned}\n    $$\n\n    Hence the equation of $L_2$ is\n\n    $$\n    \\begin{aligned}\n    &\\answer{ y = \\dfrac 9 5\\, x + \\dfrac {13}{5}}\\end{aligned}\n    $$\n\n\n',
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
    difficultyLevel: '2.5'
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
    difficultyLevel: '2.5'
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
    difficultyLevel: '2.5'
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
    difficultyLevel: '3'
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
    difficultyLevel: '3'
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
    difficultyLevel: '3'
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
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
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
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'The following transition diagram reflects the proportions of customers\nthat Qatar Airways loses to its competitor airlines each year, and vice\nversa.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/2f9ccd80-6300-412f-90ea-53726fc69be7/images/26449ee2-0052-4df5-a949-1997c7425184/308b6d9eb69975425c605db88592be5b85b57e9d.svg)\n\n\n\n- Construct a transition matrix $\\bm{T}$ with elements in decimal\nform. <span class="marks">[2]</span>\n\n- Interpret the meaning of the elements with values\n  \n  - $0.15$\n  - $0.75$ <span class="marks">[2]</span>\n\n\n\nAssume that the initial\nstate of the market share is\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/2f9ccd80-6300-412f-90ea-53726fc69be7/images/f74c699d-0567-4091-82df-2cf5fc417b6a/06b07db8a6fa35def4f5282db4546445f3b775e1.svg)\n\n\n.\n\n- Determine the market share of Qatar Airways after $5$\nyears. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- The given diagram can be described using the table below.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/2f9ccd80-6300-412f-90ea-53726fc69be7/images/9df7d112-04ca-434f-b846-40ed141d5326/d134af8b749c6f2f920f57dbbfdfcbdeeea7ecc4.svg)\n\n\n  Hence the transition matrix is\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/2f9ccd80-6300-412f-90ea-53726fc69be7/images/d1c52378-3bc2-41c9-9ed1-78e975cb8f79/4dcc8dc6a4c306bad34756052dbbe1af3dfcd00d.svg)\n\n\n- \n  - $15\\%$ of customers who are using a competitor airline will change to using Qatar Airways next year.\n  - Qatar Airways will retain $75\\%$ of their customer next year.\n\n- After $5$ years, the market share will be\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/2f9ccd80-6300-412f-90ea-53726fc69be7/images/c44f9d71-1f51-4bda-add9-2fa1a141e161/c7ce4927a1747016d7b643dc53df382e5c021359.svg)\n\n\n  $\\answer{\\text{Hence the market share of Qatar Airways after \\(5\\) years will be \\(42.4\\%\\)}}$.\n',
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
      'There are $225$ senior students studying Computer Science and $169$\nsenior students studying Mathematics at a university. According to an\nacademic survey, $20$ % of these\n$\\text{students}$ tell they will pursue a postgraduate degree,\n$8$ % will start a business,\n$52$ % will get employed,\n$15$ % will start freelancing and the remaining\nstudents will become $\\text{research}$ assistants.\nThe column matrix\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/362bbc2e-c246-4cbd-8513-5f628829a15c/images/7ec94812-b2c0-4cd6-88f9-64fa3447a6fe/5caf9380b8b050f42e1a579be00c4669ebfa829c.svg)\n\n\nrepresents the number of senior students studying\nComputer Science and Mathematics.\n\n- Write down a row matrix, $\\bm{R}$, to represent the percentages, in\ndecimal form, of senior students who will choose one of the five\nroutes after graduation. <span class="marks">[1]</span>\n\n- Hence calculate the product $\\bm{A} = \\bm{SR}$. Give each element\n$a_{ij}$ of the matrix $\\bm{A}$ correct to the nearest whole\nnumber. <span class="marks">[1]</span>\n\n- In the context of this problem, explain what the element $a_{15}$\nmeans. <span class="marks">[1]</span>\n\n\nThe cost for textbooks per year for a computer science student is\n$\\$1245$ and for a mathematics student is $\\$889$.\n\n- Write down a matrix calculation that gives the total cost\nfor textbooks paid by all the senior students studying Computer\nScience and Mathematics. <span class="marks">[1]</span>\n\n- Hence calculate the total cost for all the textbooks. Give\nyour answer correct to the nearest dollar. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- ![SkillUpp Image](https://assets.revisionvillage.com/public/question/362bbc2e-c246-4cbd-8513-5f628829a15c/images/aea3af63-6c6a-426d-b6e9-37f779eec65a/c65fdf78052606ee967a6a262be730ed756b75af.svg)\n\n\n- Hence we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/362bbc2e-c246-4cbd-8513-5f628829a15c/images/93ac5524-2f88-4430-bdc9-39c319cad253/b5551301d218893752ada4c83bb9c025758bca14.svg)\n\n\n- The element $a_{15} = 11$, in the first row and fifth column of the matrix $A$, is~the number of senior computer science students who will become research assistants after graduation.\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/362bbc2e-c246-4cbd-8513-5f628829a15c/images/8ee747be-94da-491d-8c30-304428d05d5a/091994329b4567b16ab67bd75ad559047967fc9a.svg)\n\n\n- Hence we obtain\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/362bbc2e-c246-4cbd-8513-5f628829a15c/images/947535e6-2f51-4700-8a05-3f83fdca9f4d/98907a25cbaef0528aa86b92108d14fd8e2435e7.svg)\n\n\n  Hence the total cost for the textbooks is\n$\\answer{430\\hspace{0.15em}366}$\n',
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
    title: 'Question 3',
    content:
      'Domino\'s Pizza owns two pizzerias at Asia Mall and Metrocity shopping\ncentres. The number of Pacific Veggie, Pepperoni and Buffalo Chicken\nlarge pizzas sold during the last week at the two pizzerias is shown in\nthe table below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/20389bbd-bfdb-40c9-a9b8-2d585ab7d725/images/2f8544bc-f5eb-4ec6-acde-66956f24c09f/5342ef879475b5e4e4c95c5cb30aecc05a330cd4.svg)\n\n\nThe selling price of each type of pizza is shown in the table below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/20389bbd-bfdb-40c9-a9b8-2d585ab7d725/images/528ca57a-465e-4d5d-a44c-2dd7bfe18925/b3146200791f40185f0a203757e31609f941f9c7.svg)\n\n\n\n- Write down a matrix multiplication that finds the total amount of\nincome from sales of the three types of pizzas that each pizzeria\ngenerated during the last week. <span class="marks">[2]</span>\n\n- Hence find the total amount of income from sales of the three types\nof pizzas that each pizzeria generated during the last week. Give\nyour answers correct to two decimal places. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/20389bbd-bfdb-40c9-a9b8-2d585ab7d725/images/891db1c6-1183-41f0-aaa6-f0a044ea174b/4e3cd80b9726f7532eb4f46c5b13773ca433252d.svg)\n\n\n- Hence we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/20389bbd-bfdb-40c9-a9b8-2d585ab7d725/images/5f736642-f578-4855-80c9-f8386e13ee8d/151bb0c0d8a7da83910a81a8e5d549e71e273d31.svg)\n\n\n  Hence the total amount of income from sales of the three types of\npizzas are\n\n  $$\n  \\begin{aligned}\n  \\text{Asia Mall} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{\\$25\\hspace{0.15em}117.33} \\\\[8pt]\n  \\text{Metrocity} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{\\$28\\hspace{0.15em}260.09}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 4',
    content:
      'Data scientists, web designers and developers are paid according to an\n$\\text{industry}$ standard. The total annual salary spend for\nthree tech startups paying to the industry standard are summarised in\nthe table below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/39e56c4d-e2ed-4895-8314-4a98626d3fa9/images/51d9eae3-d31b-4473-ac07-bff89da9bf91/5881581baa8ab10a2984e4bc9a4c51bbabb53f5c.svg)\n\n\nLet $x$, $y$ and $z$ represent the salaries, in thousand dollars, for\ndata scientists, web designers and web developers respectively.\n\n- Write down a system of three linear equations in terms of $x$, $y$\nand $z$\nthat represent the information in the table above. <span class="marks">[2]</span>\n\n- Using matrices, solve the system of linear equations from part\n(a)\nto determine the salaries for the three roles. <span class="marks">[2]</span>\n\n\nData Quant is a tech startup that also pays to the industry standard and\nemploys $10$ data scientists, $4$ web designers and $6$ web developers.\n\n- Calculate the exact value of the total salary bill for Data\nQuant. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \n  \\answer{\\begin{array}{rcccccl}\n  x &+& 4y &+& 4z &=& 531.3 \\\\[3pt]\n  8x &+& 2y &+& 5z &=& 1164 \\\\[3pt]\n  4x &+& 5y &+& 10z &=& 1224.4\n  \\end{array}} \\qref{(1)} \\hspace{2em}\\end{aligned}\n  $$\n\n- If we express the system of linear equations $(1)$ as a matrix\nequation, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/39e56c4d-e2ed-4895-8314-4a98626d3fa9/images/af6f2e62-ef6d-4814-8d70-04d899be2822/5bd3febb65c57b9290269b33685e039747728b41.svg)\n\n\n  Hence, if we solve the matrix equation $(2)$, we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/39e56c4d-e2ed-4895-8314-4a98626d3fa9/images/74d899b8-859b-4f8c-9f53-0442aab6f551/feafda106f57e3c9281f5952b79ab385ba004425.svg)\n\n\n  Hence the salaries for the three roles are\n\n  $$\n  \\begin{aligned}\n  \\text{Data Scientist}&: \\hspace{0.75em} \\hspace{0.525em}\\answer{\\$96\\hspace{0.15em}100} \\\\[6pt]\n  \\text{Web Designer}&: \\hspace{0.75em} \\hspace{0.525em}\\answer{\\$49\\hspace{0.15em}600} \\\\[6pt]\n  \\text{Web Developer}&: \\hspace{0.75em} \\hspace{0.525em}\\answer{\\$59\\hspace{0.15em}200}\\end{aligned}\n  $$\n\n- The total salary bill for Data Quant is\n\n  $$\n  \\begin{aligned}\n  10\\times96\\hspace{0.15em}100 + 4\\times49\\hspace{0.15em}600 + 6\\times59\\hspace{0.15em}200 &= \\hspace{0.525em}\\answer{\\$1\\hspace{0.15em}514\\hspace{0.15em}600} \\hspace{1em}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 5',
    content:
      'The Brown, Miller and Taylor families pay utility bills for their houses\neach month. The table below shows the amount of electricity, water and\ngas consumed during January by each family, and the total cost of the\nutilities.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/bcc63680-86b3-473a-b161-293755d5dff2/images/0ed8b5d3-0b26-4aaa-9363-4388163154b1/4c79f485c80ba0239ecc4cfcc637b51df6e48bea.svg)\n\n\nLet $x$, $y$ and $z$ represent the prices, in dollars, for\n$1$ kWh of electricity,\n$1$ m$^3$ of water and\n$1$ m$^3$ of gas, respectively.\n\n- Write down a system of three linear equations in terms of $x$, $y$\nand $z$\nthat represents the information in the table above. <span class="marks">[2]</span>\n\n- Using matrices, find the price for each of the utility. <span class="marks">[2]</span>\n\n\nThe Smith family also pay utility bills each month. The table below\nshows the amount of electricity, water and gas consumed during January\nby the Smith family.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/bcc63680-86b3-473a-b161-293755d5dff2/images/ddce5317-71bc-4d06-bd45-53079b3092f5/00ca88f1397a994795e3b84ae8c62e66b719b0b0.svg)\n\n\n\n- Calculate the total cost of the utilities for the Smiths.\n<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \n  \\answer{\\begin{array}{rcccccl}\n  950x &+& 72y &+& 448z &=& 343.59 \\\\[3pt]\n  788x &+& 88y &+& 356z &=& 314.68 \\\\[3pt]\n  532x &+& 49y &+& 298z &=& 219.43\n  \\end{array}} \\qref{(1)} \\hspace{0.6em}\\end{aligned}\n  $$\n\n- If we express the system of linear equations $(1)$ as a matrix\nequation, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/bcc63680-86b3-473a-b161-293755d5dff2/images/271993c3-62c6-4385-9f6a-69adee2c3fcd/30358a75db00011708b84ec520ef55df879b2a52.svg)\n\n\n  Hence, if we solve the matrix equation $(2)$, we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/bcc63680-86b3-473a-b161-293755d5dff2/images/e9419910-5963-43c3-ae96-10010f32e1ea/d50fe173dd0736bf21c2972d4d6e6feec7a7d478.svg)\n\n\n  Hence the prices for the utilities are\n\n  $$\n  \\begin{aligned}\n  \\text{Electricity} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{10.5 \\text{ cents per kWh}} \\\\[6pt]\n  \\text{Water} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{1.24 \\text{ dollars per }m^3} \\\\[6pt]\n  \\text{Gas} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{34.5 \\text{ cents per }m^3}\\end{aligned}\n  $$\n\n- The total cost of the utilities for the Smiths is\n\n  $$\n  \\begin{aligned}\n  1124\\times0.105 + 115\\times1.24 + 598\\times0.345 &= \\$466.93 \\approx \\hspace{0.525em}\\answer{\\$467}\\end{aligned}\n  $$\n\n',
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
      'Taste of Home Magazine recommends using a combination of Cheddar, Brie\nand Swiss when putting together cheese boards for parties. The\nrecommended total cheese board size for a party of\n$10$ - $15$ people is\n$1$ kilogram. The table below shows the weight, in hundred of grams, of\neach kind of cheese required to make one kilogram of cheese combination,\nand the cost of making each combination.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/398066d9-a332-4209-90e9-4853461fb944/images/ce8d9594-1464-4833-a91b-37c05aab6a9c/1f95e531ff9a99fac83619dc0ed06ffca82c640c.svg)\n\n\n\n- By setting up a system of linear equations and using matrices, find\nthe price per kilogram of each type of cheese. <span class="marks">[4]</span>\n\n\nJohn prepares a cheese board with proportion of each cheese type, in\nhundred grams, as shown in the table below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/398066d9-a332-4209-90e9-4853461fb944/images/6da9718c-0e50-4f4d-aaf2-c86f790a573e/585de61d3f014a0443069387501b6401e1d28016.svg)\n\n\n\n- Calculate the amount of money John spent on cheese.\n<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Letting $x$, $y$ and $z$ represent the cost per kilogram of Cheddar,\nBrie and Swiss respectively, we have\n\n  $$\n  \\begin{aligned}\n  \n  \\begin{array}{rcccccl}\n  0.4x &+& 0.3y &+& 0.3z &=& 13.50 \\\\[3pt]\n  0.2x &+& 0.6y &+& 0.2z &=& 17.30 \\\\[3pt]\n  0.5x &+& 0.2y &+& 0.3z &=& 12.30\n  \\end{array} \\hspace{0.75em} \\qref{(1)}\\end{aligned}\n  $$\n\n  If we express\nthe system of linear equations $(1)$ as a matrix equation, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/398066d9-a332-4209-90e9-4853461fb944/images/fb0f8bb7-27c4-45fe-99dd-ce17a12cf9f4/2039bef8f45a8040f036a4cc94b8dcaf5b977a13.svg)\n\n\n  Hence, if we solve the matrix equation $(2)$, we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/398066d9-a332-4209-90e9-4853461fb944/images/8263bf2a-264c-431f-bfdf-dc62abbf95aa/730c2a8cba4ad3132e7b19b40901796479a3143d.svg)\n\n\n  Hence the prices of the three cheeses are\n\n  $$\n  \\begin{aligned}\n  \\text{Cheddar} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{\\$10.5 \\text{ per kg}} \\\\[6pt]\n  \\text{Brie} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{\\$22.5 \\text{ per kg}} \\\\[6pt]\n  \\text{Swiss} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{\\$8.50 \\text{ per kg}}\\end{aligned}\n  $$\n\n- The amount John spent on cheese is\n\n  $$\n  \\begin{aligned}\n  0.4\\times10.5 + 0.2\\times22.5 + 0.4\\times8.50 &= \\hspace{0.525em}\\answer{\\$12.1}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 7',
    content:
      'Ali is training an AI powered model car in decision making. The training track is shown in the diagram below. $\\textbf{The car starts at point}$ $\\bm{A}$ and can move along any edge to a subsequent point.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/67b757d0-1187-4fb9-851f-51bc6e57acd8/images/e56d3b4f-5d34-4d5e-8a0e-beb03b77d1f4/1188a.JPG)\n\n\nAli writes a set of rules for the car to follow, based on the alphabet:\n\n- Never go to a point that is earlier in the alphabet than the current point, unless there is no other option. For example, if the car is at point $C$, the car can move to point $D$ or point $F$, but not point $B$. If the car is at point $F$, it can move to point $B$, point $C$ or point $E$.\n- Choose the next point with random probability. For example, if the car is at point $C$, there is a $50\\%$ chance it will move to point $D$ next and a $50\\%$ chance it will move to point $F$. If the car is at point $F$, the probability it will move to point $B, C$ or $E$ are all $\\frac{1}{3}$.\n\nA partially complete transition matrix, $\\bm{T}$, is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/67b757d0-1187-4fb9-851f-51bc6e57acd8/images/a427101e-e220-4474-91c9-6304ee772dd9/1188b.JPG)\n\n\n\n- On the transition matrix above, complete the columns for $C$ and $D$.\t\t <span class="marks">[2]</span>\n\n- Calculate the probability that after three moves, the car is at point $C$.\t<span class="marks">[2]</span>\n\n\nAli instructs the car to make as many moves as possible over the course of an hour, then stop at the point it has reached.\n\n- State the most likely point for the car to be at when Ali returns. Justify your answer.\t\t <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- In a transition matrix, the columns represent the $\\textbf{current state}$ and the rows represent the $\\textbf{future state}$ after one transition.\n  Therefore, column $C$ will contain the probabilities of moving from point $C$ to any other point. We have been given this information in the question.\n  Column $D$ will contain the probabilities of moving from point $D$ to any other point. According to the rules, the car $\\textbf{cannot}$ move to $A$ or $C$, hence the $\\textbf{only}$ move is to point $E$, with probability $1$. We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/67b757d0-1187-4fb9-851f-51bc6e57acd8/images/4fc4aec8-4ef3-40fe-806c-b0afe6068c88/1188c.JPG)\n\n\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A2}}\t\n  \\end{aligned}\n  $$\n\n- We are initially at point $A$ (this is $s_0$), and have to make $3$ moves. Our calculation is therefore\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/67b757d0-1187-4fb9-851f-51bc6e57acd8/images/2a3d5fc6-71b2-4420-8657-86ed6a04bfdf/1188f.JPG)\n\n\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/67b757d0-1187-4fb9-851f-51bc6e57acd8/images/e9229210-5cce-497b-b5be-2839d2ffba02/1188g.JPG)\n\n\n  $\\boxed{\\text{The probability of being at point } C \\text{ after three moves is } \\tfrac{1}{6}.}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- In a similar calculation to the one we performed in part (b), we can investigate the probabilities of being at a certain point after a large number of moves.\n  That is, investigate the probabilities in the matrix $\\bm{T}^n$, as $n \\to \\infty$.\n  The following calculation shows $\\bm{T}^{100}$ and we can see that the rows have reached a steady state. Once a steady state has been reached, it will not change after that. We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/67b757d0-1187-4fb9-851f-51bc6e57acd8/images/9b8b97a7-15d7-4b2b-b620-a6d062368d14/1188e.JPG)\n\n\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  $\\answer{\\text{The most likely point for the car to be at is point $F$.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n',
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
    title: 'Question 8',
    content:
      'Three Internet Service Providers (ISPs) are available in a small town.\nDuring the year, ISP A is expected to retain\n$85$ % of its customers;\n$10$ % will be lost to ISP B and\n$5$ % to ISP C. ISP B is expected to retain\n$80$ % of its customers;\n$10$ % will be lost to each of the other two\nISPs. ISP C is expected to retain $75$ % of its\ncustomers; $15$ % will be lost to ISP A and\n$10$ % to ISP B.\n\n- Write down a transition matrix that describes the exchange of market\nshares between the three ISPs during the year. <span class="marks">[2]</span>\n\n\nThe current market share held by ISP A is $0.2$, by ISP B is $0.3$ and\nby ISP C is $0.5$.\n\n- Find the market share held by each ISP after one year.\n<span class="marks">[2]</span>\n\n- Find the market share held by each ISP after five years if\nthe same trend of market share exchanges between the three ISPs\ncontinues. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d6684eb5-01ee-4b5b-95fd-592f62e3d2cb/images/e19f637a-e291-4552-a288-f561980d9487/9b7fee33c0563c94809983d0f10a2b44f67b1fc9.svg)\n\n\n  Hence the transition matrix is\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d6684eb5-01ee-4b5b-95fd-592f62e3d2cb/images/e80664ef-4772-4718-9913-46913e6e0d24/8d989e414b613ece00f5ca7eae128e4ca1622b72.svg)\n\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d6684eb5-01ee-4b5b-95fd-592f62e3d2cb/images/06e25b46-9c75-4f3e-803a-b725dfe8d97b/487e7dc74ae7b5ca2cdb2848d321bb3c12c6fe37.svg)\n\n\n  Hence the market share held by each ISP after one year are\n\n  $$\n  \\begin{aligned}\n  \\text{ISP A} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.275} \\hspace{3em} \\\\[6pt]\n  \\text{ISP B} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.310} \\\\[6pt]\n  \\text{ISP C} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.415}\\end{aligned}\n  $$\n\n- If the same trend of market share exchanges continues, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d6684eb5-01ee-4b5b-95fd-592f62e3d2cb/images/f9da9667-a490-4420-9d4f-f487bc6b2536/2866195161dd2a9d36dac9051ccfed16370638a8.svg)\n\n\n  Hence the market share held by each ISP after five years are\n\n  $$\n  \\begin{aligned}\n  \\text{ISP A} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.405} \\hspace{3em} \\\\[6pt]\n  \\text{ISP B} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.328} \\\\[6pt]\n  \\text{ISP C} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.267}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 9',
    content:
      'Two competing radio stations, station A and station B, each have\n$50$ % of the listener market at some point in\ntime. Over each one-year period, station A $\\text{manages}$ to\ntake away $15$ % of station B\'s share, and\nstation B manages to take away $10$ % of station\nA\'s share.\n\n- Write down a transition matrix that describes the exchange of market\nshares between the two stations over each one-year period.\n<span class="marks">[1]</span>\n\n- Find the market share held by each station after one year.\n<span class="marks">[2]</span>\n\n- Write down the market shares of stations A and B over a five-year\nperiod. <span class="marks">[2]</span>\n\n- Find the market share held by each station in the long term if\nthe same trend of market share exchanges between the two stations\ncontinues indefinitely. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/3a6fb7c9-4391-4fb5-9f41-6bdfa489414a/images/54ffa861-6b38-4ff0-9b37-a8ef4660d3eb/39d56000058c2681fea79f631694890f33a2b8e2.svg)\n\n\n  Hence the transition matrix is\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/3a6fb7c9-4391-4fb5-9f41-6bdfa489414a/images/8e3c3c5b-3a94-4987-b790-ec41e221aba4/d906107612de5fbb8f72aef6d46ba1533f2e6ceb.svg)\n\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/3a6fb7c9-4391-4fb5-9f41-6bdfa489414a/images/bd79191f-689b-4970-abcf-bb1d52affc21/6d53611fda5e706e691291c439155e26322c80d7.svg)\n\n\n  Hence the market share held by each station after one year are\n\n  $$\n  \\begin{aligned}\n  \\text{Station A} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.525} \\hspace{3em} \\\\[6pt]\n  \\text{Station B} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.475}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/3a6fb7c9-4391-4fb5-9f41-6bdfa489414a/images/b529b080-a804-4efc-81db-26b3c448cc95/96810039cd0f072be533e6164d111ed835e9f7da.svg)\n\n\n- Let $a$ and $b$ be the market shares held by stations A and B in the\nlong term.\n  We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/3a6fb7c9-4391-4fb5-9f41-6bdfa489414a/images/4b89e9a5-1e02-4513-9695-42f459376b1c/27c28d2d559359aa26e9e0b6e268d3c83cd7a82b.svg)\n\n\n  Hence we get\n\n  $$\n  \\begin{aligned}\n  \n  \\begin{array}{rcl}\n  \\hspace{8.8em} a + b &=& 1 \\hspace{3em} [\\text{100\\hspace{0.05em}\\% of the market}] \\\\[6pt]\n  0.10a - 0.15b &=& 0 \n  \\end{array} \\qref{(1)}\\end{aligned}\n  $$\n\n  If we solve the system of\nlinear equations $(1)$ for $a$ and $b$, we obtain\n\n  $$\n  \\begin{aligned}\n  \n  \\hspace{9.7em} \\begin{array}{rcl}\n  a &=& 0.6 \\\\[6pt]\n  b &=& 0.4\n  \\end{array}\\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence the market shares held by channels A and B in the long term\nare\n\n  $$\n  \\begin{aligned}\n  \\text{Station A} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.6} \\hspace{3em} \\\\[6pt]\n  \\text{Station B} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.4}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 10',
    content:
      'When a coin is thrown from the top of a skyscraper, its height above the\nground after $t$ seconds is given by $s(t) = at^2 + bt + c$, where\n$a,b,c \\in \\mathbb{R}$ and $s(t)$ is measured in metres. After $1$\nsecond, the coin is $179.3$ m above the ground;\nafter $2$ seconds, $188.2$ m; after $6$ seconds,\n$159.8$ m.\n\n- \n  - Write down a system of three linear equations in terms of $a$,\n$b$ and $c$.\n  - Hence find the values of $a$, $b$ and $c$. <span class="marks">[3]</span>\n\n\n- Find the height of the skyscraper. <span class="marks">[1]</span>\n\n- Find the time it takes for the coin to hit the ground. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - We have\n\n    $$\n    \\begin{aligned}\n    \n    \\answer{\\begin{array}{rcccccl}\n    a &+& b &+& c &=& 179.3 \\\\[3pt]\n    4a &+& 2b &+& c &=& 188.2 \\\\[3pt]\n    36a &+& 6b &+& c &=& 159.8\n    \\end{array}} \\qref{(1)}\\end{aligned}\n    $$\n\n  - If we express the system of linear equations $(1)$ as a matrix\nequation, we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/45dabcef-b9ef-4f62-87fe-f37674153ffe/images/3205da83-27aa-4a59-acd7-c2722a0e3a9c/13c88ece23638748c2e63548748180dced5a9e26.svg)\n\n\n    Hence, if we solve the matrix equation $(2)$, we get\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/45dabcef-b9ef-4f62-87fe-f37674153ffe/images/918f55b1-39bd-4ecb-8146-97ebf200d357/8c737a936777a47edd03c6c7de7ba744071b76ba.svg)\n\n\n    Hence we find\n$\\answer{a = -3.2, \\hspace{0.25em} b = 18.5, \\hspace{0.25em} c = 164}$\n\n- Evaluating $s(t)$ at $t = 0$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.9em} s(0) &= -3.2(0)^2 + 18.5(0) + 164 \\\\[6pt]\n  &\\answer{= 164 \\text{ m}}\\end{aligned}\n  $$\n\n- Solving the equation $s(t) = 0$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  -3.2t^2 + 18.5t + 164 &= 0 \\hspace{10.6em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{13.5em} \\answer{t \\approx 10.6 \\text{ seconds}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
      'Austin allocates a portion of his employment salary each month to\ninvesting and invests this money into two stock funds: A and B. He\nadjusts his investment portfolio each month according to the following\ntransition diagram.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/8318a37b-12b9-47f6-bffa-d16786b4d2b4/images/b3ea29d1-50e2-4994-8d85-5d913e72b303/d757d471211a2e088d1ccda7cdf3618fbe7eb4c2.svg)\n\n\n\n- Construct a transition matrix $\\bm{T}$ with elements in decimal\nform. <span class="marks">[2]</span>\n\n- Interpret the meaning of the elements with values\n  \n  - $0.1$\n  - $0.7$ <span class="marks">[2]</span>\n\n\n\nThe initial state of his\ninvestment portfolio is $100\\%$ in stock fund B.\n\n- \n  - Find the investment proportion in stock fund A after $3$ months.\n  - Determine the long term steady state proportion of his\ninvestment between the two stock funds. <span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- The given diagram can be described using the table below.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8318a37b-12b9-47f6-bffa-d16786b4d2b4/images/d6d33234-8f33-46aa-9446-41b8d28be120/d542444328236b9efce08a35ffec714b86e3ed6a.svg)\n\n\n  Hence the transition matrix is\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8318a37b-12b9-47f6-bffa-d16786b4d2b4/images/71ac630f-3173-4fd4-907a-ecb74c4cc822/fc04d13f21f72d23e242b17950cc55f1cd96150c.svg)\n\n\n- \n  - $10\\%$ of his investment in stock fund A will be re-allocated to invest in stock fund B next month.\n  - $70\\%$ of his investment in stock fund B will continue to be invested in stock fund B next month.\n\n- \n  - After $3$ months, his investment proportion between the two\nfunds will be\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8318a37b-12b9-47f6-bffa-d16786b4d2b4/images/e7c8c830-9a58-414a-ad1c-ad57a88efa7b/0e99c3229e0a2e62055586e70663c42603e754e0.svg)\n\n\n    $\\answer{\\text{The investment proportion in stock A after \\(3\\) months will be \\(58.8\\%\\)}}$.\n  - Let\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8318a37b-12b9-47f6-bffa-d16786b4d2b4/images/d61f65b3-fb60-4c5d-8b85-7e1136fa82a4/dbbe440f892490c3649e3046d5c732b6d2b45ec4.svg)\n\n\n    and consider the equation:\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8318a37b-12b9-47f6-bffa-d16786b4d2b4/images/e28972ee-b233-4605-ba71-44d27b4375be/f453d4c41e37a69a0a023a96973fd9537b078783.svg)\n\n\n    This gives us the system of equations:\n\n    $$\n    \\left \\{ \\begin{aligned}\n    0.9a + 0.3b &= a \\\\\n    0.1a + 0.7b &= b\n    \\end{aligned} \\right.\n    $$\n\n\n    $$\n    \\left \\{\\begin{aligned}\n    -0.1a + 0.3b &= 0 \\\\[3pt]\n    0.1a - 0.3b &= 0 \\phantom{\\hspace{0.9em}}\n    \\end{aligned}\\right.\n    $$\n\n    Solving the first equation will yield $a = 3b$. So we get\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8318a37b-12b9-47f6-bffa-d16786b4d2b4/images/596d361a-ee96-4aab-97c9-45899b07dbc1/a41b647c952aff4659f7a65f53883e552b3219bd.svg)\n\n\n    Since $\\bm{s}$ represents the percentages, its elements add up\nto $1$. Hence\n\n    $$\n    \\begin{aligned}\n    3b + b &= 1 \\\\[3pt]\n    4b &= 1 \\\\[3pt]\n    b &= 0.25 \\\\[3pt]\n    a &= 0.75\n    \\end{aligned}\n    $$\n\n    Therefore, the long term steady state\nproportions between the two stock funds is\n\n    $$\n    \\begin{aligned}\n    \\text{Stock fund A} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.75} \\hspace{3em} \\\\[6pt]\n    \\text{Stock fund B} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.25}\n    \\end{aligned}\n    $$\n\n\n',
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
    title: 'Question 12',
    content:
      'When a ball is thrown from the top of a tall building, its height above\nthe ground after $t$ seconds is given by\n$s(t) = at^2 + bt + c\\,,$ where\n$a,b,c \\in \\mathbb{R}$ and $s(t)$ is measured in metres. After $1$\nsecond, the ball is $84.3$ m above the ground;\nafter $2$ seconds, $93.9$ m; after $8$ seconds,\n$42.3$ m.\n\n- \n  - Write down a system of three linear equations in terms of $a$,\n$b$ and $c$.\n  - Use matrices to find the values of $a$, $b$ and $c$. <span class="marks">[3]</span>\n\n\n- Find the height of the building. <span class="marks">[1]</span>\n\n- Find the time it takes for the ball to hit the ground. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - We have\n\n    $$\n    \\begin{aligned}\n    \n    \\answer{\\begin{array}{rcccccl}\n    a &+& b &+& c &=& 84.3 \\\\[3pt]\n    4a &+& 2b &+& c &=& 93.9 \\\\[3pt]\n    64a &+& 8b &+& c &=& 42.3\n    \\end{array}} \\qref{(1)}\\end{aligned}\n    $$\n\n  - If we express the system of linear equations $(1)$ as a matrix\nequation, we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/fa6bc1e0-527f-4b17-bf69-2b0fc42d8867/images/865960d0-98ce-4b87-a675-6a46a2ee65ce/b40b58be9e04029307e50815631013b0e434f45c.svg)\n\n\n    Hence, if we solve the matrix equation $(2)$, we get\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/fa6bc1e0-527f-4b17-bf69-2b0fc42d8867/images/1b3b62dd-72c9-42d4-8867-f02c938bd983/04caede963f7db2aac1bc0812ea44cf5b6a29875.svg)\n\n\n    Hence we find\n$\\answer{a = -2.6, \\hspace{0.25em} b = 17.4, \\hspace{0.25em} c = 69.5}$\n\n- Evaluating $s(t)$ at $t = 0$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.2em} s(0) &= -2.6(0)^2 + 17.4(0) + 69.5 \\\\[6pt]\n  &\\answer{= 69.5 \\text{ m}}\\end{aligned}\n  $$\n\n- Solving the equation $s(t) = 0$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  -2.6t^2 + 17.4t + 69.5 &= 0 \\hspace{10.8em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{13.6em} \\answer{t \\approx 9.50 \\text{ seconds}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 13',
    content:
      'The vegetables sold at supermarkets in a town are supplied by three\nmajor retail suppliers: A, B and C. According to an analysis report,\nsupplier A retains $80$ % of their customers\neach year and lose $15$ % to supplier B and\n$5$ % to supplier C. Meanwhile, supplier B\nretains $70$ % of their customers each year and\nlose $20$ % to supplier A and\n$10$ % to supplier C. Supplier C retains\n$75$ % of their customers each year and lose\n$10$ % to supplier A and\n$15$ % to supplier B.\nThe report also shows that suppliers A, B and C currently hold a market\nshare of $50$ %, $25$ %\nand $25$ %,\nrespectively.\n\n- Find the market share held by each supplier after three years.\n<span class="marks">[4]</span>\n\n- Determine the steady state market share held by each supplier if the\nsame trend remains unchanged. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The given information can be summarised in the following table.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8e3729fb-cba1-48f9-b262-3642cfbf2a4d/images/7d8a8be1-573b-4681-92ef-6abaaa5a996e/5a6481e606fc6566e7985a561a2850f9f47a61ef.svg)\n\n\n  Hence the transition matrix is\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8e3729fb-cba1-48f9-b262-3642cfbf2a4d/images/80dfa063-4680-4d67-8fa8-0cf80d498e49/aa1cf5437d373a952178275da2aa67004c74c33f.svg)\n\n\n  and the initial state is\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8e3729fb-cba1-48f9-b262-3642cfbf2a4d/images/205ede05-666d-46fd-a223-094096915f17/86819e212139446ee1cfcc20ed08269322c0e8e6.svg)\n\n\n  After three years, the state of the market share would be\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8e3729fb-cba1-48f9-b262-3642cfbf2a4d/images/d1ff0b78-7fad-4ea6-b442-78cf5301a9e8/3eb0160eaba26f0b1aea54af74f69111716baae4.svg)\n\n\n  Thus, the market share held by each supplier after three years is\n\n  $$\n  \\begin{aligned}\n  \\text{Supplier A} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.454} \\hspace{3em} \\\\[6pt]\n  \\text{Supplier B} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.320} \\\\[6pt]\n  \\text{Supplier C} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.227}\n  \\end{aligned}\n  $$\n\n- Let $x$, $y$ and $z$ be the market shares held by suppliers A, B and\nC in the long term, respectively. Since this leads to a steady\nstate, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8e3729fb-cba1-48f9-b262-3642cfbf2a4d/images/de18af60-a9cf-4865-821e-1072d6a4145b/e55433df9cc5ab8b97341003a2ec44b43c1a12a5.svg)\n\n\n  The last row in the matrix equation above is resulted from the first\nand second rows (by adding the rows and tuning into negative). Hence\nwe can say that the last row is redundant. We can replace it with\n$x+y+z = 1$ as this represents $100\\hspace{0.05em}\\%$ the market.\nHence we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8e3729fb-cba1-48f9-b262-3642cfbf2a4d/images/2c0ff365-7f69-4480-be55-771a1aeba155/992bccb8ca80df88172522caa9ff299c3c6333c9.svg)\n\n\n  Thus, the long term steady state market\nshare held by each supplier is\n\n  $$\n  \\begin{aligned}\n  \\text{Supplier A} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.444} \\hspace{3em} \\\\[6pt]\n  \\text{Supplier B} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.333} \\\\[6pt]\n  \\text{Supplier C} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{0.222}\n  \\end{aligned}\n  $$\n\n',
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
    title: 'Question 14',
    content:
      'Laura creates a list of her favorite songs that includes three genres:\nJazz, Slow Rock and Country. After her current song ends she randomly\nselects the next song and the probabilities of genre of the next song\nare outlined in the following table.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/af9295d1-85bf-4a88-b559-5ec47c2066cd/images/daa05bb6-a0e7-48b6-8dab-6e6d47862521/3f8039b268704a957cd1f3549fbc55eddf494e05.svg)\n\n\nLaura starts her day with a Slow Rock song and is now listening to her\nfourth song.\n\n- Determine the genre of music she is currently most likely listening\nto. <span class="marks">[3]</span>\n\n- Determine which genre of music she listens to most over the long\nterm. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have the transition matrix $\\bm{T}$ and the initial state as\nfollows.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/af9295d1-85bf-4a88-b559-5ec47c2066cd/images/9423dc53-6d93-41d4-8625-78ecaeb70345/d414430718958e8fee8eadf7c4a88427e1957a1c.svg)\n\n\n  If the first song is the initial state,\n$\\bm{s_0}$, then the probabilities of the genre of song 4 can be\nfound by\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/af9295d1-85bf-4a88-b559-5ec47c2066cd/images/cbd484f3-bb92-4a90-97dc-81c4bb65bc70/a93fb725c0cc70666b003e464dcc775d83cbd8ad.svg)\n\n\n  $\\answer{\\text{Hence, the genre Laura is most likely listening to is Slow Rock.}}$\n- Solving matrix equation $\\bm{Ts} = \\bm{s}$, we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/af9295d1-85bf-4a88-b559-5ec47c2066cd/images/25e15a7a-4bba-4e47-b051-cfc7fd5441fc/f602e33493e695a752661b7547747c04609bc2e4.svg)\n\n\n  The third equation can be ignored as it is the sum of the first two\nequations and therefore redundant. We can replace it with\n$a + b + c = 1$ as the probabilities must sum to $1$. Hence we get\n\n  $$\n  \\left \\{ \\begin{aligned}\n  -0.4a + 0.2b +0.3c &= 0 \\\\[3pt]\n  0.2a - 0.5b + 0.4c &= 0 \\\\[3pt]\n  \\phantom{0.0}a + \\phantom{0.0}b + \\phantom{0.0}c &= 1\n  \\end{aligned} \\right.\n  $$\n\n  Using GDC to solve this system of linear equations, we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/af9295d1-85bf-4a88-b559-5ec47c2066cd/images/089e04bc-0e07-4496-81fd-f3a25139ba6b/8ddc0ea4113bec53443e08c08edf87e5d0049108.svg)\n\n\n  $\\answer{\\text{Therefore, over the long term, Laura listens to Jazz most often.}}$\n',
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
    title: 'Question 15',
    content:
      'Kim keeps $240$ chickens in two chicken coops that are connected by a gate so that the chickens can move between the coops when the gate is open. She keeps the gate closed during the day, but keeps the gate open overnight.\nKim records the number of chickens that are in coop A and coop B respectively, every night, before she opens the gate. She then records the number of chickens that are in each coop the next morning when she closes the gate.\nKim finds that every night, 20% of the chickens in coop A move to coop B, and $(100x)$% of the chickens in coop B move to coop A.\n\n- Copy and complete the following transition matrix, $\\bm{T}$, in terms of $x$, that describes the movement between the coops each night. <span class="marks">[1]</span>  \n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d40a6ea7-3d5e-40c7-bc0c-472fbaf615c8/images/400504a6-a9ff-4c31-908e-95365fc5873a/1199a.JPG)\n\n\nThe matrix $\\bm{T}$ has an eigenvalue $\\lambda_1=0.5$.\n\n- Determine the value of $x$. <span class="marks">[3]</span>  \n\nInitially, there are $30$ chickens in coop A and $210$ chickens in coop B.\n\n- Show that after 3 nights, there are more chickens in coop A than in coop B for the first time. <span class="marks">[3]</span>  \n\nThe other eigenvalue of matrix $\\bm{T}$ is $\\lambda_2=1$.\n\n- Find the eigenvectors of matrix $\\bm{T}$. <span class="marks">[5]</span>\n\n- Write the matrix $\\bm{T}^n$ in the form $\\bm{P}\\,\\bm{D}^n\\,\\bm{P}^{-1}$. <span class="marks">[1]</span>\n\n- Hence or otherwise, determine, after a long period of time, how many chickens there will be in coop A, and how many chickens in coop B. You may assume that the total number of chickens will remain unchanged.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- A transition matrix is set up so that the columns represent the current state, and the rows represent the future state after one transition. The position of the entry $0.2$, representing the $20\\%$ moving from A to B, tells us the order of the columns and rows, as shown:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d40a6ea7-3d5e-40c7-bc0c-472fbaf615c8/images/ddade603-af2f-4448-a257-d11ba83a7fd6/1199b.JPG)\n\n\n  The entries in each column must add up to $1$, therefore we have\n\n  $$\n  \\begin{align*}\n  &\\hspace{-6em}\\bm{T} =  \\begin{bmatrix*} \\answer{0.8} & x \\\\[4pt] \\hspace{0.5em}0.2 & \\answer{1-x} \\end{bmatrix*} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- To find the eigenvalues of a $2 \\times 2$ matrix, we use the formula $|\\bm{T} - \\lambda I|=0$. Using this formula with $\\lambda = 0.5$, we have\n\n  $$\n  \\begin{align*}\n  \\Bigg|\\begin{bmatrix} 0.8 - 0.5 & x \\\\[4pt] 0.2 & 1-x-0.5 \\end{bmatrix} \\Bigg| &= 0 \\tag*{\\textbf{(M1)}}\\\\[15pt]\n  0.3(0.5 - x) - (x)(0.2) &= 0 \\tag*{\\textbf{(M1)}}\\\\[9pt]\n  0.15 - 0.3x - 0.2x &= 0 \\\\[6pt]\n  &\\hspace{-0.9em}\\tcbhighmath{x = 0.3} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We know that $x=0.3$ and therefore $1-x=0.7$. Our matrix equation for the number of chickens in each coop after $3$ nights is as follows:\n\n  $$\n  \\begin{align*}\n  \\begin{bmatrix} 0.8 & 0.3 \\\\[4pt] 0.2 & 0.7 \\end{bmatrix}^3 \\,\\times \\, \\begin{bmatrix} 30 \\\\[4pt] 210 \\end{bmatrix}  &= \\begin{bmatrix} 129.75 \\\\[4pt] 110.25 \\end{bmatrix} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  This shows that after three nights, there are more chickens in coop A than in coop B $(129.75 > 110.25)$. To show that this is the $\\textbf{first}$ time that this has occurred, when can compute a similar calculation for the first night and the second night:\n\n  $$\n  \\begin{align*}\n  \\begin{bmatrix} 0.8 & 0.3 \\\\[4pt] 0.2 & 0.7 \\end{bmatrix}^1 \\,\\times \\, \\begin{bmatrix} 30 \\\\[4pt] 210 \\end{bmatrix}  &= \\begin{bmatrix} 87 \\\\[4pt] 153 \\end{bmatrix} \\tag*{\\textbf{A1}}\\\\[6pt]\n  \\begin{bmatrix} 0.8 & 0.3 \\\\[4pt] 0.2 & 0.7 \\end{bmatrix}^2 \\,\\times \\, \\begin{bmatrix} 30 \\\\[4pt] 210 \\end{bmatrix}  &= \\begin{bmatrix} 115.5 \\\\[4pt] 124.5 \\end{bmatrix} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  In both cases we see that the number in coop B is still greater than that in coop A.\n  Therefore, it as after $\\answer{\\text{$3$ nights}}$ that there are first more in coop A than B.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{AG}}\t\n  \\end{aligned}\n  $$\n\n- To find the eigenvectors of the $2 \\times 2$ matrix $\\bm{T}$, we solve the equation\n\n  $$\n  \\begin{align*}\n  \\begin{bmatrix} 0.8 - \\lambda & 0.3 \\\\[4pt] 0.2 & 0.7 - \\lambda \\end{bmatrix} \\,\\times \\, \\begin{bmatrix} x \\\\[4pt] y \\end{bmatrix}  &= \\begin{bmatrix} 0 \\\\[4pt] 0 \\end{bmatrix}\n  \\end{align*}\n  $$\n\n  using firstly $\\lambda_1=0.5$ and secondly $\\lambda_2=1$. The values we find for $x$ and $y$ will be the elements of eigenvectors $\\bm{p}_1$ and $\\bm{p}_2$.\n  For $\\lambda_1=0.5$, we have\n\n  $$\n  \\begin{align*}\n  \\begin{bmatrix} 0.3 & 0.3 \\\\[4pt] 0.2 & 0.2 \\end{bmatrix} \\,\\times \\, \\begin{bmatrix} x \\\\[4pt] y \\end{bmatrix}  &= \\begin{bmatrix} 0 \\\\[4pt] 0 \\end{bmatrix} \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  This leads to two linear equations in $x$ and $y$, which will yield the same values:\n\n  $$\n  \\begin{align*}\n  0.3x + 0.3y &= 0 \\tag*{(1)} \\\\[6pt]\n  0.2x + 0.2y &= 0 \\tag*{(2)}\n  \\end{align*}\n  $$\n\n  Using equation $(1)$, we find that $x=1$ and $y=-1$ is a solution.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  Therefore our first eigenvector is $\\answer{\\bm{p}_1 = \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}}$ associated with $\\lambda_1=0.5$.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n  For $\\lambda_2=1$, we have\n\n  $$\n  \\begin{align*}\n  \\begin{bmatrix} -0.2 & 0.3 \\\\[4pt] 0.2 & -0.3 \\end{bmatrix} \\,\\times \\, \\begin{bmatrix} x \\\\[4pt] y \\end{bmatrix}  &= \\begin{bmatrix} 0 \\\\[4pt] 0 \\end{bmatrix}\n  \\end{align*}\n  $$\n\n  This leads to two linear equations in $x$ and $y$, which will yield the same values:\n\n  $$\n  \\begin{align*}\n  -0.2x + 0.3y &= 0 \\tag*{(3)} \\\\[6pt]\n  0.2x - 0.3y &= 0 \\tag*{(4)}\n  \\end{align*}\n  $$\n\n  Using equation $(3)$, we find that $x=3$ and $y=2$ is a solution.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  Therefore our second eigenvector is $\\answer{\\bm{p}_2 = \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}}$ associated with $\\lambda_2=1$.\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- The matrix $\\bm{P}$ will be a matrix of the eigenvectors (written in the order $\\bm{p}_1,\\bm{p}_2$), and the matrix $\\bm{D}$ will be a diagonal matrix with the eigenvalues on the diagonal (written in the order $\\lambda_1,\\lambda_2$).\n  We have\n\n  $$\n  \\begin{align*}\n  &\\tcbhighmath{\\bm{T}^n = \\begin{bmatrix} 1 & 3 \\\\[4pt] -1 & 2 \\end{bmatrix} \\, \\begin{bmatrix} 0.5 & 0 \\\\[4pt] 0 & 1 \\end{bmatrix}^n \\, \\begin{bmatrix} 1 & 3 \\\\[4pt] -1 & 2 \\end{bmatrix}^{-1}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The long term behaviour will be determined by the matrix $\\bm{T}^n$ as $n \\to \\infty$.\n  For a diagonal matrix, we can note that this is a special case where if the matrix is raised to a power, each element can individually be raised to that power. Thus,\n\n  $$\n  \\begin{align*}\n  \\bm{D}^n &= \\begin{bmatrix} 0.5^n & 0^n \\\\[4pt] 0^n & 1^n \\end{bmatrix}\n  \\end{align*}\n  $$\n\n  Hence as $n \\to \\infty$, we have\n\n  $$\n  \\begin{align*}\n   \\displaystyle\\lim_{n \\to \\infty} \\bm{D}^n &= \\begin{bmatrix} 0 & 0 \\\\[4pt] 0 & 1 \\end{bmatrix} \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Our calculation will be\n\n  $$\n  \\begin{align*}\n  \\displaystyle\\lim_{n \\to \\infty} \\bm{T}^n &= \\begin{bmatrix} 1 & 3 \\\\[4pt] -1 & 2 \\end{bmatrix} \\, \\begin{bmatrix} 0 & 0 \\\\[4pt] 0 & 1 \\end{bmatrix} \\, \\begin{bmatrix} 1 & 3 \\\\[4pt] -1 & 2 \\end{bmatrix}^{-1} \\, \\begin{bmatrix} 30 \\\\ 210 \\end{bmatrix} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= \\begin{bmatrix} 144 \\\\ 96 \\end{bmatrix}\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Long term, there will be $144$ chickens in coop A, and $96$ in coop B.}}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n',
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
    title: 'Question 16',
    content:
      'A discrete dynamical system is described by the following transition\nmatrix, $\\bm{T}$,\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/39fd5db8-a6fd-4077-9ba7-ea86a389a9ac/images/90205c80-20d6-4cc5-a063-71306cf58ee8/cf10a27b504c9599c9adc42101e9bc3c0f6527ac.svg)\n\n\nThe state of the system is defined by the proportions of population with\na particular characteristic.\n\n- Use the characteristic polynomial of $\\bm{T}$ to find its\neigenvalues. <span class="marks">[2]</span>\n\n- Find the corresponding eigenvectors of $\\bm{T}$. <span class="marks">[2]</span>\n\n- Hence find the steady state matrix $\\bm{s}$ of the system.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The characteristic polynomial of $\\bm{T}$ is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{det}(\\bm{T} - \\lambda \\bm{I}) &= \n  \\begin{vmatrix}[cc] \\hspace{0.05em} 0.3 - \\lambda & 0.8 \\\\ 0.7 & 0.2 - \\lambda \\hspace{0.25em} \\end{vmatrix} \\\\[4pt] \n  &= (0.3 - \\lambda)(0.2 - \\lambda) - 0.7 \\cdot 0.8\\\\[3pt]\n  &= \\lambda^2 - 0.5\\lambda - 0.5\n  \\end{aligned}\n  $$\n\n  Solving the\ncharacteristic equation $\\mathrm{det}(\\bm{T} - \\lambda \\bm{I}) = 0$,\nwe get\n\n  $$\n  \\begin{aligned}\n  \\lambda^2 - 0.5\\lambda - 0.5 &= 0 \\\\[6pt]\n  &\\hspace{-2.15cm}\\answer{\\lambda_1 = -0.5,\\,\\lambda_2 = 1} \\hspace{3em} [\\text{by using G.D.C.}]\n  \\end{aligned}\n  $$\n\n- Let $\\bm{X}_1$ and $\\bm{X}_2$ be the corresponding eigenvectors.\nFor $\\lambda_1 = -0.5$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/39fd5db8-a6fd-4077-9ba7-ea86a389a9ac/images/caa9ebcf-f4f9-43a9-8d27-c455a6091293/7df9d643ed882d2a29eb4453e220c9073fd952ba.svg)\n\n\n  Hence we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/39fd5db8-a6fd-4077-9ba7-ea86a389a9ac/images/54ea16af-01a3-49ed-a211-ca60c1af55d8/3da39a5a20086f595d92c990ff12f04e09793b30.svg)\n\n\n  For $\\lambda_2 = 1$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/39fd5db8-a6fd-4077-9ba7-ea86a389a9ac/images/a158dd50-d25b-4ba8-b8e1-6750cd489040/1b7a31cb4a6e37de055dac6ac90697cca6c3e440.svg)\n\n\n  Hence we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/39fd5db8-a6fd-4077-9ba7-ea86a389a9ac/images/ece051fd-58f8-436a-8e11-a069052b70b3/03a68747a6cdf12d79fc22f2512ff82386b331dd.svg)\n\n\n- A steady state $\\bm{s}$ must satisfy the equation\n$\\bm{Ts} = \\bm{s}$. This is equivalent to an eigenvector for\n$\\lambda = 1$. In addition, since the steady state represents the\nproportions of population, its elements must sum up to $1$. Hence we\nget\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/39fd5db8-a6fd-4077-9ba7-ea86a389a9ac/images/aeafb3e7-9b0a-4fc5-81da-1c4f751cc76f/f5e7cc65f9b9a10f812cf8aa34611b87a3af41fd.svg)\n\n\n',
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
    title: 'Question 17',
    content:
      'A biologist conducts an experiment to study the pollination preference\nof bumblebees\' on different floral types. In a flight cage, $240$\nbumblebees are free to choose between two species of floral: A. majus\nstriatum or A. majus pseudomajus. The changes of pollination\nbehaviors of these bumblebees after every minute are reflected in the\nfollowing table.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/c872db6a-ced1-4c8c-b9fc-cf7287f60f60/images/01b5bce8-55f9-4e3c-99ad-e7ee16678df5/09ac43f6a5cbebbe9bb6396feaf10873ae4fff36.svg)\n\n\nInitially, $150$ bumblebees choose A. majus striatum and $90$\nbumblebees choose A. majus pseudomajus.\n\n- Write down the initial state $\\bm{s}_0$ and the transition matrix\n$\\bm{T}$. <span class="marks">[2]</span>\n\n- Determine $\\bm{Ts}_0$ and interpret the result. <span class="marks">[2]</span>\n\n- Find the eigenvalues and corresponding eigenvectors of $\\bm{T}$.\n<span class="marks">[4]</span>\n\n- \n  - Write an expression for the number of bumblebees choosing to\npollinate on A. majus pseudomajus after $n$ minutes,\n$n \\in \\mathrm{N}$.\n  - Hence find the number of bumblebees choose to pollinate on A.\nmajus pseudomajus in the long term. <span class="marks">[6]</span>\n\n\n',
    markScheme:
      "\n- Based off the given table, we get the transition matrix as\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c872db6a-ced1-4c8c-b9fc-cf7287f60f60/images/1bf16d1d-274b-4232-8585-19c8e548169b/c2aad283af45ff4455c81bc5acf07f8f350a00dc.svg)\n\n\n  and the initial state as\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c872db6a-ced1-4c8c-b9fc-cf7287f60f60/images/45722322-3a1c-4618-9ea5-ddcf73277f8f/e8a97ca56b5c4065bc1450a9f5f751a12e846074.svg)\n\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c872db6a-ced1-4c8c-b9fc-cf7287f60f60/images/2ec7b073-aaec-4a23-aceb-56c6d94ec4c0/0e81a41f831cc29f10d680d7515d4cce97b6e98c.svg)\n\n\n  After after the first minute $129$ bumblebees will choose to pollinate on \\textit{A. majus striatum} and $111$ bumblebees will choose to pollinate on \\textit{A. majus pseudomajus}.\n- Let's solve the characteristic equation\n$\\mathrm{det}(\\bm{T} - \\lambda \\bm{I}) = 0$ for $\\lambda$:\n\n  $$\n  \\begin{aligned}\n  \\begin{vmatrix}[cc] \\hspace{0.05em} 0.8 - \\lambda & 0.1 \\\\ 0.2 & 0.9 - \\lambda \\hspace{0.25em} \\end{vmatrix} &= 0 \\\\[4pt] \n  (0.8 - \\lambda)(0.9 - \\lambda) - 0.2 \\cdot 0.1 &= 0 \\\\[3pt]\n  \\lambda^2 - 1.7\\lambda + 0.7 &= 0 \\\\[6pt]\n  &\\hspace{-1.86cm}\\answer{\\lambda_1 = 0.7, \\, \\lambda_2 = 1} \\hspace{3em} [\\text{by using G.D.C.}]\n  \\end{aligned}\n  $$\n\n  Let $\\bm{X}_1$ and\n$\\bm{X}_2$ be the corresponding eigenvectors. For $\\lambda_1 = 0.7$,\nwe get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c872db6a-ced1-4c8c-b9fc-cf7287f60f60/images/760a6be8-92f4-49c6-84ab-2b0fbf140df1/9ccebeb4e79185bf8c90e44b31e0125e10e9f669.svg)\n\n\n  Hence we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c872db6a-ced1-4c8c-b9fc-cf7287f60f60/images/1c3c432c-1783-4ba4-891f-3e64bd45fdda/3da39a5a20086f595d92c990ff12f04e09793b30.svg)\n\n\n  For $\\lambda_2 = 1$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c872db6a-ced1-4c8c-b9fc-cf7287f60f60/images/95a2abd0-023a-459b-ab00-c6d8d1fb2bf4/f86aaf41df81864e4e488582677bf3a8951f8255.svg)\n\n\n  Hence we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c872db6a-ced1-4c8c-b9fc-cf7287f60f60/images/c114645c-1f4c-479c-94dc-0055ef9e3fea/5ee370c3c8e1ed1cf23c5d210dc85f9ff907822e.svg)\n\n\n- \n  - Using the formula $\\bm{T} = \\bm{PDP}^{-1}$ where\n$\\bm{P} = [\\bm{X}_1 \\,\\, \\bm{X}_2]$ and\n$\\bm{D} = \\mathrm{diag}(\\lambda_1, \\lambda_2)$,\nwe get\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c872db6a-ced1-4c8c-b9fc-cf7287f60f60/images/7df80707-d7ea-4a9f-9129-a0a8d1f2aaad/48a7e002392f86e9eacd699c635ea4e6aa9b890a.svg)\n\n\n    Hence for $\\bm{T}^n$ we get\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c872db6a-ced1-4c8c-b9fc-cf7287f60f60/images/2b240d3d-384d-49b6-969b-0e7eadfe8ce2/683b296f30c453662954a0f6e2a3f9745ca785e6.svg)\n\n\n    and\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c872db6a-ced1-4c8c-b9fc-cf7287f60f60/images/9743d2db-0cce-41d3-8caf-43fd0ad3b5ec/2d1c0caced90a9f1196a0a59e2d2f4b6c2f877a6.svg)\n\n\n    Therefore an expression for the number of bumblebees choosing to\npollinate on A. majus pseudomajus (the second row) after $n$\nminutes is\n\n    $$\n    \\answer{A(n) = -70(0.7)^n + 160}\n    $$\n\n  - Since $\\lim\\limits_{n \\to \\infty} 0.7^n = 0$, we obtain\n\n    $$\n    \\begin{aligned}\n    \\lim\\limits_{n \\to \\infty} A(n) &= -70(0) + 160 \\\\[3pt]\n    &\\answer{= 160}\n    \\end{aligned}\n    $$\n\n\n",
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
    title: 'Question 18',
    content:
      'An information technology (IT) company offers paid travelling vacation\nto its $160$ employees every year. The employees can choose between\ntravelling domestically or internationally. It is observed that\n$50$ % of the employees who choose to travel\ndomestically one year, choose internationally the next year. Conversely,\n$30$ % of those who choose to travel\ninternationally one year change to travel domestically the following\nyear. For this year, $80$ employees chose travelling domestically and\n$80$ employees chose travelling internationally.\n\n- Write down the initial state $\\bm{s}_0$ and the transition matrix\n$\\bm{T}$. <span class="marks">[2]</span>\n\n- Determine $\\bm{Ts}_0$ and interpret the result. <span class="marks">[2]</span>\n\n- Find the eigenvalues and corresponding eigenvectors of $\\bm{T}$.\n<span class="marks">[4]</span>\n\n- \n  - Write an expression for the number of employees who choose\ntravelling internationally after $n$ years, $n \\in \\mathrm{N}$.\n  - Hence find the long term steady state number of employees to\nchoose to travel internationally. <span class="marks">[6]</span>\n\n\n',
    markScheme:
      '\n- The given information can be summarised in the following table.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0db44010-1ca5-465d-b0f6-4c1c603dc931/images/a2ab9d8c-0c77-409a-8545-2c0aeb2dba37/0d58465f06f8d2d1e429585fbc3ee74eed6a9115.svg)\n\n\n  Hence the transition matrix is\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0db44010-1ca5-465d-b0f6-4c1c603dc931/images/d5c1eb19-ade6-4e65-8cbd-98817f73e3d5/4e67e272993688c0f7a0af81baa357a128be5028.svg)\n\n\n  and the initial state is\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0db44010-1ca5-465d-b0f6-4c1c603dc931/images/c60fa148-90cc-4390-b6db-96ef707e65e9/ab0691fc7328427de73067b9204f114d6476f814.svg)\n\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0db44010-1ca5-465d-b0f6-4c1c603dc931/images/589e4633-9ee1-4aad-8622-ece2c4e3f682/66f83c5032f7bdf0328f1872e4a88406f981f0ea.svg)\n\n\n  Next year $64$ employees will choose to travel domestically and $96$ will choose international.\n- We solve the characteristic equation\n$\\mathrm{det}(\\bm{T} - \\lambda \\bm{I}) = 0$ for $\\lambda$:\n\n  $$\n  \\begin{aligned}\n  \\begin{vmatrix}[cc] \\hspace{0.05em} 0.5 - \\lambda & 0.3 \\\\ 0.5 & 0.7 - \\lambda \\hspace{0.25em} \\end{vmatrix} &= 0 \\\\[4pt] \n  (0.5 - \\lambda)(0.7 - \\lambda) - 0.5 \\cdot 0.3 &= 0 \\\\[3pt]\n  \\lambda^2 - 1.2\\lambda + 0.2 &= 0 \\\\[6pt]\n  &\\hspace{-1.86cm}\\answer{\\lambda_1 = 0.2, \\, \\lambda_2 = 1} \\hspace{3em} [\\text{by using G.D.C.}]\n  \\end{aligned}\n  $$\n\n  Let $\\bm{X}_1$ and\n$\\bm{X}_2$ be the corresponding eigenvectors. For $\\lambda_1 = 0.2$,\nwe have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0db44010-1ca5-465d-b0f6-4c1c603dc931/images/32956a89-63dd-4de2-825e-3bfbf32543f8/6f03feb765dc57514983272f26efd51d4e33d750.svg)\n\n\n  Hence we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0db44010-1ca5-465d-b0f6-4c1c603dc931/images/82617500-f466-45b9-8c19-def9e6abde12/3da39a5a20086f595d92c990ff12f04e09793b30.svg)\n\n\n  For $\\lambda_2 = 1$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0db44010-1ca5-465d-b0f6-4c1c603dc931/images/0ee98e77-74bb-4edd-8b8c-66ca8d638084/f088b184fd6f316a1104b2f03a39e9683298f4d4.svg)\n\n\n  Hence we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0db44010-1ca5-465d-b0f6-4c1c603dc931/images/1a669798-cb74-4096-93f9-4c582d2635a8/76b1dc035315ba3ff33eae602fbcaf88c8d8491d.svg)\n\n\n- \n  - Using the formula $\\bm{T} = \\bm{PDP}^{-1}$ where\n$\\bm{P} = [\\bm{X}_1 \\,\\, \\bm{X}_2]$ and\n$\\bm{D} = \\mathrm{diag}(\\lambda_1, \\lambda_2)$,\nwe get\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0db44010-1ca5-465d-b0f6-4c1c603dc931/images/d3ff6b72-c98a-404f-8c46-6a6ca536b408/14b4b603bbe0162a687088e8d23393c6244aefb4.svg)\n\n\n    Hence for $\\bm{T}^n$ we get\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0db44010-1ca5-465d-b0f6-4c1c603dc931/images/32d13256-d033-4b7b-b48f-173e84816c93/65637fc49efef51947e3affd1717e171b44524cf.svg)\n\n\n    and\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0db44010-1ca5-465d-b0f6-4c1c603dc931/images/43f73807-d960-461a-bc9c-047d34083515/2832efd8d6a890a70065e0c42f6fc192cf5e1ebc.svg)\n\n\n    Therefore an expression for the number of employees who choose\ntravelling internationally (the second row) after $n$ years is\n\n    $$\n    \\answer{I(n) = -20(0.2)^n + 100}\n    $$\n\n  - Since $\\lim\\limits_{n \\to \\infty} 0.2^n = 0$, we obtain\n\n    $$\n    \\begin{aligned}\n    \\lim\\limits_{n \\to \\infty} A(n) &= -20(0) + 100 \\\\[3pt]\n    &\\answer{= 100}\n    \\end{aligned}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 19',
    content:
      'Steve watches a TV show that has a small section dedicated to trivia quiz questions, where a randomly selected person from the audience is asked to answer 5 general knowledge questions in a row. The following table records the number of correct answers Steve obtains from watching 100 episodes of the program.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/762ccace-a1e8-48e6-bedd-4b404b983137/images/01dfd6f2-abbd-4254-8b78-d06b65b60b27/ai1044a.PNG)\n\n\n\n- Find Steve\'s mean number of correct answers per show. <span class="marks">[2]</span>  \n\nSteve suspects that his number of correct answers can be modelled by a binomial distribution with $n=5$, and decides to carry out a $\\chi^2$ goodness of fit test.\n\n- Using the data from the table, find the estimated value of $p$ for the binomial model.<span class="marks">[1]</span>\n\n- \n  - Use the binomial model to find the probability that Steve gets all 5 questions incorrect. Express your answer to two significant figures.\n  - Find the expected frequency for zero correct answers.<span class="marks">[3]</span>\n\n\n\nAs some expected frequencies are less than $5$, Steve combines two rows in the table to obtain the following updated table.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/762ccace-a1e8-48e6-bedd-4b404b983137/images/2df69f12-69ee-4723-8a02-25e4fa044ef5/ai1044b.PNG)\n\n\n\n- Steve uses this table to carry out a $\\chi^2$ goodness of fit test to test the hypothesis that the data follow a binomial distribution with $n=5$ at the $10\\%$ significance level. For this test, state:\n  \n  - the null hypothesis;\n  - the number of degrees of freedom;\n  - the $p$ value;\n  - the conclusion, justifying your answer.<span class="marks">[6]</span>\n\n\n- Using the binomial model, find the probability that during the next show, Steve answers all five questions correctly.<span class="marks">[2]</span>\n\n\nSteve\'s friend Tony considers it might be better to model the problem by using states, where R means a correct answer, and W is an incorrect answer. To simplify the model, Tony proposes a transition of only two states with frequencies shown in the following table.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/762ccace-a1e8-48e6-bedd-4b404b983137/images/faadc919-547c-4c77-8ee8-5e8be8f8bcc7/ai1044c.PNG)\n\n\n\n- \n  - Find the probability, in the form $\\dfrac{p}{q}$, that Steve gets a question incorrect given that he correctly answered the previous question.\n  - Write down the transition matrix, $\\bm{T}$, for this model.<span class="marks">[3]</span>\n\n\n- \n  - Show that the characteristic polynomial for the transition matrix can be expressed as $39\\lambda^2-47\\lambda + 8 = 0$.\n  - Hence, or otherwise, find the eigenvalues of $\\bm{T}$.\n  - Find the eigenvectors of $\\bm{T}$.<span class="marks">[7]</span>\n\n\n\nSteve is leaving his home country for a working vacation and won\'t see the show for at least 6 months. When he returns, he will watch the first episode of the show and attempt to get all five questions correct. Tony claims that, according to the transition model, the probability of this occurring is approximately 10%.\n\n- Determine whether Tony\'s claim is correct.<span class="marks">[4]</span>  \n',
    markScheme:
      "\n- Let $X$ be the number of correct answers. Using G.D.C., we get\n\n  $$\n  \\begin{align*}\n  &\\hspace{-0.58em}\\tcbhighmath{\\overline{x}=2.8} \n  \\end{align*}\n  $$\n\n- Since the mean value of a binomial random variable is $np$, we get\n\n  $$\n  \\begin{align*}\n  5p &= 2.8 \\\\[8pt]\n  p &= \\dfrac{2.8}{5}\\\\[8pt]\n  &\\hspace{-0.5em}\\tcbhighmath{p = 0.56}\n  \\end{align*}\n  $$\n\n- \n  - We have $X \\sim \\mathrm{B}(5,0.56)$. Using the G.D.C., we get\n\n    $$\n    \\begin{align*}\n    \\text{P}(X=0) &= \\text{binomPdf}(5,0.56,0)\\\\[10pt]\n    &\\hspace{0.28em}\\tcbhighmath{\\approx 0.016} \n    \\end{align*}\n    $$\n\n  - The expected frequency is the product of the probability found in part (c) (i) and the total frequency.\n\n    $$\n    \\begin{align*}\n    \\text{Expected frequency} &= (0.016)(100)\\\\[10pt]\n    &\\hspace{0.3em}\\tcbhighmath{\\approx 1.6} \n    \\end{align*}\n    $$\n\n\n- \n  - $\\boxed{\\mathrm{H}_0: \\text{The data follows a binomial distribution with } n=5 \\text{ and } p=0.56}$\n  - The number of degrees of freedom is the number of cells minus one, minus another one for each parameter estimated. We have estimated one parameter, $p$.\n    The degrees of freedom is therefore $\\tcbhighmath{5 - 1 - 1 = 3}$\n  - Using the G.D.C., we have $\\tcbhighmath{p\\text{-value} \\approx 0.867}$\n  - Since the $p$-value is $0.867>0.10$, we do not reject the null hypothesis. Therefore, there is insufficient evidence to conclude that the data does not follow the model.\n\n- Using the G.D.C., we get\n\n  $$\n  \\begin{align*}\n  \\text{P}(X=5) &= \\text{binomPdf}(5,0.56,5)\\\\[10pt]\n  &\\hspace{0.28em}\\tcbhighmath{\\approx 0.0551} \n  \\end{align*}\n  $$\n\n- \n  - There are 48 transitions starting with a correct answer, of which 16 lead to a wrong answer.\n    The probability is therefore $\\tcbhighmath{\\dfrac{1}{3}}$\n  - We can summarise the probabilities from the given information as follows.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/762ccace-a1e8-48e6-bedd-4b404b983137/images/a4bc3fb5-2bf5-4856-8733-bb9b19de188c/ai1044d.PNG)\n\n\n    Hence the transition matrix is\n\n    $$\n    \\begin{align*}\n    \\tcbhighmath{\\bm{T} = \\begin{bmatrix}     \\ \\dfrac{2}{3}\\  & \\ \\dfrac{6}{13}\\  \\\\[10pt]\n    \\dfrac{1}{3} & \\dfrac{7}{13} \\end{bmatrix}}\n    \\end{align*}\n    $$\n\n\n- \n  - We solve the characteristic equation $\\mathrm{det}(\\bm{T} - \\lambda \\bm{I}) = 0$ for $\\lambda$:\n\n    $$\n    \\begin{align*}\n    \\begin{vmatrix} \\hspace{0.05em} \\frac{2}{3} - \\lambda & \\frac{6}{13} \\\\ \\frac{1}{3} & \\frac{7}{13} - \\lambda \\hspace{0.25em} \\end{vmatrix} &= 0 \\\\[5pt] \n    \\left(\\dfrac{2}{3} - \\lambda\\right)\\left(\\dfrac{7}{13} - \\lambda\\right) - \\dfrac{6}{13} \\cdot \\dfrac{1}{3}  &= 0 \\\\[5pt]\n    \\dfrac{14}{39}-\\dfrac{2}{3}\\lambda-\\dfrac{7}{13}\\lambda+\\lambda^2-\\dfrac{6}{39}&=0 \\\\[5pt]\n    14-26\\lambda-21\\lambda+39\\lambda^2-6&=0 \\\\[5pt]\n    &\\hspace{-2.3cm}\\tcbhighmath{39\\lambda^2-47\\lambda+8 = 0} \n    \\end{align*}\n    $$\n\n  - \n    $$\n     \\begin{align*}\n     \\tcbhighmath{\\lambda_1 = \\dfrac{8}{39}, \\, \\lambda_2 = 1} \\hspace{3em} [\\text{by using G.D.C.}]\n     \\end{align*}\n    $$\n\n  - Let $\\bm{X}_1$ and $\\bm{X}_2$ be the corresponding eigenvectors.\n    For $\\lambda_1 = \\dfrac{8}{39}$, we have\n\n    $$\n    \\begin{align*}\n    \\ \\hspace{3cm}\n    (\\bm{T} - \\lambda_1 \\bm{I})\\bm{X}_1 &= \\bm{0} \\\\[4pt]\n    \\begin{bmatrix}\\, \\rule[-3mm]{0pt}{9mm}\\dfrac{2}{3} - \\dfrac{8}{39} & \\dfrac{6}{13} \\\\[11pt] \\dfrac{1}{3} & \\dfrac{7}{13}-\\dfrac{8}{39}\\rule[-3mm]{0pt}{9mm} \\,\\,\\,  \\end{bmatrix} \\bm{X}_1 &= \\bm{0} \\\\[4pt]\n    \\begin{bmatrix} \\rule[-3mm]{0pt}{9mm}\\dfrac{6}{13} & \\dfrac{6}{13} \\\\[8pt] \\dfrac{1}{3} & \\dfrac{1}{3}\\rule[-3mm]{0pt}{9mm}  \\end{bmatrix} \\begin{bmatrix} a \\\\ b \\end{bmatrix} &= \\bm{0}  \\hspace{3em} \\left[\\text{by letting } \\bm{X}_1 = \\begin{bmatrix} a \\\\ b \\end{bmatrix}\\right] \\\\[4pt]\n    \\begin{bmatrix}  \\rule[-3mm]{0pt}{9mm}\\dfrac{6a}{13} + \\dfrac{6b}{13}\\\\[8pt]  \\dfrac{a}{3} + \\dfrac{b}{3}\\rule[-3mm]{0pt}{9mm}  \\end{bmatrix}&= \\bm{0} \\\\[8pt]\n    a + b &= 0 \\\\[8pt]\n    a &= -b\n    \\end{align*}\n    $$\n\n    Hence we get $\\tcbhighmath{\\bm{X}_1  = \\begin{bmatrix} -1 \\\\  \\,\\,\\,\\,\\,1 \\end{bmatrix}} \\hspace{3em} [\\text{by choosing } b = 1]$\n    For $\\lambda_2 = 1$, we have\n\n    $$\n    \\begin{align*}\n    \\ \\hspace{3cm}\n    (\\bm{T} - \\lambda_2 \\bm{I})\\bm{X}_2 &= \\bm{0} \\\\[4pt]\n    \\begin{bmatrix} \\rule[-3mm]{0pt}{9mm}\\,\\dfrac{2}{3} - 1 & \\dfrac{6}{13} \\\\ \\dfrac{1}{3} & \\dfrac{7}{13}-1 \\,\\rule[-3mm]{0pt}{9mm} \\end{bmatrix} \\bm{X}_2 &= \\bm{0} \\\\[4pt]\n    \\begin{bmatrix} \\rule[-3mm]{0pt}{9mm}-\\dfrac{1}{3} & \\,\\,\\,\\,\\,\\dfrac{6}{13}\\,\\, \\\\[8pt] \\,\\,\\,\\,\\,\\,\\dfrac{1}{3} & -\\dfrac{6}{13}\\, \\rule[-3mm]{0pt}{9mm} \\end{bmatrix} \\begin{bmatrix} a \\\\ b \\end{bmatrix} &= \\bm{0}  \\hspace{3em} \\left[\\text{by letting } \\bm{X}_2 = \\begin{bmatrix} a \\\\ b \\end{bmatrix}\\right] \\\\[4pt]\n    \\begin{bmatrix} \\rule[-3mm]{0pt}{9mm} -\\dfrac{1}{3}a + \\dfrac{6}{13}b\\\\[10pt]  \\,\\,\\,\\,\\,\\,\\,\\dfrac{1}{3}a - \\dfrac{6}{13}b\\rule[-3mm]{0pt}{9mm}  \\end{bmatrix}&= \\bm{0} \\\\[6pt]\n    \\dfrac{a}{3} - \\dfrac{6b}{13} &= 0 \\\\[6pt]\n    \\dfrac{a}{3} &= \\dfrac{6b}{13}  \\\\[6pt]\n    a &= \\dfrac{18b}{13}\n    \\end{align*}\n    $$\n\n    Hence we get $\\tcbhighmath{\\bm{X}_2 = \\begin{bmatrix} 18 \\\\  13 \\end{bmatrix}} \\hspace{4em} [\\text{by choosing } b = 13]$\n\n- Using the power formula for a matrix, we can write $\\bm{T}^n=\\bm{PD}^n\\bm{P}^{-1}$.\n  From  part (g) we have\n\n  $$\n  \\begin{align*}\n      \\bm{P} &= \\begin{bmatrix} \n      -1  & 18  \\\\[10pt]\n  \\,\\,\\,\\,\\,1 & 13\n  \\end{bmatrix} \\\\[16pt]\n  \\bm{D} &= \\begin{bmatrix} \n      \\frac{8}{39}  & 0  \\\\[10pt]\n  0 & 1\n  \\end{bmatrix}\n  \\end{align*}\n  $$\n\n  As $n \\to \\infty$, we have\n\n  $$\n  \\begin{align*}\n      \\bm{D}^n &\\to \\begin{bmatrix} \n      0  & 0  \\\\[10pt]\n  0 & 1\n  \\end{bmatrix}\n  \\end{align*}\n  $$\n\n  And therefore\n\n  $$\n  \\begin{align*}\n  \\bm{T}^n &\\to \\begin{bmatrix} \n      -1  & 18  \\\\[10pt]\n  \\,\\,\\,\\,\\,1 & 13\n  \\end{bmatrix} \\begin{bmatrix} \n      0  & 0  \\\\[10pt]\n  0 & 1\n  \\end{bmatrix} \\begin{bmatrix} \n      -1  & 18  \\\\[10pt]\n  \\,\\,\\,\\,\\,1 & 13\n  \\end{bmatrix}^{-1}\\\\[16pt]\n  &\\approx \\begin{bmatrix} \n      0.5806  & 0.5806  \\\\[10pt]\n  0.4194 & 0.4194\n  \\end{bmatrix}\n  \\end{align*}\n  $$\n\n  In the long-term, the probability of getting a question correct regardless of whether the previous question was correct or incorrect, is approximately $0.5806$ according to the transition model.\n  From part (f) (ii) we have that the probability of getting a question correct given that the previous question was correct is $\\frac{2}{3}$.\n  Hence, after a long break from watching the show, the probability of Steve getting all five questions correct in the first episode he watches is given by\n\n  $$\n  \\begin{align*}\n  \\mathrm{P}(RRRRR) &= 0.5806 \\times \\bigg(\\frac{2}{3}\\bigg)^4 \\\\[8pt]\n  &\\approx 0.1147\n  \\end{align*}\n  $$\n\n  $11.47$% is very close to $10$%.\n  Therefore, we can conclude that $\\tcbhighmath{\\mbox{Tony's statement is correct.}}$\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '28',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 20',
    content:
      'A water park lends life jackets to its visitors. The park has two stations, $A$ and $B$, where clients can take a life jacket and they can return the life jacket to either of the two stations. It is found that at the end of a day, $81$% of the life jackets are returned to the same station they were taken from, while the other $19$% are returned to the other station.\n\n- Write down a transition matrix $\\bm{T}$ representing the proportion of the life jackets moving between the two stations. <span class="marks">[2]</span>  \n\nOn February 1st, before opening the park, the staff counted the number of life jackets and found there were $400$ life jackets at station $A$ and $500$ at station $B$.\n\n- Determine the number of life jackets expected to be at each station when the park opens on February 5th. Give your answer to the nearest whole number.<span class="marks">[2]</span>\n\n- \n  - Show that the eigenvalues of $\\bm{T}$ are $\\lambda_1 = 1$ and $\\lambda_2 = 0.62$.\n  - Find a corresponding eigenvector for each eigenvalue from $\\textbf{part (c) (i)}$.\n  - Hence express $\\bm{T}$ in the form $\\bm{T} = \\bm{PDP}^{-1}$. <span class="marks">[6]</span>\n\n\n- Show that $\\bm{T}^n = \\dfrac{1}{2}\\begin{bmatrix} 1+ (0.62)^n &  1 - (0.62)^n \\\\ 1-(0.62)^n & 1+(0.62)^n \\end{bmatrix}$, where $n \\in \\mathbb{Z}^+$. <span class="marks">[2]</span>\n\n- Hence, find an expression for the number of life jackets in station $A$ after $n$ days, where $n \\in \\mathbb{Z}^+$ <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/aa9c24a5-8078-4b3f-bbd2-b860f0921f73/images/c4b5b7c0-afae-4a2a-9b93-3c8e82d175b2/0b6f54249db6d2bdc26c6b94ea4c2560eb38a04d.svg)\n\n\n  Hence the transition matrix is\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/aa9c24a5-8078-4b3f-bbd2-b860f0921f73/images/e349397d-34db-479f-931a-afad8a65d0ef/3f9a9177bd2a143521d23b53a5cf4bc1426e7a38.svg)\n\n\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A2}}\n  \\end{aligned}\n  $$\n\n- There are four transitions between February 1st and February 5th. We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/aa9c24a5-8078-4b3f-bbd2-b860f0921f73/images/87401180-fe29-47f7-92aa-536a169982dd/7f22fcbee6f6e7598d0685b59d44ee05eb2679e7.svg)\n\n\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  Hence the distribution of the life jackets after four days is\n\n  $$\n  \\begin{aligned}\n  \\text{Station A} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{443} \\hspace{3em} \\\\[6pt]\n  \\text{Station B} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{457} \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- \n  - If we solve the characteristic equation\n$\\det(\\bm{T} - \\lambda \\bm{I}) = 0$ for $\\lambda$, we get\n\n    $$\n    \\begin{aligned}\n    \\begin{vmatrix} \\hspace{0.05em} 0.81 - \\lambda & 0.19 \\\\ 0.19 & 0.81 - \\lambda \\hspace{0.25em} \\end{vmatrix} &= 0 \\\\[10pt] \n    \\hspace{2.5em} (0.81-\\lambda)^2 - (0.19)^2 &= 0 \\tag*{\\textbf{A1}}\\\\[13pt]\n    \\lambda &= 0.62,\\hspace{0.25em} 1 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n    \\end{aligned}\n    $$\n\n    Hence the eigenvalues of $\\bm{T}$ are\n$\\answer{\\lambda_1 = 1}$\nand\n$\\answer{\\lambda_2 = 0.62}$\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{AG}}\n    \\end{aligned}\n    $$\n\n  - If we solve the matrix equation\n$(\\bm{T} - \\lambda_1\\bm{I})\\bm{X}_1 = 0$ for $\\bm{X}_1$, we find\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/aa9c24a5-8078-4b3f-bbd2-b860f0921f73/images/95d00b00-484a-48ac-8f25-d6d73aa9bf59/b957dff42ca522a12997ea81b377d4dbe0bb0098.svg)\n\n\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{(M1)}}\n    \\end{aligned}\n    $$\n\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/aa9c24a5-8078-4b3f-bbd2-b860f0921f73/images/dde26c6a-b12a-45bd-b7e2-e675f2fc595e/fc5b2e5cb2ca282679957291cf546e7fea38eae0.svg)\n\n\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{A1}}\n    \\end{aligned}\n    $$\n\n    If we solve the matrix equation\n$(\\bm{T} - \\lambda_2\\bm{I})\\bm{X}_2 = 0$ for $\\bm{X}_2$, we find\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/aa9c24a5-8078-4b3f-bbd2-b860f0921f73/images/1358243f-4ade-488e-953e-7d20a4d0b155/vector.JPG)\n\n\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{(M1)}}\n    \\end{aligned}\n    $$\n\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/aa9c24a5-8078-4b3f-bbd2-b860f0921f73/images/c1078454-c9f3-4e77-8cfa-ff32555c30a9/a2ce07ff3687f910a92ae6c7a50a0adcb9d72447.svg)\n\n\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{A1}}\n    \\end{aligned}\n    $$\n\n  - Let\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/aa9c24a5-8078-4b3f-bbd2-b860f0921f73/images/a440308a-67e2-4b51-a3a7-84a1f68481b9/96db913d3ef00d75c2459ee8a8d5e9f2ad8ff3c2.svg)\n\n\n    and\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/aa9c24a5-8078-4b3f-bbd2-b860f0921f73/images/460d09e1-1b0e-4c6c-bee6-24217dd4f3fd/0a33a2e199c0fabb217e6958b32711e2e127eced.svg)\n\n\n    Using the inverse of a $2\\times2$ matrix formula, we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/aa9c24a5-8078-4b3f-bbd2-b860f0921f73/images/e3ccc5de-a6c7-4aaf-8b42-ea5378d907d2/a0f957e5d54dce51574d442d47d8ea731637ae16.svg)\n\n\n    Hence we obtain\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/aa9c24a5-8078-4b3f-bbd2-b860f0921f73/images/106efa63-0247-4b66-948c-5fec357b8206/034401b2509982bbac39d157e1bc4fb8a8d895fb.svg)\n\n\n\n    $$\n    \\begin{aligned}\n    \\tag*{\\textbf{A1}}\n    \\end{aligned}\n    $$\n\n\n- We have\n\n  $$\n  \\begin{align*}\n  \\hspace{5em} \\bm{T}^n &= \\bm{PD}^n\\bm{P}^{-1} \\\\[12pt]\n  &= \\dfrac{1}{2} \\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix} \\begin{bmatrix} 1 & \\hspace{0.75em} 0 \\\\ 0 & 0.62 \\end{bmatrix}^n \\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix} \\\\[12pt]\n  &= \\dfrac{1}{2} \\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix} \\begin{bmatrix} 1 & \\hspace{0.75em} 0 \\\\ 0 & (0.62)^n \\end{bmatrix} \\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix} \\tag*{\\textbf{M1}}\\\\[12pt]\n  &= \\dfrac{1}{2} \\begin{bmatrix} 1 & (0.62)^n \\\\ 1 & -(0.62)^n \\end{bmatrix} \\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix} \\tag*{\\textbf{A1}}\\\\[12pt]\n  &\\hspace{0em}\\tcbhighmath{= \\dfrac{1}{2}\\begin{bmatrix} 1+ (0.62)^n &  1 - (0.62)^n \\\\ 1-(0.62)^n & 1+(0.62)^n \\end{bmatrix}} \\tag*{\\textbf{AG}}\n  \\end{align*}\n  $$\n\n- We need to determine the $n$th state matrix. The expression in the top row will represent the number of lifejackets in station $A$ after $n$ days.\n\n  $$\n  \\begin{align*}\n  \\bm{S}_n &= \\bm{T}^n\\bm{S}_0 \n  \\end{align*}\n  $$\n\n  Using our expression for $\\bm{T}^n$ from part (d), we have\n\n  $$\n  \\begin{align*}\n  \\bm{S}_n &= \\dfrac{1}{2}\\begin{bmatrix} 1+ (0.62)^n &  1- (0.62)^n \\\\ 1- (0.62)^n & 1+ (0.62)^n \\end{bmatrix} \\begin{bmatrix} 400 \\\\ 500 \\end{bmatrix} \\tag*{\\textbf{(M1)}}\\\\[12pt]\n  &= \\begin{bmatrix} 1+ (0.62)^n &  1- (0.62)^n \\\\ 1- (0.62)^n & 1+ (0.62)^n \\end{bmatrix} \\begin{bmatrix} 200 \\\\ 250 \\end{bmatrix} \\\\[12pt]\n  &= \\begin{bmatrix} 200[1 + (0.62)^n] + 250[1 - (0.62)^n] \\\\ 200[1 - (0.62)^n] + 250[1 + (0.62)^n] \\end{bmatrix} \\tag*{\\textbf{(M1)}}\\\\[12pt]\n  \\bm{S}_n &= \\begin{bmatrix} 450 - 50(0.62)^n \\\\ 450 + 50 (0.62)^n \\end{bmatrix}\n  \\end{align*}\n  $$\n\n  Hence, an expression for the number of life jackets in station $A$ after $n$ days is\n\n  $$\n  \\begin{align*}\n  \\hspace{2em} \\tcbhighmath{A(n) = 450 - 50(0.62)^n} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 21',
    content:
      'Two grocery stores, store A and store B, serve in a small city. Each\nyear, store A keeps $30$ % of its customers\nwhile $70$ % of them switch to store B. Store B\nkeeps $\\text{\\(60\\)\\hspace{0.05em}\\%}$ of its customers while\n$40$ % of them switch to store A.\n\n- Write down a transition matrix $\\bm{T}$ representing the proportions\nof the $\\text{customers}$ moving between the two stores.\n<span class="marks">[2]</span>\n\n\nAt the end of $2019$, store A had $8360$ customers while store B had\n$6820$ customers.\n\n- Find the distribution of the customers between the two\nstores after two years.<span class="marks">[2]</span>\n\n- \n  - Show that the eigenvalues of $\\bm{T}$ are $\\lambda_1 = 1$ and\n$\\lambda_2 = -0.1$.\n  - Find a corresponding eigenvector for each eigenvalue from\npart (c) (i).\n  - Hence express $\\bm{T}$ in the form $\\bm{T} = \\bm{PDP}^{-1}$.\n<span class="marks">[6]</span>\n\n\n- Show that\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43daacb9-18ea-4c16-95a2-fb95ca77265a/images/1f1ad225-7188-4050-98de-5b41e6d0f86b/ba868786ed3787b5c4a0fd00e58f9ba6463b1270.svg)\n\n\n  , where $n \\in \\mathbb{Z}^+$. <span class="marks">[2]</span>\n\n- Hence find an expression for the number of customers buying\ngroceries from store A after $n$ years, where $n \\in \\mathbb{Z}^+$\n<span class="marks">[3]</span>\n\n- Verify your formula by finding the number of customers\nbuying groceries from store A after two years and comparing with the\nvalue found in part (b). <span class="marks">[1]</span>\n\n- Write down the long-term number of customers buying\ngroceries from store A.<span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43daacb9-18ea-4c16-95a2-fb95ca77265a/images/d11e2420-777b-4aac-bcab-ac46e824e47d/d1f0e09432ec4291f70c2d7f76028afb9d2bd92a.svg)\n\n\n  Hence the transition matrix is\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43daacb9-18ea-4c16-95a2-fb95ca77265a/images/e91c8252-b85e-4d83-beb4-ef0e809ad8d5/e06f02ff653ef168fb10fb47900a8a12fd59d4c2.svg)\n\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43daacb9-18ea-4c16-95a2-fb95ca77265a/images/f792aa85-6df3-45f2-b12d-d733d70ca852/9f5df6b9337e8cb1cb5fbd0f51a8c321be7b389e.svg)\n\n\n  Hence the distribution of the customers after two years is\n\n  $$\n  \\begin{aligned}\n  \\text{Store A} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{5550} \\hspace{3em} \\\\[6pt]\n  \\text{Store B} &:\\hspace{0.75em} \\hspace{0.525em}\\answer{9630}\\end{aligned}\n  $$\n\n- \n  - If we solve the characteristic equation\n$\\det(\\bm{T} - \\lambda \\bm{I}) = 0$ for $\\lambda$, we get\n\n    $$\n    \\begin{aligned}\n    \\begin{vmatrix} \\hspace{0.05em} 0.3 - \\lambda & 0.4 \\\\ 0.7 & 0.6 - \\lambda \\hspace{0.25em} \\end{vmatrix} &= 0 \\\\[6pt] \n    \\hspace{2.5em} (0.3-\\lambda)(0.6-\\lambda) - (0.4)(0.7) &= 0 \\\\[13pt]\n    \\lambda^2 - 0.9\\lambda - 0.1 &= 0 \\\\[14pt]\n    \\lambda &= -0.1,\\hspace{0.25em} 1 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n    \\end{aligned}\n    $$\n\n    Hence the eigenvalues of $\\bm{T}$ are\n$\\answer{\\lambda_1 = 1}$\nand\n$\\answer{\\lambda_2 = -0.1}$\n  - If we solve the matrix equation\n$(\\bm{T} - \\lambda_1\\bm{I})\\bm{X}_1 = 0$ for $\\bm{X}_1$, we find\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43daacb9-18ea-4c16-95a2-fb95ca77265a/images/ab8eeb68-0980-4c21-b874-b61a478790be/2d586e4ddea07a2285eb1fa9f75086abb2b194bd.svg)\n\n\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43daacb9-18ea-4c16-95a2-fb95ca77265a/images/f67a0937-d7bf-4b33-b82e-1fcdc1ce5fe8/f53d9b7559fe0aefe0ca4d43e52ad029e5d8297a.svg)\n\n\n    If we solve the matrix equation\n$(\\bm{T} - \\lambda_2\\bm{I})\\bm{X}_2 = 0$ for $\\bm{X}_2$, we find\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43daacb9-18ea-4c16-95a2-fb95ca77265a/images/2cb64cff-f0a3-493f-ac1a-03b732ff5ba4/af80511d6715c88ef561e6d34aa6d6378b7adb5a.svg)\n\n\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43daacb9-18ea-4c16-95a2-fb95ca77265a/images/76d7fba5-b9cb-42d1-899a-0d5fa0aaae08/a2ce07ff3687f910a92ae6c7a50a0adcb9d72447.svg)\n\n\n  - Let\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43daacb9-18ea-4c16-95a2-fb95ca77265a/images/4e97be7a-5cf5-44bd-9df2-af987fe52c9b/d3d2a92385bc3829f80d1dbb038a4ca6d2da2b5e.svg)\n\n\n    and\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43daacb9-18ea-4c16-95a2-fb95ca77265a/images/27d1d8e5-421e-4c71-a290-b57585c62b23/270a181183facc02bdd220a7718e100bee9435a0.svg)\n\n\n    Using the inverse of a $2\\times2$ matrix formula, we have\n\n    $$\n    \\begin{align*}\n    \\boldsymbol{P}^{-1} &= \\begin{bmatrix} 4 & 1 \\\\ 7 & -1 \\end{bmatrix}^{-1} \\\\[8pt]\n    &= \\frac{1}{(4)(-1) - (1)(7)}\\,\\begin{bmatrix} -1 & -1 \\\\ -7 & 4 \\end{bmatrix} \\\\[8pt]\n    &= \\frac{1}{-11}\\,\\begin{bmatrix} -1 & -1 \\\\ -7 & 4 \\end{bmatrix} \\\\[8pt]\n    &= \\frac{1}{11}\\,\\begin{bmatrix} 1 & 1 \\\\ 7 & -4 \\end{bmatrix}\n    \\end{align*}\n    $$\n\n    Hence we obtain\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43daacb9-18ea-4c16-95a2-fb95ca77265a/images/c37b436a-26c3-4fb8-b364-a639a53288c8/69e9dd24bc8fb518253d98d878cb0687e81f8ba3.svg)\n\n\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43daacb9-18ea-4c16-95a2-fb95ca77265a/images/b01fc910-82e2-4d0a-8fdc-916cfb9d738d/c99c6072643c6bfe664c6a1955f556ec67aa06ce.svg)\n\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/43daacb9-18ea-4c16-95a2-fb95ca77265a/images/444ca48b-9a25-4645-b746-1f3cd37072f9/3f1ad21341f1ab638a5686cf8e08093b85b57c95.svg)\n\n\n  Hence an expression for the number of customers store A has after\n$n$ years is\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\answer{C(n) = 5520 + 2840(-0.1)^n}\\end{aligned}\n  $$\n\n- Evaluating $C(n)$ for $n = 2$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} C(2) &= 5520 + 2840(-0.1)^2 \\\\[6pt]\n  &= 5548.4 \\\\[6pt]\n  &\\answer{\\approx 5550}\\end{aligned}\n  $$\n\n- $\\answer{5520}$\n',
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
    type: 'ERQ',
    title: 'Question 22',
    content:
      'Zoologists have been collecting data about the migration habits of a\nparticular species of mammals in two regions; region X and region Y.\nEach year $\\text{\\(30\\)\\hspace{0.05em}\\%}$ of the mammals move\nfrom region X to region Y and $15$ % of the\nmammals move from region Y to region X. Assume that there are no mammal\nmovements to or from any other neighboring regions.\n\n- Write down a transition matrix $\\bm{T}$ representing the movements\nbetween the two regions in a particular year. <span class="marks">[2]</span>\n\n- \n  - Find the eigenvalues of $\\bm{T}$.\n  - Find a corresponding eigenvector for each eigenvalue of\n$\\bm{T}$.\n  - Hence write down matrices $\\bm{P}$ and $\\bm{D}$ such that\n$\\bm{T} = \\bm{PDP}^{-1}$. <span class="marks">[6]</span>\n\n\n\nInitially region X had $12\\hspace{0.15em}600$ and region Y had\n$16\\hspace{0.15em}200$ of these mammals.\n\n- Find an expression for the number of mammals living in\nregion Y after\n$n$ years, where $n \\in \\mathbb{Z}^+$. <span class="marks">[5]</span>\n\n- Hence write down the long-term number of mammals living in\nregion Y. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c2355e6-6365-4301-abe2-8b67829ffe0c/images/cb3b0444-5d3c-4a86-be46-749aa861ae5d/35009e6f29440a51333124a9cf115c6f97446de6.svg)\n\n\n  Hence the transition matrix is\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c2355e6-6365-4301-abe2-8b67829ffe0c/images/5a89432a-516d-4dba-80ed-2460e20fff2b/393b8b29d70c6d53f9682112ecda6199299c7cbf.svg)\n\n\n- \n  - If we solve the characteristic equation\n$\\det(\\bm{T} - \\lambda \\bm{I}) = 0$ for $\\lambda$, we get\n\n    $$\n    \\begin{aligned}\n    \\begin{vmatrix}[cc] \\hspace{0.05em} 0.70 - \\lambda & 0.15 \\\\ 0.30 & 0.85 - \\lambda \\hspace{0.25em} \\end{vmatrix} &= 0 \\\\[6pt] \n    (0.70-\\lambda)(0.85-\\lambda) - (0.15)(0.30) &= 0 \\\\[13pt]\n    \\lambda^2 - 1.55\\lambda + 0.55 &= 0 \\\\[14pt]\n    \\lambda &= 0.55,\\hspace{0.25em} 1 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n    \\end{aligned}\n    $$\n\n    Hence the eigenvalues of $\\bm{T}$ are\n$\\answer{\\lambda_1 = 1}$\nand\n$\\answer{\\lambda_2 = 0.55}$\n  - If we solve the matrix equation\n$(\\bm{T} - \\lambda_1\\bm{I})\\bm{X}_1 = 0$ for $\\bm{X}_1$, we find\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c2355e6-6365-4301-abe2-8b67829ffe0c/images/7385fe5c-cee3-46ce-a1bf-5f4e70623d33/a3b42f95a89a08976e80e0c3bafbef2cead4108a.svg)\n\n\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c2355e6-6365-4301-abe2-8b67829ffe0c/images/53f5a66c-1170-4c5d-9ccc-f89cc61d6282/c20ef61f44e6eaadc1ef73b9025e2cc1c0793290.svg)\n\n\n    If we solve the matrix equation\n$(\\bm{T} - \\lambda_2\\bm{I})\\bm{X}_2 = 0$ for $\\bm{X}_2$, we find\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c2355e6-6365-4301-abe2-8b67829ffe0c/images/86118e10-c866-449f-a5e9-ff8d2d9b2d92/2c0ec3c7fbd634f89f96dd3cd28459a23d5b1e1b.svg)\n\n\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c2355e6-6365-4301-abe2-8b67829ffe0c/images/5ff74753-4f5c-4469-baf7-371e4a0f38cc/f485a8ce740799c3230c6383874bccf613a967dd.svg)\n\n\n  - Let\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c2355e6-6365-4301-abe2-8b67829ffe0c/images/3a11f773-b40c-4458-84c0-a8b6286fc501/c9ccb78049cf274dbeb0820300503ddd46fb2376.svg)\n\n\n    and\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c2355e6-6365-4301-abe2-8b67829ffe0c/images/3930d987-5b16-4949-be05-9f867d7db208/be5706c2a630775da2cb427c817421f8dae8a875.svg)\n\n\n    Using the inverse of a $2\\times2$ matrix formula, we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c2355e6-6365-4301-abe2-8b67829ffe0c/images/04dc6965-f24d-40df-ab0f-41394402665e/89b8c6077189b79dbf276838f477ddaa64941c16.svg)\n\n\n    Hence we obtain\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c2355e6-6365-4301-abe2-8b67829ffe0c/images/a2fa2e02-74ae-4fd7-8380-2ecd6c1ba112/9baa9f732717bbe537f55525b38407c4f571f533.svg)\n\n\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c2355e6-6365-4301-abe2-8b67829ffe0c/images/953ec28f-9e0d-4f54-a87e-66cfa09eb28f/9fa003379bd69a8f6ec1b39a1ad141a40353907f.svg)\n\n\n  We further have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8c2355e6-6365-4301-abe2-8b67829ffe0c/images/422d16b1-b4ee-48be-a496-f06ba57b792b/a078da561ae3c9fe8551ce9c3f2d51f6a60e91ea.svg)\n\n\n  Hence the number of mammals living in region Y after $n$ years is\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\answer{C(n) = 19\\hspace{0.15em}200 - 3000\\hspace{0.05em}(0.55^n)}\\end{aligned}\n  $$\n\n- $\\answer{19\\hspace{0.15em}200}$\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 23',
    content:
      'A city has two major security guard companies, company A and company B.\nEach year, $15$ % of customers using company A\nmove to company B and $5$ % of the customers\nusing company B move to company A. All additional losses and gains of\ncustomers by the companies can be ignored.\n\n- Write down a transition matrix $\\bm{T}$ representing the movements\nbetween the two companies in a particular year. <span class="marks">[2]</span>\n\n- \n  - Find the eigenvalues and corresponding eigenvectors of $\\bm{T}$.\n  - Hence write down matrices $\\bm{P}$ and $\\bm{D}$ such that\n$\\bm{T} = \\bm{PDP}^{-1}$. <span class="marks">[6]</span>\n\n\n\nInitially company A and company B both have $3600$ customers.\n\n- Find an expression for the number of customers company A\nhas after $n$ years, where $n\\in\\mathbb{Z}$. <span class="marks">[5]</span>\n\n- Hence write down the number of customers that company A\ncan expect to have in the long term. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a098ef32-f7fd-42d4-8205-ed4e4c09b1ab/images/5c7e02c4-79e8-4cdc-b6ab-cd101e627e3d/0d49e7f96f8e42b0dd6c26bfacc61b3969f694bb.svg)\n\n\n  Hence the transition matrix is\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a098ef32-f7fd-42d4-8205-ed4e4c09b1ab/images/7eeba358-c28a-4ff0-aece-1a390c9bf304/0b24524f041939eba48dded923894b631382e070.svg)\n\n\n- \n  - If we solve the characteristic equation\n$\\det(\\bm{T} - \\lambda \\bm{I}) = 0$ for $\\lambda$, we get\n\n    $$\n    \\begin{aligned}\n    \\begin{vmatrix}[cc] \\hspace{0.05em} 0.85 - \\lambda & 0.05 \\\\ 0.15 & 0.95 - \\lambda \\hspace{0.25em} \\end{vmatrix} &= 0 \\\\[6pt] \n    (0.85-\\lambda)(0.95-\\lambda) - (0.05)(0.15) &= 0 \\\\[13pt]\n    \\lambda^2 - 1.8\\lambda + 0.8 &= 0 \\\\[14pt]\n    \\lambda &= 0.8,\\hspace{0.25em} 1 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n    \\end{aligned}\n    $$\n\n    Hence the eigenvalues of $\\bm{T}$ are\n$\\answer{\\lambda_1 = 1}$\nand\n$\\answer{\\lambda_2 = 0.8}$\nIf we solve the matrix equation\n$(\\bm{T} - \\lambda_1\\bm{I})\\bm{X}_1 = 0$ for $\\bm{X}_1$, we find\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a098ef32-f7fd-42d4-8205-ed4e4c09b1ab/images/4c5b221b-1e08-4495-b709-f54b32613323/09a02d3c5622460ce97f89ae9d61222d24fa6b56.svg)\n\n\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a098ef32-f7fd-42d4-8205-ed4e4c09b1ab/images/bf4dbfcf-05b5-4825-a95f-19de27d09a11/27aaec3c11a839effcd4cf4ac0d055e98b612bae.svg)\n\n\n    If we solve the matrix equation\n$(\\bm{T} - \\lambda_2\\bm{I})\\bm{X}_2 = 0$ for $\\bm{X}_2$, we find\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a098ef32-f7fd-42d4-8205-ed4e4c09b1ab/images/c418099b-bf08-4018-8fdb-cfe63a370e3c/08f42d1db071f790ec321fa6b2a8f2534b32115c.svg)\n\n\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a098ef32-f7fd-42d4-8205-ed4e4c09b1ab/images/11e6aac2-0b5f-4594-a49d-a8a705c06871/48fd992bbd5389ec16141043e35b864750581207.svg)\n\n\n  - Let\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a098ef32-f7fd-42d4-8205-ed4e4c09b1ab/images/b4703a53-0010-4b1f-ad9b-a0af72184a97/3183592849ff6d587396464b4a281d716a020def.svg)\n\n\n    and\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a098ef32-f7fd-42d4-8205-ed4e4c09b1ab/images/e11c1de9-b99b-4ffc-8e46-f2a85d9de572/4d801cf526be47a17caa66cfd5a06708f074e00f.svg)\n\n\n    Using the inverse of a $2\\times2$ matrix formula, we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a098ef32-f7fd-42d4-8205-ed4e4c09b1ab/images/856c93ce-7e01-4971-944f-d621d044ec89/1b89cc1774d4d07b0b77c1eb2bbc62a734c23c74.svg)\n\n\n    Hence we obtain\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a098ef32-f7fd-42d4-8205-ed4e4c09b1ab/images/f40d40de-fd11-43f7-9f83-4679af79777e/7f5e4438993a6d5a6c5f87c605b0b46161663ce7.svg)\n\n\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a098ef32-f7fd-42d4-8205-ed4e4c09b1ab/images/930b7eca-70b8-49a2-9d7c-ce4dc056c981/72588fe16fc61856265f2684631da24db5e16206.svg)\n\n\n  We further have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a098ef32-f7fd-42d4-8205-ed4e4c09b1ab/images/d43dec90-8154-4d24-8ec9-598c69c720db/b3bf7f4e22504a9357eeea0f3bfde1ec1f74f640.svg)\n\n\n  Hence the number of customers company A has after $n$ years is\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\answer{C(n) = 1800 + 1800\\hspace{0.05em}(0.8^n)}\\end{aligned}\n  $$\n\n- $\\answer{1800}$\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 1',
    content:
      'Jurgen is a scientist working for NASA.\nHe maintains a telescope that is in orbit around the Earth.\nTo test the accuracy of the telescope he uses it to measure the radius of the Earth.\nThe radius of the Earth is known to be $6\\hspace{0.1em}378\\hspace{0.1em}137$ metres.\n\n- Jurgen measures the radius of the Earth to be $6\\hspace{0.1em}432\\hspace{0.1em}400$ metres. What is the percentage error in his measurement? <span class="marks">[2]</span>  \n\nJurgen uses his measurement to calculate the circumference of the Earth. He assumes the Earth is spherical.\n\n- \n  - What value for the circumference of the Earth does Jurgen obtain? Round your answer to $4$ significant figures.\n  - Write down the answer to part (b)(i) in the form $a\\times10^k$, where $1\\leq a<10$ and $k\\in \\mathbb{Z}$. <span class="marks">[3]</span>    \n\n',
    markScheme:
      "\n- Using the formula we can write the percentage error in Jurgen's estimate as\n\n  $$\n  \\begin{align*}\n      \\epsilon &=\\bigg|\\frac{6\\hspace{0.1em}432\\hspace{0.1em}400 - 6\\hspace{0.1em}378\\hspace{0.1em}137}{6378137}\\bigg|\\times 100 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n      &=0.8507656...\\\\[6pt]\n      &=\\hspace{0.275em}\\tcbhighmath{0.851\\%} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- \n  - As Jurgen has assumed the Earth is spherical we can use the formula for the circumference of a circle to find the circumference of the Earth. Hence\n\n    $$\n    \\begin{align*}\n        C_{\\text{Earth}}&=2\\pi r \\tag*{\\textbf{(M1)}}\\\\\n        &=2\\pi\\times 6\\hspace{0.1em}432\\hspace{0.1em}400\\\\\n        &=40\\hspace{0.1em}415\\hspace{0.1em}961\\\\[6pt]\n        &=\\hspace{0.275em}\\answer{{40\\,420\\,000} \\text{ metres}} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - \n    $$\n    \\begin{align*}\n        &=\\hspace{0.275em}\\answer{4.042 \\times 10^7 \\text{ metres}} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n",
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 2',
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
    title: 'Question 3',
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
    title: 'Question 4',
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
    title: 'Question 5',
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
    title: 'Question 6',
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
    title: 'Question 7',
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
    title: 'Question 8',
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
    title: 'Question 9',
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
    title: 'Question 10',
    content:
      'A cuboid has the following dimensions: $\\text{length} = 9.6\\hspace{0.25em}$cm, $\\text{width} = 7.4\\hspace{0.25em}$cm, and $\\text{height} = 5.2\\hspace{0.25em}$cm, measured correct to the nearest millimetre.\n\n- Using these measurements, calculate the volume of the cuboid, in cm$^3$. Give your answer to two decimal places. <span class="marks">[2]</span>  \n\nThe lower and upper bounds for the length of the cuboid can be expressed as $9.55 \\leq l < 9.65$.\n\n- Write similar expressions for\n  \n  - the width;\n  - the height. <span class="marks">[2]</span>\n\n\n- Hence, calculate the minimum volume of the cuboid. Give your answer to three significant figures. <span class="marks">[2]</span>\n\n- Write your answer to part (c) in the form $a\\times10^k$, where $1 \\leq a < 10$ and $k \\in \\mathbb{Z}$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the volume of a cuboid formula $V = l \\times w \\times h$, we\nget\n\n  $$\n  \\begin{aligned}\n  V &= 9.6\\times7.4\\times5.2 \\\\[6pt]\n  &= 369.408 \\\\[6pt]\n  &\\answer{= 369.41\\hspace{0.25em}\\mathrm{cm}^3 \\text{ (2 d.p.)}} \n  \\end{aligned}\n  $$\n\n- \n  - $\\answer{7.35 \\leq w < 7.45}$\n  - $\\answer{5.15 \\leq h < 5.25}$\n\n- Using the lower bound for each dimension, and the volume formula, we get\n\n  $$\n  \\begin{align*}\n  V &= 9.55\\times7.35\\times5.15 \\\\[6pt]\n  &= 361.491... \\\\[6pt]\n  &\\tcbhighmath{= 361\\hspace{0.25em}\\mathrm{cm}^3 \\text{ ($3$ s.f.)}}\n  \\end{align*}\n  $$\n\n- $\\answer{3.61\\times10^2}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 11',
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
    title: 'Question 12',
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
    type: 'SAQ',
    title: 'Question 1',
    content:
      'The ocean pressure, $P$, under sea level can be modelled by the function\n\n$$\nP(D) = \\dfrac{D}{10}+1\n$$\n\nwhere $D$ is the distance in metres below sea\nlevel and $P$ is measured in atmospheres.\nA submarine cruising near the surface is submerged according to the\nfunction\n\n$$\nD(t) = 10+5t\n\n$$\n\nwhere $t$ is measured in minutes and $D$ is\nthe distance the submarine is below sea level, measured in\nmetres.\n\n- Find the composite function $P\\circ D$ and explain what it means in\nthe\ncontext of this question<span class="marks">[3]</span>\n\n- Find and interpret $(P\\circ D)(10)$.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The composite function can be expressed as\n\n  $$\n  \\begin{aligned}\n  (P\\circ D) (t) &= P(D(t)) \\rule[-3.5mm]{0pt}{4mm}\\\\\n  &= P(10+5t)\\rule[-3.5mm]{0pt}{9mm}\\\\\n  &= \\dfrac{10+5t}{10}+1 \\rule[-4.5mm]{0pt}{9mm}\\\\\n  &\\hspace{0.28em}\\answer{= 2+\\dfrac{t}{2}}\\rule[-5.5mm]{0pt}{9mm}\\qref{(1)}\\end{aligned}\n  $$\n\n  This composite function represents the ocean pressure (in atmospheres) outside the submarine at time t minutes.\n- Substituting $t=10$ in (1), we get\n\n  $$\n  \\begin{aligned}\n  (P\\circ D)(10)&=2+\\dfrac{10}{2}\\rule[-3.5mm]{0pt}{4mm}\\\\\n  &\\hspace{0.28em}\\answer{=7}\\rule[-3.5mm]{0pt}{9mm}\\end{aligned}\n  $$\n\n  This result means that after 10 minutes, the ocean pressure outside the submarine is 7 atmospheres.\n',
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
      'The temperature, $T$, measured in degrees Celsius, above ground level in\nBagan, Myanmar, can be modelled by the function\n\n$$\nT(H)=37-\\dfrac{H}{160}\n$$\n\nwhere $H$ is the height above ground,\nmeasured in metres.\nThe height, $H$, of a hot air balloon carrying tourists on a particular\nday in Bagan is given by the function\n\n$$\nH(t) = 40+10t\n\n$$\n\nwhere $H$ is in\nmetres, and $t$ is the time in minutes after reaching cruising\nheight.\n\n- Find the composite function $T\\circ H$ and explain what it means in\nthe\ncontext of this question.<span class="marks">[3]</span>\n\n- Find $(T\\circ H)(36)$ and explain what it means in the context of\nthis\nquestion.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The composite function can be expressed as\n\n  $$\n  \\begin{aligned}\n  (T\\circ H) (t) &= T(H(t)) \\rule[-3.5mm]{0pt}{4mm}\\\\\n  &= T(40+10t)\\rule[-3.5mm]{0pt}{9mm}\\\\\n  &= 37-\\dfrac{40+10t}{160} \\rule[-4.5mm]{0pt}{9mm}\\\\\n  &= 37-\\dfrac{40}{160}-\\dfrac{10t}{160} \\rule[-4.5mm]{0pt}{9mm}\\\\\n  &\\hspace{0.28em}\\answer{= 36.75-\\dfrac{t}{16}}\\rule[-5.5mm]{0pt}{9mm}\\qref{(1)}\\end{aligned}\n  $$\n\n  This composite function represents the temperature outside the hot air balloon after $t$ minutes of the balloon cruising.\n- Substituting $t=36$ in (1), we get\n\n  $$\n  \\begin{aligned}\n  (T\\circ H)(36)&=36.75-\\dfrac{36}{16}\\rule[-3.5mm]{0pt}{4mm}\\\\\n  &\\hspace{0.28em}\\answer{=34.5}\\rule[-3.5mm]{0pt}{9mm}\\end{aligned}\n  $$\n\n  It means that after 36 minutes of the hot air balloon cruising, the temperature outside the balloon is 34.5 degrees Celcius.\n',
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
    title: 'Question 3',
    content:
      'The subscription fee for an online project management software by\nAB-Tech is $\\$ 40$ per month. If the customer buys for a whole year in\nadvance, a discount of $\\$130$ is applied.\nThis can be modelled by the following function, $P(n)$, which gives the\ntotal cost when paying annually for the subscription.\n\n$$\nP(n) = 40n - 130,\\quad n\\geq 12\n$$\n\nwhere $n$ is the number months.\n\n- Find the total cost of buying a subscription for $2$ years.\n<span class="marks">[2]</span>\n\n- Find $P^{-1}(1790)$. <span class="marks">[2]</span>\n\n\nThe subscription price for a different online project management tool by\nYZ-tech is $\\$35$ per month, however customers can only purchase\nannually in advance, and there are no discounts. The total subscription\ncost of YZ-tech\'s software is less than AB-tech\'s software when $n>k$ .\n\n- Find the minimum value of $k$. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- Substituting $n=24$ into the $P(n)$ function, we get\n\n  $$\n  \\begin{aligned}\n  P(n) &=40n-130\\\\[6pt]\n  P(24) &= 40(24)-130 \\\\[6pt]\n  &\\hspace{0.5em}\\answer{=\\$ 830}\\end{aligned}\n  $$\n\n- Let's denote $P(n)$ by $y$. To find the inverse we can interchange\nthe variables $n$ and $y$ and rearrange for $y$, as follows\n\n  $$\n  \\begin{aligned}\n  y &= 40n-130 \\\\[6pt]\n  n&=40y-130\\\\[6pt]\n  40y&=n+130\\\\[6pt]\n  y&=\\dfrac{n+130}{40}\\\\[6pt]\n  P^{-1}(n) &= \\dfrac{n+130}{40}\\end{aligned}\n  $$\n\n  We can now find\n$P^{-1}(1790)$ as follows\n\n  $$\n  \\begin{aligned}\n  P^{-1}(1790)&=\\dfrac{1790+130}{40}\\\\[6pt]\n  &\\hspace{-3.5em}\\answer{P^{-1}(1790)=48 \\text{ months}}\\end{aligned}\n  $$\n\n- For AB-tech's software we we were given the pricing function\n\n  $$\n  P(n)=40n-130\n  \n  $$\n\n  For YZ-tech, we can define the function, $S(n)$, to\nrepresent the subscription price for their software\n\n  $$\n  S(n)=35n\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/2b908e8c-786e-4fec-844c-19b9653ea308/images/7386b1f2-6825-49b7-88df-da2a1e5501e7/7402d7e1fc9d51e4e9f6b0f5ea74f75143d1438e.svg)\n\n\n  From the graph, $S(n) < P(n)$ for $n>26$.\n  The price of YZ-tech's software is less than AB-tech's when $n>26$.\n  Therefore,  $\\answer{k=26}$\n",
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
    title: 'Question 4',
    content:
      'A tyre manufacturing company has found that the number of tyres it\nproduces, $N$, can be modelled by the function\n\n$$\nN(t)=3t-9\n\n$$\n\nwhere $t$\nis the number of hours the factory operates per day, with a minimum of 3\nhours.\nThe profit the company makes, $P$, in dollars, depends on the number of\ntyres produced, and is modelled by the function\n\n$$\nP(N)=60N-850\n\n$$\n\nwhere\n$N$ is the number of tyres produced.\n\n- Find the company\'s profit or loss if it operates for $6$ hours per\nday.<span class="marks">[2]</span>\n\n- Find the company\'s profit in terms of the hours of operation per\nday, $t$.<span class="marks">[2]</span>\n\n- Determine the number of hours the company needs to operate the\nfactory per day in order to earn a positive profit. Give your answer\nto the nearest hour.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Substituting $t=6$ in $N(t)$, we get\n\n  $$\n  \\begin{aligned}\n  N(6) &= 3(6)-9 = 9\\\\\n  \\text{Thus, the profit is given by P(9)}\n  P(9) &= 60(9)-850 = -310\\end{aligned}\n  $$\n\n  Therefore, operating $6$\nhours a day, the company has a loss:\n$\\answer{\\text{-310}}$\n- The profit in terms of the hours of operation per day can be found\nby the composite function $P\\circ N$. Hence, we get\n\n  $$\n  \\begin{aligned}\n  (P\\circ N)(t) &= P(N(t)) \\rule[-3mm]{0pt}{4mm}\\\\\n  &= P(3t-9) \\rule[-3mm]{0pt}{7mm}\\\\\n  &= 60(3t-9)-850\\rule[-3mm]{0pt}{7mm}\\\\\n  &\\hspace{-4.55em}\\answer{(P\\circ N)(t) = 180\\hspace{0.05em}t-1390}\\qref{(1)}\\rule[0mm]{0pt}{4mm}\\end{aligned}\n  $$\n\n- The company has a positive profit if (1) is greater than 0. Hence\n\n  $$\n  \\begin{aligned}\n  (P\\circ N)(t) &>0\\rule[-3mm]{0pt}{4mm}\\\\\n  180t-1390 &> 0 \\rule[-3mm]{0pt}{9mm}\\\\\n  t &> \\dfrac{1390}{180} \\rule[-3mm]{0pt}{9mm}\\\\\n  t &> 7.72.\\rule[0mm]{0pt}{5.5mm}\\end{aligned}\n  $$\n\n  Therefore, the\nfactory needs to operate\n$\\answer{8}$\nhours per day in order for the company to earn a positive profit.\n',
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
      'The number of fish in a lake, $f$, is given by the function\n\n$$\n\\begin{align*}\n    f(x) &= 450\\,e^{-0.1x}+50\n\\end{align*}\n$$\n\nWhere $x$ is the approximate concentration of algae in the lake, measured in parts per billion (ppb) and $x \\geq 0$.\n\n- Determine the range of $f$. <span class="marks">[2]</span>\n\n- Find an expression for $f^{-1}(x)$. <span class="marks">[3]</span>\n\n\nThe lake is considered "healthy" if there are at least $430$ fish at any given time.\n\n- Calculate the range of algae concentrations for which the lake can be considered healthy. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- A sketch of $f(x)$ on the G.D.C. shows that the function has a $y$-intercept at $500$, and is a decreasing function.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a63d7358-95e5-47b5-8fd1-6ae2a911d1ab/images/970c948b-055a-4278-93f2-46aa7699c0c7/1207.JPEG)\n\n\n  We can also see that as $x \\to \\infty$, $f(x) \\to 50$ (but it never reaches $50$). Therefore the range of $f$ is\n\n  $$\n  \\begin{align*}\n  &\\tcbhighmath{50 < f \\leq 500} \\tag*{\\textbf{A2}}\n  \\end{align*}\n  $$\n\n- To find the inverse function, we will first re-write our function using $y$ to represent $f(x)$, this will make manipulation of the function easier. We have\n\n  $$\n  \\begin{align*}\n  y &= 450\\,e^{-0.1x}+50 \\hspace{3em}\\text{[Where $y=f(x)$]}\n  \\end{align*}\n  $$\n\n  We now switch $x$ and $y$, thereby creating the inverse function.\n\n  $$\n  \\begin{align*}\n  x &= 450\\,e^{-0.1y}+50 \\hspace{3em}\\text{[Where $y=f^{-1}(x)$]} \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Now we can rearrange to make $y$ the subject. This will be our inverse function.\n\n  $$\n  \\begin{align*}\n  x - 50 &= 450\\,e^{-0.1y} \\\\[8pt]\n  \\frac{x-50}{450} &= e^{-0.1y} \\\\[8pt]\n  \\ln \\left(\\frac{x-50}{450}\\right) &= -0.1y \\tag*{\\textbf{(M1)}}\\\\[8pt]\n  -10\\,\\ln \\left(\\frac{x-50}{450}\\right) &= y\n  \\end{align*}\n  $$\n\n  We can now substitute $y=f^{-1}(x)$ for our final answer.\n\n  $$\n  \\begin{align*}\n  &\\tcbhighmath{f^{-1}(x) = -10\\,\\ln \\left(\\frac{x-50}{450}\\right)} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We found in part (a) that the maximum number of fish in the lake is $500$, and this occurs when the concentration of algae is 0 ppb.\n\n  $$\n  \\begin{align*}\n   \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  For the lake to be considered healthy, the minimum number of fish is $430$, and this will coincide with the maximum allowable algae concentration.\n  That is, the maximum algae concentration is $a$, such that $f(a)=430$.\n  Using the relationship between a function and its inverse, we could therefore say $f^{-1}(430)=a$.\n  Substituting the value $430$ into our inverse function from part (b), we have\n\n  $$\n  \\begin{align*}\n  f^{-1}(430) &= -10\\,\\ln \\left(\\frac{430-50}{450}\\right) \\tag*{\\textbf{(M1)}}\\\\[8pt]\n  &= 1.6907... \\\\[8pt]\n  &= 1.69\\,\\text{(3 s.f.)}\n  \\end{align*}\n  $$\n\n  Hence the range of algae concentrations for which the lake can be considered healthy, in parts per billion, is\n\n  $$\n  \\begin{align*}\n  &\\tcbhighmath{0 \\leq x \\leq 1.69} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 6',
    content:
      'The circumference, $C$, of a given circle can be represented by the\nfunction\n\n$$\n\\begin{aligned}\nC(A) &= 2\\pi\\sqrt{\\dfrac{A}{\\pi}}, \\hspace{0.5em} A \\geq 0,\\end{aligned}\n$$\n\nwhere $A$ is the area of the circle.\nThe graph of the function $C$, for $0 \\leq A \\leq 24$, is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/0b7df521-ef1b-4c8a-87b1-32e564791325/images/ce866e5f-cd7d-44ed-9b43-19469f4d4737/3388e210bb4d6f02426816cb2651396f2822c4c1.svg)\n\n\n\n- Find the value of $C(24)$. <span class="marks">[1]</span>\n\n- On the grid above, draw the graph of the inverse function, $C^{-1}$.\n<span class="marks">[3]</span>\n\n- In the context of the question, explain the meaning of\n$C^{-1}(2\\pi) = \\pi$. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Evaluating $C(A)$ for $A = 24$, we get\n\n  $$\n  \\begin{aligned}\n  C(A) &= 2\\pi\\sqrt{\\dfrac{24}{\\pi}} \\\\[6pt]\n  &\\answer{\\approx 17.4}\\end{aligned}\n  $$\n\n- If we draw the graph of the inverse function, $C^{-1}$, on the grid\nbelow, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0b7df521-ef1b-4c8a-87b1-32e564791325/images/3b17f6c6-ed96-4a9a-b40e-195870b66409/fae26733051cc1a7c15c3478abb0d0697e69d7fa.svg)\n\n\n- $\\answer{\\text{For a given circle, when the circumference is \\(2\\pi\\), the area is \\(\\pi\\)}}$\n',
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
    title: 'Question 7',
    content:
      'A town is planning to construct a jogging path in a grass field\n$170$ m long and $70$ m\nwide. The path is to be the shape of a rectangle with two semicircles of\nradius $x$, as shown in the diagram. The sides of the rectangle\nconnecting the circles are to be $100$ m long.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/3b56cb39-04a1-4c8f-b16c-f5a5245daaaa/images/d44b0d34-7ffb-4949-8d1e-a3dbe9c818bb/22448faee8b9c6574b3fdefa8505f67030a94583.svg)\n\n\n\n- Write down a function, $P$, (in metres) for the perimeter of the\njogging path, in terms of the radius, $x$.<span class="marks">[1]</span>\n\n- Determine the domain and range of $P$, taking into consideration the\ndimensions of the grass field.<span class="marks">[2]</span>\n\n- Find an equation for the inverse function $P^{-1}(x)$. Express your\nanswer in the form $P^{-1}(x)=mx+c$.<span class="marks">[2]</span>\n\n\nThe designers of the path are deciding whether the total length of the\npath should be $300$ m,\n$400$ m, or $500$ m. The\ndesigners want to maximise the perimeter of the path, but fit the path\nin the grass field.\n\n- Determine which length is most suitable, given the\ndimensions of the grass field.<span class="marks">[2]</span>  \n',
    markScheme:
      "\n- The perimeter for the path is the sum of the two straight sides\nconnecting the circles and the perimeter of a complete circle of\nradius $x$. We get\n\n  $$\n  \\answer{P(x) = 200+2\\pi x}\n  $$\n\n- The length of the path will be $100+2x$ and its width $2x$.\nTherefore we require $100+2x\\leq 170$ and $2x\\leq 70$. Hence\n\n  $$\n  \\begin{aligned}\n  \\answer{\\text{Domain: } 0\\leq x \\leq 35.}\\\\\n  \\end{aligned}\n  $$\n\n  For\nthe range, the function $P(x)$ is increasing and $P(0)=200$ and\n$P(35)=200+70\\pi$. We get\n\n  $$\n  \\begin{aligned}\n  \\answer{\\text{Range: } 200\\leq P(x) \\leq 200+70\\pi.}\\\\\n  \\end{aligned}\n  $$\n\n- Let's denote $P(x)$ by $y$. To find the inverse we can interchange\nthe variables $x$ and $y$ and rearrange for $y$, as follows\n\n  $$\n  \\begin{aligned}\n  y &= 200+2\\pi x\\rule[-3.5mm]{0pt}{3mm}\\\\\n  x &= 200+2\\pi y\\rule[-3.5mm]{0pt}{9mm}\\\\\n  y &= \\dfrac{x-200}{2\\pi}\\rule[-3.5mm]{0pt}{9mm}\\\\ \n  &\\hspace{-3.2em}\\answer{P^{-1}(x) = \\dfrac{1}{2\\pi}x - \\dfrac{100}{\\pi}}\\rule[0mm]{0pt}{5.5mm}\\end{aligned}\n  $$\n\n- For each of the proposed perimeters $P$, we can find the radius\nvalue $x$ as $x=P^{-1}(P)$, then the length and width of the running\ntrack can be calculated, as shown in the following table.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/3b56cb39-04a1-4c8f-b16c-f5a5245daaaa/images/a51374e0-38d2-4194-a69c-09dd7705203d/8985560368df68be350c8eca5afbe5b19a733963.svg)\n\n\n  From the table, we can see that the largest perimeter of the options\nthat still fit inside the grass field dimensions is\n\n  $$\n  \\answer{P=400\\hspace{0.25em}\\text{m}.}\n  $$\n\n",
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
      'Harry is planning on constructing a glass window in one of the outer\nwalls of his house. The dimensions of the wall space available are 2m x\n2m. Harry wants the window to be in the shape shown in the diagram\nbelow. The bottom section is a rectangle and the top part is a\nsemicircle of radius $x$ m. Harry wants the\nheight of the rectangle to be fixed at 1 m.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/3b6eacbd-eff9-4731-9da7-653273efcc3e/images/2857a1b4-2a9c-44c8-8215-923593110245/4b81f49038bd3a70fed3ed55e752da67f426bdf2.svg)\n\n\n\n- Write down a function $P$ (in metres) for the perimeter of the\nwindow in terms of the radius, $x$.<span class="marks">[1]</span>\n\n- Determine the domain and range of $P$, taking into consideration the\ndimensions of the available wall.<span class="marks">[2]</span>\n\n- Find an equation for the inverse function $P^{-1}(x)$. Express your\nanswer in the form $P^{-1}(x)=mx+c$.<span class="marks">[2]</span>\n\n\nHarry wants to maximise the size of the window, however the window frame\nthat covers the perimeter of the window can only be 5, 6, or 7 metres\nlong, due to manufacturing restrictions.\n\n- Determine which perimeter length is the best option for\nHarry.<span class="marks">[2]</span>  \n',
    markScheme:
      "\n- The perimeter for the window is the sum of the three sides of the\nrectangle and the semicircle, thus we get\n\n  $$\n  \\begin{aligned}\n  P(x) &= \\text{Rectangle width}+2\\times\\text{Rectangle height}+\\text{Semicircle} \\rule[-3mm]{0pt}{4mm}\\\\\n  &= 2x+2(1)+\\dfrac{\\cancel{2}\\pi x}{\\cancel{2}} \\rule[-3mm]{0pt}{8mm}\\\\\n  &\\hspace{-2.15em}\\answer{P(x) = 2+(2+\\pi)x}\\rule[0mm]{0pt}{5mm}\\end{aligned}\n  $$\n\n- The width of the window will be $2x$ and the height $1+x$.\nTherefore, we require $2x\\leq 2$ and $1+x\\leq 2$.\nHence\n\n  $$\n  \\begin{aligned}\n  \\answer{\\text{Domain: } 0\\leq x \\leq 1.}\\\\\n  \\end{aligned}\n  $$\n\n  Now\nfor the range, the function $P(x)$ is increasing and $P(0)=2$ and\n$P(1)=4+\\pi$. Therefore,\n\n  $$\n  \\begin{aligned}\n  \\answer{\\text{Range: } 2\\leq P(x) \\leq 4+\\pi.}\\\\\n  \\end{aligned}\n  $$\n\n- Let's denote $P(x)$ by $y$. To find the inverse we can interchange\nthe variables $x$ and $y$ and rearrange for $y$, as follows\n\n  $$\n  \\begin{aligned}\n  y &= 2+(2+\\pi)x\\rule[-3mm]{0pt}{3mm}\\\\\n  x &= 2+(2+\\pi)y\\rule[-3mm]{0pt}{9mm}\\\\\n  y &= \\dfrac{x-2}{(2+\\pi)}\\rule[-3mm]{0pt}{9mm}\\\\ \n  &\\hspace{-3.2em}\\answer{P^{-1}(x) = \\dfrac{x-2}{(2+\\pi)}}\\rule[0mm]{0pt}{6mm}\\end{aligned}\n  $$\n\n- For each of the proposed perimeters $P$, we can find the radius\nvalue $x$ as $x=P^{-1}(P)$, then the length and width of the window\ncan be calculated, as shown in the following table\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/3b6eacbd-eff9-4731-9da7-653273efcc3e/images/d54f8441-1a6b-4d76-8a64-a7b4d6867247/95900dceeb57876cf3bec3ce67dc138811471933.svg)\n\n\n  From the table, we can see that the perimeter that maximizes the\ndimension of the window that fits in the wall is\n\n  $$\n  \\answer{P=7\\hspace{0.25em}\\text{m}.}\n  $$\n\n",
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
      'The radius of a cylindrical container with height\n$x$ cm is\n\n$$\n\\begin{aligned}\nr(x) = \\dfrac{56}{x},\\qquad 4\\leq x\\leq 16\\end{aligned}\n$$\n\n\n- Find the range of $r$.<span class="marks">[3]</span>  \n\nThe function $r^{-1}$ is the inverse function of\n$r$.\n\n- \n  - Find $r^{-1}(8)$.\n  - Interpret the answer to part (b) (i) in\ncontext.\n  - Find the range of $r^{-1}$.<span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- A sketch of $r(x)$ shows that the minimum value is found where $x=16$ and the maximum value is found where $x=4$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/47ec87ad-d03d-40ae-b070-86ca7d589f8a/images/5e3319c6-2a5b-4f5e-9751-0736b3e580f0/AI1002a.PNG)\n\n\n  Evaluating $r$ at the endpoints of its domain, we get\n\n  $$\n  \\begin{align*}\n  r(4) &= \\dfrac{56}{4} = 14 \\\\[11pt]\n  r(16) &= \\dfrac{56}{16} = 3.5\n  \\end{align*}\n  $$\n\n  Therefore the range of $r$ is $\\answer{3.5 \\leq r \\leq 14}$\n- \n  - Let $r^{-1}(8)=a$. This implies that $r(a)=8$.\n\n    $$\n    \\begin{align*}\n    \\dfrac{56}{a} &= 8 \\\\[11pt]\n    a &= \\dfrac{56}{8} \\\\[11pt]\n    a &= 7\n    \\end{align*}\n    $$\n\n    $r(7)=8$ and therefore $\\answer{r^{-1}(8) = 7}$\n  - When the radius of the container is $8\\,$cm the height is $7\\,$cm\n  - Using the definition of a function inverse, we have\n\n    $$\n    \\begin{align*}\n    \\text{range of $r^{-1}$} &= \\text{domain of $r$}\n    \\end{align*}\n    $$\n\n    Therefore the range of $r^{-1}$ is $\\answer{4 \\leq r^{-1} \\leq 16}$\n\n',
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
    title: 'Question 10',
    content:
      'A conical funnel is used to add water to a scientific experiment. The\nfunnel initially contains 3 L\nof water, and the water flows out of the funnel at a rate of\n40 mL per minute.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/56f5072c-2f53-49d8-b6ea-7999bc16ba97/images/ed36937a-80cb-4a49-9a96-eaeafce08153/8c377cf98298a7a684cfd677cfc233747ca8bc06.svg)\n\n\n\n- Determine a function for the volume $V$ (in millilitres) of water\nremaining in the funnel after $t$ minutes.<span class="marks">[2]</span>\n\n- If there is $V$ mL of water in the funnel, show that the height of\nthe water can be expressed as\n$h(V)=3 \\sqrt[3]{\\dfrac{V}{\\pi}}$ cm.\n  <span class="marks">[4]</span>\n\n- Find the composite function $h\\circ V$, and interpret what it means\nin the context of this question.<span class="marks">[3]</span>\n\n- Find $(h\\circ V)(15)$ and explain what it means in the context of\nthis question.<span class="marks">[2]</span>\n\n',
    markScheme:
      "\n- The volume of water starts at 3000 mL and decreases 40 mL per\nminute. Hence, we get\n\n  $$\n  \\answer{V(t)=3\\hspace{0.15em}000-40\\hspace{0.1em}t}\n  $$\n\n- Let's consider a cross-sectional view of the right part of the\nfunnel, as shown in the figure\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/56f5072c-2f53-49d8-b6ea-7999bc16ba97/images/8916d387-34e1-40df-8464-c10b8811efef/1fa1545b27c671db53373226d01df2aa7fd58824.svg)\n\n\n  From the diagram, using similarity, we get\n\n  $$\n  \\begin{aligned}\n  \\dfrac{r}{10} &= \\dfrac{h}{30} \\\\[7pt]\n  r &= \\dfrac{h}{3}\\end{aligned}\n  $$\n\n  Using the volume formula for a cone, we get\n\n  $$\n  \\begin{aligned}\n  V &= \\dfrac{1}{3} \\pi \\left(\\dfrac{h}{3}\\right)^2 h\\rule[-3.5mm]{0pt}{10mm} \\\\\n  V &= \\dfrac{1}{27} \\pi h^3 \\rule[-3.5mm]{0pt}{10mm}\\\\\n  h^3 &= 27\\dfrac{V}{\\pi} \\rule[-3.5mm]{0pt}{10mm}\\\\\n  &\\hspace{-0.3em}\\answer{h = 3 \\sqrt[3]{\\dfrac{V}{\\pi}}}\\rule[0mm]{0pt}{6.5mm}\\end{aligned}\n  $$\n\n- The composite function can be expressed as\n\n  $$\n  \\begin{aligned}\n  (h\\circ V)(t) &= h(3000-40\\hspace{0.1em}t) \\\\[7pt]\n  &\\hspace{0.3em}\\answer{= 3 \\sqrt[3]{\\dfrac{3000-40\\hspace{0.1em}t}{\\pi}}}\\qref{(1)}\\\\\n  \\end{aligned}\n  $$\n\n  This composite function represents the height of water remaining in the funnel after $t$ minutes.\n- Evaluating $t=15$ in (1), we get\n\n  $$\n  \\begin{aligned}\n  (h\\circ V))(15) &= 3 \\sqrt[3]{\\dfrac{3000-40\\hspace{0.1em}(15)}{\\pi}} \\\\[8pt]\n  &\\hspace{0.3em}\\answer{\\approx 27.4\\hspace{0.25em}\\text{cm}}\\hspace{4em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n\n  $$\n  \\answer{\\text{It means that after 15 minutes the height of water remaining in the funnel is $27.4$ cm.}}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '11',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 11',
    content:
      'Consider the following composite shape, consisting of a rectangle of\nlength 50 cm and varying width\n$x$ cm, and three-quarter circle with its center\nat a vertex of the rectangle and radius equal to the rectangle width,\n$x$ cm.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/6067168f-a8d6-43d6-af12-c8d85c12a9bc/images/4f9c52d8-322c-471b-bd07-d4575afde2e5/9ed23f8a95d65fb8498a74d7b3a0d8921a8b6a79.svg)\n\n\n\n- Determine a function, $L$, in terms of $x$, for the total length of\nline seen in the diagram. This consists of both the perimeter of the\nrectangle and circumference of the three-quarter circle.<span class="marks">[2]</span>  \n\nConstraints are placed on the dimensions of the composite shape. The\ntotal length and width of the composite shape cannot exceed\n$100$ cm and $80$ cm\nrespectively.\n\n- Determine the domain and range of $L$, taking into\nconsideration these constraints.<span class="marks">[2]</span>\n\n- Find an equation for the inverse function $L^{-1}(x)$.\nExpress your answer in the form $L^{-1}(x)=mx+c$.<span class="marks">[2]</span>\n\n\nSuppose $L$ can only be in multiples of $100$ cm\n(i.e., $100$ cm,\n$200$ cm, $300$ cm,\n...).\n\n- Determine the maximum length of $L$ that satisfies the\nconstraints.<span class="marks">[2]</span>  \n',
    markScheme:
      "\n- The total length of the line, $L$, is the sum of the rectangle\nperimeter and $3/4$'s of the circumference of a circle of radius\n$x$. We get\n\n  $$\n  \\begin{aligned}\n  L(x) &= 2(50) + 2x + \\dfrac{3}{4}(2\\pi x) \\\\[7pt]\n  &= 100 + 2x + \\dfrac{3\\pi x}{2} \\\\[7pt]\n  &\\hspace{-2.2em}\\answer{L(x) = 100+\\left(2+\\dfrac{3\\pi}{2}\\right)x}\\end{aligned}\n  $$\n\n- Since the total length cannot exceed\n$100$ cm, we get $50+x\\leq 100$. Similarly,\nthe total width cannot exceed $80$ cm,\ntherefore $2x\\leq 80$. Hence\n\n  $$\n  \\begin{aligned}\n  \\answer{\\text{Domain: } 0 < x \\leq 40.}\\end{aligned}\n  $$\n\n  The\nfunction $L(x)$ is increasing, $L(0)=100$, and $L(40)=180+60\\pi$.\nHence\n\n  $$\n  \\begin{aligned}\n  \\answer{\\text{Range: } 100 < L(x) \\leq 180+60\\pi.}\\end{aligned}\n  $$\n\n- Let's denote $L(x)$ by $y$. To find the inverse we can interchange\nthe variables $x$ and $y$ and rearrange for $y$, as follows\n\n  $$\n  \\begin{aligned}\n  y &= 100+\\left(2+\\dfrac{3\\pi}{2}\\right)x\\rule[-3.5mm]{0pt}{3mm}\\\\\n  x &= 100+\\left(2+\\dfrac{3\\pi}{2}\\right)y\\rule[-3.5mm]{0pt}{9mm}\\\\\n  y &= \\dfrac{2(x-100)}{4+3\\pi}\\rule[-3.5mm]{0pt}{9mm}\\\\ \n  &\\hspace{-3.2em}\\answer{L^{-1}(x) = \\dfrac{2x}{4+3\\pi}-\\dfrac{200}{4+3\\pi}}\\rule[0mm]{0pt}{5.5mm}\\end{aligned}\n  $$\n\n- For each of the possible values of $L$, we can find the radius value\n$x$ since $x=L^{-1}(L)$. The length and width of the composite shape\ncan then be calculated and compared against the constraints, as\nshown in the following table.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6067168f-a8d6-43d6-af12-c8d85c12a9bc/images/0fb0cecd-64f1-4b3c-8840-8c94b4968b3a/881fb34d4c0132d6f520788601f45a7a6a476a82.svg)\n\n\n  From the table, we can see that the largest line length of the\noptions that satisfies the constraints is\n\n  $$\n  \\answer{L=300\\hspace{0.25em}\\text{cm}.}\n  $$\n\n",
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
    title: 'Question 12',
    content:
      'The perimeter, $P$, of a given rectangle can be represented by the\nfunction\n\n$$\n\\begin{aligned}\nP(A) &= 6\\sqrt{\\dfrac{A}{2}}, \\hspace{0.5em} A \\geq 0,\\end{aligned}\n$$\n\nwhere $A$ is the area of the rectangle.\nThe graph of the function $P$, for $0 \\leq A \\leq 24$, is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/ab39cb62-6642-463f-8d55-b3b4e61d9fc1/images/d77d8ca4-60bf-47df-b71e-f5b1a82ac6ef/13be64c3a363091e834dcc3848fda5575c4c9b07.svg)\n\n\n\n- Find the value of $P(24)$. <span class="marks">[1]</span>\n\n- On the grid above, draw the graph of the inverse function, $P^{-1}$.\n<span class="marks">[3]</span>\n\n- In the context of the question, explain the meaning of\n$P^{-1}(12) = 8$. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Evaluating $P(A)$ for $A = 24$, we get\n\n  $$\n  \\begin{aligned}\n  P(A) &= 6\\sqrt{\\dfrac{24}{2}} \\hspace{0.6em}  \\\\[6pt]\n  &\\answer{\\approx 20.8}\\end{aligned}\n  $$\n\n- If we draw the graph of the inverse function, $P^{-1}$, on the grid\nbelow, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ab39cb62-6642-463f-8d55-b3b4e61d9fc1/images/ff3fed55-9366-4196-a9da-e2951114048a/0d0a8ad4bbd75e6a6d48466c8f25e5a869af08fe.svg)\n\n\n- $\\answer{\\text{For a given rectangle, when the perimeter is \\(12\\), the area is \\(8\\)}}$\n',
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
    title: 'Question 13',
    content:
      'The area, $A$, of a given square can be represented by the function\n\n$$\n\\begin{aligned}\nA(P) &= \\dfrac{P^2}{16}, \\hspace{0.5em} P \\geq 0,\\end{aligned}\n$$\n\nwhere\n$P$ is the perimeter of the square.\nThe graph of the function $A$, for $0 \\leq P \\leq 20$, is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d67d010e-f96a-4959-94d7-dd830ba69f41/images/db5dae3b-4d37-46d8-a488-586d1cdc2312/8c2c1a298c1b79e92e64f94fe2b4a4d452e488ad.svg)\n\n\n\n- Find the value of $A(20)$. <span class="marks">[1]</span>\n\n- On the grid above, draw the graph of the inverse function, $A^{-1}$.\n<span class="marks">[3]</span>\n\n- In the context of the question, explain the meaning of\n$A^{-1}(4) = 8$. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Evaluating $A(P)$ for $P = 20$, we get\n\n  $$\n  \\begin{aligned}\n  A(P) &= \\dfrac{20^2}{16} \\hspace{1.7em} \\\\[6pt]\n  &\\answer{= 25}\\end{aligned}\n  $$\n\n- If we draw the graph of the inverse function, $A^{-1}$, on the grid\nbelow, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d67d010e-f96a-4959-94d7-dd830ba69f41/images/8288a0de-f259-43ef-a694-da2f13679dc3/508588bd8662a40575516587374d1e3379be6249.svg)\n\n\n- $\\answer{\\text{For a given square, when the area is \\(4\\), the perimeter is \\(8\\)}}$\n',
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
    type: 'ERQ',
    title: 'Question 15',
    content:
      'A cable making machine in a factory produces 5 metres of cable every 3\nminutes. After 4 hours of continuous use, the machine requires 48\nminutes of preventative maintenance. Apart from this preventative\nmaintenance, the machine works continuously without interruption.\n\n- Determine the function, $L$, that represents the length of cable\nproduced in terms of time, $t$, measured in days.<span class="marks">[2]</span>  \n\nThe company sells the cable it produces and has found that the income\n(in dollars) from selling $L$ metres of cable can be modelled by the\nfunction\n\n$$\n\\begin{aligned}\nI(L) = (3-\\sqrt{7})L-500\\\\\n\\end{aligned}\n$$\n\n\n- Determine a function for income, $I$, in terms of time,\n$t$, in days. <span class="marks">[3]</span>  \n\nThe company is considering an investment in a new machine that produces\n6 metres of cable every 3 minutes and needs 60 minutes of preventive\nmaintenance for every 7 hours of use.\n\n- Show that the income function for this new machine, in\nterms of the number of days, $t$, can be expressed as.<span class="marks">[3]</span>\n\n\n  $$\n  \\begin{aligned}\n  I_2(t) = (3-\\sqrt{7})(2\\hspace{0.1em}520\\hspace{0.1em}t)-500\\\\\n  \\end{aligned}\n  $$\n\n- Determine a function, $D$, to model the difference in\nincomes between the two machines, in terms of the number of days,\n$t$.<span class="marks">[3]</span>\n\n\nThe company decides to purchase the new machine only if it can recover\nthe cost of the machine through the difference in incomes over six month\nperiod (assume 180 days).\n\n- Find the highest amount the company will be willing to pay\nfor the new machine, rounded to the nearest dollar.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- A complete cycle operation-maintenance of the machine takes 4 hours\nand 48 minutes, and thus, in one day, there are 5 complete\noperation-maintenance cycles.\n  Therefore the amount of cable produced in $t$ days can be expressed\nas\n\n  $$\n  \\begin{aligned}\n  L(t) &= \\text{Amount produced by 5 operation-maintenance cycles}\\times t\\hspace{0.25em}\\text{days} \\rule[-4mm]{0pt}{4mm}\\\\\n  &= \\left(\\dfrac{5\\hspace{0.25em}\\text{m}}{3\\hspace{0.25em}\\cancel{\\text{min}}}\\right)\\left(\\dfrac{60\\hspace{0.25em}\\cancel{\\text{min}}}{1\\hspace{0.25em}\\cancel{\\text{hr}}}\\right)\\left(\\dfrac{4\\hspace{0.25em}\\cancel{\\text{hr}}}{1\\hspace{0.25em}\\cancel{\\text{cycle}}}\\right)\\left(\\dfrac{5\\hspace{0.25em}\\cancel{\\text{cycles}}}{1\\hspace{0.25em}\\cancel{\\text{day}}}\\right)t\\hspace{0.25em}\\cancel{\\text{days}}\\rule[-4mm]{0pt}{10mm}\\\\\n  &\\hspace{-1.8em}\\answer{L(t)=2\\hspace{0.15em}000 \\hspace{0.1em}t}\\rule[0mm]{0pt}{6mm}\\end{aligned}\n  $$\n\n- We can find an expression for the composite function $I\\circ L$ as\nfollows\n\n  $$\n  \\begin{aligned}\n  I \\circ L(t) &= I(L(t)) \\rule[-3mm]{0pt}{3mm}\\\\\n  &= I(2\\hspace{0.15em}000 \\hspace{0.1em}t)\\rule[-3mm]{0pt}{7mm}\\\\\n  &\\hspace{-3.25em}\\answer{I \\circ L(t)= (3-\\sqrt{7})(2\\hspace{0.15em}000)\\hspace{0.05em}t-500}\\qref{(1)}\\rule[0mm]{0pt}{4mm}\\end{aligned}\n  $$\n\n- This machine can complete 3 operation-maintenance cycles per day,\nand so the amount of cable it produces is\n\n  $$\n  \\begin{aligned}\n  L_2(t) &= \\text{Amount produced by 3 operation-maintenance cycles}\\times t\\hspace{0.25em}\\text{days} \\rule[-4mm]{0pt}{4mm}\\\\\n  &= \\left(\\dfrac{6\\hspace{0.25em}\\text{m}}{3\\hspace{0.25em}\\cancel{\\text{min}}}\\right)\\left(\\dfrac{60\\hspace{0.25em}\\cancel{\\text{min}}}{1\\hspace{0.25em}\\cancel{\\text{hr}}}\\right)\\left(\\dfrac{7\\hspace{0.25em}\\cancel{\\text{hr}}}{1\\hspace{0.25em}\\cancel{\\text{cycle}}}\\right)\\left(\\dfrac{3\\hspace{0.25em}\\cancel{\\text{cycles}}}{1\\hspace{0.25em}\\cancel{\\text{day}}}\\right)t\\hspace{0.25em}\\cancel{\\text{days}}\\rule[-4mm]{0pt}{10mm}\\\\\n  &\\hspace{-1.8em}\\answer{L_2(t)=2\\hspace{0.15em}520 \\hspace{0.1em}t}\\rule[0mm]{0pt}{6mm}\\end{aligned}\n  $$\n\n  Now we find the composite $I\\circ L_2$:\n\n  $$\n  \\begin{aligned}\n  (I \\circ L_2)(t) &= I(L_2(t)) \\rule[-3mm]{0pt}{3mm}\\\\\n  &= I(2\\hspace{0.15em}520 \\hspace{0.1em}t)\\rule[-3mm]{0pt}{7mm}\\\\\n  &\\hspace{-4.55em}\\answer{(I \\circ L_2)(t) = (3-\\sqrt{7})(2\\hspace{0.15em}520)\\hspace{0.05em}t-500}\\qref{(2)} \\rule[0mm]{0pt}{4mm}\\end{aligned}\n  $$\n\n- The difference in incomes between the two machines is the difference\n(2)$-$(1). We get\n\n  $$\n  \\begin{aligned}\n  D(t) &= \\big[(3-\\sqrt{7})(2\\hspace{0.15em}520)\\hspace{0.05em}t-\\cancel{500}\\big] - \\big[(3-\\sqrt{7})(2\\hspace{0.15em}000)\\hspace{0.05em}t-\\cancel{500}\\big]\\\\[6pt]\n  &= (3-\\sqrt{7}) (2\\hspace{0.15em}520-2\\hspace{0.15em}000)\\hspace{0.05em}t\\\\[6pt]\n  &\\hspace{-1.97em}\\answer{D(t)= (3-\\sqrt{7})(520)\\hspace{0.05em}t} \\qref{(3)}\\end{aligned}\n  $$\n\n- Substituting $t=180$ in (3), we get\n\n  $$\n  \\hspace{1.65em}D(180) = (3-\\sqrt{7})(520)(180) \\approx 33\\hspace{0.07em}157.68\n  $$\n\n  The company is willing to pay\n$\\answer{\\hspace{0.07em}33\\hspace{0.15em}158}$\nfor the new machine.\n',
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
    title: 'Question 16',
    content:
      'A function is defined by $g(x)=3-\\dfrac{12}{x+3}$ for $-9\\leq x\\leq 9$,\n$x\\neq -3$\n\n- Find the range of $g$. <span class="marks">[3]</span>\n\n- Find the value of $g^{-1}(0)$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The graph of $g(x)=3-\\dfrac{12}{x+3}$ is plotted below.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/616164a4-faa5-4676-9f3c-4769c3d41be8/images/23cbcbe8-15fc-47be-83cd-0d50dcfbc06b/AI881a.PNG)\n\n\n  From the graph, the range of $g$ is $\\answer{(-\\infty,2]\\cup[5,\\infty)]}$\n- $g^{-1}(0)$ corresponds to the value of $x$ when $g(x)=0$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/616164a4-faa5-4676-9f3c-4769c3d41be8/images/47112aa7-51a3-49b0-9ae0-889a5f78ea51/AI881b.PNG)\n\n\n  From the graph, $g(x)=0$ when $x=1$. Hence,\n\n  $$\n  \\begin{aligned}\n  \\answer{g^{-1}(0)=1}\n  \\end{aligned}\n  $$\n\n',
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
    title: 'Question 17',
    content:
      'A function is defined by $f(x)=\\dfrac{\\sqrt{x+1}}{x^2-4}$, for the\ndomain $-1\\leq x\\leq 5$, $x\\neq 2$\n\n- Find the range of $f$. <span class="marks">[4]</span>\n\n- Find the value of $f^{-1}\\left(\\dfrac{2}{5}\\right)$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The graph of $f(x)=\\dfrac{\\sqrt{x+1}}{x^2-4}$ is plotted below\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/771c20b0-6647-4ac7-8e39-ad9d8d9a73fc/images/a00f5f74-aa09-49c4-9f67-0d0f12c451c2/AI883a.PNG)\n\n\n  From the graph, the range of $f$ is\n\n  $$\n  \\begin{aligned}\n  &\\answer{(-\\infty,0]\\cup[0.117,\\infty)])}\n  \\end{aligned}\n  $$\n\n- $f^{-1}\\bigg(\\dfrac{2}{5}\\bigg)$ corresponds to the value of $x$ when $f(x)=\\dfrac{2}{5}$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/771c20b0-6647-4ac7-8e39-ad9d8d9a73fc/images/45b4d1cb-3fb1-439c-ad5f-8bba89649cdf/AI883b.PNG)\n\n\n  From the graph, $f(x)=\\dfrac{2}{5}$ when $x=3$. Hence,\n\n  $$\n  \\begin{aligned}\n  &\\answer{f^{-1}\\bigg(\\dfrac{2}{5}\\bigg)=3}\n  \\end{aligned}\n  $$\n\n',
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
    title: 'Question 18',
    content:
      'A function is defined by $f(x)=\\sqrt{x+5}$, $x\\geq -5$\n\n- Determine the domain and range of $f$. <span class="marks">[3]</span>\n\n- Find the value of $f^{-1}(\\sqrt{6})$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The graph of $f(x)=\\sqrt{x+5}$ is plotted below.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8ae200fc-c8c2-45b4-aa13-f0e9f279cb9a/images/881074fb-10d0-4145-9bf1-ee5c090fa571/1805e337e073512237286acb5583906bdf31bb84.svg)\n\n\n  From the graph, the domain of $f$ is\n\n  $$\n  \\answer{[-5,\\infty)}\n  $$\n\n  and the range of $f$ is\n\n  $$\n  \\answer{[0,\\infty)}\n  $$\n\n- $f^{-1}(\\sqrt{6})$ corresponds to the value of $x$ when\n$f(x)=\\sqrt{6}$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8ae200fc-c8c2-45b4-aa13-f0e9f279cb9a/images/5e47c30a-f23c-47d5-b947-709f7668078d/7c19742e74bbe79b3eeb3b8509335ac2df5057a0.svg)\n\n\n  From the graph, $f(x)=\\sqrt{6}$ when $x=1$. Hence,\n\n  $$\n  \\answer{f^{-1}(\\sqrt{6})=1}\n  $$\n\n',
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
    title: 'Question 19',
    content:
      'The function $f$ is defined by $f(x) = \\dfrac{7x-24}{x-2}$,\nfor $-3 \\leq x \\leq 12$,\n$x \\neq 2$.\n\n- Find the range of $f$. <span class="marks">[3]</span>\n\n- Find an expression for the inverse function $f^{-1}(x)$. <span class="marks">[3]</span>\n\n- Write down the range of $f^{-1}$. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- If we draw the graph of $f$, by using G.D.C., we\nhave\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8f054f1a-9ea4-4053-a5d1-6fa515e9906d/images/1a167d6a-7e1e-416a-b9c6-b49067e30e6a/6790d3e3a83e5ec16eb602a4d64032370f792ab9.svg)\n\n\n  Hence, using the $y$-coordinates of A and B, we find\n$\\answer{(-\\infty, 6] \\cup [9, \\infty)}$\n- If we solve the equation $x = (f\\circ f^{-1})(x)$ for\n$y = f^{-1}(x)$, we find\n\n  $$\n  \\begin{aligned}\n  x &= f(f^{-1}(x)) \\\\[12pt]\n  x &= f(y) \\\\[12pt]\n  x &= \\dfrac{7y-24}{y-2} \\\\[12pt]\n  x(y-2) &= 7y-24 \\\\[12pt]\n  xy-2x &= 7y-24 \\\\[12pt]\n  xy-7y &= 2x-24 \\\\[12pt]\n  y(x-7) &= 2x-24 \\\\[12pt]\n  y &= \\dfrac{2x-24}{x-7} \\\\[12pt]\n  &\\hspace*{-3.01em}\\answer{f^{-1}(x) = \\dfrac{2x-24}{x-7}}\\end{aligned}\n  $$\n\n- The range of $f^{-1}(x)$ is equal to the domain of $f(x)$, therefore\nthe\nrange of $f^{-1}(x)$ is\n$\\answer{-3 \\leq f^{-1}(x) \\leq 12\\text{ , } f^{-1}(x) \\neq 2}$\n',
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
    title: 'Question 1',
    content:
      'Brendan is training for a long distance bike race.\nIn week $1$ of his training he cycled $22\\,$km. In week $2$ he cycled $34\\,$km. This pattern continues, with him cycling an extra $12\\,$km per week.\nThe distances Brendan cycled in the first $5$ weeks of training is shown in the following table.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/fbe76ea2-07bd-426c-90a3-5ad8f53713f4/images/02dbbd15-959b-4291-aa53-aba9944b29df/Screenshot%202023-08-31%20at%202.15.24%20PM.png)\n\n\n\n- Calculate how far he cycles in the $17$th week of his training. <span class="marks">[3]</span>\n\n- In total how far has he cycled after $17$ weeks? <span class="marks">[2]</span>\n\n- Find the mean distance per week he cycled over 17 weeks. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the formula for the $n$th term of an arithmetic sequence\n\n  $$\n  \\begin{align*}\n      u_{17}&=22+(17-1)\\times 12\\\\[6pt]\n      u_{17}&=214\n  \\end{align*}\n  $$\n\n  He cycled $\\answer{214\\,\\text{km}}$ in the $17$th week.\n- Using the formula for the sum of $n$ terms of an arithmetic sequence\n\n  $$\n  \\begin{align*}\n      S_{17}&=\\frac{17}{2}(2\\times22+(17-1)\\times12)\\\\[6pt]\n      S_{17}&=2006\n  \\end{align*}\n  $$\n\n  After $17$ weeks he cycled a total of $\\answer{2006\\,\\text{km}}$.\n- Using the formula for the mean\n\n  $$\n  \\begin{align*}\n      &=\\frac{22+34+46+...+214}{17}\\\\[6pt]\n      &=\\frac{2006}{17}\\\\[6pt]\n      &=118\n  \\end{align*}\n  $$\n\n  His mean distance per week over the $17$ weeks of training was $\\answer{118 \\text{ km}}$ per week.\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 2',
    content:
      'The $15$th term of an arithmetic sequence is $21$ and the common\ndifference is $-4$.\n\n- Find the first term of the sequence. <span class="marks">[2]</span>\n\n- Find the $29$th term of the sequence. <span class="marks">[2]</span>\n\n- Find the sum of the first $40$ terms of the sequence. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_{15} + (n-15)d$ with $n = 1$,\nwe get\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_{15} + (1-15)d \\\\[6pt]\n  &= 21 + (1-15)(-4) \\\\[6pt]\n  &\\answer{= 77}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 29$, we\nfind\n\n  $$\n  \\begin{aligned}\n  u_{29} &= u_1 + (29-1)d \\\\[6pt]\n  &= 77 + (29-1)(-4) \\hspace{0.4em} \\\\[6pt]\n  &\\answer{= -35}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 40$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.8em} S_{40} &= \\dfrac{40}{2}(2u_1 + (40-1)d) \\\\[6pt]\n  &= \\dfrac{40}{2}(2(77) + (40-1)(-4)) \\\\[11pt]\n  &\\answer{= -40}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 3',
    content:
      'Only one of the following four sequences is arithmetic and only one of\nthem is geometric.\n\n$$\n\\begin{array}{rcccccl}\na_n &=& 1,\\,5,\\,10,\\,15,\\,\\dots &\\,\\hspace{4em}\\,& c_n &=& 1.5,\\,3,\\,4.5,\\,6,\\,\\dots \\\\[12pt]\nb_n &=& \\dfrac{1}{2},\\,\\dfrac{2}{3},\\,\\dfrac{3}{4},\\,\\dfrac{4}{5},\\,\\dots &\\,\\hspace{4em}\\,& d_n &=& 2,\\,1,\\,\\dfrac{1}{2},\\,\\dfrac{1}{4},\\,\\dots\n\\end{array}\n$$\n\n\n- State which sequence is arithmetic and find the common difference of\nthe sequence. <span class="marks">[2]</span>\n\n- State which sequence is geometric and find the common ratio of the\nsequence.<span class="marks">[2]</span>\n\n- For the geometric sequence find the exact value of the\neighth term. Give your answer as a fraction. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \n  \\begin{array}{rclc|crcl}\n  a_2-a_1 &\\neq& a_3-a_2 &\\,\\hspace{0.5em}\\,&\\,\\hspace{0.5em}\\,& c_2-c_1 &=& c_3-c_2 \\\\[12pt]\n  5-1 &\\neq& 10-5 &&& 3-1.5 &=& 4.5-3 \\\\[12pt]\n  4 &\\neq& 5 &&& 1.5 &=& 1.5 \\\\[12pt] \\hline\n  &&&&&&& \\\\\n  b_2-b_1 &\\neq& b_3-b_2 &&& d_2-d_1 &\\neq& d_3-d_2 \\\\[12pt]\n  \\dfrac{2}{3}-\\dfrac{1}{2} &\\neq& \\dfrac{3}{4}-\\dfrac{2}{3} &&& 1-2 &\\neq& \\dfrac{1}{2}-1 \\\\[12pt]\n  \\dfrac{1}{6} &\\neq& \\dfrac{1}{12} &&& -1 &\\neq& -\\dfrac{1}{2}\n  \\end{array} \\vspace{0.75em}\n  $$\n\n  Hence\n$\\answer{c_n}$\nis arithmetic and\n$\\answer{d = 1.5}$\n- We have\n\n  $$\n  \n  \\begin{array}{rclc|crcl}\n  \\dfrac{a_2}{a_1} &\\neq& \\dfrac{a_3}{a_2} &\\,\\hspace{0.5em}\\,&\\,\\hspace{0.5em}\\,& \\dfrac{c_2}{c_1} &\\neq& \\dfrac{c_3}{c_2} \\\\[12pt]\n  \\dfrac{5}{1} &\\neq& \\dfrac{10}{5} &&& \\dfrac{3}{1.5} &\\neq& \\dfrac{4.5}{3} \\\\[12pt]\n  5 &\\neq& 2 &&& 2 &\\neq& 1.5 \\\\[12pt] \\hline\n  &&&&&&& \\\\\n  \\dfrac{b_2}{b_1} &\\neq& \\dfrac{b_3}{b_2} &&& \\dfrac{d_2}{d_1} &=& \\dfrac{d_3}{d_2} \\\\[12pt]\n  \\dfrac{2/3}{1/2} &\\neq& \\dfrac{3/4}{2/3} &&& \\dfrac{1}{2} &=& \\dfrac{1/2}{1} \\\\[12pt]\n  \\dfrac{4}{3} &\\neq& \\dfrac{9}{8} &&& \\dfrac{1}{2} &=& \\dfrac{1}{2}\n  \\end{array} \\vspace{0.5em}\n  $$\n\n  Hence\n$\\answer{d_n}$\nis geometric and\n$\\answer{r = \\dfrac{1}{2}}$\n- Using the $n$th term formula $d_n = d_1r^{n-1}$ with $n = 8$, we get\n\n  $$\n  \\begin{aligned}\n  d_8 &= d_1r^{8-1} \\\\[8pt]\n  &= 2\\left(\\dfrac{1}{2}\\right)^{8-1} \\\\[6pt]\n  &\\answer{= \\dfrac{1}{64}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 4',
    content:
      'An arithmetic sequence has $u_1 = 40$, $u_2 = 32$, $u_3 = 24$.\n\n- Find the common difference, $d$. <span class="marks">[2]</span>\n\n- Find $u_8$. <span class="marks">[2]</span>\n\n- Find $S_8$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common difference is\n\n  $$\n  \\begin{aligned}\n  d &= u_2 - u_1 \\hspace{2.5em} \\\\[6pt]\n  &= 32 - 40 \\\\[6pt]\n  &\\answer{= -8}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 8$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.0em} u_8 &= u_1 + (8-1)d \\\\[6pt]\n  &= 40 + (8-1)(-8) \\\\[6pt]\n  &\\answer{= -16}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(u_1 + u_n)$\nwith $n = 8$, we obtain\n\n  $$\n  \\begin{aligned}\n  S_8 &= \\dfrac{8}{2}(u_1+u_8) \\\\[6pt]\n  &= \\dfrac{8}{2}(40+(-16)) \\\\[10pt]\n  &\\answer{= 96}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 5',
    content:
      'Only one of the following four sequences is arithmetic and only one of\nthem is geometric.\n\n$$\n\\begin{array}{rcccccl}\na_n &=& \\dfrac{1}{3},\\,\\dfrac{1}{4},\\,\\dfrac{1}{5},\\,\\dfrac{1}{6},\\,\\dots &\\,\\hspace{4em}\\,& c_n &=& 3,\\,1,\\,\\dfrac{1}{3},\\,\\dfrac{1}{9},\\,\\dots \\\\[12pt]\nb_n &=& 2.5,\\,5,\\,7.5,\\,10,\\,\\dots &\\,\\hspace{4em}\\,& d_n &=& 1,\\,3,\\,6,\\,10,\\,\\dots\n\\end{array}\n$$\n\n\n- State which sequence is arithmetic and find the common difference of\nthe sequence. <span class="marks">[2]</span>\n\n- State which sequence is geometric and find the common ratio of the\nsequence.<span class="marks">[2]</span>\n\n- For the geometric sequence find the exact value of the sixth\nterm. Give your answer as a fraction. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \n  \\begin{array}{rclc|crcl}\n  a_2-a_1 &\\neq& a_3-a_2 &\\,\\hspace{0.5em}\\,&\\,\\hspace{0.5em}\\,& c_2-c_1 &\\neq& c_3-c_2 \\\\[12pt]\n  \\dfrac{1}{4}-\\dfrac{1}{3} &\\neq& \\dfrac{1}{5}-\\dfrac{1}{4} &&& 1-3 &\\neq& \\dfrac{1}{3}-1 \\\\[12pt]\n  -\\dfrac{1}{12} &\\neq& -\\dfrac{1}{20} &&& -2 &\\neq& -\\dfrac{2}{3} \\\\[12pt] \\hline\n  &&&&&&& \\\\\n  b_2-b_1 &=& b_3-b_2 &&& d_2-d_1 &\\neq& d_3-d_2 \\\\[12pt]\n  5-2.5 &=& 7.5-5 &&& 3-1 &\\neq& 6-3 \\\\[12pt]\n  2.5 &=& 2.5 &&& 2 &\\neq& 3\n  \\end{array} \\vspace{0.75em}\n  $$\n\n  Hence\n$\\answer{b_n}$\nis arithmetic and\n$\\answer{d = 2.5}$\n- We have\n\n  $$\n  \n  \\begin{array}{rclc|crcl}\n  \\dfrac{a_2}{a_1} &\\neq& \\dfrac{a_3}{a_2} &\\,\\hspace{0.5em}\\,&\\,\\hspace{0.5em}\\,& \\dfrac{c_2}{c_1} &=& \\dfrac{c_3}{c_2} \\\\[12pt]\n  \\dfrac{1/4}{1/3} &\\neq& \\dfrac{1/5}{1/4} &&& \\dfrac{1}{3} &=& \\dfrac{1/3}{1} \\\\[12pt]\n  \\dfrac{3}{4} &\\neq& \\dfrac{4}{5} &&& \\dfrac{1}{3} &=&\\dfrac{1}{3} \\\\[12pt] \\hline\n  &&&&&&& \\\\\n  \\dfrac{b_2}{b_1} &\\neq& \\dfrac{b_3}{b_2} &&& \\dfrac{d_2}{d_1} &\\neq& \\dfrac{d_3}{d_2} \\\\[12pt]\n  \\dfrac{5}{2.5} &\\neq& \\dfrac{7.5}{5} &&& \\dfrac{3}{1} &\\neq& \\dfrac{6}{3} \\\\[12pt]\n  2 &\\neq& 1.5 &&& 3 &\\neq& 2\n  \\end{array} \\vspace{0.5em}\n  $$\n\n  Hence\n$\\answer{c_n}$\nis geometric and\n$\\answer{r = \\dfrac{1}{3}}$\n- Using the $n$th term formula $c_n = c_1r^{n-1}$ with $n = 6$, we get\n\n  $$\n  \\begin{aligned}\n  c_6 &= c_1r^{6-1} \\\\[8pt]\n  &= 3\\left(\\dfrac{1}{3}\\right)^{6-1} \\\\[6pt]\n  &\\answer{= \\dfrac{1}{81}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 6',
    content:
      'An arithmetic sequence has $u_1 = 12$, $u_2 = 21$, $u_3 = 30$.\n\n- Find the common difference, $d$. <span class="marks">[2]</span>\n\n- Find $u_{10}$. <span class="marks">[2]</span>\n\n- Find $S_{10}$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common difference is\n\n  $$\n  \\begin{aligned}\n  d &= u_2 - u_1 \\hspace{1.5em} \\\\[6pt]\n  &= 21 - 12 \\\\[6pt]\n  &\\answer{= 9}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 10$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.35em} u_{10} &= u_1 + (10-1)d \\\\[6pt]\n  &= 12 + (10-1)(9) \\\\[6pt]\n  &\\answer{= 93}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(u_1+u_n)$\nwith $n=10$, we obtain\n\n  $$\n  \\begin{aligned}\n  S_{10} &= \\dfrac{10}{2}(u_1+u_{10}) \\\\[6pt]\n  &= \\dfrac{10}{2}(12+93) \\\\[10pt]\n  &\\answer{= 525}\\end{aligned}\n  $$\n\n',
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
    difficultyLevel: '1.5'
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
      'The third term, $u_3$, of an arithmetic sequence is $7$. The common\ndifference of\nthe sequence, $d$, is $3$.\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Find $u_{60}$, the $60$th term of sequence. <span class="marks">[2]</span>\n\n\nThe first and fourth terms of this arithmetic sequence are the first two\nterms\nof a geometric sequence.\n\n- Calculate the sixth term of the geometric sequence.\n<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_3 + (n-3)d$ with $n = 1$, we\nget\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_3 + (1-3)d \\hspace{0.4em} \\\\[6pt]\n  &= 7 + (1-3)(3) \\\\[6pt]\n  &\\answer{= 1}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_3 + (n-3)d$ with $n = 60$, we\nfind\n\n  $$\n  \\begin{aligned}\n  u_{60} &= u_3 + (60-3)d \\\\[6pt]\n  &= 7 + (60-3)(3) \\\\[6pt]\n  &\\answer{= 178}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/077c6738-9c33-4398-a027-bb1140fcb037/images/9d0d8334-9630-4b77-b911-39471a73ca86/ad62ab3f954984b454acd9a772d836d707c86a2f.svg)\n\n\n  Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 6$,\nwe obtain\n\n  $$\n  \\begin{aligned}\n  u_6 &= u_1r^{6-1} \\\\[6pt]\n  &= 1(10)^{6-1} \\\\[7pt]\n  &\\answer{\\approx 100\\hspace{0.15em}000} \\hspace{3em}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 14',
    content:
      'A $3$D printer builds a set of $49$ Ei$\\text{f}$fel Tower\nReplicas in different sizes. The height of the largest tower in this set\nis $64$ cm. The heights of successive smaller\ntowers are $95$ % of the preceding larger tower,\nas shown in the diagram below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/127e3c5d-3aa2-4475-aa67-2df200261d2b/images/6ef94ba8-4b62-4fb0-9b70-993b9ddba3a5/AI110.PNG)\n\n\n\n- Find the height of the smallest tower in this set. <span class="marks">[3]</span>\n\n- Find the total height if all $49$ towers were placed one on top\nof another. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have a geometric sequence with the first term $u_1 = 64$ and the\ncommon ratio $r = 0.95$.\n  Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with $n=49$,\nwe get\n\n  $$\n  \\begin{aligned}\n  u_{49} &= u_1r^{49-1} \\\\[6pt]\n  &= 64(0.95)^{49-1} \\\\[7pt]\n  &\\answer{\\approx 5.46 \\text{ cm}}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{u_1(1-r^n)}{1-r}$\nwith $n=49$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.9em} S_{49} &= \\dfrac{u_1(1-r^{49})}{1-r} \\\\[6pt]\n  &= \\dfrac{64\\hspace{0.05em}(1-0.95^{49})}{1-0.95} \\\\[12pt]\n  &\\approx 1176.33 \\\\[16pt] \n  &\\answer{\\approx 1180 \\text{ cm}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 15',
    content:
      'In this question give all answers correct to the nearest whole\nnumber.\nA population of goats on an island starts at $232$. The population is\nexpected\nto increase by $15$ % each year.\n\n- Find the expected population size after:\n  \n  - $10$ years;\n  - $20$ years. <span class="marks">[4]</span>\n\n\n- Find the number of years it will take for the population to reach\n$15\\hspace{0.15em}000$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/3f91abc0-e62e-4e9a-9d1c-8f1150f49aa0/images/051538fe-fce6-4c1b-8839-8ba85c83e74d/537894a1e06c34454736a91f01647c46ca2f4fa3.svg)\n\n\n  Hence the population size is expected to increase according to a\ngeometric sequence with the first term $u_1 = 232(1.15)$ and the\ncommon ratio $r = 1.15$.\n  \n  - Using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 10$,\nwe get\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.1em} u_{10} &= u_1r^{10-1} \\\\[6pt]\n    &= [232(1.15)](1.15)^{10-1} \\\\[7pt]\n    &\\answer{\\approx 939}\\end{aligned}\n    $$\n\n  - Using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 20$,\nwe get\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.1em} u_{20} &= u_1r^{20-1} \\\\[6pt]\n    &= [232(1.15)](1.15)^{20-1} \\\\[7pt]\n    &\\answer{\\approx 3797}\\end{aligned}\n    $$\n\n\n- Solving the equation $u_n = 15\\hspace{0.15em}000$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  u_1r^{n-1} &= 15\\hspace{0.15em}000 \\\\[6pt]\n  \\hspace{1.5em} [232(1.15)](1.15)^{n-1} &= 15\\hspace{0.15em}000 \\\\[7pt]\n  n &\\approx 29.8 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence it will take\n$\\answer{30 \\text{ years}}$\nfor the population of goats to reach $15\\hspace{0.15em}000$.\n',
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
    title: 'Question 16',
    content:
      'The fourth term, $u_4$, of a geometric sequence is $135$. The fifth\nterm, $u_5$, is $81$.\n\n- Find the common ratio of the sequence. <span class="marks">[2]</span>\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Calculate the sum of the first $20$ terms of the sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_5}{u_4} \\\\[6pt]\n  &= \\dfrac{81}{135} \\\\[11pt]\n  &\\answer{= 0.6} \\hspace{3.2em}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_4r^{n-4}$ with $n = 1$, we get\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_4r^{1-4} \\\\[6pt]\n  &= 135(0.6)^{1-4} \\\\[6pt]\n  &\\answer{= 625}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{u_1(1-r^n)}{1-r}$\nwith $n = 20$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.7em} S_{20} &= \\dfrac{u_1(1-r^{20})}{1-r} \\\\[6pt]\n  &= \\dfrac{625(1-(0.6)^{20})}{1-0.6} \\\\[12pt]\n  &\\answer{\\approx 1560}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 17',
    content:
      'On the first day of September, $2019$, Gloria planted $5$ flowers in her\ngarden. The number of flowers, which she plants at every day of the\nmonth, forms an arithmetic sequence. The number of flowers she is going\nto plant in the last day of September is $63$.\n\n- Find the common difference of the sequence. <span class="marks">[2]</span>\n\n- Find the total number of flowers Gloria is going to plant during\nSeptember.<span class="marks">[2]</span>\n\n- Gloria estimated she would plant $1000$ flowers in the month of\nSeptember. Calculate the percentage error in Gloria\'s estimate.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have $u_1 = 5$ and $u_{30}=63$.\nHence, using the $n$th term formula $u_n = u_1 + (n-1)d$ with\n$n=30$, we get\n\n  $$\n  \\begin{aligned}\n  u_{30} &= u_1 + (30-1)d \\\\[6pt]\n  63 &= 5 + (30-1)d \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{5.8em}\\answer{d = 2} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(2u_1+(n-1)d)$\nwith $n = 30$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.5em} S_{30} &= \\dfrac{30}{2}(2u_1+(30-1)d) \\\\[6pt]\n  &= \\dfrac{30}{2}(2(5)+(30-1)(2)) \\\\[12pt]\n  &\\answer{= 1020}\\end{aligned}\n  $$\n\n- Using the percentage error formula\n$\\epsilon = \\bigg|\\dfrac{v_\\mathrm{A} - v_\\mathrm{E}}{v_\\mathrm{E}}\\bigg|\\times 100\\hspace{0.05em}\\%$\nwith $v_\\mathrm{E} = 1020$ and $v_\\mathrm{A} = 1000$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.4em} \\epsilon &= \\bigg|\\dfrac{1000 - 1020}{1020}\\bigg|\\times 100\\hspace{0.05em}\\% \\\\[6pt]\n  &\\answer{= 1.96\\hspace{0.05em}\\%}\n  \\end{aligned}\n  $$\n\n',
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
    title: 'Question 18',
    content:
      'The fifth term, $u_5$, of a geometric sequence is $125$. The sixth term,\n$u_6$, is $156.25$.\n\n- Find the common ratio of the sequence. <span class="marks">[2]</span>\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Calculate the sum of the first $12$ terms of the sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_6}{u_5} \\\\[6pt]\n  &= \\dfrac{156.25}{125} \\\\[11pt]\n  &\\answer{= 1.25} \\hspace{3.2em}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_5r^{n-5}$ with $n = 1$, we get\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_5r^{1-5} \\\\[6pt]\n  &= 125(1.25)^{1-5} \\\\[6pt]\n  &\\answer{= 51.2}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{u_1(r^n-1)}{r-1}$\nwith $n = 12$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} S_{12} &= \\dfrac{u_1(r^{12}-1)}{r-1} \\\\[6pt]\n  &= \\dfrac{51.2((1.25)^{12}-1)}{1.25-1} \\\\[12pt]\n  &\\answer{\\approx 2780}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 19',
    content:
      'The fifth term, $u_5$, of a geometric sequence is $375$. The sixth term,\n$u_6$, of the sequence is $75$.\n\n- Write down the common ratio of the sequence. <span class="marks">[1]</span>\n\n- Find $u_1$. <span class="marks">[2]</span>\n\n\nThe sum of the first $k$ terms in the sequence is\n$292\\hspace{0.15em}968$.\n\n- Find the value of $k$. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_6}{u_5} \\\\[6pt]\n  &= \\dfrac{75}{375} \\\\[12pt]\n  &\\answer{= 0.2} \\hspace{3.2em}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_5r^{n-5}$ with $n = 1$, we get\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_5r^{1-5} \\\\[6pt]\n  &= 375(0.2)^{1-5} \\\\[7pt]\n  &\\answer{= 234\\hspace{0.15em}375}\\end{aligned}\n  $$\n\n- Solving the equation $S_k = 292\\hspace{0.15em}968$ for $k$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{u_1(1-r^k)}{1-r} &= 292\\hspace{0.15em}968 \\hspace{9.3em} \\\\[6pt]\n  \\dfrac{234\\hspace{0.15em}375(1-(0.2)^k)}{1-0.2} &= 292\\hspace{0.15em}968 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{6.6em} \\answer{k = 8} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 20',
    content:
      'Bruno rides his bike to school each morning. During the first minute, he travels $160$ metres. In each subsequent minute, he travels $80\\,\\%$ of the distance travelled during the previous minute.\nThe distance from his home to school is $750$ metres. Bruno leaves his house at $8$:$30$ am and must be at school by $8$:$40$ am.\n\n- Verify that Bruno will not arrive at school on time. <span class="marks">[3]</span>  \n\nBruno realises that if he can increase the distance he travels each minute, from $80\\,\\%$ of the distance travelled during the previous minute to $k\\,\\%$, he will make it to school on time.\n\n- Determine the minimum value of $k$, given that Bruno still travels $160\\,\\text{m}$ in the first minute. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- We could consider each minute of Bruno's journey as a term of a geometric sequence, and we need the sum of the first 10 terms to determine how far Bruno travels between $8$:$30$ and $8$:$40$ am.\n  We have a geometric sequence with the first term $u_1 = 160$ and common ratio $r = 0.8$.\n  If we use the sum of $n$ terms formula $S_n = \\dfrac{u_1(1-r^n)}{1-r}$ with $n=10$, we get\n\n  $$\n  \\begin{align*}\n  S_{10} &= \\dfrac{u_1(1-r^{10})}{1-r} \\\\[6pt]\n  &= \\dfrac{160(1-0.8^{10})}{1-0.8} \\tag*{\\textbf{(M1)}}\\\\[12pt]\n  &= 714.10... \\tag*{\\textbf{A1}} \\\\[6pt]\n  714.10... &< 750 \\tag*{\\textbf{R1}}\n  \\end{align*}    \n  $$\n\n  Bruno will only travel $714$ metres by $8$:$40$ am, which is less than the $750$ metres required.\n  Therefore, Bruno $\\textbf{will not}$ arrive at school on time.\n- Again, we require the sum of the first 10 terms of a geometric sequence with first term $u_1=160$. This sum must be $\\textbf{at least}$ 750 to ensure that Bruno will make it to school on time. We do not know the common ratio, but if each minute Bruno travels $k\\,\\%$ of the distance travelled in the previous minute, then we will have a common ratio of $r=\\frac{k}{100}$.\n  Using this information we can form an inequality.\n\n  $$\n  \\begin{align*}\n      S_{10} &\\geq 750 \\\\[6pt]\n      \\dfrac{160\\left(1-\\left(\\frac{k}{100}\\right)^{10}\\right)}{1-\\frac{k}{100}} &\\geq 750 \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  To solve this, we can sketch both sides of the inequality and find the point of intersection.\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  The diagram below shows the graph of $y=S_{10}$ in $\\textbf{\\textcolor{red}{red}}$ and the graph of $y=750$ in $\\textbf{\\textcolor{green}{green}}$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/97916e5b-161e-4564-9663-3fafa5a98fac/images/fbe81f61-c25d-4cee-b32d-b8ae6801cad0/786.JPEG)\n\n\n  Hence the smallest value of $k$ such that the sum of the first ten terms is at least 750 metres is $\\tcbhighmath{81.4\\%\\,\\text{(3 s.f.)}}$\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n",
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
    title: 'Question 21',
    content:
      'The fifth term, $u_5$, of an arithmetic sequence is $5$. The eighth\nterm, $u_8$, of the same sequence is $14$.\n\n- Find $d$, the common difference of the sequence. <span class="marks">[2]</span>\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Find $S_{100}$, the sum of the first $100$ terms of the sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_5 + (n-5)d$ with $n=8$, we get\n\n  $$\n  \\begin{aligned}\n  u_8 &= u_5 + (8-5)d \\\\[6pt]\n  14 &= 5 + (8-5)d\\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{5.9em}\\answer{d = 3} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Using the $n$th term formula $u_n = u_5 + (n-5)d$ with $n=1$, we\nfind\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.2em} u_1 &= u_5 + (1-5)d \\\\[6pt]\n  &= 5 + (1-5)(3) \\\\[6pt]\n  &\\answer{= -7}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(2u_1+(n-1)d)$\nwith $n = 100$,\n  we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{5em} S_{100} &= \\dfrac{100}{2}(2u_1+(100-1)d) \\\\[6pt]\n  &= \\dfrac{100}{2}(2(-7)+(100-1)(3)) \\\\[6pt]\n  &= 14150\\\\[8pt]\n  &\\answer{\\approx 14200}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 22',
    content:
      'The fifth term, $u_5$, of an arithmetic sequence is $25$. The eleventh\nterm, $u_{11}$, of the same sequence is $49$.\n\n- Find $d$, the common difference of the sequence. <span class="marks">[2]</span>\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Find $S_{100}$, the sum of the first $100$ terms of the sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_5 + (n-5)d$ with $n=11$, we\nget\n\n  $$\n  \\begin{aligned}\n  u_{11} &= u_5 + (11-5)d \\\\[6pt]\n  49 &= 25 + (11-5)d\\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{5.8em}\\answer{d = 4} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Using the $n$th term formula $u_n = u_5 + (n-5)d$ with $n=1$, we\nfind\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.7em} u_1 &= u_5 + (1-5)d \\\\[6pt]\n  &= 25 + (1-5)(4) \\\\[6pt]\n  &\\answer{= 9}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(2u_1+(n-1)d)$\nwith $n = 100$,\n  we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.1em} S_{100} &= \\dfrac{100}{2}(2u_1+(100-1)d) \\\\[6pt]\n  &= \\dfrac{100}{2}(2(9)+(100-1)(4)) \\\\[10pt]\n  &\\answer{= 20\\hspace{0.15em}700}\\end{aligned}\n  $$\n\n',
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
    type: 'ERQ',
    title: 'Question 23',
    content:
      'Towards the end of 2004, a theatre company upgraded their auditorium and\ninstalled new comfortable ergonomic chairs for the audience.\nAfter the redesign, there were $20$ seats in the first row and each\nsubsequent row had three more seats than the previous row.\n\n- If the auditorium had a total of $16$ rows, find\n  \n  - the total number of seats in the last row.\n  - the total number of seats in the auditorium. <span class="marks">[5]</span>\n\n\n\nThe auditorium reopened for performances at the start of 2005. The\naverage number of visitors per show during that year was $500$. In 2006,\nthe average number of visitors per show increased by $5\\%$.\n\n- Find the average number of visitors per show in 2006. <span class="marks">[1]</span>  \n\nThe average number of visitors per show continued to increase by $5\\%$\neach year.\n\n- Determine the first year in which the total number of visitors to a\nshow exceeded the seating capacity of the auditorium. <span class="marks">[5]</span>  \n\nThe theatre company hosts $25$ shows per year.\n\n- Determine the total number of visitors that attended the auditorium\nfrom when it opened in 2005 until the end of 2011. Round your answer\ncorrect to the nearest integer. <span class="marks">[4]</span>  \n',
    markScheme:
      '\n- \n  - The $n$th term formula for an arithmetic sequence is\n\n    $$\n    \\begin{aligned}\n    u_n=u_1+(n-1)d\\hspace{1.5cm}\\end{aligned}\n    $$\n\n    We have\n$u_1=20, n=16$, and $d=3$. Hence, we get\n\n    $$\n    \\begin{aligned}\n    u_{16} &= 20+ (16-1)(3) \\hspace{0.75cm}\\\\[8pt]\n    &\\hspace{0.3em}\\answer{= 65 \\text{ seats}}\\end{aligned}\n    $$\n\n  - The formula for the sum of $n$ terms of an arithmetic sequence\nis\n\n    $$\n    S_n=\\dfrac{n}{2}[2u_1+(n-1)d]\n    \n    $$\n\n    We have $u_1=20$, $n=16$\nand $d=3$. Hence, we get\n\n    $$\n    \\begin{aligned}\n    \\hspace{1cm} S_{16} &= \\dfrac{16}{2}[2(20)+(16-1)3]\\\\[8pt]\n    &\\hspace{0.3em}\\answer{= 680 \\text{ seats}}\\end{aligned}\n    $$\n\n\n- Increasing $500$ by $5\\%$, we get\n\n  $$\n  500 \\times 1.05\\hspace{0.7em}\\answer{= 525 \\text{ visitors}}\n  $$\n\n- The $n$th term formula for a geometric sequence is\n\n  $$\n  \\begin{aligned}\n  u_n=&u_1r^{n-1}\\end{aligned}\n  $$\n\n  We have $u_1=500$ and $r=1.05$.\nHence, an expression for the average number of visitors, $u_n$, for\na given year $n$ is\n\n  $$\n  \\begin{aligned}\n  u_{n} &=500 (1.05)^{n-1}\\end{aligned}\n  $$\n\n  The total seating\ncapacity is $680$ (part a). The graph of $u_n$ is plotted below\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1a946065-ec7c-44c2-8032-5e56a68bee01/images/ed84f08b-b4cc-4bfc-b9cd-a34744553633/f454f823cc38ef44e946be77438706a366c95060.svg)\n\n\n  From the graph, $u_n > 680$ when $n>7.3$, which corresponds to the\n$8$th year.\n  Hence, the average number of visitors will exceed the total capacity\nin  $\\answer{2012}$.\n- The formula for the sum of $n$ terms in a geometric sequence is\n\n  $$\n  S_n=\\dfrac{u_1(r^n-1)}{r-1}\n  \n  $$\n\n  We have\n$u_1=500\\times 25 = 12\\,500$, $r=1.05$ and $n=7$. Hence, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1cm} S_{7} &= \\dfrac{12\\,500(1.05^{7}-1)}{1.05-1}\\\\[8pt]\n  &\\hspace{0.3em}\\answer{= 101\\,775 \\text{ visitors}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 24',
    content:
      'Charles has a New Years Resolution that he wants to be able to complete\n$100$ pushups in one go without a break. He sets out a training regime\nwhereby he completes $20$ pushups on the first day, then adds $5$\npushups each day thereafter.\n\n- Write down the number of pushups Charles completes\n  \n  - on the $4$th training day;\n  - on the $n$th training day. <span class="marks">[3]</span>\n\n\n\nOn the $k$th training day Charles completes $100$\npushups for the first time.\n\n- Find the value of $k$. <span class="marks">[2]</span>\n\n- Calculate the total number of pushups Charles completes on\nthe first $10$ training days. <span class="marks">[4]</span>\n\n\nCharles is also working on improving his long distance swimming in\npreparation for an Iron Man event in $12$ weeks time. He swims a total\nof $10\\hspace{0.15em}000$ metres in the first week, and plans to\nincrease this by $10$ % each week up until the\nevent.\n\n- Find the distance Charles swims in the $6$th week of\ntraining. <span class="marks">[3]</span>\n\n- Calculate the total distance Charles swims until the event.\n<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have an arithmetic sequence with the first term $u_1 = 20$ and\nthe common difference $d = 5$.\n  \n  - Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n=4$, we\nhave\n\n    $$\n    \\begin{aligned}\n    u_4 &= u_1 + (4-1)d \\\\[6pt]\n    &= 20 + (4-1)(5) \\\\[6pt]\n    &\\answer{= 35}\\end{aligned}\n    $$\n\n  - Using the $n$th term formula $u_n = u_1 + (n-1)d$, we have\n\n    $$\n    \\begin{aligned}\n    u_n &= 20 + (n-1)(5) \\\\[6pt]\n    &\\answer{= 20+5(n-1)}\\end{aligned}\n    $$\n\n\n- Solving the equation $u_k = 100$ for $k$, we get\n\n  $$\n  \\begin{aligned}\n  20+5(k-1) &= 100 \\hspace{7.5em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.9em} \\answer{k = 17} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 10$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.6em} S_{10} &= \\dfrac{10}{2}(2u_1 + (10-1)d) \\\\[6pt]\n  &= \\dfrac{10}{2}(2(20) + (10-1)(5)) \\\\[12pt]\n  &\\answer{= 425}\\end{aligned}\n  $$\n\n- We have a geometric sequence with the first term\n$v_1 = 10\\hspace{0.15em}000$ and the $\\text{common}$ ratio\n$r = 1.1$.\nHence, using the $n$th term formula $v_n = v_1r^{n-1}$ with $n=6$,\nwe get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} v_6 &= v_1r^{6-1} \\\\[6pt]\n  &= 10\\hspace{0.15em}000\\hspace{0.05em}(1.1)^{6-1} \\\\[7pt]\n  &= 16105.1 \\\\[7pt]\n  &\\answer{\\approx 16\\hspace{0.15em}100\\text{ m}}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{v_1(r^n-1)}{r-1}$\nwith $n=12$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.9em} S_{12} &= \\dfrac{v_1(r^{12}-1)}{r-1} \\\\[6pt]\n  &= \\dfrac{10\\hspace{0.15em}000\\hspace{0.05em}(1.1^{12}-1)}{1.1-1} \\\\[12pt]\n  &\\approx 213\\hspace{0.15em}842.84 \\\\[16pt]\n  &\\answer{\\approx 214\\hspace{0.15em}000 \\text{ m}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 25',
    content:
      'The second and the third terms of a geometric sequence are $u_2 = 3$ and\n$u_3 = 6$.\n\n- Find the value of $r$, the common ratio of the sequence. <span class="marks">[2]</span>\n\n- Find the value of $u_6$. <span class="marks">[2]</span>\n\n- Find the largest value of $n$ for which $u_n$ is less than\n$10^4$.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_3}{u_2} \\hspace{2.15em} \\\\[6pt]\n  &= \\dfrac{6}{3} \\\\[12pt]\n  &\\answer{=2}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_2r^{n-2}$ with $n = 6$, we get\n\n  $$\n  \\begin{aligned}\n  u_6 &= u_2r^{6-2} \\hspace{1em} \\\\[6pt]\n  &= 3(2)^{6-2} \\\\[7pt]\n  &\\answer{= 48}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.5em} u_n &< 10^4 \\\\[6pt]\n  u_2r^{n-2} &< 10^4 \\\\[6pt]\n  3(2)^{n-2} &< 10^4 \\\\[7pt]\n  n &< 13.7 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence\nthe largest value of $n$ such that $u_n < 10^4$ is\n\n  $$\n  \\begin{aligned}\n  \\answer{n = 13} \\hspace{2.5em}\\end{aligned}\n  $$\n\n',
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
    type: 'ERQ',
    title: 'Question 26',
    content:
      'The sum of the first $n$ terms of an arithmetic sequence,\n$S_n = u_1 + u_2 + u_3 + \\dots + u_n$, is given by $S_n = 2n^2 + n$.\n\n- Write down the values of $S_1$ and $S_2$. <span class="marks">[2]</span>\n\n- Write down the values of $u_1$ and $u_2$. <span class="marks">[2]</span>\n\n- Find $d$, the common difference of the sequence. <span class="marks">[1]</span>\n\n- Find $u_{10}$, the tenth term of the sequence. <span class="marks">[2]</span>\n\n- Find the greatest value of $n$, for which $u_n$ is less than $100$.\n<span class="marks">[3]</span>\n\n- Find the value of $n$, for which $S_n$ is equal to $1275$.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \n  \\begin{array}{rlcrl}\n  S_1 &= 2(1)^2 + 1 &\\text{and}& S_2 &= 2(2)^2 + 2 \\\\[6pt]\n  &\\answer{= 3} &\\,\\hspace{5em}\\,& &\\answer{= 10}\n  \\end{array} \\hspace{2.2em}\n  $$\n\n- We have\n\n  $$\n  \n  \\begin{array}{rlcrl}\n  u_1 &= S_1 &\\text{and}& u_2 &= S_2 - S_1 \\\\[6pt]\n  &\\answer{= 3} &\\,\\hspace{5em}\\,& &=10-3 \\\\[6pt]\n  &&&&\\answer{= 7}\n  \\end{array}\n  $$\n\n- The common difference is\n\n  $$\n  \\begin{aligned}\n  d &= u_2 - u_1 \\\\[6pt]\n  &= 7 - 3 \\\\[6pt]\n  &\\answer{= 4}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 10$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.35em} u_{10} &= u_1 + (10-1)d \\\\[6pt]\n  &= 3 + (10-1)(4) \\\\[6pt]\n  &\\answer{= 39}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.7em} u_n &< 100 \\\\[9pt]\n  u_1 + (n-1)d &< 100 \\\\[9pt]\n  3 + (n-1)(4) &< 100 \\\\[10pt]\n  n &< 25.3 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence\nthe greatest value of $n$ such that $u_n < 100$ is\n\n  $$\n  \\begin{aligned}\n  \\answer{n = 25} \\hspace{2.3em}\\end{aligned}\n  $$\n\n- Solving the equation $S_n = 1275$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{n}{2}(2u_1 + (n-1)d) &= 1275 \\hspace{4em} \\\\[6pt]\n  \\dfrac{n}{2}(2(3) + (n-1)(4)) &= 1275 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{13.9em} \\answer{n = 25} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 27',
    content:
      'The Australian Koala Foundation estimates that there are about\n$45\\hspace{0.15em}000$ koalas left in the wild in $2019$. A year before,\nin $2018$, the population of koalas was estimated as\n$50\\hspace{0.15em}000$. Assuming the population of koalas continues to\ndecrease by the same percentage each year, find:\n\n- the exact population of koalas in $2022$; <span class="marks">[3]</span>\n\n- the number of years it will take for the koala population to reduce\nto half of its number in $2018$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have a geometric sequence with\n\n  $$\n  \\begin{aligned}\n  2018:\\hspace{0.5em} u_1 &= 50\\hspace{0.15em}000 \\\\[6pt]\n  2019:\\hspace{0.5em} u_2 &= 45\\hspace{0.15em}000\\end{aligned}\n  $$\n\n  The\ncommon ratio of the sequence is\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.1em} r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n  &= \\dfrac{45\\hspace{0.15em}000}{50\\hspace{0.15em}000} \\\\[12pt]\n  &= 0.9\\end{aligned}\n  $$\n\n  Using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 5$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.5em} 2022:\\hspace{0.5em} u_5 &= u_1r^{5-1} \\\\[6pt]\n  &= 50\\hspace{0.15em}000(0.9)^{5-1} \\\\[7pt]\n  &\\answer{= 32\\hspace{0.15em}805}\\end{aligned}\n  $$\n\n- Solving the equation $u_n = 25\\hspace{0.15em}000$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  u_1r^{n-1} &= 25\\hspace{0.15em}000 \\hspace{2em} \\\\[6pt]\n  50\\hspace{0.15em}000(0.9)^{n-1} &= 25\\hspace{0.15em}000\\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{13.5em} n \\approx 7.58 \\hspace{3em} [\\text{by using G.D.C.}] \\\\[2pt]\n  $$\n\n  Hence it will take\n$\\answer{7.58 \\text{ years}}$\nfor the koala population to reduce to half of its number in $2018$.\n',
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
    title: 'Question 28',
    content:
      'A battalion is arranged, per row, according to an arithmetic sequence.\nThere are $24$ troops in the third row and $42$ troops in the sixth row.\n\n- Find the first term and the common difference of this arithmetic\nsequence. <span class="marks">[3]</span>\n\n\nThere are $15$ rows in the battalion.\n\n- Find the total number of troops in the battalion.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have $u_3 = 24$ and $u_6 = 42$.\nUsing the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 3$ and\n$n = 6$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.75em} u_3 &= u_1 + (3-1)d \\\\[6pt]\n  24 &= u_1 + 2d \\tag*{$(1)$}\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.75em} u_6 &= u_1 + (6-1)d \\\\[6pt]\n  42 &= u_1 + 5d \\tag*{$(2)$}\\end{aligned}\n  $$\n\n  Hence $(1)$ & $(2)$ are\nsimultaneous equations which can be solved for $u_1$ and $d$.\n  If we subtract the equation $(1)$ from the equation $(2)$ and solve\nthe resulting equation for $d$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.1em} 42-24 &= (u_1 + 5d) - (u_1 + 2d) \\\\[6pt]\n  18 &= 3d \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  \\answer{d = 6} \\hspace{4em} \\\\\n  \\end{aligned}\n  $$\n\n  [$\\text{This could have been solved using G.D.C.}$]\n  Hence, if we substitute $d = 6$ in the equation $(1)$ and solve the\nresulting equation for $u_1$, we get\n\n  $$\n  \\begin{aligned}\n  24 &= u_1 + 2(6) \\hspace{1.5em}\\end{aligned}\n  $$\n\n\n  $$\n  \\answer{u_1 = 12} \\hspace{4.5em}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 15$, $u_1 = 12$ and\n$d = 6$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.35em} S_{15} &= \\dfrac{15}{2}(2u_1 + (15-1)d) \\\\[6pt]\n  &= \\dfrac{15}{2}(2(12) + (15-1)(6)) \\\\[11pt]\n  &\\answer{= 810 \\text{ troops}}\\end{aligned}\n  $$\n\n',
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
    type: 'ERQ',
    title: 'Question 29',
    content:
      'The number of seats in an auditorium follows a regular pattern where the\nfirst row has $u_1$ seats, and the amount increases by the same amount,\n$d$, each row. In the fifth row, there are $62$ seats and in the\nthirteenth row there are $86$ seats.\n\n- Write down an equation, in terms of $u_1$ and $d$, for the amount of\nseats\n  \n  - in the fifth row.\n  - in the thirteenth row.<span class="marks">[2]</span>\n\n\n- Find the value of $u_1$ and $d$.<span class="marks">[2]</span>\n\n- Calculate the total number of seats if the auditorium has 20\nrows.<span class="marks">[3]</span>\n\n\nThe cost of the ticket for a musical held at the auditorium is inversely\nproportional to the seat\'s row. The price for a seat in the first row is\n$120 dollars, and the price decreases $3\\%$ each row. Thus, the value\nof the ticket for seats in the second row is $116.40 and $112.91 in\nthe third one, etc.\n\n- \n  - Find the price of the ticket for a seat in the fifth row,\nrounding your answer to two decimal places.\n  - Find the row of the seat at which the price of a ticket first\nfalls below $70.\n  - Find the total revenue the auditorium generates by tickets sales\nif 40 seats in each of the 20 rows are sold. Give your answer\nrounded to the nearest dollar.<span class="marks">[9]</span>\n\n\n',
    markScheme:
      '\n- The $n$th term of an arithmetic sequence can be found by\n$u_n=u_1+(n-1)d$. Hence, we get\n  \n  - $\\answer{u_5=u_1+4d}$\n  - $\\answer{u_{13}=u_1+12d}$\n\n- Substituting the values of $u_5=62$ and $u_{13}=86$ into the\nequations found in part (a), we get\n\n  $$\n  \\begin{cases}\n  u_1+4d = 62 \\\\\n  u_1+12d= 86\n  \\end{cases}\n  $$\n\n  Using G.D.C. to solve, we get\n$\\answer{u_1=50}$\n$\\text{ and }\\answer{d=3}$\n- Using the formula for the sum of terms of an arithmetic sequence, we\nget\n\n  $$\n  \\begin{aligned}\n     S_{n} \n     &= \\dfrac{n}{2}(2u_1+(n-1)d)\\\\[6pt]\n     S_{20} &= \\dfrac{20}{2}(2(50)+(19)3)\\\\[8pt]\n     &\\hspace{0.3em}\\answer{= 1570}\\end{aligned}\n  $$\n\n- \n  - Let $p_n$ be the price of the ticket in the $n$-th row. Using\nthe formula for the $n$-th term in a geometric sequence, we get\n\n    $$\n    \\begin{aligned}\n        p_n &= u_1r^{n-1} \\\\[7pt]\n        p_5 &= 120(0.97)^4 \\\\[8pt]\n        &\\hspace{0.3em}\\answer{=\\text{\\$}106.24}\\end{aligned}\n    $$\n\n  - Solving for the nearest integer the equation for the $n$-th\nterm, we get\n\n    $$\n        \\begin{aligned}\n        70 &= 120(0.97)^{n-1} \\\\[7pt]\n        n &\\approx 18.70\\end{aligned}\n    $$\n\n    Therefore, the price of a\nticket first falls below $70 in the\n$\\answer{19\\text{th row}}$.\n  - The sum of terms in a geometric sequence can be found by\n$s_n=\\dfrac{u_1(1-r^n)}{1-r}$. Hence, 1 ticket sold in each row\ncan calculated by\n\n    $$\n        \\begin{aligned}\n        s_{20} &=\\dfrac{120(1-0.97^{20})}{1-0.97} \\\\[7pt]\n        &\\approx 1824.82\\end{aligned}\n    $$\n\n    40 tickets sold in each row can therefore be calculated by\n\n    $$\n        \\begin{aligned}\n        40 \\times s_{20} &=40 \\times 1824.82 \\\\[9pt]\n        &\\hspace{0.3em}\\answer{\\text{\\$}72\\text{,}993}\\end{aligned}\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '16',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 30',
    content:
      "Two college students, David and Lisa, decide to invest money they have\nsaved from working part-time jobs. David's investment strategy results\nin an increase of his investment amount by $\\$ 1\\,000$ each year. Lisa's\ninvestment strategy results in her investment amount increasing by\n$5 \\%$ each year.\nAt the start of the second year of investing, David's total investment\namount is $\\$21\\,000$ and Lisa's is $\\$11\\,655$.\n\n- Calculate\n  \n  - the original amount David invested.\n  - the original amount Lisa invested.<span class=\"marks\">[4]</span>\n\n\n\nDuring a certain year, $n$, Lisa's investment amount becomes larger than\nDavid's amount for the first time.\n\n- Find the value of $n$. <span class=\"marks\">[3]</span>  \n",
    markScheme:
      "\n- \n  - Using the $n$th term formula for an arithmetic sequence with\n$u_2=21\\,000$, $n=2$, and $d=1\\,000$, we get\n\n    $$\n    \\begin{aligned}\n    u_n &= u_1+(n-1)d\\hspace{0.75cm}\\\\[6pt]\n    21\\,000 &= u_1+ (2-1)(1\\,000) \\hspace{0.75cm}\\\\[6pt]\n    21\\,000  &= u_1+ 1\\,000 \\hspace{0.75cm}\\\\[8pt]\n    &\\hspace{-0.5em}\\answer{u_1 = \\$20\\,000}\\end{aligned}\n    $$\n\n  - Using the $n$th term formula for a geometric sequence with\n$v_2 = 11\\,655$, $n=2$, and $r=1.05$, we get\n\n    $$\n    \\begin{aligned}\n    v_n&=v_1r^{n-1}\\hspace{0.75cm}\\\\[6pt]\n    11\\,655 &=v_1 (1.05)^{2-1}\\hspace{0.75cm}\\\\[6pt]\n    11\\,655&=v_1(1.05) \\\\[6pt]\n    &\\hspace{-0.5em}\\answer{v_1= \\$ 11\\,100}\\end{aligned}\n    $$\n\n\n- David's investment amount at the start of the $n$th year can be\nexpressed as\n\n  $$\n  \\begin{aligned}\n  u_n &= u_1+(n-1)d\\nonumber\\\\[6pt]\n  &= 20\\,000+(n-1)1\\,000\\nonumber\\\\[6pt]\n  &=1\\,000n+19\\,000\\nonumber\\end{aligned}\n  $$\n\n  Lisa's investment amount at the start of the $n$th year can be\nexpressed as\n\n  $$\n  \\begin{aligned}\n  v_n &= v_1r^{n-1}\\nonumber\\hspace{1.3cm}\\\\[6pt]\n  &= 11\\,100(1.05)^{n-1}\\nonumber\\end{aligned}\n  $$\n\n  Both investment amounts are plotted on the graph below, for a given\nstart of year $n$\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/eaf9f497-ddf1-40c8-9c21-b0fc2e24b7f6/images/c286e305-85d9-4285-9e32-7a4537c9f8e1/8d89268e496fd951a9f86ddd8871c22f623a5d88.svg)\n\n\n  Form the graph, $11\\,100(1.05)^{n-1} > 1\\,000n+19\\,000$ when\n$n > 32.4$.\n  Hence, Lisa's amount will become larger than David's during year $32$.\n",
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
    title: 'Question 31',
    content:
      'Peter is playing on a swing during a school lunch break. The height of\nthe first swing was $2$ m and every subsequent\nswing was $84$ % of the previous one. Peter\'s\nfriend, Ronald, gives him a push whenever the height falls below\n$1$ m.\n\n- Find the height of the third swing. <span class="marks">[2]</span>\n\n- Find the number of swings before Ronald gives Peter a push.\n<span class="marks">[2]</span>\n\n- Calculate the total height of swings if Peter is left to swing until\ncoming\nto rest. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have a geometric sequence with the first term $u_1 = 2$ and the\ncommon ratio $r = 0.84$.\n  Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 3$,\nwe find\n\n  $$\n  \\begin{aligned}\n  u_3 &= u_1r^{3-1} \\\\[6pt]\n  &= 2\\hspace{0.05em}(0.84)^{3-1} \\\\[7pt]\n  &\\answer{\\approx 1.41 \\text{ m}}\\end{aligned}\n  $$\n\n- Solving the inequality $u_n < 1$ for $n$, we have\n\n  $$\n  \\begin{aligned}\n  u_1r^{n-1} &< 1 \\\\[6pt]\n  \\hspace{3em} 2\\hspace{0.05em}(0.84)^{n-1} &< 1 \\\\[7pt]\n  4.98 &< n \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence\nthe swing needs a push after\n$\\answer{5}$\nswings.\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$, we get\n\n  $$\n  \\begin{aligned}\n  S_{\\infty} &= \\dfrac{2}{1-0.84} \\hspace{1.3em} \\\\[12pt]\n  &\\answer{= 12.5 \\text{ m}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 32',
    content:
      'The first term of an arithmetic sequence is $24$ and the common\ndifference is $16$.\n\n- Find the value of the $62$ nd term of the\nsequence. <span class="marks">[2]</span>\n\n\nThe first term of a geometric sequence is $8$. The $4$th term of the\ngeometric sequence is equal to the $13$th term of the arithmetic\nsequence given above.\n\n- Write down an equation using this information. <span class="marks">[2]</span>\n\n- Calculate the common ratio of the geometric sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have $u_1 = 24$ and $d = 16$.\nUsing the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 62$, we\nfind\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} u_{62} &= u_1 + (62-1)d \\\\[6pt]\n  &= 24 + (62-1)(16) \\\\[6pt]\n  &\\answer{= 1000}\\end{aligned}\n  $$\n\n- We have $v_1 = 8$ and $v_4 = u_{13}$.\nUsing the $n$th term formula $v_n = v_1r^{n-1}$ with $n = 4$, we\nhave\n\n  $$\n  \\begin{aligned}\n  v_4 &= v_1r^{4-1} \\hspace{1.15em} \\\\[6pt]\n  &= 8r^{4-1} \\\\[6pt]\n  &= 8r^3\\end{aligned}\n  $$\n\n  Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 13$, we\nhave\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} u_{13} &= u_1 + (13-1)d \\\\[6pt]\n  &= 24 + (13-1)(16) \\\\[6pt]\n  &= 216\\end{aligned}\n  $$\n\n  Hence we get\n\n  $$\n  \\begin{aligned}\n  v_4 = u_{13} \\hspace{2.6em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  \\answer{8r^3 = 216} \\hspace{3.05em}\\end{aligned}\n  $$\n\n- If we solve the equation $8r^3 = 216$ for $r$ using G.D.C., we\nobtain  $\\answer{r = 3}$\n',
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
    title: 'Question 33',
    content:
      'A bouncy ball is dropped out of a second story classroom window,  $5\\,$m off the ground. Every time the ball hits the ground it bounces $89\\,$% of its previous height.\n\n- Find the height the ball reaches after the $2$nd bounce. <span class="marks">[2]</span>\n\n- Find the total distance the ball has travelled when it hits the ground for the $5$th time. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The height of the ball after each bounce follows a geometric sequence, with first term $u_1 = 5(0.89)$ and common ratio $r = 0.89$.\n  Using the formula for the $n$th term of a geometric sequence, we have\n\n  $$\n  \\begin{align*}\n  u_{2} &= u_1r^{2-1} \\\\[6pt]\n  &= [5(0.89)](0.89)^1 \\\\[7pt]\n  &\\hspace{0.275em}\\tcbhighmath{\\approx 3.96\\text{ m}}\n  \\end{align*}\n  $$\n\n- The total distance travelled by the ball is the sum of two separate geometric sequences.\n  The first, when the ball is travelling downwards, has first term $u_1=5$ and common ratio $r=0.89$. When the ball hits the ground for the $5$th time, it has travelled downwards a distance that is equivalent to the sum of the first five terms of this sequence. We have\n\n  $$\n  \\begin{align*}\n  S_n &= \\dfrac{u_1(1-r^n)}{1-r} \\\\[6pt]\n  S_5 &= \\dfrac{5(1-0.89^5)}{1-0.89} \\\\[7pt]\n  &\\approx 20.07 \\,\\text{m}\n  \\end{align*}\n  $$\n\n  The second, when the ball is travelling upwards, has first term $u_1=5(0.89)$ and common ratio $r=0.89$. When the ball hits the ground for the $5$th time, it has travelled upwards a distance that is equivalent to the sum of the first four terms of this sequence. We have\n\n  $$\n  \\begin{align*}\n  S_n &= \\dfrac{u_1(1-r^n)}{1-r} \\\\[6pt]\n  S_4 &= \\dfrac{5(0.89)(1-0.89^4)}{1-0.89} \\\\[7pt]\n  &\\approx 15.07 \\,\\text{m}\n  \\end{align*}\n  $$\n\n  The total distance travelled is given by $20.07 + 15.07$.\n  The total distance travelled by the ball is approximately $\\hspace{0.525em}\\tcbhighmath{35.1\\,\\text{metres}}$.\n',
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
    type: 'ERQ',
    title: 'Question 34',
    content:
      'Bill is planning to hike the Appalachian trail, a $3\\hspace{0.1em}600$ kilometre long walking track along the east coast of the USA.\nBill plans to hike $2.1$ kilometres on the first day, then increase his distance by $200$ metres every day, so that on day $2$ he will hike $2.3$ kilometres, on day $3$ he will hike $2.5$ kilometres and so on.\n\n- Calculate how far Bill will hike on day 90. <span class="marks">[2]</span>\n\n- Determine how many days it will take Bill to hike the entire Appalachian trail. <span class="marks">[3]</span>\n\n- Hence determine how far Bill will have to hike on the final day. <span class="marks">[1]</span>\n\n\nBill can hike at an average speed of 5 kilometres per hour.\n\n- Determine how long Bill will have to hike for on the final day.<span class="marks">[2]</span>  \n\nBill’s friend Stephen starts hiking the Appalachian trail on the same day but uses a different strategy to Bill.\nStephen will hike 1 kilometre on the first day, then increase his distance by $3\\%$ per day, so that on day 2 he will hike 1.03 kilometres, on day 3 he will hike 1.0609 kilometres and so on.\n\n- Calculate how much further Bill hikes than Stephen on day 90. <span class="marks">[3]</span>\n\n- Determine the day on which Stephen passes Bill. <span class="marks">[3]</span>\n\n- Calculate how many days earlier Stephen finishes the entire trail than Bill.   <span class="marks">[2]</span>\n\n',
    markScheme:
      "\n- Bill's progress can be modelled by an arithmetic sequence, with first term $u_1 = 2.1$, and common difference $d=0.2$. Using the formula for the $n$th term of an arithemtic sequence, we can find $u_{90}$. We have\n\n  $$\n  \\begin{align*}\n  u_n &= u_1 + (n-1)d \\\\[6pt]\n  u_{90} &= 2.1 + (90-1)(0.2) \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 19.9 \\\\[6pt]\n  &\\hspace{-5.275em}\\tcbhighmath{\\text{On day $90$, Bill hikes $19.9$ kilometres.}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We need to determine the value of $n$ so that the sum of $n$ terms of the arithmetic sequence is $3\\,600$. Using the formula for the sum of $n$ terms of an arithmetic sequence, we have\n\n  $$\n  \\begin{align*}\n  S_n &= \\dfrac{n}{2}\\left(2u_1 + (n-1)d\\right) \\\\[6pt]\n  3\\,600 &= \\dfrac{n}{2}\\left(2 (2.1) + (n-1)(0.2)\\right) \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Using the numerical solver on the G.D.C.,\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  $\\answer{\\text{It will take Bill $180$ days to hike the entire trail.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- Using the formula for the $n$th term of an arithmetic sequence, we can find $u_{180}$. We have\n\n  $$\n  \\begin{align*}\n  u_{180} &= 2.1 + (180-1)(0.2) \\\\[6pt]\n  &= 37.9 \n  \\end{align*}\n  $$\n\n  $\\answer{\\text{On the final day, Bill will have to hike $37.9$ kilometres.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- Using the relationship between speed, distance and time, we have\n\n  $$\n  \\begin{align*}\n  \\text{time} &= \\dfrac{\\text{distance}}{\\text{speed}} \\\\[6pt]\n  &= \\dfrac{37.9}{5} \\tag*{\\textbf{(M1)}} \\\\[6pt]\n  &= 7.58 \\text{ hours}\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{On the final day, Bill will have to hike for $7.58$ hours.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- Stephen's progress can be modelled by a geometric sequence, with first term $u_1 = 1$, and common ratio $r=1.03$. Using the formula for the $n$th term of a geometric sequence, we can find $u_{90}$, then subtract this from $19.9$ (the distance Bill hiked on day $90$, our answer to part (a)). We have\n\n  $$\n  \\begin{align*}\n  u_n &= u_1\\,r^{n-1} \\\\[6pt]\n  u_{90} &= 1.03^{89} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  \\text{difference} &= 19.9 - 1.03^{89} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n  &= 6.016...\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{On day 90, Bill hikes approximately $6.02$ kilometres further than Stephen.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- We need to find the value of $n$ for which the sum of the arithmetic sequence (Bill's total progress) is equal to the sum of the geometric sequence (Stephen's total progress). This is shown as follows:\n\n  $$\n  \\begin{align*}\n  \\dfrac{n}{2}\\left(2(2.1) + (n-1)(0.2)\\right) &= \\dfrac{1.03^n-1}{1.03-1} \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  On the G.D.C., we can sketch the graphs of $y = \\frac{x}{2}\\left(2(2.1) + (x-1)(0.2)\\right)$ and $y = \\frac{1.03^x-1}{1.03-1}$, and find the point of intersection. This is shown on the following axes:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6107303c-946f-43f5-aa18-bf336395b043/images/d7ca50e5-958f-4c56-8a3f-9ca6db939868/1195a.JPG)\n\n\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  In context, this tells us that Stephen catches up to Bill after exactly $145.1$ days. At this point, both have hiked $2\\,395$ kilometres.\n  We are asked for the $\\textbf{day}$ on which Stephen catches up. At the end of day $145$, Stephen is still slightly behind (the green curve is below the red curve). At the end of day $146$, Stephen is now slightly ahead (the green curve is above the red curve). Therefore,\n\n  $$\n  \\begin{align*}\n  \\tcbhighmath{\\text{Stephen catches up to Bill on day $146$.}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Using the graph on our G.D.C. from part (f), we can identify the $x$ values when $y = 3\\,600$. This will tell us when each hiker completes the trail. We do already know from part (b) that Bill takes $180$ days.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6107303c-946f-43f5-aa18-bf336395b043/images/0535464e-6e7b-4452-b79e-3b9d9e85f70e/1195b.JPG)\n\n\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  We need the difference between the two $x$ values, because in context, Stephen has taken a total of $159$ days, and Bill has taken $180$ days.\n  $\\answer{\\text{Stephen finishes the entire trail $21$ days earlier than Bill.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '16',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 35',
    content:
      'A ball is dropped from the top of the Eiffel Tower, $324$ metres from\nthe ground. The ball falls a distance of $4.9$ metres during the first\nsecond, $14.7$ metres during the next second, $24.5$ metres during the\nthird second, and so on. The distances that the ball falls each second\nform an arithmetic sequence.\n\n- \n  - Find $d$, the common difference of the sequence.\n  - Find $u_5$, the fifth term of the sequence. <span class="marks">[2]</span>\n\n\n- Find $S_6$, the sum of the first $6$ terms of the sequence.\n<span class="marks">[2]</span>\n\n- Find the time the ball will take to reach the ground. Give your\nanswer in seconds correct to one decimal place. <span class="marks">[3]</span>\n\n\nAssuming the ball is dropped another time from a much higher height than\nof the Eiffel Tower,\n\n- find the distance the ball travels from the start of the\n$10$th second to the end of the $15$th second. <span class="marks">[3]</span>\n\n\nThe Eiffel Tower in Paris, France was opened in $1889$, and $1.9$\nmillion visitors ascended it during that first year. The number of\npeople who visited the tower the following year ($1890$) was $2$\nmillion.\n\n- Calculate the percentage increase in the number of visitors\nfrom $1889$ to $1890$. Give your answer correct to one decimal\nplace. <span class="marks">[2]</span>\n\n- Use your answer to part (e) to estimate the number of\nvisitors in $1900$, assuming that the number of visitors continues\nto increase at the same percentage rate. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - We have $u_1 = 4.9$ and $u_2 = 14.7$.\nHence the common difference is\n\n    $$\n    \\begin{aligned}\n    d &= u_2 - u_1 \\hspace{1.4em} \\\\[6pt]\n    &= 14.7 - 4.9 \\\\[6pt]\n    &\\answer{= 9.8\\hspace{0.25em}\\text{m}}\\end{aligned}\n    $$\n\n  - Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 5$,\nwe find\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.4em} u_5 &= u_1 + (5-1)d \\\\[6pt]\n    &= 4.9 + (5-1)(9.8) \\\\[6pt]\n    &\\answer{= 44.1\\hspace{0.25em}\\text{m}}\\end{aligned}\n    $$\n\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 6$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.4em} S_6 &= \\dfrac{6}{2}(2u_1 + (6-1)d) \\\\[4pt]\n  &= \\dfrac{6}{2}(2(4.9) + (6-1)(9.8)) \\\\[9pt]\n  &\\answer{= 176\\hspace{0.25em}\\text{m}}\\end{aligned}\n  $$\n\n- Solving the equation $S_n = 324$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{n}{2}(2u_1 + (n-1)d) &= 324 \\\\[3pt]\n  \\dfrac{n}{2}(2(4.9) + (n-1)(9.8)) &= 324 \\\\[6pt]\n  n &\\approx 8.13 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.45em} \\answer{n \\approx 8.1\\text{ seconds}}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 9$ and $n=15$, we get\n\n  $$\n  \\begin{aligned}\n  S_{15} - S_9 &= \\bigg[\\dfrac{15}{2}(2u_1 + (15-1)d)\\bigg] - \\bigg[\\dfrac{9}{2}(2u_1 + (9-1)d)\\bigg] \\\\[6pt]\n  &= \\bigg[\\dfrac{15}{2}(2(4.9) + (15-1)(9.8))\\bigg] - \\bigg[\\dfrac{9}{2}(2(4.9) + (9-1)(9.8))\\bigg] \\\\[11pt]\n  &\\answer{= 705.6\\hspace{0.25em}\\text{m}}\\end{aligned}\n  $$\n\n- Using the percentage increase formula\n$\\%\\hspace{0.2em}\\textbf{increase} = \\dfrac{v_\\mathrm{E}-v_\\mathrm{S}}{v_\\mathrm{S}}\\times 100\\hspace{0.05em}\\%$\nwith $v_\\mathrm{S} = 1.9$ and $v_\\mathrm{E} = 2.0$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\%\\hspace{0.2em}\\textbf{increase} &= \\dfrac{2.0-1.9}{1.9}\\times100\\hspace{0.05em}\\% \\hspace{2em} \\\\[6pt]\n  &\\answer{\\approx 5.3\\hspace{0.05em}\\%}\n  \\end{aligned}\n  $$\n\n- We have a geometric sequence with the first term $v_1 = 1.9$ million\nand the common ratio $r =  1.0526$.\n  Hence, using the $n$th term formula $v_n = v_1r^{n-1}$ with\n$n = 12$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.8em} v_{12} &= v_1r^{12-1} \\\\[6pt]\n  &= (1.9\\text{ million})(1.0526)^{12-1} \\\\[7pt]\n  &\\answer{= 3.34 \\text{ million}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 36',
    content:
      'On September 1st, an orchard commences the process of harvesting $36$ hectares of apple trees. At the end of September 4th, there were $30$ hectares remaining to be harvested, and at the end of September 8th, there were $24$ hectares remaining. Assuming that the number of hectares harvested each day is constant, the total number of hectares remaining to be harvested can be described by an arithmetic sequence.\n\n- Find the number of hectares of apple trees that are harvested each day. <span class="marks">[3]</span>\n\n- Determine the number of hectares remaining to be harvested at the end of September 1st. <span class="marks">[1]</span>\n\n- Determine the date on which the harvest will be complete. <span class="marks">[2]</span>\n\n\nIn 2021 the orchard sold their apple crop for $\\$220\\,000$. It is expected that the selling price will then increase by $3.2\\%$ annually for the next $7$ years.\n\n- Determine the amount of money the orchard will earn for their crop in 2026. Round your answer to the nearest dollar. <span class="marks">[3]</span>\n\n- \n  - Find the value of $\\displaystyle\\sum_{n=1}^8 \\big(220\\hspace{0.15em}000 \\times 1.032^{n-1}\\big)$. Round your answer to the nearest integer.\n  - Describe, in context, what the value in part (e) (i) represents. <span class="marks">[3]</span>\n\n\n- Comment on whether it is appropriate to model this situation in terms of a geometric sequence. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- The formula for the $n$th term of an arithmetic sequence is\n\n  $$\n  \\begin{align*}\n  u_n &= u_1+(n-1)d\\\\[-12pt]\n  \\end{align*}\n  $$\n\n  Taking $u_1$ as the number of hectares remaining to be harvested at the end of September 1st, we have $u_4=30$, and $u_8=24$. Hence, we get\n\n  $$\n  \\begin{align}\n  u_1 + 3d &= 30 \\\\[11pt]\n  u_1 + 7d &= 24 \\\\[-12pt]  \\nonumber\n  \\end{align}\n  $$\n\n  Hence subtracting (1) from (2), we have\n\n  $$\n  \\begin{align*}\n  4d &= -6 \\\\[8pt]\n  d &= -1.5 \\\\[-12pt]\n  \\end{align*}\n  $$\n\n  Therefore, $\\answer{\\text{the orchard harvests $1.5$ hectares of apple trees per day.}}$\n- There are 36 hectares of apple trees remaining to be harvested at the start of September 1st, and from part (a) we know that they are being harvested at 1.5 hectares per day.\n  Therefore, at the end of September 1st, there are $\\answer{\\text{$34.5$ hectares}}\\,$remaining to be harvested.\n- We must find the value of $n$ such that $u_n = 0$. We have $u_1 = 34.5$ and $d = -1.5$. Therefore, using the formula for the $n$th term of an arithmetic sequence, we have\n\n  $$\n  \\begin{align*}\n  34.5 + (n-1)(-1.5) &= 0\\\\[7pt]\n  34.5 -1.5n +1.5 &= 0\\\\[11pt]\n  36 - 1.5n &= 0 \\\\[11pt]\n  -1.5n &= -36 \\\\[11pt]\n  n &= \\dfrac{-36}{-1.5}\\\\[11pt]\n  n &= 24\n  \\end{align*}\n  $$\n\n  Therefore, $\\answer{\\text{the harvest will be complete at the end of September 24th.}}$\n- From $2021$ until $2028$, the selling price of the apple crop can be modelled by a geometric sequence with $u_1 = 220\\hspace{0.15em}000$ and $r = 1.032$. The selling price in $2026$ will be term $u_6$ in this sequence.\n  Using the formula for the $n$th term in a geometric sequence, we have\n\n  $$\n  \\begin{align*}\n  u_n &= u_1 \\times r^{n-1} \\\\[11pt]\n  u_6 &= 220\\hspace{0.15em}000 \\left(1.032\\right)^{6-1} \\\\[11pt]\n  &= 257526\\\\[-12pt]\n  \\end{align*}\n  $$\n\n  In $2026$, the orchard will earn $\\answer{257\\,526}\\,$ for their crop.\n- \n  - Using the G.D.C., we obtain\n\n    $$\n    \\begin{align*}\n    \\sum_{n=1}^8 220\\hspace{0.15em}000 \\times 1.032^{n-1} \\  \\answer{\\approx 1\\,970\\,253}\\\\[-12pt]\n    \\end{align*}\n    $$\n\n  - $\\answer{\\text{The total amount earned for the apple crop from 2021 to 2028}}$\n\n- The model is appropriate as long as:\n  $\\answer{\\text{the selling price increases at a similar rate annually.}}$\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '13',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 37',
    content:
      'A hotel is built so that the highest rooms have an outstanding view of a local tourist attraction. The hotel has 26 floors, and the number of rooms per floor decreases in a regular pattern by a fixed amount of $d$ rooms. There are $96$ rooms on the third floor and $84$ on the sixth floor.\n\n- Write down an equation, in terms of $u_1$ and $d$, for the number of rooms on\n  \n  - the third floor.\n  - the sixth floor.<span class="marks">[2]</span>\n\n\n- Hence find the value of $u_1$ and $d$.<span class="marks">[3]</span>\n\n- Calculate the total number of rooms in the hotel. Give your answer to the nearest whole number.<span class="marks">[2]</span>\n\n\nThe cost of booking a room increases the higher the floor on which the room is located. The price of booking a room on the first floor is $\\$ 98$ dollars and the price increases by $5 \\%$ per floor. Thus the price for booking a room on the second floor is $\\$102.90$ and $\\$108.05$ on the third floor, and so on.\n\n- Find the price of booking a room on the eighth floor. Give your answer to two decimal places.<span class="marks">[2]</span>\n\n- Determine the floor at which the price of booking a room first increases above $\\$200$.<span class="marks">[3]</span>\n\n- Calculate the total revenue for the hotel if three rooms on each of the 26 floors are booked. Give your answer to the nearest dollar.<span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- The $n$th term of an arithmetic sequence can be found by $u_n=u_1+(n-1)d$. Hence, we get\n  \n  - $\\answer{u_1+2d=96}$\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n  - $\\answer{u_1+5d=84}$\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\n    \\end{aligned}\n    $$\n\n\n- Using the equations we found in part (a), we get\n\n  $$\n  \\left\\{\\begin{array}{lcl}\n  u_1+2d=96 \\\\[8pt]\n  u_1+5d=84\n  \\end{array}\\right. \\\\[4pt]\n  $$\n\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{(M1)}}\t\n  \\end{aligned}\n  $$\n\n  Using G.D.C. to solve, we get $\\answer{u_1=104}$ and $\\answer{d=-4}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A2}}\t\n  \\end{aligned}\n  $$\n\n- Using the formula for the sum of terms of an arithmetic sequence, we get\n\n  $$\n  \\begin{align*}\n  S_{n} \n  &= \\dfrac{n}{2}(2u_1+(n-1)d)\\\\[6pt]\n  S_{26} &= \\dfrac{26}{2}(2(104)+(25)(-4))\\tag*{\\textbf{(M1)}}\\\\[8pt]\n  &\\hspace{0em}\\tcbhighmath{= 1\\,404} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Using the formula for the $n$th term in a geometric sequence, we get\n\n  $$\n  \\begin{align*}\n  u_n &= u_1r^{n-1} \\\\[8pt]\n  u_8 &= 98(1.05)^7 \\tag*{\\textbf{(M1)}}\\\\[8pt]\n  &= 137.895... \\\\[8pt]\n  &\\hspace{0em}\\tcbhighmath{=\\text{\\$}137.90} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- We can form an inequality using the formula for the $n$th term in a geometric sequence.\n\n  $$\n  \\begin{align*}\n  98(1.05)^{n-1} &> 200 \n  \\end{align*}\n  $$\n\n  Using the numerical solver, we can determine the value of $n$ for which both sides are equal, and then interpret our answer, given that $n$ must be a positive integer.\n\n  $$\n  \\begin{align*}\n  98(1.05)^{n-1} &= 200 \\tag*{\\textbf{(M1)}}\\\\[8pt]\n  n &= 15.62... \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  When $n=15$, $98(1.05)^{14}=194.03$.\n  When $n=16$, $98(1.05)^{15}=203.73$.\n  Therefore, booking first increases above $200 on the $\\answer{16\\text{th floor}.}$\n\n  $$\n  \\begin{aligned}\t\t\t\n  \\tag*{\\textbf{A1}}\t\n  \\end{aligned}\n  $$\n\n- The sum of terms in a geometric sequence can be found by $s_n=\\dfrac{u_1(1-r^n)}{1-r}$. Hence, the revenue for the hotel of having 1 room booked on each floor is given by\n\n  $$\n  \\begin{align*}\n  s_{26} &=\\dfrac{98(1-1.05^{26})}{1-1.05} \\tag*{\\textbf{(M1)}}\\\\[7pt]\n  &= 5\\,009.118...\\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Thus, the income for 3 rooms booked on each floor can therefore be calculated by\n\n  $$\n  \\begin{align*}\n  3 \\times s_{26} &= 3 \\times 5\\,009.118... \\tag*{\\textbf{(M1)}}\\\\[9pt]\n  &= 15\\,027.35...\\\\[9pt]\n  &\\hspace{0em}\\tcbhighmath{= \\text{\\$}15\\,027} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '16',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 38',
    content:
      'Georgia is on vacation in Costa Rica. She is in a hot air balloon over a\nlush jungle in Muelle.\nWhen she leans forward to see the treetops, she accidentally drops her\npurse. The purse falls down a distance of $4$ metres during the first\nsecond, $12$ metres during the next second, $20$ metres during the third\nsecond and continues in this way. The distances that the purse falls\nduring each second forms an arithmetic sequence.\n\n- \n  - Write down the common difference, $d$, of this arithmetic\nsequence.\n  - Write down the distance the purse falls during the fourth\nsecond. <span class="marks">[2]</span>\n\n\n- Calculate the distance the purse falls during the $13$th second.\n<span class="marks">[2]</span>\n\n- Calculate the total distance the purse falls in the first $13$\nseconds. <span class="marks">[2]</span>\n\n\nGeorgia drops the purse from a height of $1250$ metres above the ground.\n\n- Calculate the time, to the nearest second, the purse will\ntake to reach\nthe ground. <span class="marks">[3]</span>\n\n\nGeorgia visits a national park in Muelle. It is opened at the start of\n$2019$ and in the first year there were $20\\hspace{0.15em}000$ visitors.\nThe number of people who visit the national park is expected to increase\nby $8\\hspace{0.1em}\\%$ each year.\n\n- Calculate the number of people expected to visit the\nnational park in $2020$. <span class="marks">[2]</span>\n\n- Calculate the total number of people expected to visit the\nnational park by the end of $2028$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - We have $u_1 = 4$ and $u_2 = 12$.\nHence the common difference is\n\n    $$\n    \\begin{aligned}\n    d &= u_2 - u_1 \\hspace{2.2em} \\\\[6pt]\n    &= 12 - 4 \\\\[6pt]\n    &\\answer{= 8}\\end{aligned}\n    $$\n\n  - Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 4$,\nwe get\n\n    $$\n    \\begin{aligned}\n    u_4 &= u_1 + (4-1)d \\\\[6pt]\n    &= 4 + (4-1)(8) \\\\[6pt]\n    &\\answer{= 28\\hspace{0.25em}\\text{m}}\\end{aligned}\n    $$\n\n\n- Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 13$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.35em} u_{13} &= u_1 + (13-1)d \\\\[6pt]\n  &= 4 + (13-1)(8) \\\\[6pt]\n  &\\answer{= 100\\hspace{0.25em}\\text{m}}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 13$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.6em} S_{13} &= \\dfrac{13}{2}(2u_1 + (13-1)d) \\\\[6pt]\n  &= \\dfrac{13}{2}(2(4) + (13-1)(8)) \\\\[12pt]\n  &\\answer{= 676\\hspace{0.25em}\\text{m}}\\end{aligned}\n  $$\n\n- Solving the equation $S_n = 1250$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{n}{2}(2u_1 + (n-1)d) &= 1250 \\\\[6pt]\n  \\dfrac{n}{2}(2(4) + (n-1)(8)) &= 1250 \\\\[9pt]\n  n &\\approx 17.7 \\hspace{3em} [\\text{by using G.D.C.}] \\hspace{2.2em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  \\answer{n \\approx 18\\text{ seconds}} \\hspace{1.6em}\\end{aligned}\n  $$\n\n- We have a geometric sequence with the first term\n$v_1 = 20\\hspace{0.15em}000$ and the common ratio $r = 1.08$.\n  Hence, using the $n$th term formula $v_n = v_1r^{n-1}$ with $n = 2$,\nwe get\n\n  $$\n  \\begin{aligned}\n  v_2 &= v_1r^{2-1} \\\\[6pt]\n  &= 20\\hspace{0.15em}000(1.08)^{2-1} \\\\[7pt]\n  &\\answer{= 21\\hspace{0.15em}600}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{v_1(r^n-1)}{r-1}$\nwith $n = 10$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.7em} S_{10} &= \\dfrac{v_1(r^{10}-1)}{r-1} \\\\[6pt]\n  &= \\dfrac{20\\hspace{0.15em}000((1.08)^{10}-1)}{1.08-1} \\\\[12pt]\n  &\\approx 289\\hspace{0.15em}731 \\\\[16pt]\n  &\\answer{\\approx 290\\hspace{0.15em}000}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 39',
    content:
      'Aoife and Barack have both started a delivery job, where they are paid the same amount daily to make a certain number of deliveries.\nOn the first day, both Aoife and Barack take 240 minutes to make their deliveries.\nAoife plans to reduce the amount of time the deliveries take by 2 minutes per day.\nBarack plans to reduce the amount of time the deliveries take by $1\\%$ per day.\nAssuming both Aoife and Barack are able to follow this plan indefinitely, determine the first day on which Aoife will complete her deliveries faster than Barack.',
    markScheme:
      "The time Aoife takes daily to complete her deliveries follows an $\\textbf{arithmetic sequence}$, with first term $u_1=240$ and common difference $d=-2$.\nThe time Barack takes daily to complete his deliveries follows a $\\textbf{geometric sequence}$ with first term $v_1=240$ and common ratio $r$.\nGiven that Barack is $\\textit{reducing}$ his time by $1\\%$ per day, this means that each day his deliveries take $99\\%$ of the time of the day before. Therefore $r=0.99$.\nWe are looking for the first day that Aoife will complete her deliveries faster than Barack. Let's call this day $n$.\nWe are therfore looking for the smallest value of $n$ such that $u_n < v_n$.\nUsing the formula for the $n$th term of an arithmetic sequence, we have\n\n$$\n\\begin{align*}\n    u_n &= u_1 + (n-1)d \\\\[6pt]\n    &= 240 + (n-1)(-2) \\\\[6pt]\n    &= 240 -2n + 2 \\\\[6pt]\n    u_n &= 242 - 2n \\tag*{\\textbf{(A1)}}\n\\end{align*}\n$$\n\nUsing the formula for the $n$th term of a geometric sequence, we have\n\n$$\n\\begin{align*}\n    v_n &= v_1\\,r^{n-1} \\\\[6pt]\n    &= 240(0.99)^{n-1} \\tag*{\\textbf{(A1)}}\n\\end{align*}\n$$\n\nHence we are trying determine the smallest value of $n$ so that\n\n$$\n\\begin{align*}\n    242 - 2n < 240(0.99)^{n-1} \\tag*{\\textbf{(A1)}}\n\\end{align*}\n$$\n\nTo do this, we will sketch and interpret the graphs of $y=242-2x$ and $y=240(0.99)^{x-1}$:\n\n$$\n\\begin{aligned}\n\\tag*{\\textbf{(M1)}}\n\\end{aligned}\n$$\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/5abb56ff-0206-43c0-b41f-d8df69082b2f/images/0aeaebcb-92b3-42b0-a61a-20bb9a72a750/1179.JPG)\n\n\nWe see that the graphs intersect at $(39.52,163.0)$.\n\n$$\n\\begin{aligned}\n\\tag*{\\textbf{(A1)}}\n\\end{aligned}\n$$\n\nLet's look at the nearest whole numbers to the left and right of $x=39.52$.\nWhen $x=39$, the red line is slightly $\\textbf{above}$ the green curve.\nWhen $x=40$, now the red line is slightly $\\textbf{below}$ the green curve.\nIn the context of our question, this means that on day 39, Barack completed his deliveries slightly quicker than Aoife.\nOn day 40, Aoife completed her deliveries slightly quicker than Barack, and this was the first time it happened.\n$\\tcbhighmath{\\text{Day 40 is the first day on which Aoife completes her deliveries faster than Barack.}}$\n\n$$\n\\begin{aligned}\n\\tag*{\\textbf{A1}}\n\\end{aligned}\n$$\n",
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
    title: 'Question 40',
    content:
      'Let $u_n = 4n+1$, for $n \\in \\mathbb{Z}^+$.\n\n- \n  - Using sigma notation, write down an expression for\n$u_1 + u_2 + u_3 + \\dots + u_{20}$.\n  - Find the value of the sum from part (a) (i). <span class="marks">[4]</span>\n\n\n\nA geometric sequence is defined by $v_n = 9\\times 4^{n-1}$, for\n$n \\in \\mathbb{Z}^+$.\n\n- Find the value of the sum of the geometric series\n$\\displaystyle\\sum_{k = 1}^5\\hspace{0.1em}v_k$.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- \n  - Using sigma notation, we have\n\n    $$\n    \\begin{aligned}\n    u_1 + u_2 + u_3 + \\dots + u_{10} &= \\sum_{k=1}^{20} u_k \\\\[6pt]\n    &\\answer{= \\displaystyle\\sum_{k=1}^{20} (4k+1)} \\hspace{8em}\\end{aligned}\n    $$\n\n  - If we rewrite $u_n = 4n+1$ in the form $u_n = u_1 + (n-1)d$, we\nhave\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.5em} u_n &= 5 + (n-1)(4)\\end{aligned}\n    $$\n\n    Hence $u_n$ is\nan arithmetic sequence with the first term $u_1 = 5$ and\nthe common difference $d = 4$.\n    Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with\n$n=20$\n    we find\n\n    $$\n    \\begin{aligned}\n    \\sum_{k=1}^{20} (4k+1) &= S_{20} \\\\[3pt]\n    &= \\dfrac{20}{2}(2u_1 + (20-1)d) \\\\[9pt]\n    &= \\dfrac{20}{2}(2(5) + (20-1)(4)) \\\\[14pt]\n    &\\answer{= 860}\\end{aligned}\n    $$\n\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.3em} v_1 &= 9 \\hspace{3em} [\\text{the first term}] \\\\[9pt]\n  r &= 4 \\hspace{3em} [\\text{the common ratio}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{v_1(r^n-1)}{r-1}$ with\n$n=5$, we get\n\n  $$\n  \\begin{aligned}\n  \\sum_{k = 1}^5 9\\times 4^{k-1} &= S_5 \\\\[3pt]\n  &= \\dfrac{v_1(r^5-1)}{r-1} \\hspace{3.4em}  \\\\[9pt]\n  &= \\dfrac{9\\hspace{0.05em}(4^5-1)}{4-1} \\\\[15pt]\n  &\\answer{= 3069}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 41',
    content:
      'Landmarks are placed along the road from London to Edinburgh and the\ndistance between each landmark is $16.1$ km. The\nfirst milestone placed on the road is $124.7$ km\nfrom London, and the last milestone is near Edinburgh. The length of the\nroad from London to Edinburgh is $667.1$ km.\n\n- Find the distance between the fifth milestone and London.\n<span class="marks">[3]</span>\n\n- Determine how many milestones there are along the road. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have an arithmetic sequence with $u_1 = 124.7$ and $d = 16.1$.\nHence, using the $n$th term formula $u_n = u_1 + (n-1)d$ with\n$n = 5$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.6em} u_5 &= u_1 + (5-1)d \\\\[6pt]\n  &= 124.7 + (5-1)(16.1) \\\\[6pt]\n  &= 189.1\\end{aligned}\n  $$\n\n  Hence the the distance between the fifth\nmilestone and London is\n$\\answer{189\\hspace{0.25em}\\text{km}}$\n- If we solve the inequality $u_n < 667.1$ for the largest value of\n$n$, we obtain\n\n  $$\n  \\begin{aligned}\n  u_1 + (n-1)d &< 667.1 \\\\[6pt]\n  124.7 + (n-1)(16.1) &< 667.1 \\\\[6pt]\n  n &< 34.7 \\hspace{3em} [\\text{by using G.D.C.}] \\hspace{1em} \\\\[6pt]\n  n &= 34 \\\\\n  \\end{aligned}\n  $$\n\n  Hence there are\n$\\answer{34}$\nmilestones along the road.\n',
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
    title: 'Question 42',
    content:
      'Elon is challenged to a speed climb at a local mountain. He has to reach\na height of $400$ metres above the ground within four hours.\nElon knows he can climb $150$ metres in the first hour. Due to\nincreasing tiredness, each hour he can only climb $75\\hspace{0.05em}\\%$\nof the height climbed in the previous hour.\n\n- Verify that Elon reaches his target height of $400$ metres in four\nhours.<span class="marks">[2]</span>\n\n\nThe mountain has a height of $650$ metres. Elon decides to attempt to\nclimb to the summit.\n\n- Determine whether he can reach the summit of the mountain\nif he continues climbing, given his increasing tiredness. Justify\nyour answer.<span class="marks">[2]</span>\n\n\nOn a different day, Elon climbs with energy snacks, which help to reduce\nhis tiredness as he climbs. On this day, Elon again climbs 150 metres in\nthe first hour, but then $k\\hspace{0.05em}\\%$ of the height he climbed\nin the previous hour, where $k > 75$.\n\n- Calculate the minimum value of $k$, given that on this day\nElon is able to reach the summit. Give your answer as a percentage,\nto the nearest whole number.<span class="marks">[3]</span>  \n',
    markScheme:
      "\n- We have a geometric sequence with first term $u_1 = 150$ and common\nratio $r = 0.75$. Hence, using the formula for the sum of the first\n$n$ terms, we get\n\n  $$\n  \\begin{aligned}\n  S_{n} &= \\dfrac{u_1(1-r^n)}{1-r} \\\\[12pt]\n  S_{4} &= \\dfrac{150(1-0.75^{4})}{1-0.75} \\\\[12pt]\n  &\\hspace{-1em}\\answer{S_{4} \\approx 410 \\hspace{0.25em}\\text{m} > 400 \\hspace{0.25em}\\text{m}}\\end{aligned}\n  $$\n\n- Using the formula for the sum to infinity of a geometric\nsequence, we find\n\n  $$\n  \\begin{aligned}\n  S_\\infty &= \\dfrac{150}{1 - 0.75}  \\hspace{0.1em} \\\\[12pt]\n  &= 600 \\hspace{0.25em}\\text{m} \\\\\n  \\end{aligned}\n  $$\n\n  $\\answer{\\text{Elon can't reach the summit since \\(600 \\hspace{0.25em}\\text{m} < 650 \\hspace{0.25em}\\text{m}\\).}\\hspace{-0.15em}}$\n- Using the formula for the sum to infinity of a geometric\nsequence, we find\n\n  $$\n  \\begin{aligned}\n  S_\\infty &= \\dfrac{150}{1 - r}  \\hspace{0.1em} \\\\[12pt]\n  \\dfrac{150}{1 - r} &\\geq 650 \\hspace{0.1em} \\\\[12pt]\n  r &\\geq 0.76923... \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  $\\answer{\\text{The minimum value of k is 77\\%.}}$\n",
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
    title: 'Question 43',
    content:
      'Let $u_n = 5n-1$, for $n \\in \\mathbb{Z}^+$.\n\n- \n  - Using sigma notation, write down an expression for\n$u_1 + u_2 + u_3 + \\dots + u_{10}$.\n  - Find the value of the sum from part (a) (i). <span class="marks">[4]</span>\n\n\n\nA geometric sequence is defined by $v_n = 5\\times 2^{n-1}$, for\n$n \\in \\mathbb{Z}^+$.\n\n- Find the value of the sum of the geometric series\n$\\displaystyle\\sum_{k = 1}^6\\hspace{0.1em}v_k$.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- \n  - Using sigma notation, we have\n\n    $$\n    \\begin{aligned}\n    u_1 + u_2 + u_3 + \\dots + u_{10} &= \\sum_{k=1}^{10} u_k \\\\[6pt]\n    &\\answer{= \\displaystyle\\sum_{k=1}^{10} (5k-1)} \\hspace{8em}\\end{aligned}\n    $$\n\n  - If we rewrite $u_n = 5n-1$ in the form $u_n = u_1 + (n-1)d$, we\nhave\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.5em} u_n &= 4 + (n-1)(5)\\end{aligned}\n    $$\n\n    Hence $u_n$ is\nan arithmetic sequence with the first term $u_1 = 4$ and\nthe common difference $d = 5$.\n    Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with\n$n=10$\n    we find\n\n    $$\n    \\begin{aligned}\n    \\sum_{k=1}^{10} (5k-1) &= S_{10} \\\\[3pt]\n    &= \\dfrac{10}{2}(2u_1 + (10-1)d) \\\\[9pt]\n    &= \\dfrac{10}{2}(2(4) + (10-1)(5)) \\\\[14pt]\n    &\\answer{= 265}\\end{aligned}\n    $$\n\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.3em} v_1 &= 5 \\hspace{3em} [\\text{the first term}] \\\\[9pt]\n  r &= 2 \\hspace{3em} [\\text{the common ratio}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{v_1(r^n-1)}{r-1}$ with\n$n=6$, we get\n\n  $$\n  \\begin{aligned}\n  \\sum_{k = 1}^6 5\\times 2^{k-1} &= S_6 \\\\[3pt]\n  &= \\dfrac{v_1(r^6-1)}{r-1} \\hspace{3.3em}  \\\\[9pt]\n  &= \\dfrac{5\\hspace{0.05em}(2^6-1)}{2-1} \\\\[15pt]\n  &\\answer{= 315}\\end{aligned}\n  $$\n\n',
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
      'Consider the sum $\\displaystyle S = \\sum_{k = 4}^l (2k-3)$, where $l$ is\na positive integer greater than $4$.\n\n- Write down the first three terms of the series. <span class="marks">[2]</span>\n\n- Write down the number of terms in the series. <span class="marks">[1]</span>\n\n- Given that $S = 725$, find the value of $l$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{5,\\, 7,\\, 9}$\n- $\\answer{l-3}$\n- From part (a), we have an arithmetic sequence with the first term\n$u_1 = 5$ and the common difference $d = 2$.\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = l-3$, we get\n\n  $$\n  \\begin{aligned}\n  S &= S_{l-3} \\\\[11pt]\n  \\hspace{4.5em}725 &= \\bigg[\\dfrac{l-3}{2}\\bigg](2u_1 + ((l-3)-1)d) \\\\[6pt]\n  725 &= \\bigg[\\dfrac{l-3}{2}\\bigg](2(5) + (l-4)(2)) \\\\[6pt]\n  725 &= \\bigg[\\dfrac{l-3}{2}\\bigg](2 + 2l) \\\\[12pt]\n  725 &= (l-3)(l+1) \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{4.65em} \\answer{l = 28} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 45',
    content:
      'The sides of a square are $8$ cm long. A new\nsquare is formed by joining the midpoints of the adjacent sides and two\nof the resulting triangles are shaded as shown.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b65cc13d-6094-4f09-a007-4b82939870fa/images/0b783733-c1b2-4977-aff0-2e651f5e1418/727d93a86010415452fdb83a6ee2e0781e163bf4.svg)\n\n\nThis process is repeated\n$5$ more times to form the diagram below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b65cc13d-6094-4f09-a007-4b82939870fa/images/c0e5d7aa-9378-450e-ba2b-10cd888fb409/90943a34ec184ff8999f55ac9b28e149e8510dc3.svg)\n\n\n\n- Find the total area of the shaded region in the right hand diagram\nabove. <span class="marks">[3]</span>\n\n- Find the total area of the shaded region if the process is repeated\nindefinitely.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The side length of the first pair of shaded triangles is\n\n  $$\n  \\begin{aligned}\n  \\text{side length} &= \\dfrac{8}{2} \\\\[6pt]\n  &= 4\\hspace{0.25em}\\text{cm} \\hspace{2.9em}\\end{aligned}\n  $$\n\n  Hence\ntheir total area is\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.9em} \\text{area} &= 2\\left[\\dfrac{1}{2}(4)(4)\\right] \\\\[6pt]\n  &= 16\\hspace{0.25em}\\text{cm}^2\\end{aligned}\n  $$\n\n  Similarly, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/b65cc13d-6094-4f09-a007-4b82939870fa/images/b4a9a0fe-54f2-48b7-a218-dd98bafc51a1/e6f45d593aa89a3c2cdb821ce1c78f8d901f645f.svg)\n\n\n  Hence the area of successive pairs of shaded triangles form a\ngeometric $\\text{sequence}$ with the first term $u_1 = 16$\nand the common ratio $r = 1/2$.\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{u_1(1-r^n)}{1-r}$ with $n = 6$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} S_6 &= \\dfrac{u_1(1-r^6)}{1-r} \\\\[6pt]\n  &= \\dfrac{16\\hspace{0.05em}(1-(1/2)^6)}{1-1/2} \\\\[12pt]\n  &\\answer{\\approx 31.5 \\text{ cm}^2}\\end{aligned}\n  $$\n\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$, we find\n\n  $$\n  \\begin{aligned}\n  S_{\\infty} &= \\dfrac{16}{1-1/2} \\hspace{0.5em} \\\\[12pt]\n  &\\answer{= 32 \\text{ cm}^2}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 46',
    content:
      'The half-life, $T$, in years, of a radioactive isotope can be modelled\nby the function\n\n$$\n\\begin{aligned}\nT(k) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{k}{100}\\right)}, \\hspace{0.5em} 0 < k < 100,\\end{aligned}\n$$\n\nwhere $k$ is the decay rate, in percent, per year of the isotope.\n\n- The decay rate of Hydrogen-$3$ is $5.5$ %\nper year. Find its half-life.<span class="marks">[2]</span>\n\n\nThe half-life of Uranium-$232$ (U-$232$) is $68.9$ years. A sample\ncontaining $250$ grams of U-$232$ is obtained and stored as a side\nproduct of a nuclear fuel cycle.\n\n- Find the decay rate per year of U-$232$. <span class="marks">[2]</span>\n\n- Find the amount of U-$232$ left in the sample after:\n  \n  - $68.9$ years;\n  - $100$ years. <span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- Evaluating $T(k)$ for $k = 5.5$, we get\n\n  $$\n  \\begin{aligned}\n  T(5.5) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{5.5}{100}\\right)} \\\\[6pt]\n  &\\answer{\\approx 12.3 \\text{ years}}\\end{aligned}\n  $$\n\n- Solving the equation $T(k) = 68.9$ for $k$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{r}{100}\\right)} &= 68.9 \\hspace{6.05em} \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.3em} \\answer{k = 1.00\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- \n  - $\\answer{125 \\text{ grams}}$\n  - We have a geometric sequence with the first term $u_1 = 250$ and\nthe $\\text{common}$ ratio $r = (1 - 1.00/100) = 0.99$.\n    Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with\n$n=101$, we find\n\n    $$\n    \\begin{aligned}\n    u_{101} &= u_1r^{101-1} \\\\[6pt]\n    &= 250\\hspace{0.05em}(0.99)^{101-1} \\hspace{0.2em} \\\\[7pt]\n    &\\answer{\\approx 91.5 \\text{ grams}}\\end{aligned}\n    $$\n\n\n',
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
    title: 'Question 47',
    content:
      'The half-life, $T$, in days, of a radioactive isotope can be modelled by\nthe function\n\n$$\n\\begin{aligned}\nT(k) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{k}{100}\\right)}, \\hspace{0.5em} 0 < k < 100,\\end{aligned}\n$$\n\nwhere $k$ is the decay rate, in percent, per day of the isotope.\n\n- The decay rate of Gold-$196$ is $6.2$ % per\nday. Find its half-life.<span class="marks">[2]</span>\n\n\nThe half-life of Phosphorus-$32$ (P-$32$) is $14.3$ days. A sample\ncontaining $120$ grams of P-$32$ is produced and stored in a\nbiochemistry laboratory.\n\n- Find the decay rate per day of P-$32$. <span class="marks">[2]</span>\n\n- Find the amount of P-$32$ left in the sample after:\n  \n  - $14.3$ days;\n  - $50$ days. <span class="marks">[3]</span>\n\n\n',
    markScheme:
      '\n- Evaluating $T(k)$ for $k = 6.2$, we get\n\n  $$\n  \\begin{aligned}\n  T(6.2) &= \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{6.2}{100}\\right)} \\\\[6pt]\n  &\\answer{\\approx 10.8 \\text{ days}}\\end{aligned}\n  $$\n\n- Solving the equation $T(k) = 14.3$ for $k$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\dfrac{\\ln 0.5}{\\ln\\left(1 - \\frac{r}{100}\\right)} &= 14.3 \\hspace{6.05em} \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.25em} \\answer{k = 4.73\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- \n  - $\\answer{60 \\text{ grams}}$\n  - We have a geometric sequence with the first term $u_1 = 120$ and\nthe $\\text{common}$ ratio $r = (1 - 4.73/100) = 0.9527$.\n    Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with\n$n=51$, we find\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.8em} u_{51} &= u_1r^{51-1} \\\\[6pt]\n    &= 120\\hspace{0.05em}(0.9527)^{51-1} \\\\[7pt]\n    &\\answer{\\approx 10.6 \\text{ grams}}\\end{aligned}\n    $$\n\n\n',
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
    title: 'Question 48',
    content:
      'Consider the sequence $u_1,\\, u_2,\\, u_3,\\, \\dots,\\, u_n,\\, \\dots$ where\n\n$$\n\\begin{aligned}\nu_1 = 860,\\hspace{0.3em} u_2 = 980,\\hspace{0.3em} u_3 = 1100,\\hspace{0.3em} u_4 = 1220.\\end{aligned}\n$$\n\nThe sequence continues in the same manner.\n\n- Find the value of $u_{50}$. <span class="marks">[3]</span>\n\n- Find the sum of the first $10$ terms of the sequence. <span class="marks">[3]</span>\n\n\nNow consider the sequence $v_1,\\, v_2,\\, v_3,\\, \\dots,\\, v_n,\\, \\dots$\nwhere\n\n$$\n\\begin{aligned}\nv_1 = 2,\\hspace{0.3em} v_2 = 4,\\hspace{0.3em} v_3 = 8,\\hspace{0.3em} v_4 = 16.\\end{aligned}\n$$\n\nThis sequence continues in the same manner.\n\n- Find the exact value of $v_{13}$. <span class="marks">[3]</span>\n\n- Find the sum of the first $10$ terms of this sequence.\n<span class="marks">[3]</span>\n\n\n$k$ is the smallest value of $n$ for which $v_n$ is greater than $u_n$.\n\n- Calculate the value of $k$. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- The sequence $(u_n)$ is arithmetic with the common difference\n$d = 120$.\n  Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 50$, we\nget\n\n  $$\n  \\begin{aligned}\n  u_{50} &= u_1 + (50-1)d \\\\[6pt]\n  &= 860 + (50-1)(120) \\\\[6pt]\n  &\\answer{= 6740}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 10$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.8em} S_{10} &= \\dfrac{10}{2}(2u_1 + (10-1)d) \\\\[6pt]\n  &= \\dfrac{10}{2}(2(860) + (10-1)(120)) \\\\[11pt]\n  &\\answer{= 14\\hspace{0.15em}000}\\end{aligned}\n  $$\n\n- The sequence $(v_n)$ is geometric with the common ratio $r = 2$.\nUsing the $n$th term formula $v_n = v_1r^{n-1}$ with $n = 13$, we\nget\n\n  $$\n  \\begin{aligned}\n  v_{13} &= v_1r^{13-1} \\\\[6pt]\n  &= 2(2)^{13-1} \\\\[7pt]\n  &\\answer{= 8192} \\hspace{2.8em}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{v_1(r^n-1)}{r-1}$\nwith $n = 10$, we obtain\n\n  $$\n  \\begin{aligned}\n  S_{10} &= \\dfrac{v_1(r^{10}-1)}{r-1} \\\\[6pt]\n  &= \\dfrac{2(2^{10}-1)}{2-1} \\\\[12pt]\n  &\\answer{= 2046}\\end{aligned}\n  $$\n\n- Solving the inequality $v_n > u_n$ for the smallest value of $n$, we\nfind\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.4em} v_1r^{n-1} &> u_1 + (n-1)d \\\\[8pt]\n  2(2)^{n-1} &> 860 + (n-1)(120) \\\\[8pt]\n  2^n &> 120n + 740 \\\\[8pt]\n  n &> 11.009 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{1.2em} \\answer{k=12} \\hspace{7.8em}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 49',
    content:
      'On Wednesday Eddy goes to a velodrome to train. He cycles the first lap\nof the track in $25$ seconds. Each lap Eddy cycles takes him $1.6$\nseconds longer than the previous lap.\n\n- Find the time, in seconds, Eddy takes to cycle his tenth lap.\n<span class="marks">[3]</span>\n\n\nEddy cycles his last lap in $55.4$ seconds.\n\n- Find how many laps he has cycled on Wednesday. <span class="marks">[3]</span>\n\n- Find the total time, in minutes, cycled by Eddy on\nWednesday. <span class="marks">[4]</span>\n\n\nOn Friday Eddy brings his friend Mario to train. They both cycled the\nfirst lap of the track in $25$ seconds. Each lap Mario cycles takes him\n$1.05$ times as long as his previous lap.\n\n- Find the time, in seconds, Mario takes to cycle his fifth\nlap. <span class="marks">[3]</span>\n\n- Find the total time, in minutes, Mario takes to\ncycle his first ten laps. <span class="marks">[3]</span>\n\n\nEach lap Eddy cycles again takes him $1.6$ seconds longer that his\nprevious lap.\nAfter a certain number of laps Eddy takes less time per lap than Mario.\n\n- Find the number of the lap when this happens. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have an arithmetic sequence with the first term $u_1 = 25$ and\nthe common difference $d = 1.6$.\n  Hence, using the $n$th term formula $u_n = u_1 + (n-1)d$ with\n$n = 10$, we get\n\n  $$\n  \\begin{aligned}\n  u_{10} &= u_1 + (10-1)d \\\\[6pt]\n  &= 25 + (10-1)(1.6) \\\\[6pt]\n  &\\answer{= 39.4 \\text{ seconds}}\\end{aligned}\n  $$\n\n- Solving the equation $u_n = 55.4$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  u_1 + (n-1)d &= 55.4 \\hspace{10.1em} \\\\[6pt]\n  25 + (n-1)(1.6) &= 55.4 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{8.6em} \\answer{n = 20 \\text{ laps}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 20$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.1em} S_{20} &= \\dfrac{20}{2}(2u_1 + (20-1)d) \\\\[6pt]\n  &= \\dfrac{20}{2}(2(25) + (20-1)(1.6)) \\\\[10pt]\n  &= 804 \\\\[14pt]\n  &\\answer{= 13.4 \\text{ minutes}}\\end{aligned}\n  $$\n\n- We have a geometric sequence with the first term $v_1 = 25$ and the\ncommon ratio $r = 1.05$.\n  Hence, using the $n$th term formula $v_n = v_1r^{n-1}$ with $n = 5$,\nwe obtain\n\n  $$\n  \\begin{aligned}\n  v_5 &= v_1r^{5-1} \\\\[6pt]\n  &= 25(1.05)^{5-1} \\\\[7pt]\n  &\\answer{\\approx 30.4 \\text{ seconds}}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{v_1(r^n-1)}{r-1}$\nwith $n = 10$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.6em} S_{10} &= \\dfrac{v_1(r^{10}-1)}{r-1} \\\\[6pt]\n  &= \\dfrac{25((1.05)^{10}-1)}{1.05-1} \\hspace{0.7em} \\\\[12pt]\n  &\\approx 314.45 \\\\[15pt]\n  &\\answer{\\approx 5.24 \\text{ minutes}}\\end{aligned}\n  $$\n\n- Solving the inequality $u_n < v_n$ for the smallest value of $n$, we\nget\n\n  $$\n  \\begin{aligned}\n  u_1 + (n-1)d &< v_1r^{n-1} \\\\[8pt]\n  25 + (n-1)(1.6) &< 25(1.05)^{n-1} \\\\[9pt]\n  11.7 &< n \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{n = 12 \\text{th lap}} \\hspace{0.7em}\n  $$\n\n',
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
    type: 'ERQ',
    title: 'Question 50',
    content:
      'Sarah has started a 12 week training program to improve her cycling. She plans to cycle $100$ kilometres in the first week and, in each subsequent week, cycle $15$ kilometres further than she did the week before.\n\n- Calculate the distance she will cycle during the eighth week. <span class="marks">[3]</span>\n\n- Calculate the total distance she will have cycled by the end of the training program. <span class="marks">[2]</span>\n\n\nSarah\'s coach tells her she should have cycled $2\\hspace{0.1em}500$ kilometres by the end of the training program, so Sarah decides to increase her cycling distances. She still plans to cycle $100$ kilometres in the first week, but in each subsequent week, she will cycle $k$ kilometres more than she did the week before.\n\n- Calculate the minimum integer value of $k$ required for Sarah to reach the target of $2\\hspace{0.1em}500$ kilometres in 12 weeks.<span class="marks">[3]</span>  \n\nAs part of her training, each week Sarah performs a one kilometre time trial, in which she aims to cycle one kilometre as fast as she can. Sarah\'s time decreases by $2\\%$ each week. In the first week, her time is exactly $110$ seconds.\n\n- Calculate Sarah\'s time in the 12th week. <span class="marks">[3]</span>  \n\nSarah\'s goal is to cycle one kilometre in less than $85$ seconds by the end of the training program. To do this, she needs to decrease her time by at least $m\\%$ per week from her time of $110$ seconds in week one.\n\n- Find the minimum value of $m$ so that Sarah reaches her goal. <span class="marks">[4]</span>  \n',
    markScheme:
      "\n- We have an arithmetic sequence with first term $u_1 = 100$ and $d = 15$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  Using the formula for the eighth term of an arithmetic sequence we have\n\n  $$\n  \\begin{align*}\n  u_8 &= u_1 + 7d \\\\[6pt]\n  &= 100 + 7 \\times 15 \\tag*{\\textbf{(M1)}} \\\\[6pt]\n  u_8 &= 205\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Sarah cycles $205$ kilometres during the eighth week.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- Using the formula for the sum of 12 terms, we have\n\n  $$\n  \\begin{align*}\n  s_{12} &= \\dfrac{12}{2}\\left(2 \\times 100 + (12-1) \\times 15\\right) \\tag*{\\textbf{(M1)}} \\\\[6pt]\n  &= 2\\hspace{0.1em}190\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Sarah cycles }2\\hspace{0.1em}190\\text{ kilometres in total during the training program.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- Using the formula for the sum of 12 terms, with $k$ instead of $15$ for the common difference, we form the equation\n\n  $$\n  \\begin{align*}\n  6\\left(200 + 11k\\right) &= 2\\hspace{0.1em}500 \\tag*{\\textbf{(M1)}} \\\\[6pt]\n  k &\\approx 19.70 \\hspace{3em} \\text{[using G.D.C.]} \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{The minimum integer value of $k$ is $20$.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- We have a geometric sequence with $u_1=110$ and $r=0.98$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  Using the formula for the twelfth term of a geometric sequence, we have\n\n  $$\n  \\begin{align*}\n  u_{12} &= u_1 \\times r^{11} \\\\[8pt]\n  &= 110 \\times 0.98^{11} \\tag*{\\textbf{(M1)}} \\\\[8pt]\n  u_{12} &\\approx 88.08\n  \\end{align*}\n  $$\n\n  $\\answer{\\text{Sarah's time in week 12 is approximately $88.1$ seconds.}}$\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n- Let $r$ be the common ratio of the geometric sequence with first term $u_1=110$ and twelfth term $u_{12}<85$. Thus, using the formula for the twelfth term, we form the inequality\n\n  $$\n  \\begin{align*}\n  110 \\times r^{11} &< 85\n  \\end{align*}\n  $$\n\n  Using the numerical solver on the G.D.C. we can solve the equation $110 \\times r^{11} = 85$, finding that $r \\approx 0.9768$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(M1)}}\n  \\end{aligned}\n  $$\n\n  Hence to satisfy the inequality $110 \\times r^{11} < 85$, we must have $r<0.9768$.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(A1)}}\n  \\end{aligned}\n  $$\n\n  The value $m$ we require will be equal to $(1-r) \\times 100$. We have\n\n  $$\n  \\begin{align*}\n  (1-0.9768) \\times 100 &= 2.32 \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Sarah must decrease her time by at least $2.32\\%$ per week in order to cycle the one kilometre time trial in less than 85 seconds by the end of the training program.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{A1}}\n  \\end{aligned}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 51',
    content:
      'Jenni is conducting an experiment with a spring and has attached a mass so that it will oscillate up and down.\nShe is measuring the $y$-coordinate of the centre of the mass.\nAt the start of the experiment the mass is at rest with its centre being at the point $(0, 0)$.\nShe gives the mass a nudge upwards in the positive $y$-direction. She makes her first measurement of $(0, 37.5)$ when the centre of the mass is at the first maximum point ($n=1$). The units of the $y$-coordinate are in millimetres.\nThe mass then moves downwards passing the $x$-axis and reaching its first minimum point ($n=2$). Jenni makes her second measurement of the $y$-coordinate of the centre of a the mass as $(0, a)$.\nThe mass then moves up past the $x$-axis to the next maximum point ($n=3$) and Jenni makes her third measurement of $(0, 24)$.\nThe diagram below shows how the mass moves up and down until Jenni makes her $3$rd measurement.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/5c432714-26e0-44d2-ad4c-8fbd32ef03e2/images/e1e394ce-c8ff-476f-b471-b3fad49316a7/springs.png)\n\n\nJenni notices that the $y$-coordinates of the three measurements $37.5,\\; a,\\; 24$ form a geometric sequence.\n\n- Find $a$. <span class="marks">[2]</span>  \n\nThe spring continues to oscillate up and down with Jenni measuring the $y$-coordinate in the same way as described.\nThe results continue to form a geometric sequence.\n\n- Find the $6$th term in the sequence. Give your answer to 3 decimal places. <span class="marks">[2]</span>\n\n- Show that the total distance travelled in the $y$-direction by the mass when the $6$th measurement is made is  $264.408$ mm. <span class="marks">[3]</span>\n\n',
    markScheme:
      "\n- Let the common ratio of the sequence be $r$.\n  As the sequence is geometric we can use the general formula for the third term...\n\n  $$\n  \\begin{align*}\n      u_3&=u_1r^2\\\\\n      24&=37.5r^2\\\\\n      r^2&=0.64\\\\\n      r=&=\\pm 0.8\n  \\end{align*}\n  $$\n\n  The value of $a$ is negative as the mass moves below the $x$-axis.\n  Therefore $a=37.5\\times(-0.8)$.\n  $\\answer{a=-30}$\n- We can use the general formula with $n=6$.\n\n  $$\n  \\begin{align*}\n      u_6&=37.5\\times(-0.8)^{6-1}\\\\\n      &=-12.288\n  \\end{align*}\n  $$\n\n  The $6$th term is $\\answer{u_6=-12.288}$\n- Let's first review the total distance travelled when the $3$rd measurement is taken, as shown in the diagram...\n\n  $$\n  \\begin{align*}\n      S_3 &= 2\\times u_1 + 2\\times u_2 + u_3\\\\\n      &=2(u_1 + u_2) + u_3\\\\\n      &=2S_2 + u_3\n  \\end{align*}\n  $$\n\n  This means all distances before the third term must be $\\times2$ as the mass must both extend to that distance and return to the $x$-axis.\n  But when the measurement is taken it only extends that distance therefore we don't double the distance for that measurement.\n  Using that information we can work out the total distance travelled when the $6$th measurement is taken...\n\n  $$\n  \\begin{align*}\n      S_6 &= 2\\times u_1 + 2\\times u_2 + .... 2\\times u_5 + u_6\\\\\n      &= 2(u_1 + u_2 + .... +u_5) + u_6\\\\\n      &= 2(S_5) + u_6\n  \\end{align*}\n  $$\n\n  We can find the value of $S_5$ using the formula for the sum of $n$ terms of a geometric sequence.\n  However, realise that we must use the positive values of the $y$-coordinate as we are finding the total distance travelled. Therefore we must use $r=0.8$.\n\n  $$\n  \\begin{align*}\n      &= 2\\left(\\frac{37.5(1-(0.8)^5)}{1-(0.8)}\\right) + 37.5\\times(0.8)^{5}\\\\\n      &=  264.408\n  \\end{align*}\n  $$\n\n  The total distance travelled when the $6$th measurement is taken is $\\answer{264.408}$ as required.\n",
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
    title: 'Question 52',
    content:
      'A bouncy ball is dropped out of a second story classroom window,\n$5$ m off the ground. Every time the ball hits\nthe ground it bounces $89$ % of its previous\nheight.\n\n- Find the height the ball reaches after the $11$th bounce.\n<span class="marks">[3]</span>\n\n- Find the total distance travelled by the ball until it comes to\nrest. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a0cfdc62-08c9-4a1b-9e66-0aaf65ecf30d/images/2dd17bda-67fe-40d1-bf3e-605278a03adc/8f1fbf3b941881b0c3497fa818d77dc32a216ccc.svg)\n\n\n  Hence the height of successive bounces of the ball form a geometric\nsequence with the first term $u_1 = 5(0.89)$ and the common ratio\n$r = 0.89$.\n  Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with\n$n = 11$, we get\n\n  $$\n  \\begin{aligned}\n  u_{11} &= u_1r^{11-1} \\\\[6pt]\n  &= [5(0.89)](0.89)^{11-1} \\\\[7pt]\n  &\\answer{\\approx 1.39\\text{ m}}\\end{aligned}\n  $$\n\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.8em} [\\text{total distance travelled}] &= 5 + 10(0.89) +  10(0.89)^2 + 10(0.89)^3 + \\cdots \\\\[11pt]\n  &= 5 + 2[5(0.89) +  5(0.89)^2 + 5(0.89)^3 + \\cdots] \\\\[12pt]\n  &= 5 + 2S_{\\infty} \\hspace{3em} [u_1 = 5(0.89) \\text{ \\& } r = 0.89] \\\\[6pt]\n  &= 5 + 2\\bigg[\\dfrac{5(0.89)}{1 - 0.89}\\bigg] \\\\[6pt]\n  &\\answer{\\approx 85.9 \\text{ m}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 53',
    content:
      'A bouncy ball is dropped from a height of $2$ metres onto a concrete\nfloor. After hitting the floor, the ball rebounds back up to\n$80$ % of it\'s previous height, and this pattern\ncontinues on repeatedly, until coming to rest.\n\n- Show that the total distance travelled by the ball until coming to\nrest can be expressed by\n  $2 + 4(0.8) + 4(0.8)^2 + 4(0.8)^3 + \\cdots$<span class="marks">[2]</span>\n\n- Find an expression for the total distance travelled by the ball, in\nterms of the number of bounces, $n$. <span class="marks">[2]</span>\n\n- Find the total distance travelled by the ball. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/afeeb6e2-6980-4c78-946c-47a5ff25ff32/images/fb5415df-1c47-4d2f-8114-4ea15b45ac58/866fc824efe482d8b182d4c5b9e109a2fdbd4aca.svg)\n\n\n  Hence the total distance travelled by the ball until coming to rest\nis\n\n  $$\n  \\begin{aligned}\n  \\answer{2 + 4(0.8) + 4(0.8)^2 + 4(0.8)^3 + \\cdots} \\qref{(1)}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{u_1(1 - r^n)}{1-r}$\nfor a geometric sequence\n  with $u_1 = 4$ and $r = 0.8$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} [\\text{sum of $n$ terms of $(1)$}] &= 2 + 4(0.8) + 4(0.8)^2 + \\cdots + 4(0.8)^{n-1} \\\\[14pt]\n  &= -2 + \\big[4 + 4(0.8) + 4(0.8)^2 + \\cdots + 4(0.8)^{n-1}\\big] \\hspace{1.3em} \\\\[8pt]\n  &= -2 + \\bigg[\\dfrac{4(1 - 0.8^{(n-1)})}{1 - 0.8}\\bigg] \\\\[8pt]\n  &= -2 + 20(1 - 0.8^{(n-1)}) \\\\[8pt]\n  &= -2+20-20(0.8)^n(0.8)\\\\[8pt]\n  &\\answer{= 18 - 16(0.8)^n}\\end{aligned}\n  $$\n\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$ with\n  $u_1 = 4$ and $r = 0.8$, we obtain\n\n  $$\n  \\begin{aligned}\n  &= 2 + 4(0.8) + 4(0.8)^2 + 4(0.8)^3 + \\cdots \\\\[14pt]\n  &= -2 + \\big[4 + 4(0.8) + 4(0.8)^2 + 4(0.8)^3 + \\cdots\\big] \\\\[8pt]\n  &= -2 + \\bigg[\\dfrac{4}{1 - 0.8}\\bigg] \\\\[8pt]\n  &\\answer{= 18 \\text{ metres}}\\end{aligned}\n  $$\n\n',
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
    difficultyLevel: '1.5'
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
    difficultyLevel: '1.5'
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
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 4',
    content:
      'Coral is a wildlife expert who tags  flying fish and records their movement using an electronic device.\nThe tagging device tells her the height of a fish relative to the water level, at any given time.\nShe knows that the fish swim mostly in the water, but occasionally they fly (jump!) out of the water.\nThe height is measured in metres and the time in seconds. If the height is negative the fish is under the water, if the height is positive the fish is flying.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/99db50ab-81ea-421b-8f20-21b4669fedcd/images/70f02a92-7870-456a-abea-c262c3ce2d2b/seagull.png)\n\n\nCoral notices one particular fish as it flies out of the water. The moment it re-enters the water the device begins tracking its height.\nAt $2$ seconds the fish is at a height of $-2.8\\,$m; at $5$ seconds the fish is at a height of $-2\\,$m and at $11$ seconds the fish is also at a height of $-2\\,$m.\nThe height of the fish can be expressed as $H(t)=at^3+bt^2+ct+d$, where $a$, $b$, $c$ and $d \\in \\mathbb{R}$.\n\n- \n  - Write down the value of $d$.\n  - Using the information given write down three equations involving $a$, $b$ and $c$.\n  - Solve the system of equations to find the values of $a$, $b$ and $c$. <span class="marks">[4]</span>\n\n\n\nFrom previous research, Coral knows that if a fish is flying for more than $1$ second then a seagull will attempt to catch it.\n\n- Use a justification to explain why a seagull will attempt to catch this fish. <span class="marks">[4]</span>  \n\nAt $t=9\\,$s a seagull begins swooping down to catch the fish.\nIts height is given by $b(t)=-1.5t^2+27t-118$.\n\n- \n  - Find the height at which the bird catches the fish.\n  - Interpret the answer in the context of the problem. <span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- \n  - $d=0$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Using the information given we have\n\n    $$\n    \\begin{align*}\n    \\answer{\\begin{array}{rccccccl}\n    8a &+& 4b &+& 2c &=& -2.8 \\\\[3pt]\n    125a &+& 25b &+& 5c &=& -2 \\\\[3pt]\n    1331a &+& 121b &+& 11c &=& -2\n    \\end{array}}\n    \\tag*{\\textbf{M1A1}}\n    \\end{align*}\n    $$\n\n  - Solving on a G.D.C. we have $\\hspace{0.525em}\\tcbhighmath{a=-0.0330, b=0.564 \\text{ and } c=-2.40}\\hspace{0.525em}$.\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- When the fish is out of the water it is said to be flying. Hence we need to identify when $H(t)>0$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  We can sketch $H(t)=-0.0330t^3+0.564t^2-2.40t$ on a G.D.C.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/99db50ab-81ea-421b-8f20-21b4669fedcd/images/954048de-59b6-4d32-b5eb-dc27f1407e86/an1.png)\n\n\n  The difference between the two roots $x_1$ and $x_2$ is the time when $H(t)>0$. This can be seen on the graph above as the length of the red line.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n  Hence, the total time out of the water is given by\n\n  $$\n  \\begin{align*}\n      &=x_2-x_1\\\\[6pt]\n      &=9.0909...-8 \\hspace{3em}\\text{[using G.D.C.]} \\\\[6pt]\n      &=1.09\\text{ seconds} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  As $\\hspace{0.525em}\\answer{1.09 > 1}\\hspace{0.525em}$ we can say that a seagull will attempt to catch the fish.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{R1}}\n  \\end{align*}\n  $$\n\n- The bird catches the fish when the $b(t)=H(t)$ and $t>9$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Using a G.D.C. we can show to motion of the bird, in blue, using the model $b(t)$\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/99db50ab-81ea-421b-8f20-21b4669fedcd/images/b3837cf2-870c-4368-bdc5-34bdc0a05ee2/an2.png)\n\n\n  The point $C$, $t>9$, is when the bird catches the fish.\n  The coordinates of point $C$ are $(10.893..., -1.8735...)$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  Hence the bird catches the fish at a height of $\\hspace{0.525em}\\tcbhighmath{-1.87\\,\\text{m}}$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The height is negative, this means the bird catches the fish\n  $\\answer{1.87\\,\\text{m below the surface of the water}}$\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{R1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 5',
    content:
      'Consider the quadratic function $f(x) = ax^2+bx+c$. The graph of\n$y=f(x)$ is shown in the diagram below. The vertex of the graph has\ncoordinates $\\text{R}(m,-9)$.\nThe graph intersects the $x$-axis at two points; $\\text{P}(-4,0)$ and\n$\\text{Q}(2,0)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b09e52c7-02f5-45a2-96f9-ab7aa4138a3b/images/a78c2481-ec6d-41fe-99c5-6ab402d1c48c/b188999a18650c4961f7def85ea1bfd8a1276fc9.svg)\n\n\n\n- Find the value of $m$. <span class="marks">[1]</span>\n\n- Find the values of $a$, $b$, and $c$.<span class="marks">[5]</span>\n\n- Write down the equation of the axis of symmetry of the graph.\n<span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- The point $(m,0)$ is halfway between P and Q (symmetrical nature of\nquadratic graphs). Since the total length from P to Q is 6 units,\nthe length from P to $(m,0)$ is 3 units. Therefore,\n\n  $$\n  \\begin{aligned}\n  &\\answer{m=-1}\\end{aligned}\n  $$\n\n- Using $y=ax^2+bx+c$ and the 3 coordinates we know the graph passes\nthrough, we can set up three equations, as follows\n\n  $$\n  \\begin{aligned}\n  0 &= a(-4)^2+b(-4)+c \\qquad \\qquad \\quad \\text{Using P$(-4,0)$}\\nonumber \\\\[6pt]\n  0&=16a-4b+c \\tag*{\\textbf{(1)}}\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  0 &= a(2)^2+b(2)+c \\qquad \\qquad \\qquad \\,\\, \\,\\text{Using Q$(2,0)$}\\nonumber \\\\[6pt]\n  0&=4a+2b+c \\tag*{\\textbf{(2)}}\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\begin{aligned}\n  -9 &= a(-1)^2+b(-1)+c \\qquad \\qquad \\quad \\text{Using R$(-1,-9)$}\\nonumber \\\\[6pt]\n  -9&=a-b+c \\tag*{\\textbf{(3)}}\n  \\end{aligned}\n  $$\n\n  We can now use a GDC to solve equations\n$(1)$, $(2)$, and $(3)$. We get\n\n  $$\n  \\answer{a=1, \\, \\, \\, b=2,\\,\\,\\text{and}\\,\\, c=-8}\n  $$\n\n- The axis of symmetry of the graph is the line that splits the\nquadratic graph in half, passing through the turning point. Hence,\nthe equation of this line is\n\n  $$\n  \\answer{x=-1}\n  $$\n\n',
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
    title: 'Question 6',
    content:
      'The graph below shows the amount of money $M$ (in thousands of dollars), in the account of a contractor,  where $t$ is the time in months since he opened the account.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/be163de5-68b0-49ca-94db-b870708b6869/AI1015a.PNG)\n\n\n\n- Write down one characteristic of the graph which suggests that a cubic function might be an appropriate model for the amount of money in the account. <span class="marks">[1]</span>  \n\nThe equation of the model can be expressed as $M(t)=at^3+bt^2+ct+d$, where $a$, $b$, $c$ and $d \\in \\mathbb{R}$. It is given that the graph of the model passes through the following points.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/5c93f523-f86a-4794-ac51-31c1c41cc134/AI1015b.PNG)\n\n\n\n- \n  - State the value of $d$.\n  - Using the values in the table, write down three equations in $a$, $b$, and $c$.\n  - By solving the system of equations from part (ii), find the values of $a$, $b$ and $c$. <span class="marks">[4]</span>\n\n\n\nIf $M$ has a negative value, the contractor is in debt.\n\n- Use the model from part (b) to find the number of months the contractor expects to be in debt. Give your answer to the nearest month. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- The graph of $M$ has exactly one maximum point and one minimum point.\n- \n  - From the table, we have $M(0)=1$. Substituting the value $t=0$ into the model we have\n\n    $$\n    \\begin{align*}\n    M(0)&= a(0)^3+b(0)^2+c(0)+d = d\n    \\end{align*}\n    $$\n\n    We have $M(0)=1$ and $M(0)=d$ and therefore $\\answer{d=1}$\n  - Using the values given in the table, and part (i), we have\n\n    $$\n    \\begin{align*}\n    M(1)&= a(1)^3+b(1)^2+c(1)+1 = 2 \\\\[11pt]\n    M(2) &= a(2)^3+b(2)^2+c(2)+1 = -3 \\\\[11pt]\n    M(3) &= a(3)^3+b(3)^2+c(3)+1 = 4  \\\\[-11pt]\n    \\end{align*}\n    $$\n\n    Hence, the linear system for variables $a$, $b$ and $c$ is\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{\\begin{cases}\n    a+b+c = 1 \\\\[6pt]\n    8a+4b+2c = -4 \\\\[6pt]\n    27a+9b+3c = 3\n    \\end{cases}}\n    \\end{align*}\n    $$\n\n  - Using G.D.C. to solve the linear system found in part (ii), we get\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{a=3,\\, b=-12, \\text{ and } c=10}\n    \\end{align*}\n    $$\n\n\n- Using the G.D.C. to graph the polynomial $M(t)=3t^3-12t^2+10t+1$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/4b085cb1-6cef-4368-855b-cb6f761ecd30/AI1015c.PNG)\n\n\n  Hence, the time the contractor is in debt equals the time between point A and point B:\n\n  $$\n  \\begin{align*}\n  \\text{Time in debt} &= 2.738 - 1.352 \\\\[11pt]\n  &= 1.386\\\\[-10pt]\n  \\end{align*}\n  $$\n\n  To the nearest month, the contractor expects to be in debt for $\\answer{\\text{one month.}}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '2.5'
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
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 8',
    content:
      'The Burj Khalifa, located in Dubai, is the tallest building in the\nworld. It has a height of $830 \\text{ m}$ and has a square base that\ncovers a floor area of $556 \\text{ m} \\times 556 \\text{ m}$. A tourism\nshop located near the building sells souvenirs of the tower, which sit\ninside glass pyramids, as illustrated by the diagram below. The souvenir\ntower is an accurate scale replica of the actual tower.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/dd6dcb9f-6f6a-4d52-86ef-4383fc6f3f51/images/490aa73b-d0b9-484e-9cf9-6362beb9193f/75dbfe1df45464ae26235a84b47e84fedd3f43ea.svg)\n\n\nThe scaled model of Burj Khalifa has a base area of\n$20 \\text{ cm} \\times 20 \\text{ cm}$. The height and base area\ndimensions of the glass pyramid are 10% larger than the model.\n\n- \n  - Find the height of the souvenir tower, in cm, correct to the\nnearest mm.\n  - Find the volume of the glass pyramid, rounding your answer\ncorrect to the nearest cubic centimetre. <span class="marks">[5]</span>\n\n\n\nThe shop owner aims to maximise profits from selling the souvenirs. The\nmore the owner orders from the manufacturer, the cheaper the souvenirs\nare to buy. However, if too many are ordered, profits may decrease due\nto surplus stock unsold.\nThe number of souvenirs ordered from previous years and the resulting\nprofits are shown in the following table.\nQuantityProfit($)$5000$$35\\,000$$10\\,000$$95\\,500$$13\\,000$$116\\,500$\nThe shop owner decides to fit a cubic model of the form\n\n$$\nP(x) = ax^3+bx^2+cx+d\n$$\n\nto model the profit, $P$, for $x$ thousand\nsouvenirs ordered.\n\n- Explain why $d=0$.<span class="marks">[1]</span>\n\n- Construct three linear equations to solve for $a$, $b$ and $c$, and\nhence write down the completed function $P(x)$. <span class="marks">[5]</span>\n\n- Find $P\'(x)$.<span class="marks">[2]</span>\n\n- Find, to the nearest hundred souvenirs, the optimal number of\nsouvenirs the owner should buy to maximise profit, and the resulting\nprofit from this number. <span class="marks">[4]</span>\n\n',
    markScheme:
      "\n- \n  - The height $(h_m)$ of the model can be calculated by\n\n    $$\n    \\begin{aligned}\n    h_m&= \\text{height of Burj Khalifa} \\times \\text{scale factor}\\\\[6pt]\n    &= 83000 \\times \\dfrac{20}{55600}\\hspace{4.1em} [\\text{all values in cm}] \\\\[6pt]\n    &\\hspace{0.3em}\\answer{\\approx 29.9 \\text{ cm} }\\end{aligned}\n    $$\n\n  - Let $x$ be the side length of the base and $h$ be the height of\nthe glass pyramid. Since the dimensions of glass pyramid are\n$10\\%$ larger than the model, we get\n\n    $$\n    \\begin{aligned}\n    x&= 20+20(0.1)\\hspace{2cm} \\\\[6pt]\n    &= 22 \\text{ cm}\\\\[6pt]\n    h&= 29.9+29.9(0.1)\\\\[6pt]\n    &\\approx 32.9 \\text{ cm}\\end{aligned}\n    $$\n\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/dd6dcb9f-6f6a-4d52-86ef-4383fc6f3f51/images/19611668-b3b5-4172-ace2-b6f0010e0b75/c16aa6b415e3ff65a129bf040b3ec43c108d55ec.svg)\n\n\n  The volume $(V)$ of the glass pyramid can therefore be calculated by\n\n  $$\n  \\begin{aligned}\n  V&= \\dfrac{1}{3}\\times x^2 \\times h \\\\[6pt]\n  &=\\dfrac{1}{3}\\times (22)^2 \\times(32.9)\\\\[6pt]\n  &\\hspace{0.3em}\\answer{\\approx 5308 \\text{ cm}^3 }\\end{aligned}\n  $$\n\n- If zero souvenirs are ordered (i.e. $x=0$), there won't be any\nsouvenirs to sell. Hence, the profit, $P$, will also be zero.\n\n  $$\n  \\answer{P(0)=0, \\,\\text{ hence } \\, d=0 }\n  $$\n\n- Since $x$ is in thousands, we have\n\n  $$\n  \\begin{aligned}\n  P(5)&=5^3a+5^2b+5c=35\\, 000\\qref{(1)}\\\\[6pt]\n  P(10) &= 10^3a+10^2b+10c = 95\\, 500\\qref{(2)}\\\\[6pt]\n  P(13) &= 13^3a+13^2b+13c = 116\\, 500 \\qref{(3)}\\end{aligned}\n  $$\n\n  Using\nG.D.C. to solve the equations $(1)$, $(2)$ and $(3)$, we get\n\n  $$\n  a=-\\dfrac{2295}{26},\\, b=\\dfrac{47685}{26}, \\text{ and } c=\\dfrac{475}{13}\n  $$\n\n  Hence\n\n  $$\n  \\hspace{0.3em}\\answer{P(x) =-\\dfrac{2295}{26}x^3+\\dfrac{47685}{26}x^2+\\dfrac{475}{13}x}\n  $$\n\n- Differentiating $P(x)$ with respect to $x$, we get\n\n  $$\n  \\hspace{0.3em}\\answer{P'(x) =-\\dfrac{6885}{26}x^2+\\dfrac{47685}{13}x+\\dfrac{475}{13}}\n  $$\n\n- If we sketch the graph of $P(x)$, the maximum profit occurs at point\nA.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/dd6dcb9f-6f6a-4d52-86ef-4383fc6f3f51/images/01769894-ccf2-4567-9e25-00dfe1fa2901/5541c9fa3d0d1b43403859281edadfc0d340eef4.svg)\n\n\n  Using G.D.C. to find the coordinates of A, we get\n\n  $$\n  x=13.9, \\text{ and } P(x)\\approx 118\\,000\n  $$\n\n  Hence,\n  The maximum profit will occur when the owner buys\n$\\hspace{0.4em}\\answer{13\\,900}\\hspace{0.4em}$ souvenirs.\nThe resulting profit will be approximately\n$\\hspace{0.35em}\\answer{118\\,000.}$\n",
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
    title: 'Question 9',
    content:
      'A company manufactures cement, lime and mortar for construction projects. This question considers the validity of the company\'s claims regarding the weights of their products.\nLime mortar is a mixture used in construction to reduce moisture in masonry. The mixture contains cement, lime and sand in the ratio $a:b:c$, where $a+b+c=17$.\nCement costs $\\$0.50$ per kilogram, lime costs $\\$2.75$ per kilogram and sand costs $\\$0.06$ per kilogram.\nFrank and Kevin have separately purchased $5a$ kilograms of cement, $5b$ kilograms of lime and $5c$ kilograms of sand each for their respective construction projects, in the correct ratio. They have made their purchases at different shops and therefore they have been charged different prices.\nThe following table shows how much Frank and Kevin were charged per kilogram for each product, and the total amount they had to pay.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/a98d123f-26a9-4287-a7fa-a3cc772e4d50/images/cd897c39-7e85-46b7-aed8-ada41f27dcdc/1169a.JPG)\n\n\n\n- \n  - Determine a matrix equation of the form $\\bm{A}\\textbf{x}=\\textbf{b}$ to represent the information given above.<span class="marks">[2]</span>\n\n  - Hence, find the values of $a,b$ and $c$.<span class="marks">[2]</span>\n\n\n\nThe cement is sold in $10\\,$kg bags. The manufacturer claims that the weights of the bags, $C$, are such that $C\\sim \\mathrm{N}\\left(10.2,0.1^2\\right)$.\n\n- Calculate the probability that a randomly selected bag weighs less than $10\\,$kg. Give your answer to four significant figures.<span class="marks">[2]</span>  \n\nBena needs a total of 200 kilograms and is given two options by the manufacturer.\nOption one: Twenty of the $10\\,$kg bags so that $T_1=C_1+C_2+\\cdots+C_{20}$\nOption two: A single $200\\,$kg “mega-bag” such that $T_2=20C$.\n\n- Determine\n  \n  - The distribution of $T_1$ .<span class="marks">[3]</span>\n\n  - $\\mathrm{P}(T_1>200)$<span class="marks">[1]</span>\n\n\n- Determine\n  \n  - The distribution of $T_2$ .<span class="marks">[3]</span>\n\n  - $\\mathrm{P}(T_2>200)$<span class="marks">[1]</span>\n\n\n- State which option Bena should choose, giving a reason.<span class="marks">[1]</span>\n\n\nBena chooses option one. She suspects that the manufacturer’s claim is incorrect. To test this hypothesis, she weighs all twenty bags. If more than two bags weigh less than $10\\,$kg, she will reject the manufacturer’s claim.\n\n- Calculate the significance level of Bena’s hypothesis test.<span class="marks">[3]</span>  \n\nBena finds that nine of her bags weigh less than $10\\,$kg and lays a complaint with the manufacturer. The manufacturer concedes that they made an error, and while the mean weight of their bags is $10.2\\,$ kg, in their claim they had accidentally written the variance as $0.1^2$, when it was in fact $0.1$.\n\n- Given this new information, find the probability that Bena could have made a type II error in her hypothesis test.<span class="marks">[3]</span>\n\n- If Bena had conducted her original hypothesis test with the correct information from the manufacturer, at the significance level found in part (f), determine the critical region for the test.<span class="marks">[3]</span>\n\n- Hence state whether she would have rejected the manufacturer’s claim. Justify your answer.<span class="marks">[1]</span>\n\n',
    markScheme:
      "\n- \n  - From the information given, we obtain the set of linear equations:\n\n    $$\n    \\begin{aligned}\n    a+b+c &= 17 \\\\[6pt]\n    0.50(5a) + 2.75(5b) + 0.06(5c) &= 27.35 \\tag*{\\textbf{(M1)}}\\\\[6pt]\n    0.60(5a) + 2.90(5b) + 0.08(5c) &= 31.30\n    \\end{aligned}\n    $$\n\n    which translates into the matrix equation:\n    \n    $$\n    \\begin{aligned}\n    \\begin{pmatrix}\n    1 & 1 & 1 & \\\\[2pt]\n    2.5 & 13.75 & 0.3 \\\\[2pt]\n    3 & 14.5 & 0.4 \n    \\end{pmatrix} \\begin{pmatrix}\n    a \\\\b \\\\ c\n    \\end{pmatrix} = \\begin{pmatrix}\n    17 \\\\ 27.35 \\\\ 31.30\n    \\end{pmatrix}\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\begin{aligned}\t\t\t\n    \\tag*{\\textbf{A1}}\t\\end{aligned}\n    $$\n\n  - In general, to solve a matrix equation for $\\textbf{x}$, we can multiply by the inverse of $\\bm{A}$:\n\n    $$\n    \\begin{align*}\n    \\bm{A}\\textbf{x} &= \\textbf{b} \\\\[1pt]\n    \\bm{A^{-1}A}\\textbf{x} &= \\bm{A^{-1}}\\textbf{b} \\\\[1pt]\n    \\textbf{x} &= \\bm{A^{-1}}\\textbf{b}\n    \\end{align*}\n    $$\n\n    Hence we have\n\n    $$\n    \\begin{align*}\n    \\begin{pmatrix}\n    a \\\\ b \\\\ c\n    \\end{pmatrix}=\\begin{pmatrix}\n    1 & 1 & 1 & \\\\[2pt]\n    2.5 & 13.75 & 0.3 \\\\[2pt]\n    3 & 14.5 & 0.4 \n    \\end{pmatrix}^{-1} \\begin{pmatrix}\n    17 \\\\ 27.35 \\\\ 31.30\n    \\end{pmatrix} \\tag*{\\textbf{(M1)}}\n    \\end{align*}\n    $$\n\n    Using the G.D.C., we get\n\n    $$\n    \\begin{align*}\n    \\tcbhighmath{\n    a = 4,\\enskip b=1, \\enskip c=12 \n    } \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- Using the G.D.C., we get\n\n  $$\n  \\begin{align*}\n  \\mathrm{P}(C<10) &= \\text{normCdf} (-\\infty, 10, 10.2, 0.1) \\tag*{\\textbf{(M1)}}\\\\[9pt]\n  &\\hspace{0em}\\tcbhighmath{=  0.02275\\,(4\\,\\mathrm{s.f.})} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- \n  - Given that $C$ is normally distributed, $T_1$ is also normally distributed, because it is a linear combination of normally       distributed random variables.\n\n    $$\n    \\begin{align*}\n    \\tag*{\\textbf{(R1)}}\n    \\end{align*}\n    $$\n\n    Using the properties of the expectation, we get\n\n    $$\n    \\begin{align*}\n    \\mathrm{E}(T_1) &= \\mathrm{E}\\left(C_1+C_2+\\cdots+C_{20}\\right) \\\\[7pt]\n    &= 20(10.2) \\\\[7pt]\n    &= 204 \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n    Similarly, the variance of $T_1$ is given by\n\n    $$\n    \\begin{align*}\n    \\mathrm{Var}(T_1) &= \\mathrm{Var}\\left(C_1+C_2+\\cdots+C_{20}\\right) \\\\[7pt]\n    &= 20(0.1^2) \\\\[7pt]\n    &= 0.2 \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n    Therefore, the distribution of $T_1$ is\n\n    $$\n    \\begin{align*}\n    &\\hspace{-1.02em}\\tcbhighmath{T_1\\sim \\mathrm{N}(204,0.2)}\n    \\end{align*}\n    $$\n\n  - Using the G.D.C., we get\n\n    $$\n    \\begin{align*}\n    \\mathrm{P}(T_1>200) &= \\text{normCdf}\\left(200,\\infty,204,\\sqrt{0.2}\\right) \\\\[7pt]\n    &\\hspace{0em}\\tcbhighmath{= 1} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- \n  - Given that $C$ is normally distributed, $T_2$ is also normally distributed, because it is a linear transformation of a normally distributed random variable.\n\n    $$\n    \\begin{align*}\n    \\tag*{\\textbf{(R1)}}\n    \\end{align*}\n    $$\n\n    Using the properties of the expectation, we get\n\n    $$\n    \\begin{align*}\n    \\mathrm{E}(T_2) &= \\mathrm{E}\\left(20C\\right) \\\\[7pt]\n    &= 20(10.2) \\\\[7pt]\n    &= 204 \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n    And the variance of $T_2$ is given by\n\n    $$\n    \\begin{align*}\n    \\mathrm{Var}(T_2) &= \\mathrm{Var}\\left(20C\\right) \\\\[7pt]\n    &= 20^2(0.1^2) \\\\[7pt]\n    &= 4 \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n    Therefore, the distribution of $T_2$ is\n\n    $$\n    \\begin{align*}\n    &\\hspace{-1.02em}\\tcbhighmath{T_2\\sim \\mathrm{N}(204,2^2)}\n    \\end{align*}\n    $$\n\n  - Using the G.D.C., we get\n\n    $$\n    \\begin{align*}\n    \\mathrm{P}(T_2>200) &= \\text{normCdf}\\left(200,\\infty,204,2\\right) \\\\[7pt]\n    &= 0.9772...\\\\[7pt]\n    &\\hspace{0em}\\tcbhighmath{= 0.977\\,(3\\,\\mathrm{s.f.})} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- By comparing our answers to (c)(ii) and (d)(ii), we find that\n  Bena should choose option 1 since it is more likely she will get the $200\\,\\mathrm{kg}$ she requires. $(1 > 0.977)$\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Let the random variable $X$ represent the number of bags that weigh less than $10\\,$kg.\n  Then, using the answer from part (b), $X\\sim \\mathrm{B}(20,0.02275)$ and the significance level is equal to the probability of being in the critical region.\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{(R1)}} \n  \\end{align*}\n  $$\n\n  The critical region is $X \\geq 3$. We have\n\n  $$\n  \\begin{align*}\n  \\text{significance level} &= \\mathrm{P}(X\\geq 3) \\tag*{\\textbf{(M1)}}\\\\[7pt]\n  &= 0.0100 \\\\[7pt]\n  &\\hspace{-26mm}\\tcbhighmath{\\text{significance level} = 1\\%} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Given this new information, the probability of a bag weighing less than $10\\,$kg is\n\n  $$\n  \\begin{align*}\n  \\mathrm{P}(C<10) &= \\text{normCdf} (-\\infty, 10, 10.2, \\sqrt{0.1}) \\\\[9pt]\n  &=  0.2635... \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  A type II error occurs when a null hypothesis is not rejected when it should have been. In this case, this will occur when there are at most two bags weighing less than $10\\,$kg, given that $\\mathrm{P}(C<10)=  0.2635...$. We have\n\n  $$\n  \\begin{align*}\n  \\mathrm{P}(\\text{Type II error}) &= \\mathrm{P}(X \\leq 2\\,|\\,p = 0.2635...) \\tag*{\\textbf{(M1)}}\\\\[8pt] \n  &= \\text{binomCdf}(20,0.2635...,0,2) \\\\[8pt]\n  &= 0.07155...\\\\[8pt]\n  &\\hspace{0em}\\tcbhighmath{= 0.0716\\,(3\\,\\mathrm{s.f.})} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- As found in part (f), the significance level for Bena's test is $1\\%$. The critical region is therefore given by $X \\geq x$ such that $\\mathrm{P}(X \\geq x)<0.01$.\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  The distribution of $X$ is now $X\\sim B(20,0.2635...)$. Hence,\n\n  $$\n  \\begin{align*}\n  \\mathrm{P}(X\\geq 10) &= 0.0201 \\hspace{3em} \\text{[is $\\bf{not}$ less than 0.01]} \\tag*{\\textbf{(M1)}}\\\\[8pt]\n  \\mathrm{P}(X\\geq 11) &= 0.0061 \\hspace{3em} \\text{[$\\bf{is}$ less than 0.01]}\\\\[-12pt]\n  \\end{align*}\n  $$\n\n  Therefore, the critical region is $\\enskip\\tcbhighmath{X\\geq 11}$\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Bena must compare her findings with the new critical region.\n  No, she wouldn't have rejected the claim because 9 is outside the critical region of $X\\geq 11$\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '25',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'Jessica hits a tennis serve and the path of the ball can be modelled by\nthe function\n\n$$\n\\begin{aligned}\nh(d) = 2+d-\\dfrac{d^2}{5}\\end{aligned}\n$$\n\nwhere $h$ is the height\nabove ground level in meters, and $d$ is the horizontal distance the\ntennis ball travels, also in meters.\n\n- Find the horizontal distance travelled by the ball when it hits the\nground.<span class="marks">[2]</span>\n\n- Find the maximum height the ball reaches.<span class="marks">[2]</span>\n\n\nOn her next serve, Jessica hits the ball harder and flatter, so that the\nball reaches the same height as the previous serve, but travels twice as\nfar.\n\n- Determine a new height function, $h_2$, that describes this\ntrajectory.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- If we sketch the graph of $h(d)$, for $d \\geq 0$ [by using\nG.D.C.], we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5e48f29e-d2ab-494f-8541-86971485cc14/images/1dffd0c1-fe52-4cec-96e8-2a22889cea3f/2b33f5ae4640acb6d33c7265f26c197540d4968e.svg)\n\n\n  Hence the horizontal distance travelled by the ball is:\n$\\answer{6.53\\hspace{0.25em}\\text{m.}}$\n- From part (a) we see the maximum height is:\n$\\answer{3.25\\hspace{0.25em}\\text{m}.}$\n- The trajectory $h_2$ is an horizontal stretch of $h(d)$ by a scale\nfactor of $2$.\n  Therefore, we get\n\n  $$\n  \\begin{aligned}\n  h_2(d) &= 2+\\dfrac{d}{2} - \\dfrac{(d/2)^2}{5} \\\\[10pt]\n  &\\hspace{-2em}\\answer{h_2(d)=2+\\dfrac{d}{2}-\\dfrac{d^2}{20}}\\end{aligned}\n  $$\n\n',
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
      'A government has a piecewise function, $T$, to calculate the amount of\ntaxes a citizen has to pay quarterly, according to their quarterly\nincome, $x$, given by\n\n$$\nT(x)=\\begin{cases}\n0 & x \\leq 5\\hspace{0.1em} 000 \\\\[3pt]\n\\dfrac{(x-5\\hspace{0.1em}000)^2}{50\\hspace{0.1em}000}  & 5\\hspace{0.1em}000 <x \\leq 15\\hspace{0.1em}000 \\\\[6pt]\n\\dfrac{1}{5}x-1\\hspace{0.1em}000 & 15\\hspace{0.1em}000<x\\\\&\n\\end{cases}\n$$\n\n\n- Find the quarterly taxes a citizen has to pay for incomes\nof\n  \n  - $9 000\n  - $16 000<span class="marks">[2]</span>\n\n\n\nThe government is considering increasing the tax rates and is\ncontemplating the following two options:\n\n  Option 1: Increase taxes by &#36;100 on all levels, and then by a factor of 1.15\n\n  Option 2: Increase taxes using the model T(1.4x + 1\\hspace{0.1em}000)\n\n- Determine functions to model the taxes for each of these\noptions.<span class="marks">[4]</span>  \n',
    markScheme:
      "\n- Evaluating each income value in the corresponding component of the\nfunction, we get\n  \n  - $\\begin{aligned}\n        T(9\\hspace{0.1em}000) &= \\dfrac{(9\\hspace{0.1em}000-5\\hspace{0.1em}000)^2}{50\\hspace{0.1em}000} \\qquad [\\text{as }5\\hspace{0.1em}000<9\\hspace{0.1em}000<15\\hspace{0.1em}000]\\\\[9pt]\n        &\\hspace{0.3em}\\answer{=320} \\\\ \n    \\end{aligned}$\n  - $\\begin{aligned}\n        T(16\\hspace{0.1em}000) &= \\dfrac{1}{5}(16\\hspace{0.1em}000)-1\\hspace{0.1em}000 \\hspace{1.45em}[\\text{as }15\\hspace{0.1em}000<16\\hspace{0.1em}000]\\\\[9pt]\n        &\\hspace{0.3em}\\answer{=2\\hspace{0.1em}200}  \\\\\n    \\end{aligned}$\n\n- Let's denote $T_1(x)$ the tax function for option 1 and $T_2(x)$ the\nfunction for option 2.\n  Using the appropriate stretches and translations to the tax function\n$T(x)$, we get\n\n  $$\n  \\answer{\n  T_1(x)=\\begin{cases}\n  115 & x \\leq 5\\hspace{0.1em} 000 \\\\[6pt]\n  1.15\\left[\\dfrac{(x-5\\hspace{0.1em}000)^2}{50\\hspace{0.1em}000}+100\\right]  & 5\\hspace{0.1em}000 <x \\leq 15\\hspace{0.1em}000 \\\\[9pt]\n  1.15\\left[\\dfrac{1}{5}x-900\\right] & 15\\hspace{0.1em}000<x\\\\&\n  \\end{cases}\n  }\n  $$\n\n  and\n\n  $$\n  \\answer{\n  T_2(x)=\\begin{cases}\n  0 & x \\leq 5\\hspace{0.1em} 000 \\\\[6pt]\n  \\dfrac{(1.4x-4\\hspace{0.1em}000)^2}{50\\hspace{0.1em}000}  & 5\\hspace{0.1em}000 <x \\leq 15\\hspace{0.1em}000 \\\\[9pt]\n  \\dfrac{1.4x-4\\hspace{0.1em}000}{5}\\hspace*{1.92cm} & 15\\hspace{0.1em}000<x\\\\&\n  \\end{cases}\n  }\n  $$\n\n",
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
    title: 'Question 3',
    content:
      'A soccer ball is kicked from the ground such that its path can be\nmodelled by the function\n\n$$\n\\begin{aligned}\nh(d) = d-\\dfrac{d^2}{6}\\end{aligned}\n$$\n\nwhere $h$ is the height above\nground level in meters, and $d$ is the horizontal distance the ball\ntravels, also in meters.\n\n- Find the distance travelled by the ball when it hits the\nground.<span class="marks">[2]</span>\n\n- Find the maximum height the ball reaches.<span class="marks">[2]</span>\n\n\nThe soccer player now practices kicking the ball shorter, so that it\ntravels half the vertical height and half the horizontal distance as the\nprevious kick.\n\n- Determine the height function, $h_2$, that describes this\nnew trajectory.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- If we sketch the graph of $h(d)$, for $d \\geq 0$ [by using\nG.D.C.], we get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/83d15e38-1571-4e43-bef1-f0d2b5e95cd9/images/2b6df9f1-7438-4068-a001-809bea436160/dc03a8c401d7ff9b93bbae51a1b1a543d21e61fa.svg)\n\n\n  Hence the distance travelled by the ball is:\n$\\answer{6\\hspace{0.25em}\\text{m.}}$\n- From part (a) we see the maximum height is:\n$\\answer{1.5\\hspace{0.25em}\\text{m}.}$\n- The trajectory $h_2$ is an horizontal stretch of $h(d)$ by a scale\nfactor of $2$ and a vertical stretch of $h(d)$ by a scale factor of\n$\\dfrac{1}{2}$.\n  Hence, we get\n\n  $$\n  \\begin{aligned}\n  h_2(d) &= \\dfrac{1}{2}\\left((2d)-\\dfrac{(2d)^2}{6}\\right) \\\\[10pt]\n  &\\hspace{-2em}\\answer{h_2(d)=d-\\dfrac{d^2}{3}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 4',
    content:
      'Let $f(x) = \\sin x$,  for $x \\in \\mathbb{R}$. The\ngraph of $f$ is translated by\n$\\left(\\hspace{-0.2em}\\begin{matrix} \\hspace{0.2em}p \\\\[2pt] -q \\end{matrix}\\right)$\nto give the graph of a function $g$ that passes through the points\nA$(0,-7)$ and B$(\\pi, -5)$. It is given that $0 < p \\leq 2\\pi$.\nFind the value of $p$ and the value of $q$.',
    markScheme:
      'Since the graph of $f$ has been translated $p$ units in the direction of\nthe positive $x$-axis and $q$ units in the direction of the negative\n$y$-axis, an expression for $g$ is given by\n\n$$\n\\begin{aligned}\ng(x) &= f(x-p) - q \\\\[12pt]\n&= \\sin(x-p) - q \\hspace{3.5em} \\\\\n\\end{aligned}\n$$\n\nHence, using the\ncoordinates of A$(0,-7)$ and B$(\\pi, -5)$, we get\n\n$$\n\\begin{aligned}\n-7 &= \\sin(-p) - q  \\\\[12pt]\n-5 &= \\sin(\\pi-p) - q \\\\\n\\end{aligned}\n$$\n\nTherefore we have two expressions for $q$:\n\n$$\n\\begin{align*}\nq &= \\sin(-p) + 7 \\hspace{3em} [1]\\\\[12pt]\nq &= \\sin(\\pi - p) + 5 \\hspace{2em} [2]\n\\end{align*}\n$$\n\nHence, we solve the following equation for $p$:\n\n$$\n\\begin{align*}\n\\sin(-p) + 7 &= \\sin(\\pi - p) + 5\n\\end{align*}\n$$\n\nBy using the G.D.C. we find $\\hspace{0.5em}\\tcbhighmath{p \\approx 1.57 \\text{ or }\\dfrac{\\pi}{2}}$\nAnd substituting this value into equation [1], $\\hspace{0.5em}\\tcbhighmath{q = 6}$.',
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
    title: 'Question 5',
    content:
      'Let $f(x) = e^x$,  for $x \\in \\mathbb{R}$. The\ngraph of $f$ is translated by\n$\\left(\\hspace{-0.2em}\\begin{matrix} -p \\\\[2pt] \\hspace{0.2em}q \\end{matrix}\\right)$\nto give the graph of a function $g$ that passes through the points\nA$(0,1.5)$ and B$(\\ln2, 2)$.\nFind the value of $p$ and the value of $q$.',
    markScheme:
      'Since the graph of $f$ has been translated $p$ units in the direction of\nthe negative $x$-axis and $q$ units in the direction of the positive\n$y$-axis, an expression for $g$ is given by\n\n$$\n\\begin{aligned}\ng(x) &= f(x+p) + q \\\\[12pt]\ng(x) &= e^{x+p} + q \\hspace{3em} [\\text{for $x \\in \\mathbb{R}$}]\\\\\n\\end{aligned}\n$$\n\nHence, using the coordinates of A$(0,1.5)$ and B$(\\ln2, 2)$, we get\n\n$$\n\\begin{aligned}\n1.5 &= e^{p} + q \\\\[12pt]\n2 &= e^{\\ln2+p} + q \\hspace{0.5em} \\\\\n\\end{aligned}\n$$\n\nTherefore we have two expressions for $q$:\n\n$$\n\\begin{align*}\nq &= 1.5 - e^{p} \\hspace{3em} [1]\\\\[12pt]\nq &= 2 - e^{\\ln2+p} \\hspace{2em} [2]\n\\end{align*}\n$$\n\nHence, we solve the following equation for $p$:\n\n$$\n\\begin{align*}\n1.5 - e^{p} &= 2 - e^{\\ln2+p}\n\\end{align*}\n$$\n\nBy using the G.D.C. we find $\\hspace{0.5em}\\tcbhighmath{p \\approx -0.693}$\nAnd substituting this value into equation [1], $\\hspace{0.5em}\\tcbhighmath{q = 1}$.',
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
    title: 'Question 6',
    content:
      'A scientist is studying the growth of a population of bacteria under\ndifferent environments. In environment $A$ bacteria grows according to\nthe function\n\n$$\nG(t)=-700(0.95)^t+750\n\n$$\n\nwhere $G$ is the population of\nbacteria and $t$ is the time in minutes since placed in the environment.\n\n- Find the initial population of bacteria.<span class="marks">[1]</span>\n\n- Sketch a graph of $G$ against $t$ for $0\\leq t \\leq 800$.<span class="marks">[3]</span>\n\n- Find the population of bacteria after 20 minutes.<span class="marks">[1]</span>\n\n- Find the steady-state population of bacteria after a long period of\ntime.<span class="marks">[1]</span>\n\n\nTo slow down the growth of bacteria, the scientist creates a new\nenvironment, $B$, by reducing the pH level of the environment. The\nscientist finds that the bacteria now grow half as fast as in\nenvironment $A$.\n\n- Determine a model for the growth of bacteria $G_2$ for this\nmodified environment.<span class="marks">[2]</span>  \n\nThe scientist creates a another environment, $C$, which is rich in\nproteins. The scientist finds that the bacteria grows twice as fast as\nin the original environment, $A$.\n\n- Determine a model for the growth, $G_3$, of bacteria in\nthis protein-rich environment.<span class="marks">[2]</span>\n\n- Find out how long it takes for the population of bacteria\nto reach $600$ in environment $C$.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The initial population of bacteria is given by $G(0)$.\nTherefore, the initial population is\n$\\answer{ 50\\hspace{0.25em}\\text{bacteria}}$\n- The graph of $G$ versus $t$ for $0\\leq t \\leq 800$ is shown below\n[by using G.D.C.]\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/fe00e51d-9360-4650-9d14-97738ef54068/images/2f3e2cd8-4af8-4ed7-a759-27ddc45c6063/6c875d0f390136f8009b8bc56f5fb4337484b581.svg)\n\n\n- The population after $20$ minutes is given by $G(20)$. We get\n\n  $$\n  \\begin{aligned}\n  G(20) &= -700(0.95)^{20}+750 \\\\[9pt]\n  &\\hspace{0.3em}\\answer{\\approx 499\\text{ bacteria}} \\hspace{2.15cm} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- From the graph in part (a) we can see that the steady-state\npopulation of bacteria after a long period of time is\n\n  $$\n  \\answer{750\\hspace{0.25em}\\text{bacteria}}\n  $$\n\n- The new function $G_2(t)$ is found by transforming the graph of\n$G(t)$ by a stretch with scale factor $2$ and $y$-axis invariant.\nTherefore, we get\n\n  $$\n  \\answer{G_2(t)= -700(0.95)^{t/2}+750}\n  $$\n\n- The function $G_3(t)$ can be found by transforming the graph of\n$G(t)$ by a stretch with scale factor $\\dfrac{1}{2}$ and $y$-axis\ninvariant. Therefore, we get\n\n  $$\n  \\answer{G_3(t)= -700(0.95)^{2t}+750}\n  $$\n\n- If we draw the graph of $G_3$ versus $t$ and $y=600$ [by using\nG.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/fe00e51d-9360-4650-9d14-97738ef54068/images/d92a8d2a-3424-4da1-a720-36f21c7070a6/99ecd8a838edd38c55b6acb6559f25b64ad90f4d.svg)\n\n\n  Therefore, the population of bacteria in environment $C$ reaches 600\nafter\n\n  $$\n  \\answer{15 \\text{ minutes}}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 7',
    content:
      'A company that produces electronic components is investigating the\nheating properties of a particular component. The company finds that the\ntemperature, $T$, of the component can be modelled by the function\n\n$$\nT(t)=-40(0.9)^t+90\n$$\n\nwhere $T$ is measured in degrees Celsius and $t$\nis measured in minutes of use.\n\n- Write down the initial temperature of the component.<span class="marks">[1]</span>\n\n- Sketch a graph of $T$ against $t$ for $0\\leq t \\leq 90$.<span class="marks">[3]</span>\n\n- Find the temperature of the component after 15 minutes.<span class="marks">[1]</span>\n\n- Find the steady-state temperature of the component after a long\nduration of use.<span class="marks">[1]</span>\n\n\nTo slow down the heating speed of the component, the company increases\nthe size of the component in such a way that the component heats\n$\\dfrac{3}{4}$ times as fast as the initial component.\n\n- Find a model for the temperature $T_2$ of the modified\ncomponent.<span class="marks">[2]</span>  \n\nAnother option to reduce the rate of heating - instead of increasing the\nsize of the component - is to add a thermal pad to the component. In\nthis case the component heats half as fast as the initial component.\n\n- Find a model for the temperature $T_3$ of the component\nwith the thermal pad.<span class="marks">[2]</span>\n\n- Find the time taken for the component with the thermal pad\nto reach $80^\\circ$ C.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The initial temperature of the component is given by $T(0)$.\nHence, the initial temperature is\n$\\answer{ 50^\\circ\\hspace{0.25em}\\text{C}}$\n- The graph of $T$ versus $t$ [by using G.D.C.] for\n$0\\leq t \\leq 90$ is shown below\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/312f2f89-1d5d-405d-a0c2-4d85e141d1f1/images/6b0861aa-46fb-422c-bd98-e606811b0839/1ea4bfa73ce4f9b86bdbec79080f39dd70e04a16.svg)\n\n\n- The temperature after $15$ minutes is given by $T(15)$. We get\n\n  $$\n  \\begin{aligned}\n  T(15) &= -40(0.9)^{15}+90 \\\\[9pt]\n  &\\hspace{0.3em}\\answer{\\approx 81.8^\\circ\\hspace{0.25em}\\text{C}} \\hspace{2.15cm} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- From the graph in part (a) we can see that the steady-state\ntemperature after a long duration of use is:\n\n  $$\n  \\answer{90^\\circ\\hspace{0.25em}\\text{C}}\n  $$\n\n- The new function $T_2(t)$ is found by transforming the graph of\n$T(t)$ by a stretch with scale factor $\\dfrac{4}{3}$ and $y$-axis\ninvariant. Therefore, we get\n\n  $$\n  \\answer{T_2(t)=-40(0.9)^{3t/4}+90}\n  $$\n\n- The function $T_3(t)$ can be found by transforming the graph of\n$T(t)$ by a stretch with scale factor $2$ and $y$-axis invariant.\nTherefore, we get\n\n  $$\n  \\answer{T_3(t)=-40(0.9)^{t/2}+90}\n  $$\n\n- The graph of $T_3$ versus $t$ and $y=80$ if shown [by using\nG.D.C.]\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/312f2f89-1d5d-405d-a0c2-4d85e141d1f1/images/c7b35707-711b-41cf-a85e-50baa7b62145/787dac570c08164c400ae6f2d2de11249fcfecc8.svg)\n\n\n  Therefore, the component reaches a temperature of\n$80^\\circ$ C after\n\n  $$\n  \\answer{26.3 \\text{ minutes}}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 8',
    content:
      'Evan has inserted a photo of a bridge into graphing software. The photo shows a suspension cable hanging between two vertical suspenders. The part of the cable between the vertical suspenders in the photo has equation\n\n$$\n\\begin{align*}\n    h(x) = \\dfrac{7}{53}x^2 + 2 \\, , \\, -4.6 \\leq x \\leq 4.6\n\\end{align*}\n$$\n\nWhere $h$ and $x$ are measured in centimetres. The bridge deck lies on the $x$-axis.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/3f772715-8d4c-4baa-9dbe-4e511990717a/images/75ae16ef-0328-41f3-9043-658d6250a532/ai1061.PNG)\n\n\nThe photo is an enlargement of the actual bridge with a scale factor of $\\dfrac{1}{125}$ and centre $(0,0)$.\n\n- Find the equation of the actual suspension cable between the vertical suspenders. Give your answer in the form $f(x)=ax^2+b$, where $a,b\\,\\in\\mathbb{R}$.<span class="marks">[3]</span>\n\n- Hence, calculate the area bound by the vertical suspenders, the bridge deck and the suspension cable. Give your answer in m$^2$.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Let the equation of the actual suspension cable be $f(x)$. Therefore, using both a vertical enlargement and horizontal enlargement of scale factor $\\dfrac{1}{125}$ we have\n\n  $$\n  \\begin{align*}\n  h(x) = \\dfrac{1}{125}\\,f(125x)\n  \\end{align*}\n  $$\n\n  Expressing $f(x)$ in terms of $h(x)$ we have\n\n  $$\n  \\begin{align*}\n  f(x) &= 125\\,h\\left(\\dfrac{x}{125}\\right) \\\\[8pt]\n  &= 125\\left(\\dfrac{7}{53}\\left(\\dfrac{x}{125}\\right)^2 + 2\\right) \\\\[8pt]\n  &\\hspace{-1.9em}\\tcbhighmath{f(x) = 0.001057x^2 + 250\\,,\\,-575 \\leq x \\leq 575}\n  \\end{align*}\n  $$\n\n- The area required is given by the integral\n\n  $$\n  \\begin{align*}\n  A &= \\displaystyle\\int_{-575}^{575}\\,0.001057x^2 + 250\\,\\mathrm{d}x \\\\[8pt]\n  &\\approx 421\\,000\\,\\mathrm{cm}^2\n  \\end{align*}\n  $$\n\n  We can convert area in $\\mathrm{cm}^2$ to area in $\\mathrm{m}^2$ by dividing by $100^2$.\n  The area bound by the vertical suspenders, the bridge deck and the suspension cable is approximately $42.1\\,\\text{m}{^2}$.\n',
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3.5'
  }
];
