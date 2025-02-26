import { Bricolage_Grotesque, Figtree } from 'next/font/google'

const headerFont = Bricolage_Grotesque({
    variable: '--font-bricolage-grotesque',
})

const bodyFont = Figtree({
    variable: '--font-figtree',
})

export { headerFont, bodyFont };
