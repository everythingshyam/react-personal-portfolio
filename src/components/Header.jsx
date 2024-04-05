function Header(props) {
	return (
		<>
			<header className='fixed bottom-0 w-full bg-accent'>
				<div className='w-full h-5 flex justify-around'>
					<img
						className='h-10 p-2 border-2 border-secondary rounded-3xl aspect-square fixed bottom-0.5 bg-accent cursor-pointer hover:bg-secondary'
						src='public/vite.svg'
						alt=''
					/>
				</div>
			</header>
		</>
	);
}
export default Header;
