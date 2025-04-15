interface IContentDesc {
	id: number
	name: string
	desc: string
}
export default interface IServiceForClient {
	id: number
	name: string
	description: string
	sections: IContentDesc[]
}
