var budgetController = (function(){
   
    var Expense = function(id, desription, value){
        
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function(id, desription, value){
        
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0  
        }
    }  
})();

var UIController = (function(){
    
    var DOMStrings = {
        
        inputType: '.add__type',
        inputDescripption: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return {
        
        getInput: function(){
            return {
                 type: document.querySelector(DOMStrings.inputType).value,
                 description: document.querySelector(DOMStrings.inputDescripption).value,
                 value: document.querySelector(DOMStrings.inputValue).value   
            };
           
        },
        getDOMStrings: function(){
                return DOMStrings;
     }
      
  };  
})();

var controller = (function(budgetCtrl,UICtrl){
    
    var setupEventListeners = function() {
        
        var DOM = UICtrl.getDOMStrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
                                                         
        document.addEventListener('keypress',function(event){
           if(event.keyCode === 13 || event.which === 13){
              ctrlAddItem();
        }      
                                                         
    });      
        
};
    
    var ctrlAddItem = function(){
        
        //1.Get field input data
        
        var input= UICtrl.getInput();
        console.log(input);
        
        //2.Add the item to the budget controller
        
        //3.Add the item to the UI controller
        
        //4.Calculate the budget
        
        //5.Display the budget to UI
       
           
    };
    
    return {
        
        init: function(){
            
            console.log('app. is started');
            setupEventListeners();
        }
    }
    
    
})(budgetController,UIController);

controller.init();