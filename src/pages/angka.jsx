import {Portal} from 'solid-js/web'
import {createSignal} from 'solid-js'

const [angka, setAngka] = createSignal(0)

export default function(){
	setInterval(() => setAngka(angka() + 1), 1000)
	return <>
		<h1>Angkanya: {angka()}</h1>

		<Portal mount={document.head}>
			<title>Angka</title>
		</Portal>
	</>
}