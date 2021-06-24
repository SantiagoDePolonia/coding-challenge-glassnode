import Header from '../organisms/Header';

export default function MainTemplate({children}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
