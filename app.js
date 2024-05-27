const questions = [{
    
    'que': 'Which of the following is a markeup language?',
    'a' : 'HTML',
    'b' : 'CSS',
    'c' : 'PHP',
    'd' : 'JAVASCRIPT',
    'correct': 'a'
},
{
    'que': 'What is the term for a section of code that can be reused throughout a program?',
    'a': 'Loop',
    'b': 'Variable',
    'c': 'Function',
    'd': 'Comment',
    'correct': 'c'
},
{
    'que': 'In web development, what does URL stand for?',
    'a': 'Universal Resource Link',
    'b': 'Uniform Resource Locator',
    'c': 'Unified Routing Link',
    'd': 'User Requested Location',
    'correct': 'b'
    
}]

let index = 1;
const quesBox  = document.getElementById("quesBox");
const loadQuestion = () =>  {
    const data = questions[index]
    console.log(data);
    quesBox.innerText = `${index+1}) ${data.que}`;
}

loadQuestion();