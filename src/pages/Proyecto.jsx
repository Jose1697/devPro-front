import React from 'react';
import Navbar from '../components/Navbar'
import Buscador from '../components/Buscador'
import ListProyectos from '../components/ListProyectos'
import './styles/proyect.css'

class Proyecto extends React.Component{
    state = {
        data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Freda',
            lastName: 'Grady',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Legacy Brand Director',
            twitter: 'FredaGrady22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Major',
            lastName: 'Rodriguez',
            email: 'Ilene66@hotmail.com',
            jobTitle: 'Human Research Architect',
            twitter: 'MajorRodriguez61545',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUSEBAVFRUVFRUVFRcVFRUVFRUXFRUXFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0lHyUtLS0tLS0vLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANwA5QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAABAgADBAUGB//EAD0QAAEDAgMFBgQEBAUFAAAAAAEAAhEDIQQSMQUGQVFhEyJxgZGhB7HB8DJCgtEjUqLhFENykrIWJTNTYv/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAnEQACAgICAgIBBAMAAAAAAAAAAQIRAyESMQRBMlEiYXGB8BMUI//aAAwDAQACEQMRAD8A8yhSEwCMKZWLCkJ4UhACgKJoRyoASFIVgYr8NgnP4GOeVxHsLnok2kCVmIApC2+HwrCSxzS114lzAT+mcylSk1jSMrI6iCPWYPuo8iXE1EKQt3UwLDTBLSCdC0iDOhE2cPCPqtTiWZDcyOcEHqCDoU1JA4sqhCEzHA6Ji1SIlJCkKwhKQgBIQhPCWEgFhBMUIQMWFIRUQAqCZBAwIIqIACiiiAIooogDNATQoEyZAACMIgIgIAWE7aZMwJhQmE2EpVXTA1GoIsNeJ+wk3Q4qy3A4prL1GTI0yx/VIss1zA7vkmlGjQ4i3OdXeyo2jUpNawMyueNXcbePH7CxaRfWqd4C38wmOgB+Q91W2WpGxeKNQd6uSR0mPFmQeq12NxXftVzDSR3XHz4+Ews1+wa57zWcNWtygeipO7+JN+zPmoc19k/8b+jJZtGlkAJJLddQSDxbFx1+wqtq4YPbIN4zC93t5mLOIETF9FWd3cS0Tk8FTVpV6YAewwLjm2dY6X+fMp8l6YcH7RrKZVrat4OnqhUAnl46/wB1W8qxMqaMohKQkwz/AMquIUyBUQlIVpCQhACEJU8IEIARBMUCkMVRFAoACCKiBgUUUQAEUEUAbABNCATBMgQBNCATBMQGBhqMFR0NmT/cqzEvLqhyB5boCDltPExHyWJjmaHjp9f3W+3UwD8RUYCCWi5nly+XqqcjrZfjV6Mrd7c99eHOs0+677ZO6FGlByAmAJN1u8DQawAAaLbYZoWPk5G9RUVo19PZgjT2Rds1vJbZzgqnvClxQlJmlfghyC1WP2cwgy0ei6Sq8XWkx1TVVSVF0dnBbY3da4y2xvZcZtTZ5pOgr1eq2SuV3m2dmGb7KtxZGnTKM+NVaOEBgzyWceYWNXpwSORKvoGWhbos50kQhVuCtISOCkRKygmISlIYpCBTFKUhgQRQQAEEUEDAoiggCKKKIA2gCKgTBSKwAJgFAE0IAsp02ugO4HN48IJ+9V3Pw+DRmjgAPG11wgqBoJI4R9+i63cHFh+IqBmkBw8LA+6zeR8TV43yPSaZWZSlYmHbZZtN4Cxw2dBloBUc1L2wUfWAVpXRj1aULUYykthjse0C5gLmsfvNhaf4qzfWfkouN9FilxWyVaK0e3mTSdC2VXeTCFsioI6gj5hayvXY8nK4OB5EFQUWmKck1o88xrpM8dD7g/P2S4U2PksrbeF7Os5vA94edvok2TgalV5bTEkNm9vsroRaqzmyi26QpCQp3BKVaUlZCQhWlIUhlaBTlKUAKgigkMCCKCAAgiogYFFEUAbUJggEwUisIRhQIoEZlLCU34Ws7Oe2ZlLGRYsmHu0uRIt81vfhtQDG4iq62QAHpqT46Bc/s7EinVa512zDxrLDZ4jwJ84Xo2w9l06dTF0Gnu1Cx48KjXAx0kO8gFl8jqjb49OmvRgVN667nfwKDi0C2g04y4gXWmxm8ePn+NVZTBvGZjQOkgyTrddLtPc4vAaHlrABYHXoVrtpbn0HEdnFIZWBzWsa/MWOJBkw4TN41hUwlGjTOM31syNhbaeXNmoHjSQc3qRx6/su0qtPZ5ui57Zm7tMQ7JBawMFoccoABcZ1sulotJouaOA48lF9lqX2eYbybTcajqZccvn7LnsTgS1grGiQwh5DqlVrcwYAXZQQZNwANTNuK7Gps9n+LcXgEHUHkRBhb/FYIOphnccwXAdeDBFs0gWKlCSRDJilLo8oDBkD3Yc5SYH8QuE+HA+MLO2fhnNqB9Md2e8BJsV3dPYubukNDRoALdY4BWVsCymCABdKWX6EsNdnA740vwOjmPkQsbC4B7WNykjPWY0wdRDjw4SFut4KPaQ3/wC2ieU2J91qtmvNPCF/EO7vQlrmz/VPkrU24pEIpKbk/Rq8UZe483OPqSqSmQK2HNEKUhOUpSArKUpilKBilKmKBSGBBFAoACCKCBgRQRQBtwilCYKRWMEUAigQV6tuyWvwuHrg3FMUH8/4ZIaT6H/cvKQu5+HeOJZXw5iABWbzEEZ46d1vr1VOeNxNPjTqdfZ6PTEgKp+Gk62Uwj5Hksp1QASVjSOimY1Zoa2BZNhiQ11tQsatWL+FuB5rNwwHZukwhLZJ6WzgNsHLWJPHkuh2QM9MH+61W2qQFTMeqfdrFBpdTDpDTbjAN/3Sos/Y6VrA0WC57bNUCVvq9W3BcfvDW18U6K5Okc7jJc1wmJtPKbStft9gpU2Um6TmA6ARJ8XE/wC1ZWOr9mwOP8zR9fotPtfH9vUzxAADWjoP7krRii27MWXIlFr2zBQTFKtRiFKUpilKAEKQqxyQpDEKBTFKUDAgiUEgAgiggZFFFEAbYJglCYKRWMFJQCkoEMFfhMZUovFSk4tcJg851B5grHUQNOj23ZeLD6bXt0c0OHg4SPosqo4ut6rh/h/tXNTNFx71O7erCfoTHgWrrnVy0SudNcXR1sU+UbM7GYfNTysdlI0Iiy5vGY3GUacFrXxxFp5W/ur/APqygyc7iI6G/haCqa29GEfGcwJ1Dmu/3AfRNF0YykcPtZ+MxD4cCxvQ39tF0e6uzhQHGTqTJlLtLePCNtSAcQbknL5AXJK1j95Hm1PD1J4Wt6mE2m1QODjtnZ161rLlts1SYCz8FUquANQZbExMn5arS7Tqgv8ABVx7IZHo0G3605WeLj8h9VqgrcaXGo7OIM+2ojpEHzVYXRgqicnJK5NgKVMUpUiIClKKUoAVyQpilKQxSgiUqBgKCKCQAQRQQMiiiiANsEZSIhSKx5QlLKIKAGRQlSUCMrZ2OfQqtqs1adODgdWnxH7r1PZ+06dak17btcJHPqD1BEeS8geeHNet7G2Z/wBtwj22PZQSObnuqCRxBzlU+Ti/DmaPFzf9OBsTTp5ILRC1lStTo5pbTc0/zNn9vdZ2BryTTqCHD0I5t6K6rgWOsRKwptdHXhko5fF7coFuSmxo6hkG+sFY1GtbMbLsauw6bW5hQaehmfXgtVtJlGnAc3KTpP05pyk2SlkbRpjj3ZSdFzorF756rK3kxkv7KmLNbLo+q1YeWssO8bNHU2CcY0ZJStlG0x/CoPI1NWnP+hwLP+TvZYS3O9eHFLBYanPez5vIMIJ9SFoaFbML6/NdCHxObP5DlKUxSFSIgKQpilKAAUhTOSEpDFKBRKBQMBQUQKQEQUUQMiiCKANmpKQOTBSK2NKIKrzJTUKsWOTK5ZIovJ5oZgdFjOKyQyGq/HhXbM+TM+kKz8QXvfw1qCrsui11+69h/Q9zR7ALwPRewfBvHzTrUSfwPa8eFRsEDpNOf1JeRG4D8edZDYY3CmXNdZ7DrpI4PHKR9QtjhmPDBlZMjU8Vl7xYdpe3KJfqeWU8D4/QIUq1RouAfZcNw4to9DGfKKdC0cSW2qNtzFx+/sqtp7MpV2EQHA/YI5FX1a7SILSOvJVswYddr78wUEv16PNd4NgPwtB4psc/M+XP/E4Nme9xgaLS7rYB2Jrz+Rnu4/sPmvUa2ODahpVLyLH6eK5Cvt+jgpbRotdWqViQ24ZlgZnEjQl1oHNTxu3srzpqNo5T4kVpxvZjSlTa2Oplx+YXKhbTeXF9tjK9QfmeNLgZWtaQD4tK1hXRitHLb2XtxPMKwPB0WGCnhPjYroySkKRrimlJwYckKUpTGUpCjROwJSiUCojAgoggZEEUEARRRRAGcHIoAKxpC6Cikc1ybEhBZIpqqrThNxIxlvZVdW0nPOsR6KujEwVmNPROKsU9aorqi2i7L4TbQ7PHZSYFSm9vm0doD6Md6rj3BX7CqlmIpmSIqMkgxbMA6/hIRlVxaDFqS/c91qYqo+oamWM0Q0nQAQL87LIbiz+Zh8oWj2TvHh6jjTzgPaYg6nhbnqFvhC8+7PUpLosYGm5kBafGYvLVOTlwTYzFnPl0BWFhqJNXvajVVvZJKuzT4uqXuz8Z+i43e+r3i/RwsOjjFx1tPkuuFW7+Qc75rkt6hLKsj+RzfIx8pCnhf5oh5FuDOOCJCDUy7CRw5OhezTJXnh5pmhCSukDbq2O1MGpmsUhXKKM8pMQtSuRcUHCyTr0ON+xXhVFX1VQ4qjNGto0YZemRBRRUGgCiiiAIogigDZ0m2I4j7CrKsrEtIcPPqFK448Cuizlru/ssoVFa8CFh0zdZbTZTi7ITVMw67IushrpEqVWyqqDokef7qPTJ/KJkKmO8rJQcm2QSPQvh5szD4l3a187qtN+maGzALX2Gab89QV6BTAAygyW2PiF5L8P9pdjjGtJtVGX9Tbt9s3qvWMSIqteDaoIPi3+xHouT5ONRlo7fiZnJbf8AUYOOpiZ5JK1QBucC4C2OMpSJWsdrHBYpKjoJ8kaDEUchdP5pcP1f3XJ74iKM9AP6gu52rROUHjT16tPFcrvLgHVabg0cCR8x7qON1NDyLlBo86BTSq2qwCV2YuzhySQGCVk06cKU2QnlXQjRTOXIiSo5OTCpAkqdlXsLG8VHC49VJl0cB7lFz4knwHlqo2qJ07K3AlVkJw4u6BSqRChpqyatOikoIlBZWqNadoiCiiQyIoKIA2jbjmPkoB3I5H2QcBqFKbtQuicsraspmixXCCshhslEcxwVW9sGeSdqYhTeyC0QNQhRg4cvkibpDHoVixzXjVjg8fpMx5r3aTWwYfTu4BtRnWBcDxaSPNeENXsvwtxvaYJom9Mmmf0nu/05Vl8mNpM1+LOnRfhtote0HX5qCCbLC21hTRxLsv4KneA5E/iA8Dw5EcllYY2vy9lyZqnR2oNVaEx7Q1pc6/OeS89qvxOIqv7JzGNZU7Mt7wDjH5A1piIdbiRxJhdbid8sK0Q1vaFtamHvkuZ2WdjappZT3iA8zwtaeGhxGC7KtiGtaXQ7tKfZkAvDn5iZkhwzOINoAyk8FPHjrbRRmy3pPRx+M2RVzhlRgbUdIa9uUNeZMZotB4PtreZWpDSCQQQQYIIggixBHAruNpUC3D1e8x4OVocwl2XK5zsjbd2MgF4gi3Fc1vQQcSamXL2tOlVI5OdTbnvxlwJ/Ut2KRhnEwCUWqppVkrTFmeSoFQqfhaSgwSZSYp0kBOUqVihG3QaAhpJ+zwSkSeYFh1PEpnnRvn+yD6sWaLqLqq+iSu7XbHy81S8if2UOlzc+3kgDyCTlZKMaFKRO5KVTkLoAUUUVZYRRRRAGUa5FiPMfsmo1BmTPhY5bBkLW20zEkpIzKisp6KvgmplWrspfQ7VYFUEykRocGDP3B1USkoA2SGWAr0P4P46KteieIZUHj+F3yavOQVvdyNodjj6LuD81N36hb+prfVV5VcGW4nU0eob5VGhrHPJDRUBcRqAA6SPKV5TvDvRVrZqLXOZSE2sH1ALw8gkDh3Rbx0HqW8rRUbTYRIdUAI5tLXB3svLN89134V2bO1zHOcKb2/m/NBH4gRIvEdSueknLo38nxqzSYbEtjK6wP4SJOXUacdbhbLD14ptDqoexzcrGyc9MSWmXD8LIJAJ1FiCAQNnupuf2rW1q5lrgC0AzPLN+y7huyaE/+NogRYATGihkypaLsXjt7s89r9n/AJhq1Z/y25IcebqjWjj4Ln9qYt1Wq574k2gaNAAa1o6AADyXoG+2KbhqWVgAqVJazm0fmd5AwOp6LzRWeOm1yf8ABDyEoPjH+RmOT5pVSBWnlRk42ZRqADVYuaXSlKAUZTbZOONJDtkmVa1gGlz7JKTOeiskcD9FOC1bK5vdIgpcSUp++KaG8vVI4RoApMStiOCROXSkKolRfCyKKKKBMiiiiAM1xlUPV9RUVGrVMyYzIoukK0LEw5ssgOVkXasrnGnRZKIKrBQn78k7I0XSla66UH6pf2Q2CRZmU7UtIc3VpDh4tMj3CRxSPNlFskkexYXaXbDDVGO1qNMj/SVzHxcxA/xVKi3SnSL3GSSX1nS6f0sYfNXbgvJZhweFQ/8ABy5zfuqXbRxBd/7MvkxjWj2AWbFH8i/I9G8+G+0zD8O7Qd9vIBxhw6Xv5nku5qloBJIaGguLnaNa0EucTyABJXDfDJoLMXIE/wAG/GzKzhfxb7lbL4iYt9PZzQwx21bs3njkY3PlHIF0TzgdZzZMalmpG7FlccNnn+9O2Ti8Q6pcMHdpA6hg0nqbuPUxoAtOoUCtXWkZdvbHUUCLArKsquislAJnhWYKkHVGtOjnAep4KiWmXraGYJ1CJcOS3O8GzadM0uzBbmMHvE8ufiuuwO7WFGHdNPMSPxOu7Tgfy+UI/wBiPHkTXhyc3G1o82NUcQproVHtsDJ9VVmVrbXZnUU+guCQq08lUVCROJEEUFWWEUUUQB//2Q==',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ],
      };
   render(){
       return(
        <div className="Fondo1">
            
        <Navbar />
        <div >
          < Buscador/>
        </div>
        <div>
         <ListProyectos lista={this.state.data}/>
        </div>
         </div>
       )
   }
}


export default Proyecto;