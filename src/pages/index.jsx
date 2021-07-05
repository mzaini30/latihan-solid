import {Portal} from 'solid-js/web'
import {Link} from 'solid-app-router'
import {For} from 'solid-js'

const daftarIsi = [
	{judul: 'Dasar', link: '/dasar'},
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