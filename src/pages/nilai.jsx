import {Portal} from 'solid-js/web'
import {createSignal, Show} from 'solid-js'

const [nilai, setNilai] = createSignal(0)

export default function(){
	return <>
		<h1>Nilai: {nilai()}</h1>
		<h2>
			Predikat: 
			<Show when={nilai() < 50}>
				Silahkan coba lagi
			</Show>
			<Show when={nilai() >= 50 && nilai() < 70}>
				Bagus
			</Show>
		</h2>
		<input type="text" value={nilai()} onInput={elemen => setNilai(elemen.target.value)}/>

		<Portal mount={document.head}>
			<title>Nilai</title>
		</Portal>
	</>
}