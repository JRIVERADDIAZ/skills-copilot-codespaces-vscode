
export const skills = ['HTML', 'CSS', 'JS'];

export const age = 13;

export default class Member {
    constructor(name) {
        this.name = name;
    }
}
export function createSkillsMember(name, age, email) {
    return { name, age, email }; 
}   


createSkillsMember('pit', 13, 'pit@pit.com')