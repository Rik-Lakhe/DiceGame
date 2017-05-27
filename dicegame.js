    var yMoney = Number(prompt('your money = '));
        var dMoney = 100000;
        var mydice = 0;
        var dealerdice = 0;
        var Game_Over = false;
        

        function rolldice() {
            return Math.floor(Math.random() * 6) + 1;
        }

        function evaluateCondition(dMoney,yMoney){
        	if(dMoney<1||yMoney<1){
            	return true;
            }
            
            var choice=prompt('bet more bro?[1=yes/2=no]').toLowerCase();
            if(choice=="no"||choice=="2"||choice=="false"){
            	return true;
            }
            return false;
            
       	}

		do {
			var temp = Number(prompt('bet ammount = '));
            mydice = rolldice();
            dealerdice = rolldice();
            console.log(mydice);
            console.log(dealerdice);
           	console.log('your money ='+yMoney+'		dealer money ='+dMoney+'	your bet ='+temp);
            
                    if (mydice > dealerdice) {
                        yMoney = yMoney + temp;
                        dMoney = dMoney - temp;
                        console.log('Player won');
                    } else if(mydice < dealerdice){
                        yMoney = yMoney - temp;
                        dMoney = dMoney + temp;
                        console.log('Dealer won');
                    }else{
                        console.log('Draw');
                    }
            console.log('your money ='+yMoney+'		dealer money ='+dMoney+'	your bet ='+temp);        
            Game_Over=evaluateCondition(dMoney,yMoney);
                }
           while(!Game_Over)
            document.write('your money ='+yMoney);
            document.write('dealer money ='+dMoney);