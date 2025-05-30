import { createContext } from "react"

export const AppContext = createContext()

const AppContextProvider = (props) => {

      const currency = '₹'

      const calculateAge = (dob) => {
            const today = new Date()
            const birthDate = new Date(dob)
            let age = today.getFullYear() - birthDate.getFullYear()
            return age
      }

      const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"]

      const slotDateFormat = (slotDate) => {
            const dateArray = slotDate.split('_')
            return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
      }

      // Format currency to Indian Rupees
      const formatCurrency = (amount) => {
            return new Intl.NumberFormat('en-IN', {
                  style: 'currency',
                  currency: 'INR',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
            }).format(amount);
      }

      const value = {
            calculateAge,
            slotDateFormat,
            currency,
            formatCurrency
      }

      return (
            <AppContext.Provider value={value}>
                  {props.children}
            </AppContext.Provider>
      )
}

export default AppContextProvider
