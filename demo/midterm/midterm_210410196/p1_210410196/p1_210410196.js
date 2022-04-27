'use struct';

let rt;
let c;

const BMI = (h, k) => {
  hc = h * 2;
  rt = k / hc;

  c =
    rt < 18.5
      ? '過輕'
      : ((rt) => 18.5 && rt <= 24)
      ? '健康'
      : rt >= 24 && rt <= 27
      ? '過重'
      : '';

  console.log(`For (h/w) = (${h}, ${k}), the BMI = ${rt.toFixed(2)} ${c}`);
};

BMI(1.75, 55);
BMI(1.75, 70);
BMI(1.75, 85);
