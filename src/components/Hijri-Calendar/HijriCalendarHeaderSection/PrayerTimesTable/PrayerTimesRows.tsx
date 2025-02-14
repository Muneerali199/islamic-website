import PrayerTimesRow from './PrayerTimesRow'
import { nanoid } from 'nanoid'
import { PrayerTimes } from '../../types'

type Props = {
    readonly prayerTimes: PrayerTimes,
}

export default function PrayerTimesRows({ prayerTimes }: Props) {
    return (
        <>
            {Object.entries(prayerTimes).map(([key, value]) => {
                return (
                    <PrayerTimesRow
                        key={nanoid()}
                        prayerName={key}
                        prayerTime={value} />
                )
            }
            )}
        </>
    )
}
