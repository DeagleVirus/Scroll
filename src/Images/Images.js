import { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const Images = ({setModalActive, setInfo}) => {
	
	const [image, setImage] = useState([])
	const [count, setCount] = useState(10)

	const getInfo = (index) => () => {
		setModalActive(true)
		fetch(`https://picsum.photos/id/${index}/info`)
			.then(response => response.json())
			.then(data => setInfo(data))
	}

	const ShowImage = () => {
		return image.map((image) => (
			<LazyLoadImage onClick={getInfo(image.id)} effect="blur" className="image" src={image.download_url} alt="hello" />
		))
	}

	useEffect(() => {
		fetch(`https://picsum.photos/v2/list?page=1&limit=${count}`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				const temp = []
				data.forEach((el) => temp.push(el))
				return temp
			})
			.then((temp) => setImage(temp))
	}, [count])

	return (
		<>
		
			<div className="container">{ShowImage()}</div>
			<div>
				<button className="button" onClick={() => setCount(count + 10)}>
					get more images
				</button>
			</div>
		</>
	)
}
