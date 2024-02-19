test('tests if each item in quiz array starts with a number', async () => {
    const quiz = await fetch('http://localhost:4000/api/generatequiz?topic=golang&expertise=novice&questionNum=5&questionStyle=master%20oogway').then(res => res.json()).then(data => data)
    quiz.forEach(item => {
        expect(item.charAt(0)).toMatch(/[0-9]/)
    })
}, 200000)

test('tests if first word in response is yes or no' , async () => {
    const response = await fetch('http://localhost:4000/api/scorequestion?question=1. What is the meaning of life?&answer=42&questionStyle=master%20oogway&expertise=novice').then(res => res.json()).then(data => data)
    expect(response.explanation.substring(0,3)).toMatch(/Yes|No./)
}, 200000)

test('tests if result is either correct or incorrect', async () => {
    const response = await fetch('http://localhost:4000/api/scorequestion?question=1. What is the meaning of life?&answer=42&questionStyle=master%20oogway&expertise=novice').then(res => res.json()).then(data => data)
    expect(response.result).toMatch(/Correct|Incorrect/)
}, 200000)

test('tests if quiz is generated and with 5 questions', async () => {
    const quiz = await fetch('http://localhost:4000/api/generatequiz?topic=golang&expertise=novice&questionNum=5&questionStyle=master%20oogway').then(res => res.json()).then(data => data)
    expect(quiz.length).toBe(5)
}, 200000)