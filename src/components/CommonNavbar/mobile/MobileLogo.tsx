import { useMemo } from 'react'
import NavLogo from '../NavLogo'

export default function MobileLogo() {
    const outerStyle = useMemo(() => ({
        flexGrow: 1,
        display: { xs: 'grid', md: 'none' },
    }), [])

    return (
        <NavLogo sx={outerStyle} imageWidth={135} />
    )
}
