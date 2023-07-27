const player_1_btn = document.querySelector('#player_1_btn');
const player_2_btn = document.querySelector('#player_2_btn');
const reset_btn = document.querySelector('#reset_btn');
let result = document.querySelector('#result');
let score_limit = document.querySelector('#score_limit');
let final_score = document.querySelector('#final_score');

let player_1_score = 0;
let player_2_score = 0;

final_score.value = `${player_1_score} vs ${player_2_score}`;

player_1_btn.addEventListener('click', function () {
    player_1_score += 1;
    final_score.value = `${player_1_score} vs ${player_2_score}`;
    if (player_1_score === parseInt(score_limit.value)) {
        player_1_btn.disabled = true;
        player_2_btn.disabled = true;

        result.value = 'PLAYER 1 IS THE WINNER! \n HIT RESET TO CONTINUE';
    }
})

player_2_btn.addEventListener('click', function () {
    player_2_score += 1;
    final_score.value = `${player_1_score} vs ${player_2_score}`;
    if (player_2_score === parseInt(score_limit.value)) {
        player_1_btn.disabled = true;
        player_2_btn.disabled = true;
        result.value = 'PLAYER 2 IS THE WINNER! \n HIT RESET TO CONTINUE';
    }
})

reset_btn.addEventListener('click', function () {
    window.location.reload();
})


