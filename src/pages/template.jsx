import {Portal} from 'solid-js/web'

const template = `<h1 style='color: blue'>Hai, namaku Zen</h1>`
const foto = '/src/assets/rimuru.jpg'
const angka = 4

export default function(){
	return <>
		<div innerHTML={template}></div>
		<img src={foto} alt="" style={{'max-width': '100%'}}/>
		<h3>4 + 5 x 3 = {angka + 5 * 3}</h3>

		<Portal mount={document.head}>
			<title>Template</title>
		</Portal>
	</>
}