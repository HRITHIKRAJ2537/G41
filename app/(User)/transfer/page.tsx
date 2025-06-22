'use client'

import { useState } from 'react'
import Web3 from 'web3'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/alert'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { FocusCards } from '../../../components/ui/focus-cards'

export default function TransferPage() {
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [account, setAccount] = useState<string | null>(null) // Store account info

  // Predefined wallet addresses for quick payments
  const WALLET_ADDRESSES = {
    canteen: '0x1234567890123456789012345678901234567890',
    library: '0x0987654321098765432109876543210987654321',
    stationary: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd'
  }

  // Focus cards data for quick payment options
  const paymentCards = [
    {
      title: "Canteen",
      src: "canteen.webp",
      address: WALLET_ADDRESSES.canteen,
      description: "Pay for meals and snacks"
    },
    {
      title: "Library",
      src: "lib.webp",
      address: WALLET_ADDRESSES.library,
      description: "Pay library fines"
    },
    {
      title: "Stationary",
      src: "stat.webp",
      address: WALLET_ADDRESSES.stationary,
      description: "Buy stationary items"
    }
  ]

  // Function to connect to Ganache and fetch account
  const connectBlockchain = async () => {
    const web3 = new Web3(process.env.NEXT_PUBLIC_GANACHE_URL); // Ganache RPC URL
    const accounts = await web3.eth.getAccounts(); // Get accounts from Ganache
    setAccount(accounts[0]); // Set the first account as the default wallet
  };

  // Function to send transaction to the recipient
  const sendTransaction = async () => {
    if (!account || !recipient || !amount) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      return;
    }

    const web3 = new Web3(process.env.NEXT_PUBLIC_GANACHE_URL); // Ganache RPC URL

    const tx = {
      from: account,
      to: recipient,
      value: web3.utils.toWei(amount, "ether"),
    };

    try {
      await web3.eth.sendTransaction(tx); // Send the transaction
      setMessage({ type: 'success', text: `Transferred ${amount} ETH to ${recipient}` });
      setRecipient('');
      setAmount('');
    } catch (error) {
      console.error("Error sending transaction:", error);
      setMessage({ type: 'error', text: 'Transaction Failed!' });
    }
  };

  // Function to handle quick payment selection
  const handleQuickPayment = (address: string, title: string) => {
    setRecipient(address);
    setMessage({ type: 'success', text: `Selected ${title} for payment` });
  };

  // Trigger blockchain connection on initial load if not connected
  if (!account) {
    connectBlockchain();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Manual Transfer Form - Kept at top */}
      <Card>
        <CardHeader>
          <CardTitle>Transfer Points</CardTitle>
          <CardDescription>Send Campus Points to another user</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => { e.preventDefault(); sendTransaction(); }} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient</Label>
              <Input
                id="recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Enter recipient's address or select from quick options below"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount to transfer"
                required
                min="1"
              />
            </div>
            <Button type="submit" className="w-full">Transfer</Button>
          </form>
        </CardContent>
        <CardFooter>
          {message && (
            <Alert variant={message.type === 'success' ? 'default' : 'destructive'}>
              {message.type === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
              <AlertTitle>{message.type === 'success' ? 'Success' : 'Error'}</AlertTitle>
              <AlertDescription>{message.text}</AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </Card>

      {/* Quick Payment Options */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Payment Options</CardTitle>
          <CardDescription>Select a service to pay quickly</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {paymentCards.map((card, index) => (
              <div
                key={index}
                className="cursor-pointer group"
                onClick={() => handleQuickPayment(card.address, card.title)}
              >
                <Card className="h-full transition-all duration-200 group-hover:shadow-lg group-hover:scale-105">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={card.src}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{card.description}</p>
                    <p className="text-xs text-gray-400 font-mono truncate">
                      {card.address}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}