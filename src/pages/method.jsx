import {Portal} from 'solid-js/web'

const awal = 'Faqih'
const akhir = 'Mumtaz'

function detail(){
	return `Namaku ${awal} ${akhir}`
}

export default function(){
	return <>
		<h2>Nama Awal: {awal}</h2>
		<h2>Nama Akhir: {akhir}</h2>

		<h1>{detail()}</h1>

		<Portal mount={document.head}>
			<title>Method</title>
		</Portal>
	</>
}