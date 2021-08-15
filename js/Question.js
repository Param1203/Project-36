class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter Correct Option No.");
    this.button = createButton('Submit');
    this.message = createElement("h2")
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");
    this.option5 = createElement("h4");
  }

  hide(){
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    this.question.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.option5.hide();    
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("QUESTION: WHAT STARTS AND ENDS WITH THE LETTER 'E',BUT ONLY HAS ONE LETTER?");
    this.option2.html("1. EVERYONE");
    this.option3.html("2. ENVELOPE");
    this.option4.html("3. ESTIMATE");
    this.option5.html("4. EXAMPLE");

    this.input1.position(150, 230);
    this.input2.position(350,230);
    this.question.position(120, 50);
    this.button.position(290, 300);
    this.option2.position(150, 100);
    this.option3.position(150, 120);
    this.option4.position(150, 140);
    this.option5.position(150, 160);
    this.message.position(200, 330)


    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(() => {
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    this.question.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.option5.hide(); 
      var message = `
      Thank you ${this.button.value()}
      </br>your answer has been submitted `;
      this.message.html(message);
    });


  }
}
