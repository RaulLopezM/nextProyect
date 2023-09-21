"use client"
import { useState } from 'react'
import { metadata } from './layout'
import styles from './page.module.css'
import "../app/card.css"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ContentCardPrincipal } from '@/components/ContentCard'

export default function Home() {

	metadata.title = "DigitalRam"
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenPlatform, setIsOpenPlatform] = useState(false);
	const [isOpenServices, setIsOpenServices] = useState(false);

	return (
		<>
			<AnimatePresence mode="wait">
				<div className="container">
					<div className="row">
						<div className="col">

							<motion.div
								transition={{ type: "spring", stiffness: 100 }}
								whileHover={{ scale: 0.9 }}
								layout
								data-isOpen={isOpen}
								initial={{ borderRadius: 50 }}
								className="parent"
								onClick={() => setIsOpen(!isOpen)}
							>
								<div className="card mt-4 shadow">
									<div className="card-body">
										<h5>Desarrollo DigitalRam</h5>
										<Image zxc src="" alt=""
											width={200}
											height={200}
										/>						{isOpen ? <ContentCardPrincipal /> : ""}
									</div>
								</div>
							</motion.div>

						</div>
						<div className="col">
							<motion.div
								transition={{ type: "spring", stiffness: 100 }}
								whileHover={{ scale: 0.9 }}
								layout
								data-isOpen={isOpenPlatform}
								initial={{ borderRadius: 50 }}
								className="parent"
								onClick={() => setIsOpenPlatform(!isOpenPlatform)}

							>
								<div className="card mt-4 shadow">
									<div className="card-body">
										<h5>Plataformas</h5>
										<Image src="" alt=""
											width={200}
											height={200}
										/>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<motion.div
							
								transition={{ type: "spring", stiffness: 100 }}
								whileHover={{ scale: 0.9 }}
								layout
								data-isOpen={isOpenServices}
								initial={{ borderRadius: 50 }}
								className="parent"
								onClick={() => setIsOpenServices(!isOpenServices)}

							>
								<div className="card mt-4 shadow">
									<div className="card-body">
										<h5>Servicios</h5>
										<Image src="" alt=""
											width={200}
											height={200}
										/>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div >

			</AnimatePresence>

		</>
	)
}
