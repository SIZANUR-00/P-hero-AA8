import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div><h3 className="text-xl font-bold mb-4">Contact Us</h3><p>Email: info@skillsphere.com</p><p>Phone: +880 1234 567 890</p><p>Address: 123 Learning, Education City</p></div>
          <div><h3 className="text-xl font-bold mb-4">Follow Us</h3><div className="flex space-x-4"><a href="#" className="hover:text-primary transition-colors">Facebook</a><a href="#" className="hover:text-primary transition-colors">Twitter</a><a href="#" className="hover:text-primary transition-colors">LinkedIn</a><a href="#" className="hover:text-primary transition-colors">Instagram</a></div></div>
          <div><h3 className="text-xl font-bold mb-4">Legal</h3><ul className="space-y-2"><li><Link href="#" className="hover:text-primary">Terms & Conditions</Link></li><li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li><li><Link href="#" className="hover:text-primary">Cookie Policy</Link></li></ul></div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400"><p>&copy; 2026 SkillSphere. All rights reserved.</p></div>
      </div>
    </footer>
  )
}
