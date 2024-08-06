import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function Home() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {t('An')}{' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Booster')}
          </span>

        </h1>
      </section>

    </div>
  )
}
