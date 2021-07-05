import {Portal} from 'solid-js/web'
import {Link} from 'solid-app-router'
import {For} from 'solid-js'

const daftarIsi = [
	{judul: 'Angka', link: '/angka'},
	{judul: 'Bulma', link: '/bulma'},
	{judul: 'Dasar', link: '/dasar'},
	{judul: 'Hello', link: '/hello'},
	{judul: 'Method', link: '/method'},
	{judul: 'Nilai', link: '/nilai'},
	{judul: 'Perulangan', link: '/perulangan'},
	{judul: 'Template', link: '/template'},
]

export default function(){
	return <>
		<h1>Latihan SolidJS</h1>

		<ol>
			<For each={daftarIsi}>
				{item => <>
					<li>
						<Link href={item.link}>{item.judul}</Link>
					</li>
				</>}
			</For>
		</ol>

		<Portal mount={document.head}>
			<title>Beranda</title>
		</Portal>
	</>
}