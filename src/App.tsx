function App() {
	return (
		<div className="bg-[#1C1B1E] h-full">
			<header className="flex justify-around items-center py-6">
				<h1 className="font-roboto-slab text-2xl font-bold text-[#FF859B]">
					RocketMovies
				</h1>

				<input
					className="bg-[#262529] w-2/4 rounded-lg h-14 p-6 text-xs text-[#948F99]"
					type="text"
					placeholder="Pesquisar pelo título"
				/>

				<div className="flex gap-2 items-center">
					<div className="flex flex-col">
						<p className="font-roboto-slab text-xs font-bold text-[#F4EDE8]">
							Rodrigo Gonçalves
						</p>
						<a
							className="font-roboto-slab text-xs text-[#948F99] self-end"
							href="/logout"
						>
							logout
						</a>
					</div>
					<img
						src="src/assets/images/default-person-icon.png"
						alt="User icon"
						className="size-16 rounded-full border-2 border-[#3E3B47]"
					/>
				</div>
			</header>
			<hr className="border-[#3E3B47]" />
			<main className="px-[8%]">
				<a className="flex items-center gap-2 pt-10" href="/movies">
					<img
						className="text-[#FF859B] size-4"
						src="src/assets/icons/back.svg"
						alt="Voltar"
					/>
					<p className="font-roboto-slab text-base text-[#FF859B]">Voltar</p>
				</a>

				<div className="flex flex-col gap-10 py-6">
					<h1 className="font-roboto-slab font-medium text-4xl text-[#F4EDE8]">
						New Movie
					</h1>

					<div className="flex gap-10">
						<input
							className="bg-[#262529] w-full p-4 rounded-lg font-roboto text-base text-[#948F99]"
							type="text"
							name="title"
							alt="Movie Title"
							placeholder="Title"
						/>
						<input
							className="bg-[#262529] w-full p-4 rounded-lg font-roboto text-base text-[#948F99]"
							type="number"
							name="rating"
							alt="Movie Rating"
							min={0}
							max={5}
							placeholder="Your rating (0 to 5)"
						/>
					</div>

					<textarea
						className="bg-[#262529] w-full h-52 p-4 rounded-lg resize-none font-roboto text-base text-[#948F99]"
						name="description"
						placeholder="Write about your review"
					/>

					<div>
						<h2 className="font-roboto text-[#999591] text-xl">Marcadores</h2>

						<div className="flex gap-6 p-4 bg-[#0D0C0F] rounded-lg">
							<div
								className="flex justify-center items-center gap-4 p-4 rounded-lg
              font-roboto text-base text-[#FFFFFF] bg-[#262529]"
							>
								React
								<button className="cursor-pointer" type="button">
									<img
										className="size-6"
										src="src/assets/icons/close.svg"
										alt="Remove tag"
									/>
								</button>
							</div>
							<button
								className="flex justify-center items-center gap-4 p-4 rounded-lg
              font-roboto text-base text-[#948F99] bg-transparent dashed"
								type="button"
							>
								New Tag
								<button type="button">
									<img
										className="size-6"
										src="src/assets/icons/add.svg"
										alt="Add tag"
									/>
								</button>
							</button>
						</div>
					</div>

					<div className="flex gap-10">
						<button
							className="bg-[#0D0C0F] rounded-lg w-full py-4 font-roboto-slab font-medium text-base text-[#FF859B]"
							type="button"
						>
							Delete movie
						</button>
						<button
							className="bg-[#FF859B] rounded-lg w-full py-4 font-roboto-slab font-medium text-base text-[#312E38]"
							type="button"
						>
							Save changes
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
