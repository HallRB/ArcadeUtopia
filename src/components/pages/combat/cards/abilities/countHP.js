let myHP = 100;
let enemyHP = 300;

export const getMyHP = () => {
    return myHP;
};

export const getEnemyHP = () => {
    return enemyHP;
}

export const setMyHP = (value) => {
    myHP = value;
};

export const setEnemyHP = (value) => {
    enemyHP = value;
}