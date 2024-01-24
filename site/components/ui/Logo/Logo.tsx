import Image from 'next/image'

const Logo = ({ className = '', ...props }) => (
  <Image src={props.logo} layout="fill" />
)

export default Logo
