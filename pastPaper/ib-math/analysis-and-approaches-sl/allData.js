export const allData = [
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 1',
    content:
      'Expand $(2x + 1)^4$ in descending powers of $x$ and simplify your\nanswer.',
    markScheme:
      'Using Pascal triangle\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/186561dc-7c53-4bef-b9cc-7a867881c1ea/images/1ac85e2d-06d7-4c46-8525-a36deed1bafc/d6143401ad9783a3554c63b7ab804d89d1d7b5f1.svg)\n\n\nwe get\n\n$$\n\\begin{aligned}\n\\hspace{2em} (2x + 1)^4 &= (2x)^4 + 4(2x)^3(1) + 6(2x)^2(1)^2 + 4(2x)(1)^3 + (1)^4 \\\\[9pt]\n&= 16x^4 + 4(8x^3) + 6(4x^2) + 4(2x) + 1 \\\\[9pt]\n&\\answer{= 16x^4 + 32x^3 + 24x^2 + 8x + 1}\\end{aligned}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '4',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 2',
    content:
      'Expand $(2x - 3)^4$ in descending powers of $x$ and simplify your\nanswer.',
    markScheme:
      'Using Pascal triangle\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/84465876-5e99-4147-a7b1-f935f18653ae/images/98735b41-0607-4876-9ea3-69cbd52fbdc8/d6143401ad9783a3554c63b7ab804d89d1d7b5f1.svg)\n\n\nwe get\n\n$$\n\\begin{aligned}\n\\hspace{2em} (2x - 3)^4 &= (2x)^4 + 4(2x)^3(-3) + 6(2x)^2(-3)^2 + 4(2x)(-3)^3 + (-3)^4 \\\\[9pt]\n&= 16x^4 + 4(8x^3)(-3) + 6(4x^2)(9) + 4(2x)(-27) + 81 \\\\[9pt]\n&\\answer{= 16x^4 - 96x^3 + 216x^2 - 216x + 81}\\end{aligned}\n$$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '4',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 3',
    content:
      'Consider the expansion of $(2x-1)^9$.\n\n- Write down the number of terms in this expansion. <span class="marks">[1]</span>\n\n- Find the coefficient of the term in $x^2$. <span class="marks">[5]</span>\n\n',
    markScheme:
      '\n- The number of terms in this expansion is\n$\\answer{10}$\n- The term in $x^2$ is\n\n  $$\n  \\begin{aligned}\n  \\binom{9}{7} \\big[(2x)^{9-7}\\big]\\big[(-1)^7\\big] &= 36\\big[4x^2\\big]\\big[-1\\big] \\\\[6pt]\n  &= -144x^2\\end{aligned}\n  $$\n\n  Hence the coefficient of the term in $x^2$\nis  $\\answer{-144}$\n',
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
    type: '',
    title: 'Question 4',
    content:
      'Consider the expansion of $(x-3)^8$.\n\n- Write down the number of terms in this expansion. <span class="marks">[1]</span>\n\n- Find the coefficient of the term in $x^6$. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- The number of terms in this expansion is\n$\\answer{9}$\n- The term in $x^6$ is\n\n  $$\n  \\begin{aligned}\n  \\binom{8}{2} \\big[(x)^{8-2}\\big]\\big[(-3)^2\\big] &= 28\\big[x^6\\big]\\big[9\\big] \\\\[6pt]\n  &= 252x^6\\end{aligned}\n  $$\n\n  Hence the coefficient of the term in $x^6$\nis  $\\answer{252}$\n',
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
    title: 'Question 5',
    content:
      'The coefficient of the variable $x^5$ in the expansion of $(x+2a)^8$, where $a\\in \\mathbb{R}$, is $56$.\nFind the value of $a$.',
    markScheme:
      'Using the binomial theorem, we have\n\n$$\n\\begin{align*}\n    (x+2a)^8 &=x^8+\\binom{8}{1}(x)^7(2a)^1+...+\\binom{8}{r}(x)^{(8-r)}(2a)^r+...+(2a)^8 \\tag*{\\textbf{(M1)}}\n\\end{align*}\n$$\n\nWe need to identify the $r^{\\text{th}}$ term which includes $x^5$, hence, $r=8-5=3$,\n\n$$\n    \\tag*{\\textbf{(A1)}}\n$$\n\nTherefore\n\n$$\n\\begin{align*}\n\\binom{8}{3}\\big(x^{5}\\big)\\big(2a\\big)^3 &= 56x^5 \\tag*{\\textbf{A1}} \\\\[5pt]\n\\end{align*}\n$$\n\nUsing the formula we can evaluate the binomial coefficient\n\n$$\n\\begin{align*}\n    \\binom{8}{3}&=\\frac{8!}{3!5!}\\\\[6pt]\n    &=56\\tag*{\\textbf{A1}}\n\\end{align*}\n$$\n\n\n$$\n\\begin{align*}\n(\\cancel{56})(\\cancel{x^5})(8a^3) &= \\cancel{56}\\cancel{x^5} \\tag*{\\textbf{A1}}\\\\[9pt]\n8a^3 &= 1 \\\\[7pt]\na^3 &= \\dfrac{1}{8} \\\\[7pt]\n&\\hspace{-0.535em}\\tcbhighmath{a = \\dfrac{1}{2}}\\tag*{\\textbf{A1}}\n\\end{align*}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 6',
    content:
      '\n- Show that $(2n-1)^3 + (2n+1)^3 = 16n^3+12n$ for $n \\in \\mathbb{Z}$.\n<span class="marks">[3]</span>\n\n- Hence, or otherwise, prove that the sum of the cubes of any two\nconsecutive odd integers is divisible by four. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  (2n-1)^3 &= (2n)^3 - 3(2n)^2 + 3(2n) - 1 \\hspace{2em} \\\\[6pt]\n  &= 8n^3 - 12n^2 + 6n - 1\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  (2n+1)^3 &= (2n)^3 + 3(2n)^2 + 3(2n) + 1 \\hspace{2em} \\\\[6pt]\n  &= 8n^3 + 12n^2 + 6n + 1\\end{aligned}\n  $$\n\n  Summing our expressions for $(2n-1)^3$ and $(2n+1)^3$, we get\n\n  $$\n  \\begin{aligned}\n  (2n-1)^3 + (2n+1)^3 &= 8n^3 - \\cancel{12n^2} + 6n - \\cancel{1} + 8n^3 + \\cancel{12n^2} + 6n + \\cancel{1}\n  \\end{aligned}\n  $$\n\n  Hence we get\n\n  $$\n  \\begin{aligned}\n  \\answer{(2n-1)^3 + (2n+1)^3 = 16n^3 + 12n} \\hspace{2em}\\end{aligned}\n  $$\n\n- Let $2n-1$ and $2n+1$ be two consecutive odd integers for some\n$n \\in \\mathbb{Z}$.\n  The sum of the cubes of $2n-1$ and $2n+1$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.4em} (2n-1)^3 + (2n+1)^3 &= 16n^3 + 12n \\hspace{2em} [\\text{by part (a)}] \\\\[6pt]\n  &= 4n(4n^2 + 3) \\hspace{2.22em} [\\text{multiple of $4$}]\\end{aligned}\n  $$\n\n  Hence the sum of the cubes of any two consecutive odd integers is\ndivisible by four.\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 7',
    content:
      'The third term, in descending powers of $x$, in the expansion of $(x+p)^8$ is $252x^6$. Find the\npossible values of $p$.',
    markScheme:
      'Using the binomial theorem, we have\n\n$$\n\\begin{aligned}\n\\hspace{2em} 252x^6 &= \\binom{8}{2}\\big(x^{8-2}\\big)\\big(p^2\\big) \\qref{(1)}\\end{aligned}\n$$\n\nHence, solving the equation $(1)$ for $p$, we get\n\n$$\n\\begin{aligned}\n252x^6 &= 28\\big(x^6\\big)\\big(p^2\\big) \\\\[9pt]\n252 &= 28p^2 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{9.05em} \\answer{p = \\pm 3} \\hspace{3em} [\\text{by using G.D.C.}]\n$$\n',
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
    type: '',
    title: 'Question 8',
    content:
      'In the expansion of $(a+bx)^6$, the coefficient of the $x^3$ term is $-2$ times the coefficient of the $x^4$ term.\nDetermine the value of $\\displaystyle \\frac{a}{b}$.',
    markScheme:
      'From the formula booklet we can find the formula for a general term of the expansion\n\n$$\n\\begin{align*}\n    (a+b)^n&=...+\\binom{n}{r}a^{n-r}b^r+...\n\\end{align*}\n$$\n\nUsing the general term above, we can write an expression for the $x^3$ term and the $x^4$ term.\n\n$$\n\\begin{align*}\n    &\\binom{6}{3}(a)^3(bx)^3& \\binom{6}{4}(a)^2(bx)^4 \\tag*{\\textbf{A1A1}}\n\\end{align*}\n$$\n\nWe can now use the information given to write an equation linking the coefficients of the two expressions above.\n\n$$\n\\begin{align*}\n    &\\binom{6}{3}a^3b^3=-2\\times \\binom{6}{4}a^2b^4 \\tag*{\\textbf{M1}}\n\\end{align*}\n$$\n\nUsing the formula we can evaluate the binomial coefficients and simplify\n\n$$\n\\begin{align*}\n    \\textcolor{white}{hack} \\tag*{\\textbf{M1}}\n\\end{align*}\n$$\n\n\n$$\n\\begin{align*}\n    \\frac{6!}{3!3!}a^3b^3&=-2\\times \\frac{6!}{4!2!}a^2b^4\\\\[6pt]\n    \\frac{6\\times 5 \\times 4\\times \\cancel{3!}}{\\cancel{3!}\\times3\\times 2\\times 1}a^3b^3&=-2\\times \\frac{6\\times 5 \\times  \\cancel{4!}}{\\cancel{4!}\\times 2 \\times 1}a^2b^4\\\\[6pt]\n    20a^3b^3&=-30a^2b^4 \\tag*{\\textbf{A1}}\n\\end{align*}\n$$\n\nWe need to find the value of $\\tfrac{a}{b}$ therefore we can rearrange the expression above\n\n$$\n\\begin{align*}\n    \\frac{a^3b^3}{a^2b^4}&=\\frac{-30}{20}\\\\[6pt]\n    \\frac{a}{b}&=\\hspace{0.525em}\\tcbhighmath{\\frac{-3}{2}}\\tag*{\\textbf{A1}}\\\\[6pt]\n    &=-1.5\n\\end{align*}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 9',
    content:
      'Consider the expansion of\n$\\left(\\dfrac{x^2}{2} + \\dfrac{a}{x}\\right)^6$. The constant term is\n$960$.\nFind the possible values of $a$.',
    markScheme:
      'Using the binomial theorem, we have\n\n$$\n\\begin{aligned}\n\\hspace{2.5em} 960 &= \\binom{6}{4}\\bigg[\\dfrac{x^2}{2}\\bigg]^{6-4}\\bigg[\\dfrac{a}{x}\\bigg]^4 \\qref{(1)}\\end{aligned}\n$$\n\nHence, solving the equation $(1)$ for $a$, we get\n\n$$\n\\begin{aligned}\n960 &= 15\\bigg[\\dfrac{x^4}{4}\\bigg]\\bigg[\\dfrac{a^4}{x^4}\\bigg] \\\\[5pt]\n960 &= \\dfrac{15a^4}{4} \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{7.3em} \\answer{a = \\pm 4} \\hspace{3em} [\\text{by using G.D.C.}]\n$$\n',
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
    type: '',
    title: 'Question 10',
    content:
      'Consider the expansion of $\\dfrac{(x+a)^7}{bx}$, where $a > 0$. The coefficient of the term in $x^5$ is $2$, and the coefficient of the term in $x^3$ is $1690$.\nFind the value of $a$ and the value of $b$.',
    markScheme:
      'Because each term in the expansion of $(x+a)^7$ will be divided by $bx$, we require the terms in $x^6$ and $x^4$. Using the Binomial Theorem, we have\n\n$$\n\\begin{align*}\n    \\text{Term in } x^6 &= \\binom{7}{1}x^6a \\\\[8pt]\n    &= 7x^6a \\\\[8pt]\n    \\text{Term in } x^4 &= \\binom{7}{3}x^4a^3 \\\\[8pt]\n    &= 35x^4a^3\n\\end{align*}\n$$\n\nDividing both these terms by $bx$ we get\n\n$$\n\\begin{align*}\n    \\dfrac{7x^6a}{bx} &= \\dfrac{7x^5a}{b} \\\\[8pt]\n    \\dfrac{35x^4a^3}{bx} &= \\dfrac{35x^3a^3}{b}\n\\end{align*}\n$$\n\nGiven that the coefficient of $x^5$ is $2$, and the coefficient of $x^3$ is $1690$, we have\n\n$$\n\\begin{align*}\n    \\dfrac{7a}{b} &= 2 \\\\[8pt]\n    \\dfrac{35a^3}{b} &= 1690\n\\end{align*}\n$$\n\nAnd therefore\n\n$$\n\\begin{align*}\n    7a &= 2b \\tag*{[1]}\\\\[8pt] \n    35a^3 &= 1690b \\tag*{[2]}\n\\end{align*}\n$$\n\nDividing equation [2] by equation [1] we have\n\n$$\n\\begin{align*}\n    \\dfrac{35a^3}{7a} &= \\dfrac{1690b}{2b} \\\\[8pt]\n    5a^2 &= 845 \\\\[8pt]\n    a^2 &= 169 \\\\[8pt]\n    a &= \\pm 13\n\\end{align*}\n$$\n\nGiven that $a>0$, $\\tcbhighmath{a = 13}$. Substituting into equation [1],\n\n$$\n\\begin{align*}\n    7a &= 2b \\\\[8pt]\n    7(13) &= 2b \\\\[8pt]\n    &\\hspace{-0.5em}\\tcbhighmath{b = 45.5}\n\\end{align*}\n$$\n',
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
    title: 'Question 11',
    content:
      'In the expansion of $px^2(5 + px)^8$, the coefficient of the term in\n$x^6$ is $3402$. Find the value of $p$.',
    markScheme:
      'Using the binomial theorem, we have\n\n$$\n\\begin{aligned}\n3402x^6 &= px^2\\binom{8}{4}\\big[5^{8-4}\\big]\\big[(px)^4\\big] \\qref{(1)}\\end{aligned}\n$$\n\nHence, solving the equation $(1)$ for $p$, we get\n\n$$\n\\begin{aligned}\n3402x^6 &= px^2\\big[70\\big]\\big[5^4\\big]\\big[p^4x^4\\big] \\hspace{1.5em}  \\\\[6pt]\n3402 &= 43\\hspace{0.15em}750\\hspace{0.05em}p^5 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{5.3em} \\answer{p =0.6} \\hspace{3em} [\\text{by using G.D.C.}]\n$$\n',
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
    title: 'Question 12',
    content:
      'Consider the expansion of $\\bigg(3x + \\dfrac{p}{x}\\bigg)^8$, where\n$p > 0$. The coefficient of the term\nin $x^4$ is equal to the coefficient of the term in $x^6$. Find $p$.',
    markScheme:
      'Using the binomial theorem, we have\n\n$$\n\\begin{aligned}\n\\bigg(3x+\\dfrac{p}{x}\\bigg)^8 &= \\sum_{k=0}^8 \\binom{8}{k} \\big[3x\\big]^{8-k}\\bigg[\\dfrac{p}{x}\\bigg]^k \\\\[3pt]\n&= \\sum_{k=0}^8 \\binom{8}{k} \\big[3^{8-k}p^k\\big]\\big[x^{8-2k}\\big] \\\\\n\\end{aligned}\n$$\n\nHence we get\n\n$$\n\\begin{aligned}\n\\big[\\text{coefficient of the term in } x^4\\big] &= \\big[\\text{coefficient of the term in } x^6\\big] \\hspace{5.8em} \\\\[6pt]\n\\binom{8}{2}\\big[3^{8-2}p^2\\big] &= \\binom{8}{1}\\big[3^{8-1}p\\big] \\\\[6pt]\n28\\big[3^6p^2\\big] &= 8\\big[3^7p\\big] \\\\[12pt]\n20\\hspace{0.15em}412\\hspace{0.05em}p^2 - 17\\hspace{0.15em}496\\hspace{0.05em}p &= 0 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{5.1em} \\answer{p = \\dfrac{6}{7}} \n \\approx 0.857... \\hspace{3em} [\\text{by using G.D.C.}]\n$$\n\n',
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
    type: '',
    title: 'Question 13',
    content:
      "Let $f(x) = (x^2 + a)^5$.\nIn the expansion of the derivative, $f'(x)$, the coefficient of the term\nin $x^5$ is $960$. Find the possible values of $a$.",
    markScheme:
      "Using the chain rule, we have\n\n$$\n\\begin{aligned}\nf'(x) &= 5(x^2 + a)^4(2x) \\\\[6pt]\n&= 10x(x^2 + a)^4\\end{aligned}\n$$\n\nHence, using the binomial theorem, we\nhave\n\n$$\n\\begin{aligned}\n\\hspace{3em} 960x^5 &= 10x\\binom{4}{2}\\big[\\big(x^2\\big)^{4-2}\\big]\\big[a^2\\big] \\qref{(1)}\\end{aligned}\n$$\n\nHence, if we solve the equation $(1)$ for $a$, we get\n\n$$\n\\begin{aligned}\n960x^5 &= 10x\\big[6\\big]\\big[x^4\\big]\\big[a^2\\big] \\\\[6pt]\n960 &= 60\\hspace{0.05em}a^2 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{7.4em} \\answer{a = \\pm 4} \\hspace{3em} [\\text{by using G.D.C.}]\n$$\n",
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
    type: '',
    title: 'Question 14',
    content:
      'Consider the expansion of $\\bigg(2x^6+\\dfrac{x^2}{q}\\bigg)^{10}$, \n$q \\neq 0$. The coefficient of the term\nin $x^{40}$ is twelve times the coefficient of the term in $x^{36}$.\nFind $q$.',
    markScheme:
      'Using the binomial theorem, we have\n\n$$\n\\begin{aligned}\n\\hspace{2.5em} \\bigg(2x^6+\\dfrac{x^2}{q}\\bigg)^{10} &= \\sum_{k=0}^{10} \\binom{10}{k} \\big[2x^6\\big]^{10-k}\\bigg[\\dfrac{x^2}{q}\\bigg]^k \\\\[3pt]\n&= \\sum_{k=0}^{10} \\binom{10}{k} \\big[2^{10-k}q^{-k}\\big]\\big[x^{60-4k}\\big] \\\\\n\\end{aligned}\n$$\n\nHence we get\n\n$$\n\\begin{aligned}\n\\big[\\text{coefficient of the term in $x^{40}$}\\big] &= 12\\big[\\text{coefficient of the term in $x^{36}$}\\big] \\hspace{2.8em} \\\\[6pt]\n\\binom{10}{5}\\big[2^{10-5}q^{-5}\\big] &= 12\\binom{10}{6}\\big[2^{10-6}q^{-6}\\big] \\\\[6pt]\n252\\big[2^5q^{-5}\\big] &= 12(210)\\big[2^4q^{-6}\\big] \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{6.9em} \\answer{q = 5} \\hspace{3em} [\\text{by using G.D.C.}]\n$$\n',
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
    type: '',
    title: 'Question 15',
    content:
      'In the expansion of $x(2x + 1)^n$, the coefficient of the term in $x^3$\nis $20n$, where $n \\in \\mathbb{Z}^+$. Find $n$.',
    markScheme:
      'Using the binomial theorem, we have\n\n$$\n\\begin{aligned}\n20nx^3 &= x\\binom{n}{2}\\big[1^{n-2}\\big]\\big[(2x)^2\\big] \\qref{(1)}\\end{aligned}\n$$\n\nHence, solving the equation $(1)$ for $n$, we get\n\n$$\n\\begin{aligned}\n20nx^3 &= x\\bigg[\\dfrac{n!}{2!(n-2)!}\\bigg]\\big[4x^2\\big] \\hspace{0.3em} \\\\[6pt]\n20nx^3 &= \\bigg[\\dfrac{n(n-1)}{2}\\bigg]\\big[4x^3\\big] \\\\[12pt]\n10n &= n(n-1) \\\\[18pt]\n0 &= n(n - 11) \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\answer{n =11} \\hspace{5.7em}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 16',
    content:
      'In the expansion of $(2x + 1)^n$, the coefficient of the term in $x^2$\nis $40n$, where $n \\in \\mathbb{Z}^+$. Find $n$.',
    markScheme:
      'Using the binomial theorem, we have\n\n$$\n\\begin{aligned}\n40nx^2 &= \\binom{n}{2}\\big[1^{n-2}\\big]\\big[(2x)^2\\big] \\qref{(1)}\\end{aligned}\n$$\n\nHence, solving the equation $(1)$ for $n$, we get\n\n$$\n\\begin{aligned}\n40nx^2 &= \\bigg[\\dfrac{n!}{2!(n-2)!}\\bigg]\\big[4x^2\\big] \\hspace{0.3em} \\\\[6pt]\n40n &= \\bigg[\\dfrac{n(n-1)}{2}\\bigg]\\big[4\\big] \\\\[12pt]\n20n &= n(n-1) \\\\[18pt]\n0 &= n(n - 21) \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\answer{n =21} \\hspace{5.1em}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 17',
    content:
      '\n- Write down and simplify the expansion of $(3-x)^5$ in descending\norder of powers of $x$. <span class="marks">[3]</span>\n\n- Hence find the exact value of $(2.9)^5$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the binomial theorem, we have\n\n  $$\n  \\begin{aligned}\n  (3-x)^5 &= ((-x) + 3)^5 \\\\[6pt]\n  &= \\sum_{k = 0}^5 \\binom{5}{k}\\big[(-x)^{5-k}\\big]\\big[3^k\\big] \\\\[6pt] \n  &\\answer{= -x^5 + 15x^4 - 90x^3 + 270x^2 - 405x + 243} \\qref{(1)}\\end{aligned}\n  $$\n\n- Hence, substituting $x = 0.1$ in the expression $(1)$, we get\n\n  $$\n  \\begin{aligned}\n  (2.9)^5 &=  -(0.1)^5 + 15(0.1)^4 - 90(0.1)^3 + 270(0.1)^2 - 405(0.1) + 243 \\\\[6pt]\n  &= -0.00001 + 0.0015 - 0.09 + 2.7 - 40.5 + 243 \\\\[6pt]\n  &= -40.59001 + 245.7015 \\\\[6pt]\n  &\\answer{= 205.11149}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 18',
    content:
      'Given that\n$(5+nx)^2\\bigg(1+\\dfrac{3}{5}x\\bigg)^n\\hspace{-0.25em}=\\hspace{0.05em}25+100x+\\cdots$,\nfind the value of $n$.',
    markScheme:
      'Using the binomial theorem, we have\n\n$$\n\\begin{aligned}\n(5+nx)^2\\bigg(1+\\dfrac{3}{5}x\\bigg)^n &= \\big[25 + 10nx + n^2x^2\\big]\\left[\\sum_{k=0}^n\\binom{n}{k}\\bigg[\\dfrac{3x}{5}\\bigg]^k\\right] \\qref{(1)}\\end{aligned}\n$$\n\nThe term in $x$ in the expansion of the product $(1)$ is\n\n$$\n\\begin{aligned}\n25\\binom{n}{1}\\bigg[\\dfrac{3x}{5}\\bigg]^1 + 10nx\\binom{n}{0}\\bigg[\\dfrac{3x}{5}\\bigg]^0 &= 15nx + 10nx  \\\\[6pt]\n&= 25nx\\end{aligned}\n$$\n\nHence we get\n\n$$\n\\begin{aligned}\n25n &= 100 \\hspace{2.1em} \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\answer{n = 4} \\hspace{2.1em}\n$$\n',
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
    type: '',
    title: 'Question 19',
    content:
      '\n- \n  - Consider the following equation $2\\binom{n}{r}=\\binom{n}{r+1}$.\n    Show that it can be written as $3r+2=n$.\n  - Now consider the following equation $7\\binom{n}{r-1}=2\\binom{n}{r}$.\n    Show that it can be written as $9r-2=2n$.  <span class="marks">[4]</span>\n\n\n\nConsider the expansion\n\n$$\n\\begin{align*}\n(1+x)^n=1+a_1x+...+a_{k-1}x^{k-1}+a_{k}x^{k}+a_{k+1}x^{k+1}+...+x^n\n\\end{align*} \n$$\n\nWhere $a_i \\in \\mathbb{Q}$ and $k \\in \\mathbb{Z}$.\nThe coefficients of three consecutive terms of the expansion are such that\n\n$$\n\\begin{align*}\n7\\times a_{k-1}&=2\\times a_{k} \\hspace{1em}\\text{ and }\\hspace{1em} 14\\times a_{k}=7\\times a_{k+1}\n\\end{align*}\n$$\n\n\n- Find $n$. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- \n  - Using the combinations formula $\\binom{n}{r}=\\tfrac{n!}{r!(n-r)!}$ we can rewrite both the LHS and the RHS of the equation\n\n    $$\n    \\begin{align*}\n        2\\left(\\dfrac{\\cancel{n!}}{r!(n-r)!}\\right)&=\\dfrac{\\cancel{n!}}{(r+1)!(n-(r+1))!}\n    \\end{align*}\n    $$\n\n    Now we can simplify and rearrange the equation\n\n    $$\n    \\begin{align*}\n        \\dfrac{2(r+1)!}{r!}&=\\dfrac{(n-r)!}{(n-r-1)!}\n    \\end{align*}\n    $$\n\n    Rewrite the numerators using the concept $n!=n(n-1)!$\n\n    $$\n    \\begin{align*}\n        \\dfrac{2(r+1)r!}{r!}&=\\dfrac{(n-r)(n-r-1)!}{(n-r-1)!} \\tag*{\\textbf{\\textcolor{black}{M1}}}\n    \\end{align*}\n    $$\n\n    We can cancel out the factorial terms\n\n    $$\n    \\begin{align*}\n        \\dfrac{2(r+1)\\cancel{r!}}{\\cancel{r!}}&=\\dfrac{(n-r)\\cancel{(n-r-1)!}}{\\cancel{(n-r-1)!}}\\\\[6pt]\n        2(r+1)&=n-r\\\\[6pt]\n        &\\hspace{-2.8em} \\tcbhighmath{3r+2=n} \\tag*{\\textbf{\\textcolor{black}{A1}}}\n    \\end{align*}\n    $$\n\n    As required.\n  - Rewrite the equation using the combinations formula and simplify in a similar way to part (a)\n\n    $$\n    \\begin{align*}\n        7\\left(\\dfrac{n!}{(r-1)!(n-(r-1))!}\\right)&=2\\left(\\dfrac{n!}{r!(n-r)!}\\right)\\\\[6pt]\n        \\dfrac{7}{(r-1)!(n-r+1)!}&=\\dfrac{2}{r!(n-r)!}\\\\[6pt]\n        \\dfrac{7r!}{(r-1)!}&=\\dfrac{2(n-r+1)!}{(n-r)!}\\\\[6pt]\n        \\dfrac{7r\\cancel{(r-1)!}}{\\cancel{(r-1)!}}&=\\dfrac{2(n-r+1)\\cancel{(n-r)!}}{\\cancel{(n-r)!}} \\tag*{\\textbf{\\textcolor{black}{M1}}}\\\\[6pt]\n        7r&=2n-2r+2\\\\[6pt]\n        &\\hspace{-2.8em} \\tcbhighmath{9r-2=2n} \\tag*{\\textbf{\\textcolor{black}{A1}}}\n    \\end{align*}\n    $$\n\n    As required.\n\n- We can begin by expanding $(1+x)^n$, using the binomial theorem, in terms of $n$ and $r$.\n\n  $$\n  \\begin{align*}\n      (1+x)^n&=1+\\binom{n}{1}x+\\binom{n}{2}x^2+...\\\\[6pt]\n      &\\textcolor{red}{+\\binom{n}{r-1}x^{r-1}+\\binom{n}{r}x^r+\\binom{n}{r+1}x^{r+1}+...}  \\tag*{\\textbf{\\textcolor{black}{(M1)}}}\\\\[6pt]\n      &+x^n\n  \\end{align*}\n  $$\n\n  The terms in red represent any three consecutive terms in the expansion.\n  We are told in the question the way in which the coefficients of three consecutive terms are related.\n\n  $$\n   \\begin{align*}\n  (1+x)^n=1+a_1x+...+\\textcolor{red}{a_{k-1}x^{k-1}+a_{k}x^{k}+a_{k+1}x^{k+1}}+...+x^n\n  \\end{align*} \n  $$\n\n  Hence we can use the information given to write the following two equations in terms of binomial coefficients\n\n  $$\n  \\begin{align*}\n  &&7\\times a_{k-1}&=2\\times a_{k}& &&14\\times a_{k}&=7\\times a_{k+1}&  \\\\[6pt]\n  &&7\\binom{n}{r-1}&=2\\binom{n}{r} &\\hspace{-1em} && 14\\binom{n}{r}&=7\\binom{n}{r+1}& \\\\[6pt]\n  &&&&\\hspace{-1em} && 2\\binom{n}{r}&=\\binom{n}{r+1}& \n  \\end{align*}\n  $$\n\n  In part (a) we already rewrote these equations without the combination notation, lets call them $[1]$ and $[2]$.\r\nWe can now solve them simultaneously and find $n$ and $r$.\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{\\textcolor{black}{M1}}}\\\\\n      3r+2&=n \\hspace{4.4em} [1]\\\\\n      9r-2&=2n \\hspace{4em} [2]\\\\\n  \\end{align*}\n  $$\n\n  Multiply $[1]$ by $3$ and subtract equation $[2]$ from this $\\textcolor{red}{\\text{result}}$\n\n  $$\n  \\begin{align*}\n      \\textcolor{red}{9r}-9r+\\textcolor{red}{6}-(-2)&=\\textcolor{red}{3n}-2n\\\\[6pt]\n      &\\hspace{-0.6em}\\tcbhighmath{n=8} \\tag*{\\textbf{\\textcolor{black}{A1}}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 20',
    content:
      'Given that $(1 + x)^3(1 + px)^4 = 1 + qx + 93x^2 + \\dots + p^4x^7$, find\nthe possible values of $p$ and $q$.',
    markScheme:
      'Using Pascal triangle\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/5ede89c3-3d7f-44a4-9286-c2554a148745/images/aebac82f-9280-4cf9-ad52-e4db6b3a6da0/d6143401ad9783a3554c63b7ab804d89d1d7b5f1.svg)\n\n\nwe have\n\n$$\n\\begin{aligned}\n1 + qx + 93x^2 + \\dots + p^4x^7 &= (1 + x)^3(1 + px)^4 \\\\[6pt]\n&= \\big(1 + 3x + 3x^2\\hspace{-0.15em} + x^3\\big)\\hspace{-0.15em}\\big(1 + 4px + 6p^2x^2\\hspace{-0.15em} + 4p^3x^3\\hspace{-0.15em} + p^4x^4\\big)\\end{aligned}\n$$\n\nHence we get\n\n$$\n\\begin{aligned}\nqx &= 4px + 3x \\hspace{2.1em} \\\\[6pt]\nq &= 4p + 3 \\qref{(1)}\\end{aligned}\n$$\n\nand\n\n$$\n\\begin{aligned}\n\\hspace{2em} 93x^2 &= 6p^2x^2 + 12px^2 + 3x^2 \\\\[6pt] \n93 &= 6p^2 + 12p + 3 \\qref{(2)}\\end{aligned}\n$$\n\nHence, solving the equation $(2)$ for $p$, we find\n\n$$\n\\begin{aligned}\n6p^2 + 12p + 3 &= 93 \\\\[6pt]\n6p^2 + 12p - 90 &= 0 \\\\[6pt]\np^2 + 2p - 15 &= 0 \\\\[7pt]\n(p + 5)(p - 3) &= 0 \\\\[7pt]\np &= -5,\\,3\\end{aligned}\n$$\n\nHence, substituting $p = -5,\\,3$ in the\nequation $(1)$, we obtain\n\n$$\n\\begin{aligned}\n\\hspace{1.1em} q &= 4(-5) + 3 \\\\[6pt]\n&= -17\\end{aligned}\n$$\n\nand\n\n$$\n\\begin{aligned}\n\\hspace{0.3em} q &= 4(3) + 3 \\\\[6pt]\n&= 15\\end{aligned}\n$$\n\nTherefore\n$\\answer{p = -5,\\,q=-17}$\nand  $\\answer{p = 3,\\,q=15}$',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: '',
    title: 'Question 21',
    content:
      '\n- Write down the quadratic expression $3x^2 + 5x - 2$ in the form\n$(ax-b)(x+c)$.<span class="marks">[2]</span>\n\n- Hence, or otherwise, find the coefficient of the term in $x^9$ in\nthe expansion\nof $(3x^2+5x-2)^5$. <span class="marks">[5]</span>\n\n',
    markScheme:
      '\n- $\\answer{(3x - 1)(x + 2)}$\n- Using the binomial theorem, we have\n\n  $$\n  \\begin{aligned}\n  (3x^2+5x-2)^5 &= (3x-1)^5(x+2)^5 \\\\[6pt]\n  &= \\left[\\sum_{k = 0}^5 \\binom{5}{k}\\big[(3x)^{5-k}\\big]\\big[(-1)^k\\big]\\right]\\left[\\sum_{k=0}^5\\binom{5}{k}\\big(x^{5-k}\\big)\\big(2^k\\big)\\right]\\end{aligned}\n  $$\n\n  Hence the coefficient of the term in $x^9$ in the expansion of\n$(3x^2+5x-2)^5$ is\n\n  $$\n  \\begin{aligned}\n  a_9 &= \\left[\\binom{5}{0}\\big[3^{5-0}\\big]\\big[(-1)^0\\big]\\right]\\left[\\binom{5}{1}\\big(2^1\\big)\\right] + \\left[\\binom{5}{1}\\big[3^{5-1}\\big]\\big[(-1)^1\\big]\\right]\\left[\\binom{5}{0}\\big(2^0\\big)\\right] \\\\[9pt]\n  &= \\big[(1)(3^5)(1)\\big]\\big[(5)(2)\\big] + \\big[(5)(3^4)(-1)\\big]\\big[(1)(1)\\big] \\\\[15pt]\n  &\\answer{= 2025}\\end{aligned}\n  $$\n\n',
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
    type: 'ERQ',
    title: 'Question 1',
    content:
      'A loaf pan is made in the shape of a cylinder. The pan has a diameter of\n$24\\,\\mathrm{cm}$ and a height of\n$5\\,\\mathrm{cm}$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/2c59aaf1-7a6c-449c-8cf3-e591daef9363/images/0fbe4f18-84db-44cb-b0f8-9423cd562bc4/a347288bee589088e6dce052611dad40b73c72e7.svg)\n\n\n\n- Calculate the volume of this pan. <span class="marks">[2]</span>\n\n\nGloria prepares enough bread dough to exactly fill the pan. The dough\nwas in the shape of a sphere.\n\n- Find the radius of the sphere in cm, correct to one decimal\nplace. <span class="marks">[3]</span>\n\n\nThe bread was cooked in a hot oven. Once taken out of the oven, the\nbread was left in the kitchen.\nThe temperature, $T$, of the bread, in degrees\nCelsius, $\\text{\\textdegree{C}}$, can be\nmodelled by the function\n\n$$\nT(t) = a\\times(1.51)^{-\\frac{t}{3}} + 21, \\hspace{0.5em} t \\geq 0,\n$$\n\nwhere $a$ is a constant and $t$ is the time, in minutes, since the bread\nwas taken out of the oven.\nWhen the bread was taken out of the oven its temperature was\n$205$ $\\text{\\textdegree{C}}$.\n\n- Find the value of $a$. <span class="marks">[2]</span>\n\n- Find the temperature that the bread will be $10$ minutes\nafter it is taken out of the oven. <span class="marks">[2]</span>\n\n\nThe bread can be eaten once its temperature drops to\n$35$ $\\text{\\textdegree{C}}$.\n\n- Calculate, to the nearest minute, the time since the bread\nwas taken out\nof the oven until it can be eaten. <span class="marks">[3]</span>\n\n- In the context of this model, state what the value of $21$\nrepresents. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Using the volume of a cylinder formula with $r = 12$ and $h = 5$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.05em} V_{\\text{pan}} &= \\pi r^2h \\\\[6pt]\n  &= \\pi(12)^2(5) \\\\[6pt]\n  &= 720\\pi \\qref{(1)}  \\\\[6pt]\n  &=2261.9...\\\\[6pt]\n  &\\answer{\\approx 2260 \\text{ cm}^3}\\end{aligned}\n  $$\n\n- Using the volume of a sphere formula, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.4em} V_{\\text{dough}} &= V_{\\text{pan}} \\\\[6pt]\n  \\dfrac{4}{3}\\pi r^3 &= 720\\pi \\hspace{3em} [\\text{from  $(1)$}] \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, solving the equation $(2)$ for $r$, we obtain\n\n  $$\n  \\hspace{12.9em} \\answer{r \\approx 8.1 \\text{ cm}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Solving the equation $T(0) = 205$ for $a$, we find\n\n  $$\n  \\begin{aligned}\n  a\\times(1.51)^0 + 21 &= 205 \\hspace{5.65em} \\\\[6pt]\n  a + 21 &= 205 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.8em} \\answer{a = 184}\n  $$\n\n- Evaluating $T(t)$ for $t=10$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} T(10) &= 184\\times(1.51)^{-\\frac{10}{3}} + 21 \\\\[9pt]\n  &\\answer{\\approx 67.6 \\text{\\hspace{0.15em}\\textdegree{C}}}\\end{aligned}\n  $$\n\n- Solving the equation $T(t) = 35$ for $t$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.6em} 184\\times(1.51)^{-\\frac{t}{3}} + 21 &= 35 \\\\[6pt]\n  t &\\approx 18.8 \\hspace{3.5em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{1.8em} \\answer{t \\approx 19 \\text{ minutes}}\n  $$\n\n- $\\answer{\\text{\\(21\\) is the room  temperature of the kitchen in degrees celsius.}}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '13',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 1',
    content:
      'A loaf pan is made in the shape of a cylinder. The pan has a diameter of\n$24\\,\\mathrm{cm}$ and a height of\n$5\\,\\mathrm{cm}$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/2c59aaf1-7a6c-449c-8cf3-e591daef9363/images/0fbe4f18-84db-44cb-b0f8-9423cd562bc4/a347288bee589088e6dce052611dad40b73c72e7.svg)\n\n\n\n- Calculate the volume of this pan. <span class="marks">[2]</span>\n\n\nGloria prepares enough bread dough to exactly fill the pan. The dough\nwas in the shape of a sphere.\n\n- Find the radius of the sphere in cm, correct to one decimal\nplace. <span class="marks">[3]</span>\n\n\nThe bread was cooked in a hot oven. Once taken out of the oven, the\nbread was left in the kitchen.\nThe temperature, $T$, of the bread, in degrees\nCelsius, $\\text{\\textdegree{C}}$, can be\nmodelled by the function\n\n$$\nT(t) = a\\times(1.51)^{-\\frac{t}{3}} + 21, \\hspace{0.5em} t \\geq 0,\n$$\n\nwhere $a$ is a constant and $t$ is the time, in minutes, since the bread\nwas taken out of the oven.\nWhen the bread was taken out of the oven its temperature was\n$205$ $\\text{\\textdegree{C}}$.\n\n- Find the value of $a$. <span class="marks">[2]</span>\n\n- Find the temperature that the bread will be $10$ minutes\nafter it is taken out of the oven. <span class="marks">[2]</span>\n\n\nThe bread can be eaten once its temperature drops to\n$35$ $\\text{\\textdegree{C}}$.\n\n- Calculate, to the nearest minute, the time since the bread\nwas taken out\nof the oven until it can be eaten. <span class="marks">[3]</span>\n\n- In the context of this model, state what the value of $21$\nrepresents. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Using the volume of a cylinder formula with $r = 12$ and $h = 5$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.05em} V_{\\text{pan}} &= \\pi r^2h \\\\[6pt]\n  &= \\pi(12)^2(5) \\\\[6pt]\n  &= 720\\pi \\qref{(1)}  \\\\[6pt]\n  &=2261.9...\\\\[6pt]\n  &\\answer{\\approx 2260 \\text{ cm}^3}\\end{aligned}\n  $$\n\n- Using the volume of a sphere formula, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.4em} V_{\\text{dough}} &= V_{\\text{pan}} \\\\[6pt]\n  \\dfrac{4}{3}\\pi r^3 &= 720\\pi \\hspace{3em} [\\text{from  $(1)$}] \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, solving the equation $(2)$ for $r$, we obtain\n\n  $$\n  \\hspace{12.9em} \\answer{r \\approx 8.1 \\text{ cm}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Solving the equation $T(0) = 205$ for $a$, we find\n\n  $$\n  \\begin{aligned}\n  a\\times(1.51)^0 + 21 &= 205 \\hspace{5.65em} \\\\[6pt]\n  a + 21 &= 205 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.8em} \\answer{a = 184}\n  $$\n\n- Evaluating $T(t)$ for $t=10$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} T(10) &= 184\\times(1.51)^{-\\frac{10}{3}} + 21 \\\\[9pt]\n  &\\answer{\\approx 67.6 \\text{\\hspace{0.15em}\\textdegree{C}}}\\end{aligned}\n  $$\n\n- Solving the equation $T(t) = 35$ for $t$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.6em} 184\\times(1.51)^{-\\frac{t}{3}} + 21 &= 35 \\\\[6pt]\n  t &\\approx 18.8 \\hspace{3.5em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{1.8em} \\answer{t \\approx 19 \\text{ minutes}}\n  $$\n\n- $\\answer{\\text{\\(21\\) is the room  temperature of the kitchen in degrees celsius.}}$\n',
    paper: 'PAPER2',
    difficulty: 'EASY',
    calculator: true,
    sort: 1,
    maxMark: '13',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 2',
    content:
      'Atmospheric pressure, $P$, in kPa, decreases exponentially with\nincreasing height above sea level, $h$. The atmospheric pressure can be\nmodelled by the function\n\n$$\n\\begin{aligned}\nP(h) &= 101\\times\\bigg(\\dfrac{25}{22}\\bigg)^{-h},\\end{aligned}\n$$\n\nwhere\n$h$ is the height above sea level in kilometres.\n\n- Write down the exact atmospheric pressure at sea level, in kPa.\n<span class="marks">[1]</span>\n\n\nMount Kosciuszko is the highest mountain in Australia with a height of\n$2228$ $\\text{metres}$ above sea level at the top.\n\n- Calculate the atmospheric pressure at the top of the Mount\nKosciuszko. <span class="marks">[2]</span>\n\n- Calculate the height where the atmospheric pressure is\nequal to $10$ kPa. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{101 \\text{ kPa}}$\n- Evaluating $P(h)$ for $h = 2.228$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.6em} P(2.228) &= 101\\times\\bigg(\\dfrac{25}{22}\\bigg)^{-2.228} \\\\[6pt]\n  &\\answer{\\approx 76.0 \\text{ kPa}}\\end{aligned}\n  $$\n\n- Solving the equation $P(h) = 10$ for $h$, we obtain\n\n  $$\n  \\begin{aligned}\n  101\\times\\bigg(\\dfrac{25}{22}\\bigg)^{-h} &= 10 \\hspace{8.1em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11em} \\answer{h = 18.1\\hspace{0.25em}\\text{km}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
      'A population of goldfish decreases exponentially. The size of the\npopulation, $P$, after $t$ days is modelled by the function\n\n$$\n\\begin{aligned}\nP(t) = 8000\\times2^{-t} + 100, \\hspace{0.5em} t \\geq 0. \\\\\n\\end{aligned}\n$$\n\n\n- Write down the exact size of the initial population. <span class="marks">[1]</span>\n\n- Find the size of the population after $5$ days. <span class="marks">[2]</span>\n\n- Calculate the time it will take for the size of the population to\ndecrease to $120$.<span class="marks">[2]</span>\n\n\nThe population will stabilize when it reaches a size of $n$.\n\n- Write down the value of $n$. <span class="marks">[1]</span>  \n',
    markScheme:
      '\n- Evaluating $P(t)$ for $t = 0$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.7em} P(0) &= 8000\\times2^0 + 100 \\\\[6pt]\n  &= 8000 + 100 \\\\[6pt]\n  &\\answer{= 8100}\\end{aligned}\n  $$\n\n- Evaluating $P(t)$ for $t = 5$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.3em} P(5) &= 8000\\times2^{-5} + 100 \\\\[6pt]\n  &\\answer{= 350}\\end{aligned}\n  $$\n\n- Solving the equation $P(t) = 120$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  8000\\times2^{-t} + 100 &= 120 \\hspace{6.1em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{14.2em} \\answer{t = 8.64 \\text{ days}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{11.9em} \\lim_{t\\rightarrow\\infty} P(t) &= \\lim_{t\\rightarrow\\infty} \\big[8000\\times2^{-t} + 100\\big] \\\\[6pt]\n  &= 0+100 \\hspace{2em} [\\text{since $2^{-t} \\rightarrow 0$ as $t \\rightarrow \\infty$}] \\\\[10pt]\n  &= 100 \\text{ fish}\\end{aligned}\n  $$\n\n  Hence the value of $n$ is\n$\\answer{100}$\n',
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
      'A population of $50$ hamsters was introduced to a new town. One month\nlater, the number of hamsters was $62$. The number of hamsters, $P$, can\nbe modelled by the function\n\n$$\nP(t) = 50\\times b^t,\\hspace{0.5em} t\\geq0, \\\\[3pt]\n$$\n\nwhere $t$ is the\ntime, in months, since the hamsters were introduced to the town.\n\n- Find the value of $b$. <span class="marks">[2]</span>\n\n- Calculate the number of hamsters in the town after $6$ months.\n<span class="marks">[2]</span>\n\n\nA wildlife specialist estimates that the town has enough water and food\nto support a maximum population of $2000$ hamsters.\n\n- Calculate the number of months it takes for the hamster\npopulation to reach this maximum. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Solving the equation $P(1) = 62$ for $b$, we get\n\n  $$\n  \\begin{aligned}\n  50\\times b^1 &= 62 \\hspace{2.1em} \\\\[6pt]\n  b &= \\dfrac{62}{50} \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{1.4em}\\answer{b = 1.24}\n  $$\n\n- Evaluating $P(t)$ for $t = 6$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.2em} P(6) &= 50\\times(1.24)^6 \\\\[6pt]\n  &\\answer{\\approx 182}\\end{aligned}\n  $$\n\n- Solving the equation $P(t) = 2000$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  50\\times(1.24)^t &= 2000 \\hspace{3.1em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{15.6em} \\answer{t \\approx 17.1 \\text{ months}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
      'The number of users on a new social network on January 1st $2018$ was\n$320\\hspace{0.15em}000$. One year later, on January 1st $2019$, the number of users\non this network is estimated to be $350\\hspace{0.15em}000$. The number\nof the users on this network, $N$, can be modelled by the function\n\n$$\n\\begin{aligned}\nN(t) = 320\\hspace{0.15em}000\\times b^t, \\hspace{0.5em} t\\geq0, \\end{aligned}\n$$\n\nwhere $t$ is the number of years since January 1st $2018$ and $b$ is a constant.\n\n- Find the exact value of $b$. <span class="marks">[2]</span>\n\n- Estimate the number of the users on this network there will be in\n$2023$.<span class="marks">[2]</span>\n\n- Determine the year during which the number of the social network users\nreaches one million. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a4d111b1-94da-4c2d-aabc-3055a43e64b6/images/74f4d1fc-b669-413e-b511-34e3d1748696/033cf3beecde613f81a96d293306464dcb68241a.svg)\n\n\n  Hence, solving the equation $N(1) = 350\\hspace{0.15em}000$ for $b$,\nwe get\n\n  $$\n  \\begin{aligned}\n  320\\hspace{0.15em}000\\times b &= 350\\hspace{0.15em}000 \\hspace{4.4em} \\\\[9pt]\n  b &= \\dfrac{350\\hspace{0.15em}000}{320\\hspace{0.15em}000} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2.7em}\\answer{b = \\dfrac{35}{32} \\text{ or } 1.09375} \n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a4d111b1-94da-4c2d-aabc-3055a43e64b6/images/fa2e3ea1-8749-42d0-9007-92005a5be7d3/74c77aa092bfa1ac875f40785f7097708883e3e2.svg)\n\n\n  Hence, evaluating $N(t)$ for $t = 5$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.6em} N(5) &= 320\\hspace{0.15em}000\\times \\left(\\dfrac{35}{32}\\right)^5 \\\\[4pt]\n  &\\approx 500\\hspace{0.15em}888 \\\\[10pt]\n  &\\answer{\\approx 501\\hspace{0.15em}000 \\text{ users}}\\end{aligned}\n  $$\n\n- Solving the equation $N(t) = 1\\hspace{0.15em}000\\hspace{0.15em}000$\nfor $t$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.75em} 320\\hspace{0.15em}000\\times \\left(\\dfrac{35}{32}\\right)^t &= 1\\hspace{0.15em}000\\hspace{0.15em}000 \\\\[6pt]\n  t &\\approx 12.7 \\text{ years} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  If we determine the years corresponding to $t = 12$ and $t=13$, we\nhave\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a4d111b1-94da-4c2d-aabc-3055a43e64b6/images/ab5f2498-70aa-47ab-adb5-d67459b0ff99/a616f6ab254b62e363c8d49827ba23ea9d06f1c6.svg)\n\n\n  Hence the number of network users reaches one million\n$\\answer{\\text{during } 2030}$\n',
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
    title: 'Question 6',
    content:
      'The number of French words, $N$, that are remembered by students after\nthe completion of a French language course decreases exponentially over\ntime. This data can be modelled by the function\n\n$$\n\\begin{aligned}\nN(t) = a\\times b^{-t} + 450,\\end{aligned}\n$$\n\nwhere $a$ and $b$ are\npositive constants, and $t$ is the time in years since a student\ncompleted the French language course.\nImmediately after completion, a student remembers $4200$ French words.\n\n- Find the value of $a$. <span class="marks">[2]</span>\n\n\nAfter $4$ years a student remembers only $1600$ French words.\n\n- Find the value of $b$. <span class="marks">[3]</span>\n\n\nThe number of French words a student remembers never decreases below a\ncertain number of words, $n$.\n\n- Write down the value of $n$. <span class="marks">[1]</span>  \n',
    markScheme:
      '\n- Solving the equation $N(0) = 4200$ for $a > 0$, we get\n\n  $$\n  \\begin{aligned}\n  a\\times b^{-0} + 450 &= 4200 \\hspace{5.4em} \\\\[6pt]\n  a + 450 &= 4200 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{a = 3750}\n  $$\n\n- Solving the equation $N(4) = 1600$ for $b > 0$, we obtain\n\n  $$\n  \\begin{aligned}\n  3750\\times b^{-4} + 450 &= 1600 \\hspace{6.9em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.6em} \\answer{b \\approx 1.34} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- If we draw the graph of $y = N(t)$, for $t \\geq 0$ [by using\nG.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ae22b8f9-7634-40e8-aa58-691d50b856e0/images/ebf0ad48-65c4-4d56-9d2b-a25feec366d1/5f0266262d56defec1ffa52f191a9228b568fd3e.svg)\n\n\n  Hence the value of $n$ is\n$\\answer{450}$\n',
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
    title: 'Question 6',
    content:
      'The number of French words, $N$, that are remembered by students after\nthe completion of a French language course decreases exponentially over\ntime. This data can be modelled by the function\n\n$$\n\\begin{aligned}\nN(t) = a\\times b^{-t} + 450,\\end{aligned}\n$$\n\nwhere $a$ and $b$ are\npositive constants, and $t$ is the time in years since a student\ncompleted the French language course.\nImmediately after completion, a student remembers $4200$ French words.\n\n- Find the value of $a$. <span class="marks">[2]</span>\n\n\nAfter $4$ years a student remembers only $1600$ French words.\n\n- Find the value of $b$. <span class="marks">[3]</span>\n\n\nThe number of French words a student remembers never decreases below a\ncertain number of words, $n$.\n\n- Write down the value of $n$. <span class="marks">[1]</span>  \n',
    markScheme:
      '\n- Solving the equation $N(0) = 4200$ for $a > 0$, we get\n\n  $$\n  \\begin{aligned}\n  a\\times b^{-0} + 450 &= 4200 \\hspace{5.4em} \\\\[6pt]\n  a + 450 &= 4200 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{a = 3750}\n  $$\n\n- Solving the equation $N(4) = 1600$ for $b > 0$, we obtain\n\n  $$\n  \\begin{aligned}\n  3750\\times b^{-4} + 450 &= 1600 \\hspace{6.9em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.6em} \\answer{b \\approx 1.34} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- If we draw the graph of $y = N(t)$, for $t \\geq 0$ [by using\nG.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/ae22b8f9-7634-40e8-aa58-691d50b856e0/images/ebf0ad48-65c4-4d56-9d2b-a25feec366d1/5f0266262d56defec1ffa52f191a9228b568fd3e.svg)\n\n\n  Hence the value of $n$ is\n$\\answer{450}$\n',
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
      '\n- Show that $12\\log_x{2}=\\dfrac{12}{\\log_2{x}}$. <span class="marks">[1]</span>\n\n- Hence solve the equation $\\log_2{x}=8-12\\log_x{2}$.<span class="marks">[4]</span>\n\n',
    markScheme:
      "\n- Using the change of base formula we can write\n\n  $$\n  \\begin{align*}\n  \\text{L.H.S.}&=12\\log_{x}2\\\\[6pt]\n  &=12\\left(\\frac{\\log_22}{\\log_2x}\\right)\\tag*{\\textbf{\\textcolor{black}{A1}}}\n  \\end{align*}\n  $$\n\n  As $\\log_n{n}=1$, we can replace $\\log_2{2}$ with 1 and simplify\n\n  $$\n  \\begin{align*}\n  &=12\\left(\\frac{1}{\\log_2x}\\right)\\\\[12pt]\n  &=\\answer{\\dfrac{12}{\\log_2x}}\\hspace{1em}\\text{ ...as required}\\\\[12pt]\n  &=\\text{R.H.S.}\n  \\end{align*}\n  $$\n\n- We can replace $12\\log_x2$ with the R.H.S. of the identity from part (a)\n\n  $$\n  \\begin{align*}\n  \\log_2x&=8-12\\log_x2\\\\[6pt]\n  \\log_2x&=8-\\frac{12}{\\log_2x}\\tag*{\\textbf{\\textcolor{black}{(M1)}}}\n  \\end{align*}\n  $$\n\n  We now multiply each side by $\\log_2x$ and then rearrange such that the R.H.S. is equal to $0$\n\n  $$\n  \\begin{align*}\n  (\\log_2x)^2&=8\\log_2x-12\\\\[6pt]\n  (\\log_2x)^2-8\\log_2x+12&=0\\tag*{\\textbf{\\textcolor{black}{(M1)}}}\n  \\end{align*}\n  $$\n\n  This is a hidden quadratic equation.  If we replace $\\log_2$ with a variable, say $a$, we get\n\n  $$\n  \\begin{align*}\n  a^2-8a+12&=0\n  \\end{align*}\n  $$\n\n  Let's solve this by factorising.\n\n  $$\n  \\begin{align*}\n  (a-2)(a-6)&=0    \n  \\end{align*}\n  $$\n\n  Therefore the solutions are\n\n  $$\n  \\begin{align*}\n  a-2&=0&\\text{and}&&a-6=0\\\\[6pt]\n  a&=2&&& a=6\n  \\end{align*}\n  $$\n\n  Recall $a=\\log_2x$, therefore the solutions become\n\n  $$\n  \\begin{align*}\n  \\log_2x&=2&&&\\log_2x=6\\tag*{\\textbf{\\textcolor{black}{A1}}}\n  \\end{align*}\n  $$\n\n  Converting each to exponential form, we get\n\n  $$\n  \\begin{align*}\n  x&=2^2&&&x=2^6\\\\[6pt]\n  &\\hspace{-0.8em}\\answer{x=4}&\\hspace{0.3em}&&\\answer{x=64}\\tag*{\\textbf{\\textcolor{black}{A1}}}\n  \\end{align*}\n  $$\n\n",
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 8',
    content:
      'Let $f(x) = 0.2e^{x+2} - 4$, for $-3 \\leq x \\leq 2$.\n\n- On the following grid, sketch the graph of $y = f(x)$. <span class="marks">[3]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/b7400009-b3d5-4424-8dfe-4781fa255590/images/4d1c7bf9-8d2a-4f7a-945e-f582b73039b2/219ede634589aee775d4d590dd79b30ff5c63914.svg)\n\n\n- Find the coordinates of:\n  \n  - the $x$-intercept;\n  - the $y$-intercept. <span class="marks">[2]</span>\n\n\n\nThe graph of $f$ is reflected in the $x$-axis, then translated 1 unit in the direction of the positive $x$-axis and 2 units in the direction of the positive $y$-axis to obtain the graph of a function $g$.\n\n- Find $g(x)$. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- If we draw the graph of $y = f(x)$ for $-3 \\leq x \\leq 2$ [by using\nG.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/b7400009-b3d5-4424-8dfe-4781fa255590/images/0c8cb343-6319-4c4b-bd01-6881dfb5c2ff/a0ce7feb5a9182c2d088b3711cfba75a324b8033.svg)\n\n\n- \n  - Solving the equation $f(x) = 0$ for $x$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.2em} 0.2e^{x+2} - 4 &= 0 \\\\[6pt]\n    x &\\approx 0.996 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence the coordinates of the $x$-intercept are\n$\\answer{(0.996,0)}$\n  - Evaluating $y = f(x)$ for $x = 0$, we have\n\n    $$\n    \\begin{aligned}\n    y &= f(0) \\\\[6pt]\n    &= 0.2e^{0+2} - 4 \\hspace{0.4em} \\\\[7pt]\n    &\\approx -2.52\\end{aligned}\n    $$\n\n    Hence the coordinates of the\n$y$-intercept are\n$\\answer{(0,-2.52)}$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.5em} g(x) &= -f(x-1) + 2 \\\\[6pt]\n  &= -\\big[0.2e^{(x-1)+2} - 4\\big] + 2 \\\\[6pt]\n  &\\answer{= -0.2e^{x+1} + 6}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 9',
    content:
      '\n- Write the expression $4\\ln 2 - \\ln 8$ in the form of $\\ln k$, where\n$k \\in \\mathbb{Z}$. <span class="marks">[3]</span>\n\n- Hence, or otherwise, solve $4\\ln 2 - \\ln 8 = -\\ln (2x)$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the properties of logarithms, we have\n\n  $$\n  \\begin{aligned}\n  4\\ln 2 - \\ln 8 &= \\ln \\big(2^4\\big) - \\ln 8 \\\\[12pt]\n  &= \\ln 16 - \\ln 8 \\\\[6pt] \n  &= \\ln\\Big(\\dfrac{16}{8}\\Big) \\\\[9pt]\n  & \\answer{= \\ln 2}\\end{aligned}\n  $$\n\n- Replacing the left hand side of the equation with $\\ln 2$, we get\n\n  $$\n  \\begin{aligned}\n  4\\ln 2 - \\ln 8 &= -\\ln (2x) \\\\[12pt]\n  \\ln 2  &= -\\ln(2x) \\hspace{2.2em} \\\\[12pt]\n  -\\ln 2 &= \\ln(2x) \\\\[12pt]\n  \\ln \\big(2^{-1}\\big) &= \\ln(2x) \\\\[12pt]\n  2x &= 2^{-1} \\\\[12pt]\n  2x &= \\dfrac 1 2 \\\\[13pt]\n  &\\hspace{-0.525em} \\answer{x = \\dfrac{1}{4}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
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
      'A species of bird, thought to be extinct, was rediscovered on 14 March 1973. Through a careful protection and breeding program, the population has continued to increase since then.\nThe Department of conservation proposes that the population of birds $t$ years after 14 March 1973 can be modelled by the function $P(t)=10e^{kt}$, where $0 < k < 1$ and $t \\geq 0$.\nOn 14 March 1993 the known population of birds was 50.\n\n- Use the model to estimate the population of birds on 14 March 2023.<span class="marks">[4]</span>  \n\nIn fact, the known population of birds on 14 March 2023 was 502. A new model is proposed in which\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/ff8e3fb3-2cb7-4a68-a0dc-6336d4622a74/images/27c91424-1b2d-4877-b2f4-eb19bd8a8ab9/aa987.PNG)\n\n\n\n- Find the value of $r$.<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- 14 March 1993 is 20 years after 14 March 1973, therefore $P(20)=50$. We have\n\n  $$\n  \\begin{align*}\n  P(20) &= 10e^{20k} \\\\[8pt]\n  50 &= 10e^{20k} \\\\[8pt]\n  e^{20k} &= 5\n  \\end{align*}\n  $$\n\n  Using the numerical solver on the G.D.C. we find that $k\\approx 0.08047$. Hence our model is $P(t)=10e^{0.08047t}$.\n  14 March 2023 is 50 years after 14 March 1973, hence we calculate $P(50)$:\n\n  $$\n  \\begin{align*}\n  P(50) &= 10e^{0.08047 \\times 50} \\\\[8pt]\n  &\\hspace{-2.4em}\\tcbhighmath{P(50)\\approx559}\n  \\end{align*}\n  $$\n\n- If something increases at a constant rate, the compound interest formula applies. Using the formula for compound interest with $PV=10$, $FV=502$, $k=1$ and $n=50$, we have\n\n  $$\n  \\begin{align*}\n  FV &= PV \\times \\left(1 + \\dfrac{r}{100k}\\right)^{kn} \\\\[8pt]\n  502 &= 10 \\times \\left(1 + \\dfrac{r}{100}\\right)^{50}\n  \\end{align*}\n  $$\n\n  Using the numerical solver on the G.D.C. we find that $\\tcbhighmath{r\\approx 8.15}$\n',
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
    title: 'Question 11',
    content:
      'Solve the equation $\\log_5 x - \\log_5 4 = 2 + \\log_5 3$ for $x$.',
    markScheme:
      'Using the properties of logarithms, we get\n\n$$\n\\begin{aligned}\n\\log_5 x - \\log_5 4 &= 2 + \\log_5 3 \\\\[10pt]\n\\log_5 x - \\log_5 4 &= \\log_5 5^2 + \\log_5 3 \\\\[8pt]\n\\log_5\\dfrac{x}{4} &= \\log_5 (5^2\\hspace{-0.2em}\\cdot3)  \\\\[5pt]\n\\log_5\\dfrac{x}{4} &= \\log_5 75 \\\\[5pt]\n\\dfrac{x}{4} &= 75 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{0.55em}\\answer{x = 300}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 12',
    content:
      'Let $f(x) = e^x - 2$ and $g(x) = 3x + k$, for $x \\in \\mathbb{R}$, where\n$k$ is a constant.\n\n- Find $(g\\circ f)(x)$. <span class="marks">[2]</span>\n\n- Given that\n$\\displaystyle \\lim_{x \\rightarrow -\\infty} (g\\circ f)(x) = -4$,\nfind the value of $k$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.8em} (g\\circ f)(x) &= g(f(x)) \\\\[6pt]\n  &= g(e^x - 2) \\\\[6pt]\n  &= 3(e^x - 2) + k \\\\[6pt]\n  &\\answer{= 3e^x - 6 + k}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\lim_{x \\rightarrow -\\infty} (g\\circ f)(x) &= -4 \\hspace{6.9em} \\\\[4pt]\n  \\lim_{x \\rightarrow -\\infty}\\hspace{-0.2em}\\big[3e^x - 6 + k\\big] &= -4 \\\\[4pt]\n  3(0) - 6 + k &= -4 \\\\[9pt]\n  - 6 + k &= -4 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.2em} \\answer{k = 2}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
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
      'Find the value(s) of $x$ when\n$27^{x+2} = \\left(\\dfrac{1}{9}\\right)^{2x+4}$.',
    markScheme:
      'Using the properties of exponents, we get\n\n$$\n\\begin{aligned}\n27^{x+2} &= \\left(\\dfrac{1}{9}\\right)^{2x+4} \\\\[3pt]\n\\left(3^3\\right)^{x+2} &= \\left(\\dfrac{1}{3^2}\\right)^{2x+4} \\\\[9pt]\n3^{3x+6} &= 3^{-4x-8} \\\\[16pt]\n3x+6 &= -4x-8 \\\\[16pt]\n7x &= -14 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\answer{x = -2} \\hspace{0.5em}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 14',
    content:
      'Solve the equation $\\log_3 x - \\log_3 5 = 1 + \\log_3 4$ for $x$.',
    markScheme:
      'Using the properties of logarithms, we get\n\n$$\n\\begin{aligned}\n\\log_3 x - \\log_3 5 &= 1 + \\log_3 4 \\\\[10pt]\n\\log_3 x - \\log_3 5 &= \\log_3 3 + \\log_3 4 \\\\[8pt]\n\\log_3\\dfrac{x}{5} &= \\log_3 (3\\hspace{-0.2em}\\cdot4)  \\\\[5pt]\n\\log_3\\dfrac{x}{5} &= \\log_3 12 \\\\[5pt]\n\\dfrac{x}{5} &= 12 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{0.55em}\\answer{x = 60}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 15',
    content:
      'Find the values of $x$ when\n$25^{x^2-2x} = \\left(\\dfrac{1}{125}\\right)^{4x+2}$.',
    markScheme:
      'Using the properties of exponents, we get\n\n$$\n\\begin{aligned}\n25^{x^2-2x} &= \\left(\\dfrac{1}{125}\\right)^{4x+2} \\\\[3pt]\n\\left(5^2\\right)^{x^2-2x} &= \\left(\\dfrac{1}{5^3}\\right)^{4x+2} \\\\[9pt]\n5^{2x^2-4x} &= 5^{-12x-6} \\\\[16pt]\n2x^2 - 4x &= -12x-6 \\\\[16pt]\nx^2 - 2x &= -6x - 3 \\\\[16pt]\nx^2 + 4x + 3 &= 0 \\\\[17pt]\n(x+3)(x+1) &= 0 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{3.45em}\\answer{x = -3,-1}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 16',
    content:
      'It has been suggested that the number of visits (the number of hits) to\na newly launched website can be modelled by an equation of the form\n$H = aN^b$, where $H$ is the number of hits in each month,\n$N$ is the month number, $a$ and $b$ are constants.\nTo test this model, a new website was created and the number of hits in\neach of the first $10$ months were recorded.\nThe results are shown in the following table for $N = 1$ and $N = 2$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b778125-a3b6-46f0-ba11-0391255a023c/images/657fe392-578d-4f19-9a02-b8cc653cd7ee/bc28e82540342d957840e8bc6479dc4995148f25.svg)\n\n\n\n- \n  - Write down the value of $a$.\n  - Find the value of $b$, giving your answer to five significant\nfigures. <span class="marks">[4]</span>\n\n\n- Use this model to estimate the number of hits in the\n$8$th month. Give\nyour answer to the nearest integer. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- \n  - Substituting $H = 32$ and $N = 1$ in the equation $H = aN^b$, we\nhave\n\n    $$\n    \\begin{aligned}\n    32 &= a(1)^b \\hspace{2.45em}  \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\answer{a = 32} \\hspace{3.2em}\n    $$\n\n  - Substituting $H = 100$ and $N = 2$ in the equation $H = 32N^b$\nand solving the resulting equation for $b$, we get\n\n    $$\n    \\begin{aligned}\n    100 &= 32(2)^b \\\\[6pt]\n    b &= \\log_2\\left(\\dfrac{100}{32}\\right) \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\answer{b \\approx 1.6439} \\hspace{1.3em}\n    $$\n\n\n- Evaluating $H = 32\\hspace{0.05em}Y^{1.6439}$ for $N = 8$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.25em} H &= 32(8)^{1.6439} \\\\[8pt]\n  &\\answer{\\approx 977}\\end{aligned}\n  $$\n\n',
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
      'Let $f(x) = \\dfrac{\\ln(x+2)}{2}$, for $x > -2$. The diagram below shows\npart of the graph of $f$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/5ca4f0d8-2c1b-4539-b90a-140704aebde0/images/41cb6db4-c952-44a9-a5d0-dc5fd6907d15/0b26b0e195f4a087c10216491d624f903712efff.svg)\n\n\n\n- Find the coordinates of:\n  \n  - the $x$-intercept;\n  - the $y$-intercept. <span class="marks">[2]</span>\n\n\n- Find the equation of the vertical asymptote to the graph of $f$.\n<span class="marks">[2]</span>\n\n- Find the area of the region enclosed by the graph of $f$, the\n$x$-axis and\nthe $y$-axis. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - Solving the equation $f(x) = 0$ for $x$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.8em} \\dfrac{\\ln(x+2)}{2} &= 0 \\\\[4pt]\n    x &= -1 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence the coordinates of the $x$-intercept are\n$\\answer{(-1,0)}$\n  - Evaluating $f(x)=\\dfrac{\\ln(x+2)}{2}$ for $x = 0$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.4em} f(0) &= \\dfrac{\\ln 2}{2} \\\\[8pt] \n    &\\approx 0.347\\end{aligned}\n    $$\n\n    Hence the coordinates of the\n$y$-intercept are\n$\\answer{(0,0.347)}$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\lim_{x \\rightarrow 0^+} \\ln x &= -\\infty \\hspace{3em} \\\\[7pt]\n  \\lim_{x \\rightarrow -2^+} \\ln (x+2) &= -\\infty \\\\[6pt]\n  \\lim_{x \\rightarrow -2^+} f(x) &= -\\infty \\\\\n  \\end{aligned}\n  $$\n\n  Hence\nthe equation of the vertical asymptote is\n$\\answer{x = -2}$\n- The area of the region enclosed by the graph of $f$, the $x$-axis\nand the $y$-axis is\n\n  $$\n  \\begin{aligned}\n  \\hspace{10em} A &= \\int_{-1}^0 \\dfrac{\\ln(x+2)}{2}\\,\\mathrm{d}x \\\\[8pt]\n  &\\answer{\\approx 0.193 \\text{ units}^2} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n',
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
      'The temperature of a chocolate is given by the equation\n\n$$\n%60 \\hspace{0.1em} e^{-0.1t} + 20\nT(t) = A \\left( 2^{-kt} \\right) + B\n$$\n\nwhere $A$ and $B$ and $k$ are constants, $k>0$, $T$ is measured in degrees Celsius and $t$ is the number of minutes since the chocolate was served.\nIt is known that the initial temperature is $84^\\circ$ and the temperature at time $t=\\dfrac{1}{k}$ is $52^\\circ$.\n\n- Show that $A=64$ and $B=20$. <span class="marks">[2]</span>  \n\nIt took $40$ minutes to get a temperature of $23^\\circ$.\n\n- Find the value of $k$.<span class="marks">[2]</span>\n\n- Find the number of minutes it takes to get a temperature of $21^\\circ$.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Since the initial temperature is $84^\\circ$, we obtain\n\n  $$\n  \\begin{align*}\n  T(0) &= A \\left(2^{-k(0)}\\right) +  B \\\\[7pt]\n  84 &= A + B \\hspace{2em}\\textcolor{red}{[1]} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  Evaluating $T$ at $t=\\dfrac{1}{k}$, we get\n\n  $$\n  \\begin{align*}\n  T\\left(\\dfrac{1}{k}\\right) &= A \\left(2^{-k/k}\\right) +  B \\tag*{\\textbf{A1}} \\\\[7pt]\n  52 &= \\dfrac{A}{2} + B \\hspace{2em}\\textcolor{red}{[2]} \\\\[-10pt]\n  \\end{align*}\n  $$\n\n  To find $A$ take the difference $\\textcolor{red}{[2]}-\\textcolor{red}{[1]}$, we get\n\n  $$\n  \\begin{align*}\n  &\\hspace{-0.75em} \\answer{A = 64}  \\\\[-10pt]\n  \\end{align*}\n  $$\n\n  Finally, using $\\textcolor{red}{[1]}$, we get\n\n  $$\n  \\begin{align*}\n  &\\hspace{-0.8em} \\answer{B = 20} \n  \\end{align*}\n  $$\n\n- Solving for $k$ in the equation $T(40)=24$, we obtain\n\n  $$\n  \\begin{align*}\n  64 \\left(2^{-k(40)}\\right) + 20 &= 23 \\tag*{\\textbf{M1}}\\\\[7pt]\n  &=0.11037...\\\\[6pt]\n  &\\hspace{-0.5em}\\tcbhighmath{ k = 0.110} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Solving for $t$, $T(t)=21$, we obtain\n\n  $$\n  \\begin{align*}\n  64 \\left( 2^{-0.110t} \\right) + 20 &= 21 \\tag*{\\textbf{M1}}\\\\[9pt]\n  &=54.545...\\\\[6pt]\n  &\\hspace{-0.5em}\\tcbhighmath{ t = 54.5\\,\\text{minutes}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
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
    title: 'Question 19',
    content: 'Solve the equation $\\log_3(x^2-4x+4) = 1 + \\log_3(x-2)$.',
    markScheme:
      'Using the properties of logarithms, we get\n\n$$\n\\begin{aligned}\n\\log_3(x^2-4x+4) &= 1 + \\log_3(x-2) \\\\[6pt]\n\\log_3(x^2-4x+4) &= \\log_3 3 + \\log_3(x-2) \\\\[6pt]\n\\log_3(x^2-4x+4) &= \\log_3(3x-6) \\\\[6pt]\nx^2-4x+4 &= 3x-6 \\\\[6pt]\nx^2-7x+10 &= 0 \\\\[7pt]\n(x-2)(x-5) &= 0 \\\\[7pt]\nx-5 &= 0 \\hspace{3em} [\\text{since $x - 2 > 0$}] \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\answer{x=5} \\hspace{3.15em}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 20',
    content: 'Solve the equation $\\log_2(x^2-2x+1) = 1 + \\log_2(x-1)$.',
    markScheme:
      'Using the properties of logarithms, we get\n\n$$\n\\begin{aligned}\n\\log_2(x^2-2x+1) &= 1 + \\log_2(x-1) \\\\[6pt]\n\\log_2(x^2-2x+1) &= \\log_2 2 + \\log_2(x-1) \\\\[6pt]\n\\log_2(x^2-2x+1) &= \\log_2(2x-2) \\\\[6pt]\nx^2-2x+1 &= 2x-2 \\\\[6pt]\nx^2-4x+3 &= 0 \\\\[7pt]\n(x-1)(x-3) &= 0 \\\\[7pt]\nx-3 &= 0 \\hspace{3em} [\\text{$x\\neq1$, since $\\log_20$}]\\end{aligned}\n$$\n\n\n$$\n\\answer{x = 3} \\hspace{3.15em}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 21',
    content: 'Solve $\\log_6(x) + \\log_6(x-5) = 2$, for $x > 5$.',
    markScheme:
      'Using the properties of logarithms, we get\n\n$$\n\\begin{aligned}\n\\log_6(x) + \\log_6(x-5) &= 2 \\\\[6pt]\n\\log_6(x(x-5)) &= \\log_6 6^2 \\\\[5pt]\n\\log_6 (x^2-5x) &= \\log_6 36 \\\\[5pt]\nx^2-5x &= 36 \\\\[5pt]\nx^2 - 5x - 36 &= 0 \\\\[6pt]\n(x + 4)(x - 9) &= 0 \\\\[6pt]\nx - 9 &= 0 \\hspace{3em} [\\text{since $x + 4 > 0$}]\\end{aligned}\n$$\n\n\n$$\n\\answer{x = 9} \\hspace{1.6em}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 22',
    content:
      'The amount, in milligrams, of a medicinal drug in the body $t$ hours after it is injected is given by\n\n$$\n\\begin{align*}\n    D(t)=240e^{-kt}\n\\end{align*}\n$$\n\nWhere $k>0$ and $t\\geq 0$. Before the injection, it is assumed the amount of drug in the body is zero.\nA patient is to be injected with the drug and, for this patient, it is known that it takes $5$ hours for the amount of drug remaining in the body to have decreased by $65\\%$ of the initial dose.\nThe patient is regularly checked and is allowed to go home when the amount of drug remaining in the body is $10\\%$, or less, of the initial dose.\nThe initial dose is given to the patient at $9:00\\,$am.\nUse this model to estimate, to the nearest hour, the earliest time the patient will be allowed to go home.',
    markScheme:
      'This model has a fixed value of $k$. In order to use the model we must find $k$.\nFirst, we can find the initial amount of the drug injected into the patient, this occurs when $t=0$\n\n$$\n\\begin{align*}\nD(0)&=240e^{-k(0)}\\\\[6pt]\nD(0)&=240\n\\end{align*}\n$$\n\nFive hours later, $t=5$, we are told that $100\\%-65\\%=35\\%$ of the initial $240\\text{ mg}$ remains.\nWe can use this to find $k$.\n\n$$\n\\begin{align*}\n0.35\\times240&=240e^{-5k}\\tag*{\\textbf{\\textcolor{black}{(M1)}}}\\\\[6pt]\n0.35&=e^{-5k}\\\\[6pt]\n\\ln{0.35}&=\\ln e^{-5k}\n\\end{align*}\n$$\n\nUsing the log law $\\log_ax^m=m\\log_ax$, we get\n\n$$\n\\begin{align*}\n\\ln{0.35}&=-5k\\ln e\n\\end{align*}\n$$\n\nSince $\\ln e=1$, we can simplify the equation and solve for $k$.\n\n$$\n\\begin{align*}\n\\ln{0.35}&=-5k\\\\[6pt]\nk&=\\frac{\\ln{0.35}}{-5}\\\\[6pt]\n&=0.2099\\dots\\tag*{\\textbf{\\textcolor{black}{A1}}}\n\\end{align*}\n$$\n\nWe can now write out the model with out value of $k$\n\n$$\n\\begin{align*}\n    D(t)&=240e^{-0.2099...t}\n\\end{align*}\n$$\n\nWe need to find $t$ when the drug remaining in the body is equal to $0.10\\times240=24\\text{ mg}$.\nHence we need to solve the following equation\n\n$$\n\\begin{align*}\n24&=240e^{-0.2099\\dots t}\\tag*{\\textbf{\\textcolor{black}{(M1)}}}\n\\end{align*}\n$$\n\nWe can do this graphically by sketching the function $y=D(t)$ and the horizontal line $y=24$\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/557cb4b2-cf52-4e41-839f-d59ccec63164/images/c8cc79ea-577b-410b-8eae-fb745656bc8d/AA1284.JPEG)\n\n\nThe $x-$coordinate of the intersection point is the solution.\nAlthough a calculator method is preferred, an algebraic approach is also included in case you attempted it that way\n\n$$\n\\begin{align*}\n0.1&=e^{-0.2099\\dots t}\\\\[6pt]\n\\ln{0.1}&=-0.2099\\dots t\\\\[6pt]\nt&=\\frac{\\ln{0.1}}{-0.2099\\dots}\\\\[6pt]\nt&=10.96\\dots\\tag*{\\textbf{\\textcolor{black}{A1}}}\\\\[6pt]\nt&=11 \\hspace{1em}\\text{to the nearest hour}\n\\end{align*}\n$$\n\nConverting the answer to a time we get\n\n$$\n\\begin{align*}\n\\text{9:00 + 11 hours = 20:00}\n\\end{align*}\n$$\n\nTherefore the earliest time, to the nearest hour, the patient will be allowed to go home is\n\n$$\n\\begin{align*}\n    \\answer{\\text{20:00 or 8:00\\,pm}}\\tag*{\\textbf{\\textcolor{black}{A1}}}\n\\end{align*}\n$$\n',
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
    title: 'Question 23',
    content:
      'A geometric sequence, with common ratio $r$, has a first term of $81$. The sum of the first four terms of the sequence is $195$.\n\n- \n  - Find $r$.\n  - Hence, find $G_n$, the sum of the first $n$ terms of the geometric sequence. <span class="marks">[3]</span>\n\n\n\nThe first three terms of an arithmetic sequence, with a common difference of $d$, are $\\log 96, \\log 48$ and $\\log24$.\n\n- Find $d$ in the form $p\\log q$ where $p, q \\in \\mathbb{Z}$.<span class="marks">[2]</span>  \n\n$A_n$ is the sum of the first $n$ terms of the arithmetic sequence.\n\n- Show that $A_n=\\log{\\left(3^n\\times\\left(\\sqrt{2}\\right)^{11n-n^2}\\right)}$.<span class="marks">[5]</span>\n\n- Find the maximum value of $n$ such that $\\left|G_n\\right|>\\left|A_n\\right|$.<span class="marks">[3]</span>\n\n',
    markScheme:
      "\n- \n  - From the given information we know $u_1=81$ and $S_4=195$.\n    Using the formula for the sum of a geometric sequence we can form an equation and then solve for $r$.\n\n    $$\n    \\begin{align*}\n        S_n&=\\frac{u_1(1-r^n)}{1-r}\\\\[12pt]\n        S_4&=\\frac{u_1(1-r^4)}{1-r}\\\\[12pt]\n        195&=\\frac{81(1-r^4)}{1-r}\\tag*{\\textbf{(M1)}}\n    \\end{align*}\n    $$\n\n    Using a G.D.C. we get\n\n    $$\n    \\begin{align*}\n        r&=0.6666...\\\\[6pt]\n        r&=\\answer{\\dfrac{2}{3}}\\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Using the answer from (a) (i) and the formula for the sum of the first $n$ terms of a geometric series we can write the general term for $G_n$ as\n\n    $$\n    \\begin{align*}\n        G_n&=\\frac{81(1-(\\frac{2}{3})^n)}{1-\\frac{2}{3}}\\\\[12pt]\n        &=\\frac{81(1-(\\frac{2}{3})^n)}{\\frac{1}{3}}\\\\[12pt]\n        &=81\\left(1-\\left(\\tfrac{2}{3}\\right)^n\\right)\\times3\\\\[6pt]\n        &=\\answer{243\\left(1-\\left(\\tfrac{2}{3}\\right)^n\\right)}\\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- In an arithmetic sequence, there is a common difference between terms.\n\n  $$\n  \\begin{align*}\n  d&=u_2 - u_1\n  \\end{align*}\n  $$\n\n  Substituting the given values for $u_1$ and $u_2$ we get\n\n  $$\n  \\begin{align*}\n  d&=\\log 48-\\log96\\tag*{\\textbf{(M1)}}\\\\[6pt]\n  d&=\\log\\left(\\frac{48}{96}\\right)\\\\[12pt]\n  d&=\\log \\frac{1}{2}\\\\[12pt]\n  d&=\\log 2^{-1}\\\\[6pt]\n  d&=\\answer{-\\log 2}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The formula for sum of an arithmetic sequence is\n\n  $$\n  \\begin{align*}\n      S_n&=\\frac{n}{2}(2u_1+(n-1)d)\n  \\end{align*}\n  $$\n\n  Substituting $u_1=\\log 96$ and $d=-\\log 2$\n\n  $$\n  \\begin{align*}\n      A_n&=\\frac{n}{2}(2\\log 96+(n-1)(-\\log 2))\\tag*{\\textbf{(M1)}}\\\\[6pt]\n      &=\\frac{n}{2}(\\log96^2-(n-1)\\log 2)\n  \\end{align*}\n  $$\n\n  Applying logarithm rules we get\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{(M1)}}\\\\\n  &=\\frac{n}{2}(\\log96^2-\\log2^{(n-1)})\\\\[12pt]\n  &=\\frac{n}{2}\\log \\frac{96^2}{2^{(n-1)}}\\\\[12pt]\n  &=\\log\\left(\\frac{96^2}{2^{(n-1)}}\\right)^{\\frac{n}{2}}\\\\[12pt]\n  &=\\log\\sqrt{\\left(\\frac{96^2}{2^{(n-1)}}\\right)^n}\\tag*{\\textbf{A1}}\\\\[12pt]\n  &=\\log\\left(\\frac{\\sqrt{96^2}}{\\sqrt{2^{(n-1)}}}\\right)^n\\\\[12pt]\n  &=\\log{\\left(\\frac{96^n}{(\\sqrt{2})^{n^2-n}}\\right)}\n  \\end{align*}\n  $$\n\n  Looking at the form of the answer we can attempt to rewrite the denominator using by negating its exponent\n\n  $$\n  \\begin{align*}\n  &=\\log(96^n\\times(\\sqrt{2})^{n-n^2})\n  \\end{align*}\n  $$\n\n  Let's rewrite $96$ as a product of prime factors\n\n  $$\n  \\begin{align*}\n  &=\\log((2^5\\times3)^n\\times(\\sqrt{2})^{n-n^2})\\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n  Then we'll rewrite $2^5$ as a base of $\\sqrt{2}$\n\n  $$\n  \\begin{align*}\n  &=\\log(((\\sqrt{2})^{10}\\times3)^n\\times(\\sqrt{2})^{n-n^2})\n  \\end{align*}\n  $$\n\n  Now we can distribute the power of $n$ and then use exponent laws again to simplify to the required form.\n\n  $$\n  \\begin{align*}\n  &=\\log((\\sqrt{2})^{10n}\\times3^n\\times(\\sqrt{2})^{n-n^2})\\tag*{\\textbf{A1}}\\\\[6pt]\n  &=\\log(3^n\\times(\\sqrt{2})^{10n+n-n^2})\\\\[6pt]\n  &=\\answer{\\log(3^n\\times(\\sqrt{2})^{11n-n^2})}\\hspace{3em}\\text{as required.}\n  \\end{align*}\n  $$\n\n- Using the functions from (a) (ii) and (c) we can form an inequality which we can solve for $n$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{red}{\\left|243\\left(1-\\left(\\tfrac{2}{3}\\right)^n\\right)\\right|}>\\textcolor{blue}{\\left|\\log(3^n\\times(\\sqrt{2})^{11n-n^2})\\right|}\\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  We can sketch the $\\textcolor{red}{\\text{L.H.S.}}$ and the $\\textcolor{blue}{\\text{R.H.S.}}$ on a G.D.C. to get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/e23a1ae5-5d5c-482f-938e-73e0ce7e1e6c/images/b8df9ab9-e17d-4209-a669-3c2f3e7c07be/AA1275.JPEG)\n\n\n  Hence when\n\n  $$\n  \\begin{align*}\n      n<47.88...\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  then $|G_n|>|A_n|$.\n  As $n$ represents the term value, we therefore round down to the nearest integer value.\n  Hence $\\answer{n=47}$.\n\n  $$\n  \\begin{align*}\n   \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n",
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
    title: 'Question 24',
    content:
      'A population of endangered snow leopards, $P$, can be modelled by the\nequation\n\n$$\n\\begin{aligned}\nP_t = P_0e^{kt},\\end{aligned}\n$$\n\nwhere $P_0$ is the initial population,\nand $t$ is measured in years.\n\n- After one year, it is estimated that $\\dfrac{P_1}{P_0} = 0.93$.\n  \n  - Find the value of $k$.\n  - Interpret the meaning of the value of $k$. <span class="marks">[3]</span>\n\n\n- Find the least number of whole years for which\n$\\dfrac{P_t}{P_0} < 0.50$. <span class="marks">[5]</span>\n\n',
    markScheme:
      '\n- \n  - Substituting $t = 1$ in the equation $P_t = P_0e^{kt}$, we have\n\n    $$\n    \\begin{aligned}\n    P_1 &= P_0e^{k(1)} \\hspace{1em} \\\\[6pt]\n    \\dfrac{P_1}{P_0} &= e^k \\\\[6pt]\n    \\hspace{0.1em} 0.93 &= e^k \\\\[11pt]\n    k &= \\ln 0.93 \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\hspace{0.8em} \\answer{k \\approx -0.0726}\n    $$\n\n  - $\\answer{\\text{The rate at which the population of leopards exponentially decrease}}$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\dfrac{P_t}{P_0} &< 0.50 \\\\[8pt]\n  e^{-0.0726t} &< 0.50 \\\\[12pt]\n  -0.0726t &< \\ln 0.50 \\\\[6pt]\n  t &> -\\dfrac{\\ln 0.50}{0.0726} \\\\[8pt]\n  t &> 9.55 \\\\\n  \\end{aligned}\n  $$\n\n  Hence the least number of whole years\nfor which $\\dfrac{P_t}{P_0} < 0.50$ is\n$\\answer{t = 10}$\n',
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
    title: 'Question 25',
    content: 'Solve the equation $9^x + 2\\cdot3^{x+1} = 1$.',
    markScheme:
      'If we substitute $y = 3^x$ in the equation $9^x + 2\\cdot3^{x+1} = 1$, we\nhave\n\n$$\n\\begin{aligned}\n\\left(3^x\\right)^2 + 6\\cdot3^x - 1 &= 0 \\\\[6pt]\ny^2 + 6y - 1 &= 0\\end{aligned}\n$$\n\nHence, using the quadratic formula, we\nget\n\n$$\n\\begin{aligned}\n\\hspace{13em} y &= \\dfrac{-6 + \\sqrt{6^2 - 4(1)(-1)}}{2(1)} \\hspace{2em} [\\text{since $y = 3^x > 0$}] \\\\[4pt]\n&= \\dfrac{-6 + 2\\sqrt{10}}{2} \\\\[12pt]\n&= -3 + \\sqrt{10}\\end{aligned}\n$$\n\nHence, using the properties of\nlogarithms, we obtain\n\n$$\n\\begin{aligned}\n3^x &= -3 + \\sqrt{10} \\hspace{2.6em} \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{0.3em} \\answer{x = \\log_3(-3 + \\sqrt{10})}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 26',
    content:
      '\n- Write down the domain and range of the logarithmic function\n$y = \\log_a x$\nwhere $a > 0$ and $a \\neq 1$. <span class="marks">[2]</span>\n\n- Given that $\\log_{x^2} y = 9 \\log_y (x^2)$, find all the possible\nexpressions\nof $y$ as a function of $x$. <span class="marks">[6]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{domain}:\\hspace{0.75em}&\\hspace{0.525em}\\answer{(0,\\infty)} \\hspace{1.8em} \\\\[8pt]\n  \\text{range}:\\hspace{0.75em}&\\hspace{0.525em}\\answer{\\mathbb{R}}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we get\n\n  $$\n  \\begin{aligned}\n  \\log_{x^2} y &= 9 \\log_y (x^2) \\\\[11pt]\n  \\hspace{4em} \\dfrac{\\ln y}{\\ln (x^2)} &= \\dfrac{9\\ln (x^2)}{\\ln y} \\\\[6pt]\n  \\dfrac{\\ln y}{2\\ln x} &= \\dfrac{18\\ln x}{\\ln y} \\\\[12pt]\n  (\\ln y)^2 &= (6\\ln x)^2 \\\\[16pt]\n  \\ln y &= \\pm 6\\ln x \\\\[16pt]\n  \\ln y &= \\ln (1/x^6)\\hspace{0.25em}\\text{ or }\\hspace{0.25em}\\ln (x^6) \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2.2em} \\answer{y = \\dfrac{1}{x^6}\\hspace{0.25em}\\text{ or }\\hspace{0.25em}x^6}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 27',
    content:
      'Consider $f(x) = \\log_k(8x-2x^2)$, for $0 < x < 4$, where $k > 0$.\nThe equation $f(x) = 3$ has exactly one solution. Find the value of $k$.',
    markScheme:
      'If we rewrite the equation $f(x) = 3$ in the form $ax^2 + bx + c = 0$,\nwe have\n\n$$\n\\begin{aligned}\n\\hspace{3em} \\log_k(8x-2x^2) &= 3 \\\\[6pt]\n8x-2x^2 &= k^3 \\\\[6pt]\n0 &= 2x^2 - 8x + k^3\\end{aligned}\n$$\n\nHence the quadratic function\n$q(x) = 2x^2 - 8x + k^3$ has two equal roots.\nTherefore we get\n\n$$\n\\begin{aligned}\n\\hspace{5.1em} [\\text{discriminant of $q$}] &= 0 \\\\[6pt]\n(-8)^2 - 4(2)(k^3) &= 0 \\hspace{3em}  [\\triangle  = b^2 - 4ac]  \\\\[6pt]\n64 - 8k^3 &= 0 \\\\[6pt]\n8 - k^3 &= 0 \\\\[6pt]\nk^3 &= 8 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{3.3em} \\answer{k=2}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 28',
    content:
      'The following table shows values of $\\ln x$ and $\\ln y$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/3a04f4a1-a826-48f2-bca8-98fd950a79ca/images/3da98a42-5a0a-4c77-b19c-6a43e2e50c69/8c64f77af5ec93279ceb96452d0a87f353ec5871.svg)\n\n\nThe relationship between $\\ln x$ and $\\ln y$ can be modelled by the\nregression equation $\\ln y = a \\ln x + b$.\n\n- Find the value of $a$ and the value of $b$. <span class="marks">[3]</span>\n\n- Use the regression equation to estimate the value of\n$y$  when\n$x = 4.12$. <span class="marks">[3]</span>\n\n\nThe relationship between $x$ and $y$ can be modelled using the formula\n$y = px^q$, where $p\\neq 0$ and $q \\neq 0$, $q\\neq 1$.\n\n- Expressing $\\ln y$ in terms of $\\ln x$, find the value of\n$p$ and the value of $q$. <span class="marks">[6]</span>  \n',
    markScheme:
      '\n- $\\answer{a \\approx -0.564}$\nand  $\\answer{b \\approx 4.74}$\n[$\\text{by using G.D.C.}$]\n- Substituting $x = 4.12$ in the equation\n$\\ln y = -0.564\\ln x + 4.74$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.8em} \\ln y &= -0.564\\ln (4.12) + 4.74 \\\\[6pt]\n  y &= e^{-0.564\\ln (4.12) + 4.74} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{y \\approx 51.5} \\hspace{6em}\n  $$\n\n- Using the properties of logarithms, we have\n\n  $$\n  \\begin{aligned}\n  \\ln y &= -0.564\\ln x + 4.74 \\\\[6pt]\n  \\ln y &= \\ln x^{-0.564} + \\ln e^{4.74} \\hspace{0.5em} \\\\[6pt]\n  \\ln y &= \\ln\\hspace{-0.15em}\\big([x^{-0.564}][e^{4.74}]\\big) \\\\[6pt]\n  y &= [e^{4.74}][x^{-0.564}] \\\\[6pt]\n  y &= 114\\hspace{0.05em}x^{-0.564} \\\\\n  \\end{aligned}\n  $$\n\n  Hence we obtain\n$\\answer{p \\approx 114}$\nand\n$\\answer{q \\approx -0.564}$\n',
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
    title: 'Question 28',
    content:
      'The following table shows values of $\\ln x$ and $\\ln y$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/3a04f4a1-a826-48f2-bca8-98fd950a79ca/images/3da98a42-5a0a-4c77-b19c-6a43e2e50c69/8c64f77af5ec93279ceb96452d0a87f353ec5871.svg)\n\n\nThe relationship between $\\ln x$ and $\\ln y$ can be modelled by the\nregression equation $\\ln y = a \\ln x + b$.\n\n- Find the value of $a$ and the value of $b$. <span class="marks">[3]</span>\n\n- Use the regression equation to estimate the value of\n$y$  when\n$x = 4.12$. <span class="marks">[3]</span>\n\n\nThe relationship between $x$ and $y$ can be modelled using the formula\n$y = px^q$, where $p\\neq 0$ and $q \\neq 0$, $q\\neq 1$.\n\n- Expressing $\\ln y$ in terms of $\\ln x$, find the value of\n$p$ and the value of $q$. <span class="marks">[6]</span>  \n',
    markScheme:
      '\n- $\\answer{a \\approx -0.564}$\nand  $\\answer{b \\approx 4.74}$\n[$\\text{by using G.D.C.}$]\n- Substituting $x = 4.12$ in the equation\n$\\ln y = -0.564\\ln x + 4.74$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.8em} \\ln y &= -0.564\\ln (4.12) + 4.74 \\\\[6pt]\n  y &= e^{-0.564\\ln (4.12) + 4.74} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{y \\approx 51.5} \\hspace{6em}\n  $$\n\n- Using the properties of logarithms, we have\n\n  $$\n  \\begin{aligned}\n  \\ln y &= -0.564\\ln x + 4.74 \\\\[6pt]\n  \\ln y &= \\ln x^{-0.564} + \\ln e^{4.74} \\hspace{0.5em} \\\\[6pt]\n  \\ln y &= \\ln\\hspace{-0.15em}\\big([x^{-0.564}][e^{4.74}]\\big) \\\\[6pt]\n  y &= [e^{4.74}][x^{-0.564}] \\\\[6pt]\n  y &= 114\\hspace{0.05em}x^{-0.564} \\\\\n  \\end{aligned}\n  $$\n\n  Hence we obtain\n$\\answer{p \\approx 114}$\nand\n$\\answer{q \\approx -0.564}$\n',
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
    title: 'Question 29',
    content:
      'Let $f(x) = e^{3\\sin \\left(\\frac{\\pi x}{4}\\right)}$, for $x > 0$.\nThe $k$th maximum point on the graph of $f$ has $x$-coordinate $x_k$,\nwhere $k \\in \\mathbb{Z}^+$.\n\n- Given that $x_{k+1} = x_k + d$, find $d$. <span class="marks">[4]</span>\n\n- Hence find the value of $n$ such that\n$\\displaystyle \\sum_{k=1}^n x_k = 992$. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- If we draw the graph of $y= f(x)$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/bd4c0fbe-80c8-4f0f-b563-49e7510420be/images/885e8a5e-4313-4a8b-a394-adbac59e4041/97f38ce996ffbe7f9b884196663bd4ac3db522d5.svg)\n\n\n  Hence, using the $x$-coordinates of the points A$(2,20.1)$ and\nB$(10,20.1)$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.7em} x_2 &= x_1 + d \\\\[6pt]\n  10 &= 2 + d \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{d = 8}\n  $$\n\n- We have an arithmetic sequence with the first term $x_1 = 2$ and the\ncommon difference $d = 8$.\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2x_1+(n-1)d)$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  \\sum_{k=1}^n x_k &= 992 \\\\[6pt]\n  S_n &= 992 \\hspace{3em} [\\text{with $x_1 = 2$ \\& $d = 8$}] \\\\[13pt]\n  \\hspace{4em} \\dfrac{n}{2}(2(2)+(n-1)(8)) &= 992 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.1em} \\answer{n = 16} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    type: 'ERQ',
    title: 'Question 30',
    content:
      'A study records the number of chickens and ducks on a farm after $t$\nyears, starting on $1$ January, $1997$.\nLet $c$ be the number of chickens on the farm after $t$ years. The\nfollowing table shows the number of chickens after $t$ years.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/eddb9af6-2979-4663-b356-aae66d82bbe2/images/ef1a9db4-9cec-44f2-968d-e7a66d2ed51f/445a139e443a870563b0c4df38d9119c2a8c93c1.svg)\n\n\nThe relationship between the variables can be modelled by the regression\nequation $c = at + b$, where $a$ and $b$ are constants.\n\n- Find the value of $a$ and the value of $b$. <span class="marks">[3]</span>\n\n- Use the regression equation to estimate the number of chickens on\nthe farm when $t = 6$. <span class="marks">[2]</span>\n\n\nLet $d$ be the number of ducks on the farm after $t$ years. The number\nof ducks can be modelled by the equation $d = 400e^{-kt}$, where $k$ is\na constant.\n\n- Find the number of ducks on the farm on $1$ January,\n$1997$. <span class="marks">[3]</span>\n\n- After six years, there are $377$ ducks on the farm. Find\nthe value of $k$. <span class="marks">[3]</span>\n\n- Find the year during which the number of chickens and ducks\nwere the same.<span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- $\\answer{a \\approx 14.9}$  and\n$\\answer{b \\approx 119}$\n[$\\text{by using G.D.C.}$]\n- Evaluating $c(t) = 14.9t + 119$ for $t = 6$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.8em} c(6) &= 14.9(6) + 119 \\\\[6pt]\n  &\\answer{\\approx 208 \\text{ chickens}}\\end{aligned}\n  $$\n\n- Evaluating $d(t) = 400e^{-kt}$ for $t = 0$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.2em} d(0) &= 400e^{-k(0)} \\\\[6pt]\n  &\\answer{= 400 \\text{ ducks}}\\end{aligned}\n  $$\n\n- Solving the equation $d(6) = 377$ for $k$, we find\n\n  $$\n  \\begin{aligned}\n  400e^{-k(6)} &= 377 \\hspace{4.9em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.1em} \\answer{k \\approx 0.00987} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Solving the equation $c(t) = d(t)$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.9em} 14.9t + 119 &= 400e^{-0.00987t} \\\\[6pt]\n  t &\\approx 15.1 \\text{ years} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence the number of chickens and ducks were the same during\n$\\answer{2012}$\n',
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
    title: 'Question 30',
    content:
      'A study records the number of chickens and ducks on a farm after $t$\nyears, starting on $1$ January, $1997$.\nLet $c$ be the number of chickens on the farm after $t$ years. The\nfollowing table shows the number of chickens after $t$ years.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/eddb9af6-2979-4663-b356-aae66d82bbe2/images/ef1a9db4-9cec-44f2-968d-e7a66d2ed51f/445a139e443a870563b0c4df38d9119c2a8c93c1.svg)\n\n\nThe relationship between the variables can be modelled by the regression\nequation $c = at + b$, where $a$ and $b$ are constants.\n\n- Find the value of $a$ and the value of $b$. <span class="marks">[3]</span>\n\n- Use the regression equation to estimate the number of chickens on\nthe farm when $t = 6$. <span class="marks">[2]</span>\n\n\nLet $d$ be the number of ducks on the farm after $t$ years. The number\nof ducks can be modelled by the equation $d = 400e^{-kt}$, where $k$ is\na constant.\n\n- Find the number of ducks on the farm on $1$ January,\n$1997$. <span class="marks">[3]</span>\n\n- After six years, there are $377$ ducks on the farm. Find\nthe value of $k$. <span class="marks">[3]</span>\n\n- Find the year during which the number of chickens and ducks\nwere the same.<span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- $\\answer{a \\approx 14.9}$  and\n$\\answer{b \\approx 119}$\n[$\\text{by using G.D.C.}$]\n- Evaluating $c(t) = 14.9t + 119$ for $t = 6$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.8em} c(6) &= 14.9(6) + 119 \\\\[6pt]\n  &\\answer{\\approx 208 \\text{ chickens}}\\end{aligned}\n  $$\n\n- Evaluating $d(t) = 400e^{-kt}$ for $t = 0$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.2em} d(0) &= 400e^{-k(0)} \\\\[6pt]\n  &\\answer{= 400 \\text{ ducks}}\\end{aligned}\n  $$\n\n- Solving the equation $d(6) = 377$ for $k$, we find\n\n  $$\n  \\begin{aligned}\n  400e^{-k(6)} &= 377 \\hspace{4.9em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{11.1em} \\answer{k \\approx 0.00987} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Solving the equation $c(t) = d(t)$ for $t$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.9em} 14.9t + 119 &= 400e^{-0.00987t} \\\\[6pt]\n  t &\\approx 15.1 \\text{ years} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence the number of chickens and ducks were the same during\n$\\answer{2012}$\n',
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
    title: 'Question 31',
    content:
      'Solve the equation $15^{4a} = 81^{a+2}$ for $a$. Express your answer in\nterms of $\\ln 3$ and $\\ln 5$.',
    markScheme:
      'Using the properties of exponents and logarithms, we get\n\n$$\n\\begin{aligned}\n15^{4a} &= 81^{a+2} \\\\[10pt]\n(3\\cdot5)^{4a} &= 3^{4(a+2)} \\\\[9pt]\n\\cancel{3^{4a}}\\hspace{-0.15em}\\cdot5^{4a} &= \\cancel{3^{4a}}\\hspace{-0.15em}\\cdot3^8 \\\\[10pt]\n5^{4a} &= 3^8 \\\\[10pt]\n\\ln 5^{4a} &= \\ln 3^8 \\\\[10pt]\n4a \\ln 5 &= 8\\ln 3\\end{aligned}\n$$\n\n\n$$\n\\hspace{2.25em}\\answer{a = \\dfrac{2\\ln 3}{\\ln 5}}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 32',
    content:
      'Solve the equation $14^{6x} = 64^{x+3}$ for $x$. Express your answer in\nterms of $\\ln 2$ and $\\ln 7$.',
    markScheme:
      'Using the properties of exponents and logarithms, we get\n\n$$\n\\begin{aligned}\n14^{6x} &= 64^{x+3} \\\\[10pt]\n(2\\cdot7)^{6x} &= 2^{6(x+3)} \\\\[9pt]\n\\cancel{2^{6x}}\\hspace{-0.15em}\\cdot7^{6x} &= \\cancel{2^{6x}}\\hspace{-0.15em}\\cdot2^{18} \\\\[10pt]\n7^{6x} &= 2^{18} \\\\[10pt]\n\\ln 7^{6x} &= \\ln 2^{18} \\\\[10pt]\n6x\\ln 7 &= 18\\ln 2\\end{aligned}\n$$\n\n\n$$\n\\hspace{1.9em}\\answer{x = \\dfrac{3\\ln 2}{\\ln 7}}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 33',
    content:
      'The brightness of a star can be measured in terms of its apparent magnitude as seen from Earth. The apparent magnitude $M$ of a star is given by the formula\n\n$$\nM = -2.5 \\log\\left(\\dfrac{F}{F_0}\\right)\n$$\n\nwhere $F$ is the observed flux density and $F_0$ is a reference flux density.\n\n- Solve for $F$ in terms of $M$.<span class="marks">[2]</span>\n\n- Suppose that $M(F_1)=1$ and $M(F_6)=6$. Find the value of $\\dfrac{F_1}{F_6}$.<span class="marks">[1]</span>\n\n\nNow, let\'s look at the difference in magnitude of two starts. Suppose that star $1$ has observed flux density of $F_1$ with magnitude $M_1$ while star $2$ has flux density $F_2$ with magnitude $M_2$.\n\n- Find an expression for the difference in magnitude $M_2-M_1$.<span class="marks">[2]</span>  \n\nThe apparent magnitude of the sun is $M_s=-26.8$ and the apparent magnitude of the full moon is $M_m=-12.7$.\n\n- Their brightness factor is $\\dfrac{F_s}{F_m}=10^{\\tfrac{a}{b}}$ where $a,b \\in \\mathbb{Q^+}$. Find $a$ and $b$.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- By applying logarithm and exponential properties, we have\n\n  $$\n  \\begin{align*}\n  M &= -2.5\\big[\\log(F)-\\log(F_0)\\big] \\tag*{\\textbf{M1}}\\\\[10pt]\n  M &= -2.5\\cdot\\log(F)+2.5\\cdot\\log(F_0) \\\\[11pt]\n  2.5\\cdot\\log(F) &= 2.5\\cdot \\log(F_0) - M \\\\[8pt]\n  \\log(F) &= \\log(F_0)- \\dfrac{M}{2.5} \\\\[7pt]\n  F &= F_0 \\cdot 10^{-\\frac{M\\rule[-1pt]{0pt}{6pt}}{2.5}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Using the previous answer, we have\n\n  $$\n  \\begin{align*}\n  \\dfrac{F_1}{F_6} &= \\dfrac{\\cancel{F_0} \\cdot 10^{-\\frac{1\\rule[-1pt]{0pt}{6pt}}{2.5}}}{\\cancel{F_0}\\cdot  10^{-\\frac{6\\rule[-1pt]{0pt}{6pt}}{2.5}}} \\\\[10pt]\n  &= \\dfrac{10^{-\\frac{1\\rule[-1pt]{0pt}{6pt}}{2.5}}}{10^{-\\frac{6\\rule[-1pt]{0pt}{6pt}}{2.5}}} \\\\[10pt]\n  &= 10^{\\frac{6\\rule[-1pt]{0pt}{6pt}}{2.5}-\\frac{1\\rule[-1pt]{0pt}{6pt}}{2.5}}\\\\[10pt]\n  &= 10^{2} \\\\[10pt]\n  &\\hspace{0.28em}\\answer{= 100} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Using logarithm properties again, we obtain\n\n  $$\n  \\begin{align*}\n  M_2-M_1 &= -2.5\\log\\left(\\dfrac{F_2}{F_0}\\right) - \\left[-2.5\\log\\left(\\dfrac{F_1}{F_0}\\right)\\right] \\\\[10pt]\n  &= -2.5\\left[\\log\\left(\\dfrac{F_2}{F_0}\\right)-\\log\\left(\\dfrac{F_1}{F_0}\\right)\\right]\\tag*{\\textbf{M1}} \\\\[10pt]\n  &= -2.5\\left[\\log\\left(\\dfrac{F_2}{F_0}\\div\\dfrac{F_1}{F_0}\\right)\\right] \\\\[10pt]\n  &= -2.5\\left[\\log\\left(\\dfrac{F_2}{F_0}\\div\\dfrac{F_1}{F_0}\\right)\\right] \\\\[10pt]\n  &\\hspace{0.27em}\\answer{= -2.5 \\log\\left(\\dfrac{F_2}{F_1}\\right)}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- From part (c), we have\n\n  $$\n  \\begin{align*}\n  -2.5 \\log\\left(\\dfrac{F_s}{F_m}\\right) &= M_s-M_m \\\\[10pt]\n  \\log\\left(\\dfrac{F_s}{F_m}\\right) &= \\dfrac{-26.8-(-12.7)}{-2.5} \\tag*{\\textbf{A1}}\\\\[10pt]\n  \\dfrac{F_s}{F_m} &=10^{\\tfrac{-14.1}{-2.5}} \\\\[10pt]\n  &\\hspace{0.28em}\\answer{a=14.1 \\text{ and }b=2.5} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
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
    type: 'ERQ',
    title: 'Question 34',
    content:
      '\n- Show that $3\\log_{a^3}x = \\log_a x$ where $a$, $x\\in \\mathbb{R}^+$.\n<span class="marks">[2]</span>  \n\nIt is given that\n$\\log_2 y + \\log_8 4x^2 + \\log_8 2x = 0$.\n\n- Express $y$ in terms of $x$. Give your answer in the form\n$y=bx^c$ where $b$, $c$ are constants.<span class="marks">[6]</span>  \n\nThe region $R$, is bounded by the graph of the function found in part\n(b), the $x$-axis, and the lines $x=1$ and $x=k$ where $k>1$. The area\nof $R$ is $\\dfrac{3}{2}$.\n\n- Find the value of $k$.<span class="marks">[4]</span>  \n',
    markScheme:
      '\n- Using the properties of logarithms, we get\n\n  $$\n  \\begin{aligned}\n  3\\log_{a^3}x &= 3 \\, \\dfrac{\\log_a x}{\\log_a a^3} \\\\[10pt]\n  &= \\cancel{3} \\,\\dfrac{\\log_a x}{\\cancel{3}} \\\\[10pt]\n  &\\answer{=\\log_a x}\\end{aligned}\n  $$\n\n- Using the properties of logarithms and part (a), we get\n\n  $$\n  \\begin{aligned}\n  \\log_2 y + \\log_8 4x^2 + \\log_8 2x  &= 0  \\\\[8pt]\n  \\log_2 y + \\log_8 8x^3 &= 0 \\\\[8pt]\n  \\log_2 y + 3 \\log_8 2x &= 0 \\\\[8pt]\n  \\log_2 y +  \\log_2 2x &= 0  \\\\[8pt]\n  \\log_2 y &= -\\log_2 2x   \\\\[8pt]\n  \\log_2 y &= \\log_2 (2x)^{-1}   \\\\[8pt]\n  &\\hspace{-0.5em}\\answer{y = \\dfrac{1}{2}x^{-1}} \\end{aligned}\n  $$\n\n- First we find the area of $R$ using integration, we have\n\n  $$\n  \\begin{aligned}\n  \\text{Area of }R &= \\int_1^k \\dfrac{1}{2} \\hspace{0.05em}x^{-1} \\, \\mathrm{d} x \\\\[8pt]\n  &= \\left[ \\dfrac{1}{2}\\ln x \\right]_1^k \\\\[8pt]\n  &= \\dfrac{1}{2}\\ln k \\\\[8pt]\n  \\dfrac{3}{2}&= \\dfrac{1}{2}\\ln k \\\\[8pt]\n  \\ln k &= 3 \\\\[8pt]\n  & \\hspace{-0.5em}\\answer{ k = e^3 } \\\\\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 34',
    content:
      '\n- Show that $3\\log_{a^3}x = \\log_a x$ where $a$, $x\\in \\mathbb{R}^+$.\n<span class="marks">[2]</span>  \n\nIt is given that\n$\\log_2 y + \\log_8 4x^2 + \\log_8 2x = 0$.\n\n- Express $y$ in terms of $x$. Give your answer in the form\n$y=bx^c$ where $b$, $c$ are constants.<span class="marks">[6]</span>  \n\nThe region $R$, is bounded by the graph of the function found in part\n(b), the $x$-axis, and the lines $x=1$ and $x=k$ where $k>1$. The area\nof $R$ is $\\dfrac{3}{2}$.\n\n- Find the value of $k$.<span class="marks">[4]</span>  \n',
    markScheme:
      '\n- Using the properties of logarithms, we get\n\n  $$\n  \\begin{aligned}\n  3\\log_{a^3}x &= 3 \\, \\dfrac{\\log_a x}{\\log_a a^3} \\\\[10pt]\n  &= \\cancel{3} \\,\\dfrac{\\log_a x}{\\cancel{3}} \\\\[10pt]\n  &\\answer{=\\log_a x}\\end{aligned}\n  $$\n\n- Using the properties of logarithms and part (a), we get\n\n  $$\n  \\begin{aligned}\n  \\log_2 y + \\log_8 4x^2 + \\log_8 2x  &= 0  \\\\[8pt]\n  \\log_2 y + \\log_8 8x^3 &= 0 \\\\[8pt]\n  \\log_2 y + 3 \\log_8 2x &= 0 \\\\[8pt]\n  \\log_2 y +  \\log_2 2x &= 0  \\\\[8pt]\n  \\log_2 y &= -\\log_2 2x   \\\\[8pt]\n  \\log_2 y &= \\log_2 (2x)^{-1}   \\\\[8pt]\n  &\\hspace{-0.5em}\\answer{y = \\dfrac{1}{2}x^{-1}} \\end{aligned}\n  $$\n\n- First we find the area of $R$ using integration, we have\n\n  $$\n  \\begin{aligned}\n  \\text{Area of }R &= \\int_1^k \\dfrac{1}{2} \\hspace{0.05em}x^{-1} \\, \\mathrm{d} x \\\\[8pt]\n  &= \\left[ \\dfrac{1}{2}\\ln x \\right]_1^k \\\\[8pt]\n  &= \\dfrac{1}{2}\\ln k \\\\[8pt]\n  \\dfrac{3}{2}&= \\dfrac{1}{2}\\ln k \\\\[8pt]\n  \\ln k &= 3 \\\\[8pt]\n  & \\hspace{-0.5em}\\answer{ k = e^3 } \\\\\n  \\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'Find the value of each of the following, giving your answer as an\ninteger.\n\n- $\\log_{10} 100$. <span class="marks">[2]</span>\n\n- $\\log_{10} 50 + \\log_{10} 2$. <span class="marks">[2]</span>\n\n- $\\log_{10} 4 - \\log_{10} 40$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the properties of logarithms, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.65em} \\log_{10} 100 &= \\log_{10} \\big(10^2\\big) \\\\[6pt]\n  &= 2\\log_{10} 10 \\\\[6pt]\n  &\\answer{= 2}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we find\n\n  $$\n  \\begin{aligned}\n  \\log_{10} 50 + \\log_{10} 2 &= \\log_{10} (50\\cdot2) \\hspace{2.4em} \\\\[6pt]\n  &= \\log_{10} 100 \\\\[6pt]\n  &\\answer{= 2}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we obtain\n\n  $$\n  \\begin{aligned}\n  \\log_{10} 4 - \\log_{10} 40 &= \\log_{10} \\bigg(\\dfrac{4}{40}\\bigg) \\hspace{2.5em} \\\\[3pt]\n  &= \\log_{10} \\bigg(\\dfrac{1}{10}\\bigg) \\\\[9pt]\n  &= \\log_{10} \\big(10^{-1}\\big) \\\\[16pt]\n  &= (-1) \\log_{10} 10 \\\\[9pt]\n  &\\answer{= -1}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Find the value of each of the following, giving your answer as an\ninteger.\n\n- $\\log_6 6$. <span class="marks">[2]</span>\n\n- $\\log_6 9 + \\log_6 4$. <span class="marks">[2]</span>\n\n- $\\log_6 72 - \\log_6 2$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- $\\answer{\\log_6 6 = 1}$\n- Using the properties of logarithms, we get\n\n  $$\n  \\begin{aligned}\n  \\log_6 9 + \\log_6 4 &= \\log_6 (9\\cdot4) \\\\[6pt]\n  &= \\log_6 36 \\\\[5pt]\n  &= \\log_6 \\big(6^2\\big) \\\\[6pt]\n  &= 2\\log_6 6 \\\\[6pt]\n  &\\answer{= 2}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we obtain\n\n  $$\n  \\begin{aligned}\n  \\log_6 72 - \\log_6 2 &= \\log_6 \\bigg(\\dfrac{72}{2}\\bigg) \\hspace{0.15em} \\\\[5pt]\n  &= \\log_6 36 \\\\[12pt]\n  &\\answer{= 2}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Let $\\log_2 a = p$, $\\log_2 b = q$, $\\log_2 c = r$. Write down the\nfollowing expressions in terms of $p$, $q$ and $r$.\n\n- $\\log_2\\Big(\\dfrac{ab}{c}\\Big)$ <span class="marks">[2]</span>\n\n- $\\log_2\\Big(\\dfrac{a^2c}{b^3}\\Big)$\n<span class="marks">[2]</span>\n\n- $\\log_a b$ <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the properties of logarithms, we get\n\n  $$\n  \\begin{aligned}\n  \\log_2\\Big(\\dfrac{ab}{c}\\Big) &= \\log_2 (ab) - \\log_2 c \\\\[6pt]\n  &= (\\log_2 a + \\log_2 b) - \\log_2 c  \\\\[10pt]\n  &\\answer{= p + q - r}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.9em} \\log_2\\Big(\\dfrac{a^2c}{b^3}\\Big) &= \\log_2 \\big(a^2c\\big) - 3\\log_2 b \\\\[6pt]\n  &= (2\\log_2 a + \\log_2 c) - 3\\log_2 b \\\\[10pt]\n  &\\answer{= 2p + r - 3q}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we obtain\n\n  $$\n  \\begin{aligned}\n  \\log_a b &= \\dfrac{\\log_2 b}{\\log_2 a} \\hspace{2em}  \\\\[6pt]\n  &\\answer{= \\dfrac{q}{p}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Let $p=\\ln 2$ and $q = \\ln 6$. Write down the following expressions in\nterms of $p$ and $q$.\n\n- $\\ln 12$ <span class="marks">[2]</span>\n\n- $\\ln 3$ <span class="marks">[2]</span>\n\n- $\\ln 48$ <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the properties of natural logarithms, we get\n\n  $$\n  \\begin{aligned}\n  \\ln 12 &= \\ln (2\\cdot6) \\\\[6pt]\n  &= \\ln 2 + \\ln 6 \\\\[6pt]\n  &\\answer{= p + q}\\end{aligned}\n  $$\n\n- Using the properties of natural logarithms, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} \\ln 3 &= \\ln \\bigg(\\dfrac{6}{2}\\bigg) \\\\[3pt]\n  &= \\ln 6 - \\ln 2 \\\\[10pt]\n  &\\answer{= q - p}\\end{aligned}\n  $$\n\n- Using the properties of natural logarithms, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.6em} \\ln 48 &= \\ln \\big(2^3\\hspace{-0.2em}\\cdot6\\big) \\\\[6pt]\n  &= 3\\ln2 +  \\ln 6 \\\\[6pt]\n  &\\answer{= 3p + q}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 5',
    content:
      'Let $a = \\log_5b$, where $b > 0$. Write down each of the following\nexpressions\nin terms of $a$.\n\n- $\\log_5b^4$ <span class="marks">[2]</span>\n\n- $\\log_5 (25b)$ <span class="marks">[2]</span>\n\n- $\\log_{25}b$ <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the properties of logarithms, we get\n\n  $$\n  \\begin{aligned}\n  \\log_5b^4 &= 4\\log_5b \\\\[6pt]\n  &\\answer{= 4a}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.5em} \\log_5 (25b) &= \\log_5 \\left(5^2\\hspace{-0.2em}\\cdot b\\right) \\\\[6pt]\n  &= 2\\log_5 5 + \\log_5 b \\\\[6pt]\n  &\\answer{= 2 + a}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.3em} \\log_{25}b &= \\dfrac{\\log_5 b}{\\log_5 25} \\\\[6pt]\n  &= \\dfrac{\\log_5 b}{2\\log_5 5} \\\\[10pt]\n  &\\answer{= \\dfrac{a}{2}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Consider\n$a = \\log_{63}64\\times\\log_{62}63\\times\\log_{61}62\\times\\dots\\times\\log_{2}3$.\nGiven that $a\\in\\mathbb{Z}$, find the value of $a$.',
    markScheme:
      'Using the properties of logarithms, we get\n\n$$\n\\begin{aligned}\na &= \\log_{63}64\\times\\log_{62}63\\times\\log_{61}62\\times\\dots\\times\\log_{2}3 \\\\[11pt]\n&= \\dfrac{\\log64}{\\bcancel{\\log63}}\\times\\dfrac{\\bcancel{\\log63}}{\\bcancel{\\log62}}\\times\\dfrac{\\bcancel{\\log62}}{\\bcancel{\\log61}}\\times\\cdots\\times\\dfrac{\\bcancel{\\log3}}{\\log2} \\\\[6pt]\n&=  \\dfrac{\\log64}{\\log2} \\\\[6pt]\n&=  \\dfrac{\\log2^6}{\\log2} \\\\[6pt]\n&=  \\dfrac{6\\hspace{0.05em}\\cancel{\\log2}}{\\cancel{\\log2}} \\\\[12pt]\n&\\answer{= 6}\\end{aligned}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 7',
    content:
      '\n- Write the expression $4\\ln 2 - \\ln 8$ in the form of $\\ln k$, where\n$k \\in \\mathbb{Z}$. <span class="marks">[3]</span>\n\n- Hence, or otherwise, solve $4\\ln 2 - \\ln 8 = -\\ln (2x)$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the properties of logarithms, we have\n\n  $$\n  \\begin{aligned}\n  4\\ln 2 - \\ln 8 &= \\ln \\big(2^4\\big) - \\ln 8 \\\\[12pt]\n  &= \\ln 16 - \\ln 8 \\\\[6pt] \n  &= \\ln\\Big(\\dfrac{16}{8}\\Big) \\\\[9pt]\n  & \\answer{= \\ln 2}\\end{aligned}\n  $$\n\n- Replacing the left hand side of the equation with $\\ln 2$, we get\n\n  $$\n  \\begin{aligned}\n  4\\ln 2 - \\ln 8 &= -\\ln (2x) \\\\[12pt]\n  \\ln 2  &= -\\ln(2x) \\hspace{2.2em} \\\\[12pt]\n  -\\ln 2 &= \\ln(2x) \\\\[12pt]\n  \\ln \\big(2^{-1}\\big) &= \\ln(2x) \\\\[12pt]\n  2x &= 2^{-1} \\\\[12pt]\n  2x &= \\dfrac 1 2 \\\\[13pt]\n  &\\hspace{-0.525em} \\answer{x = \\dfrac{1}{4}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
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
      'Solve the equation $\\log_5 x - \\log_5 4 = 2 + \\log_5 3$ for $x$.',
    markScheme:
      'Using the properties of logarithms, we get\n\n$$\n\\begin{aligned}\n\\log_5 x - \\log_5 4 &= 2 + \\log_5 3 \\\\[10pt]\n\\log_5 x - \\log_5 4 &= \\log_5 5^2 + \\log_5 3 \\\\[8pt]\n\\log_5\\dfrac{x}{4} &= \\log_5 (5^2\\hspace{-0.2em}\\cdot3)  \\\\[5pt]\n\\log_5\\dfrac{x}{4} &= \\log_5 75 \\\\[5pt]\n\\dfrac{x}{4} &= 75 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{0.55em}\\answer{x = 300}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 9',
    content:
      'Given that $\\log_a 2 = 5$.\n\n- Find the exact value of $\\log_a 32$. <span class="marks">[2]</span>\n\n- Find the exact value of $\\log_{\\sqrt{a}} 2$. <span class="marks">[2]</span>\n\n- Find the value of $a$, giving your answer correct to $3$ significant\nfigures. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the properties of logarithms, we get\n\n  $$\n  \\begin{aligned}\n  \\log_a 32 &= \\log_a 2^5 \\hspace{2.1em} \\\\[6pt]\n  &= 5 \\log_a 2 \\\\[6pt]\n  &= 5(5) \\\\[6pt]\n  &\\answer{= 25}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we find\n\n  $$\n  \\begin{aligned}\n  \\log_{\\sqrt{a}} 2 &= \\dfrac{\\log 2}{\\log \\sqrt{a}} \\hspace{2.1em} \\\\[2pt]\n  &= \\dfrac{\\log 2}{\\frac{1}{2}\\log a} \\\\[6pt]\n  &= 2\\log_a 2 \\\\[12pt]\n  &= 2(5) \\\\[12pt]\n  &\\answer{= 10}\\end{aligned}\n  $$\n\n- Using the definition of logarithm, we obtain\n\n  $$\n  \\begin{aligned}\n  \\log_a 2 &= 5 \\hspace{4em} \\\\[6pt]\n  a^5 &= 2 \\\\[4pt]\n  a &= 2^\\frac{1}{5} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{a \\approx 1.15} \\hspace{0.8em}\n  $$\n\n',
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
      'Find the value(s) of $x$ when\n$27^{x+2} = \\left(\\dfrac{1}{9}\\right)^{2x+4}$.',
    markScheme:
      'Using the properties of exponents, we get\n\n$$\n\\begin{aligned}\n27^{x+2} &= \\left(\\dfrac{1}{9}\\right)^{2x+4} \\\\[3pt]\n\\left(3^3\\right)^{x+2} &= \\left(\\dfrac{1}{3^2}\\right)^{2x+4} \\\\[9pt]\n3^{3x+6} &= 3^{-4x-8} \\\\[16pt]\n3x+6 &= -4x-8 \\\\[16pt]\n7x &= -14 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\answer{x = -2} \\hspace{0.5em}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 11',
    content:
      'Solve the equation $\\log_3 x - \\log_3 5 = 1 + \\log_3 4$ for $x$.',
    markScheme:
      'Using the properties of logarithms, we get\n\n$$\n\\begin{aligned}\n\\log_3 x - \\log_3 5 &= 1 + \\log_3 4 \\\\[10pt]\n\\log_3 x - \\log_3 5 &= \\log_3 3 + \\log_3 4 \\\\[8pt]\n\\log_3\\dfrac{x}{5} &= \\log_3 (3\\hspace{-0.2em}\\cdot4)  \\\\[5pt]\n\\log_3\\dfrac{x}{5} &= \\log_3 12 \\\\[5pt]\n\\dfrac{x}{5} &= 12 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{0.55em}\\answer{x = 60}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 12',
    content:
      '\n- Write down the value of\n  \n  - $\\log_2 8$;\n  - $\\log_5\\Big(\\dfrac{1}{25}\\Big)$;\n  - $\\log_9 3$. <span class="marks">[3]</span>\n\n\n- Hence solve\n$\\log_2 8 + \\log_5\\Big(\\dfrac{1}{25}\\Big) + \\log_9 3 = \\log_{16} x$.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - Using the properties of logarithms, we have\n\n    $$\n    \\begin{aligned}\n    \\log_2 8 &= \\log_2 \\big(2^3\\big) \\\\[6pt]\n    &= 3\\log_2 2 \\\\[6pt]\n    &\\answer{= 3}\\end{aligned}\n    $$\n\n  - Using the properties of logarithms, we have\n\n    $$\n    \\begin{aligned}\n    \\log_5\\Big(\\dfrac{1}{25}\\Big) &= \\log_5\\big(5^{-2}\\big) \\hspace{1.4em} \\\\[6pt]\n    &= (-2)\\log_5 5 \\\\[10pt]\n    &\\answer{= -2}\\end{aligned}\n    $$\n\n  - Using the properties of logarithms, we have\n\n    $$\n    \\begin{aligned}\n    \\log_9 3 &= \\dfrac{\\ln 3}{\\ln 9} \\\\[10pt]\n    &= \\dfrac{\\ln 3}{\\ln \\big(3^2\\big)} \\\\[6pt]\n    &= \\dfrac{\\ln 3}{2\\ln 3} \\\\[10pt]\n    &\\answer{= \\dfrac{1}{2}}\\end{aligned}\n    $$\n\n\n- Hence we get\n\n  $$\n  \\begin{aligned}\n  \\log_2 8 + \\log_5\\Big(\\dfrac{1}{25}\\Big) + \\log_9 3 &= \\log_{16} x \\hspace{6.5em} \\\\[6pt]\n  3 + (-2) + \\dfrac{1}{2} &= \\log_{16} x \\\\[6pt]\n  \\dfrac{3}{2} &= \\log_{16} x \\\\[10pt]\n  16^{3/2} &= x \\\\[14pt]\n  4^3 & = x \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2.7em} \\answer{x = 64}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
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
      '\n- Write down the value of\n  \n  - $\\log_3 81$;\n  - $\\log_2\\Big(\\dfrac{1}{8}\\Big)$;\n  - $\\log_{25} 5$. <span class="marks">[3]</span>\n\n\n- Hence solve\n$\\log_3 81 + \\log_2\\Big(\\dfrac{1}{8}\\Big) + \\log_{25} 5 = \\log_{9} x$.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - Using the properties of logarithms, we have\n\n    $$\n    \\begin{aligned}\n    \\log_3 81 &= \\log_3\\big(3^4\\big) \\\\[6pt]\n    &= 4\\log_3 3 \\\\[6pt]\n    &\\answer{= 4}\\end{aligned}\n    $$\n\n  - Using the properties of logarithms, we have\n\n    $$\n    \\begin{aligned}\n    \\log_2\\Big(\\dfrac{1}{8}\\Big) &= \\log_2\\big(2^{-3}\\big) \\hspace{0.3em} \\\\[6pt]\n    &= (-3)\\log_2 2 \\\\[10pt]\n    &\\answer{= -3}\\end{aligned}\n    $$\n\n  - Using the properties of logarithms, we have\n\n    $$\n    \\begin{aligned}\n    \\log_{25} 5 &= \\dfrac{\\ln 5}{\\ln 25} \\\\[10pt]\n    &= \\dfrac{\\ln 5}{\\ln \\big(5^2\\big)} \\\\[6pt]\n    &= \\dfrac{\\ln 5}{2\\ln 5} \\\\[10pt]\n    &\\answer{= \\dfrac{1}{2}}\\end{aligned}\n    $$\n\n\n- Hence we get\n\n  $$\n  \\begin{aligned}\n  \\log_3 81 + \\log_2\\Big(\\dfrac{1}{8}\\Big) + \\log_{25} 5 &= \\log_{9} x \\hspace{7.6em} \\\\[6pt]\n  4 + (-3) + \\dfrac{1}{2} &= \\log_{9} x \\\\[6pt]\n  \\dfrac{3}{2} &= \\log_{9} x \\\\[10pt]\n  9^{3/2} &= x \\\\[14pt]\n  3^3 & = x \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2.4em} \\answer{x = 27}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 14',
    content:
      'Given that $\\log_b 3 = 10$.\n\n- Find the exact value of $\\log_b 81$. <span class="marks">[2]</span>\n\n- Find the exact value of $\\log_{b^2} 3$. <span class="marks">[2]</span>\n\n- Find the value of $b$, giving your answer correct to $3$ significant\nfigures. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the properties of logarithms, we get\n\n  $$\n  \\begin{aligned}\n  \\log_b 81 &= \\log_b 3^4 \\hspace{2em} \\\\[6pt]\n  &= 4 \\log_b 3 \\\\[6pt]\n  &= 4(10) \\\\[6pt]\n  &\\answer{= 40}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we find\n\n  $$\n  \\begin{aligned}\n  \\log_{b^2} 3 &= \\dfrac{\\log 3}{\\log b^2} \\hspace{2.1em} \\\\[3pt]\n  &= \\dfrac{\\log 3}{2\\log b} \\\\[5pt]\n  &= \\dfrac{1}{2}\\log_b 3 \\\\[7pt]\n  &= \\dfrac{1}{2}(10) \\\\[10pt]\n  &\\answer{= 5}\\end{aligned}\n  $$\n\n- Using the definition of logarithm, we obtain\n\n  $$\n  \\begin{aligned}\n  \\log_b 3 &= 10 \\hspace{3.3em} \\\\[6pt]\n  b^{10} &= 3 \\\\[4pt]\n  b &= 3^\\frac{1}{10} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{b \\approx 1.12} \\hspace{0.6em}\n  $$\n\n',
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
    title: 'Question 15',
    content:
      'Find the values of $x$ when\n$25^{x^2-2x} = \\left(\\dfrac{1}{125}\\right)^{4x+2}$.',
    markScheme:
      'Using the properties of exponents, we get\n\n$$\n\\begin{aligned}\n25^{x^2-2x} &= \\left(\\dfrac{1}{125}\\right)^{4x+2} \\\\[3pt]\n\\left(5^2\\right)^{x^2-2x} &= \\left(\\dfrac{1}{5^3}\\right)^{4x+2} \\\\[9pt]\n5^{2x^2-4x} &= 5^{-12x-6} \\\\[16pt]\n2x^2 - 4x &= -12x-6 \\\\[16pt]\nx^2 - 2x &= -6x - 3 \\\\[16pt]\nx^2 + 4x + 3 &= 0 \\\\[17pt]\n(x+3)(x+1) &= 0 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{3.45em}\\answer{x = -3,-1}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 16',
    content: 'Solve the equation $\\log_3(x^2-4x+4) = 1 + \\log_3(x-2)$.',
    markScheme:
      'Using the properties of logarithms, we get\n\n$$\n\\begin{aligned}\n\\log_3(x^2-4x+4) &= 1 + \\log_3(x-2) \\\\[6pt]\n\\log_3(x^2-4x+4) &= \\log_3 3 + \\log_3(x-2) \\\\[6pt]\n\\log_3(x^2-4x+4) &= \\log_3(3x-6) \\\\[6pt]\nx^2-4x+4 &= 3x-6 \\\\[6pt]\nx^2-7x+10 &= 0 \\\\[7pt]\n(x-2)(x-5) &= 0 \\\\[7pt]\nx-5 &= 0 \\hspace{3em} [\\text{since $x - 2 > 0$}] \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\answer{x=5} \\hspace{3.15em}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 17',
    content: 'Solve the equation $\\log_2(x^2-2x+1) = 1 + \\log_2(x-1)$.',
    markScheme:
      'Using the properties of logarithms, we get\n\n$$\n\\begin{aligned}\n\\log_2(x^2-2x+1) &= 1 + \\log_2(x-1) \\\\[6pt]\n\\log_2(x^2-2x+1) &= \\log_2 2 + \\log_2(x-1) \\\\[6pt]\n\\log_2(x^2-2x+1) &= \\log_2(2x-2) \\\\[6pt]\nx^2-2x+1 &= 2x-2 \\\\[6pt]\nx^2-4x+3 &= 0 \\\\[7pt]\n(x-1)(x-3) &= 0 \\\\[7pt]\nx-3 &= 0 \\hspace{3em} [\\text{$x\\neq1$, since $\\log_20$}]\\end{aligned}\n$$\n\n\n$$\n\\answer{x = 3} \\hspace{3.15em}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 18',
    content: 'Solve $\\log_6(x) + \\log_6(x-5) = 2$, for $x > 5$.',
    markScheme:
      'Using the properties of logarithms, we get\n\n$$\n\\begin{aligned}\n\\log_6(x) + \\log_6(x-5) &= 2 \\\\[6pt]\n\\log_6(x(x-5)) &= \\log_6 6^2 \\\\[5pt]\n\\log_6 (x^2-5x) &= \\log_6 36 \\\\[5pt]\nx^2-5x &= 36 \\\\[5pt]\nx^2 - 5x - 36 &= 0 \\\\[6pt]\n(x + 4)(x - 9) &= 0 \\\\[6pt]\nx - 9 &= 0 \\hspace{3em} [\\text{since $x + 4 > 0$}]\\end{aligned}\n$$\n\n\n$$\n\\answer{x = 9} \\hspace{1.6em}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
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
      'Find the value of\n\n- $\\log_5 75 - \\log_5 3$; <span class="marks">[2]</span>\n\n- $25^{\\log_5 8}$. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- Using the properties of logarithms, we get\n\n  $$\n  \\begin{aligned}\n  \\log_5 75 - \\log_5 3 &= \\log_5\\Big(\\dfrac{75}{3}\\Big) \\hspace{3.1em} \\\\[6pt]\n  &= \\log_5 25 \\\\[10pt]\n  &= \\log_5\\big(5^2\\big) \\\\[12pt]\n  &= 2 \\log_5 5 \\\\[12pt]\n  &\\answer{= 2}\\end{aligned}\n  $$\n\n- Using the properties of exponents and logarithms, we obtain\n\n  $$\n  \\begin{aligned}\n  25^{\\log_5 8} &= \\big(5^2\\big)^{\\log_5 8} \\\\[8pt]\n  &= 5^{2\\log_5 8} \\\\[6pt]\n  &= 5^{\\log_5 (8^2)} \\\\[7pt]\n  &= 5^{\\log_5 64} \\\\[9pt]\n  &\\answer{= 64}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 20',
    content:
      'Find the value of\n\n- $\\log_7 98 - \\log_7 2$; <span class="marks">[2]</span>\n\n- $49^{\\log_7 6}$. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- Using the properties of logarithms, we get\n\n  $$\n  \\begin{aligned}\n  \\log_7 98 - \\log_7 2 &= \\log_7\\Big(\\dfrac{98}{2}\\Big) \\hspace{3.1em} \\\\[6pt]\n  &= \\log_7 49 \\\\[10pt]\n  &= \\log_7\\big(7^2\\big) \\\\[12pt]\n  &= 2 \\log_7 7 \\\\[12pt]\n  &\\answer{= 2}\\end{aligned}\n  $$\n\n- Using the properties of exponents and logarithms, we obtain\n\n  $$\n  \\begin{aligned}\n  49^{\\log_7 6} &= \\big(7^2\\big)^{\\log_7 6} \\\\[8pt]\n  &= 7^{2\\log_7 6} \\\\[6pt]\n  &= 7^{\\log_7 (6^2)} \\\\[7pt]\n  &= 7^{\\log_7 36} \\\\[9pt]\n  &\\answer{= 36}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 21',
    content:
      'The first three terms of a geometric sequence are $\\ln x^9$, $\\ln x^3$,\n$\\ln x$, for $x > 0$.\n\n- Find the common ratio. <span class="marks">[3]</span>\n\n- Hence, solve $\\displaystyle \\sum_{k=1}^\\infty 3^{3-k}\\ln x = 27$.\n<span class="marks">[5]</span>\n\n',
    markScheme:
      '\n- We have $u_1 = 9\\ln x$ and $u_2 = 3\\ln x$.\nHence the common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n  &= \\dfrac{3\\ln x}{9\\ln x} \\hspace{2.9em} \\\\[6pt]\n  &\\answer{= \\dfrac{1}{3}}\\end{aligned}\n  $$\n\n- The $n$th term of the geometric sequence is\n\n  $$\n  \\begin{aligned}\n  u_n &= u_1r^{n-1} \\\\[6pt]\n  &= 9\\ln x\\bigg(\\dfrac{1}{3}\\bigg)^{n-1} \\\\[8pt]\n  &= 3^{3-n}\\ln x\\end{aligned}\n  $$\n\n  Hence we have\n\n  $$\n  \\begin{aligned}\n  S_{\\infty} &= \\sum_{k=1}^\\infty 3^{3-k}\\ln x \\hspace{1em}\\end{aligned}\n  $$\n\n  Hence, solving the equation $S_{\\infty} = 27$ for $x$, we get\n\n  $$\n  \\begin{aligned}\n  \\dfrac{u_1}{1-r} &= 27 \\hspace{2.8em} \\\\[6pt]\n  \\dfrac{9\\ln x}{1 - 1/3} &= 27 \\\\[6pt]\n  \\dfrac{27\\ln x}{3-1} &= 27 \\\\[12pt]\n  \\ln x &= 2 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{x = e^2}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 22',
    content:
      'The equation $e^{2x} - 12e^x = -32$ has two solutions, $x_1$ and $x_2$.\n\n- Find the value of $x_1$ and the value of $x_2$.<span class="marks">[5]</span>  \n\nA second equation, $2\\left(\\log_{\\,9}x\\right)\\left(\\log_{\\,3}x\\right) - 6\\log_{\\,9}x - 2\\log_{\\,3}x = -6$, also has two solutions, $x_3$ and $x_4$.\n\n- \n  - Show that this second equation can be expressed as\n\n    $$\n    \\begin{align*}\n    \\left(\\log_{\\,3}x\\right)^2 -5\\log_{\\,3}x + 6 = 0\n    \\end{align*}\n    $$\n\n  - Hence find the value of $x_3$ and the value of $x_4$. <span class="marks">[7]</span>\n\n\n- Given that $x_1 + x_2 = a(x_3 + x_4)$, find the value of $a$. Give your answer in the form $b\\ln c$, where $b,c \\in \\mathbb{R}$.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The equation can be written as a quadratic in $e^x$:\n\n  $$\n  \\begin{align*}\n  \\left(e^x\\right)^2 - 12e^x + 32 = 0\n  \\end{align*}\n  $$\n\n  The equation can then be factorised:\n\n  $$\n  \\begin{align*}\n  \\left(e^x - 4\\right)\\left(e^x - 8\\right) = 0\n  \\end{align*}\n  $$\n\n  From the first bracket, we have\n\n  $$\n  \\begin{align*}\n  e^x - 4 &= 0 \\\\[8pt]\n  e^x &= 4 \\\\[8pt]\n  x &= \\ln 4 \\\\[8pt]\n  &= 2\\ln 2\n  \\end{align*}\n  $$\n\n  And from the second bracket,\n\n  $$\n  \\begin{align*}\n  e^x - 8 &= 0 \\\\[8pt]\n  e^x &= 8 \\\\[8pt]\n  x &= \\ln 8 \\\\[8pt]\n  &= 3\\ln 2\n  \\end{align*}\n  $$\n\n  Hence, $\\boxed{x_1 = 2\\ln 2 \\;\\text{and}\\; x_2 = 3\\ln 2.}$ \n- \n  - We are asked to write the second equation in terms of $\\log_{\\,3}x$, and currently the equation is expressed in terms of $\\log_{\\,3}x$ and $\\log_{\\,9}x$. Using the formula for changing the base, we have\n\n    $$\n    \\begin{align*}\n    \\log_{\\,9}x &= \\dfrac{\\log_{\\,3}x}{\\log_{\\,3}9} \\\\[8pt]\n    &= \\dfrac{\\log_{\\,3}x}{\\log_{\\,3}3^2} \\\\[8pt]\n    &= \\dfrac{\\log_{\\,3}x}{2\\log_{\\,3}3} \\\\[8pt]\n    \\log_{\\,9}x &= \\dfrac{1}{2}\\log_{\\,3}x\n    \\end{align*}\n    $$\n\n    Substituting this expression into our original equation, we get\n\n    $$\n    \\begin{align*}\n    2\\left(\\log_{\\,9}x\\right)\\left(\\log_{\\,3}x\\right) - 6\\log_{\\,9}x - 2\\log_{\\,3}x &= -6 \\\\[8pt]\n    2\\left(\\dfrac{1}{2}\\right)\\left(\\log_{\\,3}x\\right)\\left(\\log_{\\,3}x\\right) - 6\\left(\\dfrac{1}{2}\\right)\\left(\\log_{\\,3}x\\right) - 2\\log_{\\,3}x &= -6 \\\\[8pt]\n    &\\hspace{-10em}\\tcbhighmath{\\left(\\log_{\\,3}x\\right)^2 - 5\\log_{\\,3}x + 6 = 0}\n    \\end{align*}\n    $$\n\n  - The equation can be factorised as follows:\n\n    $$\n    \\begin{align*}\n    \\left(\\log_{\\,3}x - 2\\right)\\left(\\log_{\\,3}x - 3\\right) = 0\n    \\end{align*}\n    $$\n\n    From the first bracket, we have\n\n    $$\n    \\begin{align*}\n    \\log_{\\,3}x - 2 &= 0 \\\\[8pt]\n    \\log_{\\,3}x &= 2 \\\\[8pt]\n    x &= 9\n    \\end{align*}\n    $$\n\n    And from the second bracket,\n\n    $$\n    \\begin{align*}\n    \\log_{\\,3}x - 3 &= 0 \\\\[8pt]\n    \\log_{\\,3}x &= 3 \\\\[8pt]\n    x &= 27\n    \\end{align*}\n    $$\n\n    Hence, $\\boxed{x_3 = 9 \\;\\text{and}\\; x_4 = 27.}$\n\n- We have\n\n  $$\n  \\begin{align*}\n  x_1 + x_2 &= a(x_3 + x_4) \\\\[8pt]\n  2\\ln 2 + 3\\ln 2 &= a(9+27) \\\\[8pt]\n  5\\ln 2 &= 36a \\\\[8pt]\n  &\\hspace{-0.5em}\\tcbhighmath{a = \\dfrac{5}{36}\\ln 2}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 23',
    content:
      'The first three terms of an infinite sequence, in order, are\n$2\\ln x,\\,\\, q\\ln x,\\,\\, \\ln \\sqrt{x}\\,\\,\\,  \\text{ where $\\ x > 0$.} $\nFirst consider the case in which the series is geometric.\n\n- \n  - Find the possible values of $q$.\n  - Hence or otherwise, show that the series is convergent. <span class="marks">[3]</span>\n\n\n- Given that $q>0$ and $S_\\infty=8\\ln{3}$, find the value of $x$. <span class="marks">[3]</span>\n\n\nNow suppose that the series is arithmetic.\n\n- \n  - Show that $q=\\dfrac{5}{4}$.\n  - Write down the common difference in the form $m\\ln x$, where $m \\in \\mathbb{Q}$. <span class="marks">[4]</span>\n\n\n- Given that the sum of the first $n$ terms of the sequence is $\\ln \\sqrt{x^5}$, find the value of $n$. <span class="marks">[8]</span>\n\n',
    markScheme:
      '\n- \n  - Given that the sequence is geometric, we have for the common ratio\n\n    $$\n    \\begin{align*}\n    r &= \\dfrac{u_2}{u_1} \\\\[8pt]\n    &= \\dfrac{q\\ln x}{2\\ln x} \\\\[8pt]\n    &= \\dfrac{q}{2}\n    \\end{align*}\n    $$\n\n    Similarly,\n\n    $$\n    \\begin{align*}\n    r &= \\dfrac{u_3}{u_2} \\\\[8pt]\n    \\dfrac{q}{2} &= \\dfrac{\\ln \\sqrt{x}}{q\\ln x} \\\\[8pt]\n    \\dfrac{q}{2} &= \\dfrac{\\frac{1}{2}\\ln {x}}{q\\ln x} \\\\[8pt]\n    \\dfrac{q}{2} &= \\dfrac{1}{2q} \\\\[8pt]\n    q^2 &= 1 \\\\[8pt]\n    &\\hspace{-0.49em}\\tcbhighmath{q= \\pm 1}\n    \\end{align*}\n    $$\n\n  - Given that $r=\\dfrac{q}{2}$, and $q= \\pm 1$, we have $r = \\pm \\dfrac{1}{2}$. Hence $|r| < 1$.\n    $\\answer{\\text{In both cases the series converges.}}$\n\n- Given that $q>0$, $r = \\dfrac{1}{2}$.\n  Using the formula for the sum of an infinite geometric sequence, we~get\n\n  $$\n  \\begin{align*}\n  S_{\\infty} &= \\dfrac{u_1}{1-r} \\\\[10pt]\n  8 \\ln 3 &= \\dfrac{2\\ln x}{1-\\frac{1}{2}} \\\\[10pt]\n  8 \\ln 3 &= \\dfrac{2\\ln x}{\\frac{1}{2}} \\\\[10pt]\n  8 \\ln 3 &= 4\\ln x \\\\[10pt]\n  2\\ln 3 &= \\ln x \\\\[10pt]\n  \\ln 3^2 &= \\ln x \\\\[10pt]\n  \\ln 9 &= \\ln x \\\\[10pt]\n  &\\hspace{-0.54em}\\tcbhighmath{x = 9} \n  \\end{align*}\n  $$\n\n- \n  - First we find the common difference $d$ as follows\n\n    $$\n    \\begin{align*}\n    d &= u_2 - u_1\\\\[10pt]\n    d &= q\\ln x - 2\\ln x \\\\[10pt]\n    d &= (q-2)\\ln x\n    \\end{align*}\n    $$\n\n    Similarly,\n\n    $$\n    \\begin{align*}\n    d &= u_3 - u_2\\\\[10pt]\n    (q-2)\\ln x &= \\ln\\sqrt{x} - q\\ln x \\\\[8pt]\n    (q-2)\\ln x &= \\ln x^{1/2} - q\\ln x \\\\[8pt]\n    (q-2)\\ln x &=  \\dfrac{1}{2}\\ln x - q\\ln x \\\\[8pt]\n    (q-2)\\ln x &= \\bigg(\\dfrac{1}{2} - q\\bigg)\\ln x \\\\[8pt]\n    q-2 &= \\dfrac{1}{2}-q \\\\[8pt]\n    2q &= \\dfrac{1}{2} + 2 \\\\[8pt]\n    2q &= \\dfrac{5}{2} \\\\[8pt]\n    &\\hspace{-0.535em}\\tcbhighmath{q = \\dfrac{5}{4}}\n    \\end{align*}\n    $$\n\n  - Given that $d = (q-2)\\ln x$ and $q = \\dfrac{5}{4}$, we have\n\n    $$\n    \\begin{align*}\n    d &= \\left(\\dfrac{5}{4}-2\\right)\\ln x \\\\[10pt]\n    &\\hspace{-0.535em}\\tcbhighmath{d = -\\dfrac{3}{4}\\ln x}\n    \\end{align*}\n    $$\n\n\n- Using the formula for the sum of $n$ terms of an arithmetic sequence, we get\n\n  $$\n  \\begin{align*}\n  S_n &= \\dfrac{n}{2}(2u_1 + (n-1)d) \\\\[8pt]\n  \\ln \\sqrt{x^5} &= \\dfrac{n}{2}\\left(2\\hspace{0.1em}(2\\ln x) + (n-1)\\left(-\\dfrac{3}{4}\\ln x \\right)\\right) \\\\[8pt]\n  \\ln x^{5/2} &= \\dfrac{n}{2}\\left(\\left(4\\ln x + \\left(-\\dfrac{3}{4}\\right)(n-1)\\ln x\\right) \\right) \\\\[8pt]\n  \\dfrac{5}{2}\\ln x &= \\dfrac{n}{2}\\left(4 - \\dfrac{3(n-1)}{4}\\right)\\ln x \\\\[8pt]\n  5 &= n\\left(4 - \\dfrac{3(n-1)}{4}\\right) \\\\[8pt]\n  5 &= 4n - \\dfrac{3n(n-1)}{4} \\\\[8pt]\n  20 &= 16n - 3n(n-1) \\\\[8pt]\n  20 &= 16n - 3n^2 + 3n \\\\[8pt]\n  3n^2 -19n +20 &= 0 \\\\[8pt]\n  3n^2 -15n -4n +20 &= 0 \\\\[8pt]\n  3n(n-5) - 4(n-5) &= 0 \\\\[8pt]\n  (3n-4)(n-5) &= 0\n  \\end{align*}\n  $$\n\n  The solutions to the quadratic equation are $n=\\dfrac{4}{3}$ and $n=5$.\n  Since $n$ must be an integer, we have $\\answer{n = 5}$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '18',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 24',
    content:
      'Solve the following equation for $a$\n\n$$\n\\begin{align*}\n    \\sum_{k=a}^{a+35} \\log_{13} \\left(\\frac{k+1}{k}\\right)&=1\n\\end{align*}\n$$\n',
    markScheme:
      'First we will unpack the sigma notation.\nThe smallest value of $k$ is $\\textcolor{red}{a}$. This value is the increased by $1$ for each subsequent term.\n\n$$\n\\begin{align*}\n    \\sum_{k=a}^{a+35} \\log_{13} \\left(\\frac{k+1}{k}\\right)&=\\log_{13} \\left(\\frac{\\textcolor{red}{a}+1}{\\textcolor{red}{a}}\\right)+\\log_{13} \\left(\\frac{\\textcolor{red}{a+1}+1}{\\textcolor{red}{a+1}}\\right)+\\\\[6pt]\n    &\\hspace{1.2em}\\log_{13} \\left(\\frac{\\textcolor{red}{a+2}+1}{\\textcolor{red}{a+2}}\\right)+...\n\\end{align*}\n$$\n\nThis continues until we reach the largest value of $k$ which is $a+35$.\n\n$$\n\\begin{align*}\n    +...\\log_{13} \\left(\\frac{\\textcolor{red}{a+34}+1}{\\textcolor{red}{a+34}}\\right)+\\log_{13} \\left(\\frac{\\textcolor{red}{a+35}+1}{\\textcolor{red}{a+35}}\\right) \\tag*{\\textbf{(M1)}}\n\\end{align*}\n$$\n\nIf we simplify the fractions and then apply the following log law\n\n$$\n\\begin{align*}\n    \\log_{a}\\tfrac{x}{y}&=\\log_{a}x-\\log_{a}y\n\\end{align*}\n$$\n\nWe get\n\n$$\n\\begin{align*}\n    \\sum_{k=a}^{a+35} \\log_{13} \\left(\\frac{k+1}{k}\\right)&=\\log_{13} \\left(\\frac{a+1}{a}\\right)+\\log_{13} \\left(\\frac{a+2}{a+1}\\right)+...\\log_{13} \\left(\\frac{a+36}{a+35}\\right)\\\\[6pt]\n    &=\\cancel{\\log_{13}{(a+1)}}-\\textcolor{blue}{\\log_{13}{a}}+\\cancel{\\log_{13}{(a+2)}}-\\cancel{\\log_{13}{(a+1)}}+\\\\[6pt]\n    &\\hspace{1.2em}-\\cancel{\\log_{13}{(a+2)}}+...+\\textcolor{blue}{\\log_{13}{(a+36)}}-\\cancel{\\log_{13}{(a+35)}} \\tag*{\\textbf{(M1)}}\n\\end{align*}\n$$\n\nNotice how the terms cancel each other out, leaving only the two $\\textcolor{blue}{\\text{blue}}$ terms. Recall, from the question, this is equal to $1$.\n\n$$\n\\begin{align*}\n    -\\log_{13}{a}+\\log_{13}{(a+36)}&=1 \\tag*{\\textbf{A1}}\n\\end{align*}\n$$\n\nWe can now solve the equation by rewriting the L.H.S. as a single logarithm\n\n$$\n\\begin{align*}\n    \\log_{13}{\\left(\\frac{a+36}{a}\\right)}&=1\n\\end{align*}\n$$\n\nUsing the definition of a logarithm, we rewrite the equation into exponential form\n\n$$\n\\begin{align*}\n    \\frac{a+36}{a}&=13^1 \\tag*{\\textbf{A1}}\n\\end{align*}\n$$\n\nNow we can solve for $a$\n\n$$\n\\begin{align*}\n    a+36&=13a\\\\[6pt]\n    12a&=36\\\\[6pt]\n    &\\hspace{-0.8em}\\answer{a=3} \\tag*{\\textbf{A1}}\n\\end{align*}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 25',
    content:
      'The arithmetic sequence has the sixth term of $u_6=\\ln{2}$ and the eighth term of $u_8=\\frac{3}{2}\\ln{4}$.\n\n- \n  - Show the common difference is $\\ln2$.\n  - Find $u_1$.\n  - Hence, show that the sum of $n$ terms is given by $S_n=\\left(n^2-9n\\right)\\ln {\\sqrt{2}} $. Where $n \\in \\mathbb{Z^+}$. <span class="marks">[5]</span>\n\n\n\nA new function, $f(x)$, is formed using $S_n$ with the discrete variable $n$ being replaced with the continuous variable $x$, such that $x \\in \\mathbb{R}$. Hence $f(x)=\\left(x^2-9x\\right)\\ln {\\sqrt{2}}$.\n\n- \n  - Write down the equation of the axis of symmetry of $f(x)$.\n  - Sketch $f(x)$ on the grid below, identify the axis of symmetry and any axis intercepts.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b47a175-7f1f-4e12-9580-54726bb82f90/images/5f674790-b5af-473c-b8d4-3f746b96c744/q1037.png)\n\n\n  - Hence or otherwise, find the minimum value of $S_n$ in the form $a\\ln b$. Where $a,b \\in \\mathbb{Z}$ <span class="marks">[5]</span>\n\n\n\nConsider the linear function $g(x)=(6-3x)\\ln {\\sqrt 2}$.\n\n- \n  - Solve $f(x)=g(x)$.\n  - Hence, solve the inequality $f(x)<g(x)$.\n  - Hence or otherwise, find the range of values of $n$ that satisfy $S_n<g(x)$. <span class="marks">[5]</span>\n\n\n',
    markScheme:
      '\n- \n  - As the sequence is arithmetic we can write $u_8=u_6+2d$. Hence\n\n    $$\n    \\begin{align*}\n        \\tfrac{3}{2}\\ln{4}&=\\ln{2}+2d \\tag*{\\textbf{M1}}\\\\\n        2d&=3\\ln{(\\sqrt{4})}-\\ln2\\\\\n        2d&=2\\ln{2}\\tag*{\\textbf{A1}}\\\\[6pt]\n        &=\\hspace{0.525em}\\tcbhighmath{\\ln2}\\hspace{2.525em} \\text{...as required} \\tag*{\\textbf{AG}}\n    \\end{align*}\n    $$\n\n  - We can use $u_6$ to find the first term\n\n    $$\n    \\begin{align*}\n        u_6&=u_1+5d\\\\\n        \\ln2&=u_1+5\\ln2\\\\\n        u_1&=\\hspace{0.525em}\\answer{-4\\ln2} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Using the sum of $n$ terms of an arithmetic sequence we can write\n\n    $$\n    \\begin{align*}\n        S_n&=\\frac{n}{2}\\left(2\\times -4 \\ln2 +(n-1)\\times \\ln2\\right) \\tag*{\\textbf{M1}}\\\\\n        &=\\frac{n^2}{2}\\ln2-\\frac{9n}{2}\\ln2\\\\\n        &=\\frac{\\ln2}{2}\\left(n^2-9n\\right) \\tag*{\\textbf{A1}}\\\\[6pt]\n        &=\\hspace{0.525em}\\answer{\\left(n^2-9n\\right)\\ln{\\sqrt{2}}} \\hspace{2.525em} \\text{...as required} \\tag*{\\textbf{AG}}\n    \\end{align*}\n    $$\n\n\n- \n  - Using the axis of symmetry formula, we can write\n\n    $$\n    \\begin{align*}\n        x&=-\\frac{-9\\ln{\\sqrt{2}}}{2\\ln{\\sqrt{2}}}\\\\\n        &\\hspace{-0.525em}\\answer{x=\\tfrac{9}{2}} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Here is the sketch of $f(x)$ with the desired features identified.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b47a175-7f1f-4e12-9580-54726bb82f90/images/ff26f159-934a-404d-946c-88a7dab4de40/a1037-1.png)\n\n\n    $\\answer{\\text{Correct intercepts}}$ A1 and $\\answer{\\text{axis of symmetry}}$ A1.\n  - Using the symmetry of $f(x)$ we can identify the minimum value(s) of $f(x)$ which has integer $x$ coordinates.\n    Both points are equidistant from the axis of symmetry and they represent the minimum value of $S_n$.\n\n    $$\n    \\tag*{\\textbf{(M1)}}\n    $$\n\n    $\\textcolor{white}{gap}$\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b47a175-7f1f-4e12-9580-54726bb82f90/images/b53d4797-3cc2-48db-9678-27e521c1ec16/a1037-2.png)\n\n\n    We can use the $x-$value from the graph to pick either $n=4$ or $n=5$ as both will yield the same minimum value. This solution will pick $n=4$, hence, the minimum value of $S_n$ is\n\n    $$\n    \\begin{align*}\n        S_4&=\\left(4^2-9(4)\\right)\\frac{\\ln2}{2}\\\\\n        &=-20\\frac{\\ln2}{2}\\\\[6pt]\n        &=\\hspace{0.525em}\\answer{-10\\ln2} \\tag*{\\textbf{A1}}\\\\\n    \\end{align*}\n    $$\n\n\n- \n  - Equate the RHS of each function\n\n    $$\n    \\begin{align*}\n        \\left(x^2-9x\\right)\\ln {\\sqrt 2}&=(6-3x)\\ln {\\sqrt 2}\n    \\end{align*}\n    $$\n\n    Cancel out the factor $\\ln {\\sqrt 2}$ and solve for $x$\n\n    $$\n    \\begin{align*}\n        x^2-9x&=6-3x\\tag*{\\textbf{(M1)}}\\\\\n        0&=x^2-6x-6\n    \\end{align*}\n    $$\n\n    We can solve this by completing the square.\n\n    $$\n    \\begin{align*}\n        (x-3)^2-9-6&=0\\\\\n        x-3&=\\pm\\sqrt{15}\\\\\n        x&=\\hspace{0.525em}\\answer{3\\pm\\sqrt{15}} \\tag*{\\textbf{A1}}   \n    \\end{align*}\n    $$\n\n  - By making a rough sketch of $g(x)$ on the graph we can solve the inequality\\\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b47a175-7f1f-4e12-9580-54726bb82f90/images/e5de3f5e-73f3-4a69-a581-b579611281ae/a1037-3.png)\n\n\n    We can identify the region the $f(x)<g(x)$. Hence\n\n    $$\n    \\begin{align*}\n        &\\hspace{0.525em}\\answer{3-\\sqrt{15}<x<3+\\sqrt{15}} \\tag*{\\textbf{A1}}\\\\\n    \\end{align*}\n    $$\n\n  - $n$ must be a positive integer and lie entirely within the region identified in part (c)(ii).\n    We know that $\\sqrt{9}<\\sqrt{15}<\\sqrt{16}$, hence we can identify the minimum and maximum values of $n$.\n\n    $$\n    \\tag*{\\textbf{M1}}\n    $$\n\n    $\\textcolor{white}{gap}$\n    The minimum value must be an integer larger than $3-\\sqrt{15}$.\n\n    $$\n    \\begin{align*}\n        -1<3-\\sqrt{15}<0\n    \\end{align*}\n    $$\n\n    The minimum value of $n$ is $1$.\n    Similarly, the maximum value must be an integer smaller than $3+\\sqrt{15}$.\n\n    $$\n    \\begin{align*}\n        6<3+\\sqrt{15}<7\n    \\end{align*}\n    $$\n\n    The maximum value of $n$ is $6$.\n    Hence\n$\\answer{1\\leq n\\leq 6}$.\n\n    $$\n    \\tag*{\\textbf{A1}}\n    $$\n\n    $\\textcolor{white}{gap}$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 26',
    content: 'Solve the equation $9^x + 2\\cdot3^{x+1} = 1$.',
    markScheme:
      'If we substitute $y = 3^x$ in the equation $9^x + 2\\cdot3^{x+1} = 1$, we\nhave\n\n$$\n\\begin{aligned}\n\\left(3^x\\right)^2 + 6\\cdot3^x - 1 &= 0 \\\\[6pt]\ny^2 + 6y - 1 &= 0\\end{aligned}\n$$\n\nHence, using the quadratic formula, we\nget\n\n$$\n\\begin{aligned}\n\\hspace{13em} y &= \\dfrac{-6 + \\sqrt{6^2 - 4(1)(-1)}}{2(1)} \\hspace{2em} [\\text{since $y = 3^x > 0$}] \\\\[4pt]\n&= \\dfrac{-6 + 2\\sqrt{10}}{2} \\\\[12pt]\n&= -3 + \\sqrt{10}\\end{aligned}\n$$\n\nHence, using the properties of\nlogarithms, we obtain\n\n$$\n\\begin{aligned}\n3^x &= -3 + \\sqrt{10} \\hspace{2.6em} \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{0.3em} \\answer{x = \\log_3(-3 + \\sqrt{10})}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 27',
    content:
      'Solve the simultaneous equations:\n\n$$\n\\begin{aligned}\n1 + 2\\log_5 x &= \\log_5 7y \\\\[6pt]\n\\log_7 (6x-1) &= 1 + \\log_7 y\\end{aligned}\n$$\n',
    markScheme:
      'Using the properties of logarithms, we rewrite the given equations as\nfollows.\n\n$$\n\\begin{aligned}\n\\log_5 5 + \\log_5 x^2 &= \\log_5 7y \\\\[6pt]\n\\log_5 5x^2 &= \\log_5 7y \\\\[6pt]\n5x^2 &= 7y \\hspace{5em}{(1)} \\\\[6pt]\n\\log_7 (6x-1) &= 1 + \\log_7 y \\\\[6pt]\n\\hspace{2.75em} \\log_7 (6x-1) &= \\log_7 7 + \\log_7 y \\\\[6pt]\n\\log_7 (6x-1) &= \\log_7 7y \\\\[6pt]\n6x - 1 &= 7y \\hspace{5em}{(2)}\\end{aligned}\n$$\n\nFrom the equations (1) and (2),\nwe obtain\n\n$$\n\\begin{aligned}\n5x^2 &= 6x - 1 \\\\[6pt]\n5x^2 - 6x + 1 &= 0 \\\\[6pt]\n(5x - 1)(x - 1) &= 0 \\\\[6pt]\nx &= \\dfrac{1}{5} \\text{ or } x = 1 \\end{aligned}\n$$\n\nSubstituting $x = \\dfrac{1}{5}$ into the equation (1), we get\n\n$$\n\\begin{aligned}\n5 \\left(\\dfrac{1}{5} \\right)^2 &= 7y \\hspace{2.5em}\\\\[12pt] \n\\dfrac{1}{5} &= 7y \\\\[12pt]\ny &= \\dfrac{1}{35}\\\\\n\\end{aligned}\n$$\n\nSubstituting $x = 1$ into the\nequation (1), we get\n\n$$\n\\begin{aligned}\n5(1)^2  &= 7y \\\\[12pt] \n5 &= 7y \\\\[12pt]\ny &= \\dfrac{5}{7}\\end{aligned}\n$$\n\nThus, the solutions are\n\n$$\n\\begin{aligned}\n&\\hspace{-2.15em}\\answer{x = \\dfrac{1}{5}, \\, y = \\dfrac{1}{35}} \\\\[12pt]\n& \\hspace{-1.9em}\\answer{x = 1, \\,\\, y = \\dfrac{5}{7}}\\end{aligned}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 28',
    content:
      'The first two terms of an infinite geometric sequence, in order, are\n\n$$\n3\\log_3x,\\,\\, 2\\log_3x,\\,\\, \\text{where $x > 0$.}\n$$\n\n\n- Find the common ratio, $r$. <span class="marks">[2]</span>\n\n- Show that the sum of the infinite sequence is $9\\log_3 x$.\n<span class="marks">[3]</span>\n\n\nThe first three terms of an arithmetic sequence, in order, are\n\n$$\n\\log_3x,\\,\\, \\log_3 \\dfrac{x}{3},\\,\\, \\log_3\\dfrac{x}{9},\\,\\, \\text{where $x > 0$.}\n$$\n\n\n- Find the common difference $d$, giving your answer as an\ninteger. <span class="marks">[3]</span>\n\n\nLet $S_6$ be the sum of the first $6$ terms of the arithmetic sequence.\n\n- Show that $S_6 = 6\\log_3 x - 15$. <span class="marks">[3]</span>\n\n- Given that $S_6$ is equal to one third of the sum of the\ninfinite geometric\nsequence, find $x$, giving your answer in the form\n$a^p$ where $a,p \\in \\mathbb{Z}$.\n<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n  &= \\dfrac{2\\log_3 x}{3\\log_3 x} \\\\[6pt]\n  &\\answer{= \\dfrac{2}{3}}\\end{aligned}\n  $$\n\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$, we get\n\n  $$\n  \\begin{aligned}\n  S_{\\infty} &= \\dfrac{3\\log_3x}{1 - 2/3} \\\\[6pt]\n  &= \\dfrac{3\\log_3x}{1/3} \\\\[12pt]\n  &\\answer{= 9\\log_3x} \\hspace{5em}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.9em} d &= u_2 - u_1 \\\\[6pt]\n  &= \\log_3 \\dfrac{x}{3} - \\log_3x \\\\[6pt]\n  &= (\\cancel{\\log_3x} - \\log_33) - \\cancel{\\log_3x} \\hspace{0.5em} \\\\[10pt]\n  &\\answer{= -1}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with\n$n=6$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.8em} S_6 &= \\dfrac{6}{2}(2u_1 + (6-1)d) \\\\[6pt]\n  &= \\dfrac{6}{2}(2(\\log_3 x) + (6-1)(-1)) \\\\[6pt]\n  &= \\dfrac{6}{2}(2\\log_3 x - 5) \\\\[11pt]\n  &\\answer{= 6\\log_3 x - 15}\\end{aligned}\n  $$\n\n- If we solve the equation $S_6 = \\dfrac{1}{3}S_{\\infty}$ for $x$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  6\\log_3 x - 15 &= \\dfrac{1}{3}(9\\log_3x) \\hspace{3.6em} \\\\[8pt]\n  6\\log_3 x - 15 &= 3\\log_3x \\\\[12pt]\n  3\\log_3x &= 15 \\\\[12pt]\n  \\log_3x &= 5 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{x = 3^5} \\hspace{2.5em}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 29',
    content:
      'Consider $f(x) = \\log_k(8x-2x^2)$, for $0 < x < 4$, where $k > 0$.\nThe equation $f(x) = 3$ has exactly one solution. Find the value of $k$.',
    markScheme:
      'If we rewrite the equation $f(x) = 3$ in the form $ax^2 + bx + c = 0$,\nwe have\n\n$$\n\\begin{aligned}\n\\hspace{3em} \\log_k(8x-2x^2) &= 3 \\\\[6pt]\n8x-2x^2 &= k^3 \\\\[6pt]\n0 &= 2x^2 - 8x + k^3\\end{aligned}\n$$\n\nHence the quadratic function\n$q(x) = 2x^2 - 8x + k^3$ has two equal roots.\nTherefore we get\n\n$$\n\\begin{aligned}\n\\hspace{5.1em} [\\text{discriminant of $q$}] &= 0 \\\\[6pt]\n(-8)^2 - 4(2)(k^3) &= 0 \\hspace{3em}  [\\triangle  = b^2 - 4ac]  \\\\[6pt]\n64 - 8k^3 &= 0 \\\\[6pt]\n8 - k^3 &= 0 \\\\[6pt]\nk^3 &= 8 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{3.3em} \\answer{k=2}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 30',
    content:
      'Solve $\\log_{\\sqrt{3}}(\\sin x) - \\log_{\\sqrt{3}}(\\cos x) = 1$, for\n$0 < x < \\dfrac{\\pi}{2}$.',
    markScheme:
      'We have\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/7f375b41-33b9-4587-922a-02c76aab5a0d/images/2bc01858-af34-4ec1-bef2-2c845c61c439/eea28ea6dc26969cf5c008612e865ae5046a04ef.svg)\n\n\nUsing the properties of logarithms and the right triangle above, we get\n\n$$\n\\begin{aligned}\n\\hspace{4.1em} \\log_{\\sqrt{3}}(\\sin x) - \\log_{\\sqrt{3}}(\\cos x) &= 1 \\\\[6pt]\n\\log_{\\sqrt{3}}\\hspace{-0.2em}\\Big(\\dfrac{\\sin x}{\\cos x}\\Big) &= 1 \\\\[8pt]\n\\log_{\\sqrt{3}}(\\tan x) &= 1 \\\\[10pt]\n\\tan x &= \\sqrt{3} \\\\[10pt]\nx &= \\dfrac{\\pi}{3} + n\\pi \\hspace{2.3em} [\\text{for $n \\in \\mathbb{Z}$}] \\\\[6pt]\nx &= \\dfrac{\\pi}{3} + 0 \\hspace{3em} [\\text{since $0 < x < \\pi\\hspace{-0.05em}/2$}] \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{2.1em} \\answer{x = \\dfrac{\\pi}{3}}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 31',
    content:
      'Solve the equation $15^{4a} = 81^{a+2}$ for $a$. Express your answer in\nterms of $\\ln 3$ and $\\ln 5$.',
    markScheme:
      'Using the properties of exponents and logarithms, we get\n\n$$\n\\begin{aligned}\n15^{4a} &= 81^{a+2} \\\\[10pt]\n(3\\cdot5)^{4a} &= 3^{4(a+2)} \\\\[9pt]\n\\cancel{3^{4a}}\\hspace{-0.15em}\\cdot5^{4a} &= \\cancel{3^{4a}}\\hspace{-0.15em}\\cdot3^8 \\\\[10pt]\n5^{4a} &= 3^8 \\\\[10pt]\n\\ln 5^{4a} &= \\ln 3^8 \\\\[10pt]\n4a \\ln 5 &= 8\\ln 3\\end{aligned}\n$$\n\n\n$$\n\\hspace{2.25em}\\answer{a = \\dfrac{2\\ln 3}{\\ln 5}}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 32',
    content:
      'Find the integer values of $a$ and $b$ for which\n\n$$\n\\begin{aligned}\na + b\\log_4 7 + 60\\log_{8} 14 &= 0.\\end{aligned}\n$$\n',
    markScheme:
      'Using the properties of logarithms, we have\n\n$$\n\\begin{aligned}\na + b\\log_4 7 + 60\\log_{8} 14 &= 0 \\\\[13pt]\na + \\dfrac{b\\ln 7}{2\\ln 2} + \\dfrac{60\\ln 14}{3\\ln 2} &= 0 \\\\[9pt]\na\\ln 2 + \\dfrac{b}{2}\\ln 7 + 20\\ln (2\\cdot7) &= 0 \\\\[9pt]\na\\ln 2 + \\dfrac{b}{2}\\ln 7 + 20(\\ln 2 + \\ln 7) &= 0 \\\\[9pt]\n(a + 20)\\ln 2 + \\bigg(\\dfrac{b}{2}+20\\bigg)\\ln 7 &= 0\\end{aligned}\n$$\n\nHence we get\n$\\answer{a = -20}$\nand  $\\answer{b = -40}$',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 33',
    content:
      'Solve the equation $14^{6x} = 64^{x+3}$ for $x$. Express your answer in\nterms of $\\ln 2$ and $\\ln 7$.',
    markScheme:
      'Using the properties of exponents and logarithms, we get\n\n$$\n\\begin{aligned}\n14^{6x} &= 64^{x+3} \\\\[10pt]\n(2\\cdot7)^{6x} &= 2^{6(x+3)} \\\\[9pt]\n\\cancel{2^{6x}}\\hspace{-0.15em}\\cdot7^{6x} &= \\cancel{2^{6x}}\\hspace{-0.15em}\\cdot2^{18} \\\\[10pt]\n7^{6x} &= 2^{18} \\\\[10pt]\n\\ln 7^{6x} &= \\ln 2^{18} \\\\[10pt]\n6x\\ln 7 &= 18\\ln 2\\end{aligned}\n$$\n\n\n$$\n\\hspace{1.9em}\\answer{x = \\dfrac{3\\ln 2}{\\ln 7}}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 34',
    content:
      '\n- Show that $\\log_2 \\sqrt{3-\\cos 2x} = \\log_4 (3-\\cos 2x)$.\n<span class="marks">[3]</span>\n\n- Hence, or otherwise, solve\n$\\log_4 (3\\sin x) \\hspace{0.15em}+\\hspace{0.15em} \\dfrac{1}{4} = \\log_2 \\sqrt{3-\\cos 2x}$,\nfor\n$0 \\hspace{-0.05em}<\\hspace{-0.05em} x \\hspace{-0.05em}<\\hspace{-0.05em}\\dfrac{\\pi}{2}$.<span class="marks">[5]</span>\n\n',
    markScheme:
      '\n- Using the properties of logarithms, we deduce\n\n  $$\n  \\begin{aligned}\n  \\hspace{6em} \\log_2 \\sqrt{3-\\cos 2x} &= \\dfrac{\\log_4 \\sqrt{3-\\cos 2x}}{\\log_4 2} \\\\[5pt]\n  &= \\dfrac{\\log_4 \\sqrt{3-\\cos 2x}}{\\frac{1}{2}\\log_4 4} \\\\[10pt]\n  &= 2 \\log_4 \\hspace{-0.1em}\\sqrt{3-\\cos 2x} \\hspace{3em} [\\text{since $\\log_4 4 = 1$}] \\\\[18pt]\n  &\\answer{= \\log_4(3-\\cos 2x)}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we deduce\n\n  $$\n  \\begin{aligned}\n  \\log_4 (3\\sin x) + \\dfrac{1}{4} &= \\textstyle \\log_2 \\sqrt{3-\\cos 2x} \\\\[4pt]\n  \\hspace{3.5em} \\log_4 (3\\sin x) + \\dfrac{1}{4}\\log_4 4 &= \\log_4(3-\\cos 2x) \\hspace{2.5em} [\\text{by part (a)}] \\\\[7pt]\n  \\textstyle \\log_4 (3\\sin x) + \\log_4\\sqrt{2} &= \\log_4(3-\\cos 2x) \\hspace{2.5em} [\\text{since $\\textstyle 4^{1/4} = \\sqrt{2}$}\\hspace{0.05em}] \\\\[10pt]\n  \\textstyle \\log_4 (3\\sqrt{2}\\sin x)\\hspace{-0.1em} &= \\log_4(3-\\cos 2x) \\\\[10pt]\n  \\textstyle 3\\sqrt{2}\\sin x &= 3-\\cos 2x \\qref{(1)} \\\\\n  \\end{aligned}\n  $$\n\n  Hence, solving the equation $(1)$ for $0 < x < \\frac{\\pi}{2}$, we\nfind\n\n  $$\n  \\begin{aligned}\n  \\textstyle 3\\sqrt{2}\\sin x &= 3 - (1 - 2\\sin^2 x) \\hspace{1.3em} [\\text{by double angle identity}] \\\\[9pt]\n  \\textstyle 3\\sqrt{2}\\sin x &= 2 + 2\\sin^2 x \\\\[9pt]\n  \\textstyle 2\\sin^2 x - 3\\sqrt{2}\\sin x + 2 &= 0 \\hspace{2.1em} [\\text{rearranging terms to form quadratic}] \\\\[9pt]\n  \\sin x &= \\dfrac{3\\sqrt{2} \\pm \\sqrt{18-4\\cdot2\\cdot2}}{4} \\\\[9pt] \n  \\sin x &= \\dfrac{3\\sqrt{2} - \\sqrt{2}}{4} \\hspace{3em} [\\text{since $\\sin x \\neq \\sqrt{2}$}] \\\\[9pt] \n  \\sin x &= \\dfrac{\\sqrt{2}}{2} \\\\ \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{3.1em} \\answer{x = \\dfrac{\\pi}{4}} \\hspace{3em} [\\text{since $0 < x < \\textstyle \\frac{\\pi}{2}$}]\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 35',
    content:
      '\n- Show that $\\log_{16}(\\cos 2x + 7) = \\log_4 \\sqrt{\\cos 2x + 7}$.\n<span class="marks">[3]</span>\n\n- Hence, or otherwise, solve\n$\\log_4(\\sqrt{10}\\cos x) = \\log_{16}(\\cos 2x + 7)$, for\n$0 < x < \\dfrac{\\pi}{2}$.<span class="marks">[5]</span>\n\n',
    markScheme:
      '\n- Using the properties of logarithms, we get\n\n  $$\n  \\begin{aligned}\n  \\log_{16}(\\cos 2x + 7) &= \\dfrac{\\log_4(\\cos 2x + 7)}{\\log_4 16} \\\\[6pt]\n  &= \\dfrac{\\log_4(\\cos 2x + 7)}{2\\log_4 4} \\\\[6pt]\n  &= \\dfrac{1}{2}\\log_4(\\cos 2x + 7) \\\\[12pt]\n  &\\answer{= \\log_4 \\textstyle \\sqrt{\\cos 2x + 7}} \\hspace{2.3em}\\end{aligned}\n  $$\n\n- Using the double angle formula for cosine, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.75em} \\log_4(\\textstyle \\sqrt{10}\\cos x) &= \\log_{16}(\\cos 2x + 7) \\\\[14pt]\n  \\log_4(\\textstyle \\sqrt{10}\\cos x) &= \\log_4 \\textstyle \\sqrt{\\cos 2x + 7} \\hspace{3em} [\\text{by part (a)}] \\hspace{3em} \\\\[14pt]\n  \\textstyle \\sqrt{10}\\cos x &= \\textstyle \\sqrt{\\cos 2x + 7} \\\\[14pt]\n  10\\cos^2 x &= \\cos 2x + 7 \\\\[14pt]\n  10\\cos^2 x &= (2\\cos^2x - 1) + 7  \\\\[14pt]\n  8\\cos^2 x &= 6 \\\\[10pt]\n  \\cos^2 x &= \\dfrac{3}{4} \\\\[4pt]\n  \\cos x &= \\dfrac{\\sqrt{3}}{2} \\hspace{3em} [\\text{since $0 < x < \\pi\\hspace{-0.05em}/2$}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{x = \\dfrac{\\pi}{6}} \\hspace{1em}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'Prove that the sum of three consecutive positive integers is divisible\nby $3$.',
    markScheme:
      'Let $n, \\, n + 1$ and $n+2$ be three consecutive positive integers for\nsome $n \\in \\mathbb{Z^{+}}$.\nThe sum of the three integers is\n\n$$\n\\begin{aligned}\n\\hspace{8em} n + (n + 1) + (n+2) &= 3n + 3 \\\\[6pt]\n&= 3(n+1) \\hspace{3em} [\\text{multiple of $3$}]\\end{aligned}\n$$\n\nHence the sum of three consecutive positive integers is divisible by\n$3$.',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '4',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 2',
    content:
      'Consider two consecutive positive integers, $k$ and $k+1$.\nShow that the difference of their squares is equal to the sum of the two\nintegers.',
    markScheme:
      'The difference of the squares of $k$ and $k+1$ is\n\n$$\n\\begin{aligned}\n\\hspace{9.5em}(k+1)^2 - k^2 &= k^2 + 2k + 1 - k^2 \\\\[6pt]\n&= 2k + 1 \\\\[6pt]\n&= k + (k + 1) \\hspace{3em} [\\text{sum of $k$ and $k+1$}]\\end{aligned}\n$$\n\nHence the difference of the squares of two consecutive positive integers\nis equal to their sum.',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '4',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 3',
    content:
      'The product of three consecutive integers is increased by the middle\ninteger.\nProve that the result is a perfect cube.',
    markScheme:
      'Let $n-1,\\, n$ and $n+1$ be three consecutive integers for some\n$n \\in \\mathbb{Z}$.\nThe product of these three integers is\n\n$$\n\\begin{aligned}\n(n-1) \\times n \\times (n + 1) &=  n \\times (n^2 - 1) \\\\[6pt]\n&= n^3 - n\\end{aligned}\n$$\n\nIf this product is\nincreased by the middle integer, $n$, then the result would be\n\n$$\n\\begin{aligned}\n\\hspace{6.25em} (n^3 - n) + n &= n^3 \\hspace{3em} [\\text{perfect cube}]\\end{aligned}\n$$\n\nHence the result of increasing the product of three consecutive integers\nby the middle integer is a perfect cube.',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '4',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 4',
    content:
      '\n- Show that $(2n-1)^3 + (2n+1)^3 = 16n^3+12n$ for $n \\in \\mathbb{Z}$.\n<span class="marks">[3]</span>\n\n- Hence, or otherwise, prove that the sum of the cubes of any two\nconsecutive odd integers is divisible by four. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  (2n-1)^3 &= (2n)^3 - 3(2n)^2 + 3(2n) - 1 \\hspace{2em} \\\\[6pt]\n  &= 8n^3 - 12n^2 + 6n - 1\\end{aligned}\n  $$\n\n  and\n\n  $$\n  \\begin{aligned}\n  (2n+1)^3 &= (2n)^3 + 3(2n)^2 + 3(2n) + 1 \\hspace{2em} \\\\[6pt]\n  &= 8n^3 + 12n^2 + 6n + 1\\end{aligned}\n  $$\n\n  Summing our expressions for $(2n-1)^3$ and $(2n+1)^3$, we get\n\n  $$\n  \\begin{aligned}\n  (2n-1)^3 + (2n+1)^3 &= 8n^3 - \\cancel{12n^2} + 6n - \\cancel{1} + 8n^3 + \\cancel{12n^2} + 6n + \\cancel{1}\n  \\end{aligned}\n  $$\n\n  Hence we get\n\n  $$\n  \\begin{aligned}\n  \\answer{(2n-1)^3 + (2n+1)^3 = 16n^3 + 12n} \\hspace{2em}\\end{aligned}\n  $$\n\n- Let $2n-1$ and $2n+1$ be two consecutive odd integers for some\n$n \\in \\mathbb{Z}$.\n  The sum of the cubes of $2n-1$ and $2n+1$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.4em} (2n-1)^3 + (2n+1)^3 &= 16n^3 + 12n \\hspace{2em} [\\text{by part (a)}] \\\\[6pt]\n  &= 4n(4n^2 + 3) \\hspace{2.22em} [\\text{multiple of $4$}]\\end{aligned}\n  $$\n\n  Hence the sum of the cubes of any two consecutive odd integers is\ndivisible by four.\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      '\n- Prove that $\\dfrac{5}{x^2} = \\dfrac{5}{x(x-2)}-\\dfrac{10}{x^2(x-2)}$. <span class="marks">[3]</span>\n\n- Determine the set of numbers $x$ for which the proof in part (a) is valid. <span class="marks">[2]</span>\n\n\n\n$$\n\n$$\n',
    markScheme:
      '\n- By working out the right side of the equation, we have\n\n  $$\n  \\begin{align*}\n      \\dfrac{5}{x(x-2)}-\\dfrac{10}{x^2(x-2)} &= \\dfrac{5x}{x^2(x-2)}-\\dfrac{10}{x^2(x-2)} \\\\[9pt]\n      &= \\dfrac{5x-10}{x^2(x-2)} \\\\[9pt]\n      &= \\dfrac{5\\ \\cancel{(x-2)}}{x^2\\ \\cancel{(x-2)}} \\\\[9pt]\n      &= \\dfrac{5}{x^2}   .\n  \\end{align*}\n  $$\n\n- We cannot have a denominator equal to zero, and therefore\n\n  $$\n  \\begin{align*}\n      x^2 &\\neq 0 \\Rightarrow x \\neq 0 \\hspace{3.95em} \\text{[from L.H.S.]} \\\\[8pt]\n      x(x-2) &\\neq 0 \\Rightarrow x \\neq 0 , 2 \\hspace{3em} \\text{[from R.H.S.]} \\\\[8pt]\n      x^2(x-2) &\\neq 0 \\Rightarrow x \\neq 0 , 2 \\hspace{3em} \\text{[from R.H.S.]}\n  \\end{align*}\n  $$\n\n\nTherefore the proof is valid for all values of $x$ except $x = 0$ and $x=2$.\n$\\answer{x \\in \\mathbb{R}, x \\neq 0 \\text{  and  } x\\neq 2}$',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 6',
    content:
      'Consider the function $f(x)=4x-x^2-1$.\n\n- Write $f(x)$ in the form $(x-h)^2+k$.<span class="marks">[2]</span>  \n\nA line is drawn through the points $A(0, f(0))$ and $B(2, f(2))$.\n\n- \n  - Write down the coordinates of points $A$ and $B$.\n  - Find $g(x)$, the equation of the line passing through points $A$ and $B$.\n  - Hence, show that the area enclosed by $f(x)$ and $g(x)$ is $\\dfrac{4}{3}$ units$^2$. <span class="marks">[4]</span>\n\n\n\nA horizontal line is drawn through the points $C(1, f(1))$ and $D(3, f(3))$.\n\n- Show that the area enclosed by $f(x)$ and line $CD$ is $\\dfrac{4}{3}$ units$^2$.<span class="marks">[2]</span>  \n\nConsider the two points $E(a, f(a))$ and $F(a+2, f(a+2))$.\n\n- Show that the area enclosed by the function $f$ and the line $EF$ is $\\dfrac{4}{3}$ units$^2$.<span class="marks">[5]</span>  \n',
    markScheme:
      '\n- To write $f$ in the desired form we must complete the square\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}\n      f(x)&=4x-x^2-1\\\\[6pt]\n      &=-(x^2-4x)-1\\\\[6pt]\n      &=-[(x-2)^2-(2)^2]-1\\\\[6pt]\n      &=-(x-2)^2+4-1\\\\[6pt]\n      &=\\answer{3-(x-2)^2}\\tag*{\\textbf{\\textcolor{black}{A1}}}\n  \\end{align*}\n  $$\n\n- \n  - We can find the $y-$coordinate by evaluating the function at both $x=0$ and $x=2$.\n\n    $$\n    \\begin{align*}\n        &&f(0)&=3-(0-2)^2&\\hspace{-1em} &&f(2)&= 3-(2-2)^2&  \\\\[6pt]\n        &&&=-1&\\hspace{-1em} && &= 3& \n    \\end{align*}\n    $$\n\n    Hence the coordinates are $\\answer{A(0,-1)\\text{ and }B(2,3)}$\n\n    $$\n    \\begin{align*}\n    \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - We can make a quick sketch of $f$\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/41d8354f-4cec-4922-8437-0ca160d21c7a/images/8a3d4b08-1625-4d2d-b1a0-4194dc8e9e19/AA1290-a.JPEG)\n\n\n    We have the $y-$intercept already.\n    And the gradient of the line through $A$ and $B$ is\n\n    $$\n    \\begin{align*}\n        m&=\\dfrac{3-(-1)}{2-0}\\\\[6pt]\n        m&=2 \n    \\end{align*}\n    $$\n\n    Therefore, the line through $A$ and $B$ is $\\answer{y=2x-1}$\n\n    $$\n    \\begin{align*}\n    \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - The shaded area, seen below, shows the area we need to find\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/41d8354f-4cec-4922-8437-0ca160d21c7a/images/7d705ca2-0e34-498c-9547-5edd23168ba9/AA1290-a2.JPEG)\n\n\n    To find the area we evaluate the following definite integral, where $A_x$ and $B_x$ are the $x-$coordinates of points $A$ and $B$ respectively\n\n    $$\n    \\begin{align*}\n        &=\\int_{A_x}^{B_x} (\\mathrm{f}(x)-\\mathrm{g}(x)) \\,dx \\\\[4pt]\n        &=\\int_{0}^{2} (4x-x^2-1-(2x-1)) \\,dx\\tag*{\\textbf{\\textcolor{black}{M1}}}\\\\[4pt]\n        &=\\int_{0}^{2} (2x-x^2) \\,dx\n    \\end{align*}\n    $$\n\n    Using the inverse power rule and substituting in the limits we get\n\n    $$\n    \\begin{align*}\n        &=\\left[x^2-\\dfrac{1}{3}x^3\\right]_{0}^{2}\\\\[4pt]\n         &=(2)^2-\\dfrac{1}{3}(2)^3-\\left((0)^2-\\dfrac{1}{3}(0)^3\\right) \\tag*{\\textbf{\\textcolor{black}{A1}}}\\\\[4pt]\n         &=\\answer{\\dfrac{4}{3}\\text{ units}^2}\\hspace{1em}\\text{...as required}\n    \\end{align*}\n    $$\n\n\n- We can make a quick sketch of the new region enclosed by $f(x)$ and the new (horizontal) $g(x)$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/41d8354f-4cec-4922-8437-0ca160d21c7a/images/93eaf720-1029-402e-8f97-65cddb8026ba/AA1290-a3.JPEG)\n\n\n  We now evaluate the definite integral, where $C_x$ and $D_x$ are the $x-$coordinates of points $C$ and $D$ respectively\n\n  $$\n  \\begin{align*}\n      &=\\int_{C_x}^{D_x} (\\mathrm{f}(x)-\\mathrm{g}(x)) \\,dx\\\\[3pt]\n      &=\\int_{1}^{3} (4x-x^2-1-(2)) \\,dx\\\\[3pt]\n      &=\\int_{1}^{3} (4x-x^2-3) \\,dx \\tag*{\\textbf{\\textcolor{black}{M1}}}\\\\[3pt]\n  \\end{align*}\n  $$\n\n  Using the inverse power rule, to integrate each term and substitute in the limits, we get\n\n  $$\n  \\begin{align*}\n      &=\\left[2x^2-\\frac{1}{3}x^3-3x\\right]_{1}^{3}\\\\[3pt]\n          &=2(3)^2-\\dfrac{1}{3}(3)^3-3(3)-\\left((2(1)^2-\\dfrac{1}{3}(1)^3-3(1)\\right) \\\\[3pt]\n          &=18-9-9-(2-\\frac{1}{3}-3)\\tag*{\\textbf{\\textcolor{black}{A1}}}\\\\[3pt]\n          &=\\answer{\\dfrac{4}{3}\\text{ units}^2}\\hspace{1em}\\text{...as required}\n  \\end{align*}\n  $$\n\n- The diagram below shows a region bound by $f(x)$ and $g(x)$ and the points $E(a, f(a))$ and $F(a+2, f(a+2)))$.\n  The function $f$ needs to be used to calculate the $y-$coordinate values of $E$ and $F$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/41d8354f-4cec-4922-8437-0ca160d21c7a/images/7597d9d0-8ed4-4fea-8e36-94f1a14efc4c/AA1290-a4.JPEG)\n\n\n  To find the area we need to find the linear function $g(x)$ in terms of $a$.\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  $\\mathrm{g}(x)$ is of the form $g(x)=m_gx+c_g$.\n  Where the gradient, $m_g$, is\n\n  $$\n  \\begin{align*}\n      m_g&=\\dfrac{y_2+y_1}{x_2-x_1}\\\\[3pt]\n      &=\\dfrac{\\mathrm{f}(a+2)-\\mathrm{f}(a)}{a+2-a}\\\\[3pt]\n      &=\\dfrac{(3-a^2)-(3-(a-2)^2))}{2}\n  \\end{align*}\n  $$\n\n  Simplifying we get\n\n  $$\n  \\begin{align*}\n      &=\\dfrac{-a^2+(a-2)^2}{2}\\\\[3pt]\n      &=\\dfrac{-a^2+a^2-4a+4}{2}\\\\[3pt]\n      m_g&=2-2a \\tag*{\\textbf{\\textcolor{black}{A1}}}\\\\[3pt]    \n  \\end{align*} \n  $$\n\n  Using the point $A(a, f(a))$ we can find the $y-$intercept, $c_g$, of $g(x)$\n\n  $$\n  \\begin{align*}\n      y&=(2-2a)x+c_g\\\\[3pt]\n      \\mathrm{f}(a)&=(2-2a)a+c_g\\\\[3pt]\n      3-(a-2)^2&=(2-2a)a+c_g\\\\[3pt]    \n      c_g&=3-(a-2)^2-2a+2a^2\\\\[3pt]    \n      c_g&=a^2+2a-1 \\tag*{\\textbf{\\textcolor{black}{A1}}}\\\\[3pt] \n  \\end{align*} \n  $$\n\n  The function $g(x)$ in terms of $a$ is\n\n  $$\n  \\begin{align*}\n      \\mathrm{g}(x)=(2-2a)x+a^2+2a-1\n  \\end{align*}\n  $$\n\n  The shaded area is given by the following definite integral\n\n  $$\n  \\begin{align*}\n      &=\\int_{E_x}^{F_x} (f(x)-g(x)) \\,dx\\\\[3pt]\n      &=\\int_{a}^{a+2} (4x-x^2-1-((2-2a)x+a^2+2a-1)) \\,dx \\tag*{\\textbf{\\textcolor{black}{M1}}}\n  \\end{align*}\n  $$\n\n  Simplifying we get\n\n  $$\n  \\begin{align*}\n      &=\\int_{a}^{a+2} (4x-x^2-1-(2x-2ax+a^2+2a-1)) \\,dx\\\\[3pt]\n      &=\\int_{a}^{a+2} (2x-x^2+2ax-a^2-2a) \\,dx\\\\[3pt]\n      &=\\int_{a}^{a+2} (-x^2+(2a+2)x-a^2-2a) \\,dx\n  \\end{align*}\n  $$\n\n  Now we can integrate each term, using the inverse power rule, and substitute in the limits.\n\n  $$\n  \\begin{align*}\n  =\\left[-\\dfrac{1}{3}x^3+\\dfrac{2a+2}{2}x^2-x(a^2+2a)\\right]_{a}^{a+2}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}\n  =-\\dfrac{1}{3}(a+2)^3+(a+1)(a+2)^2-(a+2)(a^2+2a)-...\\\\\n  ...\\left(-\\dfrac{1}{3}a^3+(a+1)a^2-a(a^2+2a)\\right)\n  \\end{align*}\n  $$\n\n  Expanding and simplifying we gradient\n\n  $$\n  \\begin{align*}\n  =-\\dfrac{1}{3}(a^3+6a^2+12a+8)+a^3+5a^2+8a+4-(a^3+4a^2+4a)-...\\\\\n  ...\\left(-\\dfrac{1}{3}a^3+a^3+a^2-a^3-2a^2\\right)\n  \\end{align*}\n  $$\n\n  We continue to collect any like terms and simplify to get\n\n  $$\n  \\begin{align*}\n  =\\cancel{-\\dfrac{1}{3}a^3}-2a^2-4a-\\dfrac{8}{3}+a^2+4a+4-...\\\\\n  ...\\left(\\cancel{-\\dfrac{1}{3}a^3}-a^2\\right)\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}\n  &=\\cancel{-2a^2}-\\cancel{4a}-\\dfrac{8}{3}+\\cancel{a^2}+\\cancel{4a}+4+\\cancel{a^2}\\tag*{\\textbf{A1}}\\\\\n  &=-\\dfrac{8}{3}+4\\\\\n  &=\\answer{\\dfrac{4}{3} \\,\\text{units}^2}\\hspace{3em}\\text{...as required}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '13',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 7',
    content:
      'Prove that if the sum of the digits of a 4-digit number is divisible by 3, then the four-digit number is also divisible by 3.',
    markScheme:
      'Let $n$ be a four-digit number such that\n\n$$\n\\begin{align*}\n    n=a_3a_2a_1a_0\n\\end{align*}\n$$\n\nwhere\n\n$$\n\\begin{align*}\n    a_3&=m \\times 10^3\\\\\n    a_2&=p\\times10^2\\\\\n    a_1&=r\\times 10^1\\\\\n    a_0&=s\\times 10^0\n\\end{align*}\n$$\n\n$m,p,r,s\\in\\mathbb{Z^+}$ and $0 \\leq m,p,r,s\\leq9$ and $m\\neq0$.\nWe can therefore rewrite $n$ as:\n\n$$\n\\begin{align*}\nn=m\\times10^3+p\\times10^2+r\\times10^1+s\\times10^0\\tag*{\\textbf{\\textcolor{black}{(M1)}}}\n\\end{align*}\n$$\n\nBecause the sum of the digits is divisible by three, we know that\n\n$$\n\\begin{align*}\n    m+p+r+s=3k\\hspace{1em}(k\\in\\mathbb{Z^+})\n    \\tag*{\\textbf{\\textcolor{black}{(M1)}}}\\\\\n\\end{align*}\n$$\n\nWe want to get that $3k$ into our equation for $n$ above as it is clearly divisible by 3, so we will rearrange to isolate for $s$:\n\n$$\n\\begin{align*}\n    s=3k-m-p-r\n\\end{align*}\n$$\n\nSubstituting this into the equation for $n$:\n\n$$\n\\begin{align*}\n    n&=m\\times10^3+p\\times10^2+r\\times10^1+3k-m-p-r\n    \\tag*{\\textbf{\\textcolor{black}{(M1)}}}\\\\[6pt]\n    n&=m\\times10^3-m+p\\times10^2-p+r\\times10^1-r+3k\\\\[6pt]\n    n&=m(1000-1)+p(100-1)+r(10-1)+3k\\\\[6pt]\n    n&=999m+99p+9r+3k \\tag*{\\textbf{\\textcolor{black}{A1}}}\\\\[6pt]\n    n&=3(333m+33p+3r+k)\\tag*{\\textbf{\\textcolor{black}{A1}}}\\\\[6pt]\n    &\\hspace{-0.5em}n \\text{ is divisible by 3}\\\\[6pt]\n\\end{align*}\n$$\n\nHence the four-digit number is also divisible by $3$.',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'Consider the line $L_1$ which passes through the points $A (-4,-4)$ and $B(8,-1)$.\n\n- Find the gradient of the line $L_1$. <span class="marks">[1]</span>  \n\nLine $L_2$ is perpendicular to $L_1$ and passes through the point $(-a,2a)$ where $a \\in \\mathbb{R}$.\n\n- Given that $L_2$ intersects the $y$-axis at $y=2a-3$, find the value of $a$. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Using the formula for the gradient of a line\n\n  $$\n   \\begin{align*}\n      m&=\\frac{y_2-y_1}{x_2-x_1}\n  \\end{align*}\n  $$\n\n  we can find the gradient of $L_1$\n\n  $$\n   \\begin{align*}\n      m_1&=\\frac{-1-(-4)}{8-(-4)}\\\\[9pt]\n     &=\\frac{3}{12}\\\\[9pt]\n     &=\\answer{\\dfrac{1}{4}}\\tag*{\\textbf{\\textcolor{black}{A1}}}\n      \\end{align*}\n  $$\n\n- As $L_2$ is perpendicular to $L_1$ we can find the gradient of $L_2$ using the formula\n\n  $$\n  \\begin{align*}\n      m_1\\times m_2&=-1\\\\[9pt]\n      \\frac{1}{4}\\times m_2&=-1\\\\[9pt]\n      m_2&=-4\\tag*{\\textbf{\\textcolor{black}{(A1)}}}\n  \\end{align*}\n  $$\n\n  We can form an equation, using the gradient formula, and solve for $a$.\n  Substituting in $m_2$ and the points $(-a,2a)$ and $(0,2a-3)$ we get\n\n  $$\n  \\begin{align*}\n  m_2&=\\frac{y_2-y_1}{x_2-x_1}\\\\[9pt]\n  -4&=\\frac{(2a-3)-2a}{0-(-a)}\\tag*{\\textbf{\\textcolor{black}{(M1)}}}\\\\[9pt]\n    -4 &=\\frac{-3}{a}\\\\[9pt]\n  -4a&=-3\\\\[6pt] \n  a&=\\answer{\\dfrac{3}{4}}\\tag*{\\textbf{\\textcolor{black}{A1}}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '4',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 2',
    content:
      'Let $f(x) = x^3$ and $g(x) = 2x - 1$, for $x \\in \\mathbb{R}$.\n\n- Find $g^{-1}(x)$. <span class="marks">[2]</span>\n\n- Find $(g\\circ f)(x)$. <span class="marks">[2]</span>\n\n- Solve the equation $(g\\circ f)(x) = 0$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- If we solve the equation $(g\\circ g^{-1})(x) = x$ for\n$y = g^{-1}(x)$, we get\n\n  $$\n  \\begin{aligned}\n  g(g^{-1}(x)) &= x \\\\[12pt]\n  g(y) &= x \\\\[12pt]\n  2y - 1 &= x \\\\[12pt]\n  2y &= x + 1 \\\\[6pt]\n  y &= \\dfrac{x + 1}{2} \\hspace{1.9em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{g^{-1}(x) = \\dfrac{x+1}{2}} \\hspace{0.6em}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  (g\\circ f)(x) &= g(f(x)) \\\\[6pt]\n  &= g(x^3) \\\\[6pt]\n  &\\answer{= 2x^3-1} \\hspace{1.1em}\\end{aligned}\n  $$\n\n- Solving the equation $(g\\circ f)(x) = 0$ for $x$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.5em} 2x^3-1 &= 0 \\hspace{3em} [\\text{by part (b)}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{12.2em} \\answer{x \\approx 0.794} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
      'Let $f(x) = x^2 + 2$ and $g(x) = x - 3$, for $x \\in \\mathbb{R}$.\n\n- Find $f(3)$. <span class="marks">[2]</span>\n\n- Find $(g\\circ f)(3)$. <span class="marks">[2]</span>\n\n- Find $g^{-1}(x)$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Evaluating $f(x) = x^2 + 2$ for $x = 3$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.6em} f(3) &= 3^2 + 2 \\\\[6pt]\n  &= 9 + 2 \\\\[6pt]\n  &\\answer{= 11}\\end{aligned}\n  $$\n\n- Evaluating $(g\\circ f)(x) = g(f(x))$ for $x = 3$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.4em} (g\\circ f)(3) &= g(f(3)) \\\\[6pt]\n  &= g(11) \\hspace{3em} [\\text{by part (a)}] \\\\[6pt]\n  &= 11 - 3 \\\\[6pt]\n  &\\answer{= 8}\\end{aligned}\n  $$\n\n- If we solve the equation $(g\\circ g^{-1})(x) = x$ for\n$y = g^{-1}(x)$, we find\n\n  $$\n  \\begin{aligned}\n  g(g^{-1}(x)) &= x \\\\[6pt]\n  g(y) &= x \\\\[6pt]\n  y - 3 &= x \\\\[6pt]\n  y &= x + 3 \\hspace{2.1em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{g^{-1}(x) = x+3} \\hspace{0.8em}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Let $f(x) = 4x - 3$ and $g(x) = 2x$, for $x \\in \\mathbb{R}$.\n\n- Write down the value of $g(5)$. <span class="marks">[1]</span>\n\n- Find $(f\\circ g)(x)$. <span class="marks">[2]</span>\n\n- Find $(f\\circ g)^{-1}(x)$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- $\\answer{g(5) = 10}$\n- We have\n\n  $$\n  \\begin{aligned}\n  (f\\circ g)(x) &= f(g(x)) \\\\[6pt]\n  &= f(2x) \\\\[6pt]\n  &= 4(2x) - 3 \\\\[6pt]\n  &\\answer{= 8x - 3}\\end{aligned}\n  $$\n\n- Let $h(x) = (f\\circ g)(x)$.\nHence $h^{-1}(x) = (f\\circ g)^{-1}(x)$.\n  If we solve the equation $(h\\circ h^{-1})(x) = x$ for\n$y = h^{-1}(x)$, we get\n\n  $$\n  \\begin{aligned}\n  h(h^{-1}(x)) &= x \\\\[12pt]\n  h(y) &= x \\\\[12pt]\n  8y - 3 &= x \\\\[12pt]\n  8y &= x + 3 \\\\[6pt]\n  y &= \\dfrac{x + 3}{8} \\hspace{1.8em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{(f\\circ g)^{-1}(x) = \\dfrac{x + 3}{8}} \\hspace{2.7em}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 5',
    content:
      'The graph of $y=f(x)$ for $-3\\leq x\\leq 4$ is shown in the following diagram.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/034fc9e0-20b2-4311-a983-f42b00ef90fa/images/0d3ba1ec-6f76-4f87-8209-56090c4506bd/AA1269-q.JPEG)\n\n\n\n- Write down the value of $f(2)$. <span class="marks">[1]</span>  \n\nLet $g(x)=2f(x)-1$ for $-3\\leq x\\leq 4$.\n\n- On the axes above, sketch the graph of $g$. <span class="marks">[2]</span>\n\n- Hence determine the value of $(g\\circ f)(2) $. <span class="marks">[1]</span>\n\n- Hence solve the equation $(f\\circ g)(x)=0$ when $x>0$. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Evaluating $f(x)$ when $x=2$\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/034fc9e0-20b2-4311-a983-f42b00ef90fa/images/c72e725f-d507-4121-a17b-66ecf4396773/AA1269-a1.JPEG)\n\n\n  Hence $\\tcbhighmath{f(2)=1}$.\n\n  $$\n  \\begin{align*}\n     \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The function $f(x)$ is mapped to $g(x)$ by two transformations.\n  By considering $g(x)=\\textcolor{blue}{2}f(x)\\textcolor{green}{-1}$, we can see there is a $\\text{\\textcolor{blue}{vertical stretch by a scale factor of}}\\,\\,\\textcolor{blue}{2}$ and a $\\text{\\textcolor{green}{vertical shift down}}\\,\\textcolor{green}{1}\\,\\text{\\textcolor{green}{unit}}$.\n  The vertical stretch ($\\textcolor{blue}{y=2f(x)}$) is shown in blue below.\n  Note that the vertical distance from the $y$-axis of every point on the curve is doubled.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/034fc9e0-20b2-4311-a983-f42b00ef90fa/images/41efdd00-fe18-4d90-9631-5f9a1149eef3/AA1269-a2.JPEG)\n\n\n  Then the vertical shift is shown in green ($\\textcolor{green}{y=2f(x)-1}$) .\n  Note that every point on the blue curve is shifted vertically down $1$ unit.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/034fc9e0-20b2-4311-a983-f42b00ef90fa/images/51af6fb3-badd-4b23-be15-204b433352af/AA1269-a3.JPEG)\n\n\n  Correct local minimum at $(-2,1)$\n\n  $$\n      \\begin{align*}\n       \\tag*{\\textbf{A1}}\n      \\end{align*}\n  $$\n\n  Correct $y$-intercept at $(0,5)$\n\n  $$\n      \\begin{align*}\n       \\tag*{\\textbf{A1}}\n      \\end{align*}\n  $$\n\n- From part (a) we know that $f(2)=1$.\n\n  $$\n  \\begin{align*}\n      (g\\circ f)(2)&=g(f(2))\n  \\end{align*}\n  $$\n\n  Hence\n\n  $$\n  \\begin{align*}\n      &=g(1)\\\\[6pt]\n      &=3\n  \\end{align*}\n  $$\n\n  Hence $\\tcbhighmath{(g\\circ f)(2)=3}$.\n\n  $$\n  \\begin{align*}\n       \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  Here is the graph of $g(x)$ showing that $g(1)=3$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/034fc9e0-20b2-4311-a983-f42b00ef90fa/images/d9677404-62bb-4ed2-94e5-6951c683bf6f/AA1269-a4.JPEG)\n\n\n- We have the equation $(f\\circ g)(x)=0$. The L.H.S. is a composite function which can be rewritten\n\n  $$\n  \\begin{align*}\n      (f\\circ g)(x)&= f(\\textcolor{red}{g(x)})\n  \\end{align*} \n  $$\n\n  Here we can see that $\\textcolor{red}{g(x)}$ is the inner function and $f(x)$ is the outer function, meaning that the output of $g$ will be the input of $f$.\n  By considering the graph of $f(x)$ we see that when $x=3$ then $f(x)=0$.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/034fc9e0-20b2-4311-a983-f42b00ef90fa/images/1d572c1f-c5a2-405c-ad40-af9f075ac80d/AA1269-a5.JPEG)\n\n\n  This means in order to have an output of $0$, the input must be $3$.\n\n  $$\n  \\begin{align*}\n      f(\\textcolor{red}{g(x)})=0\\\\[6pt]\n      f(\\textcolor{red}{3})=0\n  \\end{align*}\n  $$\n\n  Therefore we need to find the value of $x$, where $x>0$, such that $g(x)=3$.\n  From part (c), we know that $g(1)=3$, and we can see that this is the only possible solution when $x>0$.\n  Hence if $x>0$ and $(f\\circ g)(x)=0$ then $\\answer{x=1}$.\n\n  $$\n  \\begin{align*}\n       \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 6',
    content:
      'Let $f(x) = 2x$, $g(x) = 4x + 6$ and $h(x) = (f\\circ g)(x)$, for\n$x \\in \\mathbb{R}$.\n\n- Find $h(x)$. <span class="marks">[2]</span>\n\n- Find $h^{-1}(x)$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.3em} h(x) &= (f\\circ g)(x) \\\\[6pt]\n  &= f(g(x)) \\\\[6pt]\n  &= f(4x+6) \\\\[6pt]\n  &= 2(4x+6) \\\\[6pt]\n  &\\answer{= 8x+12}\\end{aligned}\n  $$\n\n- If we solve the equation $(h\\circ h^{-1})(x) = x$ for\n$y = h^{-1}(x)$, we get\n\n  $$\n  \\begin{aligned}\n  h(h^{-1}(x)) &= x \\\\[12pt]\n  h(y) &= x \\\\[12pt]\n  8y+12 &= x \\\\[12pt]\n  8y &= x-12 \\\\[6pt]\n  y &= \\dfrac{x-12}{8} \\hspace{1.3em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{h^{-1}(x) = \\dfrac{x-12}{8}}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 7',
    content:
      'The table below shows some values of the domain and range for the function $f(x)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/41870299-38d4-44cf-9ed4-32dbd2e3953e/images/823b37d5-f1dc-4a1f-9675-17cfed71856d/aa1060a.PNG)\n\n\nThe graph below shows $y=g(x)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/41870299-38d4-44cf-9ed4-32dbd2e3953e/images/fa9fbb2e-26b0-4247-80c1-dd118b963fcd/aa1060b.PNG)\n\n\n\n- Evaluate\n  \n  - $f(2)$\n  - $g(f(2))$ <span class="marks">[3]</span>\n\n\n- Find $f^{-1}(g(2))$ <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - Using the table for $f(x)$ we can write\n\n    $$\n    \\begin{align*}\n    &\\tcbhighmath{f(2)=5} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Using our previous answer and the point $(5, 3)$ on $g(x)$ we can write\n\n    $$\n    \\begin{align*}\n    &g(f(2))=g(5) \\tag*{\\textbf{(M1)}}\\\\[3pt]\n    &\\hspace{0.525em}\\tcbhighmath{g(f(2))=3} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- We can evaluate $g(2)=4$ using the graph.\n\n  $$\n  \\begin{aligned}\n  \\tag*{\\textbf{(A1)}}\n  \\end{aligned}\n  $$\n\n  Recall the definition of an inverse function if $f(a)=b$ then $f^{-1}(b)=a$.\n  From the table we can see that $f(3)=4$, therefore\n\n  $$\n  \\begin{align*}\n  f^{-1}(g(x))=f^{-1}(4)\\\\[6pt]\n  \\tcbhighmath{f^{-1}(4)=3} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
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
    title: 'Question 8',
    content:
      'Let $f(x) = \\sqrt{x-3}$, for $x \\geq 3$.\n\n- Find $f^{-1}(x)$. <span class="marks">[2]</span>\n\n\nLet $g(x) = x^2 +1$, for $x \\in \\mathbb{R}$.\n\n- Find $(g\\circ f)(28)$. <span class="marks">[2]</span>\n\n- Write down the range of:\n  \n  - $f^{-1}$;\n  - $g$. <span class="marks">[2]</span>\n\n\n',
    markScheme:
      '\n- If we solve the equation $(f\\circ f^{-1})(x) = x$ for\n$y = f^{-1}(x)$, we get\n\n  $$\n  \\begin{aligned}\n  f(f^{-1}(x)) &= x \\\\[7pt]\n  f(y) &= x \\\\[5pt]\n  \\sqrt{y - 3} &= x \\\\[6pt]\n  y - 3 &= x^2 \\\\[6pt]\n  y &= x^2 + 3 \\hspace{1.7em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{f^{-1}(x) = x^2 + 3} \\hspace{0.4em}\n  $$\n\n- Evaluating $f(x) = \\sqrt{x - 3}$ for $x = 28$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1em} f(28) &= \\sqrt{28-3} \\\\[6pt]\n  &= \\sqrt{25} \\\\[8pt]\n  &= 5\\end{aligned}\n  $$\n\n  Hence we find\n\n  $$\n  \\begin{aligned}\n  (g\\circ f)(28) &= g(f(28)) \\\\[7pt]\n  &= g(5) \\\\[6pt]\n  &= 5^2 +1 \\hspace{2.2em} \\\\[7pt]\n  &\\answer{= 26} \\end{aligned}\n  $$\n\n- \n  - $\\answer{[3,\\infty)}$\n  - $\\answer{[1,\\infty)}$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Two functions, $f$ and $g$, are defined in the following table.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/a18c1edb-e266-48ea-9409-91450ee6259e/images/72fb6a0c-ca68-40db-a765-15cc4604525e/f16cb92d520a6fc6d08cc849fc6b256348e1335f.svg)\n\n\n\n- Write down the value of $f(2)$. <span class="marks">[1]</span>\n\n- Find the value of $(g\\circ f)(2)$. <span class="marks">[2]</span>\n\n- Find the value of $g^{-1}(5)$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- $\\answer{f(2) = 0}$\n- We have\n\n  $$\n  \\begin{aligned}\n  (g\\circ f)(2) &= g(f(2)) \\\\[6pt]\n  &= g(0) \\\\[6pt]\n  &\\answer{= -1}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  (g\\circ g^{-1})(5) &= 5 \\hspace{3.7em} \\\\[6pt]\n  g(g^{-1}(5)) &= 5 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{9.7em} \\answer{g^{-1}(5) = -4} \\hspace{3em} [\\text{since $g(-4) = 5$}]\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 10',
    content:
      'Let $f(x)=4x-2$, for $x \\in \\mathbb{R}$.\n\n- The graph of a linear function $g$ is perpendicular to the graph of $f$ and passes through the origin. Find an expression for $g(x)$.<span class="marks">[2]</span>\n\n- The graph of a linear function $h$ is parallel to the graph of $f$ and passes through the point $(3,4)$. Find an expression for $h(x)$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The slope of $f$ is $m_f=4$, then $m_g=-\\dfrac{1}{4}$ is the slope of the function $g$ that is perpendicular to $f$, we have\n\n  $$\n  \\begin{align*}\n  y-y_1&=m(x-x_1)\\\\[6pt]\n   y-0&=-\\dfrac{1}{4}(x-0)\\\\[6pt]\n   y&=-\\dfrac{1}{4}x\n  \\end{align*}\n  $$\n\n  Therefore, $\\tcbhighmath{g(x)=-\\dfrac{1}{4}x}.$\n- The slope of the function $h$ is $m_h=4$ because $h$ is parallel to the graph $f$. We have,\n\n  $$\n  \\begin{align*}\n  y-y_1=m(x-x_1)\\\\[6pt]\n  y-4&=4(x-3)\\\\[6pt]\n  y-4&=4x-12\\\\[6pt]\n  y=4x-8\n  \\end{align*}\n  $$\n\n  Therefore, $\\tcbhighmath{h(x)=4x-8}.$\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 11',
    content:
      'The equation of a line $L_1$ is $2x + 3y = -5$.\n\n- Find the gradient of $L_1$. <span class="marks">[2]</span>\n\n\nA second line, $L_2$, is perpendicular to $L_1$.\n\n- State the gradient of $L_2$. <span class="marks">[1]</span>\n\n\nThe point P$(4,0)$ lies on $L_2$.\n\n- Find the equation of $L_2$, giving your answer in the form\n$ax + by + d = 0$, where $a, b, d \\in \\mathbb{Z}$. <span class="marks">[2]</span>\n\n\nThe point Q is the intersection of $L_1$ and $L_2$.\n\n- Find the coordinates of Q. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- If we rewrite the equation of $L_1$ in the form $y = mx + c$, we\nhave\n\n  $$\n  \\begin{aligned}\n  2x + 3y &= -5 \\\\[12pt]\n  3y &= -2x - 5 \\\\[6pt]\n  y &= -\\dfrac{2}{3}x-\\dfrac{5}{3} \\hspace{0.4em} \\\\\n  \\end{aligned}\n  $$\n\n  Hence the gradient of $L_1$ is\n$\\answer{m_{L_1} = -\\dfrac{2}{3}}$\n- The gradient of $L_2$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{9em} m_{L_2} &= -\\dfrac{1}{m_{L_1}} \\hspace{3em} [\\text{since $L_2 \\perp L_1$}] \\\\[6pt]\n  &= -\\dfrac{1}{(-2/3)} \\\\[6pt]\n  &\\answer{= \\dfrac{3}{2}}\\end{aligned}\n  $$\n\n- Using the point-gradient formula with P$(4,0)$ and $m = 3/2$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.2em} y - y_1 &= m(x - x_1) \\\\[5pt]\n  y - 0 &= \\dfrac{3}{2}\\hspace{0.05em}(x - 4) \\\\[6pt]\n  2y &= 3x - 12 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{3.45em} \\answer{0 = 3x - 2y - 12}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  L_1&:\\hspace{1.0em} 2x + 3y = -5 \\hspace{3em}{(1)} \\\\[6pt]\n  L_2&:\\hspace{1.0em} 3x - 2y = 12 \\hspace{3.25em}{(2)}\\end{aligned}\n  $$\n\n  Solving\nthe system of linear equations $(1)$-$(2)$ for $x$ and $y$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  \n  \\hspace{-0.8em} \\begin{array}{rcl}\n  x &=& 2 \\\\[6pt]\n  y &=& -3\n  \\end{array}\\end{aligned}\n  $$\n\n  Hence the coordinates of Q are\n$\\answer{(2,-3)}$\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 12',
    content:
      'Let $f(x) = \\sqrt{x+7}$, for $x \\geq -7$.\n\n- Find $f^{-1}(3)$. <span class="marks">[3]</span>\n\n\nLet $g$ be a function such that $g^{-1}$ exists for all real numbers.\n\n- Given that $g(9) = 4$, find $(f\\circ g^{-1})(4)$.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- If we solve the equation $(f\\circ f^{-1})(3) = 3$ for\n$y = f^{-1}(3)$, we get\n\n  $$\n  \\begin{aligned}\n  f(f^{-1}(3)) &= 3 \\hspace{3.8em} \\\\[6pt]\n  f(y) &= 3 \\\\[4pt]\n  \\sqrt{y + 7} &= 3 \\\\[6pt]\n  y + 7 &= 9 \\\\[6pt]\n  y &= 2 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{f^{-1}(3) = 2} \\hspace{2.4em}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  4 &= g(9) \\\\[6pt]\n  g^{-1}(4) &= g^{-1}(g(9)) \\\\[6pt]\n  \\hspace{11em} g^{-1}(4) &= 9 \\hspace{3.5em} [\\text{since $(g^{-1}\\hspace{-0.1em}\\circ g)(9) = 9$}]\\end{aligned}\n  $$\n\n  Hence we obtain\n\n  $$\n  \\begin{aligned}\n  (f\\circ g^{-1})(4) &= f(g^{-1}(4)) \\hspace{0.9em} \\\\[8pt]\n  &= f(9) \\\\[6pt]\n  &= \\sqrt{9+7} \\\\[6pt]\n  &= \\sqrt{16} \\\\[8pt]\n  &\\answer{= 4}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Let $f(x) = x^3 + 1$ and $g(x) = x-2$, for $x \\in \\mathbb{R}$.\n\n- Find $f(2)$. <span class="marks">[2]</span>\n\n- Find $f^{-1}(x)$. <span class="marks">[2]</span>\n\n- Solve $(f\\circ g)(x) = 0$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Evaluating $f(x) = x^3 + 1$ for $x = 2$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.6em} f(2) &= 2^3 + 1 \\\\[6pt]\n  &= 8 + 1 \\\\[6pt]\n  &\\answer{= 9}\\end{aligned}\n  $$\n\n- Solving the equation $(f\\circ f^{-1})(x) = x$ for $y = f^{-1}(x)$,\nwe find\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.6em} f(f^{-1}(x)) &= x \\\\[6pt]\n  f(y) &= x \\\\[6pt]\n  y^3 + 1 &= x \\\\[6pt]\n  y^3 &= x - 1 \\\\[5pt]\n  y &= \\sqrt[3]{x-1} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2em} \\answer{f^{-1}(x) = \\sqrt[3]{x-1}}\n  $$\n\n- Solving the equation $(f\\circ g)(x) = 0$ for $x$, we obtain\n\n  $$\n  \\begin{aligned}\n  f(g(x)) &= 0 \\\\[7pt]\n  f(x-2) &= 0 \\\\[6pt]\n  \\hspace{4.6em} (x-2)^3 + 1 &= 0 \\\\[6pt]\n  x-2 &= \\sqrt[3]{-1} \\hspace{3em} [=-1] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{1.7em} \\answer{x = 1}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 14',
    content:
      'The following diagram shows the graph of $y = f(x)$, for\n$-4 \\leq x \\leq 5$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/c34c19d0-884e-4539-a819-e275c2b0d6d7/images/663b2cb7-2f4f-4aae-ac6f-66128af5d430/8dc73726e7704b5f5e31e8ab0e8d2ebbdc109321.svg)\n\n\n\n- Write down the value of:\n  \n  - $f(1)$;\n  - $f^{-1}(2)$. <span class="marks">[2]</span>\n\n\n- Find the domain of $f^{-1}$. <span class="marks">[2]</span>\n\n- Sketch the graph of $y = f^{-1}(x)$ on the same grid above.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - $\\answer{f(1) = 3}$\n  - $\\answer{f^{-1}(2) = 0}$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{domain of $f^{-1}$} &= \\text{range of $f$} \\hspace{1.7em} \\\\[6pt]\n  &\\answer{= [-2,4]}\\end{aligned}\n  $$\n\n- The graph of $y = f^{-1}(x)$ is a reflection of the graph of\n$y = f(x)$ across the line $y = x$.\n  Hence, if we sketch the graph of $y = f^{-1}(x)$ on the same grid\nbelow, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c34c19d0-884e-4539-a819-e275c2b0d6d7/images/ed275ec0-9181-4d08-8b91-8ecbfeaad85a/90bb640268e36201860be09ad192280e600a64a2.svg)\n\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Let $f(x) = (x+2)^3$, for $x \\in \\mathbb{R}$.\n\n- Find $f^{-1}(x)$. <span class="marks">[3]</span>\n\n\nLet $g$ be a function so that $(f\\circ g)(x) = 27x^6$.\n\n- Find $g(x)$. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- If we solve the equation $(f\\circ f^{-1})(x) = x$ for\n$y = f^{-1}(x)$, we get\n\n  $$\n  \\begin{aligned}\n  f(f^{-1}(x)) &= x \\\\[7pt]\n  f(y) &= x \\\\[6pt]\n  (y+2)^3 &= x \\\\[6pt]\n  y+2 &= \\sqrt[3]{x} \\\\[6pt]\n  y &= \\sqrt[3]{x} - 2 \\hspace{1.1em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.3em} \\answer{f^{-1}(x) = \\sqrt[3]{x} - 2}\n  $$\n\n- If we solve the equation $(f\\circ g)(x) = 27x^6$ for $y = g(x)$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  f(g(x)) &= 27x^6 \\\\[6pt]\n  f(y) &= 27x^6 \\\\[6pt]\n  (y+2)^3 &= 27x^6 \\\\[6pt]\n  y+2 &= 3x^2 \\\\[6pt]\n  y &= 3x^2 - 2 \\hspace{0.1em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{1.5em} \\answer{g(x) = 3x^2 - 2}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'The following diagram shows the graph of $y = f(x)$, for\n$-1 \\leq x \\leq 2$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/8407806b-3c8d-4f8a-ba57-52619272880d/images/ee08b3c6-49a0-41f7-814f-bb4d9079b11c/ccc9d5942ccfefc2e6313a34922fed1ada13594f.svg)\n\n\n\n- Write down the value of:\n  \n  - $f(1)$;\n  - $f^{-1}(-2)$. <span class="marks">[2]</span>\n\n\n- Find $(f\\circ f)(1)$. <span class="marks">[2]</span>\n\n- Sketch the graph of $y = f(-x)$ on the same grid above. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - $\\answer{f(1) = 2}$\n  - $\\answer{f^{-1}(-2) = -1}$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  (f\\circ f)(1) &= f(f(1)) \\\\[6pt]\n  &= f(2) \\\\[6pt]\n  &\\answer{= 6}\\end{aligned}\n  $$\n\n- The graph of $y = f(-x)$ is a reflection of the graph of $y = f(x)$\nin the $y$-axis.\n  Hence, if we sketch the graph of $y = f(-x)$ on the same grid below,\nwe have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8407806b-3c8d-4f8a-ba57-52619272880d/images/64f14811-163b-49f4-8bcc-e95f5b9a1d96/d2b3518aa3484d1ffd19b0a1dd3f20d6f92c6046.svg)\n\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      '\n- Express $2x^2 - 8x + 9$ in the form $a(x+b)^2 + c$ where\n$a,b,c \\in\\mathbb{Z}$. <span class="marks">[2]</span>\n\n- Given that $f(x) = x - 2$ and $(g\\circ f)(x) = 2x^2 - 8x + 9$, find\n$g(x)$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the method of completing the square, we get\n\n  $$\n  \\begin{aligned}\n  2x^2 - 8x + 9 &= 2\\big[x^2 - 4x\\big] + 9 \\\\[6pt]\n  &= 2\\big[(x-2)^2 - 4\\big] + 9 \\hspace{2em} \\\\[6pt]\n  &= 2(x-2)^2 - 8 + 9 \\\\[6pt]\n  &\\answer{= 2(x-2)^2 + 1}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.3em} (g\\circ f)(x) &= 2x^2 - 8x + 9 \\\\[6pt]\n  g(f(x)) &=  2(x-2)^2 + 1 \\hspace{3em} [\\text{by part (a)}] \\\\[6pt]\n  g(x-2) &= 2(x-2)^2 + 1 \\hspace{3em} [\\text{since $f(x) = x - 2$}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{g(x) = 2x^2 + 1} \\hspace{3.4em}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 18',
    content:
      'The area, $A$, of a given square can be represented by the function\n\n$$\n\\begin{aligned}\nA(P) &= \\dfrac{P^2}{16}, \\hspace{0.5em} P \\geq 0,\\end{aligned}\n$$\n\nwhere\n$P$ is the perimeter of the square.\nThe graph of the function $A$, for $0 \\leq P \\leq 20$, is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/46346d59-3adc-4e1d-9102-a09321b02eea/images/ff39b657-e430-4f20-b9ef-fcc41c30e921/8c2c1a298c1b79e92e64f94fe2b4a4d452e488ad.svg)\n\n\n\n- Find the value of $A(20)$. <span class="marks">[1]</span>\n\n- On the grid above, draw the graph of the inverse function, $A^{-1}$.\n<span class="marks">[3]</span>\n\n- In the context of the question, explain the meaning of\n$A^{-1}(4) = 8$. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Evaluating $A(P)$ for $P = 20$, we get\n\n  $$\n  \\begin{aligned}\n  A(P) &= \\dfrac{20^2}{16} \\hspace{1.7em} \\\\[6pt]\n  &\\answer{= 25}\\end{aligned}\n  $$\n\n- If we draw the graph of the inverse function, $A^{-1}$, on the grid\nbelow, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/46346d59-3adc-4e1d-9102-a09321b02eea/images/1a31c9ea-d742-4abc-b00b-5af09583611b/508588bd8662a40575516587374d1e3379be6249.svg)\n\n\n- $\\answer{\\text{For a given square, when the area is \\(4\\), the perimeter is \\(8\\)}}$\n',
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
    title: 'Question 19',
    content:
      'The function $f$ is defined by $f(x) = \\sqrt[3]{2x+1}$, for\n$-14 \\leq x \\leq 13$.\n\n- Write down the range of $f$. <span class="marks">[2]</span>\n\n- Find an expression for $f^{-1}$. <span class="marks">[2]</span>\n\n- Write down the domain and range of $f^{-1}$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n1 $f$ is continuous and increasing;\n  2 $f(-14) = -3$ and $f(13) = 3$.\n  Hence the range of $f$ is\n$\\answer{[-3,3]}$\n- If we solve the equation $(f\\circ f^{-1})(x) = x$ for\n$y = f^{-1}(x)$, we get\n\n  $$\n  \\begin{aligned}\n  f(f^{-1}(x)) &= x \\\\[13pt]\n  f\\left(y\\right) &= x \\\\[12pt]\n  \\sqrt[3]{2y+1} &= x \\\\[12pt]\n  2y+1 &= x^3 \\\\[6pt]\n  y &= \\dfrac{x^3 - 1}{2} \\hspace{1.3em}\\end{aligned}\n  $$\n\n  Hence an\nexpression for $f^{-1}$ is\n$\\answer{f^{-1}(x) = \\dfrac{x^3 - 1}{2}}$\n- The domain and range of $f^{-1}$ are\n\n  $$\n  \\begin{aligned}\n  \\text{domain}: & \\hspace{0.75em} \\hspace{0.525em}\\answer{[-3,3]} \\\\[8pt]\n  \\text{range}: & \\hspace{0.75em} \\hspace{0.525em}\\answer{[-14,13]}\\end{aligned}\n  $$\n\n',
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
      'The ocean pressure, $P$, under sea level can be modelled by the function\n\n$$\nP(D) = \\dfrac{D}{10}+1\n$$\n\nwhere $D$ is the distance in metres below sea\nlevel and $P$ is measured in atmospheres.\nA submarine cruising near the surface is submerged according to the\nfunction\n\n$$\nD(t) = 10+5t\n\n$$\n\nwhere $t$ is measured in minutes and $D$ is\nthe distance the submarine is below sea level, measured in\nmetres.\n\n- Find the composite function $P\\circ D$ and explain what it means in\nthe\ncontext of this question<span class="marks">[3]</span>\n\n- Find and interpret $(P\\circ D)(10)$.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The composite function can be expressed as\n\n  $$\n  \\begin{aligned}\n  (P\\circ D) (t) &= P(D(t)) \\rule[-3.5mm]{0pt}{4mm}\\\\\n  &= P(10+5t)\\rule[-3.5mm]{0pt}{9mm}\\\\\n  &= \\dfrac{10+5t}{10}+1 \\rule[-4.5mm]{0pt}{9mm}\\\\\n  &\\hspace{0.28em}\\answer{= 2+\\dfrac{t}{2}}\\rule[-5.5mm]{0pt}{9mm}\\hspace{6em}{(1)}\\end{aligned}\n  $$\n\n\n  $$\n  \\answer{\\text{This composite function represents the ocean pressure (in atmospheres) outside the submarine at time $t$ minutes.}}\n  $$\n\n- Substituting $t=10$ in (1), we get\n\n  $$\n  \\begin{aligned}\n  (P\\circ D)(10)&=2+\\dfrac{10}{2}\\rule[-3.5mm]{0pt}{4mm}\\\\\n  &\\hspace{0.28em}\\answer{=7}\\rule[-3.5mm]{0pt}{9mm}\\end{aligned}\n  $$\n\n\n  $$\n  \\answer{\\text{This result means that after 10 minutes, the ocean pressure outside the submarine is 7 atmospheres.}}\n  $$\n\n',
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
    title: 'Question 21',
    content:
      'Let $f(x) = 0.2e^{x+2} - 4$, for $-3 \\leq x \\leq 2$.\n\n- On the following grid, sketch the graph of $y = f(x)$. <span class="marks">[3]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/b7400009-b3d5-4424-8dfe-4781fa255590/images/4d1c7bf9-8d2a-4f7a-945e-f582b73039b2/219ede634589aee775d4d590dd79b30ff5c63914.svg)\n\n\n- Find the coordinates of:\n  \n  - the $x$-intercept;\n  - the $y$-intercept. <span class="marks">[2]</span>\n\n\n\nThe graph of $f$ is reflected in the $x$-axis, then translated 1 unit in the direction of the positive $x$-axis and 2 units in the direction of the positive $y$-axis to obtain the graph of a function $g$.\n\n- Find $g(x)$. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- If we draw the graph of $y = f(x)$ for $-3 \\leq x \\leq 2$ [by using\nG.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/b7400009-b3d5-4424-8dfe-4781fa255590/images/0c8cb343-6319-4c4b-bd01-6881dfb5c2ff/a0ce7feb5a9182c2d088b3711cfba75a324b8033.svg)\n\n\n- \n  - Solving the equation $f(x) = 0$ for $x$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.2em} 0.2e^{x+2} - 4 &= 0 \\\\[6pt]\n    x &\\approx 0.996 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence the coordinates of the $x$-intercept are\n$\\answer{(0.996,0)}$\n  - Evaluating $y = f(x)$ for $x = 0$, we have\n\n    $$\n    \\begin{aligned}\n    y &= f(0) \\\\[6pt]\n    &= 0.2e^{0+2} - 4 \\hspace{0.4em} \\\\[7pt]\n    &\\approx -2.52\\end{aligned}\n    $$\n\n    Hence the coordinates of the\n$y$-intercept are\n$\\answer{(0,-2.52)}$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.5em} g(x) &= -f(x-1) + 2 \\\\[6pt]\n  &= -\\big[0.2e^{(x-1)+2} - 4\\big] + 2 \\\\[6pt]\n  &\\answer{= -0.2e^{x+1} + 6}\\end{aligned}\n  $$\n\n',
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
      'A tyre manufacturing company has found that the number of tyres it\nproduces, $N$, can be modelled by the function\n\n$$\nN(t)=3t-9\n\n$$\n\nwhere $t$\nis the number of hours the factory operates per day, with a minimum of 3\nhours.\nThe profit the company makes, $P$, in dollars, depends on the number of\ntyres produced, and is modelled by the function\n\n$$\nP(N)=60N-850\n\n$$\n\nwhere\n$N$ is the number of tyres produced.\n\n- Find the company\'s profit or loss if it operates for $6$ hours per\nday.<span class="marks">[2]</span>\n\n- Find the company\'s profit in terms of the hours of operation per\nday, $t$.<span class="marks">[2]</span>\n\n- Determine the number of hours the company needs to operate the\nfactory per day in order to earn a positive profit. Give your answer\nto the nearest hour.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Substituting $t=6$ in $N(t)$, we get\n\n  $$\n  \\begin{aligned}\n  N(6) &= 3(6)-9 = 9\\\\\n  \\end{aligned}\n  $$\n\n  Thus, the profit is given by P(9)\n\n  $$\n  \\begin{aligned}\n   P(9) &= 60(9)-850 = -310\n   \\end{aligned}\n  $$\n\n  Therefore, operating $6$\nhours a day, the company has a loss:\n $\\boxed{-310}$ \n- The profit in terms of the hours of operation per day can be found\nby the composite function $P\\circ N$. Hence, we get\n\n  $$\n  \\begin{aligned}\n  (P\\circ N)(t) &= P(N(t)) \\rule[-3mm]{0pt}{4mm}\\\\\n  &= P(3t-9) \\rule[-3mm]{0pt}{7mm}\\\\\n  &= 60(3t-9)-850\\rule[-3mm]{0pt}{7mm}\\\\\n  &\\hspace{-5em}\\answer{(P\\circ N)(t) = 180\\hspace{0.05em}t-1390}\\hspace{5em}{(1)}\\rule[0mm]{0pt}{4mm}\\end{aligned}\n  $$\n\n- The company has a positive profit if (1) is greater than 0. Hence\n\n  $$\n  \\begin{aligned}\n  (P\\circ N)(t) &>0\\rule[-3mm]{0pt}{4mm}\\\\\n  180t-1390 &> 0 \\rule[-3mm]{0pt}{9mm}\\\\\n  t &> \\dfrac{1390}{180} \\rule[-3mm]{0pt}{9mm}\\\\\n  t &> 7.72.\\rule[0mm]{0pt}{5.5mm}\\end{aligned}\n  $$\n\n  Therefore, the\nfactory needs to operate\n$\\answer{8}$\nhours per day in order for the company to earn a positive profit.\n',
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
      'The circumference, $C$, of a given circle can be represented by the\nfunction\n\n$$\n\\begin{aligned}\nC(A) &= 2\\pi\\sqrt{\\dfrac{A}{\\pi}}, \\hspace{0.5em} A \\geq 0,\\end{aligned}\n$$\n\nwhere $A$ is the area of the circle.\nThe graph of the function $C$, for $0 \\leq A \\leq 24$, is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/f456fc19-890c-4269-962e-6613e63c4f7d/images/1e281987-3b8b-4dcc-809b-86850ebedbb5/3388e210bb4d6f02426816cb2651396f2822c4c1.svg)\n\n\n\n- Find the value of $C(24)$. <span class="marks">[1]</span>\n\n- On the grid above, draw the graph of the inverse function, $C^{-1}$.\n<span class="marks">[3]</span>\n\n- In the context of the question, explain the meaning of\n$C^{-1}(2\\pi) = \\pi$. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- Evaluating $C(A)$ for $A = 24$, we get\n\n  $$\n  \\begin{aligned}\n  C(A) &= 2\\pi\\sqrt{\\dfrac{24}{\\pi}} \\\\[6pt]\n  &\\answer{\\approx 17.4}\\end{aligned}\n  $$\n\n- If we draw the graph of the inverse function, $C^{-1}$, on the grid\nbelow, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f456fc19-890c-4269-962e-6613e63c4f7d/images/4d19e261-35fc-454f-b0a3-35e2cd9aa8c3/fae26733051cc1a7c15c3478abb0d0697e69d7fa.svg)\n\n\n- $\\answer{\\text{For a given circle, when the circumference is \\(2\\pi\\), the area is \\(\\pi\\)}}$\n',
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
    title: 'Question 24',
    content:
      'The functions $f$ and $g$ are defined such that $f(x) = \\dfrac{x-2}{3}$\nand $g(x) = 12x+4$.\n\n- Show that $(g\\circ f)(x) = 4x-4$. <span class="marks">[2]</span>\n\n- Given that $(g\\circ f)^{-1}(a) = 10$, find the value of $a$.\n<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.8em} (g\\circ f)(x) &= g\\hspace{0.05em}(f(x)) \\\\[9pt]\n  &= g\\Big(\\dfrac{x-2}{3}\\Big) \\\\[5pt]\n  &= 12\\Big(\\dfrac{x-2}{3}\\Big)+4 \\\\[9pt]\n  &= 4\\hspace{0.05em}(x-2) + 4 \\\\[13pt]\n  &= 4x-4\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.25em} (g\\circ f)^{-1}(a) &= 10 \\\\[6pt]\n  (g\\circ f)(10) &= a \\\\[6pt]\n  4(10)-4 &= a \\hspace{3em} [\\text{by part $(a)$}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{a = 36}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 25',
    content:
      '\n- Express $3x^2 + 18x + 20$ in the form $a(x+b)^2 + c$ where\n$a,b,c \\in\\mathbb{Z}$. <span class="marks">[2]</span>\n\n- Given that $f(x) = x + 3$ and $(g\\circ f)(x) = 3x^2 + 18x + 20$,\nfind $g(x)$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the method of completing the square, we get\n\n  $$\n  \\begin{aligned}\n  3x^2 + 18x + 20 &= 3\\big[x^2 + 6x\\big] + 20 \\\\[6pt]\n  &= 3\\big[(x+3)^2 - 9\\big] + 20 \\\\[6pt]\n  &= 3(x+3)^2 - 27 + 20 \\\\[6pt]\n  &\\answer{= 3(x+3)^2 - 7}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{10.8em} (g\\circ f)(x) &= 3x^2 + 18x + 20 \\\\[6pt]\n  g(f(x)) &= 3(x+3)^2 - 7 \\hspace{3em} [\\text{by part (a)}] \\\\[6pt]\n  g(x+3) &= 3(x+3)^2 - 7 \\hspace{3em} [\\text{since $f(x) = x + 3$}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{g(x) = 3x^2 - 7} \\hspace{0.6em}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 26',
    content:
      'A town is planning to construct a jogging path in a grass field\n$170$ m long and $70$ m\nwide. The path is to be the shape of a rectangle with two semicircles of\nradius $x$, as shown in the diagram. The sides of the rectangle\nconnecting the circles are to be $100$ m long.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/65b7adec-96d0-405d-bd92-b10fc425e8d5/images/8c94d818-8318-43d4-a5bd-1126ae8aab6c/22448faee8b9c6574b3fdefa8505f67030a94583.svg)\n\n\n\n- Write down a function, $P$, (in metres) for the perimeter of the\njogging path, in terms of the radius, $x$.<span class="marks">[1]</span>\n\n- Determine the domain and range of $P$, taking into consideration the\ndimensions of the grass field.<span class="marks">[2]</span>\n\n- Find an equation for the inverse function $P^{-1}(x)$. Express your\nanswer in the form $P^{-1}(x)=mx+c$.<span class="marks">[2]</span>\n\n\nThe designers of the path are deciding whether the total length of the\npath should be $300$ m,\n$400$ m, or $500$ m. The\ndesigners want to maximise the perimeter of the path, but fit the path\nin the grass field.\n\n- Determine which length is most suitable, given the\ndimensions of the grass field.<span class="marks">[2]</span>  \n',
    markScheme:
      "\n- The perimeter for the path is the sum of the two straight sides\nconnecting the circles and the perimeter of a complete circle of\nradius $x$. We get\n\n  $$\n  \\answer{P(x) = 200+2\\pi x}\n  $$\n\n- The length of the path will be $100+2x$ and its width $2x$.\nTherefore we require $100+2x\\leq 170$ and $2x\\leq 70$. Hence\n\n  $$\n  \\begin{aligned}\n  \\answer{\\text{Domain: } 0 < x \\leq 35.}\\\\\n  \\end{aligned}\n  $$\n\n  For\nthe range, the function $P(x)$ is increasing and $P(0)=200$ and\n$P(35)=200+70\\pi$. We get\n\n  $$\n  \\begin{aligned}\n  \\answer{\\text{Range: } 200\\leq P(x) \\leq 200+70\\pi.}\\\\\n  \\end{aligned}\n  $$\n\n- Let's denote $P(x)$ by $y$. To find the inverse we can interchange\nthe variables $x$ and $y$ and rearrange for $y$, as follows\n\n  $$\n  \\begin{aligned}\n  y &= 200+2\\pi x\\rule[-3.5mm]{0pt}{3mm}\\\\\n  x &= 200+2\\pi y\\rule[-3.5mm]{0pt}{9mm}\\\\\n  y &= \\dfrac{x-200}{2\\pi}\\rule[-3.5mm]{0pt}{9mm}\\\\ \n  &\\hspace{-3.2em}\\answer{P^{-1}(x) = \\dfrac{1}{2\\pi}x - \\dfrac{100}{\\pi}}\\rule[0mm]{0pt}{5.5mm}\\end{aligned}\n  $$\n\n- For each of the proposed perimeters $P$, we can find the radius\nvalue $x$ as $x=P^{-1}(P)$, then the length and width of the running\ntrack can be calculated, as shown in the following table.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/65b7adec-96d0-405d-bd92-b10fc425e8d5/images/282aeb49-7c34-4d6f-82ac-e270f942f1f3/8985560368df68be350c8eca5afbe5b19a733963.svg)\n\n\n  From the table, we can see that the largest perimeter of the options\nthat still fit inside the grass field dimensions is\n\n  $$\n  \\answer{P=400\\hspace{0.25em}\\text{m}.}\n  $$\n\n",
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
    title: 'Question 27',
    content:
      'Harry is planning on constructing a glass window in one of the outer\nwalls of his house. The dimensions of the wall space available are 2m x\n2m. Harry wants the window to be in the shape shown in the diagram\nbelow. The bottom section is a rectangle and the top part is a\nsemicircle of radius $x$ m. Harry wants the\nheight of the rectangle to be fixed at 1 m.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/6bbc6b0f-8f28-44ce-aae9-1a77840548c5/images/1970cc7c-4fb4-47c4-8b78-0b174bc78816/4b81f49038bd3a70fed3ed55e752da67f426bdf2.svg)\n\n\n\n- Write down a function $P$ (in metres) for the perimeter of the\nwindow in terms of the radius, $x$.<span class="marks">[1]</span>\n\n- Determine the domain and range of $P$, taking into consideration the\ndimensions of the available wall.<span class="marks">[2]</span>\n\n- Find an equation for the inverse function $P^{-1}(x)$.<span class="marks">[2]</span>\n\n\nHarry wants to maximise the size of the window, however the window frame\nthat covers the perimeter of the window can only be 5, 6, or 7 metres\nlong, due to manufacturing restrictions.\n\n- Determine which perimeter length is the best option for\nHarry.<span class="marks">[2]</span>  \n',
    markScheme:
      "\n- The perimeter for the window is the sum of the three sides of the\nrectangle and the semicircle, thus we get\n\n  $$\n  \\begin{aligned}\n  P(x) &= \\text{Rectangle width}+2\\times\\text{Rectangle height}+\\text{Semicircle} \\rule[-3mm]{0pt}{4mm}\\\\\n  &= 2x+2(1)+\\dfrac{\\cancel{2}\\pi x}{\\cancel{2}} \\rule[-3mm]{0pt}{8mm}\\\\\n  &\\hspace{-2.15em}\\answer{P(x) = 2+(2+\\pi)x}\\rule[0mm]{0pt}{5mm}\\end{aligned}\n  $$\n\n- The width of the window will be $2x$ and the height $1+x$.\nTherefore, we require $2x\\leq 2$ and $1+x\\leq 2$.\nHence\n\n  $$\n  \\begin{aligned}\n  \\answer{\\text{Domain: } 0\\leq x \\leq 1.}\\\\\n  \\end{aligned}\n  $$\n\n  Now\nfor the range, the function $P(x)$ is increasing and $P(0)=2$ and\n$P(1)=4+\\pi$. Therefore,\n\n  $$\n  \\begin{aligned}\n  \\answer{\\text{Range: } 2\\leq P(x) \\leq 4+\\pi.}\\\\\n  \\end{aligned}\n  $$\n\n- Let's denote $P(x)$ by $y$. To find the inverse we can interchange\nthe variables $x$ and $y$ and rearrange for $y$, as follows\n\n  $$\n  \\begin{aligned}\n  y &= 2+(2+\\pi)x\\rule[-3mm]{0pt}{3mm}\\\\\n  x &= 2+(2+\\pi)y\\rule[-3mm]{0pt}{9mm}\\\\\n  y &= \\dfrac{x-2}{(2+\\pi)}\\rule[-3mm]{0pt}{9mm}\\\\ \n  &\\hspace{-3.2em}\\answer{P^{-1}(x) = \\dfrac{x-2}{(2+\\pi)}}\\rule[0mm]{0pt}{6mm}\\end{aligned}\n  $$\n\n- For each of the proposed perimeters $P$, we can find the radius\nvalue $x$ as $x=P^{-1}(P)$, then the length and width of the window\ncan be calculated, as shown in the following table\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6bbc6b0f-8f28-44ce-aae9-1a77840548c5/images/2db4d8fa-3dad-4595-94a4-c7663a5dbf7c/95900dceeb57876cf3bec3ce67dc138811471933.svg)\n\n\n  From the table, we can see that the perimeter that maximizes the\ndimension of the window that fits in the wall is\n\n  $$\n  \\answer{P=7\\hspace{0.25em}\\text{m}.}\n  $$\n\n",
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
    title: 'Question 28',
    content:
      'Let $f(x) = e^x - 2$ and $g(x) = 3x + k$, for $x \\in \\mathbb{R}$, where\n$k$ is a constant.\n\n- Find $(g\\circ f)(x)$. <span class="marks">[2]</span>\n\n- Given that\n$\\displaystyle \\lim_{x \\rightarrow -\\infty} (g\\circ f)(x) = -4$,\nfind the value of $k$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.8em} (g\\circ f)(x) &= g(f(x)) \\\\[6pt]\n  &= g(e^x - 2) \\\\[6pt]\n  &= 3(e^x - 2) + k \\\\[6pt]\n  &\\answer{= 3e^x - 6 + k}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\lim_{x \\rightarrow -\\infty} (g\\circ f)(x) &= -4 \\hspace{6.9em} \\\\[4pt]\n  \\lim_{x \\rightarrow -\\infty}\\hspace{-0.2em}\\big[3e^x - 6 + k\\big] &= -4 \\\\[4pt]\n  3(0) - 6 + k &= -4 \\\\[9pt]\n  - 6 + k &= -4 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.2em} \\answer{k = 2}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 29',
    content:
      'The function $f$ is defined as $f(x)=3e^{\\frac{x}{2}}$ where $x \\in \\mathrm{R}$ and is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/e175b6d9-563c-4c8f-a8fa-b8e3ca7ce99f/images/b05207b3-e706-477a-85d6-ff97ee420070/AA1180_q.JPEG)\n\n\n\n- Write down the equation of the asymptote of $f(x)$. <span class="marks">[1]</span>\n\n- Write down the $y-$intercept of $f(x)$. <span class="marks">[1]</span>\n\n- Hence, or otherwise, sketch the inverse of $f(x)$ on the image above. Make sure any asymptotes and/or intercepts are clearly marked. <span class="marks">[2]</span>\n\n- Determine the domain of the inverse of $f(x)$. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- $\\answer{y=0}$\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Occurs when $x=0$, $f(0)=3\\times e^0$ therefore $\\answer{3}$\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The inverse is a reflection in the line $y=x$\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/e175b6d9-563c-4c8f-a8fa-b8e3ca7ce99f/images/1c0086c2-1f6d-4408-915e-db801b80aa78/AA1180_a.JPEG)\n\n\n  A1 Correct shape/asymptotes\nA1 Correct intercept\n- $\\answer{\\text{The domain of the inverse is }x>0}$\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 30',
    content:
      'Let $f(x) = \\dfrac{\\ln(x+2)}{2}$, for $x > -2$. The diagram below shows\npart of the graph of $f$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/5ca4f0d8-2c1b-4539-b90a-140704aebde0/images/41cb6db4-c952-44a9-a5d0-dc5fd6907d15/0b26b0e195f4a087c10216491d624f903712efff.svg)\n\n\n\n- Find the coordinates of:\n  \n  - the $x$-intercept;\n  - the $y$-intercept. <span class="marks">[2]</span>\n\n\n- Find the equation of the vertical asymptote to the graph of $f$.\n<span class="marks">[2]</span>\n\n- Find the area of the region enclosed by the graph of $f$, the\n$x$-axis and\nthe $y$-axis. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - Solving the equation $f(x) = 0$ for $x$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.8em} \\dfrac{\\ln(x+2)}{2} &= 0 \\\\[4pt]\n    x &= -1 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence the coordinates of the $x$-intercept are\n$\\answer{(-1,0)}$\n  - Evaluating $f(x)=\\dfrac{\\ln(x+2)}{2}$ for $x = 0$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.4em} f(0) &= \\dfrac{\\ln 2}{2} \\\\[8pt] \n    &\\approx 0.347\\end{aligned}\n    $$\n\n    Hence the coordinates of the\n$y$-intercept are\n$\\answer{(0,0.347)}$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\lim_{x \\rightarrow 0^+} \\ln x &= -\\infty \\hspace{3em} \\\\[7pt]\n  \\lim_{x \\rightarrow -2^+} \\ln (x+2) &= -\\infty \\\\[6pt]\n  \\lim_{x \\rightarrow -2^+} f(x) &= -\\infty \\\\\n  \\end{aligned}\n  $$\n\n  Hence\nthe equation of the vertical asymptote is\n$\\answer{x = -2}$\n- The area of the region enclosed by the graph of $f$, the $x$-axis\nand the $y$-axis is\n\n  $$\n  \\begin{aligned}\n  \\hspace{10em} A &= \\int_{-1}^0 \\dfrac{\\ln(x+2)}{2}\\,\\mathrm{d}x \\\\[8pt]\n  &\\answer{\\approx 0.193 \\text{ units}^2} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n',
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
    title: 'Question 31',
    content:
      'Helen is working with the function\n\n$$\n\\begin{align*}\n    f(x)&=e^{-x}(x-2)^2\n\\end{align*}\n$$\n\nwhere $x>0$.\nShe wants to learn more about its behaviour.\n\n- Show that $f\'(x)=-e^{-x}(x^2-6x+8)$. <span class="marks">[2]</span>\n\n- Help Helen by finding $f\'\'(x)$.<span class="marks">[1]</span>\n\n- Hence, or otherwise find\n  \n  - the exact coordinates of any stationary points.\n  - the nature of these stationary points.<span class="marks">[6]</span>\n\n\n\nThe function is concave down between $a<x<b$.\n\n- Find $a$ and $b$ in the form $s \\pm \\sqrt{t}$ where $s, t \\in \\mathbb{Z}$. <span class="marks">[4]</span>  \n\nHelen begins looking at another function $g(x)$.\nShe knows that $g(2)=5$ and $g\'(2)=3$.\n\n- Find the exact value of $[f(g(2))]\'$. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- We can differentiate the function using the product rule\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack} \\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}\n      f'(x)&=(e^{-x})'(x-2)^2+e^{-x}((x-2)^2)'\\\\[6pt]\n      &=-e^{-x}(x-2)^2+2e^{-x}(x-2) \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  Factorise out the $e^{-x}$ term and simplify\n\n  $$\n  \\begin{align*}\n      &=-e^{-x}((x-2)^2-2(x-2))\\\\[6pt]\n      &=-e^{-x}(x^2-4x+4-2x+4)\\\\[6pt]\n      &\\hspace{0.25em}\\answer{=-e^{-x}(x^2-6x+8)} \\hspace{2em} \\text{... as required}\n  \\end{align*}\n  $$\n\n- We can use the product rule again\n\n  $$\n  \\begin{align*}\n      f''(x)&=(-e^{-x})'(x^2-6x+8)+(-e^{-x})(x^2-6x+8)'\\\\[6pt]\n      &=e^{-x}(x^2-6x+8)-e^{-x}(2x-6)\\tag*{\\textbf{A1}}\\\\[6pt]\n      &\\hspace{0.25em}\\answer{=e^{-x}(x^2-8x+14)}\n  \\end{align*}\n  $$\n\n- \n  - To find the $x-$coordinate of stationary points we must solve $f'(x)=0$.\n\n    $$\n    \\begin{align*}\n        \\textcolor{white}{hack} \\tag*{\\textbf{M1}}\n    \\end{align*}\n    $$\n\n\n    $$\n    \\begin{align*}\n        0&=-e^{-x}(x^2-6x+8)\\\\[6pt]\n        0&=-e^{-x}(x-2)(x-4)\n    \\end{align*}\n    $$\n\n    With the function fully factorised we can solve for $x$\n\n    $$\n    \\begin{align*}\n        -e^{-x}=0&&\\hspace{1.8em} &x-2=0&x-4=0&\\\\[6pt]\n        \\text{no solution}&& &\\hspace{1.8em}x=2&x=4& \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n    We can see that there are $2$ stationary points at $x=2$ and $x=4$.\n    Next we can find the $y-$coordinate of these two points.\n\n    $$\n    \\begin{align*}\n        f(2)=e^{-2}(2-2)^2 & &f(4)=e^{-4}(4-2)^2\\\\[6pt]\n        f(2)=0 & &f(4)=4e^{-4}\n    \\end{align*}\n    $$\n\n    The exact coordinates of the two stationary points are\n\n    $$\n    \\begin{align*}\n    \\hspace{0.525em}\\answer{(2, 0) \\text{ and } (4, 4e^{-4})} \\tag*{\\textbf{A1A1}}\n    \\end{align*}\n    $$\n\n  - To classify the stationary points we can evaluate $f''(x)$ at the stationary points.\n    If $f''(x_{\\text{stat point}}) > 0$, the S.P. is a minimum, and if $f''(x_{\\text{stat point}}) < 0$, the S.P. is a maximum.\n\n    $$\n    \\begin{align*}\n        \\textcolor{white}{hack} \\tag*{\\textbf{M1}}\n    \\end{align*}\n    $$\n\n\n    $$\n    \\begin{align*}\n        f''(2)&=e^{-2}(2^2-8\\times 2+14) & &f''(4)=e^{-4}(4^2-8\\times 4+14)\\\\[6pt]\n        f''(2)&=2e^{-2} & &f''(4)=-2e^{-4}\\\\[6pt]\n        f''(2)&>0 \\hspace{1em} \\text{... minimum}& &f''(4)<0 \\hspace{1em} \\text{... maximum}\n    \\end{align*}\n    $$\n\n\n    $$\n    \\begin{align*}\n    \\hspace{0.525em}\\answer{(2, 0) \\text{ is a minimum and } (4, 4e^{-4}) \\text{ is a maximum.}} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- When a function changes concavity we know that $f''(x)=0$.\n\n  $$\n  \\begin{align*}\n     f''(x)&=e^{-x}(x^2-8x+14)\\\\[6pt]\n     &=0\n  \\end{align*}\n  $$\n\n  $e^{-x}\\neq 0$ therefore we can use $x^2-8x+14$ to learn about the concavity.\n  The original function $f(x)$ is concave down when $f''(x)<0$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack} \\tag*{\\textbf{R1}}\n  \\end{align*}\n  $$\n\n  We can make a rough sketch of $y=x^2-8x+14$, recognising the region of the graph which is below zero. This is shown as the solid line.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0bc762d2-1c0a-4382-bc4d-446bb07fc04f/images/94b1bb7d-77f9-4402-970b-2624ab949cbe/AA1153_a.JPEG)\n\n\n  Hence, between the roots, $a$ and $b$, will be the region for which $f(x)$ is concave down.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack} \\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n  To find $a$ and $b$ we can use the quadratic formula.\n\n  $$\n  \\begin{align*}\n     0&=x^2-8x+14\\\\[6pt]\n     x&=\\frac{-(-8)\\pm \\sqrt{(-8)^2-4\\times1 \\times 14}}{2\\times 1}\\tag*{\\textbf{M1}}\\\\[6pt]\n     x&=\\frac{8\\pm \\sqrt{8}}{2}\\\\[6pt]\n     x&=4\\pm \\sqrt{2}\n  \\end{align*}\n  $$\n\n  As $b>a$ then we can say that $f(x)$ is concave down in the region\n\n  $$\n  \\begin{align*}\n  \\hspace{0.525em}\\answer{4-\\sqrt2 < x< 4+\\sqrt 2} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Using the chain rule we can differentiate $f(g(x))$\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack} \\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}   \n      [f(g(x))]'&=f'(g(x))\\times g'(x)\n  \\end{align*}\n  $$\n\n  Therefore\n\n  $$\n  \\begin{align*}   \n      [f(g(2))]'&=f'(g(2))\\times g'(2)\n  \\end{align*}\n  $$\n\n  We were given $g'(2)=3$ and $g(2)=5$, hence\n\n  $$\n  \\begin{align*}   \n      [f(g(2))]' &=f'(5)\\times 3 \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  Using part (b) we can find $f'(5)$\n\n  $$\n  \\begin{align*}   \n  f'(5)&=-e^{-5}(5^2-6\\times 5+8)\\\\[6pt]\n  &=-e^{-5}(3)\\\\[6pt]\n  &=-3e^{-5}\n  \\end{align*}\n  $$\n\n  Hence we can evaluate $[f(g(x))]'$\n\n  $$\n  \\begin{align*}\n  [f(g(x))]'&=f'(5)\\times 3 \\\\[6pt]\n  &=-3e^{-5}\\times 3 \\\\[6pt]\n  &\\hspace*{-4.35em}\\answer{[f(g(x))]'=-9e^{-5}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n",
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '16',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 32',
    content:
      'The function $f$ is defined as $f(x) = \\sqrt{\\dfrac{6+2x}{6-2x}}$, for\n$-3 \\leq x < 3$.\nFind the inverse function of $f$, stating its domain and range.',
    markScheme:
      'If we solve the equation $(f\\circ f^{-1})(x) = x$ for $y = f^{-1}(x)$,\nwe get\n\n$$\n\\begin{aligned}\nf(f^{-1}(x)) &= x \\\\[16pt]\nf(y) &= x \\\\[11pt]\n\\sqrt{\\dfrac{6+2y}{6-2y}} &= x \\\\[6pt]\n\\dfrac{6+2y}{6-2y} &= x^2 \\\\[12pt]\n6 + 2y &= 6x^2-2x^2y \\\\[16pt]\n3 + y &= 3x^2-x^2y \\\\[16pt]\n(x^2 + 1)y &= 3x^2 - 3 \\\\[12pt]\ny &= \\dfrac{3x^2 - 3}{x^2 + 1} \\hspace{3em}  \\\\\n\\end{aligned}\n$$\n\nHence the\ninverse function of $f$ is\n$\\answer{f^{-1}(x) =  \\dfrac{3x^2 - 3}{x^2 + 1}}$\nThe domain of $f^{-1}$ is\n$\\answer{[0,\\infty)}$\nand range of $f^{-1}$ is\n$\\answer{[-3,3)}$',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 33',
    content:
      '[Maximum marks: 10]\nThe function $f(x)=a\\sin{(bx)}+c$ where $0 \\leq x \\leq \\pi$ and $a,b,c \\in \\mathrm{R}$ is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/697d6ed2-4137-494f-ada6-07cd489eefc7/images/0547420d-b08d-4f9e-bd37-d903d3be790b/AA1154.JPEG)\n\n\nThe coordinates of the first two stationary points are $(\\tfrac{\\pi}{6}, -1)$ and $(\\tfrac{\\pi}{2},3)$ respectively.\n\n- Find\n  \n  - a.\n  - c.\n  - b. <span class="marks">[5]</span>\n\n\n\nThe domain of $f(x)$ is restricted to $\\tfrac{\\pi}{2}\\leq x \\leq k$, where $k \\in \\mathrm{R}$. This restriction allows an inverse to exist.\n\n- Find the largest possible value of $k$. <span class="marks">[2]</span>  \n\nAnother function is defined as $g(x)=-2f(\\tfrac{1}{2}x)+3$.\n\n- Determine the coordinates of the first maximum value of $g(x)$. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- \n  - To find the value of $a$, which is known as the amplitude, we must find half of the vertical distance between the maximum and minimum values.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/697d6ed2-4137-494f-ada6-07cd489eefc7/images/a928181a-4fcd-4ea9-b71e-dc8f5cea02c9/AA1154a.JPEG)\n\n\n    We can see from the diagram that the curve is a reflection of $\\sin{x}$ in the $x-$axis, therefore the value of $a$ must be negative.\n\n    $$\n    \\begin{align*}\n        \\textcolor{white}{hack} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n    Therefore\n\n    $$\n    \\begin{align*}\n        a&=-\\frac{3-(-1)}{2}\\\\[6pt]\n        &=\\hspace{0.525em}\\answer{-2}  \\tag*{\\textbf{R1}}\n    \\end{align*}\n    $$\n\n  - To find the  value of $c$ we must find the $y-$value half way between the maximum and minimum values.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/697d6ed2-4137-494f-ada6-07cd489eefc7/images/f6143e17-9146-4ce4-9c33-b01bced64c56/AA1154b.JPEG)\n\n\n    Therefore\n\n    $$\n    \\begin{align*}\n        c&=\\frac{3+(-1)}{2}\\\\[6pt]\n        &=\\hspace{0.525em}\\tcbhighmath{1}  \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - To find $b$ we use the formula $T=\\frac{2\\pi}{b}$.\n    We can use the diagram to find $T$ and see that $\\frac{T}{2}$ is the $x-$distance between the maximum and minimum values.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/697d6ed2-4137-494f-ada6-07cd489eefc7/images/c7dc5b6a-813a-4ffb-bafd-b8fb49ff2f45/AA1154c%20(1).JPEG)\n\n\n    Hence\n\n    $$\n    \\begin{align*}\n        \\frac{T}{2}&=\\left(\\tfrac{\\pi}{2}-\\tfrac{\\pi}{6}\\right)\\\\[6pt]\n        T&=2\\left(\\tfrac{\\pi}{2}-\\tfrac{\\pi}{6}\\right)\\\\[6pt]\n        T&=\\frac{2\\pi}{3} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n    Using this value of $T$ and the formula stated above we can find $b$.\n\n    $$\n    \\begin{align*}\n        \\frac{2\\pi}{3}&=\\frac{2\\pi}{b}\\\\[6pt]\n        b&=\\hspace{0.525em}\\answer{3} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- For an inverse to exist the function must be one-to-one, this means it must pass the horizontal line test. We can see this is satisfied by the red part of $f(x)$  shown below\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack} \\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/697d6ed2-4137-494f-ada6-07cd489eefc7/images/2b4f5cbc-7374-4bd7-a0b3-ee6657792bc7/AA1154inv.JPEG)\n\n\n  We can see that if we add one complete time period to $\\tfrac{\\pi}{6}$ we will get $k$, hence\n\n  $$\n  \\begin{align*}\n  \tk&=\\tfrac{\\pi}{6}+\\tfrac{2\\pi}{3}\\\\[6pt]\n  \t&=\\hspace{0.525em}\\tcbhighmath{\\tfrac{5\\pi}{6}}  \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- First we split the vertical and horizontal transformations.\n  The inner function of $f$ is the horizontal transformations and everything else is vertical.\n\n  $$\n  \\begin{align*}\n  \t&-2f(\\tfrac{1}{2}x)+3\\\\[6pt]\n  \t&\\text{Vertical}& \\hspace{1em} & \\text{Horizontal}\\\\[6pt]\n  \t&\\times -2 & \\hspace{1em} & \\div 2\\\\[6pt]\n  \t&+3 & \\hspace{1em} &\n  \\end{align*}\n  $$\n\n  Lets do the vertical transformations first. We don't need to transform the entire function. It is easier to identify a single point and transform that.\n  Notice that we are multiplying by a negative number, that means $g$ will be a vertical reflection of $f$.\n  Therefore the first maximum point of $g$ will be the image of the transformation of the first minimum point of $f$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack} \\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n  Therefore we need to apply our transformations to the point $(\\tfrac{\\pi}{6},-1)$.\n  We transform the $y$-coordinate by $\\times -2$ and then $+3$, therefore the transformed $y$-coordinate is $-1\\times-2+3=5$.\n  We transform the $x$-coordinate by $\\times\\tfrac{1}{1/2}$.therefore the transformed $x$-coordinate is $\\tfrac{\\pi}{6}\\times2=\\tfrac{\\pi}{3}$.\n  Therefore $\\answer{\\text{the first maximum of }g(x)\\text{ has coordinates }(\\tfrac{\\pi}{3}, 5).}$\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack} \\tag*{\\textbf{A1A1}}\n  \\end{align*}\n  $$\n\n",
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: null,
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 34',
    content:
      'Let $f(x) = \\dfrac{1}{4}x^2 - 2$ and $g(x) = x^2 - 4$, for\n$x \\in \\mathbb{R}$.\n\n- Show that $(f\\circ g)(x) = \\dfrac{1}{4}x^4 - 2x^2 + 2$. <span class="marks">[2]</span>\n\n- On the following grid, sketch the graph of $y = (f \\circ g)(x)$, for\n$0 \\leq x \\leq 3$. <span class="marks">[3]</span>\n\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/c14b02c2-8458-4f34-a816-a5c569f5f2fc/images/ceb2f6e6-5725-4682-8f4f-1fb5b9e8117e/b4ef7d37b745cb564b996b9d79dff67b636cf799.svg)\n\n\n\n- The equation $(f\\circ g)(x) = k$ has exactly two solutions,\nfor $0 \\leq x \\leq 3$. Find  \nthe possible values of $k$. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  (f\\circ g)(x) &= f(g(x)) \\\\[6pt]\n  &= f(x^2 - 4) \\\\[6pt]\n  \\hspace{3em} &= \\dfrac{1}{4}(x^2 - 4)^2 - 2 \\\\[6pt]\n  &= \\dfrac{1}{4}(x^4 - 8x^2+16) - 2 \\\\[6pt]\n  &\\answer{= \\dfrac{1}{4}x^4 - 2x^2 + 2}\\end{aligned}\n  $$\n\n- If we draw the graph of $y = (f \\circ g)(x)$ [by using G.D.C.], we\nhave\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c14b02c2-8458-4f34-a816-a5c569f5f2fc/images/3cea73bc-198a-4cce-8863-df5d6b4c9bb7/35e596bf685bd72ab7dad8286b0830ba0c592c52.svg)\n\n\n- The line $y = k$ intersects the graph of $y = (f \\circ g)(x)$\nexactly at two points when $-2 < k \\leq 2$.\n  Hence the equation $(f \\circ g)(x) = k$ has exactly two solutions\nwhen  $\\answer{-2 < k \\leq 2}$\n',
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
    title: 'Question 35',
    content:
      'Let $f(x) = \\dfrac{5}{x+1}$, for $x \\neq -1$.\n\n- For the graph of $f$, find:\n  \n  - the $x$-intercept;\n  - the $y$-intercept;\n  - the equation of the vertical asymptote. <span class="marks">[5]</span>\n\n\n\nLet $g(x) = x-3$, for $x \\in \\mathbb{R}$. The graphs of $f$ and $g$\nintersect at points A and B.\n\n- Find the coordinates of A and B. <span class="marks">[5]</span>\n\n- Find the equation of the straight line that passes through\nA and B,\ngiving your answer in the form $y = mx + c$. <span class="marks">[3]</span>\n\n- Write down the gradient of the line that is perpendicular\nto the line\npassing through A and B. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - Since the equation $f(x) = 0$ has no solutions, there are\n$\\answer{\\text{no \\(x\\)-intercepts}}$\n  - Evaluating $f(x) = \\dfrac{5}{x+1}$ for $x = 0$, we have\n\n    $$\n    \\begin{aligned}\n    f(0) &= \\dfrac{5}{0+1} \\hspace{3.6em} \\\\[6pt]\n    &= 5\\end{aligned}\n    $$\n\n    Hence the $y$-intercept is\n$\\answer{\\mathrm{P}(0,5)}$\n  - We have\n\n    $$\n    \\begin{aligned}\n    &= 0 \\hspace{4em} \\\\[6pt]\n    x+1 &= 0 \\\\[6pt]\n    x &= -1\\end{aligned}\n    $$\n\n    Hence the equation of the vertical\nasymptote is\n$\\answer{x = -1}$\n\n- Solving the equation $f(x) = g(x)$ for $x$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\dfrac{5}{x+1} &= x-3 \\\\[6pt]\n  5 &= (x+1)(x-3) \\\\[9pt]\n  5 &= x^2 - 2x - 3 \\\\[9pt]\n  0 &= x^2 - 2x - 8 \\\\[10pt]\n  0 &= (x+2)(x-4) \\\\[10pt]\n  x &= -2,\\hspace{0.25em}4 \\\\\n  \\end{aligned}\n  $$\n\n  Evaluating $g(x) = x-3$\nfor $x = -2$ and $x = 4$, we find\n\n  $$\n  \\hspace{3.1em} \\begin{array}{rcccl}\n  y &=& g(-2) &=& -5 \\\\[9pt]\n  y &=& g(4) &=& 1\n  \\end{array}\n  $$\n\n  Hence we find\n$\\answer{\\mathrm{A}(-2,-5)}$\nand\n$\\answer{\\mathrm{B}(4,1)}$\n- Using the gradient formula with A$(-2,-5)$ and B$(4,1)$, we have\n\n  $$\n  \\begin{aligned}\n  m_{\\mathrm{AB}} &= \\dfrac{y_2 - y_1}{x_2 - x_1} \\\\[6pt]\n  &= \\dfrac{1-(-5)}{4-(-2)} \\\\[10pt]\n  &= 1\\end{aligned}\n  $$\n\n  Hence, using the point-gradient formula with\nA$(-2,-5)$ and $m = 1$, we get\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\\\[6pt]\n  \\hspace{0.15em} y - (-5) &= (1)(x-(-2)) \\\\[6pt]\n  y + 5 &= x + 2 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{y = x-3} \\hspace{0.15em}\n  $$\n\n- $\\answer{m_{\\perp\\mathrm{AB}} = -1}$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 36',
    content:
      '\n- Write down the domain and range of the logarithmic function\n$y = \\log_a x$\nwhere $a > 0$ and $a \\neq 1$. <span class="marks">[2]</span>\n\n- Given that $\\log_{x^2} y = 9 \\log_y (x^2)$, find all the possible\nexpressions\nof $y$ as a function of $x$. <span class="marks">[6]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{domain}:\\hspace{0.75em}&\\hspace{0.525em}\\answer{(0,\\infty)} \\hspace{1.8em} \\\\[8pt]\n  \\text{range}:\\hspace{0.75em}&\\hspace{0.525em}\\answer{\\mathbb{R}}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we get\n\n  $$\n  \\begin{aligned}\n  \\log_{x^2} y &= 9 \\log_y (x^2) \\\\[11pt]\n  \\hspace{4em} \\dfrac{\\ln y}{\\ln (x^2)} &= \\dfrac{9\\ln (x^2)}{\\ln y} \\\\[6pt]\n  \\dfrac{\\ln y}{2\\ln x} &= \\dfrac{18\\ln x}{\\ln y} \\\\[12pt]\n  (\\ln y)^2 &= (6\\ln x)^2 \\\\[16pt]\n  \\ln y &= \\pm 6\\ln x \\\\[16pt]\n  \\ln y &= \\ln (1/x^6)\\hspace{0.25em}\\text{ or }\\hspace{0.25em}\\ln (x^6) \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2.2em} \\answer{y = \\dfrac{1}{x^6}\\hspace{0.25em}\\text{ or }\\hspace{0.25em}x^6}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 37',
    content:
      'Consider the function $f(x)=6x^2-7x+2$.\n\n- Fully factorise $f(x)$. <span class="marks">[2]</span>  \n\n\nAnother function is defined as $g(x)=\\ln x$.\nA third function is defined as $h(x)=(g \\circ f)(x)$.\n\n- Hence, determine the domain of $h(x)$. <span class="marks">[3]</span>  \n\n\nThe value $a$ is added to $f(x)$, where $a \\in \\mathrm{R}$.\nFor the domain of $h(x)$ to be $x \\in \\mathrm{R}$ then $a>k$.\nThe minimum value of $k$ is $a_{\\text{min}}$.\n\n- Find $a_{\\text{min}}$ <span class="marks">[3]</span>  \n\n\nNow the value $b$ is added to $f(x)$, where $b \\in \\mathrm{R}$ and $b > a_{\\text{min}}$.\n\n- Find the value of $b$ such that the vertex of $h(x)$ lies on the $x-$axis. Give your answer to $4$ significant figures. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We will use the grouping method to factorise.\n\n  $$\n  \\begin{align*}\n      a \\times c &= 2 \\times 6\\\\[6pt]\n       &=12\n  \\end{align*}\n  $$\n\n  Therefore we need to find two numbers that sum to $-7$ and multiply to give $12$. These are $-3$ and $-4$.\n  Therefore, we can then rewrite $-7x$ as $-3x-4x$. Hence\n\n  $$\n  \\begin{align*}\n      6x^2-7x+2&=6x^2-3x-4x+2 \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  We then factorise the resulting expression into two groups\n\n  $$\n  \\begin{align*}\n      &=3x(2x-1)-2(2x-1)\\\\[6pt]\n      &=\\answer{(2x-1)(3x-2)} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- This is a composite function in which we form $h(x)$ by substituting $f(x)$ into $g(x)$. Therefore\n\n  $$\n  \\begin{align*}\n      h(x)&=\\ln{\\left(6x^2-7x+2\\right)} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  We can now sketch $h(x)$ on our G.D.C.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1ad3c15f-2574-4451-89c3-6131f920fec6/images/af7c0b7c-4bcd-4f99-bacf-0b4ca2abe01e/AA1169_a%20(2).JPEG)\n\n\n  $h(x)$ has two vertical asymptotes and these occur when $h(x)=\\ln{0}$. Hence $f(x)=0$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Using the answer from part (a) we can find their equations.\n\n  $$\n  \\begin{align*}\n      (2x-1)(3x-2)&=0\\\\[6pt]\n      x&=\\tfrac{1}{2}, \\tfrac{2}{3}\n  \\end{align*}\n  $$\n\n  The red arrows on the image above show the domain of $h(x)$.\n  Therefore the $\\answer{\\text{domain of }h(x)\\text{ is }x<\\tfrac{1}{2}\\text{ and }x>\\tfrac{2}{3}}$\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The following image shows $f(x)$ and $h(x)$ together on the same axes.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1ad3c15f-2574-4451-89c3-6131f920fec6/images/864e7db3-f2fc-45ed-ae8d-6c54c1f1a58c/AA1169_c%20(3).JPEG)\n\n\n  Notice that $h(x)$ is undefined when $f(x)<0$, this is the dark blue part of $f(x)$.\n  Hence we need to shift $f(x)$ vertically up $a$ units such that the vertex of $f(x)$ touches the $x-$axis at a single point.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{R1}}\n  \\end{align*}\n  $$\n\n  To do this we must find the minimum value of $f(x)$.\n  Using a G.D.C. we can find the minimum point of $f(x)$ to be $(0.5833...,-0.04166...)$\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Hence $f(x)+0.04166...$ will ensure $f(x)$ intersects the $x-$axis at one point. Ensuring that $f(x)\\geq 0$ for all $x$. This is shown below\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1ad3c15f-2574-4451-89c3-6131f920fec6/images/f9e9a35b-66f6-4ba2-a644-2fcd2cd8379f/AA1169_d.JPEG)\n\n\n  Therefore if $a>0.04166...$ then $f(x)>0$ for all $x$ and the domain of $h(x)$ is $x \\in \\mathrm{R}$.\n  Hence, $\\hspace{0.525em}\\tcbhighmath{a_{\\text{min}}=0.0417}$\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Notice from the image in the previous part, that the vertex of $h(x)$ lies on the same vertical line as $f(x)$.\n  Therefore the equation of the vertical line is $x=0.5833...$ and the final position of the vertex of $h(x)$ must be on the $x-$axis. This is shown below.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1ad3c15f-2574-4451-89c3-6131f920fec6/images/2cb902a1-41ee-439b-9f07-b35d58eb8a60/AA1169_d2.JPEG)\n\n\n  Therefore we need to solve this equation\n\n  $$\n  \\begin{align*}\n      h(0.5833...)&=0\\\\[6pt]\n      (g \\circ (f(0.5833...)+b))&=0\\\\[6pt]\n      \\ln{(f(0.5833...)+b)}&=0 \\hspace{2em} (\\ln{1}=0) \\tag*{\\textbf{A1}}\\\\[6pt]\n      f(0.5833...)+b&=1\n  \\end{align*}\n  $$\n\n  From part (c) we know that $f(0.5833...)=-0.04166...$ at the vertex of $f(x)$ therefore\n\n  $$\n  \\begin{align*}\n      b&=1-(-0.04166...)\\\\[6pt]\n      &=1.04166...\n  \\end{align*}\n  $$\n\n  Therefore $\\hspace{0.525em}\\tcbhighmath{b=1.042}\\hspace{0.525em}$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
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
    type: 'ERQ',
    title: 'Question 38',
    content:
      'Let $f(x) = x^4 - x^3 - 5x^2 + 3x + 2$, for $x \\in \\mathbb{R}$.\n\n- Solve the inequality $f(x) < 0$. <span class="marks">[3]</span>\n\n- For the graph of $y = f(x)$, find the coordinates of the local\nmaximum point. Round your answers to three significant figures.\n<span class="marks">[3]</span>\n\n\nThe domain of $f$ is now restricted to $[a,b]$ where\n$a,b \\in \\mathbb{R}$.\n\n- \n  - Write down the smallest value of $a < 0$ and the largest value\nof $b > 0$ for which $f$ has an inverse. Give your answers\ncorrect to three significant figures.\n  - For these values of $a$ and $b$, sketch the graphs of $y = f(x)$\nand $y = f^{-1}(x)$ on the same set of axes, showing clearly the\ncoordinates of the end points of each curve.\n  - Solve the equation $f^{-1}(x) = -1$. <span class="marks">[6]</span>\n\n\n',
    markScheme:
      '\n- If we sketch the graph of $y = f(x)$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/4511e74b-84ed-4f18-954c-18a8e7a56dc2/images/24541222-4ef2-4f83-8869-c493d5ca3b7d/9444e78d503e38688d4c8ecfe5c29f2d0705556f.svg)\n\n\n  From the diagram, we see that $f$ is positive on the intervals\n$(-\\infty,-2)$, $(-0.414,1)$ and $(2.41,\\infty)$, and negative on\n$(-2,-0.414)$ and $(1,2.41)$.\n  Hence the set of solutions to the inequality $f(x) < 0$ is\n\n  $$\n  \\begin{aligned}\n  \\answer{(-2,-0.414)\\cup(1,2.41)}\\end{aligned}\n  $$\n\n- From the diagram, we see that the graph of $y = f(x)$ has a local\nmaximum at point B.\n  Hence the coordinates of the local maximum point are\n$\\answer{(0.285, 2.43)}$\n- \n  - From the diagram, we see that $f$ is a bijection if its domain\nis restricted to $[-1.14,0.285]$ or $[0.285,1.87]$.\nHence $f$ has an inverse if\n$\\answer{a = -1.41}$\nand  $\\answer{b = 0.285}$\n  - The graph of $y = f^{-1}(x)$ is a reflection of the graph of\n$y = f(x)$ across the line $y = x$.\n    Hence, if we sketch the graphs of $y = f(x)$ and $y = f^{-1}(x)$\non the same set of axes, we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/4511e74b-84ed-4f18-954c-18a8e7a56dc2/images/81733c2d-4f9c-47f5-bd1c-45eb231fe561/b6185b0f42f1522008f7c0707456fd536c854029.svg)\n\n\n  - If we solve the equation $f^{-1}(x) = -1$ for $x$, we obtain\n\n    $$\n    \\begin{aligned}\n    f(f^{-1}(x)) &= f(-1) \\hspace{4em} \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\hspace{10.7em} \\answer{x = -4} \\hspace{3em} [\\text{since $f(f^{-1}(x)) = x$}]\n    $$\n\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '12',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'The following diagram shows part of the graph of a quadratic function\n$f$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/44fc9c0a-a522-45de-a403-7b2dd1c183ca/images/ec4a256f-7bc5-48e0-bfc8-aec8c3c7bd91/1964f1685a23a24125bfe5568ac8db4fc2c5ff72.svg)\n\n\nThe vertex is at point A and the $x$-intercepts are at points B and C.\nThe function $f$ can be written in the form $f(x) = (x - h)^2+k$.\n\n- Write down the values of $h$ and $k$. <span class="marks">[2]</span>\n\n\nThe function $f$ can also be written in the form\n$f(x) = (x + p)(x - q)$, where $p,q \\in \\mathbb{Z^+}$.\n\n- Write down the values of $p$ and $q$. <span class="marks">[2]</span>\n\n- Find the $y$-intercept of the graph of $f$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- $\\answer{h = 2}$  and\n$\\answer{k = -9}$\n- $\\answer{p = 1}$  and\n$\\answer{q = 5}$\n- Evaluating $f(x) = (x+1)(x-5)$ for $x = 0$, we have\n\n  $$\n  \\begin{aligned}\n  f(0) &= (0+1)(0-5) \\\\[6pt]\n  &= (1)(-5) \\\\[6pt]\n  &= -5\\end{aligned}\n  $$\n\n  Hence the point\n$\\answer{\\mathrm{D}(0,-5)}$\nis the $y$-intercept of the graph of $f$.\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Let $f(x) = x^2 - 2x - 8$, for $x \\in \\mathbb{R}$.\n\n- Write down the $y$-intercept of the graph of $y = f(x)$. <span class="marks">[1]</span>\n\n- Solve the equation $f(x) = 0$. <span class="marks">[3]</span>\n\n- Find the equation of the axis of symmetry of the graph of\n$y = f(x)$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Evaluating $y = f(x)$ for $x = 0$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{6em} y &= f(0) \\\\[6pt]\n  &= 0^2 - 2(0) - 8 \\\\[6pt]\n  &= -8\\end{aligned}\n  $$\n\n  Hence the point\n$\\answer{\\mathrm{P}(0,-8)}$\nis the $y$-intercept of the graph of $y = f(x)$.\n- Solving the equation $f(x) = 0$ for $x$, we get\n\n  $$\n  \\begin{aligned}\n  x^2 - 2x - 8 &= 0 \\hspace{4.8em} \\\\[6pt]\n  (x + 2)(x - 4) &= 0 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2.8em} \\answer{x = -2,\\hspace{0.25em} 4}\n  $$\n\n- Using the method of completing the square, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.7em} f(x) &= x^2 - 2x - 8 \\\\[6pt]\n  &= \\big[(x - 1)^2 - 1\\big] - 8 \\\\[6pt]\n  &= (x - 1)^2 - 9\\end{aligned}\n  $$\n\n  Hence the axis of symmetry of the\ngraph of $y = f(x)$ is\n$\\answer{x = 1}$\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Let $f(x) = (x - 3)(x + 1)$, for $x \\in \\mathbb{R}$.\nFor the graph of $f$, find:\n\n- the $y$-intercept; <span class="marks">[2]</span>\n\n- the $x$-intercepts; <span class="marks">[2]</span>\n\n- the coordinates of the vertex. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Evaluating $f(x) = (x - 3)(x + 1)$ for $x = 0$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} f(0) &= (0 - 3)(0 + 1) \\\\[6pt] \n  &= (-3)(1) \\\\[6pt]\n  &= -3\\end{aligned}\n  $$\n\n  Hence the $y$-intercept is\n$\\answer{\\mathrm{A}(0,-3)}$\n- Solving the equation $f(x) = 0$ for $x$, we have\n\n  $$\n  \\begin{aligned}\n  (x - 3)(x + 1) &= 0 \\\\[6pt]\n  x &= -1,\\hspace{0.25em} 3 \\hspace{1.5em}\\end{aligned}\n  $$\n\n  Hence the\n$x$-intercepts are\n$\\answer{\\mathrm{B}(-1,0)}$\nand\n$\\answer{\\mathrm{C}(3,0)}$\n- Using the method of completing the square, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.8em} f(x) &= (x - 3)(x + 1) \\\\[6pt]\n  &= x^2 - 2x - 3 \\\\[6pt]\n  &= \\big[(x-1)^2 - 1\\big] - 3 \\\\[6pt]\n  &= (x-1)^2 - 4\\end{aligned}\n  $$\n\n  Hence the coordinates of the vertex\nare  $\\answer{(1,-4)}$\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '1.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 4',
    content:
      'Let $f(x) = a(x-h)^2 + k$, for $x \\in \\mathbb{R}$.\nThe vertex of the graph of $f$ is at P$(3,4)$ and the graph passes\nthrough Q$(1,-4)$.\n\n- Write down the values of $h$ and $k$. <span class="marks">[2]</span>\n\n- Find the value of $a$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{h = 3}$  and\n$\\answer{k = 4}$\n- Using the coordinates of Q, we find\n\n  $$\n  \\begin{aligned}\n  f(1) &= -4 \\\\[6pt]\n  \\hspace{3em} a(1-h)^2 + k &= -4 \\\\[6pt]\n  a(1-3)^2 + 4 &= -4 \\hspace{3em} [\\text{by part (a)}] \\\\[7pt]\n  4a &= -8 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{a = -2}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 5',
    content:
      'The equation $x^2 + kx + 4 = 0$ has two equal roots.\nFind the possible values of $k$.',
    markScheme:
      'Since the quadratic function $q(x) = x^2 + kx + 4$ has two equal roots,\nwe have\n\n$$\n\\begin{aligned}\n\\hspace{6.9em} [\\text{discriminant of $q$}] &= 0 \\\\[6pt]\nk^2 - 4(1)(4) &= 0 \\hspace{3em} [\\triangle  = b^2 - 4ac] \\\\[6pt]\nk^2 - 16 &= 0 \\\\[6pt]\nk^2 &= 16 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{5.9em} \\answer{k = \\pm 4}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 6',
    content:
      'Let $f(x) = x^2 - 4x + 3$, for $x \\in \\mathbb{R}$.\n\n- For the graph of $y = f(x)$, find:\n  \n  - the $y$-intercept;\n  - the $x$-intercepts. <span class="marks">[3]</span>\n\n\n- The function $f$ can be expressed in the form $f(x) = (x-h)^2 + k$.\nFind\nthe value of $h$ and the value of $k$. <span class="marks">[2]</span>\n\n- Sketch the graph of $y = f(x)$ on the grid below. Clearly label\nthe intercepts with the axes, and the vertex. <span class="marks">[2]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f42483f9-fb4b-452c-adc2-e036d4a4417b/images/bbf4f0fd-8b86-4bab-b5b2-246d9387cc20/aefa19917a8714e460d7087874916779ea719f3e.svg)\n\n\n',
    markScheme:
      '\n- \n  - Evaluating $y = f(x)$ for $x = 0$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.8em} y &= f(0) \\\\[6pt]\n    &= 0^2 - 4(0) + 3 \\\\[7pt]\n    &= 3\\end{aligned}\n    $$\n\n    Hence the $y$-intercept is\n$\\answer{\\mathrm{A}(0,3)}$\n  - Solving the equation $f(x) = 0$, we have\n\n    $$\n    \\begin{aligned}\n    x^2 - 4x + 3 &= 0 \\hspace{8em} \\\\[6pt]\n    (x-1)(x-3) &= 0 \\\\[6pt]\n    x &= 1,\\hspace{0.25em} 3\\end{aligned}\n    $$\n\n    Hence the $x$-intercepts\nare\n$\\answer{\\mathrm{B}(1,0)}$\nand\n$\\answer{\\mathrm{C}(3,0)}$\n\n- Using the method of completing the square, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.8em} f(x) &= x^2 - 4x + 3 \\\\[6pt]\n  &= \\big[(x-2)^2 - 4\\big] + 3 \\\\[6pt]\n  &= (x-2)^2 - 1\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{h = 2}$\nand  $\\answer{k = -1}$\n- If we sketch the graph of $y = f(x)$ on the grid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f42483f9-fb4b-452c-adc2-e036d4a4417b/images/450c33da-e5d3-4149-8e6d-bbae92dd70d6/e4bab816ede5f709b1664609afdc53c6db3be4ab.svg)\n\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'The equation $x^2 - kx + 1 = 0$ has two distinct real roots.\nFind the possible values of $k$.',
    markScheme:
      'Since the quadratic function $q(x) = x^2 - kx + 1$ has two distinct real\nroots, we have\n\n$$\n\\begin{aligned}\n\\hspace{5.9em} [\\text{discriminant of $q$}] &> 0 \\\\[6pt]\n(-k)^2 - 4(1)(1) &> 0 \\hspace{3em} [\\triangle  = b^2 - 4ac]  \\\\[6pt]\nk^2 - 4 &> 0 \\\\[6pt]\nk^2 &> 4 \\\\[7pt]\n|k| &> 2 \\qref{(1)}\\end{aligned}\n$$\n\nFrom the inequality $(1)$, we get\n\n$$\n\\begin{aligned}\n\\hspace{3em} k < \\hspace{-0.1em}-2 \\hspace{0.525em}&\\text{ or }\\hspace{0.525em} k > 2  \\\\\n\\end{aligned}\n$$\n\nHence the set of possible values of $k$ is\n$\\answer{(-\\infty,-2)\\cup(2,\\infty)}$',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 8',
    content:
      'The diagram below shows the graph of a quadratic function\n$f(x) = 2x^2 + bx + c$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d183f6d8-9081-451b-a842-d952f6656d70/images/9ee2af68-56c0-41c5-8f76-f8e3a4304636/75e0c507b59edc93cc9f79e429c580e90c045817.svg)\n\n\n\n- Write down the value of $c$. <span class="marks">[1]</span>\n\n- Find the value of $b$ and write down $f(x)$. <span class="marks">[3]</span>\n\n- Calculate the coordinates of the vertex of the graph of $f$.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- $\\answer{c = -30}$\n- The graph of $f$ passes through the point P$(3,0)$.\nHence, using the coordinates of P, we get\n\n  $$\n  \\begin{aligned}\n  f(3) &= 0 \\hspace{3em} \\\\[6pt]\n  2(3)^2 + b(3) - 30 &= 0 \\\\[6pt]\n  18 + 3b - 30 &= 0 \\\\[6pt]\n  3b - 12 &= 0 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{4em} \\answer{b = 4}\n  $$\n\n  Hence we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.4em} \\answer{f(x) = 2x^2 + 4x - 30}\\end{aligned}\n  $$\n\n- The axis of symmetry of the graph of $f$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.5em}  x &= -\\dfrac{b}{2a} \\\\[6pt]\n  x &= -\\dfrac{4}{2(2)} \\\\[8pt]\n  x &= -1\\end{aligned}\n  $$\n\n  Evaluating $f(x)$ for $x = -1$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.65em} f(-1) &= 2(-1)^2 + 4(-1) - 30 \\\\[6pt]\n  &= -32\\end{aligned}\n  $$\n\n  Hence the coordinates of the vertex are\n$\\answer{(-1,-32)}$\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'The graph shows the curve of a quadratic function of the form\n$f(x) = ax^2 + bx + 90$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/99a243f3-d0f6-4c5f-aa33-ff98a7e040af/images/98506727-8a45-4e95-8c21-1236e498db76/e02d6931ce58420fa7c9cbe422473aefce55e151.svg)\n\n\n\n- Write down the equation for the axis of symmetry of the curve.\n<span class="marks">[2]</span>\n\n- Hence, or otherwise, find the value of $a$ and the value of $b$.\n<span class="marks">[3]</span>\n\n- Find the $y$-coordinate of the vertex of the curve. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- The axis of symmetry intersects the $x$-axis midway between the\n$x$-intercepts.\n  Hence we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.15em} x &= \\dfrac{-5+9}{2} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.4em} \\answer{x = 2}\n  $$\n\n- Using the coordinates of A, we have\n\n  $$\n  \\begin{aligned}\n  f(-5) &= 0 \\\\[6pt]\n  a(-5)^2 + b(-5) + 90 &= 0 \\\\[6pt]\n  25a - 5b &= -90 \\hspace{1em} \\hspace{6em}(1)\\end{aligned}\n  $$\n\n  Using the\ncoordinates of B, we have\n\n  $$\n  \\begin{aligned}\n  f(9) &= 0 \\\\[6pt]\n  \\hspace{0.6em} a(9)^2 + b(9) + 90 &= 0 \\\\[6pt]\n  81a + 9b &= -90 \\hspace{7.5em}(2)\\end{aligned}\n  $$\n\n  Hence, solving the system\nof linear equations $(1)$-$(2)$ for $a$ and $b$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{10.4em} \\answer{a = -2}\\hspace{0.75em}\\text{ and }\\hspace{0.75em}\\answer{b = 8}\\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- The vertex of the curve lies on the axis of symmetry.\nHence, evaluating $f(x)$ for $x = 2$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{6.8em} f(2) &= -2(2)^2 + 8(2) + 90 \\\\[6pt]\n  &\\answer{= 98}\\end{aligned}\n  $$\n\n',
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
      'The axis of symmetry of the graph of a quadratic function has equation\n$x = \\dfrac{3}{2}$.\n\n- Draw the axis of symmetry on the grid below. <span class="marks">[1]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a0a16523-e75b-476e-bcf8-7c1dd4281db0/images/3ad36b37-27a3-423c-b05c-beeba4733460/095afe930760d162dfc8b9c36b42836af719a0ca.svg)\n\n\n\nThe graph of the quadratic function intersects the $x$-axis at the point\nP$(-1,0)$. There is a second point, Q , at\nwhich the graph of the quadratic function intersects the $x$-axis.\n\n- Mark and label P and Q on the grid above. <span class="marks">[1]</span>\n\n\nThe graph of the quadratic function has equation $y = -x^2+bx+c$, where\n$b,c \\in \\mathbb{Z}$.\n\n- \n  - Find the value of $b$ and the value of $c$.\n  - Find the coordinates of the vertex, M.\n  - Draw the graph of the quadratic function on the grid above.\n<span class="marks">[4]</span>\n\n\n',
    markScheme:
      '\n- If we draw the axis of symmetry on the grid below, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a0a16523-e75b-476e-bcf8-7c1dd4281db0/images/16f0fb07-ec8a-450f-b7e5-3e564a00520c/251642e55ba01124027bed7ddba72f11d48d8750.svg)\n\n\n- The $x$-coordinate of $Q$ is\n\n  $$\n  \\begin{aligned}\n  x &= \\dfrac{3}{2} + \\left[\\dfrac{3}{2}-(-1)\\right] \\\\[6pt]\n  &= 4\\end{aligned}\n  $$\n\n  Hence, if we mark and label P and Q on the grid\nbelow, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a0a16523-e75b-476e-bcf8-7c1dd4281db0/images/f4c0bcfa-6883-447e-bd44-eac93ca2fb34/1fa563586fbd8e498bbc0f6a90199f2a3a99e7f7.svg)\n\n\n- \n  - Using the coordinates of P, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.1em} 0 &= -(-1)^2 + b(-1) + c \\\\[6pt]\n    0 &= -1 - b + c \\\\[6pt]\n    1 &= -b + c \\hspace{6em}(1)\\end{aligned}\n    $$\n\n    Using the coordinates of\nQ, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.6em} 0 &= -(4)^2 + b(4) + c \\\\[6pt]\n    0 &= -16 + 4b + c \\\\[6pt]\n    16 &= 4b + c \\hspace{7.5em}(2)\\end{aligned}\n    $$\n\n    Hence, solving the system\nof linear equations $(1)$-$(2)$ for $b$ and $c$, we find\n\n    $$\n    \\begin{aligned}\n    \\hspace{10em} \\answer{b = 3}\\hspace{0.75em}\\text{ and }\\hspace{0.75em}\\answer{c = 4}\\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n  - Evaluating $y = -x^2 + 3x + 4$ for $x = 3/2 = 1.5$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.2em} y &= -(1.5)^2 + 3(1.5) + 4 \\\\[6pt]\n    &= 6.25\\end{aligned}\n    $$\n\n    Hence the coordinates of M are\n$\\answer{(1.5,6.25)}$\n  - If we draw the graph of $y = -x^2 + 3x + 4$ on the grid below,\nwe obtain\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/a0a16523-e75b-476e-bcf8-7c1dd4281db0/images/44da6c11-66b9-4ff2-853f-eaab7fc8ad93/db963f9fd832653990678f1ba763db2a3974d991.svg)\n\n\n',
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
      'A farmer is going to fence two equal adjacent parcels of land. These\nparcels share one side (which also requires fencing) as shown in the\nfollowing diagram. The farmer has only $80$ metres of fence.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/01d00c8e-3868-4639-a655-8216a79b9c4e/images/70cc4897-882c-489b-9551-58f6c2e26bb3/580f23d360211ad7dd2c45e79d30c7d9c7d24f56.svg)\n\n\n\n- Write down the equation for the total length of the fence,\n$80$ m, in terms of $x$ and $y$.\n<span class="marks">[1]</span>\n\n- Write down the total area of both parcels of land in terms of $x$.\n<span class="marks">[2]</span>\n\n- Find the maximum area, in m$^2$, of one parcel of land. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- $\\answer{80 = 3x + 4y}$\n- The total area of both parcels of land in terms of $x$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{8em} A(x) &= x(2y) \\\\[18pt]\n  &= 2xy \\\\[11pt]\n  &= 2x\\left(\\dfrac{80 - 3x}{4}\\right) \\hspace{3em} [\\text{from part (a)}] \\\\[7pt]\n  &\\answer{= 40x - \\dfrac{3}{2}x^2}\\end{aligned}\n  $$\n\n- If we sketch the graph of $y = A(x)$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/01d00c8e-3868-4639-a655-8216a79b9c4e/images/c3f7d568-52ea-4325-b521-9c031fcf4810/d34855549a850484b1041b3153951956e33882fa.svg)\n\n\n  Hence the maximum area of one parcel of land is\n$\\dfrac{266.67}{2} \\approx$\n$\\answer{133 \\text{ m}^2}$\n',
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
      '\n- Express $2x^2 - 8x + 9$ in the form $a(x+b)^2 + c$ where\n$a,b,c \\in\\mathbb{Z}$. <span class="marks">[2]</span>\n\n- Given that $f(x) = x - 2$ and $(g\\circ f)(x) = 2x^2 - 8x + 9$, find\n$g(x)$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the method of completing the square, we get\n\n  $$\n  \\begin{aligned}\n  2x^2 - 8x + 9 &= 2\\big[x^2 - 4x\\big] + 9 \\\\[6pt]\n  &= 2\\big[(x-2)^2 - 4\\big] + 9 \\hspace{2em} \\\\[6pt]\n  &= 2(x-2)^2 - 8 + 9 \\\\[6pt]\n  &\\answer{= 2(x-2)^2 + 1}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.3em} (g\\circ f)(x) &= 2x^2 - 8x + 9 \\\\[6pt]\n  g(f(x)) &=  2(x-2)^2 + 1 \\hspace{3em} [\\text{by part (a)}] \\\\[6pt]\n  g(x-2) &= 2(x-2)^2 + 1 \\hspace{3em} [\\text{since $f(x) = x - 2$}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{g(x) = 2x^2 + 1} \\hspace{3.4em}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
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
      'The graph of a quadratic function has a $y$-intercept at A$(0,24)$ and\none of its $x$-intercepts is B$(2,0)$.\nThe $x$-coordinate of the vertex of the graph is $4$.\nThe equation of the quadratic function is in the form $y = ax^2+bx+c$.\n\n- Write down the value of $c$. <span class="marks">[1]</span>\n\n- Find the value of $a$ and the value of $b$. <span class="marks">[4]</span>\n\n- Write down the coordinates of the second $x$-intercept of the\nfunction. <span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- $\\answer{c = 24}$\n- Using the axis of symmetry formula, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.4em} 4 &= -\\dfrac{b}{2a} \\hspace{3em} [\\text{since $x = 4$}] \\\\[6pt]\n  b &= -8a \\hspace{7em}(1)\\end{aligned}\n  $$\n\n  Using the coordinates of B, we\nget\n\n  $$\n  \\begin{aligned}\n  0 &= a(2)^2 + b(2) + c \\\\[6pt]\n  [\\text{from $(1)$ \\& part (a)}] \\hspace{2em} 0 &= a(2)^2 + (-8a)(2) + 24 \\hspace{3.6em} \\\\[6pt]\n  0 &= 4a - 16a +24\\\\[6pt]\n  12a &= 24 \\\\[6pt]\n  &\\hspace{-0.7em} \\answer{a = 2}\n  \\end{aligned}\n  $$\n\n  Hence, substituting $a = 2$ in the equation $(1)$, we obtain\n\n  $$\n  \\begin{aligned}\n  b &= -8(2) \\hspace{0.4em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{b = -16} \\hspace{1.7em}\n  $$\n\n- $\\answer{(6,0)}$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
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
      'The equation $x^2 + (k-3)x - 3k = 0$ has two distinct real solutions.\nFind the possible values of $k$.',
    markScheme:
      'Since the quadratic function $q(x) = x^2 + (k-3)x - 3k$ has two distinct\nreal roots, we have\n\n$$\n\\begin{aligned}\n\\hspace{5.9em} [\\text{discriminant of $q$}] &> 0 \\\\[6pt]\n(k-3)^2 - 4(1)(-3k) &> 0 \\hspace{3em} [\\triangle  = b^2 - 4ac]  \\\\[6pt]\n(k^2 - 6k + 9) + 12k &> 0 \\\\[6pt]\nk^2 + 6k + 9 &> 0 \\\\[6pt]\n(k + 3)^2 &> 0 \\\\[7pt]\n|k + 3| &> 0 \\hspace{3em}{(1)}\\end{aligned}\n$$\n\nFrom the inequality $(1)$, we get\n\n$$\n\\begin{aligned}\n\\hspace{3.7em} k + 3 < 0 \\hspace{0.525em}&\\text{ or }\\hspace{0.525em} k + 3 > 0 \\\\[6pt]\nk < \\hspace{-0.1em} -3 \\hspace{0.525em}&\\text{ or }\\hspace{0.525em} k > -3   \\\\\n\\end{aligned}\n$$\n\nHence the set of possible values of $k$ is\n$\\answer{k\\in\\mathbb{R}\\,;\\,k\\neq-3}$',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 15',
    content:
      'Find the equations of the two tangents to the curve $y=2x^2-x+\\tfrac{9}{2}$ that pass through the origin.',
    markScheme:
      'To better understand the scenario we can make an approximate sketch.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/35659e47-9a77-41ce-ac75-a15e57624b06/images/c4b81b1f-14ca-47a5-8ee8-d6eb7e19b7ea/AA1285.JPEG)\n\n\nThe dashed lines are the two tangent lines whose equations we need to find.\nThe equation of a tangent line, through the origin, will be of the form\n\n$$\n\\begin{align*}\n    y&=mx\\tag*{\\textbf{\\textcolor{black}{(M1)}}}\n\\end{align*}\n$$\n\nTo find the intersection points of the curve and line we can solve both equations simultaneously, hence\n\n$$\n\\begin{align*}\n    mx&=2x^2-x+\\frac{9}{2}\\tag*{\\textbf{\\textcolor{black}{(M1)}}}\\\\[6pt]\n    0&=2x^2-x-mx+\\frac{9}{2}\\\\[6pt]\n    0&=2x^2-(1+m)x+\\frac{9}{2}\\tag*{\\textbf{\\textcolor{black}{(A1)}}}\n\\end{align*}\n$$\n\nIf the lines are tangent to the curve then there is only one point of intersection i.e. only $1$ solution.\nAs we have a quadratic equation then we can say that the discriminant must be equal to zero. Hence\n\n$$\n\\begin{align*}\n    \\Delta&=b^2-4ac\\\\[6pt]\n    0&=[-(1+m)]^2-4(2)\\left(\\tfrac{9}{2}\\right)\\tag*{\\textbf{\\textcolor{black}{A1}}}\n\\end{align*}\n$$\n\nSolving for $m$ we get\n\n$$\n\\begin{align*}\n    36&=[-(1+m)]^2\\\\[6pt]\n    -(1+m)&=\\pm6\\\\[6pt]\n    m&=-7 \\text{ and }5\n\\end{align*}\n$$\n\nTherefore the two equations are\n\n$$\n\\begin{align*}\n    &\\hspace{0.525em}\\tcbhighmath{y=-7x}\\hspace{0.525em}\\text{ and }\\hspace{0.525em}\\tcbhighmath{y=5x}\\tag*{\\textbf{\\textcolor{black}{A1}}}\n\\end{align*}\n$$\n',
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
    title: 'Question 16',
    content:
      'Consider $f(x) = x^2 + bx + c$, for $x \\in \\mathbb{R}$, where\n$b,c \\in \\mathbb{Z}$. The graph of $f$ has a local minimum when $x = 2.5$.\nThe distance between the two $x$-intercepts of the graph of $f$ is $7$.\n\n- Find the coordinates of the two $x$-intercepts. <span class="marks">[2]</span>\n\n- Find the value of $b$ and the value of $c$. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- The axis of symmetry of the graph of $f$ is $x = 2.5$.\nHence the coordinates of the two $x$-intercepts are\n\n  $$\n  \\begin{aligned}\n  \\bigg(2.5-\\frac{7}{2},0\\bigg) = \\hspace{0.525em}\\answer{(-1,0)}\\hspace{0.525em} \\hspace{1em}\\text{and}\\hspace{1em}\n  \\bigg(2.5+\\frac{7}{2},0\\bigg) = \\hspace{0.525em}\\answer{(6,0)}\\end{aligned}\n  $$\n\n- The roots of the quadratic function $f(x) = x^2 + bx + c$ are\n$x = -1$ and $x = 6$.\n  Hence, using the factor theorem, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.4em} f(x) &= (x + 1)(x - 6) \\\\[6pt]\n  &= x^2 - 5x - 6\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{b = -5}$\nand  $\\answer{c = -6}$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
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
      '\n- Show that $12\\log_x{2}=\\dfrac{12}{\\log_2{x}}$. <span class="marks">[1]</span>\n\n- Hence solve the equation $\\log_2{x}=8-12\\log_x{2}$.<span class="marks">[4]</span>\n\n',
    markScheme:
      "\n- Using the change of base formula we can write\n\n  $$\n  \\begin{align*}\n  \\text{L.H.S.}&=12\\log_{x}2\\\\[6pt]\n  &=12\\left(\\frac{\\log_22}{\\log_2x}\\right)\\tag*{\\textbf{\\textcolor{black}{A1}}}\n  \\end{align*}\n  $$\n\n  As $\\log_n{n}=1$, we can replace $\\log_2{2}$ with 1 and simplify\n\n  $$\n  \\begin{align*}\n  &=12\\left(\\frac{1}{\\log_2x}\\right)\\\\[12pt]\n  &=\\answer{\\dfrac{12}{\\log_2x}}\\hspace{1em}\\text{ ...as required}\\\\[12pt]\n  &=\\text{R.H.S.}\n  \\end{align*}\n  $$\n\n- We can replace $12\\log_x2$ with the R.H.S. of the identity from part (a)\n\n  $$\n  \\begin{align*}\n  \\log_2x&=8-12\\log_x2\\\\[6pt]\n  \\log_2x&=8-\\frac{12}{\\log_2x}\\tag*{\\textbf{\\textcolor{black}{(M1)}}}\n  \\end{align*}\n  $$\n\n  We now multiply each side by $\\log_2x$ and then rearrange such that the R.H.S. is equal to $0$\n\n  $$\n  \\begin{align*}\n  (\\log_2x)^2&=8\\log_2x-12\\\\[6pt]\n  (\\log_2x)^2-8\\log_2x+12&=0\\tag*{\\textbf{\\textcolor{black}{(M1)}}}\n  \\end{align*}\n  $$\n\n  This is a hidden quadratic equation.  If we replace $\\log_2$ with a variable, say $a$, we get\n\n  $$\n  \\begin{align*}\n  a^2-8a+12&=0\n  \\end{align*}\n  $$\n\n  Let's solve this by factorising.\n\n  $$\n  \\begin{align*}\n  (a-2)(a-6)&=0    \n  \\end{align*}\n  $$\n\n  Therefore the solutions are\n\n  $$\n  \\begin{align*}\n  a-2&=0&\\text{and}&&a-6=0\\\\[6pt]\n  a&=2&&& a=6\n  \\end{align*}\n  $$\n\n  Recall $a=\\log_2x$, therefore the solutions become\n\n  $$\n  \\begin{align*}\n  \\log_2x&=2&&&\\log_2x=6\\tag*{\\textbf{\\textcolor{black}{A1}}}\n  \\end{align*}\n  $$\n\n  Converting each to exponential form, we get\n\n  $$\n  \\begin{align*}\n  x&=2^2&&&x=2^6\\\\[6pt]\n  &\\hspace{-0.8em}\\answer{x=4}&\\hspace{0.3em}&&\\answer{x=64}\\tag*{\\textbf{\\textcolor{black}{A1}}}\n  \\end{align*}\n  $$\n\n",
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 18',
    content:
      '\n- Express $3x^2 + 18x + 20$ in the form $a(x+b)^2 + c$ where\n$a,b,c \\in\\mathbb{Z}$. <span class="marks">[2]</span>\n\n- Given that $f(x) = x + 3$ and $(g\\circ f)(x) = 3x^2 + 18x + 20$,\nfind $g(x)$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the method of completing the square, we get\n\n  $$\n  \\begin{aligned}\n  3x^2 + 18x + 20 &= 3\\big[x^2 + 6x\\big] + 20 \\\\[6pt]\n  &= 3\\big[(x+3)^2 - 9\\big] + 20 \\\\[6pt]\n  &= 3(x+3)^2 - 27 + 20 \\\\[6pt]\n  &\\answer{= 3(x+3)^2 - 7}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{10.8em} (g\\circ f)(x) &= 3x^2 + 18x + 20 \\\\[6pt]\n  g(f(x)) &= 3(x+3)^2 - 7 \\hspace{3em} [\\text{by part (a)}] \\\\[6pt]\n  g(x+3) &= 3(x+3)^2 - 7 \\hspace{3em} [\\text{since $f(x) = x + 3$}] \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{g(x) = 3x^2 - 7} \\hspace{0.6em}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 19',
    content:
      'A cannonball is fired from the top of a tower. The rate of change of the height, $h$, of the cannonball above the ground is modelled by\n\n$$\n\\begin{aligned}\nh\'(t) = -4t + 20, \\hspace{0.5em} t \\geq 0,\\end{aligned}\n$$\n\nwhere $h$ is in metres and $t$ is the time, in seconds, since the moment the cannonball was fired.\n\n- Determine the time $t$ at which the cannonball reached its maximum height. <span class="marks">[2]</span>  \n\nAfter one second, the cannonball is 26 metres above the ground.\n\n- \n  - Find an expression for $h(t)$, the height of the cannonball above the ground at time $t$.\n  - Hence, determine the maximum height reached by the cannonball. <span class="marks">[5]</span>\n\n\n- Write down the height of the tower. <span class="marks">[1]</span>\n\n- Calculate the height of the cannonball $4$ seconds after it was fired. <span class="marks">[2]</span>\n\n\nThe cannonball hits its target on the ground $n$ seconds after it was fired.\n\n- Find the value of $n$. <span class="marks">[2]</span>\n\n- Determine the total time the cannonball was above the height of the tower.<span class="marks">[3]</span>\n\n\nA second cannonball is fired from exactly halfway up the tower, with the same projectile motion as the first cannonball.\n\n- Given that both cannonballs land at the same time, determine the length of time between the first cannonball and the second cannonball being fired. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- The time at which the cannonball reaches maximum height is found by solving $h'(t)=0$. We have\n\n  $$\n  \\begin{align*}\n  h'(t) &= 0 \\\\[6pt]\n  -4t + 20 &= 0 \\\\[6pt]\n  &\\hspace{-0.275em}\\tcbhighmath{t = 5 \\text{ s}}\n  \\end{align*}\n  $$\n\n- \n  - Given that $h(t)=\\int h'(t)\\,\\mathrm{d}t$, we have\n\n    $$\n    \\begin{align*}\n    h(t) &= \\int{-4t+20}\\,\\mathrm{d}t \\\\[6pt]\n    &= -2t^2 +20t + C\n    \\end{align*}\n    $$\n\n    Given that $h=26$ when $t=1$, we have\n\n    $$\n    \\begin{align*}\n    h(1) &= -2(1)^2 +20(1) + C \\\\[6pt]\n    26 &= -2 + 20 + C \\\\[6pt]\n    C &= 8\n    \\end{align*}\n    $$\n\n    Therefore $\\hspace{0.575em}\\tcbhighmath{h(t) = -2t^2 +20t + 8}$.\n  - We must calculate $h(5)$.\n\n    $$\n    \\begin{align*}\n    h(5) &= -2(5)^2 +20(5) + 8 \\\\[6pt]\n    &= 58\n    \\end{align*}\n    $$\n\n    The maximum height reached is $\\hspace{0.575em}\\tcbhighmath{58 \\text{ metres}}$.\n\n- Evaluating $h(t)$ for $t = 0$, we get\n\n  $$\n  \\begin{align*}\n  \\hspace{3.7em} h(0) &= -2(0)^2+20(0)+8 \\\\[6pt]\n  &\\hspace{0.275em}\\tcbhighmath{= 8 \\text{ m}}\n  \\end{align*}\n  $$\n\n- Evaluating $h(t)$ for $t = 4$, we obtain\n\n  $$\n  \\begin{align*}\n  \\hspace{3.7em} h(5) &= -2(4)^2+20(4)+8 \\\\[6pt]\n  &\\hspace{0.275em}\\tcbhighmath{= 56 \\text{ m}}\n  \\end{align*}\n  $$\n\n- Solving the equation $h(n) = 0$ for $n > 0$, we find\n\n  $$\n  \\begin{align*}\n  -2n^2+20n+8 &= 0 \\hspace{9em} \\\\[6pt] \n  &\\hspace{-0.8em}\\tcbhighmath{n \\approx 10.4} \\hspace{3em} [\\text{by using G.D.C.}]\n  \\end{align*}\n  $$\n\n- Solving the equation $h(t) = 8$ for $t > 0$, we find\n\n  $$\n  \\begin{align*}\n  -2t^2+20t+8 &= 8 \\hspace{8.6em} \\\\[6pt]\n  -2t^2+20t &= 0 \\\\[6pt]\n  &\\hspace{-0.8em} \\tcbhighmath{t = 10 \\text{ seconds}} \\hspace{3em} [\\text{by using G.D.C.}]\n  \\end{align*}\n  $$\n\n- Given that the second cannonball follows the same projectile motion as the first cannonball, the equation is the same as $h(t)$, but with a vertical translation of 4 units down (the second cannonball is launched from a height of 4 metres instead of 8 metres). We have\n\n  $$\n  \\begin{align*}\n  h_2(t) &= -2t^2 +20t + 4 \n  \\end{align*}\n  $$\n\n  Where $h_2(t)$ is the height of the second cannonball above the ground, in metres, at time $t$ seconds.\n  Solving the equation $h_2(t) = 0$ for $t > 0$, we find\n\n  $$\n  \\begin{align*}\n  -2t^2+20t+4 &= 0 \\\\[6pt]\n  t &\\approx 10.20 \\hspace{3em} [\\text{by using G.D.C.}]\n  \\end{align*}\n  $$\n\n  The second cannonball will take $10.2$ seconds to land, whereas the first cannonball will take $10.4$ seconds.\n  Therefore, the second cannonball was fired $\\hspace{0.25em}\\tcbhighmath{0.2 \\text{ seconds later}}$.\n",
    paper: 'PAPER2',
    difficulty: 'MEDIUM',
    calculator: true,
    sort: 1,
    maxMark: '18',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 20',
    content:
      'Let $f(x) = ax^2 - 24x + c$, for $x \\in \\mathbb{R}$, where\n$a, c \\in \\mathbb{Z}$.\n\n- A horizontal line, $L$, intersects the graph of $y = f(x)$ at\n$x = 1$ and $x = 7$.\n  \n  - Find the equation of the axis of symmetry of the graph of\n$y = f(x)$.\n  - Hence show that $a = 3$. <span class="marks">[4]</span>\n\n\n- The equation of $L$ is $y = 6$. Find the value of $c$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - The equation of the axis of symmetry is\n\n    $$\n    \\begin{aligned}\n    x &= \\dfrac{1 + 7}{2} \\hspace{0.2em} \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\answer{x= 4} \\hspace{2.2em}\n    $$\n\n  - Using the axis of symmetry formula, we have\n\n    $$\n    \\begin{aligned}\n    x &= -\\dfrac{b}{2a} \\\\[6pt]\n    4 &= -\\dfrac{(-24)}{2a} \\hspace{3em} [\\text{by part (a)}] \\\\[12pt]\n    \\hspace{8.8em} 8a &= 24 \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\answer{a = 3} \\hspace{2.1em}\n    $$\n\n\n- Since the line $y = 6$ intersects the graph of $y = f(x)$ at\n$x = 1$, we have\n\n  $$\n  \\begin{aligned}\n  f(1) &= 6 \\hspace{6.7em} \\\\[6pt]\n  3(1)^2 - 24(1) + c &= 6 \\\\[7pt]\n  3 - 24 + c &= 6 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{0.8em} \\answer{c = 27}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 21',
    content:
      'Let $f(x) = -6x^2 + bx + c$, for $x \\in \\mathbb{R}$, where\n$b, c \\in \\mathbb{Z}$.\n\n- A horizontal line, $L$, intersects the graph of $y = f(x)$ at\n$(-1,h)$ and $(5,h)$, where $h \\in \\mathbb{R}$.\n  \n  - Find the equation of the axis of symmetry of the graph of\n$y = f(x)$.\n  - Hence show that $b = 24$. <span class="marks">[4]</span>\n\n\n- Given $h=-8$, find the value of $c$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - The equation of the axis of symmetry is\n\n    $$\n    \\begin{aligned}\n    x &= \\dfrac{-1 + 5}{2} \\hspace{0.2em} \\\\[12pt]\n    &\\hspace{-0.5em}\\answer{x= 2} \\end{aligned}\n    $$\n\n  - Using the axis of symmetry formula, we have\n\n    $$\n    \\begin{aligned}\n    x &= -\\dfrac{b}{2a} \\\\[12pt]\n    \\hspace{10em} 2 &= -\\dfrac{b}{2(-6)} \\hspace{3em} [\\text{by part (a)(i)}] \\\\[12pt]\n    & \\hspace{-0.5em} \\answer{b = 24} \\end{aligned}\n    $$\n\n\n- Since the line $L$ intersects the graph of $y = f(x)$ at $(-1,-8)$,\nwe have\n\n  $$\n  \\begin{aligned}\n  f(-1) &= -8  \\\\[12pt]\n  -6(-1)^2 + 24(-1) + c &= -8 \\\\[12pt]\n  -6 - 24 + c &= -8 \\\\[12pt]\n  &\\hspace{-0.45em} \\answer{c = 22}\\end{aligned}\n  $$\n\n',
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
      'Find the range of possible values for $p$ such that $e^{2x}+2\\ln p = 4e^x$ has at least one real solution.',
    markScheme:
      'The equation is a hidden quadratic. Let $k=e^x$\n\n$$\n\\begin{align*}\nk^2 - 4k + 2 \\ln p &= 0  \\tag*{\\textbf{R1}}\n\\end{align*} \n$$\n\nUsing the discriminant we can say a quadratic equation has at least one real solution if $ b^2-4ac\\geq 0$.\nTherefore, we have at least one real solution for $k$ if\n\n$$\n\\begin{align*}\n(-4)^2-4(2\\ln p) &\\geq 0 \\tag*{\\textbf{M1A1}}\\\\[7pt]\n16-8\\ln p &\\geq 0 \\\\[7pt]\n8\\ln p &\\leq 16  \\\\[7pt]\n\\ln p &\\leq 2 \\\\[6pt]\n&\\hspace{-2.33em}\\tcbhighmath{0 < p \\leq e^2} \\hspace{3em} \\text{($\\ln p > 0$)} \\tag*{\\textbf{A1A1}}\\\\[-11pt]\n\\end{align*} \n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 23',
    content:
      'The line $y = x + 1$ touches the graph of the function\n$g(x) = 2x^2 + kx + 3$ at one point. Find the possible values of $k$.',
    markScheme:
      'Letting $g(x) = y$ we get\n\n$$\n\\begin{aligned}\n2x^2 + kx + 3 &= x + 1   \\\\[10pt]\n2x^2 + (k-1)x + 2 &= 0 \\\\[10pt]\n[\\hspace{0.1em}\\text{discriminant of quadratic above}\\hspace{0.1em}] &= 0 \\\\[10pt]\n(k-1)^2 - 4(2)(2) &= 0 \\hspace{3em} [\\triangle  = b^2 - 4ac] \\\\[10pt]\nk^2 - 2k + 1 - 16 &= 0 \\\\[10pt]\nk^2 - 2k - 15 &= 0 \\\\[10pt]\n(k - 5)(k + 3) &= 0 \\\\[10pt]\n&\\hspace{-0.5em} \\answer{k = -3, \\, 5}\\end{aligned}\n$$\n',
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
    title: 'Question 24',
    content:
      'Let $f(x) = x^2 + kx$ and $g(x) = x + k$, for $x \\in \\mathbb{R}$, where\n$k$ is a constant.\nThe graphs of $y = f(x)$ and $y = g(x)$ intersect at two distinct\npoints.\nFind the possible values of $k$.',
    markScheme:
      'If we rewrite the equation $f(x) = g(x)$ in the form\n$ax^2 + bx + c = 0$, we have\n\n$$\n\\begin{aligned}\nx^2 + kx &= x + k \\\\[6pt]\nx^2 + (k-1)x - k &= 0 \\hspace{3.1em}\\end{aligned}\n$$\n\nHence the quadratic\nfunction $q(x) = x^2 + (k-1)x - k$ has two distinct real roots.\nTherefore we get\n\n$$\n\\begin{aligned}\n\\hspace{5.9em} [\\text{discriminant of $q$}] &> 0 \\\\[6pt]\n(k-1)^2 - 4(1)(-k) &> 0 \\hspace{3em}  [\\triangle  = b^2 - 4ac]  \\\\[6pt]\n(k^2 - 2k + 1) + 4k &> 0 \\\\[6pt]\nk^2  + 2k + 1 &> 0 \\\\[6pt]\n(k + 1)^2 &> 0 \\\\[7pt]\n|k+1| &> 0 \\hspace{3em}{(1)}\\end{aligned}\n$$\n\nFrom the inequality $(1)$, we get\n\n$$\n\\begin{aligned}\n\\hspace{3.7em} k + 1 < 0 \\hspace{0.525em}&\\text{ or }\\hspace{0.525em} k + 1 > 0 \\\\[6pt]\nk < \\hspace{-0.1em} -1 \\hspace{0.525em}&\\text{ or }\\hspace{0.525em} k > -1   \\\\\n\\end{aligned}\n$$\n\nHence the set of possible values of $k$ is\n$\\answer{\\mathbb{R}\\setminus\\{-1\\}}$',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
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
      'Let $f(x) = p - \\dfrac{16}{x}$, for $x \\neq 0$, where $p$ is a constant.\nThe line $y = x - p$ intersects the graph of $y = f(x)$ at two distinct\npoints.\nFind the possible values of $p$.',
    markScheme:
      'If we rewrite the equation $f(x) = x - p$ in the form\n$ax^2 + bx + c = 0$, we have\n\n$$\n\\begin{aligned}\np - \\dfrac{16}{x} &= x - p \\\\[6pt]\n2p - \\dfrac{16}{x} &= x \\\\[11pt]\n2px - 16 &= x^2 \\\\[14pt]\n\\hspace{0.2em} x^2 - 2px + 16 &= 0 \\\\\n\\end{aligned}\n$$\n\nHence the quadratic\nfunction $q(x) = x^2 - 2px + 16$ has two distinct real roots.\nTherefore we get\n\n$$\n\\begin{aligned}\n\\hspace{5.8em} [\\text{discriminant of $q$}] &> 0 \\\\[6pt]\n(-2p)^2 - 4(1)(16) &> 0 \\hspace{3em}  [\\triangle  = b^2 - 4ac]  \\\\[6pt]\n4p^2 - 64 &> 0 \\\\[6pt]\np^2 - 16 &> 0 \\\\[6pt]\np^2 &> 16 \\\\[7pt]\n|p| &> 4 \\hspace{3em}{(1)}\\end{aligned}\n$$\n\nFrom the inequality $(1)$, we get\n\n$$\n\\begin{aligned}\n\\hspace{3em} p < \\hspace{-0.1em}-4 \\hspace{0.525em}&\\text{ or }\\hspace{0.525em} p > 4  \\\\\n\\end{aligned}\n$$\n\nHence the set of possible values of $p$ is\n$\\answer{(-\\infty,-4)\\cup(4,\\infty)}$',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 26',
    content:
      'Consider the function\n\n$$\n\\begin{align*}\n    f(x)=\\frac{2}{3}\\sqrt{x}(9x^2-8x+3)\n\\end{align*}\n$$\n\n\n- Show that $\\displaystyle f\'(x)=\\frac{1}{\\sqrt{x}}(15x^2-8x+1)$. <span class="marks">[4]</span>\n\n- Hence find the $x-$coordinates of the two stationary points of $f(x)$.<span class="marks">[3]</span>\n\n\nA particle, $P$, is moving along the $x-$axis. Its position $s$, in metres, relative to the origin after time $t$, measured in seconds, is given by\n\n$$\n\\begin{align*}\n    s(t)=\\frac{2}{3}\\sqrt{t}(9t^2-8t+3)\n\\end{align*}\n$$\n\nWhere $t \\geq 0$.\nThe particle is moving to the left for $t=k\\,$seconds.\n\n- Hence find $k$.<span class="marks">[4]</span>  \n',
    markScheme:
      "\n- There are a number of ways to differentiate this function.\n  We could expand the brackets using index laws then differentiate each term.\n  However, in this solution we will use the product rule.\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{(M1)}}\\\\\n  \\hspace{8em}&\\text{If }& &\\hspace{-5em}&y&=uv&\\\\[6pt]\n  \\hspace{8em}&\\text{then }&&\\hspace{-5em}&\\tfrac{\\mathrm{d}y}{\\mathrm{d}x}&= v\\tfrac{\\mathrm{d}u}{\\mathrm{d}x}+u\\tfrac{\\mathrm{d}v}{\\mathrm{d}x}\n  \\end{align*}\n  $$\n\n  With $u=\\frac{2}{3}x^{\\frac{1}{2}}$ and $v=9x^2-8x+3$.\n  Using the power rule, we get $\\tfrac{\\mathrm{d}u}{\\mathrm{d}x}=\\frac{1}{3}x^{-\\frac{1}{2}}$ and $\\tfrac{\\mathrm{d}v}{\\mathrm{d}x}=18x-8$.\n  By substituting these results into the formula we can write\n\n  $$\n  \\begin{align*}\n      f'(x)&=(9x^2-8x+3)\\times \\tfrac{1}{3}x^{-\\frac{1}{2}}+\\tfrac{2}{3}x^{\\frac{1}{2}} \\times (18x-8)\\tag*{\\textbf{A1A1}}\n  \\end{align*}\n  $$\n\n  If we look at the requested form of the answer we can see that $x^{-\\frac{1}{2}}$ is a common factor.\n  Note that for the second term of the derivative we can use the following to help us factorise $x^{\\frac{1}{2}} = x^{-\\frac{1}{2}} \\times x$.\n  Hence we get\n\n  $$\n  \\begin{align*}\n      &=x^{-\\frac{1}{2}}\\left[\\tfrac{1}{3}(9x^2-8x+3)+\\tfrac{2}{3} \\times x(18x-8)\\right]\n  \\end{align*}\n  $$\n\n  Now we can expand the brackets and simplify\n\n  $$\n  \\begin{align*}\n      \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}\n      &=x^{-\\frac{1}{2}}\\left[3x^2-\\tfrac{8}{3}x+1+12x^2-\\tfrac{16}{3}x\\right]\\\\[12pt]\n      &=x^{-\\frac{1}{2}}\\left[15x^2-\\tfrac{24}{3}x+1)\\right]\\\\[12pt]\n      &=\\answer{\\dfrac{1}{\\sqrt{x}}(15x^2-8x+1)}\\hspace{2em}\\text{... as required}\n  \\end{align*}  \n  $$\n\n- Stationary points occur when $f'(x)=0$.\n  Hence we can form an equation\n\n  $$\n  \\begin{align*}\n      \\frac{1}{\\sqrt{x}}(15x^2-8x+1)&=0\\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Note that $\\frac{1}{\\sqrt{x}}\\neq 0$ for any value of $x$, therefore we only need to consider the term in the brackets when solving the equation above. Thus we need to solve\n\n  $$\n  \\begin{align*}\n      15x^2-8x+1&=0\n  \\end{align*}  \n  $$\n\n  We can attempt to factorise this. Note that $15x^2=3x \\times 5x$ and the only combinations that give $+1$ are $1 \\times 1$ or $(-1) \\times (-1)$. Hence through inspection we get\n\n  $$\n  \\begin{align*}\n      (5x-1)(3x-1)&=0\\tag*{\\textbf{A1}}\n  \\end{align*} \n  $$\n\n  The $x-$coordinates of the stationary points are $\\answer{x=\\tfrac{1}{5}, \\tfrac{1}{3}}$\n\n  $$\n  \\begin{align}\n  \\tag*{\\textbf{A1}}\n  \\end{align}\n  $$\n\n- The particle is moving left when the velocity is negative. Hence we need to find the interval for $t$ which satisfies\n\n  $$\n  \\begin{align*}\n      v(t)&<0\\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  We can note that $v(t)=s'(t)$ and that the function given for $s(t)$ is of the same form as $f(x)$ from part (a).\n  Hence, using the answer from part (a) we can say that\n\n  $$\n  \\begin{align*}\n      v(t)&=\\frac{1}{\\sqrt{t}}(15t^2-8t+1)\n  \\end{align*}\n  $$\n\n  We can realise that if $t \\geq 0$ then $\\tfrac{1}{\\sqrt{t}}>0$. Therefore the expression in the bracket will determine the sign of $v(t)$.\n  To help us here we can make a sketch of $y=15t^2-8t+1$\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/3eb85e51-71cf-487e-a1b4-012c7c465f76/images/4e3277c2-fbdb-43f2-a545-a82cd4c4495e/1276.JPEG)\n\n\n\n  $$\n  \\begin{align}\n  \\tag*{\\textbf{(M1)}}\n  \\end{align}\n  $$\n\n  Notice the red part of the curve is when $y<0$ and therefore $v(t)<0$.\n  Using our answers from part (b) we can write that $v(t)<0$ when $\\tfrac{1}{5}<t<\\tfrac{1}{3}$.\n\n  $$\n  \\begin{align}\n  \\tag*{\\textbf{(A1)}}\n  \\end{align}\n  $$\n\n  However, the question doesn't ask for an interval it asks for a total time the particle is moving left, hence\n\n  $$\n  \\begin{align*}\n      k&=\\tfrac{1}{3}-\\tfrac{1}{5}\\\\[6pt]\n      &=\\tfrac{5}{15}-\\tfrac{3}{15}\\\\[6pt]\n      &=\\answer{\\tfrac{2}{15}}\\hspace{0.5em}\\text{seconds}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n",
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '11',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 27',
    content:
      'A quadratic function $f$ can be written in the form\n$f(x) = p(x-1)(x-q)$.\nThe graph of $y = f(x)$ has axis of symmetry $x = 2$ and $y$-intercept\nat $(0,-3)$.\n\n- Find the value of $q$. <span class="marks">[3]</span>\n\n- Find the value of $p$. <span class="marks">[3]</span>\n\n\nThe line $y = kx + 6$ is a tangent to the graph of $y = f(x)$.\n\n- Find the possible values of $k$. <span class="marks">[8]</span>  \n',
    markScheme:
      '\n- The $x$-coordinates of the $x$-intercepts are $x=1$ and $x=q$.\nHence, using the equation of the axis of symmetry, we find\n\n  $$\n  \\begin{aligned}\n  \\dfrac{1+q}{2} &= 2 \\\\[6pt]\n  1+q &= 4 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2em} \\answer{q = 3}\n  $$\n\n- Using the coordinates of the $y$-intercept, we get\n\n  $$\n  \\begin{aligned}\n  f(0) &= -3 \\hspace{3.3em} \\\\[6pt]\n  p(0-1)(0-3) &= -3 \\\\[6pt]\n  3p &= -3 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2.7em} \\answer{p = -1}\n  $$\n\n- If we rewrite the equation $f(x) = kx+6$ in the form\n$ax^2 + bx + c = 0$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} -(x-1)(x-3) &= kx+6 \\\\[6pt]\n  -x^2+4x-3 &= kx+6 \\\\[6pt] \n  0 &= x^2+(k-4)x+9\\end{aligned}\n  $$\n\n  Hence the quadratic function\n$q(x) = x^2+(k-4)x+9$ has two equal roots.\n  Therefore we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.2em} [\\text{discriminant of $q$}] &= 0 \\\\[6pt]\n  (k-4)^2 - 4(1)(9) &= 0 \\hspace{3em} [\\triangle  = b^2 - 4ac]  \\\\[6pt]\n  (k-4)^2 &= 36 \\\\[7pt]\n  k-4 &= \\pm 6 \\\\[7pt]\n  k &= 4 \\pm 6 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{4.75em} \\answer{k=-2,\\hspace{0.25em} 10}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 28',
    content:
      'Let $f(x) = 3x^2 + 12x + 9$, for $x \\in \\mathbb{R}$.\n\n- For the graph of $f$, find:\n  \n  - the $y$-intercept;\n  - the $x$-intercepts. <span class="marks">[4]</span>\n\n\n\nThe function $f$ can be written in the form $f(x) = a(x-h)^2+k$.\n\n- Find the values of $a$, $h$ and $k$. <span class="marks">[5]</span>\n\n- For the graph of $f$, write down:\n  \n  - the coordinates of the vertex;\n  - the equation of the axis of symmetry. <span class="marks">[2]</span>\n\n\n\nThe graph of a function $g$ is obtained from the graph of $f$ by a reflection in the $x$-axis, followed by a translation of 4 units in the direction of the positive $y$ axis.\n\n- Find $g(x)$, giving your answer in the form\n$g(x) = px^2 + qx + r$.<span class="marks">[4]</span>  \n',
    markScheme:
      '\n- \n  - Evaluating $f(x) = 3x^2 + 12x + 9$ for $x = 0$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{5em} f(0) &= 3(0)^2 + 12(0) + 9 \\\\[6pt]\n    &= 9 \\end{aligned}\n    $$\n\n    Hence the $y$-intercept is\n$\\answer{\\mathrm{A}(0,9)}$\n  - Solving the equation $f(x) = 0$ for $x$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.5em} 3x^2 + 12x + 9 &= 0 \\hspace{2em} \\\\[6pt]\n    x^2 + 4x + 3 &= 0 \\\\[7pt]\n    (x+3)(x+1) &= 0 \\\\[7pt]\n    x &= -3,\\hspace{0.25em}-1 \\\\\n    \\end{aligned}\n    $$\n\n    Hence the\n$x$-intercepts are\n$\\answer{\\mathrm{B}(-3,0)}$\nand\n$\\answer{\\mathrm{C}(-1,0)}$\n\n- Using the method of completing the square, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.9em} f(x) &= 3x^2 + 12x + 9 \\\\[6pt]\n  &= 3\\big[x^2 + 4x\\big] + 9 \\\\[6pt]\n  &= 3\\big[(x + 2)^2 - 4\\big] + 9 \\\\[6pt]\n  &= 3(x + 2)^2 - 3 \\\\\n  \\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{a = 3,\\hspace{0.25em} h = -2}$\nand  $\\answer{k = -3}$\n- \n  - $\\answer{(-2,-3)}$\n  - $\\answer{x = -2}$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} g(x) &= -f(x)+4 \\\\[6pt]\n  &= -(3x^2 + 12x + 9)+4 \\\\[6pt]\n  &\\answer{= -3x^2 - 12x - 5}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 29',
    content:
      'Let $f(x) = 2x^2 + 4x + p$, for $x \\in \\mathbb{R}$, where\n$p \\in \\mathbb{Z}$.\n\n- The equation $f(x) = 0$ has two equal roots.\n  \n  - Write down the value of the discriminant of $f$.\n  - Show that $p = 2$. <span class="marks">[3]</span>\n\n\n- For the graph of $f$, find:\n  \n  - the equation of the axis of symmetry.\n  - the coordinates of the vertex; <span class="marks">[4]</span>\n\n\n- Write down the solution to the equation $f(x) = 0$. <span class="marks">[1]</span>\n\n- The function $f$ can be written in the form $f(x) = a(x-h)^2 + k$.\nFind\nthe values of $a$, $h$ and $k$. <span class="marks">[5]</span>\n\n- The graph of a function $g$ is obtained from the graph of $f$ by a\nreflection\nin the $x$-axis. Find the coordinates of the vertex of the graph of\n$g$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - $\\answer{\\triangle  = 0}$\n  - We have\n\n    $$\n    \\begin{aligned}\n    \\hspace{2em} \\triangle  &= b^2 - 4ac \\\\[4pt]\n    0 &= 4^2 - 4(2)(p) \\hspace{0.5em} \\\\[5pt]\n    0 &= 16 - 8p \\\\[5pt]\n    16 &= 8p \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\answer{p = 2} \\hspace{2.9em}\n    $$\n\n\n- \n  - Using the axis of symmetry formula, we get\n\n    $$\n    \\begin{aligned}\n    x &= -\\dfrac{b}{2a} \\\\[6pt]\n    x &= -\\dfrac{4}{2(2)} \\hspace{1.4em} \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\answer{x = -1} \\hspace{2.9em}\n    $$\n\n  - Evaluating $f(x)=2x^2 + 4x + 2$ for $x = -1$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.2em} f(-1) &= 2(-1)^2 + 4(-1) + 2 \\\\[8pt]\n    &= 0\\end{aligned}\n    $$\n\n    Hence the coordinates of the vertex are\n$\\answer{(-1,0)}$\n\n- $\\answer{x=-1}$\n- Using the method of completing the square, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} f(x) &= 2x^2 + 4x + 2 \\\\[6pt]\n  &= 2\\big[x^2 + 2x\\big] + 2 \\\\[6pt]\n  &= 2\\big[(x+1)^2 - 1\\big] + 2 \\\\[6pt]\n  &= 2(x+1)^2\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{a = 2,\\hspace{0.25em} h = -1}$\nand  $\\answer{k = 0}$\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.2em}  g(x) &= -f(x) \\\\[6pt]\n  &= -2(x+1)^2\\end{aligned}\n  $$\n\n  Hence the coordinates of the vertex of\nthe graph of $g$ are\n$\\answer{(-1,0)}$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 30',
    content:
      'Let $f(x) = 2(x-1)^2-8$, for $x\\in\\mathbb{R}$.\n\n- Show that $f(x) = 2x^2-4x-6$. <span class="marks">[2]</span>\n\n- For the graph of $f$:\n  \n  - write down the coordinates of the vertex;\n  - write down the $y$-intercept;\n  - find both $x$-intercepts. <span class="marks">[7]</span>\n\n\n- Hence sketch the graph of $f$. <span class="marks">[3]</span>\n\n\nLet $g(x) = 6x^2$, for $x\\in\\mathbb{R}$.\nThe graph of $f$ may be obtained from the graph of $g$ using the\nfollowing three transformations:\n\n$$\n\\begin{aligned}\n\\hspace{1em} & \\bullet\\text{ a compression of scale factor $a$ in the $y$-direction, followed by} \\\\\n& \\bullet\\text{ a horizontal translation of $h$ units, followed by} \\\\\n& \\bullet\\text{ a vertical translation of $k$ units.}\n\\end{aligned}\n$$\n\n\n- Find the values of $a, h$ and $k$. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.9em} f(x) &= 2(x-1)^2-8 \\\\[6pt] \n  &= 2(x^2-2x+1)-8 \\\\[6pt]\n  &\\answer{= 2x^2-4x-6}\\end{aligned}\n  $$\n\n- \n  - $\\answer{(1,-8)}$\n  - $\\answer{\\text{P}(0,-6)}$\n  - Solving the equation $f(x) = 0$ for $x$, we have\n\n    $$\n    \\begin{aligned}\n    2x^2-4x-6 &= 0 \\\\[6pt]\n    x^2-2x-3 &= 0 \\\\[6pt]\n    \\hspace{0.8em} (x+1)(x-3) &= 0 \\\\[6pt]\n    x &= -1,\\hspace{0.25em}3\\end{aligned}\n    $$\n\n    Hence the $x$-intercepts\nare\n$\\answer{\\text{A}(-1,0)}$\nand\n$\\answer{\\text{B}(3,0)}$\n\n- If we sketch the graph of $f$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/defd40b3-8635-4c03-88d0-1ea05c7ccca1/images/42674bdd-229f-43b4-bb47-2584f965f100/8374016b8a888aa9fc9466667cfab6ca4babdde2.svg)\n\n\n- We have\n\n  $$\n  \\begin{aligned}\n  f(x) &= ag(x-h)+k \\\\[6pt]\n  2(x-1)^2 - 8 &= a\\big[6(x-h)^2\\big]+k \\\\[6pt]\n  2(x-1)^2 - 8 &= 6a(x-h)^2+k \\hspace{2.5em}\\end{aligned}\n  $$\n\n  Hence we\nfind\n$\\answer{a = 1/3,\\hspace{0.25em} h = 1}$\nand  $\\answer{k = -8}$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 31',
    content:
      'Let $f(x) = 2x^2-8x+6$, for $x \\in \\mathbb{R}$.\n\n- Write down the value of $f(0)$. <span class="marks">[1]</span>\n\n- Solve the equation $f(x) = 0$. <span class="marks">[3]</span>\n\n\nThe function $f$ can be written in the form $f(x) = a(x-h)^2+k$.\n\n- Find the values of $a$, $h$ and $k$. <span class="marks">[5]</span>\n\n- For the graph of $f$, write down:\n  \n  - the coordinates of the vertex;\n  - the equation of the axis of symmetry. <span class="marks">[2]</span>\n\n\n\nThe graph of a function $g$ is obtained from the graph of $f$ by a reflection in the $x$-axis, followed by a translation of 1 unit to the right and 3 units up.\n\n- Find $g(x)$, giving your answer in the form\n$g(x) = px^2+qx+r$. <span class="marks">[4]</span>  \n',
    markScheme:
      '\n- $\\answer{f(0) = 6}$\n- Solving the equation $f(x) = 0$ for $x$, we get\n\n  $$\n  \\begin{aligned}\n  2x^2-8x+6 &= 0 \\\\[6pt]\n  x^2-4x+3 &= 0 \\\\[7pt]\n  (x-1)(x-3) &= 0 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{6.8em} \\answer{x = 1,\\hspace{0.25em}3}\n  $$\n\n- Using the method of completing of square, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1em} f(x) &= 2x^2-8x+6 \\\\[6pt]\n  &= 2\\big[x^2-4x\\big]+6 \\\\[6pt]\n  &= 2\\big[(x-2)^2-4\\big]+6 \\\\[6pt]\n  &= 2(x-2)^2-2\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{a = 2,\\hspace{0.25em}h=2}$\nand  $\\answer{k=-2}$\n- \n  - $\\answer{(2,-2)}$\n  - $\\answer{x = 2}$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.4em} g(x) &= -f(x-1)+3 \\\\[6pt]\n  &= -\\big[2((x-1)-2)^2-2\\big]+3 \\\\[6pt]\n  &= -2(x-3)^2+5 \\\\[6pt]\n  &= -2(x^2-6x+9)+5 \\\\[6pt]\n  &\\answer{= -2x^2+12x-13}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 32',
    content:
      'The graph of a function $f$ has its vertex at the point $(1,7)$ and intersects the $x$-axis at $x=-3$.\n\n- Find $f$ in the form $f(x)=a\\left(x-h\\right)^2+k$. <span class="marks">[3]</span>  \n\nThe function $g$ is defined by $g(x)=mx^2-2nx+\\dfrac{2n^2}{m}$ where $x \\in \\mathbb{R}$, $m \\in \\mathbb{R}^+$ and $n \\in \\mathbb{R}$.\n\n- In the case where $g(-2)=g(1)=3$,\n  \n  - find the value of $m$ and the value of $n$;\n  - Find the range of $g$.<span class="marks">[7]</span>\n\n\n\nThe linear function $h$ is defined by $h(x)=nx+1$ where $x \\in \\mathbb{R}$.\n\n- Show that the graphs of $h$ and $g$ have two distinct points of intersection for every possible value of $m \\in \\mathbb{R}^+$ and $n \\in \\mathbb{R}$. <span class="marks">[6]</span>  \n',
    markScheme:
      '\n- In the form $f(x)=a\\left(x-h\\right)^2+k$, $h$ is the $x$-coordinate of the vertex, and $k$ is the $y$-coordinate. Hence $h=1$ and $k=7$, and $f(x)=a\\left(x-1\\right)^2+7$.\n  The graph of $f$ passes through the point $(-3,0)$, so we have $f(-3)=0$.\n\n  $$\n  \\begin{align*}\n  f(-3) &= a\\left(-3-1\\right)^2+7 \\\\[8pt]\n  0 &= 16a + 7 \\\\[8pt]\n  a &= -\\dfrac{7}{16}\n  \\end{align*}\n  $$\n\n  Therefore\n\n  $$\n  \\begin{align*}\n  \\tcbhighmath{f(x)=-\\dfrac{7}{16}\\left(x-1\\right)^2+7}\n  \\end{align*}\n  $$\n\n- \n  - We have that $g(-2)=g(1)=3$, so $g$ passes through the points $(-2,3)$ and $(1,3)$. Given that $g$ is a quadratic and hence its graph is a parabola, we have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/09cdddd1-7877-46ce-91a8-83ac4dda0050/images/30297240-6340-43f8-aac6-45f0034a88d8/aa983a.PNG)\n\n\n    The axis of symmetry must be halfway between these points and has equation $x=-\\dfrac{1}{2}$. Using the formula for the axis of symmetry, we have\n\n    $$\n    \\begin{align*}\n    x &= -\\dfrac{b}{2a} \\\\[8pt]\n    -\\dfrac{1}{2} &= -\\dfrac{-2n}{2m} \\\\[8pt]\n    m &= -2n\n    \\end{align*}\n    $$\n\n    Substituting $-2n$ in place of $m$, we have\n\n    $$\n    \\begin{align*}\n    g(x) &= -2nx^2 -2nx + \\dfrac{2n^2}{-2n} \\\\[8pt]\n    &= -2nx^2 - 2nx - n\n    \\end{align*}\n    $$\n\n    And given that $g(1)=3$,\n\n    $$\n    \\begin{align*}\n    g(1) &= -2n(1)^2 - 2n(1) - n \\\\[8pt]\n    3 &= -5n \\\\[8pt]\n    &\\hspace{-0.5em}\\tcbhighmath{n = -\\dfrac{3}{5}}\n    \\end{align*}\n    $$\n\n    And calculating the value of $m$,\n\n    $$\n    \\begin{align*}\n    m &= -2n \\\\[8pt]\n    &= -2\\left(-\\dfrac{3}{5}\\right) \\\\[8pt]\n    &\\hspace{-0.5em}\\tcbhighmath{m = \\dfrac{6}{5}}\n    \\end{align*}\n    $$\n\n  - As stated in part (b)(i), the $x$-coordinate of the vertex is $x=-\\dfrac{1}{2}$. The $y$-coordinate will therefore be equal to $g\\left(-\\dfrac{1}{2}\\right)$:\n\n    $$\n    \\begin{align*}\n    g(x) &= \\dfrac{6}{5}x^2 + \\dfrac{6}{5}x + \\dfrac{3}{5} \\\\[6pt]\n    g\\left(-\\dfrac{1}{2}\\right) &= \\left(\\dfrac{6}{5}\\right)\\left(-\\dfrac{1}{2}\\right)^2 + \\left(\\dfrac{6}{5}\\right)\\left(-\\dfrac{1}{2}\\right) + \\dfrac{3}{5} \\\\[6pt]\n    &= \\dfrac{3}{10} - \\dfrac{6}{10} + \\dfrac{6}{10} \\\\[6pt]\n    &= \\dfrac{3}{10}\n    \\end{align*}\n    $$\n\n    The vertex is at $\\left(-\\dfrac{1}{2},\\dfrac{3}{10}\\right)$ and the graph of $g$ is as follows:\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/09cdddd1-7877-46ce-91a8-83ac4dda0050/images/94b85dfd-0c28-4756-9e71-4b2b5fb61bf9/aa983b.PNG)\n\n\n\n    $$\n    \\begin{align*}\n    \\tcbhighmath{\\text{The range of $g$ is $g(x) \\geq \\dfrac{3}{10}$.}}  \n    \\end{align*}\n    $$\n\n\n- If $g$ and $h$ always have two distinct points of intersection, then the equation $g(x)=h(x)$ must have two unique solutions. We have\n\n  $$\n  \\begin{align*}\n  g(x) &= h(x) \\\\[8pt]\n  mx^2-2nx+\\dfrac{2n^2}{m} &= nx + 1 \\\\[8pt]\n  mx^2 - 3nx + \\dfrac{2n^2}{m} -1 &= 0\n  \\end{align*}\n  $$\n\n  We can use the discriminant to check the number of solutions.\n\n  $$\n  \\begin{align*}\n  \\Delta &= b^2 - 4ac \\\\[8pt]\n  &= (-3n)^2 - 4(m)\\left(\\dfrac{2n^2}{m} -1\\right)\\\\[8pt]\n  &=(-3n)^2 - 4(m)\\left(\\dfrac{2n^2}{m} -1\\right) \\\\[8pt]\n  &=9n^2 - 8n^2 + 4m \\\\[8pt]\n  &=n^2 + 4m \n  \\end{align*}\n  $$\n\n  Given that $m \\in \\mathbb{R}^+$, $4m>0$. $n^2 \\geq 0$. Hence $\\Delta>0$. Thus\n  $\\boxed{\\text{The graphs of } h \\text{ and } g \\text{ have two distinct points of intersection for all } m \\in \\mathbb{R}^+ \\text{ and } n \\in \\mathbb{R}.}$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '16',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 33',
    content:
      'The arithmetic sequence has the sixth term of $u_6=\\ln{2}$ and the eighth term of $u_8=\\frac{3}{2}\\ln{4}$.\n\n- \n  - Show the common difference is $\\ln2$.\n  - Find $u_1$.\n  - Hence, show that the sum of $n$ terms is given by $S_n=\\left(n^2-9n\\right)\\ln {\\sqrt{2}} $. Where $n \\in \\mathbb{Z^+}$. <span class="marks">[5]</span>\n\n\n\nA new function, $f(x)$, is formed using $S_n$ with the discrete variable $n$ being replaced with the continuous variable $x$, such that $x \\in \\mathbb{R}$. Hence $f(x)=\\left(x^2-9x\\right)\\ln {\\sqrt{2}}$.\n\n- \n  - Write down the equation of the axis of symmetry of $f(x)$.\n  - Sketch $f(x)$ on the grid below, identify the axis of symmetry and any axis intercepts.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b47a175-7f1f-4e12-9580-54726bb82f90/images/5f674790-b5af-473c-b8d4-3f746b96c744/q1037.png)\n\n\n  - Hence or otherwise, find the minimum value of $S_n$ in the form $a\\ln b$. Where $a,b \\in \\mathbb{Z}$ <span class="marks">[5]</span>\n\n\n\nConsider the linear function $g(x)=(6-3x)\\ln {\\sqrt 2}$.\n\n- \n  - Solve $f(x)=g(x)$.\n  - Hence, solve the inequality $f(x)<g(x)$.\n  - Hence or otherwise, find the range of values of $n$ that satisfy $S_n<g(x)$. <span class="marks">[5]</span>\n\n\n',
    markScheme:
      '\n- \n  - As the sequence is arithmetic we can write $u_8=u_6+2d$. Hence\n\n    $$\n    \\begin{align*}\n        \\tfrac{3}{2}\\ln{4}&=\\ln{2}+2d \\tag*{\\textbf{M1}}\\\\\n        2d&=3\\ln{(\\sqrt{4})}-\\ln2\\\\\n        2d&=2\\ln{2}\\tag*{\\textbf{A1}}\\\\[6pt]\n        &=\\hspace{0.525em}\\tcbhighmath{\\ln2}\\hspace{2.525em} \\text{...as required} \\tag*{\\textbf{AG}}\n    \\end{align*}\n    $$\n\n  - We can use $u_6$ to find the first term\n\n    $$\n    \\begin{align*}\n        u_6&=u_1+5d\\\\\n        \\ln2&=u_1+5\\ln2\\\\\n        u_1&=\\hspace{0.525em}\\answer{-4\\ln2} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Using the sum of $n$ terms of an arithmetic sequence we can write\n\n    $$\n    \\begin{align*}\n        S_n&=\\frac{n}{2}\\left(2\\times -4 \\ln2 +(n-1)\\times \\ln2\\right) \\tag*{\\textbf{M1}}\\\\\n        &=\\frac{n^2}{2}\\ln2-\\frac{9n}{2}\\ln2\\\\\n        &=\\frac{\\ln2}{2}\\left(n^2-9n\\right) \\tag*{\\textbf{A1}}\\\\[6pt]\n        &=\\hspace{0.525em}\\answer{\\left(n^2-9n\\right)\\ln{\\sqrt{2}}} \\hspace{2.525em} \\text{...as required} \\tag*{\\textbf{AG}}\n    \\end{align*}\n    $$\n\n\n- \n  - Using the axis of symmetry formula, we can write\n\n    $$\n    \\begin{align*}\n        x&=-\\frac{-9\\ln{\\sqrt{2}}}{2\\ln{\\sqrt{2}}}\\\\\n        &\\hspace{-0.525em}\\answer{x=\\tfrac{9}{2}} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Here is the sketch of $f(x)$ with the desired features identified.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b47a175-7f1f-4e12-9580-54726bb82f90/images/ff26f159-934a-404d-946c-88a7dab4de40/a1037-1.png)\n\n\n    $\\answer{\\text{Correct intercepts}}$ A1 and $\\answer{\\text{axis of symmetry}}$ A1.\n  - Using the symmetry of $f(x)$ we can identify the minimum value(s) of $f(x)$ which has integer $x$ coordinates.\n    Both points are equidistant from the axis of symmetry and they represent the minimum value of $S_n$.\n\n    $$\n    \\tag*{\\textbf{(M1)}}\n    $$\n\n    $\\textcolor{white}{gap}$\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b47a175-7f1f-4e12-9580-54726bb82f90/images/b53d4797-3cc2-48db-9678-27e521c1ec16/a1037-2.png)\n\n\n    We can use the $x-$value from the graph to pick either $n=4$ or $n=5$ as both will yield the same minimum value. This solution will pick $n=4$, hence, the minimum value of $S_n$ is\n\n    $$\n    \\begin{align*}\n        S_4&=\\left(4^2-9(4)\\right)\\frac{\\ln2}{2}\\\\\n        &=-20\\frac{\\ln2}{2}\\\\[6pt]\n        &=\\hspace{0.525em}\\answer{-10\\ln2} \\tag*{\\textbf{A1}}\\\\\n    \\end{align*}\n    $$\n\n\n- \n  - Equate the RHS of each function\n\n    $$\n    \\begin{align*}\n        \\left(x^2-9x\\right)\\ln {\\sqrt 2}&=(6-3x)\\ln {\\sqrt 2}\n    \\end{align*}\n    $$\n\n    Cancel out the factor $\\ln {\\sqrt 2}$ and solve for $x$\n\n    $$\n    \\begin{align*}\n        x^2-9x&=6-3x\\tag*{\\textbf{(M1)}}\\\\\n        0&=x^2-6x-6\n    \\end{align*}\n    $$\n\n    We can solve this by completing the square.\n\n    $$\n    \\begin{align*}\n        (x-3)^2-9-6&=0\\\\\n        x-3&=\\pm\\sqrt{15}\\\\\n        x&=\\hspace{0.525em}\\answer{3\\pm\\sqrt{15}} \\tag*{\\textbf{A1}}   \n    \\end{align*}\n    $$\n\n  - By making a rough sketch of $g(x)$ on the graph we can solve the inequality\\\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b47a175-7f1f-4e12-9580-54726bb82f90/images/e5de3f5e-73f3-4a69-a581-b579611281ae/a1037-3.png)\n\n\n    We can identify the region the $f(x)<g(x)$. Hence\n\n    $$\n    \\begin{align*}\n        &\\hspace{0.525em}\\answer{3-\\sqrt{15}<x<3+\\sqrt{15}} \\tag*{\\textbf{A1}}\\\\\n    \\end{align*}\n    $$\n\n  - $n$ must be a positive integer and lie entirely within the region identified in part (c)(ii).\n    We know that $\\sqrt{9}<\\sqrt{15}<\\sqrt{16}$, hence we can identify the minimum and maximum values of $n$.\n\n    $$\n    \\tag*{\\textbf{M1}}\n    $$\n\n    $\\textcolor{white}{gap}$\n    The minimum value must be an integer larger than $3-\\sqrt{15}$.\n\n    $$\n    \\begin{align*}\n        -1<3-\\sqrt{15}<0\n    \\end{align*}\n    $$\n\n    The minimum value of $n$ is $1$.\n    Similarly, the maximum value must be an integer smaller than $3+\\sqrt{15}$.\n\n    $$\n    \\begin{align*}\n        6<3+\\sqrt{15}<7\n    \\end{align*}\n    $$\n\n    The maximum value of $n$ is $6$.\n    Hence\n$\\answer{1\\leq n\\leq 6}$.\n\n    $$\n    \\tag*{\\textbf{A1}}\n    $$\n\n    $\\textcolor{white}{gap}$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 34',
    content:
      'The quadratic function $f(x)$ has a vertex at $(h, -2)$.\n\n- The function can be written in the form of $f(x) = a(x-h)^2+k$.\n  \n  - If the equation of the axis of symmetry of $f(x)$ is $x=3$, write down the values of $h$ and $k$.\n  - If the $y-$intercept of $f(x)$ is $-11$, find $a$. <span class="marks">[4]</span>\n\n\n\nA new function $g(x)$ is defined such that $g\'(x)=f(x)$.\n\n- \n  - Show that the function $f(x)$ has no real roots.\n  - Hence, or otherwise, justify that $g(x)$ is a decreasing function. <span class="marks">[3]</span>\n\n\n\nThe function $f(x)$ is vertically translated such that it now has $2$ distinct roots, $x_1$ and $x_2$, where $x_2>x_1$. The coordinates of the new vertex is $(3, m)$. Where $m>0$.\n\n- Show that $x_1=3- \\sqrt{m}$ and $x_2=3+ \\sqrt{m}$. <span class="marks">[2]</span>  \n\nThe area enclosed by $f(x)$ and the $x-$axis is $\\frac{32}{3}$ units.\n\n- \n  - Use the substitution $u=x-3$ to find $\\displaystyle\\int f(x)\\,\\,\\mathrm{d}x$ in terms of $m$.\n  - Hence find $m$. <span class="marks">[6]</span>\n\n\n- Hence, or otherwise, find the region(s) of $x$, for which $g(x)$ is a decreasing function. <span class="marks">[2]</span>\n\n',
    markScheme:
      "\n- \n  - Written in vertex form the point $(h, k)$ is the location of the vertex, additionally, the vertex lies on the axis of symmetry.\n    Hence $\\hspace{0.525em}\\answer{h=3}\\hspace{0.525em}$ and $\\hspace{0.525em}\\tcbhighmath{k=-2}\\hspace{0.525em}$\n\n    $$\n    \\begin{align*}\n        \\tag*{\\textbf{A1A1}}\n    \\end{align*}\n    $$\n\n  - From the question we are told $f(0)=-11$, hence\n\n    $$\n    \\begin{align*}\n        -11&=a(0-3)^2-2  \\tag*{\\textbf{(M1)}}\\\\[6pt]\n        -9&=9a\\\\[6pt]\n        &\\hspace{-0.525em}\\answer{a=-1}\\hspace{0.525em}  \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- \n  - We can use the discriminant to show that $f(x)$ has no real roots.\n    But first, we need to expand and simplify $f(x)$ into the general form.\n\n    $$\n    \\begin{align*}\n        f(x)&=-(x-3)^2-2\\\\[6pt]\n        &=-(x^2-6x+9)-2\\\\[6pt]\n        &=-x^2+6x-11\n    \\end{align*}\n    $$\n\n    Now using the coefficients $a, b$ and $c$ we can find the value of the discriminant\n\n    $$\n    \\begin{align*}\n        \\triangle &= b^2-4ac  \\tag*{\\textbf{M1}}\\\\[6pt]\n        &= (6)^2-4(-1)(-11)\\\\[6pt]\n        &=36-44\\\\[6pt]\n        &=-8\n    \\end{align*}\n    $$\n\n    Hence $\\hspace{0.525em}\\answer{f(x) \\text{ has no real roots as } \\triangle < 0}$.\n\n    $$\n    \\tag*{\\textbf{A1}}\n    $$\n\n    $\\textcolor{white}{gap}$\n  - As $f(x)$ has no real roots and $a<0$ we can say that $f(x)$ is entirely below the $x-$axis.\n    Here is a sketch to help visualise the function\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/79d0d534-041e-400d-b3ee-04705d11f2ca/images/84e2b57f-708a-480f-b6a5-37f847987a10/a1036-1.png)\n\n\n    As $g'(x)=f(x)$, $\\answer{\\text{the gradient of } g(x) \\text{ is always negative}}$ making $g(x)$ a decreasing function.\n\n    $$\n    \\tag*{\\textbf{A1}}\n    $$\n\n    $\\textcolor{white}{gap}$\n\n- After the translation we can write $f(x)=-(x-3)^2+m$.\n  Here is a new sketch of $f(x)$ with the new features identified.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/79d0d534-041e-400d-b3ee-04705d11f2ca/images/0d9d5b7b-4c0b-4e7d-8962-733845ae917c/a1036-2.png)\n\n\n  The roots are found by solving $f(x)=0$\n\n  $$\n  \\begin{align*}\n      0&=-(x-3)^2+m \\tag*{\\textbf{M1}}\\\\[6pt]\n      (x-3)^2&=m\\\\[6pt]\n      x-3&=\\pm \\sqrt{m}\\tag*{\\textbf{A1}}\\\\[6pt]\n      &\\hspace{-0.525em}\\answer{x_1=3 - \\sqrt{m} \\text{ and } x_2=3 + \\sqrt{m}}\\hspace{0.525em} \\hspace{3em} \\text{...as required} \\tag*{\\textbf{AG}}        \n  \\end{align*}\n  $$\n\n- \n  - Using the substitution $u=x-3$ we find that $\\frac{du}{\\mathrm{d}x}=1$, hence $\\mathrm{d}u=\\mathrm{d}x$.\n\n    $$\n    \\begin{align*}\n       \\int f(x)\\,\\,\\mathrm{d}x&= \\int \\left(-(x-3)^2+m\\right)\\,\\,\\mathrm{d}x \\tag*{\\textbf{(M1)}}\\\\[6pt]\n       &=\\int \\left(-u^2+m\\right)\\,\\,\\mathrm{d}u\\\\[6pt]\n       &=-\\frac{1}{3}u^3+mu+c\\\\[6pt]\n       &=\\hspace{0.525em}\\tcbhighmath{-\\frac{1}{3}(x-3)^3+m(x-3)+c} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - We are told that the area enclosed by $f(x)$ and the $x-$axis is $\\frac{32}{3}$ we can visualise this, with the shaded area below being equal to $\\dfrac{32}{3}$\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/79d0d534-041e-400d-b3ee-04705d11f2ca/images/8a7ef13e-9784-41e5-80fa-0b5f132b451d/a1036-3.png)\n\n\nhence\n\n    $$\n    \\begin{align*}\n        \\int_{x_1}^{x_2}f(x)\\,\\,\\mathrm{d}x&=\\frac{32}{3} \\\\[6pt]\n    \\end{align*}\n    $$\n\nUsing the integral we found in part (i) and the roots we find in part (c) we can write\n\n    $$\n    \\begin{align*}\n        \\left[-\\frac{1}{3}(x-3)^3+m(x-3)\\right]_{3-\\sqrt{m}}^{3+\\sqrt{m}}&=\\dfrac{32}{3} \\tag*{\\textbf{(M1)}}\n    \\end{align*}\n    $$\n\nNote, we do not need to include the constant of integration $c$, as this is a definite integral.\\[6pt]\nNext we can substitute in the limits of integration, simplify and then solve for $m$.\n\n    $$\n    \\begin{align*}\n        -\\frac{1}{3}(3+\\sqrt{m}-3)^3+m(3+\\sqrt{m}-3) -&\\\\[6pt]\n        \\left(-\\frac{1}{3}(3-\\sqrt{m}-3)^3+m(3-\\sqrt{m}-3)\\right) &=\\frac{32}{3}\\\\[6pt]\n        -\\frac{1}{3}(\\sqrt{m})^3+m\\sqrt{m}-\\left(-\\frac{1}{3}(-\\sqrt{m})^3-m\\sqrt{m}\\right)&=\\frac{32}{3} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n        -\\frac{2}{3}(\\sqrt{m})^3+2m\\sqrt{m}&=\\frac{32}{3}\\\\[6pt]\n    \\end{align*}\n    $$\n\nRewrite the radicals into index form\n\n    $$\n    \\begin{align*}\n        -\\frac{2}{3}m^{\\frac{3}{2}}+2m^{\\frac{3}{2}}&=\\frac{32}{3} \\tag*{\\textbf{(A1)}}\\\\[6pt]\n        -2m^{\\frac{3}{2}}+6m^{\\frac{3}{2}}&=32\\\\[6pt]\n        4m^{\\frac{3}{2}}&=32\\\\[6pt]\n        m^{\\frac{3}{2}}&=8\\\\[6pt]\n        m&=8^{\\frac{2}{3}}\\\\[6pt]\n        &\\hspace{-0.525em}\\tcbhighmath{m=4} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- Using the answer from part (c) and (d)(ii) we know that\n\n  $$\n  \\begin{align*}\n      x_1&=3-\\sqrt{4}\\\\\n      &=1\n  \\end{align*}\n  $$\n\n  and\n\n  $$\n  \\begin{align*}\n      x_2&=3+\\sqrt{4}\\\\\n      &=5 \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  $g(x)$ is a decreasing function when the value of its gradient is negative.\n  Here is a sketch of $f(x)$ with the roots identified\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/79d0d534-041e-400d-b3ee-04705d11f2ca/images/6ad573a4-0b86-4fee-89e3-237fceca483a/a1036-4.png)\n\n\n  As $g'(x)=f(x)$  and $f(x)$ is negative to the left of $x_1$ and to the right of $x_2$, then $g(x)$ is a decreasing function for\n\n  $$\n  \\begin{align*}\n       \\hspace{0.525em}\\tcbhighmath{x<1}\\hspace{0.525em} \\text{ and } \\hspace{0.525em}\\tcbhighmath{x>5}\\hspace{0.525em} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n",
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '17',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 36',
    content:
      'Consider $f(x) = \\log_k(8x-2x^2)$, for $0 < x < 4$, where $k > 0$.\nThe equation $f(x) = 3$ has exactly one solution. Find the value of $k$.',
    markScheme:
      'If we rewrite the equation $f(x) = 3$ in the form $ax^2 + bx + c = 0$,\nwe have\n\n$$\n\\begin{aligned}\n\\hspace{3em} \\log_k(8x-2x^2) &= 3 \\\\[6pt]\n8x-2x^2 &= k^3 \\\\[6pt]\n0 &= 2x^2 - 8x + k^3\\end{aligned}\n$$\n\nHence the quadratic function\n$q(x) = 2x^2 - 8x + k^3$ has two equal roots.\nTherefore we get\n\n$$\n\\begin{aligned}\n\\hspace{5.1em} [\\text{discriminant of $q$}] &= 0 \\\\[6pt]\n(-8)^2 - 4(2)(k^3) &= 0 \\hspace{3em}  [\\triangle  = b^2 - 4ac]  \\\\[6pt]\n64 - 8k^3 &= 0 \\\\[6pt]\n8 - k^3 &= 0 \\\\[6pt]\nk^3 &= 8 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{3.3em} \\answer{k=2}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 38',
    content:
      'Consider the function $f(x)=6x^2-7x+2$.\n\n- Fully factorise $f(x)$. <span class="marks">[2]</span>  \n\n\nAnother function is defined as $g(x)=\\ln x$.\nA third function is defined as $h(x)=(g \\circ f)(x)$.\n\n- Hence, determine the domain of $h(x)$. <span class="marks">[3]</span>  \n\n\nThe value $a$ is added to $f(x)$, where $a \\in \\mathrm{R}$.\nFor the domain of $h(x)$ to be $x \\in \\mathrm{R}$ then $a>k$.\nThe minimum value of $k$ is $a_{\\text{min}}$.\n\n- Find $a_{\\text{min}}$ <span class="marks">[3]</span>  \n\n\nNow the value $b$ is added to $f(x)$, where $b \\in \\mathrm{R}$ and $b > a_{\\text{min}}$.\n\n- Find the value of $b$ such that the vertex of $h(x)$ lies on the $x-$axis. Give your answer to $4$ significant figures. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We will use the grouping method to factorise.\n\n  $$\n  \\begin{align*}\n      a \\times c &= 2 \\times 6\\\\[6pt]\n       &=12\n  \\end{align*}\n  $$\n\n  Therefore we need to find two numbers that sum to $-7$ and multiply to give $12$. These are $-3$ and $-4$.\n  Therefore, we can then rewrite $-7x$ as $-3x-4x$. Hence\n\n  $$\n  \\begin{align*}\n      6x^2-7x+2&=6x^2-3x-4x+2 \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  We then factorise the resulting expression into two groups\n\n  $$\n  \\begin{align*}\n      &=3x(2x-1)-2(2x-1)\\\\[6pt]\n      &=\\answer{(2x-1)(3x-2)} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- This is a composite function in which we form $h(x)$ by substituting $f(x)$ into $g(x)$. Therefore\n\n  $$\n  \\begin{align*}\n      h(x)&=\\ln{\\left(6x^2-7x+2\\right)} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  We can now sketch $h(x)$ on our G.D.C.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1ad3c15f-2574-4451-89c3-6131f920fec6/images/af7c0b7c-4bcd-4f99-bacf-0b4ca2abe01e/AA1169_a%20(2).JPEG)\n\n\n  $h(x)$ has two vertical asymptotes and these occur when $h(x)=\\ln{0}$. Hence $f(x)=0$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  Using the answer from part (a) we can find their equations.\n\n  $$\n  \\begin{align*}\n      (2x-1)(3x-2)&=0\\\\[6pt]\n      x&=\\tfrac{1}{2}, \\tfrac{2}{3}\n  \\end{align*}\n  $$\n\n  The red arrows on the image above show the domain of $h(x)$.\n  Therefore the $\\answer{\\text{domain of }h(x)\\text{ is }x<\\tfrac{1}{2}\\text{ and }x>\\tfrac{2}{3}}$\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The following image shows $f(x)$ and $h(x)$ together on the same axes.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1ad3c15f-2574-4451-89c3-6131f920fec6/images/864e7db3-f2fc-45ed-ae8d-6c54c1f1a58c/AA1169_c%20(3).JPEG)\n\n\n  Notice that $h(x)$ is undefined when $f(x)<0$, this is the dark blue part of $f(x)$.\n  Hence we need to shift $f(x)$ vertically up $a$ units such that the vertex of $f(x)$ touches the $x-$axis at a single point.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{R1}}\n  \\end{align*}\n  $$\n\n  To do this we must find the minimum value of $f(x)$.\n  Using a G.D.C. we can find the minimum point of $f(x)$ to be $(0.5833...,-0.04166...)$\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Hence $f(x)+0.04166...$ will ensure $f(x)$ intersects the $x-$axis at one point. Ensuring that $f(x)\\geq 0$ for all $x$. This is shown below\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1ad3c15f-2574-4451-89c3-6131f920fec6/images/f9e9a35b-66f6-4ba2-a644-2fcd2cd8379f/AA1169_d.JPEG)\n\n\n  Therefore if $a>0.04166...$ then $f(x)>0$ for all $x$ and the domain of $h(x)$ is $x \\in \\mathrm{R}$.\n  Hence, $\\hspace{0.525em}\\tcbhighmath{a_{\\text{min}}=0.0417}$\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Notice from the image in the previous part, that the vertex of $h(x)$ lies on the same vertical line as $f(x)$.\n  Therefore the equation of the vertical line is $x=0.5833...$ and the final position of the vertex of $h(x)$ must be on the $x-$axis. This is shown below.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1ad3c15f-2574-4451-89c3-6131f920fec6/images/2cb902a1-41ee-439b-9f07-b35d58eb8a60/AA1169_d2.JPEG)\n\n\n  Therefore we need to solve this equation\n\n  $$\n  \\begin{align*}\n      h(0.5833...)&=0\\\\[6pt]\n      (g \\circ (f(0.5833...)+b))&=0\\\\[6pt]\n      \\ln{(f(0.5833...)+b)}&=0 \\hspace{2em} (\\ln{1}=0) \\tag*{\\textbf{A1}}\\\\[6pt]\n      f(0.5833...)+b&=1\n  \\end{align*}\n  $$\n\n  From part (c) we know that $f(0.5833...)=-0.04166...$ at the vertex of $f(x)$ therefore\n\n  $$\n  \\begin{align*}\n      b&=1-(-0.04166...)\\\\[6pt]\n      &=1.04166...\n  \\end{align*}\n  $$\n\n  Therefore $\\hspace{0.525em}\\tcbhighmath{b=1.042}\\hspace{0.525em}$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
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
    type: 'ERQ',
    title: 'Question 39',
    content:
      'Let $f(x) = 16-x^2$, for $x \\in \\mathbb{R}$.\n\n- Find the $x$-intercepts of the graph of $f$. <span class="marks">[2]</span>\n\n\nThe following diagram shows part of the graph of $f$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/78385dee-71bc-4273-bef4-397e024117e8/images/24ab6f66-a806-430a-aef0-034b957aeea0/d5c58a7cfd2c4ba4ba9bf55d5d266b5503182c5c.svg)\n\n\nRectangle ABCD is drawn with A & B on the $x$-axis and C & D on the\ngraph of $f$.\nLet $\\text{OA} = a$.\n\n- Show that the area of ABCD is $32a - 2a^3$. <span class="marks">[2]</span>\n\n- Hence find the value of $a > 0$ such that the area of ABCD\nis a maximum. <span class="marks">[4]</span>\n\n\nLet $g(x) = (x-4)^2 + k$, for $x \\in \\mathbb{R}$, where $k$ is a\nconstant.\n\n- Show that when the graphs of $f$ and $g$ intersect,\n$2x^2-8x+k = 0$. <span class="marks">[2]</span>\n\n- Given that the graphs of $f$ and $g$ intersect only once,\nfind the value of $k$. <span class="marks">[5]</span>\n\n',
    markScheme:
      "\n- Solving the equation $f(x) = 0$ for $x$, we have\n\n  $$\n  \\begin{aligned}\n  16 - x^2 &= 0 \\\\[6pt]\n  (4 - x)(4 + x) &= 0 \\\\[6pt]\n  x &= \\pm 4 \\hspace{2.8em} \\\\\n  \\end{aligned}\n  $$\n\n  Hence the $x$-intercepts\nare\n$\\answer{\\text{P}(-4,0)}$\nand  $\\answer{\\text{Q}(4,0)}$\n- Using the area of a rectangle formula, we deduce\n\n  $$\n  \\begin{aligned}\n  A_{\\text{shaded}} &= \\text{(AB)(AD)} \\\\[6pt]\n  &= \\hspace{-0.05em}\\big(2a\\big)\\hspace{-0.1em}\\big(16-a^2\\big) \\hspace{0.8em} \\\\[6pt]\n  &\\answer{= 32a - 2a^3}\\end{aligned}\n  $$\n\n- Hence, solving the equation\n$\\big[A_{\\text{shaded}}\\big]' \\hspace{-0.15em}= 0$ for $a > 0$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.8em} \\big[32a - 2a^3\\big]' \\hspace{-0.15em} &= 0 \\\\[11pt]\n  32 - 6a^2 &= 0  \\\\[11pt]\n  \\dfrac{32}{6} &= a^2 \\\\[11pt]\n  a &= \\pm \\sqrt{\\dfrac{16}{3}} \\\\[11pt]\n  a &= \\pm {\\dfrac{4}{\\sqrt{3}}} \\\\[11pt]\n  &\\hspace{-0.75em} \\answer{a = \\dfrac{4\\sqrt{3}}{3}} \\hspace{3em} [\\text{since $a > 0$}]\n  \\end{aligned}\n  $$\n\n- Rearranging terms in the equation $f(x) = g(x)$, we deduce\n\n  $$\n  \\begin{aligned}\n  \\hspace{5em} 16 - x^2 &= (x-4)^2 + k \\\\[6pt]\n  \\cancel{16} - x^2 &= (x^2 - 8x + \\cancel{16}) + k \\\\[6pt]\n  0 &= (x^2 - 8x) + x^2 + k \\\\\n  &\\hspace{-5.8em}\\answer{2x^2 - 8x + k = 0} \\hspace{4.95em} \\hspace{3em}{(1)}\n  \\end{aligned}\n  $$\n\n- Given that the graphs of $f$ & $g$ intersect exactly once, from part\n(d), we know the equation $(1)$ has exactly one solution.\n  Hence the quadratic equation $2x^2 - 8x + k=0$ has only one\nsolution.\n  Therefore we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.9em} [\\text{discriminant of $2x^2 - 8x + k$}] &= 0 \\\\[6pt]\n  (-8)^2 - 4(2)(k) &= 0 \\hspace{3em}  [\\triangle  = b^2 - 4ac]  \\\\[6pt]\n  64 - 8k &= 0 \\\\[6pt]\n  64 &= 8k \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{5.1em} \\answer{k = 8}\n  $$\n\n",
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'Consider the function $f(x)=\\dfrac{3x+4}{2x+k}$.\n\n- Write down the domain of $f$ in terms of $k$. <span class="marks">[1]</span>\n\n- Find $f^{-1}(x)$ in terms of $k$. <span class="marks">[2]</span>\n\n- Hence write down the value of $k$ such that $f(x)$ is a self-inverse function.<span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- A rational function is undefined when the denominator is equal to zero.\n\n  $$\n  \\begin{align*}\n  2x+k&=0\\\\[6pt]\n  x&=-\\frac{k}{2}\n  \\end{align*}\n  $$\n\n  Any other value for $x$ is valid.\n  Hence we get the domain\n\n  $$\n  \\begin{align*}\n  &\\hspace{-0.5em}\\tcbhighmath{x \\in \\mathbb{R}, x\\neq-\\frac{k}{2}}\\tag*{\\textbf{\\textcolor{black}{A1}}}\n  \\end{align*}\n  $$\n\n- We are trying to find the function $y=f^{-1}(x)$.\n  The definition of an inverse states that\n\n  $$\n  \\begin{align*}\n      (f \\circ f^{-1})(x)&=x\n  \\end{align*}\n  $$\n\n  Hence we can rewrite this to get\n\n  $$\n  \\begin{align*}\n      f(f^{-1}(x))&=x\\\\[6pt]\n      f(y)&=x\n  \\end{align*}\n  $$\n\n  Hence we get\n\n  $$\n  \\begin{align*}\n  f(y)&=x\\\\[6pt]\n  \\frac{3y+4}{2y+k}&=x\n  \\end{align*}\n  $$\n\n  Recall, we want $y=f^{-1}(x)$ therefore we should rearrange this to make $y$ the subject.\n\n  $$\n  \\begin{align*}\n  x(2y+k)&=3y+4\\\\[6pt]\n  2xy+kx&=3y+4\n  \\end{align*}\n  $$\n\n  To isolate $y$, we move all of the $y$ terms to one side and then factorise out $y$.\n\n  $$\n  \\begin{align*}\n  2xy-3y&=-kx+4\\\\[6pt]\n  y(2x-3)&=-kx+4\\tag*{\\textbf{\\textcolor{black}{(M1)}}}\\\\[6pt]\n  y&=\\frac{-kx+4}{2x-3}\\\\[10pt]\n  &\\hspace{-3.2em}\\answer{f^{-1}(x)=\\dfrac{-kx+4}{2x-3}}\\tag*{\\textbf{\\textcolor{black}{A1}}}\n  \\end{align*}\n  $$\n\n- A self-inverse function is such that $f(x)\\equiv f^{-1}(x)$.\n  Therefore\n\n  $$\n  \\begin{align*}\n  \\frac{3x+4}{2x+k}&\\equiv \\frac{-kx+4}{2x-3}\n  \\end{align*}\n  $$\n\n  Comparing either the numerators or denominators,\n\n  $$\n  \\begin{align*}\n  3x+4&=-kx+4\n  \\end{align*}\n  $$\n\n  Therefore\n\n  $$\n  \\begin{align*}\n  &\\hspace{-0.5em}\\tcbhighmath{k=-3}\\tag*{\\textbf{\\textcolor{black}{A1}}}\n  \\end{align*}\n  $$\n\n',
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
    title: 'Question 2',
    content:
      'The function $f$ is of the form $f(x) = \\dfrac{ax+b}{2x+c}$, for\n$x \\neq -\\dfrac{c}{2}$, where $a,b,c \\in \\mathbb{Z}$.\nGiven\nthat the graph of $y = f(x)$ has asymptotes $x = -5$ and $y = 2$, and\nthat the point\nP$\\left(1,-\\dfrac{1}{12}\\right)$ lies on the graph, find the values of\n$a, b$ and $c$.',
    markScheme:
      'Using the vertical asymptote $x = -5$, we get\n\n$$\n\\begin{aligned}\n\\text{[denominator of $f$ at $-5$]} &= 0 \\hspace{6em} \\\\[6pt]\n2(-5) + c &= 0 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{5em} \\answer{c = 10}\n$$\n\nUsing the horizontal asymptote $y = 2$, we find\n\n$$\n\\begin{aligned}\n\\hspace{0.1em} \\lim_{x\\rightarrow\\pm\\infty} f(x) &= 2 \\\\[6pt]\n\\dfrac{a}{2} &= 2 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{4.4em} \\answer{a = 4}\n$$\n\nUsing the coordinates of the point P, we obtain\n\n$$\n\\begin{aligned}\nf(1) &= -\\dfrac{1}{12} \\\\[6pt]\n\\hspace{3.4em} \\dfrac{4+b}{2+10} &= -\\dfrac{1}{12} \\\\[10pt]\n4+b &= -1 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{5.2em} \\answer{b = -5}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Consider the function $\\displaystyle f(x)=b+\\frac{4}{x+a}$, $\\hspace{1em}$ where $a,b \\in \\mathbb{Z}$.\nThe equation of the vertical asymptote of $f(x)$ is $x=2$ and $f(\\tfrac{2}{3})=0$.\n\n- Write down the value of $a$.<span class="marks">[1]</span>\n\n- Hence, find the value of $b$. <span class="marks">[3]</span>\n\n- Hence, write down the equation of the horizontal asymptote.<span class="marks">[1]</span>\n\n',
    markScheme:
      '\n- The vertical asymptote occurs when the denominator of the fraction is equal to zero.\n\n  $$\n  \\begin{align*}\n      2+a&=0\\\\[6pt]\n      &\\hspace{-0.525em}\\tcbhighmath{a=-2} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- From the information given we know that the point $(\\tfrac{2}{3},0)$ lies on the curve.\n  Hence, we can create an equation and solve it for $b$.\n\n  $$\n  \\begin{align*}\n      0&=b+\\frac{4}{\\tfrac{2}{3}-2} \\tag*{\\textbf{M1A1}}\\\\[6pt]\n      b&=-\\frac{4}{-\\tfrac{4}{3}}\\\\[6pt]\n      &\\hspace{-0.525em}\\tcbhighmath{b=3} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The horizontal asymptote occurs as $x \\rightarrow \\pm \\infty$. We can see that as this happens the fractional part of $f(x)$ will tend to $0$.\n  Hence the equation of the horizontal asymptote is\n\n  $$\n  \\begin{align*}\n      y&=3+\\frac{4}{\\pm \\infty-2}\\\\[6pt]\n      &\\hspace{-0.525em}\\tcbhighmath{y=3} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  The answer must be given as an equation, either $y=3$ or $f(x)=3$.\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'A rational function is defined by $f(x) = a + \\dfrac{b}{x-c}$, for\n$x \\neq c$, where $a,b,c \\in \\mathbb{Z}$.\nThe following diagram represents the graph of $y = f(x)$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/2e4669a2-bbd0-4789-8b97-237e21ae7852/images/57e3eb0c-9ca8-404f-a8a8-d44ee564af63/174d0bc6234e556e44492ded9dca1f7d93a7be93.svg)\n\n\nUsing the information on the graph,\n\n- state the value of $a$ and the value of\n$c$ ; <span class="marks">[2]</span>\n\n- find the value of $b$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- $\\answer{a = -4}$  and\n$\\answer{c = 4}$\n- The point P lies on the graph of $y = f(x)$.\nHence, using the coordinates of P, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.5em} 0 &= f(6) \\\\[6pt]\n  0 &= -4 + \\dfrac{b}{6-4} \\\\[2pt]\n  4 &= \\dfrac{b}{2} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{b = 8} \\hspace{1.9em}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '4',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 5',
    content:
      'Let $f(x) = \\dfrac{2}{x-a} + b$, for $x \\neq a$.\nThe line $x = 1$ is a vertical asymptote of the graph of $y = f(x)$.\n\n- Write down the value of $a$. <span class="marks">[1]</span>\n\n\nThe graph of $y = f(x)$ passes through the point P$(0,3)$.\n\n- Find the value of $b$. <span class="marks">[3]</span>\n\n- Find $\\displaystyle \\lim_{x \\rightarrow \\infty} f(x)$.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- $\\answer{a=1}$\n- Using the coordinates of P, we find\n\n  $$\n  \\begin{aligned}\n  f(0) &= 3 \\hspace{4em} \\\\[6pt]\n  \\dfrac{2}{0-1} + b &= 3 \\\\[6pt]\n  -2+b &= 3 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{b = 5} \\hspace{0.3em}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\lim_{x \\rightarrow \\infty} f(x) &= \\lim_{x \\rightarrow \\infty}\\left[\\dfrac{2}{x-1} + 5\\right] \\\\[6pt]\n  &= 0 + 5 \\\\[12pt]\n  &\\answer{= 5}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 6',
    content:
      'Let $f(x) = \\dfrac{3x+4}{2x-5}$, for $x\\neq\\dfrac{5}{2}$.\n\n- For the graph of $y = f(x)$, find the coordinates of:\n  \n  - the $x$-intercept;\n  - the $y$-intercept. <span class="marks">[3]</span>\n\n\n- For the graph of $y = f(x)$, find the equation of:\n  \n  - the horizontal asymptote;\n  - the vertical asymptote. <span class="marks">[3]</span>\n\n\n- Hence sketch the graph of $y = f(x)$.  <span class="marks">[2]</span>\n\n- Find $f^{-1}(x)$. <span class="marks">[3]</span>\n\n\nThe graphs of $f(x)$ and $f^{-1}(x)$ have two points of intersection.\n\n- Find the coordinates of the two points of intersection. Give your answers to two decimal places. <span class="marks">[3]</span>\n\n- Hence find the equation of the perpendicular bisector to the two points of intersection. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - Solving the equation $f(x) = 0$ for $x$, we have\n\n    $$\n    \\begin{align*}\n    \\dfrac{3x+4}{2x-5} &= 0 \\hspace{2em} \\\\[6pt]\n    3x+4 &= 0 \\\\[10pt]\n    x &= -\\dfrac{4}{3}\n    \\end{align*}\n    $$\n\n    Hence the coordinates of the $x$-intercept are $\\answer{\\left(-\\dfrac{4}{3},0\\right)}$\n  - Evaluating $y = f(x)$ for $x = 0$, we have\n\n    $$\n    \\begin{align*}\n    y &= f(0) \\\\[6pt]\n    &= \\dfrac{3(0)+4}{2(0)-5} \\\\[6pt]\n    &= -\\dfrac{4}{5}\n    \\end{align*}\n    $$\n\n    Hence the coordinates of the $y$-intercept are $\\answer{\\left(0,-\\dfrac{4}{5}\\right)}$\n\n- \n  - We have\n\n    $$\n    \\begin{align*}\n    \\lim_{x \\rightarrow \\pm \\infty} f(x) &= \\dfrac{3}{2} \\hspace{2.5em} \\\\[6pt]\n    \\end{align*}\n    $$\n\n    Hence the equation of the horizontal asymptote is $\\answer{y = \\dfrac{3}{2}}$\n  - We have\n\n    $$\n    \\begin{align*}\n    [\\text{denominator of $f$}] &= 0 \\hspace{6em} \\\\[6pt]\n    2x-5 &= 0 \\\\[6pt]\n    x &= \\dfrac{5}{2}\n    \\end{align*}\n    $$\n\n    Hence the equation of the vertical asymptote is $\\answer{x = \\dfrac{5}{2}}$\n\n- If we sketch the graph of $y = f(x)$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9bb89137-6a40-482f-8a89-a20425dad3b5/images/61d6ea19-c9b6-4e43-b863-25670815218d/aa1013a.PNG)\n\n\n- We have\n\n  $$\n  \\begin{align*}\n  y &= \\dfrac{3x+4}{2x-5} \\hspace{5.5em} \\left[\\text{where } y = f(x)\\right]\n  \\end{align*}\n  $$\n\n  Therefore\n\n  $$\n  \\begin{align*}\n  x &= \\dfrac{3y+4}{2y-5} \\hspace{3em} \\left[\\text{where } y = f^{-1}(x)\\right] \\\\[8pt]\n  x(2y-5) &= 3y+4 \\\\[8pt]\n  2xy - 5x &= 3y +4 \\\\[8pt]\n  2xy - 3y &= 5x + 4 \\\\[8pt]\n  y(2x - 3) &= 5x + 4 \\\\[8pt]\n  y &= \\dfrac{5x+4}{2x-3} \\\\[8pt]\n  &\\hspace{-3em}\\tcbhighmath{f^{-1}(x) = \\dfrac{5x+4}{2x-3}}\n  \\end{align*}\n  $$\n\n- Sketching $f(x)$ and $f^{-1}(x)$ on the same axes, we can find the points of intersection using the G.D.C.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9bb89137-6a40-482f-8a89-a20425dad3b5/images/897ceffb-d901-4e38-a2bb-f444d24cc122/aa1013b.PNG)\n\n\n- The midpoint of AB is given by\n\n  $$\n  \\begin{align*}\n  \\left(\\dfrac{x_1+x_2}{2} , \\dfrac{y_1+y_2}{2}\\right) &= \\left(\\dfrac{-0.45+4.45}{2} , \\dfrac{-0.45+4.45}{2}\\right) \\\\[8pt]\n  &= (2,2)\n  \\end{align*}\n  $$\n\n  Point A and point B both lie on the line $y=x$, which has gradient $m=1$. Therefore the perpendicular bisector has gradient $m=-1$.\n  The equation of the perpendicular bisector is given by\n\n  $$\n  \\begin{align*}\n  y - y_1 &= m(x - x_1) \\\\[8pt]\n  y - 2 &= -(x - 2) \\\\[8pt]\n  &\\hspace{-0.525em}\\tcbhighmath{y = -x + 4}\n  \\end{align*}\n  $$\n\n',
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
    title: 'Question 6',
    content:
      'Let $f(x) = \\dfrac{3x+4}{2x-5}$, for $x\\neq\\dfrac{5}{2}$.\n\n- For the graph of $y = f(x)$, find the coordinates of:\n  \n  - the $x$-intercept;\n  - the $y$-intercept. <span class="marks">[3]</span>\n\n\n- For the graph of $y = f(x)$, find the equation of:\n  \n  - the horizontal asymptote;\n  - the vertical asymptote. <span class="marks">[3]</span>\n\n\n- Hence sketch the graph of $y = f(x)$.  <span class="marks">[2]</span>\n\n- Find $f^{-1}(x)$. <span class="marks">[3]</span>\n\n\nThe graphs of $f(x)$ and $f^{-1}(x)$ have two points of intersection.\n\n- Find the coordinates of the two points of intersection. Give your answers to two decimal places. <span class="marks">[3]</span>\n\n- Hence find the equation of the perpendicular bisector to the two points of intersection. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- \n  - Solving the equation $f(x) = 0$ for $x$, we have\n\n    $$\n    \\begin{align*}\n    \\dfrac{3x+4}{2x-5} &= 0 \\hspace{2em} \\\\[6pt]\n    3x+4 &= 0 \\\\[10pt]\n    x &= -\\dfrac{4}{3}\n    \\end{align*}\n    $$\n\n    Hence the coordinates of the $x$-intercept are $\\answer{\\left(-\\dfrac{4}{3},0\\right)}$\n  - Evaluating $y = f(x)$ for $x = 0$, we have\n\n    $$\n    \\begin{align*}\n    y &= f(0) \\\\[6pt]\n    &= \\dfrac{3(0)+4}{2(0)-5} \\\\[6pt]\n    &= -\\dfrac{4}{5}\n    \\end{align*}\n    $$\n\n    Hence the coordinates of the $y$-intercept are $\\answer{\\left(0,-\\dfrac{4}{5}\\right)}$\n\n- \n  - We have\n\n    $$\n    \\begin{align*}\n    \\lim_{x \\rightarrow \\pm \\infty} f(x) &= \\dfrac{3}{2} \\hspace{2.5em} \\\\[6pt]\n    \\end{align*}\n    $$\n\n    Hence the equation of the horizontal asymptote is $\\answer{y = \\dfrac{3}{2}}$\n  - We have\n\n    $$\n    \\begin{align*}\n    [\\text{denominator of $f$}] &= 0 \\hspace{6em} \\\\[6pt]\n    2x-5 &= 0 \\\\[6pt]\n    x &= \\dfrac{5}{2}\n    \\end{align*}\n    $$\n\n    Hence the equation of the vertical asymptote is $\\answer{x = \\dfrac{5}{2}}$\n\n- If we sketch the graph of $y = f(x)$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9bb89137-6a40-482f-8a89-a20425dad3b5/images/61d6ea19-c9b6-4e43-b863-25670815218d/aa1013a.PNG)\n\n\n- We have\n\n  $$\n  \\begin{align*}\n  y &= \\dfrac{3x+4}{2x-5} \\hspace{5.5em} \\left[\\text{where } y = f(x)\\right]\n  \\end{align*}\n  $$\n\n  Therefore\n\n  $$\n  \\begin{align*}\n  x &= \\dfrac{3y+4}{2y-5} \\hspace{3em} \\left[\\text{where } y = f^{-1}(x)\\right] \\\\[8pt]\n  x(2y-5) &= 3y+4 \\\\[8pt]\n  2xy - 5x &= 3y +4 \\\\[8pt]\n  2xy - 3y &= 5x + 4 \\\\[8pt]\n  y(2x - 3) &= 5x + 4 \\\\[8pt]\n  y &= \\dfrac{5x+4}{2x-3} \\\\[8pt]\n  &\\hspace{-3em}\\tcbhighmath{f^{-1}(x) = \\dfrac{5x+4}{2x-3}}\n  \\end{align*}\n  $$\n\n- Sketching $f(x)$ and $f^{-1}(x)$ on the same axes, we can find the points of intersection using the G.D.C.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9bb89137-6a40-482f-8a89-a20425dad3b5/images/897ceffb-d901-4e38-a2bb-f444d24cc122/aa1013b.PNG)\n\n\n- The midpoint of AB is given by\n\n  $$\n  \\begin{align*}\n  \\left(\\dfrac{x_1+x_2}{2} , \\dfrac{y_1+y_2}{2}\\right) &= \\left(\\dfrac{-0.45+4.45}{2} , \\dfrac{-0.45+4.45}{2}\\right) \\\\[8pt]\n  &= (2,2)\n  \\end{align*}\n  $$\n\n  Point A and point B both lie on the line $y=x$, which has gradient $m=1$. Therefore the perpendicular bisector has gradient $m=-1$.\n  The equation of the perpendicular bisector is given by\n\n  $$\n  \\begin{align*}\n  y - y_1 &= m(x - x_1) \\\\[8pt]\n  y - 2 &= -(x - 2) \\\\[8pt]\n  &\\hspace{-0.525em}\\tcbhighmath{y = -x + 4}\n  \\end{align*}\n  $$\n\n',
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
    type: 'SAQ',
    title: 'Question 7',
    content:
      'Let $f(x) = \\dfrac{3x-6}{x+1}$, for $x\\neq-1$.\n\n- For the graph of $y = f(x)$, find the coordinates of:\n  \n  - the $x$-intercept;\n  - the $y$-intercept. <span class="marks">[3]</span>\n\n\n- For the graph of $y = f(x)$, find the equation of:\n  \n  - the horizontal asymptote;\n  - the vertical asymptote. <span class="marks">[3]</span>\n\n\n- Hence sketch the graph of $y = f(x)$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - Solving the equation $f(x) = 0$ for $x$, we have\n\n    $$\n    \\begin{aligned}\n    \\dfrac{3x-6}{x+1} &= 0 \\hspace{2em} \\\\[6pt]\n    3x-6 &= 0 \\\\[10pt]\n    x &= 2\\end{aligned}\n    $$\n\n    Hence the coordinates of the $x$-intercept\nare  $\\answer{(2,0)}$\n  - Evaluating $y = f(x)$ for $x = 0$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{4.8em} y &= f(0) \\\\[6pt]\n    &= \\dfrac{3(0)-6}{0+1} \\\\[6pt]\n    &= -6\\end{aligned}\n    $$\n\n    Hence the coordinates of the $y$-intercept\nare  $\\answer{(0,-6)}$\n\n- \n  - We have\n\n    $$\n    \\begin{aligned}\n    \\lim_{x \\rightarrow \\pm \\infty} f(x) &= \\dfrac{3}{1} \\hspace{2.5em} \\\\[6pt]\n    &= 3\\end{aligned}\n    $$\n\n    Hence the equation of the horizontal\nasymptote is\n$\\answer{y = 3}$\n  - We have\n\n    $$\n    \\begin{aligned}\n    &= 0 \\hspace{6em} \\\\[6pt]\n    x+1 &= 0 \\\\[6pt]\n    x &= -1\\end{aligned}\n    $$\n\n    Hence the equation of the vertical\nasymptote is\n$\\answer{x = -1}$\n\n- Hence, if we sketch the graph of $y = f(x)$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/afc5956d-9845-488e-810c-bb260e443e8e/images/da49f8cb-1329-4f71-ab39-25e1b4760c7c/5aa8339f9ee09bb9f920e735960c8b3bddfc8e2c.svg)\n\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '8',
    difficultyLevel: '3'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 8',
    content:
      'Let $f(x) = \\dfrac{5}{x+1}$, for $x \\neq -1$.\n\n- For the graph of $f$, find:\n  \n  - the $x$-intercept;\n  - the $y$-intercept;\n  - the equation of the vertical asymptote. <span class="marks">[5]</span>\n\n\n\nLet $g(x) = x-3$, for $x \\in \\mathbb{R}$. The graphs of $f$ and $g$\nintersect at points A and B.\n\n- Find the coordinates of A and B. <span class="marks">[5]</span>\n\n- Find the equation of the straight line that passes through\nA and B,\ngiving your answer in the form $y = mx + c$. <span class="marks">[3]</span>\n\n- Write down the gradient of the line that is perpendicular\nto the line\npassing through A and B. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - Since the equation $f(x) = 0$ has no solutions, there are\n$\\answer{\\text{no \\(x\\)-intercepts}}$\n  - Evaluating $f(x) = \\dfrac{5}{x+1}$ for $x = 0$, we have\n\n    $$\n    \\begin{aligned}\n    f(0) &= \\dfrac{5}{0+1} \\hspace{3.6em} \\\\[6pt]\n    &= 5\\end{aligned}\n    $$\n\n    Hence the $y$-intercept is\n$\\answer{\\mathrm{P}(0,5)}$\n  - We have\n\n    $$\n    \\begin{aligned}\n    &= 0 \\hspace{4em} \\\\[6pt]\n    x+1 &= 0 \\\\[6pt]\n    x &= -1\\end{aligned}\n    $$\n\n    Hence the equation of the vertical\nasymptote is\n$\\answer{x = -1}$\n\n- Solving the equation $f(x) = g(x)$ for $x$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\dfrac{5}{x+1} &= x-3 \\\\[6pt]\n  5 &= (x+1)(x-3) \\\\[9pt]\n  5 &= x^2 - 2x - 3 \\\\[9pt]\n  0 &= x^2 - 2x - 8 \\\\[10pt]\n  0 &= (x+2)(x-4) \\\\[10pt]\n  x &= -2,\\hspace{0.25em}4 \\\\\n  \\end{aligned}\n  $$\n\n  Evaluating $g(x) = x-3$\nfor $x = -2$ and $x = 4$, we find\n\n  $$\n  \\hspace{3.1em} \\begin{array}{rcccl}\n  y &=& g(-2) &=& -5 \\\\[9pt]\n  y &=& g(4) &=& 1\n  \\end{array}\n  $$\n\n  Hence we find\n$\\answer{\\mathrm{A}(-2,-5)}$\nand\n$\\answer{\\mathrm{B}(4,1)}$\n- Using the gradient formula with A$(-2,-5)$ and B$(4,1)$, we have\n\n  $$\n  \\begin{aligned}\n  m_{\\mathrm{AB}} &= \\dfrac{y_2 - y_1}{x_2 - x_1} \\\\[6pt]\n  &= \\dfrac{1-(-5)}{4-(-2)} \\\\[10pt]\n  &= 1\\end{aligned}\n  $$\n\n  Hence, using the point-gradient formula with\nA$(-2,-5)$ and $m = 1$, we get\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\\\[6pt]\n  \\hspace{0.15em} y - (-5) &= (1)(x-(-2)) \\\\[6pt]\n  y + 5 &= x + 2 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{y = x-3} \\hspace{0.15em}\n  $$\n\n- $\\answer{m_{\\perp\\mathrm{AB}} = -1}$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 8',
    content:
      'Let $f(x) = \\dfrac{5}{x+1}$, for $x \\neq -1$.\n\n- For the graph of $f$, find:\n  \n  - the $x$-intercept;\n  - the $y$-intercept;\n  - the equation of the vertical asymptote. <span class="marks">[5]</span>\n\n\n\nLet $g(x) = x-3$, for $x \\in \\mathbb{R}$. The graphs of $f$ and $g$\nintersect at points A and B.\n\n- Find the coordinates of A and B. <span class="marks">[5]</span>\n\n- Find the equation of the straight line that passes through\nA and B,\ngiving your answer in the form $y = mx + c$. <span class="marks">[3]</span>\n\n- Write down the gradient of the line that is perpendicular\nto the line\npassing through A and B. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - Since the equation $f(x) = 0$ has no solutions, there are\n$\\answer{\\text{no \\(x\\)-intercepts}}$\n  - Evaluating $f(x) = \\dfrac{5}{x+1}$ for $x = 0$, we have\n\n    $$\n    \\begin{aligned}\n    f(0) &= \\dfrac{5}{0+1} \\hspace{3.6em} \\\\[6pt]\n    &= 5\\end{aligned}\n    $$\n\n    Hence the $y$-intercept is\n$\\answer{\\mathrm{P}(0,5)}$\n  - We have\n\n    $$\n    \\begin{aligned}\n    &= 0 \\hspace{4em} \\\\[6pt]\n    x+1 &= 0 \\\\[6pt]\n    x &= -1\\end{aligned}\n    $$\n\n    Hence the equation of the vertical\nasymptote is\n$\\answer{x = -1}$\n\n- Solving the equation $f(x) = g(x)$ for $x$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\dfrac{5}{x+1} &= x-3 \\\\[6pt]\n  5 &= (x+1)(x-3) \\\\[9pt]\n  5 &= x^2 - 2x - 3 \\\\[9pt]\n  0 &= x^2 - 2x - 8 \\\\[10pt]\n  0 &= (x+2)(x-4) \\\\[10pt]\n  x &= -2,\\hspace{0.25em}4 \\\\\n  \\end{aligned}\n  $$\n\n  Evaluating $g(x) = x-3$\nfor $x = -2$ and $x = 4$, we find\n\n  $$\n  \\hspace{3.1em} \\begin{array}{rcccl}\n  y &=& g(-2) &=& -5 \\\\[9pt]\n  y &=& g(4) &=& 1\n  \\end{array}\n  $$\n\n  Hence we find\n$\\answer{\\mathrm{A}(-2,-5)}$\nand\n$\\answer{\\mathrm{B}(4,1)}$\n- Using the gradient formula with A$(-2,-5)$ and B$(4,1)$, we have\n\n  $$\n  \\begin{aligned}\n  m_{\\mathrm{AB}} &= \\dfrac{y_2 - y_1}{x_2 - x_1} \\\\[6pt]\n  &= \\dfrac{1-(-5)}{4-(-2)} \\\\[10pt]\n  &= 1\\end{aligned}\n  $$\n\n  Hence, using the point-gradient formula with\nA$(-2,-5)$ and $m = 1$, we get\n\n  $$\n  \\begin{aligned}\n  y - y_1 &= m(x - x_1) \\\\[6pt]\n  \\hspace{0.15em} y - (-5) &= (1)(x-(-2)) \\\\[6pt]\n  y + 5 &= x + 2 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{y = x-3} \\hspace{0.15em}\n  $$\n\n- $\\answer{m_{\\perp\\mathrm{AB}} = -1}$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'An arithmetic sequence has $u_1= 40$, $u_2 = 32$, $u_3 = 24$.\n\n- Find the common difference, $d$. <span class="marks">[2]</span>\n\n- Find $u_8$. <span class="marks">[2]</span>\n\n- Find $S_8$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common difference is\n\n  $$\n  \\begin{aligned}\n  d &= u_2 - u_1 \\hspace{1.5em} \\\\[6pt]\n  &= 32 - 40 \\\\[6pt]\n  &\\answer{= -8}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 8$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} u_8 &= u_1 + (8-1)d   \\\\[6pt]\n  &= 40 + (8-1)(-8) \\\\[6pt]\n  &\\answer{= -16}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(u_1 + u_n)$\nwith $n=8$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1em} S_8 &= \\dfrac{8}{2}(u_1 + u_8) \\\\[6pt]\n  &= \\dfrac{8}{2}(40 + (-16)) \\\\[11pt]\n  &\\answer{= 96}\\end{aligned}\n  $$\n\n',
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
      'Consider an arithmetic sequence $2,6,10,14,\\dots$\n\n- Find the common difference, $d$. <span class="marks">[2]</span>\n\n- Find the $10$th term in the sequence. <span class="marks">[2]</span>\n\n- Find the sum of the first $10$ terms in the sequence. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have $u_1 = 2$ and $u_2 = 6$.\nHence the common difference is\n\n  $$\n  \\begin{aligned}\n  d &= u_2 - u_1 \\hspace{1.5em} \\\\[6pt]\n  &= 6 - 2 \\\\[6pt]\n  &\\answer{= 4}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 10$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.8em} u_{10} &= u_1 + (10-1)d \\\\[6pt]\n  &= 2 + (10-1)(4) \\\\[6pt]\n  &\\answer{= 38} \\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(u_1 + u_n)$\nwith $n=10$, we obtain\n\n  $$\n  \\begin{aligned}\n  S_{10} &= \\dfrac{10}{2}(u_1 + u_{10}) \\\\[6pt]\n  &= \\dfrac{10}{2}(2 + 38) \\\\[11pt]\n  &\\answer{= 200} \\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Only one of the following four sequences is arithmetic and only one of\nthem is geometric.\n\n$$\n\\begin{array}{rcccccl}\na_n &=& \\dfrac{1}{3},\\,\\dfrac{1}{4},\\,\\dfrac{1}{5},\\,\\dfrac{1}{6},\\,\\dots &\\,\\hspace{4em}\\,& c_n &=& 3,\\,1,\\,\\dfrac{1}{3},\\,\\dfrac{1}{9},\\,\\dots \\\\[12pt]\nb_n &=& 2.5,\\,5,\\,7.5,\\,10,\\,\\dots &\\,\\hspace{4em}\\,& d_n &=& 1,\\,3,\\,6,\\,10,\\,\\dots\n\\end{array}\n$$\n\n\n- State which sequence is arithmetic and find the common difference of\nthe sequence. <span class="marks">[2]</span>\n\n- State which sequence is geometric and find the common ratio of the\nsequence.<span class="marks">[2]</span>\n\n- For the geometric sequence find the exact value of the sixth\nterm. Give your answer as a fraction. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \n  \\begin{array}{rclc|crcl}\n  a_2-a_1 &\\neq& a_3-a_2 &\\,\\hspace{0.5em}\\,&\\,\\hspace{0.5em}\\,& c_2-c_1 &\\neq& c_3-c_2 \\\\[12pt]\n  \\dfrac{1}{4}-\\dfrac{1}{3} &\\neq& \\dfrac{1}{5}-\\dfrac{1}{4} &&& 1-3 &\\neq& \\dfrac{1}{3}-1 \\\\[12pt]\n  -\\dfrac{1}{12} &\\neq& -\\dfrac{1}{20} &&& -2 &\\neq& -\\dfrac{2}{3} \\\\[12pt] \\hline\n  &&&&&&& \\\\\n  b_2-b_1 &=& b_3-b_2 &&& d_2-d_1 &\\neq& d_3-d_2 \\\\[12pt]\n  5-2.5 &=& 7.5-5 &&& 3-1 &\\neq& 6-3 \\\\[12pt]\n  2.5 &=& 2.5 &&& 2 &\\neq& 3\n  \\end{array} \\vspace{1.2em}\n  $$\n\n  Hence\n$\\answer{b_n}$\nis arithmetic and\n$\\answer{d = 2.5}$\n- We have\n\n  $$\n  \n  \\begin{array}{rclc|crcl}\n  \\dfrac{a_2}{a_1} &\\neq& \\dfrac{a_3}{a_2} &\\,\\hspace{0.5em}\\,&\\,\\hspace{0.5em}\\,& \\dfrac{c_2}{c_1} &=& \\dfrac{c_3}{c_2} \\\\[12pt]\n  \\dfrac{1/4}{1/3} &\\neq& \\dfrac{1/5}{1/4} &&& \\dfrac{1}{3} &=& \\dfrac{1/3}{1} \\\\[12pt]\n  \\dfrac{3}{4} &\\neq& \\dfrac{4}{5} &&& \\dfrac{1}{3} &=&\\dfrac{1}{3} \\\\[12pt] \\hline\n  &&&&&&& \\\\\n  \\dfrac{b_2}{b_1} &\\neq& \\dfrac{b_3}{b_2} &&& \\dfrac{d_2}{d_1} &\\neq& \\dfrac{d_3}{d_2} \\\\[12pt]\n  \\dfrac{5}{2.5} &\\neq& \\dfrac{7.5}{5} &&& \\dfrac{3}{1} &\\neq& \\dfrac{6}{3} \\\\[12pt]\n  2 &\\neq& 1.5 &&& 3 &\\neq& 2\n  \\end{array} \\vspace{0.95em}\n  $$\n\n  Hence\n$\\answer{c_n}$\nis geometric and\n$\\answer{r = \\dfrac{1}{3}}$\n- Using the $n$th term formula $c_n = c_1r^{n-1}$ with $n = 6$, we get\n\n  $$\n  \\begin{aligned}\n  c_6 &= c_1r^{6-1} \\\\[8pt]\n  &= 3\\left(\\dfrac{1}{3}\\right)^{6-1} \\\\[8pt]\n  &\\answer{= \\dfrac{1}{81}}\\end{aligned}\n  $$\n\n',
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
      'Consider the infinite geometric sequence $4480$, $-3360$, $2520$,\n$-1890,\\dots$\n\n- Find the common ratio, $r$. <span class="marks">[2]</span>\n\n- Find the $20$th term. <span class="marks">[2]</span>\n\n- Find the exact sum of the infinite sequence. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have $u_1 = 4480$ and $u_2 = -3360$.\nHence the common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n  &= -\\dfrac{3360}{4480} \\\\[12pt]\n  &\\answer{= -0.75}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1 r^{n-1}$ with $n = 20$, we\nget\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} u_{20} &= u_1 r^{20-1} \\\\[6pt]\n  &= (4480)(-0.75)^{20-1} \\\\[7pt]\n  &\\answer{\\approx -18.9}\\end{aligned}\n  $$\n\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.3em} S_{\\infty} &= \\dfrac{4480}{1-(-0.75)} \\\\[8pt]\n  &\\answer{= 2560}\\end{aligned}\n  $$\n\n',
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
      'Only one of the following four sequences is arithmetic and only one of\nthem is geometric.\n\n$$\n\\begin{array}{rcccccl}\na_n &=& 1,\\,5,\\,10,\\,15,\\,\\dots &\\,\\hspace{4em}\\,& c_n &=& 1.5,\\,3,\\,4.5,\\,6,\\,\\dots \\\\[12pt]\nb_n &=& \\dfrac{1}{2},\\,\\dfrac{2}{3},\\,\\dfrac{3}{4},\\,\\dfrac{4}{5},\\,\\dots &\\,\\hspace{4em}\\,& d_n &=& 2,\\,1,\\,\\dfrac{1}{2},\\,\\dfrac{1}{4},\\,\\dots\n\\end{array}\n$$\n\n\n- State which sequence is arithmetic and find the common difference of\nthe sequence. <span class="marks">[2]</span>\n\n- State which sequence is geometric and find the common ratio of the\nsequence.<span class="marks">[2]</span>\n\n- For the geometric sequence find the exact value of the\neighth term. Give your answer as a fraction. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n\n  $$\n  \n  \\begin{array}{rclc|crcl}\n  a_2-a_1 &\\neq& a_3-a_2 &\\,\\hspace{0.5em}\\,&\\,\\hspace{0.5em}\\,& c_2-c_1 &=& c_3-c_2 \\\\[12pt]\n  5-1 &\\neq& 10-5 &&& 3-1.5 &=& 4.5-3 \\\\[12pt]\n  4 &\\neq& 5 &&& 1.5 &=& 1.5 \\\\[12pt] \\hline\n  &&&&&&& \\\\\n  b_2-b_1 &\\neq& b_3-b_2 &&& d_2-d_1 &\\neq& d_3-d_2 \\\\[12pt]\n  \\dfrac{2}{3}-\\dfrac{1}{2} &\\neq& \\dfrac{3}{4}-\\dfrac{2}{3} &&& 1-2 &\\neq& \\dfrac{1}{2}-1 \\\\[12pt]\n  \\dfrac{1}{6} &\\neq& \\dfrac{1}{12} &&& -1 &\\neq& -\\dfrac{1}{2}\n  \\end{array} \\vspace{0.95em}\n  $$\n\n  Hence\n$\\answer{c_n}$\nis arithmetic and\n$\\answer{d = 1.5}$\n- We have\n\n  $$\n  \n  \\begin{array}{rclc|crcl}\n  \\dfrac{a_2}{a_1} &\\neq& \\dfrac{a_3}{a_2} &\\,\\hspace{0.5em}\\,&\\,\\hspace{0.5em}\\,& \\dfrac{c_2}{c_1} &\\neq& \\dfrac{c_3}{c_2} \\\\[12pt]\n  \\dfrac{5}{1} &\\neq& \\dfrac{10}{5} &&& \\dfrac{3}{1.5} &\\neq& \\dfrac{4.5}{3} \\\\[12pt]\n  5 &\\neq& 2 &&& 2 &\\neq& 1.5 \\\\[12pt] \\hline\n  &&&&&&& \\\\\n  \\dfrac{b_2}{b_1} &\\neq& \\dfrac{b_3}{b_2} &&& \\dfrac{d_2}{d_1} &=& \\dfrac{d_3}{d_2} \\\\[12pt]\n  \\dfrac{2/3}{1/2} &\\neq& \\dfrac{3/4}{2/3} &&& \\dfrac{1}{2} &=& \\dfrac{1/2}{1} \\\\[12pt]\n  \\dfrac{4}{3} &\\neq& \\dfrac{9}{8} &&& \\dfrac{1}{2} &=& \\dfrac{1}{2}\n  \\end{array} \\vspace{0.95em}\n  $$\n\n  Hence\n$\\answer{d_n}$\nis geometric and\n$\\answer{r = \\dfrac{1}{2}}$\n- Using the $n$th term formula $d_n = d_1r^{n-1}$ with $n = 8$, we get\n\n  $$\n  \\begin{aligned}\n  d_8 &= d_1r^{8-1} \\\\[8pt]\n  &= 2\\left(\\dfrac{1}{2}\\right)^{8-1} \\\\[8pt]\n  &\\answer{= \\dfrac{1}{64}}\\end{aligned}\n  $$\n\n',
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
      'The table shows the first four terms of three sequences: $u_n$, $v_n$,\nand $w_n$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/efaafc68-0e8a-4a92-9d2f-780d683c2117/images/af6069a5-e9ed-4edc-876c-fb5ec8788bb3/c39694c1cf7513ffce115791e6b0f1c54c230963.svg)\n\n\n\n- State which sequence is\n  \n  - arithmetic;\n  - geometric. <span class="marks">[2]</span>\n\n\n- Find the sum of the first $50$ terms of the arithmetic sequence.\n<span class="marks">[2]</span>\n\n- Find the exact value of the $13$th term of the geometric sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - $\\answer{v_n}$\n  - $\\answer{w_n}$\n\n- The common difference of the arithmetic sequence is\n\n  $$\n  \\begin{aligned}\n  d &= v_2 - v_1 \\hspace{0.75em} \\\\[6pt]\n  &= 24 - 12 \\\\[6pt]\n  &= 12\\end{aligned}\n  $$\n\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2v_1 + (n-1)d)$ with\n$n=50$,\n  we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{6em} S_{50} &= \\dfrac{50}{2}(2v_1 + (50-1)d) \\\\[6pt]\n  &= \\dfrac{50}{2}(2(12) + (50-1)(12)) \\\\[11pt]\n  &\\answer{= 15\\hspace{0.15em}300}\\end{aligned}\n  $$\n\n- The common ratio of the geometric sequence is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{w_2}{w_1} \\hspace{2.4em} \\\\[6pt]\n  &= \\dfrac{24}{12} \\\\[12pt]\n  &= 2\\end{aligned}\n  $$\n\n  Hence, using the $n$th term formula\n$w_n = w_1r^{n-1}$ with $n = 13$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.1em} w_{13} &= w_1r^{13-1} \\\\[6pt]\n  &= 12\\hspace{0.05em}(2)^{13-1} \\hspace{3.8em} \\\\[7pt]\n  &\\answer{= 49\\hspace{0.15em}152}\\end{aligned}\n  $$\n\n',
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
      'Consider a geometric sequence with $a_1 = 8$ and $a_4=1$.\n\n- Find the common ratio, $r$.<span class="marks">[2]</span>  \n\nConsider the following probability function for a random variable $X$:\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/3cb1c98a-b8ca-4dfb-b320-b777fc8e4063/images/d573dc05-cbef-4710-9eac-5d53fee67ac1/table.png)\n\n\n\n- Find the value of $k$.<span class="marks">[4]</span>  \n',
    markScheme:
      '\n- Using the $n$th term formula, $a_n = a_1 r^{n-1}$, with $n=4$, we get\n\n  $$\n  \\begin{align*}\n      a_4 &= a_1 r^3 \\tag*{\\textbf{M1}}\\\\\\\\[8pt]\n      r^3 &= \\dfrac{a_4}{a_1} \\\\[7pt]\n      r^3 &= \\dfrac{1}{8} \\\\[6pt]\n      &\\hspace{-0.475em}\\answer{r = \\dfrac{1}{2}} \\tag*{\\textbf{A1}}\\\\\n  \\end{align*}\n  $$\n\n- Since the sum of probabilities must add up to 1, we obtain\n\n  $$\n  \\begin{align*}\n      %ka_1+ka_2+ka_3+ka_4 &= 1 \\\\[8pt]\n      k(a_1+a_2+a_3+a_4) &= 1   \\tag*{\\textbf{M1}}\\\\[7pt]\n      a_1+a_2+a_3+a_4 &= \\dfrac{1}{k} \\\\[6pt]\n      \\dfrac{a_1(r^4-1)}{r-1} &= \\dfrac{1}{k} \\tag*{\\textbf{M1}}\\\\[6pt]\n      \\dfrac{8\\left(\\frac{1}{16}-1\\right)}{\\frac{1}{2}-1} &= \\dfrac{1}{k} \\tag*{\\textbf{A1}}\\\\[6pt]\n      \\dfrac{\\frac{1}{2}-8}{-\\frac{1}{2}} &= \\dfrac{1}{k} \\\\[6pt]\n      15 &= \\dfrac{1}{k} \\\\[6pt]    \n      &\\hspace{-0.535em}\\answer{k = \\dfrac{1}{15}} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Jeremy invests $\\$8000$ into a savings account that pays an annual\ninterest rate of $5.5$ %, compounded\nannually.\n\n- Write down a formula which calculates that total value of the\ninvestment after $n$ years. <span class="marks">[2]</span>\n\n- Calculate the amount of money in the savings account after:\n  \n  - $1$ year;\n  - $3$ years. <span class="marks">[2]</span>\n\n\n- Jeremy wants to use the money to put down a $\\$10\\hspace{0.15em}000$\ndeposit on an apartment. Determine if Jeremy will be able to do this\nwithin a $5$-year timeframe.<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/3d389660-6876-4d8b-af36-e47d89674806/images/768ccb37-8949-43dc-bc2a-9cc617ef40d9/eaedd006beb5ba238d9ad76a3a6f6101e049be71.svg)\n\n\n  Hence, using the compound interest formula, we have\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 8000\\bigg(1 + \\dfrac{5.5}{100\\times1}\\bigg)^{1\\times n} \\\\[12pt]\n  &\\answer{= 8000\\hspace{0.05em}(1+0.055)^n} \\hspace{3em}{(1)}\\end{aligned}\n  $$\n\n- \n  - Substituting $n = 1$ in the formula $(1)$, we get\n\n    $$\n    \\begin{aligned}\n    \\mathrm{FV} &= 8000\\hspace{0.05em}(1+0.055) \\hspace{0.5em} \\\\[8pt]\n    &\\answer{= \\$8440}\\end{aligned}\n    $$\n\n  - Substituting $n = 3$ in the formula $(1)$, we get\n\n    $$\n    \\begin{aligned}\n    \\mathrm{FV} &= 8000\\hspace{0.05em}(1+0.055)^3 \\\\[8pt]\n    &=9393.9...\\\\[8pt]\n    &\\answer{\\approx \\$9390}\\end{aligned}\n    $$\n\n\n- Substituting $n = 5$ in the formula $(1)$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.2em} \\mathrm{FV} &= 8000\\hspace{0.05em}(1+0.055)^5 \\\\[8pt]\n  &\\approx \\$10\\hspace{0.15em}456\\end{aligned}\n  $$\n\n  $\\answer{\\text{Yes, Jeremy will be able to do this within a \\(5\\)-year timeframe.}}$\n',
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
      'Consider the infinite geometric sequence $9000$, $-7200$, $5760$,\n$-4608$, ...\n\n- Find the common ratio. <span class="marks">[2]</span>\n\n- Find the $25$th term. <span class="marks">[2]</span>\n\n- Find the exact sum of the infinite sequence. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have $u_1 = 9000$ and $u_2 = -7200$.\nHence the common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_2}{u_1} \\\\[8pt]\n  &= -\\dfrac{7200}{9000} \\hspace{2.9em} \\\\[8pt]\n  &\\answer{= -\\dfrac{4}{5}} \\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 25$, we\nfind\n\n  $$\n  \\begin{aligned}\n  u_{25} &= u_1r^{25-1} \\\\[6pt]\n  &= 9000\\left(\\hspace{-0.2em}-\\dfrac{4}{5}\\right)^{25-1} \\\\[8pt]\n  &\\answer{\\approx 42.5}\\end{aligned}\n  $$\n\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$, we get\n\n  $$\n  \\begin{aligned}\n  S_{\\infty} &= \\dfrac{9000}{1-(-4/5)} \\hspace{1.9em} \\\\[9pt]\n  &\\answer{= 5000}\\end{aligned}\n  $$\n\n',
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
      'An arithmetic sequence is given by $3$, $5$, $7,\\dots$\n\n- Write down the value of the common difference, $d$. <span class="marks">[1]</span>\n\n- Find\n  \n  - $u_{10}$;\n  - $S_{10}$. <span class="marks">[4]</span>\n\n\n- Given that $u_n = 253$, find the value of $n$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have $u_1 = 3$ and $u_2 = 5$.\nHence the value of $d$ is\n\n  $$\n  \\begin{aligned}\n  d &= u_2 - u_1 \\\\[6pt]\n  &= 5 - 3 \\\\[6pt]\n  &\\answer{= 2}\\end{aligned}\n  $$\n\n- \n  - Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 10$,\nwe get\n\n    $$\n    \\begin{aligned}\n    \\hspace{0.1em} u_{10} &= u_1 + (10-1)d  \\\\[6pt]\n    &= 3 + (10-1)(2) \\\\[6pt]\n    &\\answer{= 21}\\end{aligned}\n    $$\n\n  - Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(u_1 + u_n)$ with $n=10$, we find\n\n    $$\n    \\begin{aligned}\n    S_{10} &= \\dfrac{10}{2}(u_1 + u_{10}) \\\\[6pt]\n    &= \\dfrac{10}{2}(3 + 21) \\\\[11pt]\n    &\\answer{= 120}\\end{aligned}\n    $$\n\n\n- Substituting $u_n = 253$, $u_1 = 3$ and $d = 2$ in\n$u_n = u_1 + (n-1)d$ and solving the resulting equation for $n$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.6em} 253 &= 3 + (n-1)(2) \\\\[6pt]\n  253 &= 2n+1 \\\\[6pt]\n  252 &= 2n\\end{aligned}\n  $$\n\n\n  $$\n  \\answer{n = 126}\\hspace{1.1em}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'A geometric series has a common ratio of $3^x$.\n\n- State the domain of $x$ such that the sum to infinity of the series exists. <span class="marks">[2]</span>\n\n- The sum to infinity of the series is found to be $54$. If the first term of the series is $52$, find $x$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common ratio must be between $-1$ and $1$ for the sum of the series to exist.\n\n  $$\n  \\begin{align*}\n      -1<3^x<1\n  \\end{align*}\n  $$\n\n  $3^x$ is larger than zero for all $x$, therefore\n\n  $$\n  \\begin{align*}\n      0<3^x<1\\\\[6pt]\n  \\end{align*}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/9fb77972-9d7b-4390-b79e-bf7e9e264394/images/ab4c1db7-4ab9-4823-a1d2-0668dd6cf6e6/3%5Ex.png)\n\n\n  From the sketch of $3^x$ we can see that when $x<0$ then $0<3^x<1$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  The domain such that a sum exists is $\\hspace{0.525em}\\tcbhighmath{x<0}$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Using the formula for the sum of an infinite geometric series with $S_{\\infty}=54$, $r=3^x$ and $u_1=52$ we can write the equation\n\n  $$\n  \\begin{align*}\n      54&=\\frac{52}{1-3^x}\\\\[6pt]\n      1-3^x&=\\frac{26}{27}\\tag*{\\textbf{M1}}\\\\[6pt]\n      3^x&=\\frac{1}{27}\\\\[6pt]\n      3^x&=3^{-3}\\\\[6pt]\n      &\\hspace{-0.9em}\\answer{\\displaystyle x=-3}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '4',
    difficultyLevel: '2'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 12',
    content:
      'Consider the following sequence of figures.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/02c0ba8c-31f6-4ac2-be07-11a5cc2d5804/images/4cf394f8-a1d5-4b83-86b2-cc2e25134ee1/AA008.PNG)\n\n\nFigure 1 contains $6$ line segments.\n\n- Given that Figure $n$ contains $101$ line segments, show that\n$n = 20$.<span class="marks">[3]</span>\n\n- Find the total number of line segments in the first $20$ figures.\n<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have an arithmetic sequence with $u_1 = 6$, $u_2 = 11$ and\n$u_3 = 16$.\n  The common difference is\n\n  $$\n  \\begin{aligned}\n  d &= u_2 - u_1 \\\\[6pt]\n  &= 11 - 6 \\\\[6pt]\n  &= 5\\end{aligned}\n  $$\n\n  Hence, if we substitute $u_n = 101$, $u_1 = 6$\nand $d = 5$ in $u_n = u_1 + (n-1)d$ and solve the resulting equation\nfor $n$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.9em} 101 &= 6 + (n-1)(5) \\\\[6pt]\n  101 &= 5n+1 \\\\[6pt]\n  100 &= 5n\\end{aligned}\n  $$\n\n\n  $$\n  \\answer{n = 20}\\hspace{2.3em}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(u_1 + u_n)$\nwith $n=20$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.5em} S_{20} &= \\dfrac{20}{2}(u_1 + u_{20}) \\\\[6pt]\n  &= \\dfrac{20}{2}(6 + 101) \\\\[12pt]\n  &= 10(107) \\\\[16pt]\n  &\\answer{= 1070}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Hannah buys a car for $\\$24\\hspace{0.15em}900$. The value of the car\ndepreciates by $16$ %\neach year.\n\n- Find the value of the car after $10$ years. <span class="marks">[3]</span>\n\n\nPatrick buys a car for $\\$12\\hspace{0.15em}000$. The car depreciates by\na fixed percentage each year, and after $6$ years it is worth $\\$6200$.\n\n- Find the annual rate of depreciation of the car.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/3c90f4d8-bceb-4f72-ab0e-5232885bf1f6/images/595ed2da-51c1-4e01-a499-1480db3b84b3/848a0a2395b69bf10b5ffc75fbbed6c738b8c64e.svg)\n\n\n  Hence, using the compound depreciation formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\\\[8pt]\n  &= 24\\hspace{0.25em}900\\bigg(1 - \\dfrac{16}{100}\\bigg)^{10}  \\\\[10pt]\n  &= 4355.04...\\\\[10pt]\n  &\\answer{\\approx \\$4360}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/3c90f4d8-bceb-4f72-ab0e-5232885bf1f6/images/7a56ffc8-267d-4bea-a1ee-8a685082cf69/80839ebacd99f943925e1048218639215d638a8d.svg)\n\n\n  Hence, using the compound depreciation formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.9em} 6200 &= 12\\hspace{0.15em}000\\bigg(1 - \\dfrac{r}{100}\\bigg)^6  \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{7.7em} \\answer{r \\approx 10.4\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
      'A $3$D printer builds a set of $49$ Ei$\\text{f}$fel Tower\nReplicas in different sizes. The height of the largest tower in this set\nis $64$ cm. The heights of successive smaller\ntowers are $95$ % of the preceding larger tower,\nas shown in the diagram below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/7c098710-c58c-4ef5-87d5-1552e9027719/images/e2ae24d8-0743-4825-b529-687c2f726965/AA724a.PNG)\n\n\n\n- Find the height of the smallest tower in this set. <span class="marks">[3]</span>\n\n- Find the total height if all $49$ towers were placed one on top\nof another. <span class="marks">[3]</span>\n\n',
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
      'Julia wants to buy a house that requires a deposit of\n$74\\hspace{0.15em}000$ Australian dollars (AUD).\nJulia is going to invest an amount of AUD in an account that pays a\nnominal annual interest rate of $5.5$ %,\ncompounded monthly.\n\n- Find the amount of AUD Julia needs to invest to reach\n$74\\hspace{0.15em}000$ AUD after $8$ years. Give your answer correct\nto the nearest dollar. <span class="marks">[3]</span>\n\n\nJulia\'s parents offer to add $5000$ AUD to her initial investment from\npart (a), however, only if she invests her money in a more reliable bank\nthat pays a nominal annual interest rate only of\n$3.5$ %, compounded quarterly.\n\n- Find the number of years it would take Julia to save the\n$74\\hspace{0.15em}000$ AUD if she accepts her parents money and\nfollows their advice. Give your answer correct to   the nearest\nyear. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0040becf-d95c-498b-af18-0c5473adbf14/images/212c1056-b5d6-4659-973b-fd3f7618ddd3/3787235f52ce0a9532d1fb499061fa26f27dacb9.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.8em} \\mathrm{FV} &= \\text{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  74\\hspace{0.15em}000 &= \\text{PV}\\bigg(1 + \\dfrac{5.5}{100\\times12}\\bigg)^{12\\times 8} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{9.1em} \\answer{\\text{PV} \\approx 47\\hspace{0.15em}707 \\text{ AUD}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/0040becf-d95c-498b-af18-0c5473adbf14/images/ab000678-1d0a-4622-ae9d-1f85041e27a0/c0f56a142d7776c6858b94a3b97c9a56ff5d69a7.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.6em} 74\\hspace{0.15em}000 &= 52\\hspace{0.15em}707\\bigg(1 + \\dfrac{3.5}{100\\times4}\\bigg)^{4n} \\\\[8pt]\n  n &\\approx 9.74 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence it would take Julia\n$\\answer{10 \\text{ years}}$\nto save the $74\\hspace{0.15em}000$ AUD.\n',
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
      'The fifth term, $u_5$, of a geometric sequence is $125$. The sixth term,\n$u_6$, is $156.25$.\n\n- Find the common ratio of the sequence. <span class="marks">[2]</span>\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Calculate the sum of the first $12$ terms of the sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_6}{u_5} \\\\[6pt]\n  &= \\dfrac{156.25}{125} \\\\[11pt]\n  &\\answer{= 1.25} \\hspace{3.2em}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_5r^{n-5}$ with $n = 1$, we get\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_5r^{1-5} \\\\[6pt]\n  &= 125(1.25)^{1-5} \\\\[6pt]\n  &\\answer{= 51.2}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{u_1(r^n-1)}{r-1}$\nwith $n = 12$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2em} S_{12} &= \\dfrac{u_1(r^{12}-1)}{r-1} \\\\[12pt]\n  &= \\dfrac{51.2((1.25)^{12}-1)}{1.25-1} \\\\[12pt]\n  &=2775.4...\\\\[6pt]\n  &\\answer{\\approx 2780}\\hspace{3em}\\text{rounded to 3 s.f.}\\end{aligned}\n  $$\n\n',
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
      'In an arithmetic sequence, $u_5 = 24$, $u_{13} = 80$.\n\n- Find the common difference. <span class="marks">[2]</span>\n\n- Find the first term. <span class="marks">[2]</span>\n\n- Find the sum of the first $20$ terms in the sequence. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_5 + (n-5)d$ with $n = 13$, we\nget\n\n  $$\n  \\begin{aligned}\n  u_{13} &= u_5 + (13-5)d \\\\[6pt]\n  80 &= 24 + (13-5)d \\hspace{1.5em} \\\\[6pt]\n  56 &= 8d\\end{aligned}\n  $$\n\n\n  $$\n  \\answer{d = 7} \\hspace{6.35em}\n  $$\n\n- Using the $n$th term formula $u_n = u_5 + (n-5)d$ with $n = 1$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_5 + (1-5)d \\\\[6pt]\n  &= 24 + (1-5)(7) \\hspace{0.9em} \\\\[6pt]\n  &\\answer{= -4}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with\n$n=20$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.7em} S_{20} &= \\dfrac{20}{2}(2u_1 + (20-1)d) \\\\[6pt]\n  &= \\dfrac{20}{2}(2(-4) + (20-1)(7)) \\\\[11pt]\n  &\\answer{= 1250}\\end{aligned}\n  $$\n\n',
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
      'In this question give all answers correct to two decimal places.\nMia deposits $4000$ Australian dollars (AUD) into a bank account. The\nbank pays a nominal annual interest rate of\n$6$ %, compounded semi-annually.\n\n- Find the amount of interest that Mia will earn over the next\n$2.5$ years. <span class="marks">[3]</span>\n\n\nElla also deposits AUD into a bank account. Her bank pays a nominal\nannual $\\text{interest}$ rate of $4$ %,\ncompounded monthly. In $2.5$ years, the total amount in Ella\'s\naccount will be $4000$ AUD.\n\n- Find the amount that Ella deposits in the bank account.\n<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/46ebce9e-ec2e-47a4-8db9-3e457db83c86/images/656761ff-09b0-4e81-8b83-3229fc8d906e/dc425b29b9e196ccc51470e8966f83917d4179b9.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 4000\\bigg(1+\\dfrac{6}{100\\times2}\\bigg)^{2\\times2.5} \\\\[12pt]\n  &\\approx 4637.10 \\text{ AUD}\\end{aligned}\n  $$\n\n  Hence the amount of interest earned is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} - \\text{PV} &\\approx 4637.10 - 4000 \\hspace{3.7em} \\\\[6pt]\n  &\\answer{\\approx 637.10 \\text{ AUD}}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/46ebce9e-ec2e-47a4-8db9-3e457db83c86/images/a5ab341d-f924-413d-bfbe-52bf7382648e/bc195cd8b953f93121c2542be7b715a98cf4c62e.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} 4000 &= \\text{PV}\\bigg(1+\\dfrac{4}{100\\times12}\\bigg)^{12\\times2.5} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{9em} \\answer{\\text{PV} \\approx 3619.95 \\text{ AUD}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
      'Maria invests $\\$25\\hspace{0.15em}000$ into a savings account that pays\na nominal annual interest rate of $4.25$%,\ncompounded monthly.\n\n- Calculate the amount of money in the savings account after $3$\nyears. <span class="marks">[2]</span>\n\n- Calculate the number of years it takes for the account to reach\n$\\$40\\hspace{0.15em}000$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/75fda2ab-6b15-43ec-bb01-d61f0f2f6ac5/images/f1db215a-18f9-4f16-9a98-10f46487336d/987f4c1d6bf2f65199be87193b7aea8bd2861a05.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.4em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 25\\hspace{0.15em}000\\bigg(1 + \\dfrac{4.25}{100\\times12}\\bigg)^{12\\times3} \\\\[12pt]\n  &\\answer{\\approx \\$28\\hspace{0.15em}400}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/75fda2ab-6b15-43ec-bb01-d61f0f2f6ac5/images/afea8fdf-3053-4c05-873a-285173064c31/f2cb8aa057458cfd9f39f532ecc8e0e8adc7b0a4.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} 40\\hspace{0.15em}000 &= 25\\hspace{0.15em}000\\bigg(1 + \\dfrac{4.25}{100\\times12}\\bigg)^{12n} \\\\[6pt]\n  1.6 &= \\bigg(1 + \\dfrac{4.25}{1200}\\bigg)^{12n} \\\\\n  \\end{aligned}\n  $$\n\n  Sketching the graphs of $y=1.6$ and $y=\\bigg(1 + \\dfrac{4.25}{1200}\\bigg)^{12n}$ we get:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/75fda2ab-6b15-43ec-bb01-d61f0f2f6ac5/images/dda7e0bb-c0be-4ec6-8463-7d8e5dd1b0c2/AA703a.PNG)\n\n\n  Hence it takes\n$\\answer{11.1 \\text{ years}}$\nfor the account to reach $\\$40\\hspace{0.15em}000$.\n',
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
    title: 'Question 20',
    content:
      'The first three terms of a geometric sequence are $u_1 = 32$,\n$u_2 = -16$, $u_3 = 8$.\n\n- Find the value of the common ratio, $r$. <span class="marks">[2]</span>\n\n- Find $u_6$. <span class="marks">[2]</span>\n\n- Find $S_{\\infty}$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The value of $r$ is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n  &= -\\dfrac{16}{32} \\\\[6pt]\n  &\\answer{= -\\dfrac{1}{2}} \\hspace{3.6em}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_1 r^{n-1}$ with $n = 6$, we\nget\n\n  $$\n  \\begin{aligned}\n  u_6 &= u_1 r^{6-1} \\\\[8pt]\n  &= 32\\bigg(\\hspace{-0.3em} -\\dfrac{1}{2}\\bigg)^{6-1} \\\\[4pt]\n  &= 32\\bigg(\\hspace{-0.3em}-\\dfrac{1}{32}\\bigg) \\\\[9pt]\n  &\\answer{= -1}\\end{aligned}\n  $$\n\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.405em} S_{\\infty} &= \\dfrac{32}{1-(-1/2)} \\hspace{5.45em} \\\\[6pt]\n  &= \\dfrac{32}{3/2} \\\\[6pt]\n  &\\answer{= \\dfrac{64}{3}}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'In an arithmetic sequence, $u_4 = 12$, $u_{11} = -9$.\n\n- Find the common difference. <span class="marks">[2]</span>\n\n- Find the first term. <span class="marks">[2]</span>\n\n- Find the sum of the first $11$ terms in the sequence. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_4 + (n-4)d$ with $n = 11$, we\nget\n\n  $$\n  \\begin{aligned}\n  u_{11} &= u_4 + (11-4)d \\\\[6pt]\n  -9 &= 12 + (11-4)d \\hspace{1.8em} \\\\[6pt]\n  -21 &= 7d\\end{aligned}\n  $$\n\n\n  $$\n  \\answer{d = -3} \\hspace{5.5em}\n  $$\n\n- Using the $n$th term formula $u_n = u_4 + (n-4)d$ with $n = 1$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_4 + (1-4)d \\\\[6pt]\n  &= 12 + (1-4)(-3) \\\\[6pt]\n  &\\answer{= 21}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(u_1 + u_n)$\nwith $n=11$, we find\n\n  $$\n  \\begin{aligned}\n  S_{11} &= \\dfrac{11}{2}(u_1 + u_{11}) \\hspace{2.1em} \\\\[6pt]\n  &= \\dfrac{11}{2}(21 + (-9)) \\\\[6pt]\n  &= \\dfrac{11}{2}(12) \\\\[6pt]\n  &\\answer{= 66}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Emily deposits $2000$ Australian dollars (AUD) into a bank account. The\nbank pays a nominal annual interest rate of\n$4$ %, compounded monthly.\n\n- Find the amount of money that Emily will have in her bank account\nafter $5$ years. Give your answer correct to two decimal places.\n<span class="marks">[3]</span>\n\n\nEmily will withdraw the money back from her bank account when the amount\nreaches $3000$ AUD.\n\n- Find the time, in years and months, until Emily withdraws the\nmoney from her bank account. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8549f051-082f-44b4-ace3-be722affb94c/images/571bceb9-dcfb-41a1-92c6-eb782b5da6a4/adb2e5a5727d896793f414aff36c01c8cf4261d3.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\text{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 2000\\bigg(1 + \\dfrac{4}{100\\times12}\\bigg)^{12\\times 5} \\\\[12pt]\n  &\\answer{= 2441.99 \\text{ AUD}}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8549f051-082f-44b4-ace3-be722affb94c/images/2fb29c80-ba21-4e1d-a96f-48bc7f40d170/07a5668b1bebdc2755dde33ca8b99bce2a25d25a.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.7em} 3000 &= 2000\\bigg(1 + \\dfrac{4}{100\\times12}\\bigg)^{12n} \\\\[10pt]\n  \\hspace{3.7em} 1.5 &= \\bigg(1 + \\dfrac{4}{1200}\\bigg)^{12n}\n  \\end{aligned}\n  $$\n\n  Sketching the graphs of $y=1.5$ and $y=\\bigg(1 + \\dfrac{4}{1200}\\bigg)^{12n}$ we get:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8549f051-082f-44b4-ace3-be722affb94c/images/32be27d6-5550-488f-a058-fe0abc9d6820/AA706a.PNG)\n\n\n  $10.15$ years $\\approx 10$ years and 2 months.\n  Hence Emily will withdraw the money from her bank account after\n$\\answer{10 \\text{ years and }2 \\text{ months.}}$\n',
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
    title: 'Question 23',
    content:
      'A tennis ball bounces on the ground $n$ times. The heights of the\nbounces, $h_1, h_2, h_3, \\dots,h_n,$ form a geometric sequence. The\nheight that the ball bounces the first time, $h_1$, is\n$80$ cm, and the second time, $h_2$, is\n$60$ cm.\n\n- Find the value of the common ratio for the sequence. <span class="marks">[2]</span>\n\n- Find the height that the ball bounces the tenth time, $h_{10}$.\n<span class="marks">[2]</span>\n\n- Find the total distance travelled by the ball during the first\nsix bounces (up and down). Give your answer correct to $2$ decimal\nplaces. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{h_2}{h_1} \\\\[6pt]\n  &= \\dfrac{60}{80} \\\\[12pt]\n  &\\answer{= 0.75} \\hspace{2.75em}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $h_n = h_1r^{n-1}$ with $n = 10$, we\nget\n\n  $$\n  \\begin{aligned}\n  h_{10} &= h_1r^{10-1} \\\\[6pt]\n  &= 80(0.75)^{10-1} \\\\[6pt]\n  &=6.006...\\\\[7pt]\n  &\\answer{\\approx 6.01\\hspace{0.25em}\\text{cm}}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{h_1(1-r^n)}{1-r}$\nwith $n=6$, we find\n\n  $$\n  \\begin{aligned}\n  \\text{total distance} &= 2\\times S_6 \\\\[12pt]\n  &= 2\\bigg[\\dfrac{h_1(1-r^6)}{1-r}\\bigg] \\\\[6pt]\n  &= 2\\bigg[\\dfrac{80(1-0.75^6)}{1-0.75}\\bigg] \\hspace{2.4em} \\\\[12pt]\n  &\\answer{\\approx 526.09\\hspace{0.25em}\\text{cm}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 24',
    content:
      'In an arithmetic sequence, the sum of the 2nd and 6th term is $32$.\nGiven that the sum of the first six terms is $120$, determine the first\nterm and common difference of the sequence.',
    markScheme:
      'Let $u_1$ be the first term of the arithmetic sequence and $d$ be the\ncommon difference. The first six terms are\n\n$$\n\\begin{aligned}\nu_1 \\hspace{0.15em},\\hspace{0.15em} u_1+d \\hspace{0.15em},\\hspace{0.15em} u_1+2d \\hspace{0.15em},\\hspace{0.15em} u_1+3d \\hspace{0.15em},\\hspace{0.15em} u_1+4d \\hspace{0.15em},\\hspace{0.15em} u_1+5d\\end{aligned}\n$$\n\nWe know that\n\n$$\n\\begin{aligned}\nu_2 + u_6= 32\\qquad s_6=120\\end{aligned}\n$$\n\nthus, we can form two\nequations\n\n$$\n\\begin{aligned}\n2u_1+6d &= 32 \\qref{(1)}\\\\[5pt]\n6u_1+15d &= 120  \\qref{(2)}\\end{aligned}\n$$\n\nWe can solve this system of\nlinear equations by using the elimination method or using our G.D.C. We\nget\n\n$$\n\\begin{aligned}\n\\answer{u_1=40} \\qquad \\answer{d = -8}\\end{aligned}\n$$\n',
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
    title: 'Question 25',
    content:
      'Ali bought a car for $\\$18\\hspace{0.15em}000$. The value of the car\ndepreciates by $10.5$ %\neach year.\n\n- Find the value of the car at the end of the first year. <span class="marks">[2]</span>\n\n- Find the value of the car after $4$ years. <span class="marks">[2]</span>\n\n- Calculate the number of years it will take for the car to be worth\nexactly half its original value. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c289fa6f-c413-4697-93e4-f59e95d3c29e/images/9b2475ff-f92a-4348-8a1b-8fbbbf699e5f/86d0641572fd7d8ca13b40e061d1374bca7391bc.svg)\n\n\n  Hence, using the compound depreciation formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} \\mathrm{FV} &= \\text{PV}\\bigg(1 - \\dfrac{r}{100}\\bigg)^n \\\\[6pt]\n  &= 18\\hspace{0.15em}000\\bigg(1 - \\dfrac{10.5}{100}\\bigg)  \\\\[12pt]\n  &= \\$16\\hspace{0.15em}110 \\\\[18pt]\n  &\\answer{\\approx \\$16\\hspace{0.15em}100}\\hspace{2em}\\text{correct to 3 s.f.} \\\\[12pt]\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c289fa6f-c413-4697-93e4-f59e95d3c29e/images/a76d44e1-5463-4468-9c8a-0ceb82877226/8adbc1baad593f942992356c96995063b6051eee.svg)\n\n\n  Hence, using the compound depreciation formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} \\mathrm{FV} &= 18\\hspace{0.15em}000\\bigg(1 - \\dfrac{10.5}{100}\\bigg)^4  \\\\[12pt]\n  &= \\$11\\hspace{0.15em}549.5 \\\\[18pt]\n  &\\answer{\\approx \\$11\\hspace{0.15em}500}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/c289fa6f-c413-4697-93e4-f59e95d3c29e/images/a9aaf34f-c970-400a-811e-844658406bad/22cbaefd6c6344e284fd948d4606858070563a4e.svg)\n\n\n  Hence, using the compound depreciation formula, we find\n\n  $$\n  \\begin{aligned}\n  9000 &= 18\\hspace{0.15em}000\\bigg(1 - \\dfrac{10.5}{100}\\bigg)^n \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{8em} \\answer{n \\approx 6.25 \\text{ years}} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 26',
    content:
      'The fourth term, $u_4$, of a geometric sequence is $135$. The fifth\nterm, $u_5$, is $81$.\n\n- Find the common ratio of the sequence. <span class="marks">[2]</span>\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Calculate the sum of the first $20$ terms of the sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_5}{u_4} \\\\[6pt]\n  &= \\dfrac{81}{135} \\\\[11pt]\n  &\\answer{= 0.6} \\hspace{3.2em}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_4r^{n-4}$ with $n = 1$, we get\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_4r^{1-4} \\\\[6pt]\n  &= 135(0.6)^{1-4} \\\\[6pt]\n  &\\answer{= 625}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{u_1(1-r^n)}{1-r}$\nwith $n = 20$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.7em} S_{20} &= \\dfrac{u_1(1-r^{20})}{1-r} \\\\[6pt]\n  &= \\dfrac{625(1-(0.6)^{20})}{1-0.6} \\\\[12pt]\n  &\\answer{\\approx 1560}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 27',
    content:
      'An arithmetic sequence has first term $45$ and common difference $-1.5$.\n\n- Given that the $k$th term of the sequence is zero, find the value of\n$k$. <span class="marks">[2]</span>\n\n\nLet $S_n$ denote the sum of the first $n$ terms of the sequence.\n\n- Find the maximum value of $S_n$. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- The $k$th term in the sequence is given by $u_k = u_1 + (k-1)d$ with\n$u_1 = 45$ and $d = -1.5$.\n  Since $u_k = 0$, we get\n\n  $$\n  \\begin{aligned}\n  45 + (k-1)(-1.5) &= 0 \\\\[8pt]\n  &\\hspace{-0.5em}\\answer{k = 31} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- Since the common difference $d$ is negative, the terms in the\nsequence are decreasing. From part (a), we found that the $31$st\nterm in the sequence is zero. Hence, any term after this would be\nnegative. Therefore, the sum $S_n$ is maximised when $n = 30$ or\n$n = 31$ (as $u_{31}=0$).\n  Using the formula $S_n = \\dfrac{n}{2}\\left(u_1 + u_n \\right)$ with\n$n = 31$, we find that the maximum value of $S_n$ is\n\n  $$\n  \\begin{aligned}\n  S_{31} &= \\dfrac{31}{2}(u_{1} + u_{31}) \\hspace{3em}\\\\[10pt]\n  S_{31} &= \\dfrac{31}{2}(45 + 0) \\hspace{3em}\\\\[10pt]\n  &\\answer{= 697.5}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 28',
    content:
      'The fifth term, $u_5$, of an arithmetic sequence is $25$. The eleventh\nterm, $u_{11}$, of the same sequence is $49$.\n\n- Find $d$, the common difference of the sequence. <span class="marks">[2]</span>\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Find $S_{100}$, the sum of the first $100$ terms of the sequence.\n<span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_5 + (n-5)d$ with $n=11$, we\nget\n\n  $$\n  \\begin{aligned}\n  u_{11} &= u_5 + (11-5)d \\\\[6pt]\n  49 &= 25 + (11-5)d\\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{5.8em}\\answer{d = 4} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Using the $n$th term formula $u_n = u_5 + (n-5)d$ with $n=1$, we\nfind\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.7em} u_1 &= u_5 + (1-5)d \\\\[6pt]\n  &= 25 + (1-5)(4) \\\\[6pt]\n  &\\answer{= 9}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(2u_1+(n-1)d)$\nwith $n = 100$,\n  we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.1em} S_{100} &= \\dfrac{100}{2}(2u_1+(100-1)d) \\\\[6pt]\n  &= \\dfrac{100}{2}(2(9)+(100-1)(4)) \\\\[10pt]\n  &\\answer{= 20\\hspace{0.15em}700}\\end{aligned}\n  $$\n\n',
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
      'The third term, $u_3$, of an arithmetic sequence is $7$. The common\ndifference of\nthe sequence, $d$, is $3$.\n\n- Find $u_1$, the first term of the sequence. <span class="marks">[2]</span>\n\n- Find $u_{60}$, the $60$th term of sequence. <span class="marks">[2]</span>\n\n\nThe first and fourth terms of this arithmetic sequence are the first two\nterms\nof a geometric sequence.\n\n- Calculate the sixth term of the geometric sequence.\n<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_3 + (n-3)d$ with $n = 1$, we\nget\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_3 + (1-3)d \\hspace{0.4em} \\\\[6pt]\n  &= 7 + (1-3)(3) \\\\[6pt]\n  &\\answer{= 1}\\end{aligned}\n  $$\n\n- Using the $n$th term formula $u_n = u_3 + (n-3)d$ with $n = 60$, we\nfind\n\n  $$\n  \\begin{aligned}\n  u_{60} &= u_3 + (60-3)d \\\\[6pt]\n  &= 7 + (60-3)(3) \\\\[6pt]\n  &\\answer{= 178}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f2cc8beb-38d8-4fd2-b2a9-e3169e681425/images/54fb2a07-05e7-4685-b5f7-e496ff597450/ad62ab3f954984b454acd9a772d836d707c86a2f.svg)\n\n\n  Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 6$,\nwe obtain\n\n  $$\n  \\begin{aligned}\n  u_6 &= u_1r^{6-1} \\\\[6pt]\n  &= 1(10)^{6-1} \\\\[7pt]\n  &\\answer{\\approx 100\\hspace{0.15em}000} \\hspace{3em}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 30',
    content:
      'Greg has saved $2000$ British pounds (GBP) over the last six months. He\ndecided to deposit his savings in a bank which offers a nominal annual\ninterest rate of $\\text{\\(8\\)\\hspace{0.05em}\\%}$, compounded\nmonthly, for two years.\n\n- Calculate the total amount of interest Greg would earn over the two\nyears. Give your answer correct to two decimal places.\n<span class="marks">[3]</span>\n\n\nGreg would earn the same amount of interest, compounded\nsemi-annually, for two years if he deposits his savings in a second\nbank.\n\n- Calculate the nominal annual interest rate the second bank\noffers. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f7e719f4-bdfc-405f-b84f-caef77028a4c/images/8700699e-bb36-4b51-af8c-8a5197119c8a/d94b9efaa433da997063a9b0927befd8e7a68df2.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{5em} \\mathrm{FV} &= \\text{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 2000\\bigg(1 + \\dfrac{8}{100\\times12}\\bigg)^{12\\times 2} \\\\[12pt]\n  &= 2345.78 \\text{ GBP}\\end{aligned}\n  $$\n\n  Hence the total amount of interest earned is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} - \\text{PV} &= 2345.78 - 2000 \\hspace{2.2em} \\\\[6pt]\n  &\\answer{= 345.78 \\text{ GBP}}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f7e719f4-bdfc-405f-b84f-caef77028a4c/images/ed92a47e-20d5-4dd3-8b11-ed7a831ae11b/218c768ecef0bd0485a005a319e86a9adb263fd0.svg)\n\n\n  Hence, using the compound interest formula, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.1em} 2345.78 &= 2000\\bigg(1 + \\dfrac{r}{100\\times2}\\bigg)^{2\\times 2} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{8.2em} \\answer{r \\approx 8.13\\hspace{0.05em}\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
      'On $1$st of January $2021$, Fiona decides to take out a bank loan to\npurchase a new Tesla electric car. Fiona takes out a loan of $\\$P$ with\na bank that offers a nominal annual interest rate of\n$2.6\\hspace{0.05em}\\%$, compounded monthly.\nThe size of Fiona\'s loan at the end of each year follows a geometric\nsequence with common ratio, $\\alpha$.\n\n- Find the value of $\\alpha$, giving your answer to five significant\nfigures. <span class="marks">[3]</span>\n\n\nThe bank lets the size of Fiona\'s loan increase until it becomes\ntriple the size of the original loan. Once this happens, the bank\ndemands that Fiona pays the entire amount back to close the loan.\n\n- Find the year during which Fiona will need to pay back the\nloan. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/044e1fea-57fa-44f6-81d8-93b445017dac/images/25dc8c3f-9ac4-4ced-9058-7623bd367132/5f2f8a1ae6bc63ae761ba90ac49b1bb0bd1bd144.svg)\n\n\n  Hence, using the compound interest formula, we deduce\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  P\\alpha &= P\\bigg(1 + \\dfrac{2.6}{100\\times12}\\bigg)^{12\\times 1}\\end{aligned}\n  $$\n\n  Hence the value of $\\alpha$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.2em} \\alpha &= \\bigg(1 + \\dfrac{2.6}{1200}\\bigg)^{12} \\\\[9pt]\n  &\\answer{\\approx 1.0263}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/044e1fea-57fa-44f6-81d8-93b445017dac/images/d118e156-65b4-416f-8248-a1b87b7577c1/a4fdabe8dee8262e3ad5b7a5f6550e756265ae9a.svg)\n\n\n  Hence, using the compound interest formula, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.75em} 3P &= P\\bigg(1 + \\dfrac{2.6}{100\\times12}\\bigg)^{12\\times n} \\\\[5pt]\n  3 &= \\bigg(1 + \\dfrac{2.6}{1200}\\bigg)^{12n} \\\\[12pt]\n  n &\\approx 42.3 \\text{ years} \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence Fiona will need to pay back the loan during\n$\\answer{2063}$\n',
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
      'The first term of an arithmetic sequence is $24$ and the common\ndifference is $16$.\n\n- Find the value of the $62$nd term of the\nsequence. <span class="marks">[2]</span>\n\n\nThe first term of a geometric sequence is $8$. The $4$th term of the\ngeometric sequence is equal to the $13$th term of the arithmetic\nsequence given above.\n\n- Write down an equation using this information. <span class="marks">[2]</span>\n\n- Calculate the common ratio of the geometric sequence.\n<span class="marks">[2]</span>\n\n',
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
      'The Australian Koala Foundation estimates that there are about\n$45\\hspace{0.15em}000$ koalas left in the wild in $2019$. A year before,\nin $2018$, the population of koalas was estimated as\n$50\\hspace{0.15em}000$. Assuming the population of koalas continues to\ndecrease by the same percentage each year, find:\n\n- the exact population of koalas in $2022$; <span class="marks">[3]</span>\n\n- the number of years it will take for the koala population to reduce\nto half of its number in $2018$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have a geometric sequence with\n\n  $$\n  \\begin{aligned}\n  2018:\\hspace{0.5em} u_1 &= 50\\hspace{0.15em}000 \\\\[6pt]\n  2019:\\hspace{0.5em} u_2 &= 45\\hspace{0.15em}000\\end{aligned}\n  $$\n\n  The\ncommon ratio of the sequence is\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.1em} r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n  &= \\dfrac{45\\hspace{0.15em}000}{50\\hspace{0.15em}000} \\\\[12pt]\n  &= 0.9\\end{aligned}\n  $$\n\n  Using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 5$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.5em} 2022:\\hspace{0.5em} u_5 &= u_1r^{5-1} \\\\[6pt]\n  &= 50\\hspace{0.15em}000(0.9)^{5-1} \\\\[7pt]\n  &\\answer{= 32\\hspace{0.15em}805}\\end{aligned}\n  $$\n\n- Solving the equation $u_n = 25\\hspace{0.15em}000$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  u_1r^{n-1} &= 25\\hspace{0.15em}000 \\hspace{2em} \\\\[6pt]\n  50\\hspace{0.15em}000(0.9)^{n-1} &= 25\\hspace{0.15em}000\\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{13.5em} n \\approx 7.58 \\hspace{3em} [\\text{by using G.D.C.}] \\\\[2pt]\n  $$\n\n  Because our starting year, 2018, is considered to be year 1 ($n=1$), it will take 6.58 years from then for the population to halve from $50\\,000$ to $25\\,000$.\n  Hence it will take\n$\\answer{6.58 \\text{ years}}$\nfor the koala population to reduce to half of its number in $2018$.\n',
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
    title: 'Question 34',
    content:
      'Landmarks are placed along the road from London to Edinburgh and the\ndistance between each landmark is $16.1$ km. The\nfirst landmark placed on the road is $124.7$ km\nfrom London, and the last landmark is near Edinburgh. The length of the\nroad from London to Edinburgh is $667.1$ km.\n\n- Find the distance between the fifth landmark and London. <span class="marks">[3]</span>\n\n- Determine how many landmarks there are along the road. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have an arithmetic sequence with $u_1 = 124.7$ and $d = 16.1$.\nHence, using the $n$th term formula $u_n = u_1 + (n-1)d$ with\n$n = 5$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.6em} u_5 &= u_1 + (5-1)d \\\\[6pt]\n  &= 124.7 + (5-1)(16.1) \\\\[6pt]\n  &= 189\\end{aligned}\n  $$\n\n  Hence the distance between the fifth\nlandmark and London is\n$\\answer{189\\hspace{0.25em}\\text{km}}$\n- If we solve the inequality $u_n < 667.1$ for the largest value of\n$n$, we obtain\n\n  $$\n  \\begin{aligned}\n  u_1 + (n-1)d &< 667.1 \\\\[6pt]\n  124.7 + (n-1)(16.1) &< 667.1 \\\\[6pt]\n  n &< 34.7 \\hspace{3em} [\\text{by using G.D.C.}] \\hspace{1em} \\\\[6pt]\n  n &= 34 \\\\\n  \\end{aligned}\n  $$\n\n  Hence there are\n$\\answer{34}$\nlandmarks along the road.\n',
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
    title: 'Question 35',
    content:
      'On Gary\'s $50$th birthday, he invests $\\$P$ in an account that pays a\nnominal annual interest rate of $5$ %,\ncompounded monthly.\nThe amount of money in Gary\'s account at the end of each year\nfollows a geometric sequence with common ratio, $\\alpha$.\n\n- Find the value of $\\alpha$, giving your answer to four significant\nfigures. <span class="marks">[3]</span>\n\n\nGary makes no further deposits or withdrawals from the account.\n\n- Find the age Gary will be when the amount of money in his\naccount will be double the amount he invested. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/7821716a-4bcd-48c5-aaf0-f5c82a7af994/images/5501f0eb-f806-4694-9167-fa1040194588/41a3f8a185c5c4fff3e200802b215cea41fb13e6.svg)\n\n\n  Hence, using the compound interest formula, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  P\\alpha &= P\\bigg(1 + \\dfrac{5}{100\\times12}\\bigg)^{12\\times 1}\\end{aligned}\n  $$\n\n  Hence the value of $\\alpha$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} \\alpha &= \\bigg(1 + \\dfrac{5}{1200}\\bigg)^{12} \\\\[9pt]\n  &\\answer{\\approx 1.051}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/7821716a-4bcd-48c5-aaf0-f5c82a7af994/images/37b0b9ad-1f27-4d82-9b1d-ea404d5fd316/3a174f6b31ae114bd45f642a60b4cf2b3ffba841.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{6em} 2P &= P\\bigg(1 + \\dfrac{5}{100\\times12}\\bigg)^{12\\times n} \\\\[5pt]\n  2 &= \\bigg(1 + \\dfrac{5}{1200}\\bigg)^{12n} \\\\[12pt]\n  n &\\approx 13.9 \\text{ years} \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence Gary will have double the amount he invested at age\n$\\answer{63}$\n',
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
    title: 'Question 36',
    content:
      'An arithmetic progression has a common difference of $d$, where $d \\neq 0$.\nThe $7^{\\text{th}}$ term is equal to the $3^{\\text{rd}}$ term squared and the $5^{\\text{th}}$ term is $1$.\n\n- Find the common difference. <span class="marks">[4]</span>  \n\n$S_n$ is the sum of the first $n$ terms of the sequence.\n\n- Find the largest value of $n$ such that $S_n<300$. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- We can use the information given to form an equation\n\n  $$\n  \\begin{align*}\n  \tu_7&=(u_3)^2\n  \\end{align*}\n  $$\n\n  Using the general term of an arithmetic progression, we can write the equation in terms of the first term, $u_1$, and $d$.\n\n  $$\n  \\begin{align*}\n  \tu_1+(7-1) \\times d&=(u_1 + (3-1) \\times d)^2\\\\[6pt]\n  \tu_1+6d&=(u_1 + 2d)^2\\\\[6pt]\n  \tu_1+6d&=u_1^2+4u_1d+4d^2\n  \\end{align*}\n  $$\n\n  Using the given fact $u_5=1$ we can write $u_1$ in terms of $d$\n\n  $$\n  \\begin{align*}\n  1&=u_1+4d\\\\[6pt]\n  u_1&=1-4d\n  \\end{align*}\n  $$\n\n  We can now write the original equation in terms of $d$\n\n  $$\n  \\begin{align*}\n  \t1-4d+6d&=(1-4d)^2+4(1-4d)d+4d^2 \\tag*{\\textbf{A1M1}}\n  \\end{align*}\n  $$\n\n  We can now simplify both sides of this equation and then solve the equation graphically.\n\n  $$\n  \\begin{align*}\n  \t1+2d&=(1-4d)^2+4d-16d^2+4d^2\\\\[6pt]\n  \t1+2d&=(1-4d)^2+4d-12d^2\n  \\end{align*}\n  $$\n\n  We do this by sketching the L.H.S. and R.H.S. of the above equation, as two seperate functions, using a G.D.C. and then finding the points of intersection\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack} \\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}\n  \tf(x)=&=1+2x\\\\[6pt]\n  \tg(x)&=(1-4x)^2+4x-12x^2\n  \\end{align*}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/7af0d76f-2456-4f4f-b013-298263bd0d16/images/fd20e89d-5914-4830-80d7-760bfde142fe/AA1163_a.JPEG)\n\n\n  Hence we can see that the intersection points tell us that $d=0$ and $d=\\tfrac{3}{2}$.\nAs $d\\neq0$ then the common difference is $d=\\answer{\\tfrac{3}{2}}$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Using the formula for the sum $n$ terms of an arithmetic progression with $d=\\tfrac{3}{2}$ we can write $S_n$ in terms of $u_1$ and $n$\n\n  $$\n  \\begin{align*}\n  \tS_n&=\\frac{n}{2}(2u_1+\\tfrac{3}{2}(n-1))\n  \\end{align*}\n  $$\n\n  We can find $u_1$ by using the 5$^{th}$ term\n\n  $$\n  \\begin{align*}\n  \t1&=u_1+4\\times \\tfrac{3}{2}\\\\[6pt]\n  \tu_1&=-5 \n  \\end{align*}\n  $$\n\n  Hence we can now write $S_n$ in terms of $n$\n\n  $$\n  \\begin{align*}\n  \tS_n&=\\frac{n}{2}(2(-5)+\\tfrac{3}{2}(n-1)) \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  We can use the G.D.C. to produce a table of values for $S_n$\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/7af0d76f-2456-4f4f-b013-298263bd0d16/images/1f2ec91d-68ae-4dc3-9c2d-8373af7e9d57/table_2.png)\n\n\n  We can see that for $S_n<300$ the largest value of $n$ is $\\answer{24}$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
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
    title: 'Question 37',
    content:
      'The fourth term of an arithmetic sequence is equal to $13$ and the sum of the first $10$ terms is $55$.\n\n- Find the common difference and the first term. <span class="marks">[4]</span>\n\n- Determine the greatest value of $n$ such that the $n$th term is positive. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_1 + (n-1)d$ with $n = 4$ and $u_4 = 13$, we have\n\n  $$\n  \\begin{align*}\n  u_4 &= u_1 + 3d \\\\[6pt]\n  13 &= u_1 + 3d \\tag*{\\textcolor{green}{[1]}}\n  \\end{align*}\n  $$\n\n  Using the sum of $n$ terms formula $S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n=10$ and $S_{10}=55$, we get\n\n  $$\n  \\begin{align*}\n  S_{10} &= \\dfrac{10}{2}(2u_1 + 9d) \\\\[6pt]\n  55 &= 5(2u_1 + 9d) \\\\[6pt]\n  11 &= 2u_1 + 9d \\tag*{\\textcolor{green}{[2]}}\n  \\end{align*} \n  $$\n\n  Solving the system formed by equations [1] and [2] we have\n\n  $$\n  \\begin{align*}\n  2u_1 + 6d &= 26 \\hspace{3em} \\text{(equation \\textcolor{green}{[1]} $\\times$ 2)} \\tag*{\\textcolor{green}{[3]}}\\\\[6pt]\n  2u_1 + 9d &= 11 \\tag*{\\textcolor{green}{[4]}}\\\\[6pt]\n  3d &= -15 \\hspace{2.5em}\\text{(equation \\textcolor{green}{[4]} - equation \\textcolor{green}{[3]})}\\\\[6pt]\n  &\\hspace{-0.8em}\\answer{d = -5}\n  \\end{align*}\n  $$\n\n  Hence we obtain\n\n  $$\n  \\begin{align*}\n  u_1 &= 13-3d \\\\[6pt]\n  &= 13 - 3(-5) \\hspace{1.5em}  \\\\[6pt]\n  &\\hspace{-1.2em}\\answer{u_1 = 28}\n  \\end{align*}\n  $$\n\n- We must have $u_n > 0$. Using the $n$th term formula with $u_1=28$ and $d=-5$, we have\n\n  $$\n  \\begin{align*}\n  u_n &> 0 \\\\[6pt]\n  u_1 + (n-1)d &> 0 \\\\[6pt]\n  28 - 5(n-1) &> 0 \\\\[6pt]\n  28 - 5n + 5 &> 0 \\\\[6pt]\n  33 &> 5n \\\\[6pt]\n  n &< \\dfrac{33}{5}\n  \\end{align*}\n  $$\n\n  $n$ must be an integer, and the greatest integer less than $\\dfrac{33}{5}$ is $6$.\n  Hence, the greatest value of $n$ such that $u_n$ is positive is $\\answer{n=6}$.\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
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
      'The first three terms of a geometric sequence are $u_1 = 0.4$,\n$u_2 = 0.6$, $u_3 = 0.9$.\n\n- Find the value of the common ratio, $r$. <span class="marks">[2]</span>\n\n- Find the sum of the first ten terms in the sequence. <span class="marks">[2]</span>\n\n- Find the greatest value of $n$ such that $S_n < 650$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The value of $r$ is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n  &= \\dfrac{0.6}{0.4} \\\\[13pt]\n  &\\answer{= 1.5}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{u_1(r^n-1)}{r-1}$\nwith $n=10$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.6em} S_{10} &= \\dfrac{u_1(r^{10} - 1)}{r-1} \\\\[6pt]\n  &= \\dfrac{0.4(1.5^{10} - 1)}{1.5-1} \\\\[12pt]\n  &\\answer{\\approx 45.3}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  S_n &< 650 \\\\[8pt]\n  \\dfrac{u_1(r^n-1)}{r-1} &< 650 \\\\[4pt]\n  \\hspace{7.7em} \\dfrac{0.4(1.5^n-1)}{1.5-1} &< 650 \\\\[8pt]\n  0.8(1.5^n-1) &< 650 \\\\[13pt]\n  n &< 16.528 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence the greatest value of $n$ such that $S_n < 650$ is\n$\\answer{n=16}$\n',
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
      'In this question give all answers correct to the nearest whole\nnumber.\nA population of goats on an island starts at $232$. The population is\nexpected to increase by $15$ % each year.\n\n- Find the expected population size after:\n  \n  - $10$ years;\n  - $20$ years. <span class="marks">[4]</span>\n\n\n- Find the number of years it will take for the population to reach\n$15\\hspace{0.15em}000$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1d40d8e7-1cb0-4476-8de2-71edeb3bc4c3/images/506a639a-3110-402d-8a30-3b43c6e52d46/537894a1e06c34454736a91f01647c46ca2f4fa3.svg)\n\n\n  Hence the population size is expected to increase according to a\ngeometric sequence with the first term $u_1 = 232(1.15)$ and the\ncommon ratio $r = 1.15$.\n  \n  - Using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 10$,\nwe get\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.1em} u_{10} &= u_1r^{10-1} \\\\[6pt]\n    &= [232(1.15)](1.15)^{10-1} \\\\[7pt]\n    &\\answer{\\approx 939}\\end{aligned}\n    $$\n\n  - Using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 20$,\nwe get\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.1em} u_{20} &= u_1r^{20-1} \\\\[6pt]\n    &= [232(1.15)](1.15)^{20-1} \\\\[7pt]\n    &\\answer{\\approx 3797}\\end{aligned}\n    $$\n\n\n- Solving the equation $u_n = 15\\hspace{0.15em}000$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  u_1r^{n-1} &= 15\\hspace{0.15em}000 \\\\[6pt]\n  \\hspace{1.5em} [232(1.15)](1.15)^{n-1} &= 15\\hspace{0.15em}000 \\\\[7pt]\n  n &\\approx 29.8 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence it will take\n$\\answer{30 \\text{ years}}$\nfor the population of goats to reach $15\\hspace{0.15em}000$.\n',
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
      'On $1$st of January $2022$, Grace invests $\\$P$ in an account that pays\na nominal annual interest rate of $6$ %,\ncompounded quarterly.\nThe amount of money in Grace\'s account at the end of each year\nfollows a geometric sequence with common ratio, $\\alpha$.\n\n- Find the value of $\\alpha$, giving your answer to four significant\nfigures. <span class="marks">[3]</span>\n\n\nGrace makes no further deposits or withdrawals from the account.\n\n- Find the year in which the amount of money in Grace\'s\naccount will become triple the amount she invested. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b887a82-9da2-4fe2-8a9d-772ad6e6ed06/images/29ee6f6c-7ee9-403d-9ac0-a7565263bc54/98fa6420aaf44673cb775b3bfb7054ff59483e48.svg)\n\n\n  Hence, using the compound interest formula, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  P\\alpha &= P\\bigg(1 + \\dfrac{6}{100\\times4}\\bigg)^{4\\times 1}\\end{aligned}\n  $$\n\n  Hence the value of $\\alpha$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} \\alpha &= \\bigg(1 + \\dfrac{6}{400}\\bigg)^4 \\\\[9pt]\n  &\\answer{\\approx 1.061}\\end{aligned}\n  $$\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b887a82-9da2-4fe2-8a9d-772ad6e6ed06/images/64870b75-4c23-4253-833a-a9572d00dfd1/22a91089c8626c046d977bf7f58b143ef817f639.svg)\n\n\n  Hence, using the compound interest formula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{6em} 3P &= P\\bigg(1 + \\dfrac{6}{100\\times4}\\bigg)^{4\\times n} \\\\[5pt]\n  3 &= \\bigg(1 + \\dfrac{6}{400}\\bigg)^{4n} \\\\[12pt]\n  n &\\approx 18.4 \\text{ years} \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence Grace will have triple the amount she invested during\n$\\answer{2040}$\n',
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
      'Jack rides his bike to work each morning. During the first minute, he\ntravels $160$ metres. In each subsequent minute, he travels\n$80$ % of the distance travelled during the\nprevious minute.\nThe distance from his home to work is $750$ metres. Jack leaves his\nhouse at $8$:$30$ am and must be at work at\n$8$:$40$ am.\nWill Jack arrive to work on time? Justify your answer.',
    markScheme:
      'We have a geometric sequence with the first term $u_1 = 160$ and the\ncommon ratio $r = 0.8$.\nIf we use the sum of $n$ terms formula $S_n = \\dfrac{u_1(1-r^n)}{1-r}$\nwith $n=10$, we get\n\n$$\n\\begin{aligned}\nS_{10} &= \\dfrac{u_1(1-r^{10})}{1-r} \\\\[6pt]\n&= \\dfrac{160(1-0.8^{10})}{1-0.8} \\\\[12pt]\n&\\approx 714\\end{aligned}\n$$\n\n$\\answer{\\text{Jack only travels \\(714\\) metres by \\(8\\):\\(40\\)\\hspace{0.2em}am. Therefore, Jack \\textbf{will not} arrive to work on time.}}$',
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
      'In an arithmetic sequence, the third term is $41$ and the ninth term is\n$23$.\n\n- Find the common difference. <span class="marks">[2]</span>\n\n- Find the first term. <span class="marks">[2]</span>\n\n- Find the smallest value of $n$ such that $S_n < 0$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- We have $u_3 = 41$ and $u_9 = 23$.\nHence, using the $n$th term formula $u_n = u_3 + (n-3)d$ with\n$n = 9$, we get\n\n  $$\n  \\begin{aligned}\n  u_9 &= u_3 + (9-3)d \\\\[6pt]\n  23 &= 41 + (9-3)d \\hspace{1.8em} \\\\[6pt]\n  -18 &= 6d\\end{aligned}\n  $$\n\n\n  $$\n  \\answer{d = -3} \\hspace{5em}\n  $$\n\n- Using the $n$th term formula $u_n = u_3 + (n-3)d$ with $n = 1$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{0.5em} u_1 &= u_3 + (1-3)d \\\\[6pt]\n  &= 41 + (1-3)(-3) \\\\[6pt]\n  &\\answer{= 47}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  S_n &< 0 \\\\[10pt]\n  \\dfrac{n}{2}(2u_1 + (n-1)d) &< 0 \\\\[6pt]\n  \\hspace{0.7em} \\dfrac{n}{2}(2(47) + (n-1)(-3)) &< 0 \\\\[6pt]\n  \\dfrac{n}{2}(97-3n) &< 0 \\\\[8pt]\n  32.333 &< n \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence the smallest value of $n$ such that $S_n < 0$ is\n$\\answer{n=33}$\n',
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
      'The sum of the first three terms of a geometric sequence is $92.5$, and\nthe sum of the infinite sequence is $160$. Find the common ratio.',
    markScheme:
      'We have\n\n$$\n\\begin{aligned}\nS_3 &= 92.5 \\hspace{4.8em} \\\\[6pt]\n\\dfrac{u_1(1-r^3)}{1-r} &= 92.5 \\end{aligned}\n$$\n\nand\n\n$$\n\\begin{aligned}\nS_{\\infty} &= 160 \\\\[6pt]\n\\dfrac{u_1}{1-r} &= 160 \\\\[5pt]\nu_1 &= 160(1-r)\\end{aligned}\n$$\n\nHence we get\n\n$$\n\\begin{aligned}\n\\dfrac{u_1(1-r^3)}{1-r} &= 92.5 \\hspace{8.5em} \\\\[6pt]\n\\dfrac{160(1-r)(1-r^3)}{1-r} &= 92.5 \\hspace{8.5em} \\\\[12pt]\n160(1-r^3) &= 92.5 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{9.3em} \\answer{r = 0.75} \\hspace{3em} [\\text{by using G.D.C.}]\n$$\n',
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
      'The first three terms of a geometric sequence are $u_1 = 0.8$,\n$u_2 = 2.4$, $u_3 = 7.2$.\n\n- Find the value of the common ratio, $r$. <span class="marks">[2]</span>\n\n- Find the value of $S_8$. <span class="marks">[2]</span>\n\n- Find the least value of $n$ such that $S_n > 35\\hspace{0.15em}000$.\n<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The value of $r$ is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n  &= \\dfrac{2.4}{0.8} \\\\[13pt]\n  &\\answer{= 3}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula $S_n = \\dfrac{u_1(r^n-1)}{r-1}$\nwith $n=8$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.8em} S_8 &= \\dfrac{u_1(r^8 - 1)}{r-1} \\\\[6pt]\n  &= \\dfrac{0.8(3^8 - 1)}{3-1} \\\\[12pt]\n  &\\answer{= 2624}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  S_n &> 35\\hspace{0.15em}000 \\\\[8pt]\n  \\dfrac{u_1(r^n-1)}{r-1} &> 35\\hspace{0.15em}000 \\\\[4pt]\n  \\hspace{8.1em} \\dfrac{0.8(3^n-1)}{3-1} &> 35\\hspace{0.15em}000 \\\\[8pt]\n  0.4(3^n-1) &> 35\\hspace{0.15em}000 \\\\[13pt]\n  n &> 10.358 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence the least value of $n$ such that $S_n > 35\\hspace{0.15em}000$\nis  $\\answer{n=11}$\n',
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
    title: 'Question 45',
    content:
      'Sarah walks to school each morning. During the first minute, she travels\n$130$ $\\text{metres}$. In each subsequent minute, she travels\n$5$ metres less than the distance she travelled during the previous\nminute. The distance from her home to school is $950$ metres. Sarah\nleaves her house at $8$:$00$ am and must be at\nschool by $8$:$10$ am.\nWill Sarah arrive to school on time? Justify your answer.',
    markScheme:
      'We have an arithmetic sequence with the first term $u_1 = 130$ and the\ncommon difference $d = -5$.\nIf we attempt to solve $S_n = 950$, we get\n\n$$\n\\begin{aligned}\nS_n &= 950 \\\\[9pt]\n\\dfrac{n}{2}(2(130)+(n-1)(-5)) &= 950 \\\\[6pt]\n\\dfrac{n}{2}(265-5n) &= 950 \\\\[8pt]\nn &\\approx 8.55 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n$$\n\n$\\answer{\\text{Hence it takes approximately \\(8.55\\) minutes for Sarah to travel \\(950\\) metres.}}$\n$\\answer{\\text{Therefore, Sarah \\textbf{will} arrive at school on time.}}$',
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
      'In a geometric sequence, $u_2 = 6$, $u_5 = 20.25$.\n\n- Find the common ratio, $r$. <span class="marks">[2]</span>\n\n- Find $u_1$. <span class="marks">[2]</span>\n\n- Find the greatest value of $n$ such that $u_n < 200$. <span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- Using the $n$th term formula $u_n = u_2r^{n-2}$ with $n = 5$, we get\n\n  $$\n  \\begin{aligned}\n  u_5 &= u_2r^{5-2} \\hspace{3em} \\\\[6pt]\n  20.25 &= 6r^{5-2} \\\\[6pt]\n  r^3 &= 3.375\\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{7.75em} \\answer{r = 1.5} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n- Using the $n$th term formula $u_n = u_2r^{n-2}$ with $n = 1$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  u_1 &= u_2r^{1-2} \\\\[6pt]\n  &= 6(1.5)^{1-2}  \\hspace{0.7em} \\\\[6pt]\n  &\\answer{= 4}\\end{aligned}\n  $$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.7em} u_n &< 200 \\\\[6pt]\n  u_1r^{n-1} &< 200 \\\\[6pt]\n  4(1.5)^{n-1} &< 200 \\\\[6pt]\n  n &< 10.648 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence the greatest value of $n$ such that $u_n < 200$ is\n$\\answer{n=10}$\n',
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
      'Peter is playing on a swing during a school lunch break. The height of\nthe first swing was $2$ m and every subsequent\nswing was $84$ % of the previous one. Peter\'s\nfriend, Ronald, gives him a push whenever the height falls below\n$1$ m.\n\n- Find the height of the third swing. <span class="marks">[2]</span>\n\n- Find the number of swings before Ronald gives Peter a push.\n<span class="marks">[2]</span>\n\n- Calculate the total height of swings if Peter is left to swing until\ncoming\nto rest. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have a geometric sequence with the first term $u_1 = 2$ and the\ncommon ratio $r = 0.84$.\n  Hence, using the $n$th term formula $u_n = u_1r^{n-1}$ with $n = 3$,\nwe find\n\n  $$\n  \\begin{aligned}\n  u_3 &= u_1r^{3-1} \\\\[6pt]\n  &= 2\\hspace{0.05em}(0.84)^{3-1} \\\\[7pt]\n  &\\answer{\\approx 1.41 \\text{ m}}\\end{aligned}\n  $$\n\n- Solving the inequality $u_n < 1$ for $n$, we have\n\n  $$\n  \\begin{aligned}\n  u_1r^{n-1} &< 1 \\\\[6pt]\n  \\hspace{3em} 2\\hspace{0.05em}(0.84)^{n-1} &< 1 \\\\[7pt]\n  4.98 &< n \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n  Hence\nthe swing needs a push after\n$\\answer{5}$\nswings.\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$, we get\n\n  $$\n  \\begin{aligned}\n  S_{\\infty} &= \\dfrac{2}{1-0.84} \\hspace{1.3em} \\\\[12pt]\n  &\\answer{= 12.5 \\text{ m}}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 48',
    content:
      'The sum of an infinite geometric sequence is $27$. The second term of\nthe sequence is $6$. Find the possible values of $r$.',
    markScheme:
      'We have $S_{\\infty} = 27$ and $u_2 = 6$.\nUsing the $n$th term formula $u_n = u_1r^{n-1}$ with $n=2$, we have\n\n$$\n\\begin{aligned}\nu_2 &= u_1r^{2-1} \\\\[12pt]\n6 &= u_1r \\\\[6pt]\nu_1 &= \\dfrac{6}{r}\\end{aligned}\n$$\n\nHence, using the sum of an infinite\ngeometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$, we get\n\n$$\n\\begin{aligned}\n27 &= \\dfrac{6/r}{1-r} \\\\[5pt] \n27-27r &= \\dfrac{6}{r} \\\\[10pt]\n9r - 9r^2 &= 2 \\\\[10pt]\n0 &= 9r^2 - 9r + 2 \\end{aligned}\n$$\n\nUsing the quadratic formula to find the roots of the equation, we\nobtain\n\n$$\n\\begin{aligned}\n\\hspace{9.6em} r &= \\dfrac{-(-9)\\pm\\sqrt{(-9)^2 - 4(9)(2)}}{2(9)} \\\\[9pt]\nr &= \\dfrac{6}{18},\\hspace{0.25em}\\dfrac{12}{18} \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\answer{r = \\dfrac{1}{3},\\hspace{0.25em}\\dfrac{2}{3}} \\hspace{0.3em}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 49',
    content:
      'Let $u_n = 5n-1$, for $n \\in \\mathbb{Z}^+$.\n\n- \n  - Using sigma notation, write down an expression for\n$u_1 + u_2 + u_3 + \\dots + u_{10}$.\n  - Find the value of the sum from part (a) (i). <span class="marks">[4]</span>\n\n\n\nA geometric sequence is defined by $v_n = 5\\times 2^{n-1}$, for\n$n \\in \\mathbb{Z}^+$.\n\n- Find the value of the sum of the geometric series $\\displaystyle \\sum_{k = 1}^6 \\hspace{0.1em}v_k$.<span class="marks">[2]</span>  \n',
    markScheme:
      '\n- \n  - Using sigma notation, we have\n\n    $$\n    \\begin{aligned}\n    u_1 + u_2 + u_3 + \\dots + u_{10} &= \\sum_{k=1}^{10} u_k \\\\[6pt]\n    &\\answer{= \\displaystyle \\sum_{k=1}^{10} (5k-1)} \\hspace{8em}\\end{aligned}\n    $$\n\n  - If we rewrite $u_n = 5n-1$ in the form $u_n = u_1 + (n-1)d$, we\nhave\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.5em} u_n &= 4 + (n-1)(5)\\end{aligned}\n    $$\n\n    Hence $u_n$ is\nan arithmetic sequence with the first term $u_1 = 4$ and\nthe common difference $d = 5$.\n    Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with\n$n=10$\n    we find\n\n    $$\n    \\begin{aligned}\n    \\sum_{k=1}^{10} (5k-1) &= S_{10} \\\\[3pt]\n    &= \\dfrac{10}{2}(2u_1 + (10-1)d) \\\\[9pt]\n    &= \\dfrac{10}{2}(2(4) + (10-1)(5)) \\\\[14pt]\n    &\\answer{= 265}\\end{aligned}\n    $$\n\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{8.3em} v_1 &= 5 \\hspace{3em} [\\text{the first term}] \\\\[9pt]\n  r &= 2 \\hspace{3em} [\\text{the common ratio}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{v_1(r^n-1)}{r-1}$ with\n$n=6$, we get\n\n  $$\n  \\begin{aligned}\n  \\sum_{k = 1}^6 5\\times 2^{k-1} &= S_6 \\\\[3pt]\n  &= \\dfrac{v_1(r^6-1)}{r-1} \\hspace{3.3em}  \\\\[9pt]\n  &= \\dfrac{5\\hspace{0.05em}(2^6-1)}{2-1} \\\\[15pt]\n  &\\answer{= 315}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 50',
    content:
      'The sum of the first three terms of a geometric sequence is $81.3$, and\nthe sum of the infinite sequence is $300$. Find the common ratio.',
    markScheme:
      'We have\n\n$$\n\\begin{aligned}\nS_3 &= 81.3 \\hspace{4.8em} \\\\[6pt]\n\\dfrac{u_1(1-r^3)}{1-r} &= 81.3 \\end{aligned}\n$$\n\nand\n\n$$\n\\begin{aligned}\nS_{\\infty} &= 300 \\\\[6pt]\n\\dfrac{u_1}{1-r} &= 300 \\\\[5pt]\nu_1 &= 300(1-r)\\end{aligned}\n$$\n\nHence we get\n\n$$\n\\begin{aligned}\n\\dfrac{u_1(1-r^3)}{1-r} &= 81.3 \\hspace{8.5em} \\\\[6pt]\n\\dfrac{300(1-r)(1-r^3)}{1-r} &= 81.3 \\hspace{8.5em} \\\\[12pt]\n300(1-r^3) &= 81.3 \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\hspace{9.3em} \\answer{r = 0.9} \\hspace{3em} [\\text{by using G.D.C.}]\n$$\n',
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
    title: 'Question 51',
    content:
      'The first term and the common ratio of a geometric series are denoted,\nrespectively, by $u_1$ and $r$, where $u_1,r \\in \\mathbb{Q}$. Given that\nthe fourth term is $64$ and the sum to infinity is $625$, find the value\nof $u_1$ and the value of $r$.',
    markScheme:
      'We have\n\n$$\n\\begin{aligned}\nu_4 &= 64 \\hspace{4em} \\\\[6pt]\nu_1r^{4-1} &= 64 \\\\[6pt]\nu_1r^3 &= 64\\end{aligned}\n$$\n\nand\n\n$$\n\\begin{aligned}\nS_{\\infty} &= 625 \\\\[6pt]\n\\dfrac{u_1}{1-r} &= 625 \\\\[5pt]\nu_1 &= 625(1-r)\\end{aligned}\n$$\n\nHence we get\n\n$$\n\\begin{aligned}\nu_1r^3 &= 64 \\\\[6pt]\n625(1-r)r^3 &= 64  \\hspace{6.45em}\\end{aligned}\n$$\n\n\n$$\n\\hspace{14.4em}\\answer{r = 0.8} \\hspace{2em} [\\text{by using G.D.C.}] \\hspace{0.5em} [\\text{since $r\\in \\mathbb{Q}$}]\n$$\n\nand\n\n$$\n\\begin{aligned}\n\\hspace{2.15em} u_1 &= 625(1-r) \\\\[7pt]\n&= 625(1-0.8) \\\\[7pt]\n&\\answer{= 125}\\end{aligned}\n$$\n',
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
    title: 'Question 52',
    content:
      'The seventh term of an arithmetic sequence is equal to $1$ and the sum\nof the first $16$ terms is $52$.\nFind the common difference and the first term.',
    markScheme:
      'Using the $n$th term formula $u_n = u_7 + (n-7)d$ with $n = 1$ and\n$n = 16$, we have\n\n$$\n\\begin{aligned}\nu_1 &= u_7 + (1-7)d \\\\[6pt]\n&= 1-6d  \\end{aligned}\n$$\n\nand\n\n$$\n\\begin{aligned}\nu_{16} &= u_7 + (16-7)d \\\\[6pt]\n&= 1+9d  \\end{aligned}\n$$\n\nHence, using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(u_1 + u_n)$ with $n=16$, we get\n\n$$\n\\begin{aligned}\n\\hspace{4em}  S_{16} &= \\dfrac{16}{2}(u_1 + u_{16}) \\\\[6pt]\n52 &= \\dfrac{16}{2}((1-6d) + (1+9d)) \\\\[6pt]\n52 &= \\dfrac{16}{2}(2 + 3d) \\\\[10pt]\n52 &= 16 + 24d \\\\[14pt]\n36 &= 24d \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\answer{d = 1.5} \\hspace{4em}\n$$\n\nHence\nwe obtain\n\n$$\n\\begin{aligned}\nu_1 &= u_7-6d \\\\[6pt]\n&= 1 - 6(1.5) \\hspace{1.5em}  \\\\[6pt]\n&\\answer{= -8}\\end{aligned}\n$$\n',
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
    title: 'Question 53',
    content:
      'A geometric sequence, with common ratio $r$, has a first term of $81$. The sum of the first four terms of the sequence is $195$.\n\n- \n  - Find $r$.\n  - Hence, find $G_n$, the sum of the first $n$ terms of the geometric sequence. <span class="marks">[3]</span>\n\n\n\nThe first three terms of an arithmetic sequence, with a common difference of $d$, are $\\log 96, \\log 48$ and $\\log24$.\n\n- Find $d$ in the form $p\\log q$ where $p, q \\in \\mathbb{Z}$.<span class="marks">[2]</span>  \n\n$A_n$ is the sum of the first $n$ terms of the arithmetic sequence.\n\n- Show that $A_n=\\log{\\left(3^n\\times\\left(\\sqrt{2}\\right)^{11n-n^2}\\right)}$.<span class="marks">[5]</span>\n\n- Find the maximum value of $n$ such that $\\left|G_n\\right|>\\left|A_n\\right|$.<span class="marks">[3]</span>\n\n',
    markScheme:
      "\n- \n  - From the given information we know $u_1=81$ and $S_4=195$.\n    Using the formula for the sum of a geometric sequence we can form an equation and then solve for $r$.\n\n    $$\n    \\begin{align*}\n        S_n&=\\frac{u_1(1-r^n)}{1-r}\\\\[12pt]\n        S_4&=\\frac{u_1(1-r^4)}{1-r}\\\\[12pt]\n        195&=\\frac{81(1-r^4)}{1-r}\\tag*{\\textbf{(M1)}}\n    \\end{align*}\n    $$\n\n    Using a G.D.C. we get\n\n    $$\n    \\begin{align*}\n        r&=0.6666...\\\\[6pt]\n        r&=\\answer{\\dfrac{2}{3}}\\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Using the answer from (a) (i) and the formula for the sum of the first $n$ terms of a geometric series we can write the general term for $G_n$ as\n\n    $$\n    \\begin{align*}\n        G_n&=\\frac{81(1-(\\frac{2}{3})^n)}{1-\\frac{2}{3}}\\\\[12pt]\n        &=\\frac{81(1-(\\frac{2}{3})^n)}{\\frac{1}{3}}\\\\[12pt]\n        &=81\\left(1-\\left(\\tfrac{2}{3}\\right)^n\\right)\\times3\\\\[6pt]\n        &=\\answer{243\\left(1-\\left(\\tfrac{2}{3}\\right)^n\\right)}\\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- In an arithmetic sequence, there is a common difference between terms.\n\n  $$\n  \\begin{align*}\n  d&=u_2 - u_1\n  \\end{align*}\n  $$\n\n  Substituting the given values for $u_1$ and $u_2$ we get\n\n  $$\n  \\begin{align*}\n  d&=\\log 48-\\log96\\tag*{\\textbf{(M1)}}\\\\[6pt]\n  d&=\\log\\left(\\frac{48}{96}\\right)\\\\[12pt]\n  d&=\\log \\frac{1}{2}\\\\[12pt]\n  d&=\\log 2^{-1}\\\\[6pt]\n  d&=\\answer{-\\log 2}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- The formula for sum of an arithmetic sequence is\n\n  $$\n  \\begin{align*}\n      S_n&=\\frac{n}{2}(2u_1+(n-1)d)\n  \\end{align*}\n  $$\n\n  Substituting $u_1=\\log 96$ and $d=-\\log 2$\n\n  $$\n  \\begin{align*}\n      A_n&=\\frac{n}{2}(2\\log 96+(n-1)(-\\log 2))\\tag*{\\textbf{(M1)}}\\\\[6pt]\n      &=\\frac{n}{2}(\\log96^2-(n-1)\\log 2)\n  \\end{align*}\n  $$\n\n  Applying logarithm rules we get\n\n  $$\n  \\begin{align*}\n  \\tag*{\\textbf{(M1)}}\\\\\n  &=\\frac{n}{2}(\\log96^2-\\log2^{(n-1)})\\\\[12pt]\n  &=\\frac{n}{2}\\log \\frac{96^2}{2^{(n-1)}}\\\\[12pt]\n  &=\\log\\left(\\frac{96^2}{2^{(n-1)}}\\right)^{\\frac{n}{2}}\\\\[12pt]\n  &=\\log\\sqrt{\\left(\\frac{96^2}{2^{(n-1)}}\\right)^n}\\tag*{\\textbf{A1}}\\\\[12pt]\n  &=\\log\\left(\\frac{\\sqrt{96^2}}{\\sqrt{2^{(n-1)}}}\\right)^n\\\\[12pt]\n  &=\\log{\\left(\\frac{96^n}{(\\sqrt{2})^{n^2-n}}\\right)}\n  \\end{align*}\n  $$\n\n  Looking at the form of the answer we can attempt to rewrite the denominator using by negating its exponent\n\n  $$\n  \\begin{align*}\n  &=\\log(96^n\\times(\\sqrt{2})^{n-n^2})\n  \\end{align*}\n  $$\n\n  Let's rewrite $96$ as a product of prime factors\n\n  $$\n  \\begin{align*}\n  &=\\log((2^5\\times3)^n\\times(\\sqrt{2})^{n-n^2})\\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n  Then we'll rewrite $2^5$ as a base of $\\sqrt{2}$\n\n  $$\n  \\begin{align*}\n  &=\\log(((\\sqrt{2})^{10}\\times3)^n\\times(\\sqrt{2})^{n-n^2})\n  \\end{align*}\n  $$\n\n  Now we can distribute the power of $n$ and then use exponent laws again to simplify to the required form.\n\n  $$\n  \\begin{align*}\n  &=\\log((\\sqrt{2})^{10n}\\times3^n\\times(\\sqrt{2})^{n-n^2})\\tag*{\\textbf{A1}}\\\\[6pt]\n  &=\\log(3^n\\times(\\sqrt{2})^{10n+n-n^2})\\\\[6pt]\n  &=\\answer{\\log(3^n\\times(\\sqrt{2})^{11n-n^2})}\\hspace{3em}\\text{as required.}\n  \\end{align*}\n  $$\n\n- Using the functions from (a) (ii) and (c) we can form an inequality which we can solve for $n$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{red}{\\left|243\\left(1-\\left(\\tfrac{2}{3}\\right)^n\\right)\\right|}>\\textcolor{blue}{\\left|\\log(3^n\\times(\\sqrt{2})^{11n-n^2})\\right|}\\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n  We can sketch the $\\textcolor{red}{\\text{L.H.S.}}$ and the $\\textcolor{blue}{\\text{R.H.S.}}$ on a G.D.C. to get\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/e23a1ae5-5d5c-482f-938e-73e0ce7e1e6c/images/b8df9ab9-e17d-4209-a669-3c2f3e7c07be/AA1275.JPEG)\n\n\n  Hence when\n\n  $$\n  \\begin{align*}\n      n<47.88...\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  then $|G_n|>|A_n|$.\n  As $n$ represents the term value, we therefore round down to the nearest integer value.\n  Hence $\\answer{n=47}$.\n\n  $$\n  \\begin{align*}\n   \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n",
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
    title: 'Question 54',
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
    type: 'SAQ',
    title: 'Question 55',
    content:
      'The third term of an arithmetic sequence is equal to $7$ and the sum of\nthe first $8$ terms is $20$.\nFind the common difference and the first term.',
    markScheme:
      'Using the $n$th term formula $u_n = u_3 + (n-3)d$ with $n = 1$ and\n$n = 8$, we have\n\n$$\n\\begin{aligned}\nu_1 &= u_3 + (1-3)d \\\\[6pt]\n&= 7-2d  \\end{aligned}\n$$\n\nand\n\n$$\n\\begin{aligned}\nu_8 &= u_3 + (8-3)d \\\\[6pt]\n&= 7+5d  \\end{aligned}\n$$\n\nHence, using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(u_1 + u_n)$ with $n=8$, we get\n\n$$\n\\begin{aligned}\n\\hspace{4em}  S_8 &= \\dfrac{8}{2}(u_1 + u_8) \\\\[6pt]\n20 &= \\dfrac{8}{2}((7-2d) + (7+5d)) \\\\[6pt]\n20 &= \\dfrac{8}{2}(14 + 3d) \\\\[10pt]\n20 &= 56 + 12d \\\\[14pt]\n-36 &= 12d \\\\\n\\end{aligned}\n$$\n\n\n$$\n\\answer{d = -3} \\hspace{4em}\n$$\n\nHence\nwe obtain\n\n$$\n\\begin{aligned}\nu_1 &= u_3-2d \\\\[6pt]\n&= 7 - 2(-3) \\hspace{1.5em}  \\\\[6pt]\n&\\answer{= 13}\\end{aligned}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
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
      'The first three terms of a geometric sequence are $\\ln x^9$, $\\ln x^3$,\n$\\ln x$, for $x > 0$.\n\n- Find the common ratio. <span class="marks">[3]</span>\n\n- Hence, solve $\\displaystyle \\sum_{k=1}^\\infty 3^{3-k}\\ln x = 27$.\n<span class="marks">[5]</span>\n\n',
    markScheme:
      '\n- We have $u_1 = 9\\ln x$ and $u_2 = 3\\ln x$.\nHence the common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n  &= \\dfrac{3\\ln x}{9\\ln x} \\hspace{2.9em} \\\\[6pt]\n  &\\answer{= \\dfrac{1}{3}}\\end{aligned}\n  $$\n\n- The $n$th term of the geometric sequence is\n\n  $$\n  \\begin{aligned}\n  u_n &= u_1r^{n-1} \\\\[6pt]\n  &= 9\\ln x\\bigg(\\dfrac{1}{3}\\bigg)^{n-1} \\\\[8pt]\n  &= 3^{3-n}\\ln x\\end{aligned}\n  $$\n\n  Hence we have\n\n  $$\n  \\begin{aligned}\n  S_{\\infty} &= \\sum_{k=1}^\\infty 3^{3-k}\\ln x \\hspace{1em}\\end{aligned}\n  $$\n\n  Hence, solving the equation $S_{\\infty} = 27$ for $x$, we get\n\n  $$\n  \\begin{aligned}\n  \\dfrac{u_1}{1-r} &= 27 \\hspace{2.8em} \\\\[6pt]\n  \\dfrac{9\\ln x}{1 - 1/3} &= 27 \\\\[6pt]\n  \\dfrac{27\\ln x}{3-1} &= 27 \\\\[12pt]\n  \\ln x &= 2 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{x = e^2}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
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
      'Consider a geometric sequence with common ratio $r$ such that $0 < r < 1$.\n\n- Show that $u_n - u_{n+1} = u_n(1-r)$.<span class="marks">[2]</span>  \n\nA geometric sequence has a first term of 150 and a second term of 120.\n\n- Find the smallest value of $n$ such that $u_n - u_{n+1} < 1$.<span class="marks">[3]</span>  \n',
    markScheme:
      '\n- Using the formula for the $n$th term of a geometric sequence, we have\n\n  $$\n  \\begin{align*}\n  u_n - u_{n+1} &= u_1r^{n-1} - u_1r^{n} \\\\[8pt]\n  &= u_1r^{n-1}(1-r) \\\\[8pt]\n  &\\hspace{-4.5em}\\tcbhighmath{u_n - u_{n+1} = u_n(1-r)}\n  \\end{align*}\n  $$\n\n- For a geometric sequence, we have $r=\\dfrac{u_2}{u_1}$. Therefore $r = \\dfrac{120}{150}$.\n  Hence $u_1 = 150$ and $r=0.8$.\n  We are solving the inequality $u_n - u_{n+1} < 1$. Using our result from part (a), we have\n\n  $$\n  \\begin{align*}\n  u_n(1-r) &< 1 \\\\[8pt]\n  u_n(1-0.8) &< 1 \\\\[8pt]\n  150(0.8)^{n-1}(0.2) &< 1 \\\\[8pt]\n  150(0.8)^{n-1} &< 5\n  \\end{align*}\n  $$\n\n  Sketching the graphs of $y=150(0.8)^{x-1}$ and $y=5$ on the G.D.C. we look for the smallest integer value of $x$ for which $y<5\\,$:\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/99e5ce75-c1fd-4a36-8970-d0333d3c1521/images/91718d41-9bef-4be6-bce0-ddeb212c3f6a/aa986.PNG)\n\n\n  The smallest integer greater than $16.2$ is $17$. Hence\n  $\\boxed{\\text{The smallest value of } n \\text{ such that } u_n - u_{n+1} < 1 \\text{ is } n = 17.}$\n',
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
    title: 'Question 58',
    content:
      'The first three terms of an infinite sequence, in order, are\n$2\\ln x,\\,\\, q\\ln x,\\,\\, \\ln \\sqrt{x}\\,\\,\\,  \\text{ where $\\ x > 0$.} $\nFirst consider the case in which the series is geometric.\n\n- \n  - Find the possible values of $q$.\n  - Hence or otherwise, show that the series is convergent. <span class="marks">[3]</span>\n\n\n- Given that $q>0$ and $S_\\infty=8\\ln{3}$, find the value of $x$. <span class="marks">[3]</span>\n\n\nNow suppose that the series is arithmetic.\n\n- \n  - Show that $q=\\dfrac{5}{4}$.\n  - Write down the common difference in the form $m\\ln x$, where $m \\in \\mathbb{Q}$. <span class="marks">[4]</span>\n\n\n- Given that the sum of the first $n$ terms of the sequence is $\\ln \\sqrt{x^5}$, find the value of $n$. <span class="marks">[8]</span>\n\n',
    markScheme:
      '\n- \n  - Given that the sequence is geometric, we have for the common ratio\n\n    $$\n    \\begin{align*}\n    r &= \\dfrac{u_2}{u_1} \\\\[8pt]\n    &= \\dfrac{q\\ln x}{2\\ln x} \\\\[8pt]\n    &= \\dfrac{q}{2}\n    \\end{align*}\n    $$\n\n    Similarly,\n\n    $$\n    \\begin{align*}\n    r &= \\dfrac{u_3}{u_2} \\\\[8pt]\n    \\dfrac{q}{2} &= \\dfrac{\\ln \\sqrt{x}}{q\\ln x} \\\\[8pt]\n    \\dfrac{q}{2} &= \\dfrac{\\frac{1}{2}\\ln {x}}{q\\ln x} \\\\[8pt]\n    \\dfrac{q}{2} &= \\dfrac{1}{2q} \\\\[8pt]\n    q^2 &= 1 \\\\[8pt]\n    &\\hspace{-0.49em}\\tcbhighmath{q= \\pm 1}\n    \\end{align*}\n    $$\n\n  - Given that $r=\\dfrac{q}{2}$, and $q= \\pm 1$, we have $r = \\pm \\dfrac{1}{2}$. Hence $|r| < 1$.\n    $\\answer{\\text{In both cases the series converges.}}$\n\n- Given that $q>0$, $r = \\dfrac{1}{2}$.\n  Using the formula for the sum of an infinite geometric sequence, we~get\n\n  $$\n  \\begin{align*}\n  S_{\\infty} &= \\dfrac{u_1}{1-r} \\\\[10pt]\n  8 \\ln 3 &= \\dfrac{2\\ln x}{1-\\frac{1}{2}} \\\\[10pt]\n  8 \\ln 3 &= \\dfrac{2\\ln x}{\\frac{1}{2}} \\\\[10pt]\n  8 \\ln 3 &= 4\\ln x \\\\[10pt]\n  2\\ln 3 &= \\ln x \\\\[10pt]\n  \\ln 3^2 &= \\ln x \\\\[10pt]\n  \\ln 9 &= \\ln x \\\\[10pt]\n  &\\hspace{-0.54em}\\tcbhighmath{x = 9} \n  \\end{align*}\n  $$\n\n- \n  - First we find the common difference $d$ as follows\n\n    $$\n    \\begin{align*}\n    d &= u_2 - u_1\\\\[10pt]\n    d &= q\\ln x - 2\\ln x \\\\[10pt]\n    d &= (q-2)\\ln x\n    \\end{align*}\n    $$\n\n    Similarly,\n\n    $$\n    \\begin{align*}\n    d &= u_3 - u_2\\\\[10pt]\n    (q-2)\\ln x &= \\ln\\sqrt{x} - q\\ln x \\\\[8pt]\n    (q-2)\\ln x &= \\ln x^{1/2} - q\\ln x \\\\[8pt]\n    (q-2)\\ln x &=  \\dfrac{1}{2}\\ln x - q\\ln x \\\\[8pt]\n    (q-2)\\ln x &= \\bigg(\\dfrac{1}{2} - q\\bigg)\\ln x \\\\[8pt]\n    q-2 &= \\dfrac{1}{2}-q \\\\[8pt]\n    2q &= \\dfrac{1}{2} + 2 \\\\[8pt]\n    2q &= \\dfrac{5}{2} \\\\[8pt]\n    &\\hspace{-0.535em}\\tcbhighmath{q = \\dfrac{5}{4}}\n    \\end{align*}\n    $$\n\n  - Given that $d = (q-2)\\ln x$ and $q = \\dfrac{5}{4}$, we have\n\n    $$\n    \\begin{align*}\n    d &= \\left(\\dfrac{5}{4}-2\\right)\\ln x \\\\[10pt]\n    &\\hspace{-0.535em}\\tcbhighmath{d = -\\dfrac{3}{4}\\ln x}\n    \\end{align*}\n    $$\n\n\n- Using the formula for the sum of $n$ terms of an arithmetic sequence, we get\n\n  $$\n  \\begin{align*}\n  S_n &= \\dfrac{n}{2}(2u_1 + (n-1)d) \\\\[8pt]\n  \\ln \\sqrt{x^5} &= \\dfrac{n}{2}\\left(2\\hspace{0.1em}(2\\ln x) + (n-1)\\left(-\\dfrac{3}{4}\\ln x \\right)\\right) \\\\[8pt]\n  \\ln x^{5/2} &= \\dfrac{n}{2}\\left(\\left(4\\ln x + \\left(-\\dfrac{3}{4}\\right)(n-1)\\ln x\\right) \\right) \\\\[8pt]\n  \\dfrac{5}{2}\\ln x &= \\dfrac{n}{2}\\left(4 - \\dfrac{3(n-1)}{4}\\right)\\ln x \\\\[8pt]\n  5 &= n\\left(4 - \\dfrac{3(n-1)}{4}\\right) \\\\[8pt]\n  5 &= 4n - \\dfrac{3n(n-1)}{4} \\\\[8pt]\n  20 &= 16n - 3n(n-1) \\\\[8pt]\n  20 &= 16n - 3n^2 + 3n \\\\[8pt]\n  3n^2 -19n +20 &= 0 \\\\[8pt]\n  3n^2 -15n -4n +20 &= 0 \\\\[8pt]\n  3n(n-5) - 4(n-5) &= 0 \\\\[8pt]\n  (3n-4)(n-5) &= 0\n  \\end{align*}\n  $$\n\n  The solutions to the quadratic equation are $n=\\dfrac{4}{3}$ and $n=5$.\n  Since $n$ must be an integer, we have $\\answer{n = 5}$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '18',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 59',
    content:
      'The $1$st, $5$th and $13$th terms of an arithmetic sequence, with common\ndifference $d$, $d \\neq 0$, are the first three terms of a geometric\nsequence, with common ratio $r$, $r \\neq 1$. Given that the $1$st term\nof both sequences is $12$, find the value of $d$ and the value of $r$.',
    markScheme:
      'The $1$st, $5$th and $13$th terms of the arithmetic sequence are $12$,\n$12 + 4d$ and $12 + 12d$.\nThe first three terms of the geometric sequence are $12$, $12r$ and\n$12r^2$ .\nHence we have\n\n$$\n\\begin{aligned}\n12 + 4d &= 12r \\qref{(1)} \\hspace{2.7em} \\\\[6pt]\n12 + 12d &= 12r^2 \\qref{(2)}\\end{aligned}\n$$\n\nDividing the equation $(1)$\nby $4$ and the equation (2) by $12$, we have\n\n$$\n\\begin{aligned}\n3 + d &= 3r \\qref{(3)} \\hspace{1.7em} \\\\[6pt]\n1 + d &= r^2 \\qref{(4)}\\end{aligned}\n$$\n\nIf we subtract the equation $(4)$\nfrom the equation $(3)$ and solve the resulting\n$\\text{equation}$ for $r$, we get\n\n$$\n\\begin{aligned}\n(3 + d) - (1 + d) &= 3r - r^2 \\\\[6pt]\n2 &= 3r - r^2 \\hspace{4.55em} \\\\[6pt]\nr^2 - 3r + 2 &= 0 \\\\[7pt]\n(r - 1)(r - 2) &= 0\\end{aligned}\n$$\n\n\n$$\n\\hspace{7.9em} \\answer{r = 2} \\hspace{3em} \\text{[since } r \\neq 1\\text{]}\n$$\n\nHence, if we substitute $r = 2$ in the equation (4) and solve the\nresulting equation for $d$, we obtain\n\n$$\n\\begin{aligned}\n1 + d &= 2^2 \\\\[6pt]\nd &= 2^2 -1\\end{aligned}\n$$\n\n\n$$\n\\answer{d = 3} \\hspace{0.45em}\n$$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 60',
    content:
      'The arithmetic sequence has the sixth term of $u_6=\\ln{2}$ and the eighth term of $u_8=\\frac{3}{2}\\ln{4}$.\n\n- \n  - Show the common difference is $\\ln2$.\n  - Find $u_1$.\n  - Hence, show that the sum of $n$ terms is given by $S_n=\\left(n^2-9n\\right)\\ln {\\sqrt{2}} $. Where $n \\in \\mathbb{Z^+}$. <span class="marks">[5]</span>\n\n\n\nA new function, $f(x)$, is formed using $S_n$ with the discrete variable $n$ being replaced with the continuous variable $x$, such that $x \\in \\mathbb{R}$. Hence $f(x)=\\left(x^2-9x\\right)\\ln {\\sqrt{2}}$.\n\n- \n  - Write down the equation of the axis of symmetry of $f(x)$.\n  - Sketch $f(x)$ on the grid below, identify the axis of symmetry and any axis intercepts.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b47a175-7f1f-4e12-9580-54726bb82f90/images/5f674790-b5af-473c-b8d4-3f746b96c744/q1037.png)\n\n\n  - Hence or otherwise, find the minimum value of $S_n$ in the form $a\\ln b$. Where $a,b \\in \\mathbb{Z}$ <span class="marks">[5]</span>\n\n\n\nConsider the linear function $g(x)=(6-3x)\\ln {\\sqrt 2}$.\n\n- \n  - Solve $f(x)=g(x)$.\n  - Hence, solve the inequality $f(x)<g(x)$.\n  - Hence or otherwise, find the range of values of $n$ that satisfy $S_n<g(x)$. <span class="marks">[5]</span>\n\n\n',
    markScheme:
      '\n- \n  - As the sequence is arithmetic we can write $u_8=u_6+2d$. Hence\n\n    $$\n    \\begin{align*}\n        \\tfrac{3}{2}\\ln{4}&=\\ln{2}+2d \\tag*{\\textbf{M1}}\\\\\n        2d&=3\\ln{(\\sqrt{4})}-\\ln2\\\\\n        2d&=2\\ln{2}\\tag*{\\textbf{A1}}\\\\[6pt]\n        &=\\hspace{0.525em}\\tcbhighmath{\\ln2}\\hspace{2.525em} \\text{...as required} \\tag*{\\textbf{AG}}\n    \\end{align*}\n    $$\n\n  - We can use $u_6$ to find the first term\n\n    $$\n    \\begin{align*}\n        u_6&=u_1+5d\\\\\n        \\ln2&=u_1+5\\ln2\\\\\n        u_1&=\\hspace{0.525em}\\answer{-4\\ln2} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Using the sum of $n$ terms of an arithmetic sequence we can write\n\n    $$\n    \\begin{align*}\n        S_n&=\\frac{n}{2}\\left(2\\times -4 \\ln2 +(n-1)\\times \\ln2\\right) \\tag*{\\textbf{M1}}\\\\\n        &=\\frac{n^2}{2}\\ln2-\\frac{9n}{2}\\ln2\\\\\n        &=\\frac{\\ln2}{2}\\left(n^2-9n\\right) \\tag*{\\textbf{A1}}\\\\[6pt]\n        &=\\hspace{0.525em}\\answer{\\left(n^2-9n\\right)\\ln{\\sqrt{2}}} \\hspace{2.525em} \\text{...as required} \\tag*{\\textbf{AG}}\n    \\end{align*}\n    $$\n\n\n- \n  - Using the axis of symmetry formula, we can write\n\n    $$\n    \\begin{align*}\n        x&=-\\frac{-9\\ln{\\sqrt{2}}}{2\\ln{\\sqrt{2}}}\\\\\n        &\\hspace{-0.525em}\\answer{x=\\tfrac{9}{2}} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - Here is the sketch of $f(x)$ with the desired features identified.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b47a175-7f1f-4e12-9580-54726bb82f90/images/ff26f159-934a-404d-946c-88a7dab4de40/a1037-1.png)\n\n\n    $\\answer{\\text{Correct intercepts}}$ A1 and $\\answer{\\text{axis of symmetry}}$ A1.\n  - Using the symmetry of $f(x)$ we can identify the minimum value(s) of $f(x)$ which has integer $x$ coordinates.\n    Both points are equidistant from the axis of symmetry and they represent the minimum value of $S_n$.\n\n    $$\n    \\tag*{\\textbf{(M1)}}\n    $$\n\n    $\\textcolor{white}{gap}$\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b47a175-7f1f-4e12-9580-54726bb82f90/images/b53d4797-3cc2-48db-9678-27e521c1ec16/a1037-2.png)\n\n\n    We can use the $x-$value from the graph to pick either $n=4$ or $n=5$ as both will yield the same minimum value. This solution will pick $n=4$, hence, the minimum value of $S_n$ is\n\n    $$\n    \\begin{align*}\n        S_4&=\\left(4^2-9(4)\\right)\\frac{\\ln2}{2}\\\\\n        &=-20\\frac{\\ln2}{2}\\\\[6pt]\n        &=\\hspace{0.525em}\\answer{-10\\ln2} \\tag*{\\textbf{A1}}\\\\\n    \\end{align*}\n    $$\n\n\n- \n  - Equate the RHS of each function\n\n    $$\n    \\begin{align*}\n        \\left(x^2-9x\\right)\\ln {\\sqrt 2}&=(6-3x)\\ln {\\sqrt 2}\n    \\end{align*}\n    $$\n\n    Cancel out the factor $\\ln {\\sqrt 2}$ and solve for $x$\n\n    $$\n    \\begin{align*}\n        x^2-9x&=6-3x\\tag*{\\textbf{(M1)}}\\\\\n        0&=x^2-6x-6\n    \\end{align*}\n    $$\n\n    We can solve this by completing the square.\n\n    $$\n    \\begin{align*}\n        (x-3)^2-9-6&=0\\\\\n        x-3&=\\pm\\sqrt{15}\\\\\n        x&=\\hspace{0.525em}\\answer{3\\pm\\sqrt{15}} \\tag*{\\textbf{A1}}   \n    \\end{align*}\n    $$\n\n  - By making a rough sketch of $g(x)$ on the graph we can solve the inequality\\\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/5b47a175-7f1f-4e12-9580-54726bb82f90/images/e5de3f5e-73f3-4a69-a581-b579611281ae/a1037-3.png)\n\n\n    We can identify the region the $f(x)<g(x)$. Hence\n\n    $$\n    \\begin{align*}\n        &\\hspace{0.525em}\\answer{3-\\sqrt{15}<x<3+\\sqrt{15}} \\tag*{\\textbf{A1}}\\\\\n    \\end{align*}\n    $$\n\n  - $n$ must be a positive integer and lie entirely within the region identified in part (c)(ii).\n    We know that $\\sqrt{9}<\\sqrt{15}<\\sqrt{16}$, hence we can identify the minimum and maximum values of $n$.\n\n    $$\n    \\tag*{\\textbf{M1}}\n    $$\n\n    $\\textcolor{white}{gap}$\n    The minimum value must be an integer larger than $3-\\sqrt{15}$.\n\n    $$\n    \\begin{align*}\n        -1<3-\\sqrt{15}<0\n    \\end{align*}\n    $$\n\n    The minimum value of $n$ is $1$.\n    Similarly, the maximum value must be an integer smaller than $3+\\sqrt{15}$.\n\n    $$\n    \\begin{align*}\n        6<3+\\sqrt{15}<7\n    \\end{align*}\n    $$\n\n    The maximum value of $n$ is $6$.\n    Hence\n$\\answer{1\\leq n\\leq 6}$.\n\n    $$\n    \\tag*{\\textbf{A1}}\n    $$\n\n    $\\textcolor{white}{gap}$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 61',
    content:
      'It is known that the number of trees in a small forest will decrease by\n$5$ % each year unless some new trees are\nplanted. At the end of each year, $600$ new trees are planted to the\nforest. At the start of $2021$, there are $8200$ trees in the forest.\n\n- Show that there will be roughly $9060$ trees in the forest at the\nstart of $2026$. <span class="marks">[4]</span>\n\n- Find the approximate number of trees in the forest at the start of\n$2041$. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- The number of trees in the forest at the start of $2022$ will be\n\n  $$\n  \\begin{aligned}\n  \\mathrm{T}_1 &= 8200\\times0.95 + 600 \\hspace{2.8em}\\end{aligned}\n  $$\n\n  The number of trees in the forest at the start of $2023$ will be\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.65em} \\mathrm{T}_2 &= \\mathrm{T}_1\\times0.95 + 600 \\\\[7pt]\n  &= \\left(8200\\times0.95 + 600\\right)0.95 + 600 \\\\[6pt]\n  &= 8200\\times0.95^2 + 600(0.95 + 1)\\end{aligned}\n  $$\n\n  Hence the number\nof trees in the forest at the start of $2026$ will be\n\n  $$\n  \\begin{aligned}\n  \\mathrm{T}_5 &= 8200\\times0.95^5 + 600\\hspace{0.05em}(0.95^4 + 0.95^3 + 0.95^2 + 0.95 + 1) \\\\[8pt]\n  &\\answer{\\approx 9060}\\end{aligned}\n  $$\n\n- The approximate number of trees in the forest at the start of $2041$\nwill be\n\n  $$\n  \\begin{aligned}\n  \\mathrm{T}_{20} &= 8200\\times0.95^{20} + 600\\bigg[\\sum_{k=0}^{19}0.95^k\\bigg] \\\\[2pt]\n  &= 8200\\times0.95^{20} + 600\\bigg[\\dfrac{1 - 0.95^{20}}{1 - 0.95}\\bigg] \\\\[12pt]\n  &\\answer{\\approx 10\\hspace{0.15em}638}\\end{aligned}\n  $$\n\n',
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
    type: 'ERQ',
    title: 'Question 62',
    content:
      '\n- The following diagram shows [PQ], with length\n$4$ cm. The line is divided into an infinite\nnumber of line segments. The diagram shows the first four\nsegments.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f9e8e9a1-c363-4b5e-8333-8389afb004c2/images/010ab660-03a2-4432-9233-03e638ae8107/2ecea1f156846207a208a3fc02a1af87be7132ca.svg)\n\n\n  The length of the line segments are $m$ cm,\n$m^2$ cm, $m^3$ cm,\n$\\dots$, where $0 < m < 1$.\n  Show that $m = \\dfrac{4}{5}$. <span class="marks">[5]</span>\n\n- The following diagram shows [RS], with length\n$l$ cm, where $l > 1$. Squares with side\nlengths $n$ cm, $n^2$ cm,\n$n^3$ cm, $\\dots$, where $0 < n < 1$, are\ndrawn along [RS]. This process is carried on indefinitely. The\ndiagram shows the first four squares.\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/f9e8e9a1-c363-4b5e-8333-8389afb004c2/images/0659dd55-3e9c-4cda-b49e-3c66fd481f0a/282d818bda418427e2f4b47fb94d3fce3af0ad9c.svg)\n\n\n  The total sum of the areas of all the squares is\n$\\dfrac{25}{11}$. Find the value of $l$. <span class="marks">[8]</span>\n\n',
    markScheme:
      '\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$ with $u_1 = m = r$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.5em} 4 &= \\dfrac{m}{1-m} \\qref{(1)}\\end{aligned}\n  $$\n\n  Hence, solving the equation $(1)$ for $m$, we get\n\n  $$\n  \\begin{aligned}\n  4 - 4m &= m \\\\[12pt]\n  4 &= 5m \\hspace{1.6em} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{m = \\dfrac{4}{5}}\n  $$\n\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$ with $u_1 = n^2 = r$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.9em} \\dfrac{25}{11} &= \\dfrac{n^2}{1-n^2} \\qref{(2)}\\end{aligned}\n  $$\n\n  Hence, solving the equation $(2)$ for $n$, we obtain\n\n  $$\n  \\begin{aligned}\n  25 - 25n^2 &= 11n^2 \\\\[14pt]\n  25 &= 36n^2 \\\\[10pt]\n  n^2 &= \\dfrac{25}{36} \\hspace{2.9em} \\\\[6pt]\n  n &= \\dfrac{5}{6}\\end{aligned}\n  $$\n\n  Using the sum of an infinite\ngeometric sequence formula $S_{\\infty} = \\dfrac{u_1}{1-r}$\nwith\n  $u_1 = r = n = \\dfrac{5}{6}$, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.3em} l &= \\dfrac{5/6}{1 - 5/6} \\\\[12pt]\n  &\\answer{= 5}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '13',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 63',
    content:
      'The first two terms of an infinite geometric sequence, in order, are\n\n$$\n3\\log_3x,\\,\\, 2\\log_3x,\\,\\, \\text{where $x > 0$.}\n$$\n\n\n- Find the common ratio, $r$. <span class="marks">[2]</span>\n\n- Show that the sum of the infinite sequence is $9\\log_3 x$.\n<span class="marks">[3]</span>\n\n\nThe first three terms of an arithmetic sequence, in order, are\n\n$$\n\\log_3x,\\,\\, \\log_3 \\dfrac{x}{3},\\,\\, \\log_3\\dfrac{x}{9},\\,\\, \\text{where $x > 0$.}\n$$\n\n\n- Find the common difference $d$, giving your answer as an\ninteger. <span class="marks">[3]</span>\n\n\nLet $S_6$ be the sum of the first $6$ terms of the arithmetic sequence.\n\n- Show that $S_6 = 6\\log_3 x - 15$. <span class="marks">[3]</span>\n\n- Given that $S_6$ is equal to one third of the sum of the\ninfinite geometric\nsequence, find $x$, giving your answer in the form\n$a^p$ where $a,p \\in \\mathbb{Z}$.\n<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The common ratio is\n\n  $$\n  \\begin{aligned}\n  r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n  &= \\dfrac{2\\log_3 x}{3\\log_3 x} \\\\[6pt]\n  &\\answer{= \\dfrac{2}{3}}\\end{aligned}\n  $$\n\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$, we get\n\n  $$\n  \\begin{aligned}\n  S_{\\infty} &= \\dfrac{3\\log_3x}{1 - 2/3} \\\\[6pt]\n  &= \\dfrac{3\\log_3x}{1/3} \\\\[12pt]\n  &\\answer{= 9\\log_3x} \\hspace{5em}\\end{aligned}\n  $$\n\n- Using the properties of logarithms, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.9em} d &= u_2 - u_1 \\\\[6pt]\n  &= \\log_3 \\dfrac{x}{3} - \\log_3x \\\\[6pt]\n  &= (\\cancel{\\log_3x} - \\log_33) - \\cancel{\\log_3x} \\hspace{0.5em} \\\\[10pt]\n  &\\answer{= -1}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with\n$n=6$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.8em} S_6 &= \\dfrac{6}{2}(2u_1 + (6-1)d) \\\\[6pt]\n  &= \\dfrac{6}{2}(2(\\log_3 x) + (6-1)(-1)) \\\\[6pt]\n  &= \\dfrac{6}{2}(2\\log_3 x - 5) \\\\[11pt]\n  &\\answer{= 6\\log_3 x - 15}\\end{aligned}\n  $$\n\n- If we solve the equation $S_6 = \\dfrac{1}{3}S_{\\infty}$ for $x$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  6\\log_3 x - 15 &= \\dfrac{1}{3}(9\\log_3x) \\hspace{3.6em} \\\\[8pt]\n  6\\log_3 x - 15 &= 3\\log_3x \\\\[12pt]\n  3\\log_3x &= 15 \\\\[12pt]\n  \\log_3x &= 5 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{x = 3^5} \\hspace{2.5em}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '14',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 64',
    content:
      'The first three terms of an infinite geometric sequence are\n$k-4,\\,\\, 4,\\,\\, k+2$, where $k \\in \\mathbb{Z}$.\n\n- \n  - Write down an expression for the common ratio, $r$.\n  - Hence show that $k$ satisfies the equation\n$k^2 - 2k - 24 = 0$.<span class="marks">[5]</span>\n\n\n- \n  - Find the possible values for $k$.\n  - Find the possible values for $r$. <span class="marks">[5]</span>\n\n\n- The geometric sequence has an infinite sum.\n  \n  - Which value of $r$ leads to this sum. Justify your answer.\n  - Find the sum of the sequence. <span class="marks">[5]</span>\n\n\n',
    markScheme:
      '\n- \n  - The common ratio is\n\n    $$\n    \\begin{aligned}\n    r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n    &\\answer{= \\dfrac{4}{k-4}}\\end{aligned}\n    $$\n\n    or\n\n    $$\n    \\begin{aligned}\n    r &= \\dfrac{u_3}{u_2} \\\\[6pt]\n    &\\answer{= \\dfrac{k+2}{4}}\\end{aligned}\n    $$\n\n  - Hence we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.5em} \\dfrac{4}{k-4} &= \\dfrac{k+2}{4} \\\\[6pt]\n    16 &= (k+2)(k-4) \\\\[10pt]\n    16 &= k^2 - 2k - 8 \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\answer{k^2 - 2k - 24 = 0} \\hspace{7.05em}\n    $$\n\n\n- \n  - Solving the equation $k^2 - 2k - 24 = 0$ for $k$, we get\n\n    $$\n    \\begin{aligned}\n    k^2 - 2k - 24 &= 0 \\\\[6pt]\n    (k+4)(k-6) &= 0 \\hspace{7.65em}\\end{aligned}\n    $$\n\n\n    $$\n    \\answer{k = -4,\\, 6} \\hspace{0.25em}\n    $$\n\n  - Evaluating $r = \\dfrac{4}{k-4}$ for $k = -4,\\, 6$, we obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.5em} r &= \\dfrac{4}{(-4)-4} \\\\[6pt]\n    &\\answer{= -\\dfrac{1}{2}}\\end{aligned}\n    $$\n\n    and\n\n    $$\n    \\begin{aligned}\n    r &= \\dfrac{4}{6-4} \\\\[9pt]\n    &\\answer{= 2}\\end{aligned}\n    $$\n\n\n- \n  - The infinite sum exists when $|r| < 1$.\nWe have\n\n    $$\n    \\begin{aligned}\n    \\bigg|\\hspace{-0.15em}-\\dfrac{1}{2}\\hspace{0.1em}\\bigg| &= \\dfrac{1}{2} < 1\\end{aligned}\n    $$\n\n    Hence\n$\\answer{r = - 1/2}$\nleads to this sum.\n  - Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$,\n    we get\n\n    $$\n    \\begin{aligned}\n    S_{\\infty} &= \\dfrac{(-8)}{1 - (-1/2)} \\\\[6pt]\n    &= \\dfrac{(-8)}{3/2} \\\\[6pt]\n    &\\answer{= -\\dfrac{16}{3}}\\end{aligned}\n    $$\n\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '4'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 65',
    content:
      'Alex and Julie each have a goal of saving $\\$30\\hspace{0.15em}000$ to\nput towards a house deposit. They each have $\\$16\\hspace{0.15em}000$ to\ninvest.\n\n- Alex chooses his local bank and invests his $\\$16\\hspace{0.15em}000$\nin a savings account that offers an interest rate of $5\\%$ per annum\ncompounded annually.\n  \n  - Find the value of Alex\'s investment after $7$ years, to the\nnearest hundred dollars.\n  - Alex reaches his goal after n years, where n is an integer.\nDetermine the value of n. <span class="marks">[4]</span>\n\n\n- Julie chooses a different bank and invests her\n$\\$16\\hspace{0.15em}000$ in a savings account that offers an\ninterest rate of $r\\%$ per annum compounded monthly, where $r$\nis set to two decimal places.\n  Find the minimum value of $r$ needed for Julie to reach her goal\nafter $10$ years. <span class="marks">[3]</span>\n\n- Xavier also wants to reach a savings goal of\n$\\$30 \\hspace{0.15em}000$. He doesn\'t trust his local bank so he\ndecides to initially put his money into a safety deposit box where it does not\nearn any interest. His system is to add more money into the safety\ndeposit box at the end of each year. At the end of each year he will add one third of the amount\nhe added at the end of the previous year.\n  \n  - Show that Xavier will never reach his goal if his initial\ndeposit into the safety deposit box is $\\$16\\hspace{0.15em}000$.\n  - Find the amount Xavier needs to initially deposit in order to\nreach his goal after $7$ years. Give your answer to the nearest\ndollar. <span class="marks">[7]</span>\n\n\n',
    markScheme:
      "\n- \n  - We have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/671b8958-56db-4c0f-b590-8354ee308bad/images/3bafd562-49e3-4def-9fe7-1b7fdc0f4b02/9dbbca0f5e685431fe27e5f6d20cddfa41909806.svg)\n\n\n    Hence, using the compound interest formula, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n    &= 16\\hspace{0.15em}000\\bigg(1 + \\dfrac{5}{100\\times1}\\bigg)^{1\\times 7} \\\\[8pt]\n    &\\answer{\\approx \\$22\\hspace{0.15em}500}\n    \\end{aligned}\n    $$\n\n  - We have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/671b8958-56db-4c0f-b590-8354ee308bad/images/3680075f-c2ad-41fe-b670-56ea0a3fe382/bb1b286c0aec001397762ed487c09e553b272c3a.svg)\n\n\n    Hence, using the compound interest formula, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n    30\\hspace{0.15em}000 &= 16\\hspace{0.15em}000\\bigg(1 + \\dfrac{5}{100\\times1}\\bigg)^{1\\times n} \\\\[8pt]\n    &\\hspace{-0.525em}\\answer{n = 13} \\hspace{3em} [\\text{by using G.D.C.}]\n    \\end{aligned}\n    $$\n\n\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/671b8958-56db-4c0f-b590-8354ee308bad/images/2643f5e1-9380-40ff-988f-9c71b044704d/990e9181ddb4f41f6ff2aaf08aa718b7d5031131.svg)\n\n\n  Hence, using the compound interest formula, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  30\\hspace{0.15em}000 &= 16\\hspace{0.15em}000\\bigg(1 + \\dfrac{r}{100\\times12}\\bigg)^{12\\times 10} \\\\[6pt]\n  30\\hspace{0.15em}000 &= 16\\hspace{0.15em}000\\bigg(1 + \\dfrac{r}{1200}\\bigg)^{120} \\\\[8pt]\n  r&=6.302...\\hspace{5em} [\\text{by using G.D.C.}]\\\\[8pt]\n  &\\hspace{-0.525em}\\answer{r = 6.30} \n  \\end{aligned}\n  $$\n\n- \n  - The total amount of money in Xavier's safe after an infinite\nnumber of years is expressed by\n\n    $$\n    \\begin{aligned}\n    A &= 16\\hspace{0.15em}000 + 16\\hspace{0.15em}000\\left( \\dfrac 1 3 \\right) + 16\\hspace{0.15em}000\\left( \\dfrac 1 3 \\right)^2 +  16\\hspace{0.15em}000\\left( \\dfrac 1 3 \\right)^{3} + \\dots\n    \\end{aligned}\n    $$\n\n    We have an infinite geometric series with\nthe first term $u_1 = 16\\hspace{0.15em}000$ and the common ratio\n$r = \\dfrac{1}{3}$.\n    Hence, using formula\n$\\text{\\(S_{\\infty} = \\dfrac{u_1}{1-r}\\)}$, we obtain\n\n    $$\n    \\begin{aligned}\n    A &=  \\dfrac{16\\hspace{0.15em}000}{1 - \\frac{1}{3}} \\hspace{5.8em}\\\\[8pt]\n    &\\hspace{-0.525em}\\answer{A = \\$24\\hspace{0.15em}000}\n    \\end{aligned}\n    $$\n\n    Hence he will never reach the\n$\\$30\\hspace{0.15em}000$ target if his initial deposit is\n$\\$16\\hspace{0.15em}000$.\n  - Let $P$ represent the initial deposit. Note that after the initial deposit, there will be a further $7$ deposits, one at the end of each year.\n    The amount of money that Xavier saves after $7$ years, $A$, is\n\n    $$\n    \\begin{aligned}\n    A &= P + P\\left( \\dfrac 1 3 \\right) + P\\left( \\dfrac 1 3 \\right)^2 + \\dots + P\\left( \\dfrac 1 3 \\right)^{7} \\hspace{2em}\n    \\end{aligned}\n    $$\n\n    We have a geometric series with the first\nterm $u_1 = P$, common ratio $r = \\dfrac{1}{3}$ and $8$ terms in total.\n    Hence, using the formula $S_n = \\dfrac{u_1(1-r^n)}{1-r}$\nwith $\\text{\\(n = 8\\)}$, we get\n\n    $$\n    \\begin{aligned}\n    \\mathrm{A} &= S_{8} \\\\[6pt]\n    30\\hspace{0.15em}000 &= \\dfrac{P\\left(1-\\left( \\frac 1 3 \\right)^8\\right)}{1-\\frac{1}{3}} \\\\[12pt]\n    20\\,000 &= P\\left(1-\\left( \\frac 1 3 \\right)^8\\right)\\\\[12pt]\n    P &= \\dfrac{20\\,000}{1-\\left( \\frac 1 3 \\right)^8}\\\\[12pt]\n    &\\hspace{-1.1em}\\answer{P = \\$20\\hspace{0.15em}003 \\hspace{1em}\\text{ [to the nearest dollar]}} \n    \\end{aligned}\n    $$\n\n\n",
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
    title: 'Question 66',
    content:
      'Grant wants to save $\\$40\\hspace{0.15em}000$ over 5 years to help his\nson pay for his college tuition. He deposits $\\$20\\hspace{0.15em}000$\ninto a savings account that has an interest rate of $6\\%$ per annum\ncompounded monthly for $5$ years.\n\n- Show that Grant will not be able to reach his target. <span class="marks">[2]</span>\n\n- Find the minimum amount, to the nearest dollar, that Grant would\nneed to deposit initially for him to reach his target. <span class="marks">[3]</span>\n\n\nGrant only has $\\$20\\hspace{0.15em}000$ to invest, so he asks his\nsister, Caroline, to help him accelerate the saving process. Caroline is\nhappy to help and offers to contribute part of her income each year. Her\nannual income is $\\$37 \\hspace{0.15em}500$ per year. She starts by\ncontributing one fifth of her annual income, and then decreases her\ncontributions by half each year until the target is reached. Caroline\'s\ncontributions do not yield any interest.\n\n- Show that Grant and Caroline together can reach the target\nin 5 years. <span class="marks">[4]</span>\n\n\nGrant and Caroline agree that Caroline should stop contributing once she\ncontributes enough to complement the deficit of Grant\'s investment.\n\n- Find the whole number of years after which Caroline\nwill stop contributing. <span class="marks">[4]</span>  \n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/b11dd291-1f8d-4420-97c1-327f5c8e98e0/images/99bf13a8-6e7b-42c8-a483-4544968211ec/64fb25df045f9e0b7a416f15dde7a9fce22438d5.svg)\n\n\n  Hence, using the compound interest formula, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 20\\hspace{0.15em}000\\bigg(1 + \\dfrac{6}{100\\times12}\\bigg)^{12\\times 5} \\\\[8pt]\n  &\\approx \\$26\\hspace{0.15em}977\\end{aligned}\n  $$\n\n  Therfore, Grant\nwill not reach his target as the value of his investment after $5$\nyears is $\\$26\\hspace{0.15em}977$ which is less than his\n$\\$40\\hspace{0.15em}000$ goal.\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/b11dd291-1f8d-4420-97c1-327f5c8e98e0/images/d899604b-6ef3-4746-bea4-5206a555afa3/aaeeec80128922b9372aa176b0353a0a146271f3.svg)\n\n\n  Hence, using the compound interest formula, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  \\hspace{4.25em} 40\\hspace{0.15em}000 &= \\mathrm{PV}\\bigg(1 + \\dfrac{6}{100\\times12}\\bigg)^{12\\times 5} \\\\[8pt]\n  &\\hspace{-1.5em}\\answer{\\mathrm{PV} \\approx \\$29\\hspace{0.15em}655} \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n- The amount that Caroline contributes in the first year is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{P} &= \\dfrac{1}{5}(37\\hspace{0.15em}500) \\\\[6pt]\n  &= \\$7\\hspace{0.15em}500\\end{aligned}\n  $$\n\n  The total\namount that Caroline contributes after $5$ years is expressed by\n\n  $$\n  \\begin{aligned}\n  A &= 7500 + 7500\\left( \\dfrac 1 2 \\right) + 7500\\left( \\dfrac 1 2 \\right)^2 +  + \\dots + 7500\\left( \\dfrac 1 2 \\right)^{4} \n  \\end{aligned}\n  $$\n\n  We have a geometric series with the first term\n$u_1 = 7500$ and $r = \\dfrac{1}{2}$.\n  Hence, using the formula $S_n = \\dfrac{u_1(r^n - 1)}{r - 1}$ with\n$\\text{\\(n = 5\\)}$, we get\n\n  $$\n  \\begin{aligned}\n  \\mathrm{A} &= S_{5} \\\\[8pt]\n  \\hspace{2.75em} &= 7\\hspace{0.15em}500\\bigg[\\dfrac{\\left( \\frac 1 2 \\right)^5 - 1}{\\frac{1}{2} - 1}\\bigg] \\\\[12pt]\n  &\\approx \\$14\\hspace{0.15em}531 \n  \\end{aligned}\n  $$\n\n  Therefore, the total amount that Grant and Caroline can save in $5$\nyears is\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.5em} \\text{Total amount} &\\approx 26\\hspace{0.15em}977 + 14\\hspace{0.15em}531 \\hspace{3em} [\\text{by part (a)}] \\\\[6pt]\n  &\\hspace{0.35em}\\answer{ \\approx \\$41\\hspace{0.15em}508}\\end{aligned}\n  $$\n\n  Hence, Grant and Caroline together can reach the target as the total\namount saved exceeds the target of $\\$40\\hspace{0.15em}000$.\n- The amount Caroline must contribute to help Grant reach the target\nis\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.75em} C &= 40\\hspace{0.15em}000 - 26\\hspace{0.15em}977 \\hspace{3em} [\\text{by part (a)}] \\\\[6pt]\n  &= \\$13\\hspace{0.15em}023\\end{aligned}\n  $$\n\n  Therefore, we have\n\n  $$\n  \\begin{aligned}\n  7500 + 7500\\left( \\dfrac 1 2 \\right) + 7500\\left( \\dfrac 1 2 \\right)^2 +  \\dots \\hspace{1em} &> 13\\hspace{0.15em}023\\end{aligned}\n  $$\n\n  We have a geometric series with the first term $u_1 = 7500$ and\n$r = \\dfrac{1}{2}$.\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{u_1(r^n - 1)}{r - 1}$, we get\n\n  $$\n  \\begin{aligned}\n  7500\\bigg[\\dfrac{\\left( \\frac 1 2 \\right)^n - 1}{\\frac{1}{2} - 1}\\bigg]\\hspace{0.2em} &> 13\\hspace{0.15em}023 \\\\[12pt]\n  n &> 2.92358 \\hspace{3em} [\\text{by using G.D.C.}] \\\\\n  \\end{aligned}\n  $$\n\n  Hence, Caroline will stop contributing after\n$\\answer{3\\hspace{0.3em} \\text{years}}$\n',
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
    type: 'SAQ',
    title: 'Question 67',
    content:
      'Let $f(x) = e^{3\\sin \\left(\\frac{\\pi x}{4}\\right)}$, for $x > 0$.\nThe $k$th maximum point on the graph of $f$ has $x$-coordinate $x_k$,\nwhere $k \\in \\mathbb{Z}^+$.\n\n- Given that $x_{k+1} = x_k + d$, find $d$. <span class="marks">[4]</span>\n\n- Hence find the value of $n$ such that\n$\\displaystyle \\sum_{k=1}^n x_k = 992$. <span class="marks">[4]</span>\n\n',
    markScheme:
      '\n- If we draw the graph of $y= f(x)$ [by using G.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/bd4c0fbe-80c8-4f0f-b563-49e7510420be/images/885e8a5e-4313-4a8b-a394-adbac59e4041/97f38ce996ffbe7f9b884196663bd4ac3db522d5.svg)\n\n\n  Hence, using the $x$-coordinates of the points A$(2,20.1)$ and\nB$(10,20.1)$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{1.7em} x_2 &= x_1 + d \\\\[6pt]\n  10 &= 2 + d \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{d = 8}\n  $$\n\n- We have an arithmetic sequence with the first term $x_1 = 2$ and the\ncommon difference $d = 8$.\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2x_1+(n-1)d)$, we\nobtain\n\n  $$\n  \\begin{aligned}\n  \\sum_{k=1}^n x_k &= 992 \\\\[6pt]\n  S_n &= 992 \\hspace{3em} [\\text{with } x_1 = 2 \\text{ and } d = 8] \\\\[13pt]\n  \\hspace{4em} \\dfrac{n}{2}(2(2)+(n-1)(8)) &= 992 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{10.1em} \\answer{n = 16} \\hspace{3em} [\\text{by using G.D.C.}]\n  $$\n\n',
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
    title: 'Question 68',
    content:
      'The sides of a square are $8$ cm long. A new\nsquare is formed by joining the midpoints of the adjacent sides and two\nof the resulting triangles are shaded as shown. This process is repeated\n$5$ more times to form the right hand diagram below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/1a91bc7f-44d0-4f6f-90c9-a7a3ec90646f/images/52204856-9803-492b-b040-827927d2cdbb/AA640.PNG)\n\n\n\n- Find the total area of the shaded region in the right hand diagram\nabove. <span class="marks">[4]</span>\n\n- Find the total area of the shaded region if the process is repeated\nindefinitely.<span class="marks">[3]</span>\n\n',
    markScheme:
      '\n- The side length of the first pair of shaded triangles is\n\n  $$\n  \\begin{aligned}\n  \\text{side length} &= \\dfrac{8}{2} \\\\[6pt]\n  &= 4\\hspace{0.25em}\\text{cm} \\hspace{2.9em}\\end{aligned}\n  $$\n\n  Hence\ntheir total area is\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.9em} \\text{area} &= 2\\left[\\dfrac{1}{2}(4)(4)\\right] \\\\[6pt]\n  &= 16\\hspace{0.25em}\\text{cm}^2\\end{aligned}\n  $$\n\n  Similarly, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/1a91bc7f-44d0-4f6f-90c9-a7a3ec90646f/images/5a993fe9-8af1-476b-805c-b562fc569a40/e6f45d593aa89a3c2cdb821ce1c78f8d901f645f.svg)\n\n\n  Hence the area of successive pairs of shaded triangles form a\ngeometric $\\text{sequence}$ with the first term $u_1 = 16$\nand the common ratio $r = 1/2$.\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{u_1(1-r^n)}{1-r}$ with $n = 6$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} S_6 &= \\dfrac{u_1(1-r^6)}{1-r} \\\\[6pt]\n  &= \\dfrac{16\\hspace{0.05em}(1-(1/2)^6)}{1-1/2} \\\\[12pt]\n  &\\answer{\\approx 31.5 \\text{ cm}^2}\\end{aligned}\n  $$\n\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$, we find\n\n  $$\n  \\begin{aligned}\n  S_{\\infty} &= \\dfrac{16}{1-1/2} \\hspace{0.5em} \\\\[12pt]\n  &\\answer{= 32 \\text{ cm}^2}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 69',
    content:
      'Given a sequence of integers, between $20$ and $300$, which are\ndivisible by $9$.\n\n- Find their sum. <span class="marks">[2]</span>\n\n- Express this sum using sigma notation. <span class="marks">[2]</span>\n\n\nAn arithmetic sequence has first term $-500$ and common difference of\n$8$. The sum of the first $n$ terms of this sequence is negative.\n\n- Find the greatest value of $n$. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- We have an arithmetic sequence $27,\\, 36,\\, 45,\\,\\dots,\\, 297$ with\n$u_1 = 27$ and $d = 9$.\n  The number of terms in the sequence is\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.8em} n &= \\left\\lfloor * \\right\\rfloor \\dfrac{300}{9} - 2 \\\\[6pt]\n  & = 31\\end{aligned}\n  $$\n\n  Hence, using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(u_1 + u_n)$ with $n = 31$, $u_1 = 27$ and\n$u_n = 297$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} S_{31} &= \\dfrac{31}{2}(27 + 297) \\\\[5pt]\n  &\\answer{= 5022}\\end{aligned}\n  $$\n\n  Alternatively,\nusing the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $n = 31$, $u_1 = 27$ and\n$d = 9$, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{7.6em} S_{31} &= \\dfrac{31}{2}(2(27) + (31-1)(9)) \\\\[5pt]\n  &\\answer{= 5022}\\end{aligned}\n  $$\n\n- Since $u_1 = 27$, $d = 9$ and $n = 31$, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} S_{31}  &= 27 + (27 + 9) + (27 + 2\\cdot9) + \\cdots + (27 + 30\\cdot9) \\\\[8pt]\n  &\\answer{= \\displaystyle{\\sum_{n = 1}^{31}} (27 + (n-1)(9))} \\\\[5pt]\n  &\\hspace{0.3em}\\text{or} \\\\[5pt]\n  &\\answer{= \\displaystyle{\\sum_{n = 1}^{31}} 9(n+2)}\\end{aligned}\n  $$\n\n- Using the sum of $n$ terms formula\n$S_n = \\dfrac{n}{2}(2u_1 + (n-1)d)$ with $u_1 = -500$ and $d = 8$,\nwe have\n\n  $$\n  \\begin{aligned}\n  S_n &< 0 \\\\[6pt]\n  \\hspace{4em} \\dfrac{n}{2}(2(-500) + (n-1)(8)) &< 0 \\\\[6pt]\n  n(-500 + (n-1)(4)) &< 0 \\\\[8pt]\n  n &< 126 \\hspace{3em} [\\text{by using G.D.C}]\\end{aligned}\n  $$\n\n  Hence\nthe greatest value of $n$ is\n$\\answer{125}$\n',
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
    title: 'Question 70',
    content:
      'A bouncy ball is dropped from a height of $2$ metres onto a concrete\nfloor. After hitting the floor, the ball rebounds back up to\n$80$ % of it\'s previous height, and this pattern\ncontinues on repeatedly, until coming to rest.\n\n- Show that the total distance travelled by the ball until coming to\nrest can be expressed by\n  $2 + 4(0.8) + 4(0.8)^2 + 4(0.8)^3 + \\cdots$<span class="marks">[2]</span>\n\n- Find an expression for the total distance travelled by the ball, in\nterms of the number of bounces, $n$. <span class="marks">[2]</span>\n\n- Find the total distance travelled by the ball. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/6c7dc2e3-7a08-4b87-96d6-7b2cab2e19ca/images/e45216f3-e445-40d8-b304-c2b6ab4f424b/866fc824efe482d8b182d4c5b9e109a2fdbd4aca.svg)\n\n\n  Hence the total distance travelled by the ball until coming to rest\nis\n\n  $$\n  \\begin{aligned}\n  \\answer{2 + 4(0.8) + 4(0.8)^2 + 4(0.8)^3 + \\cdots}\\qref{(1)}\\end{aligned}\n  $$\n\n- First we manipulate the equation slightly\n\n\n$$\n    \\begin{aligned}\n    \\hspace{2em} [\\text{sum of $n$ terms of $(1)$}] &= 2 + 4(0.8) + 4(0.8)^2 + \\cdots + 4(0.8)^{n-1} \\\\[14pt]\n    &= \\textcolor{blue}{-2 + 2} +\\big[2 + 4(0.8) + 4(0.8)^2 + \\cdots + 4(0.8)^{n-1}\\big] \\hspace{1.3em} \\\\[8pt]\n    &= -2 + \\big[4 + 4(0.8) + 4(0.8)^2 + \\cdots + 4(0.8)^{n-1}\\big] \\hspace{1.3em} \\\\[8pt]\n    &= -2 + \\textcolor{red}{\\big[u_1 + u_2 + u_3 + \\cdots + u_{n}\\big]} \\hspace{1.3em} \\\\[8pt]\n    \\end{aligned}\n$$\n\nNow we can see this is the sum of a geometric sequence  to $n$ terms with $u_1 = 4$ and $r = 0.8$\nUsing the formula $S_n = \\dfrac{u_1(1 - r^n)}{1-r}$ for the sum of $n$ terms of a geometric sequence we get\n\n$$\n    \\begin{aligned}\n    &= -2 + \\bigg[\\dfrac{4(1 - 0.8^{n})}{1 - 0.8}\\bigg] \\\\[8pt]\n    &= -2 + 20(1 - 0.8^{n}) \\\\[8pt]\n    &= -2 + 20 - 20(0.8^n)\\\\[12pt]\n    &\\answer{= 18 - 20(0.8)^n}\n    \\end{aligned}\n$$\n\n\n- Using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$ with\n  $u_1 = 4$ and $r = 0.8$, we obtain\n\n  $$\n  \\begin{aligned}\n  &= 2 + 4(0.8) + 4(0.8)^2 + 4(0.8)^3 + \\cdots \\\\[14pt]\n  &= -2 + \\big[4 + 4(0.8) + 4(0.8)^2 + 4(0.8)^3 + \\cdots\\big] \\\\[8pt]\n  &= -2 + \\bigg[\\dfrac{4}{1 - 0.8}\\bigg] \\\\[8pt]\n  &\\answer{= 18 \\text{ metres}}\\end{aligned}\n  $$\n\n',
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
    type: 'ERQ',
    title: 'Question 71',
    content:
      'Alex and Ben are playing a game with a spinner.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d53e81ee-2e98-435d-b647-8093ca28ed96/images/1c126bd7-bbe0-4764-8c02-02e9c68e288a/AA1170_q1%20(2).JPEG)\n\n\nThe triangular shaped spinner has three equal sized regions with two regions labelled LOSE and one labelled WIN.\nIn turn $1$ Alex spins the spinner first. If she lands on WIN then the game ends and Alex has won in turn $1$.\nIf she lands on LOSE then Ben spins. If he lands on WIN then the game ends and Ben has won in turn $1$.\nIf they both land on LOSE then the game continues into turn $2$.\nThe same process repeats until someone lands on WIN. Alex always spins first for each new turn.\nLet the turn that the game ends be the discrete random variable $T$. Where $T=1,2,3,4,...$.\n\n- Show that the probability that Alex wins and $T=2$ is $\\displaystyle\\frac{4}{27}$. <span class="marks">[2]</span>\n\n- Hence complete the missing values in the first four columns of the probability distribution for $T$ when Alex wins.\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d53e81ee-2e98-435d-b647-8093ca28ed96/images/0534e4df-9229-45ce-89b9-38f75ac0db9d/AA1170_table.JPEG)\n\n\n<span class="marks">[2]</span>\n\n\n- Show that when Alex wins the values of $\\text{P}(T=t)$  form a geometric sequence. <span class="marks">[2]</span>\n\n- Justify that as $T \\rightarrow \\infty$ the sequence has a sum. <span class="marks">[1]</span>\n\n- Hence show that the probability Alex wins the game is $\\displaystyle\\frac{3}{5}$. <span class="marks">[2]</span>\n\n- Alex and Ben play the same game 10 times.\n  The discrete random variable $W$ is the number of times Alex wins.\n  \n  - Determine the probability that $W$ is within one standard deviation of the mean.\n  - Determine the probability that $W$ is larger than $\\mathrm{E}(W)$ given $W$ is within one standard deviation of the mean. <span class="marks">[7]</span>\n\n\n\nAlex and Ben want to keep playing the same game with only one change. They decide to create a new heptagonal spinner.\nThe spinner has $7$ equally sized regions.\nEach region must be labelled either WIN or LOSE.\nThey want to label the spinner such that the probability of Alex winning the game is $\\frac{7}{10}$.\n\n- How many of the regions should be labeled   WIN? You must justify your answer. <span class="marks">[5]</span>  \n',
    markScheme:
      '\n- For any particular spin $\\mathrm{P}(\\text{Win})=\\tfrac{1}{3}$ and $P(\\text{Lose})=\\tfrac{2}{3}$.\n  For Alex to win in turn $2$, Alex must first lose in turn $1$, then Ben must lose in turn $1$ and Alex wins in turn $2$.\n\n  $$\n  \\begin{align*}\n      \\mathrm{P}(\\text{Alex wins in turn 2})&=\\frac{2}{3}\\times\\frac{2}{3}\\times \\frac{1}{3}\\tag*{\\textbf{M1A1}}\\\\[6pt]\n      &\\answer{=\\frac{4}{27}} \\hspace{2em}\\text{... as required}\n  \\end{align*}\n  $$\n\n- We can calculate the probability when $T=1, 3$ and $4$\n\n  $$\n  \\begin{align*}\n      \\mathrm{P}(\\text{Alex wins $T=1$)}&=\\frac{1}{3}\\\\[6pt]\n      \\mathrm{P}(\\text{Alex wins $T=3$)}&=\\frac{2}{3}\\times\\frac{2}{3}\\hspace{1em}\\times \\hspace{1em}\\frac{2}{3}\\times\\frac{2}{3}\\hspace{1em}\\times\\frac{1}{3}\\\\[6pt]\n      &=\\frac{16}{243}\\\\[6pt]\n      \\mathrm{P}(\\text{Alex wins $T=4$)}&=\\frac{2}{3}\\times\\frac{2}{3}\\hspace{1em}\\times \\hspace{1em} \\frac{2}{3}\\times\\frac{2}{3}\\hspace{1em}\\times \\hspace{1em}\\frac{2}{3}\\times\\frac{2}{3}\\hspace{1em}\\times\\frac{1}{3}\\\\[6pt]\n      &=\\frac{64}{2187}\n  \\end{align*}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d53e81ee-2e98-435d-b647-8093ca28ed96/images/8bafc1e6-d68b-44f7-9d34-78943b847fb5/AA1170_table_a.JPEG)\n\n\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1A1}}\n  \\end{align*}\n  $$\n\n- We can see that a geometric sequence is formed\n  with a first term of $\\answer{u_1=\\tfrac{1}{3}}\\hspace{0.525em}$ and $\\answer{r=\\tfrac{4}{9}}\\hspace{0.525em}$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1A1}}\n  \\end{align*}\n  $$\n\n- We know that an infinite geometric sequence has a sum if $|r|<1$.\n  Therefore as $\\answer{\\tfrac{4}{9}<1}\\hspace{0.525em}$ then the series has a sum.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- Using the sum of an infinite geometric sequence formula we have\n\n  $$\n  \\begin{align*}\n      S_\\infty&=\\frac{u_1}{1-r}\\\\[6pt]\n      &=\\frac{\\tfrac{1}{3}}{1-\\tfrac{4}{9}}\\tag*{\\textbf{M1A1}}\\\\[6pt]\n      &\\answer{=\\frac{3}{5}} \\hspace{2em}\\text{... as required}\\\\[6pt]\n  \\end{align*}\n  $$\n\n- \n  - The DRV $W$ forms a binomial distribution, where $n=10$ and $p=\\tfrac{3}{5}$ therefore\n\n    $$\n    \\begin{align*}\n        W \\sim \\text{Bin}\\left(10, \\tfrac{3}{5}\\right)\n    \\end{align*}\n    $$\n\n    We can use the formula booklet to find the expected value (mean) of the distribution\n\n    $$\n    \\begin{align*}\n            \\mathrm{E}(W)&=np\\\\[6pt]\n        &=10 \\times \\tfrac{3}{5}\\\\[6pt]\n        &=6 \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n    Similarly, we can find the variance\n\n    $$\n    \\begin{align*}\n        \\mathrm{Var}(W) &= np(1-p)\\\\[6pt]\n        &=10 \\times \\tfrac{3}{5} \\times \\left(1-\\tfrac{3}{5}\\right)\\\\[6pt]\n        &=\\tfrac{12}{5} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n    Therefore we can find the standard deviation of the distribution\n\n    $$\n    \\begin{align*}\n        \\sigma&=\\sqrt{\\mathrm{Var}(W)}\\\\[6pt]\n        &=1.5491...\n    \\end{align*}\n    $$\n\n    Hence we need to find the value of the following\n\n    $$\n    \\begin{align*}\n         \\mathrm{P}(6 - 1.5491... < W < 6 + 1.5491...)\n    \\end{align*}\n    $$\n\n    We can simplify the inequality and as the distribution is discrete we round to the next whole number\n\n    $$\n    \\begin{align*}\n        &=\\mathrm{P}(4.4509... < W < 7.5491...)\\\\[6pt]\n        &=\\mathrm{P}(5 \\leq W \\leq 7) \\tag*{\\textbf{M1}}\n    \\end{align*}\n    $$\n\n    Hence using the G.D.C.\n\n    $$\n    \\begin{align*}\n        &= \\mathrm{P}(5 \\leq W \\leq 7)\\\\[6pt]\n        &=0.66647...\\\\[6pt]\n        &=\\answer{0.666} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - This is a conditional probability problem therefore we can use the following formula\n\n    $$\n    \\begin{align*}\n        \\mathrm{P}(A|B)&=\\frac{\\mathrm{P}(A \\cap B)}{\\mathrm{P}(B)}\n    \\end{align*}\n    $$\n\n    Where event $A$ is when $W > \\mathrm{E}(W)$ and (from part(f)(i)) event $B$ is when $5 \\leq W \\leq 7$.\n    To find the intersection of events $A$ and $B$ we should first consider the possible outcomes of event $A$.\n    As $\\mathrm{E}(W)=6$ and $W>6$ then $W= 7, 8, 9, 10$.\n    Event $B$ occurs when $W=5, 6, 7$.\n    We can see that $A \\cap B$ is when $W=7$.\n    Therefore $(A \\cap B) =  \\mathrm{P}(W=7)$. Hence we can find $ \\mathrm{P}(A|B)$\n\n    $$\n    \\begin{align*}\n         \\mathrm{P}(A|B)&=\\frac{ \\mathrm{P}(A \\cap B)}{ \\mathrm{P}(B)}\\\\[6pt]\n        &=\\frac{ \\mathrm{P}(W=7)}{ \\mathrm{P}(5 \\leq W \\leq 7)} \\tag*{\\textbf{(M1)}}\\\\[6pt]\n        &=\\frac{0.21499...}{0.66647...} \\tag*{\\textbf{A1}}\\\\[6pt]\n        &=0.32258...\\\\[6pt]\n        &=\\answer{0.323}\\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- Let the probability of winning on any given spin be $w$, therefore the probability of losing on any given spin is $1-w$.\n  For Alex to win she must win in turn $1$ or turn $2$ or turn $3$ etc.\n  We can form an infinite geometric series for the probability that Alex wins\n\n  $$\n  \\begin{align*}\n      \\mathrm{P}(\\text{Alex wins})&= \\mathrm{P}(T=1)+P(T=2)+ \\mathrm{P}(T=3)+...\\tag*{\\textbf{(M1)}}\\\\[6pt]\n      \\frac{7}{10}&=w+(1-w)^2\\times w + (1-w)^4\\times w +...\\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  We can now write a closed formula for the open sequence shown above. To do this we use the sum of an infinite geometric sequence formula from the booklet with $u_1=w$ and $r=(1-w)^2$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}\n      \\frac{7}{10}&=\\frac{w}{1-(1-w)^2} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  Solving this on a G.D.C. we find that $w=\\frac{4}{7}$.\n  Hence we need to label $\\answer{4 \\text{ of the regions with} \\textbf{ WIN}}$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack}\\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '21',
    difficultyLevel: '4.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 72',
    content:
      'Juanita wants to borrow some money to buy an apartment.\nShe finds an offer allowing her to borrow &#36;480,000 over 10 years with an interest rate of $r\\%$ P.A. compounded monthly. She repays the loan with a fixed amount $p$ every month.\nJuanita takes the loan out at the beginning of the month. At the end of the month, the interest is added and then she makes the monthly payment of $p$.\nThis continues until after $10$ complete years, she has repaid the loan in its entirety.\nJuanita wants to analyse three different scenarios in which she could repay the loan.\n\n- In the first scenario her monthly payment is p= &#36;5000.\n  If $k=1+\\dfrac{r}{1200}$\n  \n  - Write down the number of payments that will be made over the entire $10$ year term of the loan.\n  - Show that\n\n\n  $$\n  \\begin{align*}\n  96k^{120}&=\\frac{k^{120}-1}{k-1}\n  \\end{align*}\n  $$\n\n  \n  - Hence, or otherwise, find $r$.<span class="marks">[6]</span>    \n\n\n\n\n- In the second scenario Juanita uses the same values for $p$ and $r$ as part (a).  She makes the monthly payments of $p$ for $7$ years and $4$ months.\n  She then makes a final payment to clear the remaining balance of the loan.\n  \n  - Find the number of payments she makes before  the final payment.\n  - Hence, find the final payment required to clear the remaining balance to $4$ significant figures. <span class="marks">[3]</span>\n\n\n- In the third scenario Juanita pays $p$ per month for $5$ complete years and then she increases her monthly loan repayment to $2p$ for the remaining $5$ years.\n  Find the value of $p$, to the nearest dollar, for the third scenario. <span class="marks">[8]</span>\n\n',
    markScheme:
      "\n- \n  - There are $12$ payments per year for $10$ years\n\n\n  $$\n  \\begin{align*}\n  \t&=10 \\times 12\\\\[6pt]\n  \t&=\\answer{120} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  \n  - Note: Multiplying by $k$ represents an increase of $r\\%$.\n    We can build up an expression which represents the remaining value, $FV$, of the loan. After the first month, this remaining value is increased by $r\\%$ and then the payment $$5\\,000$ is subtracted\n\n    $$\n    \\begin{align*}\n        FV&=480\\,000\\times k -5\\,000\\\\[6pt]\n        &=480\\,000k -5\\,000\n    \\end{align*}\n    $$\n\n    We then continue into the second month, this process is repeated. The remaining value is increased by $r\\%$ and the payment $$5\\,000$ is subtracted\n\n    $$\n    \\begin{align*}\n        FV&=(480\\,000k -5\\,000)\\times k -5\\,000\\\\[6pt]\n        &=480\\,000k^2 -5\\,000k-5\\,000\n    \\end{align*}\n    $$\n\n    Similarly for the third month\n\n    $$\n    \\begin{align*}\n         \\tag*{\\textbf{(M1)}}\n    \\end{align*}\n    $$\n\n\n    $$\n    \\begin{align*}\n        FV&=(480\\,000k^2 -5\\,000k-5\\,000)\\times k -5\\,000\\\\[6pt]\n        &=480\\,000k^3 -5\\,000k^2-5\\,000k-5\\,000\n    \\end{align*}\n    $$\n\n    This continues for all $120$ payments and can be shown using the following series\n\n    $$\n    \\begin{align*}\n        FV&=480\\,000k^{120} -5\\,000k^{119}-5\\,000k^{118}-5\\,000k^{117}-...-5\\,000k-5\\,000 \n    \\end{align*}\n    $$\n\n\n    $$\n    \\begin{align*}\n         \\tag*{\\textbf{(A1)}}\n    \\end{align*}\n    $$\n\n    As the loan has been repaid in full we can replace $FV$ with $0$.\n\n    $$\n    \\begin{align*}\n         \\tag*{\\textbf{(M1)}}\n    \\end{align*}\n    $$\n\n\n    $$\n    \\begin{align*}\n        0&=480\\,000k^{120} -5\\,000k^{119}-5\\,000k^{118}-5\\,000k^{117}-...-5\\,000k-5\\,000\n    \\end{align*}\n    $$\n\n    We can then rearrange the equation above to get\n\n    $$\n    \\begin{align*}\n        480\\,000k^{120}&=5\\,000k^{119}+5\\,000k^{118}+5\\,000k^{117}+...+5\\,000k+5\\,000\n    \\end{align*}\t\n    $$\n\n    Recognise that the R.H.S. of the above is a geometric series with a first term of $5\\,000$ and a common ratio of $k$. Hence we can use the sum of a geometric sequence formula to write\n\n    $$\n    \\begin{align*}\n        480\\,000k^{120}&=5\\,000\\left(\\frac{k^{120}-1}{k-1}\\right) \\tag*{\\textbf{A1}}\\\\[12pt]\n        &\\hspace{-2.8em}\\answer{96k^{120}=\\dfrac{k^{120}-1}{k-1}}\\hspace{2em} \\text{... as required.}\n    \\end{align*}\n    $$\n\n  - Using a G.D.C. we can solve the equation found above.\n\n    $$\n    \\begin{align*}\n            96k^{120}&=\\frac{k^{120}-1}{k-1} \\\\[6pt]\n            k&=1.0038412... \\hspace{3.3em} [\\text{by using G.D.C.}]\n    \\end{align*}\n    $$\n\n    Hence\n\n    $$\n    \\begin{align*}\n            1.0038412...&=1+\\tfrac{r}{1200} \\\\[6pt]\n            r&=4.609419...\\tag*{\\textbf{A1}}\\\\[6pt]\n            &=\\answer{4.61\\%} \\hspace{3em} [\\text{by using G.D.C.}]\n    \\end{align*}\n    $$\n\n\n- \n  - She makes $7$ full years of payments plus an additional $4$ months, which gives\n\n    $$\n    \\begin{align*}\n            &=7 \\times 12 + 4\\\\[6pt]\n            &=88\n    \\end{align*}\n    $$\n\n    $\\answer{\\text{She makes }88\\text{ payments before the final payment.}}$\n\n    $$\n    \\begin{align*}\n         \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - You could use the Financial Solver on the G.D.C. with the following values\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/99444150-5a2b-403b-9011-a424e7a64bbf/images/64969ed8-1abe-4bf4-8320-5a1241012615/AA1175_table.JPEG)\n\n\n\n    $$\n    \\begin{align*}\n         \\tag*{\\textbf{(A1)}}\n    \\end{align*}\n    $$\n\n    Solving for $FV$ gives a remaining value of $150\\,286.301...$.\n    Hence the final payment is $\\boxed{\\text{150 300}}$ .\n\n    $$\n    \\begin{align*}\n         \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- Juanita pays $p$ per month for $60$ months, she then pays $2p$ per month for the remaining $60$ months.\n\n  $$\n  \\begin{align*}\n       \\tag*{\\textbf{(A1)}}\n  \\end{align*}\n  $$\n\n  Lets consider the first $60$ payments of  $p$ using a similar method to part (a) where $k=1+\\tfrac{4.61}{1200} = 1.0038...$\n\n  $$\n  \\begin{align*}\n      FV&=((480\\,000 \\times k - p)\\times k - p)...\\\\[6pt]\n      FV&=480\\,000k^{60}-pk^{59}-pk^{58}...-pk-p \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  Now let's consider the next $60$ payments of $2p$ which will clear the remaining balance, which means the future value is $$0$\n\n  $$\n  \\begin{align*}\n       \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}\n      0&=((480\\,000k^{60}-pk^{59}-pk^{58}...-p)\\times k - 2p)\\times k - 2p)...\\\\[6pt]\n      0&=480\\,000k^{120}-pk^{119}...-pk^{60}-2pk^{59}-2pk^{58}-...-2pk-2p\\\\[6pt]\n      480\\,000k^{120}&=pk^{119}...+pk^{60}+2pk^{59}+2pk^{58}+...+2pk+2p \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  This equation has a single unknown ($p$). However in its current form we cannot enter it into the calculator as there are too many terms!\n  We need to find a way to rewrite the sum in a simpler form.\n  We can do this by summing the RHS of the equation in two parts. We will let the first $60$ terms be part $A$ and the last $60$ terms be part $B$\n  To find the sum of part $A$ we can use the formula directly, pasrt $A$ has parameters $u_1=2p$, $r=1.0038...$ and $n=60$, therefore\n\n  $$\n  \\begin{align*}\n  S_A&=2p\\frac{(1.0038...)^{60}-1}{(1.0038...)-1} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  Let's reconsider the original equation and replace part $A$ with the simpler form found above\n\n  $$\n  \\begin{align*}\n      480\\,000k^{120}&=\\underbrace{pk^{119}...+pk^{60}}_{\\mathrm{B}}+\\underbrace{2pk^{59}+2pk^{58}+...+2pk+2p}_{\\mathrm{A}}\\\\[6pt]\n      480\\,000k^{120}&=\\underbrace{pk^{119}...+pk^{60}}_{\\mathrm{B}}+\\underbrace{2p\\frac{(1.0038...)^{60}-1}{(1.0038...)-1}}_{\\mathrm{A}}\n  \\end{align*}\n  $$\n\n  Part $B$ is more complicated. We can't simply sum $120$ terms as we only want to sum the last $60$ terms of the sequence.\n  Lets find the sum of the full $120$ terms and then subtract the sum of the first $60$ terms.\n  Part $B$ has parameters $u_1=p$, $r=1.0038...$ and $n=120$, therefore\n\n  $$\n  \\begin{align*}\n  S_B&=p\\frac{(1.0038...)^{120}-1}{(1.0038...)-1} - p\\frac{(1.0038...)^{60}-1}{(1.0038...)-1} \\tag*{\\textbf{M1A1}}\n  \\end{align*}\n  $$\n\n  Let's now rewrite the original equation and replace $S_B$ with the formula above\n\n  $$\n  \\begin{align*}\n      480\\,000(1.0038...)^{120}&=\\underbrace{p\\frac{(1.0038...)^{120}-1}{(1.0038...)-1} - p\\frac{(1.0038...)^{60}-1}{(1.0038...)-1}}_{\\mathrm{B}}+\\underbrace{2p\\frac{(1.0038...)^{60}-1}{(1.0038...)-1}}_{\\mathrm{A}}\n  \\end{align*}\n  $$\n\n  We can now solve this on the G.D.C.\n\n  $$\n  \\begin{align*}\n      p&=3465.61...\\\\[6pt]\n      p&=\\answer{\\$3466} \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n",
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
    title: 'Question 73',
    content:
      'The first two terms of an infinite geometric sequence are $u_1 = 20$ and\n$u_2 = 16\\sin^2 \\theta$, where $\\text{\\(0 < \\theta < 2\\pi\\)}$, and\n$\\theta \\neq \\pi$.\n\n- \n  - Find an expression for $r$ in terms of $\\theta$.\n  - Find the possible values of $r$. <span class="marks">[5]</span>\n\n\n- Show that the sum of the infinite sequence is\n$\\dfrac{100}{3 + 2\\cos 2\\theta}$.\n<span class="marks">[4]</span>\n\n- Find the values of $\\theta$ which give the greatest value of the\nsum. <span class="marks">[6]</span>\n\n',
    markScheme:
      '\n- \n  - The common ratio is\n\n    $$\n    \\begin{aligned}\n    r &= \\dfrac{u_2}{u_1} \\\\[6pt]\n    &= \\dfrac{16\\sin^2 \\theta}{20} \\\\[6pt]\n    &\\answer{= \\dfrac{4\\sin^2 \\theta}{5}}\\end{aligned}\n    $$\n\n  - Since $0 < \\theta < 2\\pi$ and $\\theta \\neq \\pi$, we have\n$\\sin \\theta \\neq 0$.\n    Hence we find\n\n    $$\n    \\begin{aligned}\n    0 < \\sin^2 \\theta &\\leq 1 \\\\[9pt]\n    0 < \\dfrac{4\\sin^2 \\theta}{5} &\\leq \\dfrac{4}{5} \\hspace{2.8em}\\end{aligned}\n    $$\n\n\n    $$\n    \\answer{0 < r \\leq \\dfrac{4}{5}}\n    $$\n\n\n- Using the double-angle formula for cosine, we have\n\n  $$\n  \\begin{aligned}\n  \\cos 2\\theta &= 1 - 2\\sin^2\\theta \\\\[6pt]\n  2\\cos 2\\theta &= 2 - 4\\sin^2\\theta \\\\[6pt]\n  3 + 2\\cos 2\\theta &= 5 - 4\\sin^2\\theta \\hspace{4em}\\end{aligned}\n  $$\n\n  Hence, using the sum of an infinite geometric sequence formula\n$S_{\\infty} = \\dfrac{u_1}{1-r}$,\n  we get\n\n  $$\n  \\begin{aligned}\n  S_{\\infty} &= \\dfrac{20}{1 - \\dfrac{4\\sin^2 \\theta}{5}} \\\\[6pt]\n  &= \\dfrac{100}{5-4\\sin^2 \\theta} \\\\[15pt]\n  &\\answer{= \\dfrac{100}{3 + 2\\cos 2\\theta}}\\end{aligned}\n  $$\n\n- The greatest value of the sum is\n\n  $$\n  \\begin{aligned}\n  \\dfrac{100}{3 + 2(-1)} &= 100 \\hspace{6.8em}\\end{aligned}\n  $$\n\n  Hence,\nsolving the equation $\\cos 2\\theta = -1$ for $\\theta$, we get\n\n  $$\n  \\begin{aligned}\n  2\\theta &= \\pi,\\, 3\\pi \\hspace{2.5em}\\end{aligned}\n  $$\n\n\n  $$\n  \\answer{\\theta = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2}} \\hspace{1.5em}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 74',
    content:
      'Bill takes out a bank loan of $\\$100\\hspace{0.15em}000$ to buy a premium\nelectric car, at an annual interest rate of\n$5.49$%. The interest is calculated at the end\nof each year and added to the amount outstanding.\n\n- Find the amount of money Bill would owe the bank after $10$ years.\nGive your answer to the nearest dollar. <span class="marks">[3]</span>\n\n\nTo pay off the loan, Bill makes quarterly deposits of $\\$P$ at the end\nof every quarter in a savings account, paying a nominal annual interest\nrate of $3.2$%. He makes his first deposit at\nthe end of the first quarter after taking out the loan.\n\n- Show that the total value of Bill\'s savings after $10$\nyears is $P\\bigg[\\dfrac{1.008^{40}-1}{1.008-1}\\bigg]$. <span class="marks">[3]</span>\n\n- Given that Bill\'s aim is to own the electric car after $10$\nyears, find the value for $P$ to the nearest dollar. <span class="marks">[3]</span>\n\n\nMelinda visits a different bank and makes a single deposit of\n$\\$\\hspace{0.05em}Q$, the annual $\\text{interest}$ rate being\n$3.5$%.\n\n- \n  - Melinda wishes to withdraw $\\$8000$ at the end of each year for\na period of $n$ years. Show that an expression for the minimum\nvalue of $Q$ is\n\n    $$\n    \\dfrac{8000}{1.035} + \\dfrac{8000}{1.035^2} + \\dfrac{8000}{1.035^3} + \\cdots + \\dfrac{8000}{1.035^n}.\n    $$\n\n  - Hence, or otherwise, find the minimum value of $Q$ that would\npermit Melinda to withdraw annual amounts of $\\$8000$\nindefinitely. Give your answer to the nearest dollar.\n<span class="marks">[6]</span>\n\n\n',
    markScheme:
      "\n- We have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d244213c-76e5-48b7-b9ee-a00f3bf9ce88/images/5edcedf3-7a6a-44da-b760-9ca13ffe649f/8d43689548a3d16e00609e684b76b38f90c0c20a.svg)\n\n\n  Hence, using the compound interest formula, we find\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.8em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n  &= 100\\hspace{0.15em}000\\bigg(1 + \\dfrac{5.49}{100\\times1}\\bigg)^{1\\times10} \\\\[12pt]\n  &\\answer{\\approx \\$170\\hspace{0.15em}653} \\hspace{8em}{(1)}\\end{aligned}\n  $$\n\n- The number of time periods in $10$ years is\n\n  $$\n  \\begin{aligned}\n  n &= (4)(10) \\\\[6pt]\n  &= 40\\end{aligned}\n  $$\n\n  The total value of Bill's savings after $10$\nyears is\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} &= P + P\\bigg(1 + \\dfrac{3.2}{100\\times4}\\bigg) + P\\bigg(1 + \\dfrac{3.2}{100\\times4}\\bigg)^2 + \\dots + P\\bigg(1 + \\dfrac{3.2}{100\\times4}\\bigg)^{39} \\\\[9pt]\n  &= P + P(1.008) + P(1.008)^2 + \\cdots + P(1.008)^{39} \\\\\n  \\end{aligned}\n  $$\n\n  We have a geometric sequence with the first term $u_1 = P$ and the\ncommon ratio $r = 1.008$.\nHence, using the sum of $n$ terms formula\n$S_n = \\dfrac{u_1(r^n - 1)}{r - 1}$ with $\\text{\\(n = 40\\)}$, we get\n\n  $$\n  \\begin{aligned}\n  \\mathrm{FV} &= S_{40} \\\\[12pt]\n  &=\\hspace{0.525em}\\answer{P\\bigg(\\dfrac{1.008^{40} - 1}{1.008 - 1}\\bigg)} \\hspace{8em}{(2)}\\end{aligned}\n  $$\n\n- Solving the equation $(1) = (2)$ for $P$, we obtain\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.45em} 170\\hspace{0.15em}653 &= P\\bigg(\\dfrac{1.008^{40} - 1}{1.008 - 1}\\bigg)  \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\answer{P \\approx \\$3637}\n  $$\n\n- \n  - We have\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/d244213c-76e5-48b7-b9ee-a00f3bf9ce88/images/50d1a7e3-b079-421d-9f26-30cd46ff690b/7fa99aa4ecafd8974b214fde355c840e109f39ef.svg)\n\n\n    Hence the amount of money in Melinda's account after $n$ years\nis\n\n    $$\n    \\begin{aligned}\n    \\hspace{3em} \\mathrm{FV} &= \\mathrm{PV}\\bigg(1 + \\dfrac{r}{100k}\\bigg)^{kn} \\\\[5pt]\n    &= Q\\bigg(1 + \\dfrac{3.5}{100\\times1}\\bigg)^{1\\times n} \\\\[12pt]\n    &= Q(1.035)^n\\end{aligned}\n    $$\n\n    Hence we deduce\n\n    $$\n    \\begin{aligned}\n    Q(1.035)^n &= 8000 + 8000(1.035) + 8000(1.035)^2 + \\cdots + 8000(1.035)^{n-1} \\\\[12pt]\n    Q &= \\dfrac{8000\\big[1 + 1.035 + 1.035^2 + \\cdots + 1.035^{n-1}\\big]}{1.035^n} \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\answer{Q = \\dfrac{8000}{1.035} + \\dfrac{8000}{1.035^2} + \\dfrac{8000}{1.035^3} + \\cdots + \\dfrac{8000}{1.035^n}} \\hspace{4em}\n    $$\n\n  - We have an infinite geometric sequence with the first term\n$u_1 = \\dfrac{8000}{1.035}$ and the common ratio\n$r = \\dfrac{1}{1.035}$.\nHence, using the sum of an infinite geometric\nsequence $\\text{formula}$ $\\text{\\(S_{\\infty} = \\dfrac{u_1}{1-r}\\)}$,\nwe obtain\n\n    $$\n    \\begin{aligned}\n    \\hspace{3em} Q &= \\sum_{k=0}^\\infty \\bigg[\\dfrac{8000}{1.035}\\bigg]\\bigg[\\dfrac{1}{1.035}\\bigg]^k \\\\[6pt]\n    &= \\dfrac{\\frac{8000}{1.035}}{1 - \\frac{1}{1.035}} \\\\[15pt]\n    &\\answer{= \\$228\\hspace{0.15em}571}\\end{aligned}\n    $$\n\n\n",
    paper: 'PAPER2',
    difficulty: 'HARD',
    calculator: true,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 1',
    content:
      'Let $f$ and $g$ be functions such that $g(x) = 3f(x-2)+1$, for\n$x \\in \\mathbb{R}$.\nThe graph of $g$ is obtained from the graph of $f$ after the following\ntransformations:\n\n$$\n\\begin{aligned}\n&\\text{a vertical stretch by a factor of $k$, followed by} \\\\\n&\\text{a horizontal translation of $a$ units, followed by} \\\\\n&\\text{a vertical translation of $b$ units}. \\\\\n\\end{aligned}\n$$\n\n\n- Write down the value of:\n  \n  - $k$;\n  - $a$;\n  - $b$. <span class="marks">[3]</span>\n\n\n\nLet $h(x) = -2g(x)$, for $x \\in \\mathbb{R}$.\nThe point P$(3,4)$ on the graph of $g$ is mapped to point Q on the graph\nof $h$.\n\n- Find the coordinates of Q. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- \n  - $\\answer{k = 3}$\n  - $\\answer{a = 2}$\n  - $\\answer{b = 1}$\n\n- The graph of $h$ is obtained from the graph of $g$ using two\ntransformations.\n  Their geometric descriptions are:\n\n  $$\n  \\begin{aligned}\n  \\text{transformation $1$}: &\\hspace{0.75em}\\hspace{0.525em}\\text{vertical stretch by a factor of $2$;} \\\\[6pt]\n  \\text{transformation $2$}: &\\hspace{0.75em}\\hspace{0.525em}\\text{reflection in the $x$-axis.}\\end{aligned}\n  $$\n\n  If we apply the transformations $1$ and $2$ to P, we find\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/81adf7f8-647c-479f-bd0f-8f896cd0c7c3/images/fe8c659b-613c-4fc0-a165-b07d10509323/1510a052325892668888784527ddbb81323a45d9.svg)\n\n\n  Hence the coordinates of Q are\n$\\answer{(3,-8)}$\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
    sort: 1,
    maxMark: '6',
    difficultyLevel: '2.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 2',
    content:
      'The following diagram shows the graph of $y = f(x)$, for\n$-1 \\leq x \\leq 2$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/8407806b-3c8d-4f8a-ba57-52619272880d/images/ee08b3c6-49a0-41f7-814f-bb4d9079b11c/ccc9d5942ccfefc2e6313a34922fed1ada13594f.svg)\n\n\n\n- Write down the value of:\n  \n  - $f(1)$;\n  - $f^{-1}(-2)$. <span class="marks">[2]</span>\n\n\n- Find $(f\\circ f)(1)$. <span class="marks">[2]</span>\n\n- Sketch the graph of $y = f(-x)$ on the same grid above. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - $\\answer{f(1) = 2}$\n  - $\\answer{f^{-1}(-2) = -1}$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  (f\\circ f)(1) &= f(f(1)) \\\\[6pt]\n  &= f(2) \\\\[6pt]\n  &\\answer{= 6}\\end{aligned}\n  $$\n\n- The graph of $y = f(-x)$ is a reflection of the graph of $y = f(x)$\nin the $y$-axis.\n  Hence, if we sketch the graph of $y = f(-x)$ on the same grid below,\nwe have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/8407806b-3c8d-4f8a-ba57-52619272880d/images/64f14811-163b-49f4-8bcc-e95f5b9a1d96/d2b3518aa3484d1ffd19b0a1dd3f20d6f92c6046.svg)\n\n\n',
    paper: 'PAPER1',
    difficulty: 'EASY',
    calculator: false,
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
      'Let $f(x) = x^3$ and $g(x) = 5(x-2)^3$, for $x \\in \\mathbb{R}$.\nThe graph of $g$ can be obtained from the graph of $f$ using two transformations.\n\n- Give a full geometric description of each of the transformations. <span class="marks">[2]</span>\n\n\nThe graph of $g$ is translated by 4 units in the direction of the positive $x$-axis, and 1 unit in the direction of the negative $y$-axis to give the graph of a\nfunction $h$.\nThe point P$(1,1)$ on the graph of $f$ is translated to point Q on the\ngraph of $h$.\n\n- Find the coordinates of Q. <span class="marks">[4]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\text{transformation $1$}: &\\hspace{0.75em}\\hspace{0.525em}\\answer{\\text{vertical stretch by a factor of $5$}} \\\\[6pt]\n  \\text{transformation $2$}: &\\hspace{0.75em}\\hspace{0.525em}\\answer{\\text{translation of 2 units in the direction of the positive $x$-axis.}}\\end{aligned}\n  $$\n\n- If we apply the transformations $1$ and $2$ from part (a), and transformation $3$ from part (b) to P, we find\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/e1a61284-0cae-4301-9a9e-89a7e58d9d56/images/b28c508c-6131-4aee-a6fd-a87b131e9f21/577066d1f46b6880207621796d732b7e8ac43d46.svg)\n\n\n  Hence the coordinates of Q are\n$\\answer{(7,4)}$\n',
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
      'Let $f(x) = 0.2e^{x+2} - 4$, for $-3 \\leq x \\leq 2$.\n\n- On the following grid, sketch the graph of $y = f(x)$. <span class="marks">[3]</span>\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/b7400009-b3d5-4424-8dfe-4781fa255590/images/4d1c7bf9-8d2a-4f7a-945e-f582b73039b2/219ede634589aee775d4d590dd79b30ff5c63914.svg)\n\n\n- Find the coordinates of:\n  \n  - the $x$-intercept;\n  - the $y$-intercept. <span class="marks">[2]</span>\n\n\n\nThe graph of $f$ is reflected in the $x$-axis, then translated 1 unit in the direction of the positive $x$-axis and 2 units in the direction of the positive $y$-axis to obtain the graph of a function $g$.\n\n- Find $g(x)$. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- If we draw the graph of $y = f(x)$ for $-3 \\leq x \\leq 2$ [by using\nG.D.C.], we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/b7400009-b3d5-4424-8dfe-4781fa255590/images/0c8cb343-6319-4c4b-bd01-6881dfb5c2ff/a0ce7feb5a9182c2d088b3711cfba75a324b8033.svg)\n\n\n- \n  - Solving the equation $f(x) = 0$ for $x$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{3.2em} 0.2e^{x+2} - 4 &= 0 \\\\[6pt]\n    x &\\approx 0.996 \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n    $$\n\n    Hence the coordinates of the $x$-intercept are\n$\\answer{(0.996,0)}$\n  - Evaluating $y = f(x)$ for $x = 0$, we have\n\n    $$\n    \\begin{aligned}\n    y &= f(0) \\\\[6pt]\n    &= 0.2e^{0+2} - 4 \\hspace{0.4em} \\\\[7pt]\n    &\\approx -2.52\\end{aligned}\n    $$\n\n    Hence the coordinates of the\n$y$-intercept are\n$\\answer{(0,-2.52)}$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{5.5em} g(x) &= -f(x-1) + 2 \\\\[6pt]\n  &= -\\big[0.2e^{(x-1)+2} - 4\\big] + 2 \\\\[6pt]\n  &\\answer{= -0.2e^{x+1} + 6}\\end{aligned}\n  $$\n\n',
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
    title: 'Question 5',
    content:
      'Let $f(t) = 3t^2 + 27$, where $t > 0$.\nThe graph of a function $g$ is obtained when the graph of $f$ is\ntransformed by\n\n$$\n\\begin{aligned}\n&\\text{a stretch by a scale of\\hspace{0.05em} $\\dfrac{1}{9}$ \\hspace{0.05em}parallel to the $y$-axis, followed by} \\\\\n&\\text{a horizontal translation of 4 and a vertical translation of -5}\\\\\n\\end{aligned}\n$$\n\n\n- Find $g(t)$, giving your answer in the form $a(t - b)^2 + c$.\n<span class="marks">[4]</span>\n\n\nA particle moves along a straight line so that its velocity in\nm s$^{-1}$, at time $t$ seconds, is given by\n$g(t)$.\n\n- Find the distance the particle travels between $t = 7$ and\n$t = 10$. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} g(t) &= \\dfrac{1}{9}f(t - 4) - 5  \\\\[6pt]\n  &= \\dfrac{1}{9}\\big[3(t - 4)^2 + 27\\big] - 5 \\\\[6pt]\n  &\\answer{= \\dfrac{1}{3}(t - 4)^2 -2}\\end{aligned}\n  $$\n\n- The distance the particle travels between $t = 7$ and $t = 10$ is\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.8em} \\text{distance} &= \\int_7^{10} \\left|g(t)\\right| \\mathrm{d}t \\\\[2pt]\n  &= \\int_7^{10} \\left|\\dfrac{1}{3}(t - 4)^2 -2\\right| \\mathrm{d}t \\\\[9pt]\n  &\\answer{= 15 \\text{ m}}  \\hspace{3em} [\\text{by using G.D.C.}]\\end{aligned}\n  $$\n\n',
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
    title: 'Question 6',
    content:
      'Consider $f(x)=2\\cos\\left(x-\\frac{\\pi}{2}\\right)+3$ and $g(x)=4\\cos\\left(x+\\frac{\\pi}{2}\\right)+2$.\nThe function $f$ is mapped onto $g$\r\nby three transformations.\n\n- Fully describe each of the transformations and the order in which they must be applied. <span class="marks">[3]</span>  \n\nA new function is such that $h(x)=g(x)+k$ where $k \\in \\mathbb{R}$.\n\n- Find the minimum value of $k$ such that $h(x) \\geq 0$ for all $x$. <span class="marks">[2]</span>  \n',
    markScheme:
      '\n- By considering the differences between the functions we can work out the transformations needed to map $f(x)$ to $g(x)$.\n  First we notice that the inner functions are different.\n\n  $$\n  \\begin{align*}\n  f(x)=2\\cos\\left(x\\textcolor{blue}{\\,-\\,\\frac{\\pi}{2}}\\right)+3\\\\[6pt]\n  g(x)=4\\cos\\left(x\\textcolor{blue}{\\,+\\,\\frac{\\pi}{2}}\\right)+2\n  \\end{align*} \n  $$\n\n  If we add $\\pi$ units to the inner function of $f(x)$, it will equal the inner function of  $g(x)$.\n\n  $$\n  \\begin{align*}\n       \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n  Hence\n\n  $$\n  \\begin{align*}\n  f(x+\\pi)&=2\\cos\\left(x-\\frac{\\pi}{2}+\\pi\\right)+3\\\\[6pt]\n  f(x+\\pi)&=2\\cos\\left(x+\\frac{\\pi}{2}\\right)+3\n  \\end{align*}\n  $$\n\n  Comparing the function $f(x+\\pi)$ to $g(x)$, we notice that the coefficient of cosine has been doubled.\n\n  $$\n  \\begin{align*}\n  f(x+\\pi)=\\textcolor{green}{2}\\cos\\left(x+\\frac{\\pi}{2}\\right)+3\\\\[6pt]\n  g(x)=\\textcolor{green}{4}\\cos\\left(x+\\frac{\\pi}{2}\\right)+2\n  \\end{align*} \n  $$\n\n  Hence, if we multiply $f(x+\\pi)$ by $2$ we would have\n\n  $$\n  \\begin{align*}\n       \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}\n  2f(x+\\pi)=2(2\\cos\\left(x+\\frac{\\pi}{2}\\right)+3)\\\\[6pt]\n  2f(x+\\pi)=4\\cos\\left(x+\\frac{\\pi}{2}\\right)+6\n  \\end{align*} \n  $$\n\n  If we continue comparing the function $2f(x+\\pi)$ to $g(x)$, we see there is a difference of $4$ units.\n\n  $$\n  \\begin{align*}\n  2f(x+\\pi)&=4\\cos\\left(x+\\frac{\\pi}{2}\\right)\\textcolor{red}{\\,+\\,6}\\\\[6pt]\n  g(x)&=4\\cos\\left(x+\\frac{\\pi}{2}\\right)\\textcolor{red}{\\,+\\,2}\n  \\end{align*} \n  $$\n\n  Hence, if we apply a vertical shift of $-4$ to $2f(x+\\pi)$, we will obtain $g(x)$.\n\n  $$\n  \\begin{align*}\n       \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}\n  2f(x+\\pi)-4&=4\\cos\\left(x+\\frac{\\pi}{2}\\right)+6-4\\\\[6pt]\n  &=4\\cos\\left(x+\\frac{\\pi}{2}\\right)+2\\\\[6pt]\n  &=g(x)\n  \\end{align*}\n  $$\n\n  Summarising the $3$ transformations, there is\n  a horizontal shift $\\textbf{left}$ of $\\pi$ units, followed by a vertical stretch by a scale factor of $2$ , followed by a vertical shift of $-4$ units.\n  Note: The horizontal shift could also come after the vertical transformations, however the two vertical transformations must be applied in the order given.\n- In order to apply a vertical translation such that $g(x)>0$ for all $x$, we need to know the minimum value of $g(x)$.\n  The minimum value of cosine is $-1$. Hence we can determine the minimum of $g(x)$\n\n  $$\n  \\begin{align*}\n       \\tag*{\\textbf{(M1)}}\n  \\end{align*}\n  $$\n\n\n  $$\n  \\begin{align*}\n      g(x)&=4\\cos\\left(x+\\frac{\\pi}{2}\\right)+2\\\\[6pt]\n      &=4(-1)+2\\\\[6pt]\n      &=-2\n  \\end{align*}\n  $$\n\n  Hence, we need to translate the graph vertically upwards at least $2$ units.\n  Therefore, the minimum value is $\\answer{k=2}$.\n\n  $$\n  \\begin{align*}\n       \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '5',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'SAQ',
    title: 'Question 7',
    content:
      'Consider the functions $f(x)=3\\cos(x)+\\dfrac{9}{2}$ and $g(x)=3\\cos\\left(x+\\dfrac{\\pi}{3}\\right)+A$, where $x\\in \\mathbb{R}$ and $A< \\dfrac{9}{2}$.\n\n- Describe a sequence of two transformations that transforms the graph of $f$ to the graph of $g$. <span class="marks">[3]</span>  \n\nThe $y$-intercept of the graph $g$ is at the point $\\left(0\\,,\\dfrac{9}{2}\\right)$\n\n- Find the range of $g$. <span class="marks">[4]</span>  \n',
    markScheme:
      '\n- Applying a translation of $a$ units in the direction of the negative $x$-axis to a function $f$ is shown as $f(x+a)$, and a translation of $b$ units in the direction of the negative $y$-axis is shown as $f(x)-b$.\n  Therefore a translation of $\\dfrac{\\pi}{3}$ units in the direction of the negative $x$-axis would be $f\\bigg(x+\\dfrac{\\pi}{3}\\bigg)$. We have\n\n  $$\n  \\begin{align*}\n  f\\bigg(x+\\dfrac{\\pi}{3}\\bigg) &= 3\\cos\\bigg(x+\\dfrac{\\pi}{3}\\bigg)+\\dfrac{9}{2}\n  \\end{align*}\n  $$\n\n  Given that $A < \\dfrac{9}{2}$, if we then apply a translation of $\\dfrac{9}{2} - A$ units in the direction of the negative $y$-axis, we get\n\n  $$\n  \\begin{align*}\n  f\\bigg(x+\\dfrac{\\pi}{3}\\bigg) - \\bigg(\\dfrac{9}{2} - A\\bigg) &= 3\\cos\\bigg(x+\\dfrac{\\pi}{3}\\bigg)+\\dfrac{9}{2} - \\bigg(\\dfrac{9}{2} - A\\bigg) \\\\[10pt]\n  &= 3\\cos\\bigg(x+\\dfrac{\\pi}{3}\\bigg) + A \\\\[10pt]\n  &= g(x)\n  \\end{align*}\n  $$\n\n  Therefore we have the following transformations in any order\n\n  $$\n  \\begin{align*}\n  T_1 &: \\hspace{0.5em}\\hspace{0.525em}\\tcbhighmath{\\text{translation of $\\dfrac{\\pi}{3}$ units in the direction of the negative $x$-axis}} \\\\[10pt]\n  T_2 &: \\hspace{0.5em}\\hspace{0.525em}\\tcbhighmath{\\text{translation of $\\dfrac{9}{2} - A$ units in the direction of the negative $y$-axis}}\n  \\end{align*}\n  $$\n\n- We have $g(0)=\\dfrac{9}{2}$. Solving for $A$, we get\n\n  $$\n  \\begin{align*}\n  3\\cos\\left(0+\\dfrac{\\pi}{3}\\right)+A &= \\dfrac{9}{2} \\\\[10pt]\n  3\\left(\\dfrac{1}{2}\\right) + A & = \\dfrac{9}{2} \\\\[10pt]\n  A & = 3 \\\\[-12pt]\n  \\end{align*}\n  $$\n\n  Therefore $g(x)=3\\cos\\left(x+\\dfrac{\\pi}{3}\\right)+3$ , and the following inequalities hold:\n\n  $$\n  \\begin{align*}\n  -1\\leq \\cos\\left(x+\\dfrac{\\pi}{3}\\right) &\\leq 1 \\\\[10pt]\n  -3\\leq 3\\cos\\left(x+\\dfrac{\\pi}{3}\\right) &\\leq 3 \\\\[10pt]\n  0\\leq 3\\cos\\left(x+\\dfrac{\\pi}{3}\\right)+3 &\\leq 6 \\\\[10pt]\n  0\\leq g(x) &\\leq 6 \\\\[-12pt]\n  \\end{align*}\n  $$\n\n  Therefore the range of $g$ is $\\answer{0\\leq g(x) \\leq 6}$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '7',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 8',
    content:
      '[Maximum marks: 10]\nThe function $f(x)=a\\sin{(bx)}+c$ where $0 \\leq x \\leq \\pi$ and $a,b,c \\in \\mathrm{R}$ is shown below.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/697d6ed2-4137-494f-ada6-07cd489eefc7/images/0547420d-b08d-4f9e-bd37-d903d3be790b/AA1154.JPEG)\n\n\nThe coordinates of the first two stationary points are $(\\tfrac{\\pi}{6}, -1)$ and $(\\tfrac{\\pi}{2},3)$ respectively.\n\n- Find\n  \n  - a.\n  - c.\n  - b. <span class="marks">[5]</span>\n\n\n\nThe domain of $f(x)$ is restricted to $\\tfrac{\\pi}{2}\\leq x \\leq k$, where $k \\in \\mathrm{R}$. This restriction allows an inverse to exist.\n\n- Find the largest possible value of $k$. <span class="marks">[2]</span>  \n\nAnother function is defined as $g(x)=-2f(\\tfrac{1}{2}x)+3$.\n\n- Determine the coordinates of the first maximum value of $g(x)$. <span class="marks">[3]</span>  \n',
    markScheme:
      "\n- \n  - To find the value of $a$, which is known as the amplitude, we must find half of the vertical distance between the maximum and minimum values.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/697d6ed2-4137-494f-ada6-07cd489eefc7/images/a928181a-4fcd-4ea9-b71e-dc8f5cea02c9/AA1154a.JPEG)\n\n\n    We can see from the diagram that the curve is a reflection of $\\sin{x}$ in the $x-$axis, therefore the value of $a$ must be negative.\n\n    $$\n    \\begin{align*}\n        \\textcolor{white}{hack} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n    Therefore\n\n    $$\n    \\begin{align*}\n        a&=-\\frac{3-(-1)}{2}\\\\[6pt]\n        &=\\hspace{0.525em}\\answer{-2}  \\tag*{\\textbf{R1}}\n    \\end{align*}\n    $$\n\n  - To find the  value of $c$ we must find the $y-$value half way between the maximum and minimum values.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/697d6ed2-4137-494f-ada6-07cd489eefc7/images/f6143e17-9146-4ce4-9c33-b01bced64c56/AA1154b.JPEG)\n\n\n    Therefore\n\n    $$\n    \\begin{align*}\n        c&=\\frac{3+(-1)}{2}\\\\[6pt]\n        &=\\hspace{0.525em}\\tcbhighmath{1}  \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n  - To find $b$ we use the formula $T=\\frac{2\\pi}{b}$.\n    We can use the diagram to find $T$ and see that $\\frac{T}{2}$ is the $x-$distance between the maximum and minimum values.\n    ![SkillUpp Image](https://assets.revisionvillage.com/public/question/697d6ed2-4137-494f-ada6-07cd489eefc7/images/c7dc5b6a-813a-4ffb-bafd-b8fb49ff2f45/AA1154c%20(1).JPEG)\n\n\n    Hence\n\n    $$\n    \\begin{align*}\n        \\frac{T}{2}&=\\left(\\tfrac{\\pi}{2}-\\tfrac{\\pi}{6}\\right)\\\\[6pt]\n        T&=2\\left(\\tfrac{\\pi}{2}-\\tfrac{\\pi}{6}\\right)\\\\[6pt]\n        T&=\\frac{2\\pi}{3} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n    Using this value of $T$ and the formula stated above we can find $b$.\n\n    $$\n    \\begin{align*}\n        \\frac{2\\pi}{3}&=\\frac{2\\pi}{b}\\\\[6pt]\n        b&=\\hspace{0.525em}\\answer{3} \\tag*{\\textbf{A1}}\n    \\end{align*}\n    $$\n\n\n- For an inverse to exist the function must be one-to-one, this means it must pass the horizontal line test. We can see this is satisfied by the red part of $f(x)$  shown below\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack} \\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/697d6ed2-4137-494f-ada6-07cd489eefc7/images/2b4f5cbc-7374-4bd7-a0b3-ee6657792bc7/AA1154inv.JPEG)\n\n\n  We can see that if we add one complete time period to $\\tfrac{\\pi}{6}$ we will get $k$, hence\n\n  $$\n  \\begin{align*}\n  \tk&=\\tfrac{\\pi}{6}+\\tfrac{2\\pi}{3}\\\\[6pt]\n  \t&=\\hspace{0.525em}\\tcbhighmath{\\tfrac{5\\pi}{6}}  \\tag*{\\textbf{A1}}\n  \\end{align*}\n  $$\n\n- First we split the vertical and horizontal transformations.\n  The inner function of $f$ is the horizontal transformations and everything else is vertical.\n\n  $$\n  \\begin{align*}\n  \t&-2f(\\tfrac{1}{2}x)+3\\\\[6pt]\n  \t&\\text{Vertical}& \\hspace{1em} & \\text{Horizontal}\\\\[6pt]\n  \t&\\times -2 & \\hspace{1em} & \\div 2\\\\[6pt]\n  \t&+3 & \\hspace{1em} &\n  \\end{align*}\n  $$\n\n  Lets do the vertical transformations first. We don't need to transform the entire function. It is easier to identify a single point and transform that.\n  Notice that we are multiplying by a negative number, that means $g$ will be a vertical reflection of $f$.\n  Therefore the first maximum point of $g$ will be the image of the transformation of the first minimum point of $f$.\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack} \\tag*{\\textbf{M1}}\n  \\end{align*}\n  $$\n\n  Therefore we need to apply our transformations to the point $(\\tfrac{\\pi}{6},-1)$.\n  We transform the $y$-coordinate by $\\times -2$ and then $+3$, therefore the transformed $y$-coordinate is $-1\\times-2+3=5$.\n  We transform the $x$-coordinate by $\\times\\tfrac{1}{1/2}$.therefore the transformed $x$-coordinate is $\\tfrac{\\pi}{6}\\times2=\\tfrac{\\pi}{3}$.\n  Therefore $\\answer{\\text{the first maximum of }g(x)\\text{ has coordinates }(\\tfrac{\\pi}{3}, 5).}$\n\n  $$\n  \\begin{align*}\n      \\textcolor{white}{hack} \\tag*{\\textbf{A1A1}}\n  \\end{align*}\n  $$\n\n",
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: null,
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 9',
    content:
      'Let $f(x) = 3x^2 + 12x + 9$, for $x \\in \\mathbb{R}$.\n\n- For the graph of $f$, find:\n  \n  - the $y$-intercept;\n  - the $x$-intercepts. <span class="marks">[4]</span>\n\n\n\nThe function $f$ can be written in the form $f(x) = a(x-h)^2+k$.\n\n- Find the values of $a$, $h$ and $k$. <span class="marks">[5]</span>\n\n- For the graph of $f$, write down:\n  \n  - the coordinates of the vertex;\n  - the equation of the axis of symmetry. <span class="marks">[2]</span>\n\n\n\nThe graph of a function $g$ is obtained from the graph of $f$ by a reflection in the $x$-axis, followed by a translation of 4 units in the direction of the positive $y$ axis.\n\n- Find $g(x)$, giving your answer in the form\n$g(x) = px^2 + qx + r$.<span class="marks">[4]</span>  \n',
    markScheme:
      '\n- \n  - Evaluating $f(x) = 3x^2 + 12x + 9$ for $x = 0$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{5em} f(0) &= 3(0)^2 + 12(0) + 9 \\\\[6pt]\n    &= 9 \\end{aligned}\n    $$\n\n    Hence the $y$-intercept is\n$\\answer{\\mathrm{A}(0,9)}$\n  - Solving the equation $f(x) = 0$ for $x$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{1.5em} 3x^2 + 12x + 9 &= 0 \\hspace{2em} \\\\[6pt]\n    x^2 + 4x + 3 &= 0 \\\\[7pt]\n    (x+3)(x+1) &= 0 \\\\[7pt]\n    x &= -3,\\hspace{0.25em}-1 \\\\\n    \\end{aligned}\n    $$\n\n    Hence the\n$x$-intercepts are\n$\\answer{\\mathrm{B}(-3,0)}$\nand\n$\\answer{\\mathrm{C}(-1,0)}$\n\n- Using the method of completing the square, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.9em} f(x) &= 3x^2 + 12x + 9 \\\\[6pt]\n  &= 3\\big[x^2 + 4x\\big] + 9 \\\\[6pt]\n  &= 3\\big[(x + 2)^2 - 4\\big] + 9 \\\\[6pt]\n  &= 3(x + 2)^2 - 3 \\\\\n  \\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{a = 3,\\hspace{0.25em} h = -2}$\nand  $\\answer{k = -3}$\n- \n  - $\\answer{(-2,-3)}$\n  - $\\answer{x = -2}$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{4em} g(x) &= -f(x)+4 \\\\[6pt]\n  &= -(3x^2 + 12x + 9)+4 \\\\[6pt]\n  &\\answer{= -3x^2 - 12x - 5}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 10',
    content:
      'Let $f(x) = 2x^2 + 4x + p$, for $x \\in \\mathbb{R}$, where\n$p \\in \\mathbb{Z}$.\n\n- The equation $f(x) = 0$ has two equal roots.\n  \n  - Write down the value of the discriminant of $f$.\n  - Show that $p = 2$. <span class="marks">[3]</span>\n\n\n- For the graph of $f$, find:\n  \n  - the equation of the axis of symmetry.\n  - the coordinates of the vertex; <span class="marks">[4]</span>\n\n\n- Write down the solution to the equation $f(x) = 0$. <span class="marks">[1]</span>\n\n- The function $f$ can be written in the form $f(x) = a(x-h)^2 + k$.\nFind\nthe values of $a$, $h$ and $k$. <span class="marks">[5]</span>\n\n- The graph of a function $g$ is obtained from the graph of $f$ by a\nreflection\nin the $x$-axis. Find the coordinates of the vertex of the graph of\n$g$. <span class="marks">[2]</span>\n\n',
    markScheme:
      '\n- \n  - $\\answer{\\triangle  = 0}$\n  - We have\n\n    $$\n    \\begin{aligned}\n    \\hspace{2em} \\triangle  &= b^2 - 4ac \\\\[4pt]\n    0 &= 4^2 - 4(2)(p) \\hspace{0.5em} \\\\[5pt]\n    0 &= 16 - 8p \\\\[5pt]\n    16 &= 8p \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\answer{p = 2} \\hspace{2.9em}\n    $$\n\n\n- \n  - Using the axis of symmetry formula, we get\n\n    $$\n    \\begin{aligned}\n    x &= -\\dfrac{b}{2a} \\\\[6pt]\n    x &= -\\dfrac{4}{2(2)} \\hspace{1.4em} \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\answer{x = -1} \\hspace{2.9em}\n    $$\n\n  - Evaluating $f(x)=2x^2 + 4x + 2$ for $x = -1$, we have\n\n    $$\n    \\begin{aligned}\n    \\hspace{2.2em} f(-1) &= 2(-1)^2 + 4(-1) + 2 \\\\[8pt]\n    &= 0\\end{aligned}\n    $$\n\n    Hence the coordinates of the vertex are\n$\\answer{(-1,0)}$\n\n- $\\answer{x=-1}$\n- Using the method of completing the square, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3em} f(x) &= 2x^2 + 4x + 2 \\\\[6pt]\n  &= 2\\big[x^2 + 2x\\big] + 2 \\\\[6pt]\n  &= 2\\big[(x+1)^2 - 1\\big] + 2 \\\\[6pt]\n  &= 2(x+1)^2\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{a = 2,\\hspace{0.25em} h = -1}$\nand  $\\answer{k = 0}$\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.2em}  g(x) &= -f(x) \\\\[6pt]\n  &= -2(x+1)^2\\end{aligned}\n  $$\n\n  Hence the coordinates of the vertex of\nthe graph of $g$ are\n$\\answer{(-1,0)}$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 11',
    content:
      'Let $f(x) = 2(x-1)^2-8$, for $x\\in\\mathbb{R}$.\n\n- Show that $f(x) = 2x^2-4x-6$. <span class="marks">[2]</span>\n\n- For the graph of $f$:\n  \n  - write down the coordinates of the vertex;\n  - write down the $y$-intercept;\n  - find both $x$-intercepts. <span class="marks">[7]</span>\n\n\n- Hence sketch the graph of $f$. <span class="marks">[3]</span>\n\n\nLet $g(x) = 6x^2$, for $x\\in\\mathbb{R}$.\nThe graph of $f$ may be obtained from the graph of $g$ using the\nfollowing three transformations:\n\n$$\n\\begin{aligned}\n\\hspace{1em} & \\bullet\\text{ a compression of scale factor $a$ in the $y$-direction, followed by} \\\\\n& \\bullet\\text{ a horizontal translation of $h$ units, followed by} \\\\\n& \\bullet\\text{ a vertical translation of $k$ units.}\n\\end{aligned}\n$$\n\n\n- Find the values of $a, h$ and $k$. <span class="marks">[3]</span>  \n',
    markScheme:
      '\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.9em} f(x) &= 2(x-1)^2-8 \\\\[6pt] \n  &= 2(x^2-2x+1)-8 \\\\[6pt]\n  &\\answer{= 2x^2-4x-6}\\end{aligned}\n  $$\n\n- \n  - $\\answer{(1,-8)}$\n  - $\\answer{\\text{P}(0,-6)}$\n  - Solving the equation $f(x) = 0$ for $x$, we have\n\n    $$\n    \\begin{aligned}\n    2x^2-4x-6 &= 0 \\\\[6pt]\n    x^2-2x-3 &= 0 \\\\[6pt]\n    \\hspace{0.8em} (x+1)(x-3) &= 0 \\\\[6pt]\n    x &= -1,\\hspace{0.25em}3\\end{aligned}\n    $$\n\n    Hence the $x$-intercepts\nare\n$\\answer{\\text{A}(-1,0)}$\nand\n$\\answer{\\text{B}(3,0)}$\n\n- If we sketch the graph of $f$, we have\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/defd40b3-8635-4c03-88d0-1ea05c7ccca1/images/42674bdd-229f-43b4-bb47-2584f965f100/8374016b8a888aa9fc9466667cfab6ca4babdde2.svg)\n\n\n- We have\n\n  $$\n  \\begin{aligned}\n  f(x) &= ag(x-h)+k \\\\[6pt]\n  2(x-1)^2 - 8 &= a\\big[6(x-h)^2\\big]+k \\\\[6pt]\n  2(x-1)^2 - 8 &= 6a(x-h)^2+k \\hspace{2.5em}\\end{aligned}\n  $$\n\n  Hence we\nfind\n$\\answer{a = 1/3,\\hspace{0.25em} h = 1}$\nand  $\\answer{k = -8}$\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 12',
    content:
      'Let $f(x) = 2x^2-8x+6$, for $x \\in \\mathbb{R}$.\n\n- Write down the value of $f(0)$. <span class="marks">[1]</span>\n\n- Solve the equation $f(x) = 0$. <span class="marks">[3]</span>\n\n\nThe function $f$ can be written in the form $f(x) = a(x-h)^2+k$.\n\n- Find the values of $a$, $h$ and $k$. <span class="marks">[5]</span>\n\n- For the graph of $f$, write down:\n  \n  - the coordinates of the vertex;\n  - the equation of the axis of symmetry. <span class="marks">[2]</span>\n\n\n\nThe graph of a function $g$ is obtained from the graph of $f$ by a reflection in the $x$-axis, followed by a translation of 1 unit to the right and 3 units up.\n\n- Find $g(x)$, giving your answer in the form\n$g(x) = px^2+qx+r$. <span class="marks">[4]</span>  \n',
    markScheme:
      '\n- $\\answer{f(0) = 6}$\n- Solving the equation $f(x) = 0$ for $x$, we get\n\n  $$\n  \\begin{aligned}\n  2x^2-8x+6 &= 0 \\\\[6pt]\n  x^2-4x+3 &= 0 \\\\[7pt]\n  (x-1)(x-3) &= 0 \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{6.8em} \\answer{x = 1,\\hspace{0.25em}3}\n  $$\n\n- Using the method of completing of square, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{1em} f(x) &= 2x^2-8x+6 \\\\[6pt]\n  &= 2\\big[x^2-4x\\big]+6 \\\\[6pt]\n  &= 2\\big[(x-2)^2-4\\big]+6 \\\\[6pt]\n  &= 2(x-2)^2-2\\end{aligned}\n  $$\n\n  Hence we find\n$\\answer{a = 2,\\hspace{0.25em}h=2}$\nand  $\\answer{k=-2}$\n- \n  - $\\answer{(2,-2)}$\n  - $\\answer{x = 2}$\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.4em} g(x) &= -f(x-1)+3 \\\\[6pt]\n  &= -\\big[2((x-1)-2)^2-2\\big]+3 \\\\[6pt]\n  &= -2(x-3)^2+5 \\\\[6pt]\n  &= -2(x^2-6x+9)+5 \\\\[6pt]\n  &\\answer{= -2x^2+12x-13}\\end{aligned}\n  $$\n\n',
    paper: 'PAPER1',
    difficulty: 'MEDIUM',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '3.5'
  },
  {
    paperId: '',
    selection: 'Selection A',
    type: 'ERQ',
    title: 'Question 13',
    content:
      'Let $f(x) = a(x+1)(x+5)$, for $x \\in \\mathbb{R}$, where\n$a \\in \\mathbb{Z}$. The following diagram shows part of the graph of\n$f$.\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b2539ad3-5cb1-47b4-82fb-0f17c7d9b8b2/images/5a0794f4-b904-4254-9ade-c72ff4d130c0/c560b93b90031104353dd8752d2c6976f60f1751.svg)\n\n\nThe graph of $f$ has $x$-intercepts at $(p,0)$ and $(q,0)$, and a\n$y$-intercept at $(0,-10)$.\n\n- \n  - Write down the value of $p$ and the value of $q$.\n  - Find the value of $a$. <span class="marks">[6]</span>\n\n\n- Find the equation of the axis of symmetry. <span class="marks">[2]</span>\n\n- Find the coordinates of the vertex. <span class="marks">[3]</span>\n\n\nThe graph of a function $g$ is obtained from the graph of $f$ by a\nreflection in the $y$-axis, followed by a translation of 2 units in the direction of the positive $y$-axis. The point P$(-2,6)$ on the graph of $f$ is mapped to point Q on the graph of\n$g$.\n\n- Find the coordinates of Q. <span class="marks">[4]</span>  \n',
    markScheme:
      '\n- \n  - $\\answer{p = -5}$  and\n$\\answer{q = -1}$\n  - Using the coordinates of the $y$-intercept, we find\n\n    $$\n    \\begin{aligned}\n    f(0) &= -10 \\hspace{5.5em} \\\\[6pt]\n    a(0+1)(0+5) &= -10  \\\\[6pt]\n    5a &= -10  \\\\\n    \\end{aligned}\n    $$\n\n\n    $$\n    \\answer{a = -2}\n    $$\n\n\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.8em} f(x) &= -2(x+1)(x+5) \\\\[6pt]\n  &= -2(x^2+6x+5) \\\\[5pt]\n  &= -2x^2-12x-10\\end{aligned}\n  $$\n\n  Hence, using the axis of symmetry\nformula, we get\n\n  $$\n  \\begin{aligned}\n  \\hspace{4.5em} x &= -\\dfrac{b}{2a} \\\\[6pt]\n  x &= -\\dfrac{(-12)}{2(-2)} \\\\\n  \\end{aligned}\n  $$\n\n\n  $$\n  \\hspace{2.2em} \\answer{x = -3}\n  $$\n\n- Using the method of completing the square, we have\n\n  $$\n  \\begin{aligned}\n  \\hspace{3.7em} f(x) &= -2x^2-12x-10 \\\\[6pt]\n  &= -2\\big[x^2+6x\\big] - 10 \\\\[6pt]\n  &= -2\\big[(x+3)^2 - 9\\big] - 10 \\\\[6pt]\n  &= -2(x+3)^2 + 8\\end{aligned}\n  $$\n\n  Hence the coordinates of the vertex\nare  $\\answer{(-3,8)}$\n- We have\n\n  $$\n  \\begin{aligned}\n  \\hspace{2.9em} \\text{transformation $1$}: &\\hspace{0.75em}\\hspace{0.525em}\\text{reflection in the $y$-axis} \\\\\n  \\text{transformation $2$}: &\\hspace{0.75em}\\hspace{0.525em}\\text{translation of two units upwards}\n  \\end{aligned}\n  $$\n\n  If we apply the transformations $1$ and $2$ to P, we find\n  ![SkillUpp Image](https://assets.revisionvillage.com/public/question/b2539ad3-5cb1-47b4-82fb-0f17c7d9b8b2/images/5463dadf-bc47-4d8c-a965-e2b73e47474d/e1df7f8211664f00389891c42cbdf0bb7d3cdd9a.svg)\n\n\n  Hence the coordinates of Q are\n$\\answer{(2,8)}$\n',
    paper: 'PAPER1',
    difficulty: 'HARD',
    calculator: false,
    sort: 1,
    maxMark: '15',
    difficultyLevel: '4'
  }
];
