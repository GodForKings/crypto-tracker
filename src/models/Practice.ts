// Generic Types
export interface IName {
	name: string
	lastName: string
}

export interface IName {
	id: number
}

const nameTest: IName = {
	name: `test`,
	id: 0,
	lastName: `last`,
}

type Something<IGeneric> = {
	id: number
	isTest: IGeneric
}

const id: Something<string[]> = {
	id: 5,
	isTest: [`1`, `2`, `3`],
}

interface realTest<T> {
	something: T
}

const arrayGen: realTest<number[]> = {
	something: [1, 2, 3, 4, 5],
}

const stringGen: realTest<string> = {
	something: `test`,
}

interface anotherGeneric<T> {
	name: string
	arrayValue: T[]
	sortFn: (arg: T) => {}
}

type newType = anotherGeneric<string> & Something<number>

const valueNext: newType = {
	name: ``,
	arrayValue: [``, `hi`],
	sortFn(str: string) {
		let newStr = str.replace(' ', '')
		return { newStr }
	},
	id: 0,
	isTest: 0,
}

export { valueNext }
