type student = {name: string, score: number};
const getResultMessage = (student: student) => {
 if (student.score >= 60) {
   return `${student.name}さんは合格です。`;
 } else {
   return `${student.name}さんは不合格です。`;
 }
};

const studentA : student = {
 name: '侍太郎',
 score: 70,
};

let resultMessage = getResultMessage(studentA);

console.log(resultMessage);