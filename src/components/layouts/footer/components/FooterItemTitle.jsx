import PropTypes from 'prop-types'

export default function FooterItemTitle({title}) {
  return <h1 className='text-[#3D3D3D] text-[17px] leading-[16px] font-[700]'>{title}</h1>;
}

FooterItemTitle.propTypes = {
  title: PropTypes.string
}
