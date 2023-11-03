export interface SkillsMember {
    name: string;
    age: number;
    email: string;
}

export function createSkillsMember(name: string, age: number, email: string): SkillsMember {
    return { name, age, email };
}
