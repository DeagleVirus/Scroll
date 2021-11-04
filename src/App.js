import { useState } from 'react'
import { Images } from './Images/Images'
import { Modal } from './Modals/Modal'
import './App.css'

function App() {
	const [active, setModalActive] = useState(false)
	const [info, setInfo] = useState({})

	return (
		<>
			<div className="App">
				<header className="App-header">
					<Images setModalActive={setModalActive} setInfo={setInfo}/>
				</header>
			</div>
			<Modal active={active} setModalActive={setModalActive} info={info} />
		</>
	)
}

export default App
