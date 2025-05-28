// src/components/hashing/RealLifeApplications.js
import React from 'react';

const RealLifeApplications = () => {
    return (
        <div className="content-box">
            <h2>Real-Life Applications of Cryptography Using Double Hashing</h2>
            <p>Examples of how double hashing is applied in cryptography and real-world scenarios.</p>
            <ul>
                <li>
                    <strong>1. Password Hashing:</strong> Double hashing is used to securely store user passwords. When a password is stored, it is first hashed using a cryptographic hash function. Then, an additional layer of hashing (double hashing) adds another level of security to prevent dictionary and rainbow table attacks.
                </li><br />
                <li>
                    <strong>2. Blockchain and Cryptocurrency:</strong> Double hashing is used in blockchain technology for securing transactions. In Bitcoin’s proof-of-work system, the SHA-256 hashing algorithm is applied twice to create the cryptographic link between blocks, ensuring immutability and security of the ledger.
                </li><br />
                <li>
                    <strong>3. Digital Signatures:</strong> In cryptographic protocols, double hashing is used for generating digital signatures. It enhances the strength of the encryption, ensuring that both the data and its integrity remain intact during transmission.
                </li><br />
                <li>
                    <strong>4. Secure File Verification:</strong> Double hashing is applied to verify the integrity of files during downloads or transmission. It ensures that even if attackers attempt to modify the file, both the file and its verification hash must match, providing double security.
                </li><br />
                <li>
                    <strong>5. Two-Factor Authentication (2FA):</strong> Many systems use hashing algorithms as part of their authentication mechanism. By applying double hashing to sensitive data, such as tokens, the system ensures an extra layer of protection against potential attacks.
                </li><br />
            </ul>
        </div>
    );
};

export default RealLifeApplications;




