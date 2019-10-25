import AsciiMathParser from "./asciimath2tex"


const parser = new AsciiMathParser();

const tex = parser.parse("int_(i=1)^10 x^2/2 dx");
console.log(tex);
window.parser = parser;
