class Question
{
    constructor() 
    {
      this.title = createElement('h2');
      this.question = createElement('h2');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
      this.input = createInput("Name");
      this.answer = createInput('Option_number');
      this.submit_button = createButton('Submit');
    }

    hide()
    {
      this.title.hide()
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.input.hide();
      this.option.hide();
      this.submit_button.hide();
    }
  
    display()
    {
        this.title.html("My Quiz Game");
        this.title.position(350,0);
        
        this.question.html("Question:- What has a neck but no head?");
        this.question.position(150, 80);

        this.option1.html("1: Shirt")
        this.option1.position(150,100);

        this.option2.html("2: Humans")
        this.option2.position(150,120);

        this.input.position(150, 230);
        
        this.answer.position(150, 300);

        this.submit_button.mousePressed(()=>{
            this.question.hide();
            this.option1.hide();
            this.option2.hide();
            this.input.hide();
            this.option.hide();
            this.submit_button.hide();
            contestant.name = this.input.value();
            contestantCount+=1;
            contestant.index =  contestantCount;
            contestant.update();
            contestant.updateCount( contestantCount);
          });
        
    }
  }
  