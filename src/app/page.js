import CardPrincipal from '@/components/CardPrincipal'
import { metadata } from './layout'
import styles from './page.module.css'	

export default function Home() {

	metadata.title = "DigitalRam"

	return (
		<>	
		<CardPrincipal/>
		</>
	)
}
