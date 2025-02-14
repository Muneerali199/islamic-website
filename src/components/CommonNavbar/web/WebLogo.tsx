import { useMemo } from 'react'
import NavLogo from '../NavLogo'

export default function WebLogo() {
    const outerStyle = useMemo(() => ({
        display: { xs: 'none', md: 'flex' },
    }), [])

    return (
        <NavLogo sx={outerStyle} imageWidth={135} />
    )
}
