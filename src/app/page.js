"use client"
import { metadata } from './layout'
import styles from './page.module.css'
import "../app/card.css"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Home() {

	metadata.title = "DigitalRam"

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">

						<motion.div
							transition={{ type: "spring", stiffness: 100 }}
							whileHover={{ scale: 0.9 }}
							whileTap={{ scale: 0.9 }}
						>
							<div className="card mt-4 shadow">
								<div className="card-body">
									<h5>Desarrollo DigitalRam</h5>
									<Image src="" alt=""
										width={200}
										height={200}
									/>
								</div>
							</div>
						</motion.div>
					</div>
					<div className="col">
						<motion.div
							transition={{ type: "spring", stiffness: 100 }}
							whileHover={{ scale: 0.9 }}
							whileTap={{ scale: 0.9 }}
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
							whileTap={{ scale: 0.9 }}
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
		</>
	)
}
