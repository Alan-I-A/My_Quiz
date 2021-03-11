class Player {
    constructor(){
      this.index = null;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestant: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name
      });
    }
  
    static getPlayerInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestant = data.val();
      })
    }
  }
  