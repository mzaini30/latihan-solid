import {Portal} from 'solid-js/web'
import {For} from 'solid-js'

const namaBinatang = [
	{nama: 'gajah', kaki: 4},
	{nama: 'semut', kaki: 6},
	{nama: 'ayam', kaki: 2},
]

export default function(){
	return <>
		<h1>Binatang</h1>

		<For each={namaBinatang}>{item => <>
			<p>
				{item.nama} - 
				kakinya: {item.kaki}
			</p>
		</>}</For>

		<Portal mount={document.head}>
			<title>Perulangan</title>
		</Portal>
	</>
}