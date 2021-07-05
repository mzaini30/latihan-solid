import {Portal} from 'solid-js/web'

const pesan = 'Aplikasi pertamaku dengan SolidJS'

export default function(){
	return <>
		<h1>{pesan}</h1>

		<Portal mount={document.head}>
			<title>Dasar</title>
		</Portal>
	</>
}