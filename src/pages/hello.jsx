import {Portal} from 'solid-js/web'

export default function(){
	return <>
		<h1>Hello Solid World!</h1>

		<Portal mount={document.head}>
			<title>Hello World</title>
		</Portal>
	</>
}