'use client'

import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card'
import { Badge } from '../../../components/ui/badge'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  GraduationCap,
  Building,
  Edit,
  Camera,
  Save,
  X
} from 'lucide-react'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: 'Arjun Sharma',
    rollNumber: '21CS3045',
    email: 'arjun.sharma@university.edu',
    phone: '+91 9876543210',
    department: 'Computer Science & Engineering',
    year: '3rd Year',
    semester: '6th Semester',
    hostel: 'Hostel Block A',
    roomNumber: 'A-205',
    address: 'Mumbai, Maharashtra',
    dateOfBirth: '2002-05-15',
    bloodGroup: 'B+',
    parentContact: '+91 9876543211',
    profileImage: 'image.png'
  })

  const [editData, setEditData] = useState(profileData)

  const handleEdit = () => {
    setIsEditing(true)
    setEditData(profileData)
  }

  const handleSave = () => {
    setProfileData(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData(profileData)
    setIsEditing(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">Student Profile</h1>
        <p className="text-gray-600">Campus Pay - Digital Payment System</p>
      </div>

      {/* Profile Card */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pb-16">
          <div className="flex justify-end">
            {!isEditing ? (
              <Button 
                onClick={handleEdit}
                variant="secondary" 
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="space-x-2">
                <Button 
                  onClick={handleSave}
                  size="sm"
                  className="bg-green-500 hover:bg-green-600"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button 
                  onClick={handleCancel}
                  variant="secondary" 
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="relative pt-0 pb-8">
          {/* Profile Image */}
          <div className="flex justify-center -mt-12 mb-6">
            <div className="relative">
              <img
                src={isEditing ? editData.profileImage : profileData.profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
              {isEditing && (
                <Button
                  size="sm"
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full p-0 bg-blue-500 hover:bg-blue-600"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Basic Info */}
          <div className="text-center mb-8">
            {isEditing ? (
              <div className="space-y-4 max-w-md mx-auto">
                <Input
                  value={editData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="text-center text-xl font-semibold"
                />
                <Input
                  value={editData.rollNumber}
                  onChange={(e) => handleInputChange('rollNumber', e.target.value)}
                  className="text-center"
                />
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{profileData.name}</h2>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  Roll No: {profileData.rollNumber}
                </Badge>
              </>
            )}
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </h3>
              
              <div className="space-y-3">
                <div>
                  <Label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Label>
                  {isEditing ? (
                    <Input
                      value={editData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      type="email"
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone
                  </Label>
                  {isEditing ? (
                    <Input
                      value={editData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.phone}</p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Date of Birth
                  </Label>
                  {isEditing ? (
                    <Input
                      value={editData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      type="date"
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.dateOfBirth}</p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-600">Blood Group</Label>
                  {isEditing ? (
                    <Input
                      value={editData.bloodGroup}
                      onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.bloodGroup}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Academic Information
              </h3>
              
              <div className="space-y-3">
                <div>
                  <Label className="text-sm font-medium text-gray-600">Department</Label>
                  {isEditing ? (
                    <Input
                      value={editData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.department}</p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-600">Year</Label>
                  {isEditing ? (
                    <Input
                      value={editData.year}
                      onChange={(e) => handleInputChange('year', e.target.value)}
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.year}</p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-600">Semester</Label>
                  {isEditing ? (
                    <Input
                      value={editData.semester}
                      onChange={(e) => handleInputChange('semester', e.target.value)}
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.semester}</p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Hostel
                  </Label>
                  {isEditing ? (
                    <Input
                      value={editData.hostel}
                      onChange={(e) => handleInputChange('hostel', e.target.value)}
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.hostel}</p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-600">Room Number</Label>
                  {isEditing ? (
                    <Input
                      value={editData.roomNumber}
                      onChange={(e) => handleInputChange('roomNumber', e.target.value)}
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.roomNumber}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Additional Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-sm font-medium text-gray-600">Home Address</Label>
                {isEditing ? (
                  <Input
                    value={editData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                ) : (
                  <p className="text-gray-800">{profileData.address}</p>
                )}
              </div>
              
              <div>
                <Label className="text-sm font-medium text-gray-600">Parent Contact</Label>
                {isEditing ? (
                  <Input
                    value={editData.parentContact}
                    onChange={(e) => handleInputChange('parentContact', e.target.value)}
                  />
                ) : (
                  <p className="text-gray-800">{profileData.parentContact}</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-blue-600">Active</div>
          <div className="text-sm text-gray-600">Account Status</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-green-600">3.2</div>
          <div className="text-sm text-gray-600">Current CGPA</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-purple-600">6th</div>
          <div className="text-sm text-gray-600">Current Semester</div>
        </Card>
      </div>
    </div>
  )
}