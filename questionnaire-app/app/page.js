import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <h1>Questionnaire App</h1>
        <Link href='/RespiratoryQuestionnaire'>
          <button>Start Questionnaire</button>
        </Link>
        <Link href='/SystolicBloodPressureQuestionnaire'>
          <button>Start Questionnaire</button>
        </Link>
        <Link href='/Covid'>
          <button>Start Questionnaire</button>
        </Link>
      </div>
    </main>
  );
}
