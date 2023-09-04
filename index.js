document.addEventListener('DOMContentLoaded', () => {
    const rock = document.querySelector('.rockHand');
    const paper = document.querySelector('.paperHand');
    const scissor = document.querySelector('.scissorHand');
    let data;
    let buttonBool = 0;
    rock.addEventListener('click', () => {
        if (!rock.classList.contains('selected')) {
            rock.classList.add('selected');
            paper.classList.remove('selected');
            scissor.classList.remove('selected');
            data = rock.dataset.value;
            buttonBool = 1;
            btnCheck();
        } else {
            rock.classList.remove('selected');
            data = null;
            buttonBool = 0;
            btnCheck();
        }
    });

    paper.addEventListener('click', () => {
        if (!paper.classList.contains('selected')) {
            paper.classList.add('selected');
            rock.classList.remove('selected');
            scissor.classList.remove('selected');
            data = paper.dataset.value;
            buttonBool = 1;
            btnCheck();
        } else {
            paper.classList.remove('selected');
            data = null;
            buttonBool = 0;
            btnCheck();
        }
    });

    scissor.addEventListener('click', () => {
        if (!scissor.classList.contains('selected')) {
            scissor.classList.add('selected');
            paper.classList.remove('selected');
            rock.classList.remove('selected');
            data = scissor.dataset.value;
            buttonBool = 1;
            btnCheck();
        } else {
            scissor.classList.remove('selected');
            data = null;
            buttonBool = 0;
            btnCheck();
        }
    });

    const fightBtn = document.querySelector('#btnFight');
    function btnCheck() {
        if (buttonBool === 1) {
            fightBtn.classList.remove('btnActive');
        } else {
            fightBtn.classList.add('btnActive');
        }
    }

    const playerHand = document.querySelector('.playerMove img');
    const botHand = document.querySelector('.botMove img');

    const rockImg = 'imgs/hand-back-fist-solid.svg';
    const paperImg = 'imgs/hand-solid.svg';
    const scissorImg = 'imgs/hand-scissors-solid.svg';

    let playerMove;
    let botMove;

    fightBtn.addEventListener('click', () => {
        if (buttonBool === 1) {
            const randomHand = Math.floor(Math.random() * 3);
            if (data === '1') {
                playerHand.src = rockImg;
                playerHand.classList.remove('removeAnimation');
                botHand.classList.remove('removeAnimation');
                playerHand.classList.add('activateAnimation');
                botHand.classList.add('activateAnimation');
                buttonBool = 0;
                playerMove = 1;
            }
            if (data === '2') {
                playerHand.src = paperImg;
                playerHand.classList.remove('removeAnimation');
                botHand.classList.remove('removeAnimation');
                playerHand.classList.add('activateAnimation');
                botHand.classList.add('activateAnimation');
                buttonBool = 0;
                playerMove = 2;
            }
            if (data === '3') {
                playerHand.src = scissorImg;
                playerHand.classList.remove('removeAnimation');
                botHand.classList.remove('removeAnimation');
                playerHand.classList.add('activateAnimation');
                botHand.classList.add('activateAnimation');
                buttonBool = 0;
                playerMove = 3;
            }
            if (randomHand === 0) {
                botHand.src = rockImg;
                botMove = 1;
            }

            if (randomHand === 1) {
                botHand.src = paperImg;
                botMove = 2;
            }

            if (randomHand === 2) {
                botHand.src = scissorImg;
                botMove = 3;
            }
            setTimeout(() => resetAll(), 1500);
            dmgCheck();
        }
    });
    let playerScore = 0;
    let botScore = 0;

    const resultText = document.querySelector('.result');

    function dmgCheck() {
        //draw
        if (playerMove === 1 && botMove === 1) {
            playerScore += 0;
            botScore += 0;
        } else if (playerMove === 2 && botMove === 2) {
            playerScore += 0;
            botScore += 0;
        } else {
            playerScore += 0;
            botScore += 0;
        }
        //player rock bot scissor
        if (playerMove === 1 && botMove === 3) {
            playerScore += 1;
        }
        //player paper bot rock
        if (playerMove === 2 && botMove === 1) {
            playerScore += 1;
        }
        //player scissor bot paper
        if (playerMove === 3 && botMove === 2) {
            playerScore += 1;
        }
        //bot rock player scissor
        if (playerMove === 3 && botMove === 1) {
            botScore += 1;
        }
        //bot paper player rock
        if (playerMove === 1 && botMove === 2) {
            botScore += 1;
        }
        //bot scissor player paper
        if (playerMove === 2 && botMove === 3) {
            botScore += 1;
        }
        resultText.innerHTML = `${playerScore} - ${botScore}`;
    }
    function resetAll() {
        playerHand.classList.remove('activateAnimation');
        botHand.classList.remove('activateAnimation');
        playerHand.classList.add('removeAnimation');
        botHand.classList.add('removeAnimation');
        rock.classList.remove('selected');
        paper.classList.remove('selected');
        scissor.classList.remove('selected');
        data = null;
        buttonBool = 0;
        btnCheck();
    }
    resetAll();
    btnCheck();
    //end
});
