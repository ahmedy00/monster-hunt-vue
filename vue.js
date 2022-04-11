new Vue({
    el: "#app",
    data: {
        player_health: 100,
        monster_health: 100,
        game_is_on: false
    },
    methods: {
        startGame: function () {
            this.game_is_on = true;
        },
        attack: function () {

            this.player_health -= Math.round(Math.random() * 10);
            this.monster_health -= Math.round(Math.random() * 10);
        },
        specialAttack: function () {
            this.player_health -= Math.round(Math.random() * 25);
            this.monster_health -= Math.round(Math.random() * 25);
        },
        heal: function () {
            this.player_health += Math.round(Math.random() * 10);
            this.monster_health += Math.round(Math.random() * 10);
        },
        giveUp: function () {
            alert("Pes ettiniz :(");
            this.game_is_on = false;
            this.player_health = 100;
            this.monster_health = 100;
        }
    },
    watch: {
        player_health: function (value){
            if(value <= 0){
                this.player_health = 0;
                if(confirm("Oyunu Kaybettin :( Tekrar?")){
                    this.player_health = 100;
                    this.monster_health = 100;
                }
            }else if(value > 100){
                this.player_health = 100;
                alert("Daha fazla heal basamazsın!")
            }
        },
        monster_health: function (value){
            if(value <= 0){
                this.monster_health = 0;
                if(confirm("Oyunu Kazandın :) Tekrar?")){
                    this.player_health = 100;
                    this.monster_health = 100;
                }
            }else if(value > 100){
                this.monster_health = 100;
                alert("Daha fazla heal basamazsın!")
            }
        }

    }
});
